use std::{path::Path, future::Pending};

use ahash::HashMap;
use slotmap::SlotMap;

pub struct TextureHandleManaged;

pub struct TextureData {
    data: std::sync::Arc<[u8]>,
    format: wgpu::TextureFormat,
    size: wgpu::Extent3d,
}

struct PendingUpload {
    handle: TextureHandleManaged,
    payload: TextureData,
}

struct TextureManager {
    pending_uploads: Vec<PendingUpload>,

    gpu_textures: SlotMap<>,
    pending_uploads: SlotMap<>,
    known_texture_files: HashMap<Path, >
}

impl TextureManager {
    /// Returns a texture handle for a
    pub fn single_srgba_color(color: [u8; 4]) -> TextureHandleManaged {
        add_texture(todo)
    }

    pub fn add_texture() -> TextureHandleManaged;


    pub(crate) frame_maintanenace() {
        // TODO: upload/load pending textures
    }

    pub(crate) resolve(handle: TextureHandleManaged) -> Result<StrongTextureHandle>;
}


// Mesh
    // [only owner of] buffer data
    // [shared owner of] texture data

// GPUMesh
    // gpu buffers
    // gpu textures

