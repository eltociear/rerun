mod generic_skybox;
pub use generic_skybox::GenericSkyboxDrawData;

mod lines;
pub use lines::{gpu_data::LineVertex, LineBatchInfo, LineDrawData, LineStripFlags, LineStripInfo};

mod point_cloud;
pub use point_cloud::{
    PointCloudBatchInfo, PointCloudDrawData, PointCloudDrawDataError, PointCloudVertex,
};

mod test_triangle;
pub use test_triangle::TestTriangleDrawData;

mod rectangles;
pub use rectangles::{RectangleDrawData, TextureFilterMag, TextureFilterMin, TexturedRect};

mod mesh_renderer;
pub(crate) use mesh_renderer::MeshRenderer;
pub use mesh_renderer::{MeshDrawData, MeshInstance};

pub mod compositor;

use crate::{
    context::{RenderContext, SharedRendererData},
    wgpu_resources::WgpuResourcePools,
    FileResolver, FileSystem,
};

/// GPU sided data used by a [`Renderer`] to draw things to the screen.
///
/// Valid only for the frame in which it was created (typically uses temp allocations!).
/// TODO(andreas): Add a mechanism to validate this.
pub trait DrawData {
    type Renderer: Renderer<RendererDrawData = Self> + Send + Sync;
}

/// A Renderer encapsulate the knowledge of how to render a certain kind of primitives.
///
/// It is an immutable, long-lived datastructure that only holds onto resources that will be needed
/// for each of its [`Renderer::draw`] invocations.
/// Any data that might be different per specific [`Renderer::draw`] invocation is stored in [`DrawData`].
pub trait Renderer {
    type RendererDrawData: DrawData;

    fn create_renderer<Fs: FileSystem>(
        shared_data: &SharedRendererData,
        pools: &mut WgpuResourcePools,
        device: &wgpu::Device,
        resolver: &mut FileResolver<Fs>,
    ) -> Self;

    // TODO(andreas): Some Renderers need to create their own passes, need something like this for that.
    // TODO(andreas): The harder part is that some of those might need to share them with others! E.g. Shadow Mapping.
    //                  (so far, all rendering happens directly to the output)

    /// Called once per phase given by [`Renderer::participated_phases`].
    fn draw<'a>(
        &self,
        phase: DrawPhase,
        pools: &'a WgpuResourcePools,
        pass: &mut wgpu::RenderPass<'a>,
        draw_data: &Self::RendererDrawData,
    ) -> anyhow::Result<()>;

    /// Combination of flags indicating in which phases [`Renderer::draw`] should be called.
    fn participated_phases() -> &'static [DrawPhase] {
        &[DrawPhase::Opaque]
    }
}

/// Determines a (very rough) order of rendering.
///
/// Currently we do not support sorting *within* a rendering phase!
///
/// Drawbacks:
/// * no front-to-back order for opaque, meaning potentially lot of (discarded) overdraw
/// * no back-to-front order for transparent, meaning rendering artifacts
///   until we implement some form of order independent transparency
///
/// Advantages:
/// * super simple, less data to transfer & compute (don't need to know distances)
///     * allows fast path from database to gpu data, close to no data examination needed
/// * faster in some cases
/// * best possible batching, we invoke every renderer only once(ish) [`Renderer`],
///     meaning minimal stage changes without the need for any sorting
#[derive(Clone, Copy, Hash, PartialEq, Eq)]
pub enum DrawPhase {
    /// Opaque objects, performing reads/writes to the depth buffer.
    ///
    /// Typically they are order independent, so everything uses this same index.
    Opaque = 0,

    /// Background, rendering where depth wasn't written.
    Background = 1,

    /// Transparent objects. No depth buffer writes expected.
    Transparent = 2,
}
