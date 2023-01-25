window.BENCHMARK_DATA = {
  "lastUpdate": 1674634864531,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b5f4f32a59b1c5eeef25da0b82ee139297bea9a",
          "message": "Fix deadlock when flushing messages (#843)\n\n* Drop msgs on their own thread\r\n\r\n* Relesae the GIL before flush\r\n\r\n* Better expect msg\r\n\r\n* clippy",
          "timestamp": "2023-01-20T13:56:37+01:00",
          "tree_id": "64fef631611fb168c97315def96696584183b2f7",
          "url": "https://github.com/rerun-io/rerun/commit/3b5f4f32a59b1c5eeef25da0b82ee139297bea9a"
        },
        "date": 1674220172509,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 568925,
            "range": "± 4770",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3918e839b072cd1c0a0a9b9822754425fb815363",
          "message": "Selected things are now highlighted (#838)\n\n* Selected things are now highlighted\r\n* flat shaded lines for 2d",
          "timestamp": "2023-01-20T14:15:52+01:00",
          "tree_id": "4f4cf8cf232184958f11a804969e82f19be21747",
          "url": "https://github.com/rerun-io/rerun/commit/3918e839b072cd1c0a0a9b9822754425fb815363"
        },
        "date": 1674220681157,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562857,
            "range": "± 3790",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6bb41f569a97d6748a6dbff40ca8834e7075a6b",
          "message": "Add profiling scopes to point3d scene population (#849)",
          "timestamp": "2023-01-20T14:31:14+01:00",
          "tree_id": "f683180d51a21e883d949497c68c7ec5eb2ecc22",
          "url": "https://github.com/rerun-io/rerun/commit/e6bb41f569a97d6748a6dbff40ca8834e7075a6b"
        },
        "date": 1674221608323,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581575,
            "range": "± 4003",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "931d059ce6b4da760d6671710bcabbbb4599977a",
          "message": "Native rerun-agnostic analytics SDK (#819)\n\n* bootstrap and identifying the gazillon edge cases\r\n\r\n* getting... somewhere\r\n\r\n* why is this in xdg_config\r\n\r\n* all the CLI stuff\r\n\r\n* first take at a disclaimer\r\n\r\n* stuff\r\n\r\n* persistent attributes\r\n\r\n* starting to split/abstract pipelines and sinks\r\n\r\n* handling historical data\r\n\r\n* default props and some random cleanup\r\n\r\n* proper handling of unexpected catchup thread shutdown\r\n\r\n* wip\r\n\r\n* cleanin up the noise\r\n\r\n* more cleanup, more error handling\r\n\r\n* format\r\n\r\n* get rid of openssl\r\n\r\n* dealing with denied deps\r\n\r\n* self review\r\n\r\n* first copy pass and add 'details' command\r\n\r\n* todo\r\n\r\n* addressing PR comments\r\n\r\n* missed that one",
          "timestamp": "2023-01-20T14:37:22+01:00",
          "tree_id": "319d0162d26bc279608b0cff2dc9e4aea0dbd8e3",
          "url": "https://github.com/rerun-io/rerun/commit/931d059ce6b4da760d6671710bcabbbb4599977a"
        },
        "date": 1674221997212,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 561246,
            "range": "± 8179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cabe0ada7b3d1f17e4ff8b2b5f55debb9ba9ffa",
          "message": "Improve selection history UI (#848)\n\n* Document SelectionHistory\r\n* Nice selection history UI: drop-down on right-clicking buttons\r\n* Don't serialize selection history\r\n* Store one selection history per recording\r\n* Fix potential out-of-bound in selection history\r\n* Simplify selection history pruning\r\n* Keep the correct index",
          "timestamp": "2023-01-20T15:00:28+01:00",
          "tree_id": "411222a46d2ab99d4d1974959e7f2726724bfde2",
          "url": "https://github.com/rerun-io/rerun/commit/4cabe0ada7b3d1f17e4ff8b2b5f55debb9ba9ffa"
        },
        "date": 1674223422047,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565637,
            "range": "± 6194",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d3a8759ccb5ff03d1cd4456cf329a8ccc4e43ac",
          "message": "Slightly cleaner error handling for AddrInUse (#847)\n\n* Slightly cleaner error handling for AddrInUse\r\n* Return error code consistently on failure",
          "timestamp": "2023-01-20T15:26:21+01:00",
          "tree_id": "352fbb7e33ad2eaa4a9b9674768a8170e679d32d",
          "url": "https://github.com/rerun-io/rerun/commit/5d3a8759ccb5ff03d1cd4456cf329a8ccc4e43ac"
        },
        "date": 1674224906786,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571825,
            "range": "± 7047",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9004877ab970d4bfcaeb725b2c14921b88dd245",
          "message": "Visible history all the types (#852)\n\n* Visible history all the types\r\n* Fix image layering on arrow",
          "timestamp": "2023-01-20T15:40:10+01:00",
          "tree_id": "b40ea11090229ffb94fd4e74a72688ccbab34b1b",
          "url": "https://github.com/rerun-io/rerun/commit/c9004877ab970d4bfcaeb725b2c14921b88dd245"
        },
        "date": 1674225739585,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 564991,
            "range": "± 3187",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee29c1485487d6ae0fcc287c13c953494cbe90f3",
          "message": "Convert F16 -> F32 on log (#855)",
          "timestamp": "2023-01-20T16:06:47+01:00",
          "tree_id": "6b64039625c951f81c50469141bf9a3c3ff02720",
          "url": "https://github.com/rerun-io/rerun/commit/ee29c1485487d6ae0fcc287c13c953494cbe90f3"
        },
        "date": 1674227412429,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562405,
            "range": "± 1331",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52feae25df85eecb1dc055c4ab28f1054df27632",
          "message": "Patch meter into ArrowTensor for the time being (#858)\n\n* Patch meter into ArrowTensor for the time being\r\n\r\n* Clarify meter constructions in tensor.py\r\n\r\n* cranky",
          "timestamp": "2023-01-20T17:30:47+01:00",
          "tree_id": "839dcb96cc9f1808761d61e2c0b40d9e3a333f3b",
          "url": "https://github.com/rerun-io/rerun/commit/52feae25df85eecb1dc055c4ab28f1054df27632"
        },
        "date": 1674232526875,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571511,
            "range": "± 2171",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff7ea25e4514fc29ad71447e43e8082508ba0ae0",
          "message": "move selection state into dedicated struct (#857)",
          "timestamp": "2023-01-20T17:58:13+01:00",
          "tree_id": "3f5385c28730ac40f284e0c3e3fc656cfd8f2003",
          "url": "https://github.com/rerun-io/rerun/commit/ff7ea25e4514fc29ad71447e43e8082508ba0ae0"
        },
        "date": 1674234022731,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573850,
            "range": "± 2286",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e951da60d4542076c890bd976c4df1e3f18f5740",
          "message": "Very minor code cleanup (#863)\n\n* file rename: context -> annotation_context.rs\r\n\r\n* Better variable naming\r\n\r\n* Fix wrong hello_world app id",
          "timestamp": "2023-01-20T18:55:51+01:00",
          "tree_id": "236bdefad323ad38b1c59fae303a35f506c60ea3",
          "url": "https://github.com/rerun-io/rerun/commit/e951da60d4542076c890bd976c4df1e3f18f5740"
        },
        "date": 1674237566768,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 578514,
            "range": "± 2190",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70600a2684b010954962f11714b8531c07669444",
          "message": "Make arrow the default storage (#823)\n\n* Make Arrow the default and update changelog\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil@rerun.io>",
          "timestamp": "2023-01-20T19:52:11+01:00",
          "tree_id": "88b39a2e1a55c645b6cf4fef341876d7192bf236",
          "url": "https://github.com/rerun-io/rerun/commit/70600a2684b010954962f11714b8531c07669444"
        },
        "date": 1674240916095,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 560191,
            "range": "± 4432",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7343f41232cf65997d4c0d7f5f138c956a665567",
          "message": "Move Viewport/Event Log buttons to the \"View\" menu (#864)\n\n* Move Viewport/Event Log buttons to the \"View\" menu\r\n* Remove extra separator before the memory use\r\n* Remove unnecessary \"(none)\" label",
          "timestamp": "2023-01-20T23:53:20+01:00",
          "tree_id": "871e1ac1c2541458f4273acb797cb07800459f99",
          "url": "https://github.com/rerun-io/rerun/commit/7343f41232cf65997d4c0d7f5f138c956a665567"
        },
        "date": 1674255327843,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 569462,
            "range": "± 3088",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b94edb973db58b7e6253ed3a167bbec36994ac4c",
          "message": "Left-align headers, improve blueprint view (#856)\n\n* Left-align headers\r\n\r\n* Remove background color from small icon buttons\r\n\r\n* Simplify blueprint view\r\n\r\n* Better function name\r\n\r\n* Put blueprint and buttons on same row\r\n\r\n* clippy fix\r\n\r\n* Move selection undo/redo arrows to the right",
          "timestamp": "2023-01-22T17:32:37+01:00",
          "tree_id": "c097ee61905b8f355fea1bfafce0a755cafdb232",
          "url": "https://github.com/rerun-io/rerun/commit/b94edb973db58b7e6253ed3a167bbec36994ac4c"
        },
        "date": 1674405394462,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 567444,
            "range": "± 6037",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf5e622834c9fffc656fa5679333cf828710fb16",
          "message": "Join threads when client is being dropped (#876)",
          "timestamp": "2023-01-23T15:44:23+01:00",
          "tree_id": "078eb6cb478a8104e8a3a42241965d9133e4584c",
          "url": "https://github.com/rerun-io/rerun/commit/bf5e622834c9fffc656fa5679333cf828710fb16"
        },
        "date": 1674485201956,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573849,
            "range": "± 5199",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7cce91b63abf2df4ba405ffbb1bd259f6663e71",
          "message": "simplify hover/select highlight distinction & wire up link buttons to hover state (#859)\n\n* wired up egui link buttons to hover state\r\n* simplify hover/select highlight logic by defining highlight types on a higher level",
          "timestamp": "2023-01-23T16:18:31+01:00",
          "tree_id": "6c3d34436149dd509f8a0da493930601ebd79f69",
          "url": "https://github.com/rerun-io/rerun/commit/e7cce91b63abf2df4ba405ffbb1bd259f6663e71"
        },
        "date": 1674487285415,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 564623,
            "range": "± 7170",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92416c287ea0f0c6e2d5bf227003cfa09352cb83",
          "message": "tweak point cloud point gradient to be less aggressive (#888)",
          "timestamp": "2023-01-23T20:46:29+01:00",
          "tree_id": "ab8fd6f18accb106adebefd9b5a1e54f80ea13ab",
          "url": "https://github.com/rerun-io/rerun/commit/92416c287ea0f0c6e2d5bf227003cfa09352cb83"
        },
        "date": 1674503541186,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562695,
            "range": "± 2070",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3513a502c0e91a3b767ea0fa568ceb38465a5171",
          "message": "re_viewer: analytics integration (native only) (#839)\n\n* bootstrappin'\r\n\r\n* record 'em\r\n\r\n* dealing with tokio/reqwest shenanigans\r\n\r\n* dead code\r\n\r\n* hashing appid\r\n\r\n* start_method will come later, too painful for my tired mind\r\n\r\n* cleanup\r\n\r\n* some more stuff in 'analytics details'\r\n\r\n* always send update metadata\r\n\r\n* self-review\r\n\r\n* flake\r\n\r\n* add a newline at the end of file\r\n\r\n* hard gate everything web so we can move on before i completely lose it\r\n\r\n* xxx\r\n\r\n* analytics in debug only\r\n\r\n* xxx\r\n\r\n* git hash and cleaned up target triple\r\n\r\n* deterministic hashing\r\n\r\n* safer/less-error-prone way of identifying official examples\r\n\r\n* rebuild when HEAD changes\r\n\r\n* make the app path thing even nicererer for end users\r\n\r\n* happy pylint\r\n\r\n* ??? I did _not_ touch that\r\n\r\n* the linter is just having fun\r\n\r\n* shouldn't need pathlib no more?\r\n\r\n* use a sentinel file for official example detection\r\n\r\n* track git dirtiness\r\n\r\n* .rerun -> .rerun_examples",
          "timestamp": "2023-01-24T09:03:00+01:00",
          "tree_id": "8963ab2e45281af8622d36e33dea5289f76780d9",
          "url": "https://github.com/rerun-io/rerun/commit/3513a502c0e91a3b767ea0fa568ceb38465a5171"
        },
        "date": 1674547565902,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 575676,
            "range": "± 2243",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08ad9f3876d58bbccd6f824a5dd34a8be399d243",
          "message": "Fix scale for 3D objects under pinhole camera (#886)",
          "timestamp": "2023-01-24T09:53:31+01:00",
          "tree_id": "b73d9ba3c8c17d3c83e75e0a6e5e8d3658d36c85",
          "url": "https://github.com/rerun-io/rerun/commit/08ad9f3876d58bbccd6f824a5dd34a8be399d243"
        },
        "date": 1674550548916,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576989,
            "range": "± 2954",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c3ab8c1cdd2c598bbbae2d27176649dc3526572",
          "message": "Tweak selection effects (#890)\n\n* smaller AUTO_LARGE size\r\n* selection highlight now interpolates toward highlight instead of taking over highlight color",
          "timestamp": "2023-01-24T10:55:16+01:00",
          "tree_id": "4410eb825717cc92ff0288f8fce933425682c69d",
          "url": "https://github.com/rerun-io/rerun/commit/1c3ab8c1cdd2c598bbbae2d27176649dc3526572"
        },
        "date": 1674554313818,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562868,
            "range": "± 3675",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8efbbd16cd50c00f9f4c88c8ab2922e4ec1d5b23",
          "message": "Add some puffin profiling scopes (#891)",
          "timestamp": "2023-01-24T11:36:40+01:00",
          "tree_id": "a684655ec35d4869dfd9798dc6a95f7df684a274",
          "url": "https://github.com/rerun-io/rerun/commit/8efbbd16cd50c00f9f4c88c8ab2922e4ec1d5b23"
        },
        "date": 1674556871162,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 561141,
            "range": "± 7703",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6824669ba11a7e83a77b6cb036f11528033bce50",
          "message": "selecting/hovering groups causes now select/hover highlight (#893)",
          "timestamp": "2023-01-24T11:47:21+01:00",
          "tree_id": "99159fb6b3c6c0b72ebfd02fbbfa0c0252d8202a",
          "url": "https://github.com/rerun-io/rerun/commit/6824669ba11a7e83a77b6cb036f11528033bce50"
        },
        "date": 1674557396404,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552629,
            "range": "± 7221",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de9cfe64b77d5bf17f18ad5da44b38e69f056be6",
          "message": "Link to data blueprint / usages in Blueprint panel (#881)\n\n* fix what-is-selected-ui changes in buttons\r\n* no selected components are no longer an error\r\n* unify instance & object path buttons. show blueprint links when no space view context is known\r\n* object paths now also refer to where they show up",
          "timestamp": "2023-01-24T11:53:37+01:00",
          "tree_id": "8263e91e6d064af11690ede4e8b38eb529feb913",
          "url": "https://github.com/rerun-io/rerun/commit/de9cfe64b77d5bf17f18ad5da44b38e69f056be6"
        },
        "date": 1674557797676,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 557094,
            "range": "± 5993",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f62abd4e3992b7811f72c06fb43edaa944d41b43",
          "message": "New rerun menu (#892)\n\n* Turn off background for buttons, dragvalues, comboboxes\r\n\r\n* Use a proper icon for the \"Add new blueprint\" button\r\n\r\n* Rearrange buttons in timeline panel\r\n\r\n* Turn on button-frames (when hovered)\r\n\r\n* Unify all menus under a common Rerun menu\r\n\r\n* Inline the old \"File\" and \"View\" menus under the new rerun menu\r\n\r\n* Tweak wording on menu options\r\n\r\n* Make the menu buttons look better\r\n\r\n* Wider default width of selection view\r\n\r\n* Tidy-up tensor blueprint view\r\n\r\n* Re-arrange the time control buttons\r\n\r\n* Update egui\r\n\r\n* lint fix\r\n\r\n* spelling\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* Remove rerun.io logo/link from top bar\r\n\r\n* Fix spacing in rerun menu\r\n\r\n* Make Rerun menu logo smaller\r\n\r\n* Fix warning in web build\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-01-24T12:54:49+01:00",
          "tree_id": "0c18714786abb424892318d12d703be3a1d76071",
          "url": "https://github.com/rerun-io/rerun/commit/f62abd4e3992b7811f72c06fb43edaa944d41b43"
        },
        "date": 1674561424681,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 570001,
            "range": "± 2927",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56f56b7286aed596634d773c3c4b0efdc64ddce6",
          "message": "added the actual sentinel file............... (#896)",
          "timestamp": "2023-01-24T09:31:43-05:00",
          "tree_id": "66d88fb466c207c7fb549bc1627881cbfb65bc63",
          "url": "https://github.com/rerun-io/rerun/commit/56f56b7286aed596634d773c3c4b0efdc64ddce6"
        },
        "date": 1674571018695,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573169,
            "range": "± 2477",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001b8df21c880abe79ed716919cb1b63349ab556",
          "message": "Fix timeless data not correctly showing up in timeline. (#899)\n\nInstead of adding timeless data to all timelines, the time panel is now more aware of timeless data and takes it into account.",
          "timestamp": "2023-01-24T17:51:21+01:00",
          "tree_id": "7b4706ec42f03f1d9eefe5970d0d7396972a3481",
          "url": "https://github.com/rerun-io/rerun/commit/001b8df21c880abe79ed716919cb1b63349ab556"
        },
        "date": 1674579224705,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 584411,
            "range": "± 20860",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5aca22b884135b68ecf91af76fb1776e896857e1",
          "message": "Fix invisible timeline handle and bad objectron example names (#902)\n\n* Fix timeline cursor invisible on hover\r\n* better object names in objectron",
          "timestamp": "2023-01-24T18:35:25+01:00",
          "tree_id": "3ac7fd452f143dbd2b9966b9bc3f3a425dacdfe8",
          "url": "https://github.com/rerun-io/rerun/commit/5aca22b884135b68ecf91af76fb1776e896857e1"
        },
        "date": 1674581861706,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571248,
            "range": "± 12819",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil@rerun.io",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "339575eeca465daec25b5a91ccc5e364e4695103",
          "message": "Hide the top-bar cpu/memory/latency labels in release builds (#897)\n\n* Hide the top-bar cpu/memory/latency labels in release builds\r\n\r\n* Tweak rerun menu button height so not to expand the top bar\r\n\r\n* Make the minimum app size high enough to fit rerun menu\r\n\r\n* Tweak selection panel width",
          "timestamp": "2023-01-24T23:09:28+01:00",
          "tree_id": "ae61cf5a4463dcd4022c2db5e19112e4a5e7c0f4",
          "url": "https://github.com/rerun-io/rerun/commit/339575eeca465daec25b5a91ccc5e364e4695103"
        },
        "date": 1674598409497,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 585380,
            "range": "± 2507",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70a77b25891d2b6cffc7b3c372d681778c4c5c3a",
          "message": "Release the session lock while we're building the arrow chunks (#908)\n\n* Release the session lock while we're building the arrow chunks\r\n\r\n* Simple example of logging from multiple threads",
          "timestamp": "2023-01-24T20:50:01-05:00",
          "tree_id": "47a096b25468818c78252f7a560c7de0b01c9647",
          "url": "https://github.com/rerun-io/rerun/commit/70a77b25891d2b6cffc7b3c372d681778c4c5c3a"
        },
        "date": 1674611649372,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562934,
            "range": "± 5528",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d6aacf4fa64cf0b42fe5cdbc6672026c44352ea",
          "message": "Space view generation heuristics now always look at latest available data. (#904)\n\nBefore they'd look at the current data, causing different space views when resetting the blueprint e.g. while looking at timeless data",
          "timestamp": "2023-01-25T09:16:59+01:00",
          "tree_id": "11f7e8ca3c24158698cf67a5f7ad103d8e9de15b",
          "url": "https://github.com/rerun-io/rerun/commit/7d6aacf4fa64cf0b42fe5cdbc6672026c44352ea"
        },
        "date": 1674634863377,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 580787,
            "range": "± 2948",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}