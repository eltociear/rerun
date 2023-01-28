window.BENCHMARK_DATA = {
  "lastUpdate": 1674919903034,
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
          "id": "dc26406342888bb53616852287b1938489271583",
          "message": "Partial revert of #904 to fix temporal transforms (#930)",
          "timestamp": "2023-01-26T00:09:56+01:00",
          "tree_id": "b229bd95507370c2b643ca34f7723b021f3f0106",
          "url": "https://github.com/rerun-io/rerun/commit/dc26406342888bb53616852287b1938489271583"
        },
        "date": 1674688326318,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 561644,
            "range": "± 4156",
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
          "id": "28045379c2259d15132f8ac79ae72bebe7b5e0da",
          "message": "Add button for following the latest data (#921)\n\n* Introduce PlayState\r\n\r\n* Add button to follow latest data\r\n\r\n* Tweak logic of where current time cursor is in the text log ui\r\n\r\n* Space toggles following/paused if following\r\n\r\n* Better handling of looping vs following\r\n\r\n* doclink fix",
          "timestamp": "2023-01-26T09:03:59+01:00",
          "tree_id": "50c682eedc971c5d64e98b7037dbebf496f81bb6",
          "url": "https://github.com/rerun-io/rerun/commit/28045379c2259d15132f8ac79ae72bebe7b5e0da"
        },
        "date": 1674720374360,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571837,
            "range": "± 16508",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niko@grapic.co",
            "name": "Nikolaus West",
            "username": "nikolausWest"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ddc23ae6073bddb6a15c2b019f795f0137609f2",
          "message": "Increase chunk size for dataset download (#929)",
          "timestamp": "2023-01-26T09:27:39+01:00",
          "tree_id": "7d8cec973012cdedb5e82b68391960c6d4a61847",
          "url": "https://github.com/rerun-io/rerun/commit/8ddc23ae6073bddb6a15c2b019f795f0137609f2"
        },
        "date": 1674721787704,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576649,
            "range": "± 2751",
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
          "id": "f7941f90999e8427fae68367e0361c10e8046882",
          "message": "re_analytics: support for persistent metadata props (#931)\n\n* support for persistent metadata props\r\n\r\n* keeping the old web thing alive... for now\r\n\r\n* preemptively pleasing cranky",
          "timestamp": "2023-01-26T10:03:28+01:00",
          "tree_id": "0866923eeef5faf246e63b46780ff51af4b9c61d",
          "url": "https://github.com/rerun-io/rerun/commit/f7941f90999e8427fae68367e0361c10e8046882"
        },
        "date": 1674723943247,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 574815,
            "range": "± 2179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niko@grapic.co",
            "name": "Nikolaus West",
            "username": "nikolausWest"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4263a61428da56a65df14752f76f35b390e9b3a5",
          "message": "COLMAP example (#928)\n\n\r\n* Fix colmap example (mainly quaternion format)\r\n\r\n* Update type hint for log_points\r\n\r\n* colmap example works as it should\r\n\r\n* Add dataset downloading\r\n\r\n* typing and formatting\r\n\r\n* Fix typing in api_tests.py\r\n\r\n* Add example script boilerplate\r\n\r\n* Remove the script helper\r\n\r\n* Remove all the rerun.script exports\r\n\r\n* Increase chunk size for dataset download\r\n\r\n* Add requirements.txt\r\n\r\n* Add identifiers add option not to filter data\r\n\r\nCo-authored-by: John Hughes <john@rerun.io>",
          "timestamp": "2023-01-26T10:40:42+01:00",
          "tree_id": "9aa894eec2f63427e7e4cdbdb1f26e590eb1e5cb",
          "url": "https://github.com/rerun-io/rerun/commit/4263a61428da56a65df14752f76f35b390e9b3a5"
        },
        "date": 1674726322756,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 579288,
            "range": "± 2879",
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
          "id": "577b596fa02f378c62a43b5d8eac857d218f2d34",
          "message": "Refactor space view generation (#923)\n\nRewrite space view generation to a two step process\r\nNo longer need to populate a scene to determine space views.",
          "timestamp": "2023-01-26T16:08:11+01:00",
          "tree_id": "4a73dfcd1fbf378e18f595c71aab8e7235ad479d",
          "url": "https://github.com/rerun-io/rerun/commit/577b596fa02f378c62a43b5d8eac857d218f2d34"
        },
        "date": 1674746265219,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565445,
            "range": "± 1781",
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
          "id": "8d3d3838197cb18e55db00c3a0a52848eb31eced",
          "message": "Don't block on flush if the TCP connection to the viewer is disconnected (#926)\n\n* Introduce quit_if_disconnected to allow messages to be dropped\r\n* Avoid confusing flush messages from the spawned rerun viewer",
          "timestamp": "2023-01-26T16:45:42+01:00",
          "tree_id": "ab4183b38205d8adc7512b765028dea24ef86c93",
          "url": "https://github.com/rerun-io/rerun/commit/8d3d3838197cb18e55db00c3a0a52848eb31eced"
        },
        "date": 1674748066822,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 574857,
            "range": "± 2019",
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
          "id": "55ecc3542c47ab988883a4b78c17f4dd3c2da8a5",
          "message": "time series and bar charts back to a working state (#937)\n\n* add missing arrow category for time series\r\n\r\n* time series and bar charts working once again\r\n\r\n* self review",
          "timestamp": "2023-01-26T17:03:20+01:00",
          "tree_id": "778b1407078af73e347b5d7d2411de1c5170ee6c",
          "url": "https://github.com/rerun-io/rerun/commit/55ecc3542c47ab988883a4b78c17f4dd3c2da8a5"
        },
        "date": 1674749127007,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 569213,
            "range": "± 2354",
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
          "id": "e8e866b3a677293556962b094b70472e476dd6b9",
          "message": "Remove classic scene parts (#936)\n\n* remove classic scene parts\r\n* remove Tensor Arrow/Classic variants",
          "timestamp": "2023-01-26T17:06:03+01:00",
          "tree_id": "020427f3fca7eb85ac8f9954a8267fe002ecdff4",
          "url": "https://github.com/rerun-io/rerun/commit/e8e866b3a677293556962b094b70472e476dd6b9"
        },
        "date": 1674749341389,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 564749,
            "range": "± 1745",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niko@grapic.co",
            "name": "Nikolaus West",
            "username": "nikolausWest"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b0142c14feaa7fad0a2a728f34eafe1be2d8f7fb",
          "message": "Clarify analytics welcome message (#947)",
          "timestamp": "2023-01-26T22:39:54+01:00",
          "tree_id": "61418d9d145de44052caa445a3233f75e8c4a31e",
          "url": "https://github.com/rerun-io/rerun/commit/b0142c14feaa7fad0a2a728f34eafe1be2d8f7fb"
        },
        "date": 1674769439981,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 567726,
            "range": "± 2034",
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
          "id": "c90f23faaafb0f820e254fe34783cef544e86904",
          "message": "sunset classic plots (#939)",
          "timestamp": "2023-01-27T08:06:10+01:00",
          "tree_id": "12a86e7d3be257e0ca4d9f7c57d2a62140032978",
          "url": "https://github.com/rerun-io/rerun/commit/c90f23faaafb0f820e254fe34783cef544e86904"
        },
        "date": 1674803435298,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 584841,
            "range": "± 6889",
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
          "id": "fad2d296713ffb5bae4792ba37a69c7dafc0a567",
          "message": "we got spawn_and_connect now! (#943)",
          "timestamp": "2023-01-27T08:20:30+01:00",
          "tree_id": "c18f69988693e920a18e2aeffbb58b547dc85fca",
          "url": "https://github.com/rerun-io/rerun/commit/fad2d296713ffb5bae4792ba37a69c7dafc0a567"
        },
        "date": 1674804162080,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 567472,
            "range": "± 1750",
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
          "id": "ae81c6a02f4a9a2e4b6e82aa7fb9f864c16c02c8",
          "message": "Optimize texture padding (#932)\n\n* Add a couple of profiling scopes to the texture creation\r\n\r\n* Optimize texture padding\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-01-27T08:40:04+01:00",
          "tree_id": "eef0ee3fb76678b127ec85d4ec5d9423023e3e98",
          "url": "https://github.com/rerun-io/rerun/commit/ae81c6a02f4a9a2e4b6e82aa7fb9f864c16c02c8"
        },
        "date": 1674805466717,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 566539,
            "range": "± 2284",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "niko@grapic.co",
            "name": "Nikolaus West",
            "username": "nikolausWest"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d07e665fd4c9159d26de37954e5c6c1952464c6",
          "message": "Add segmentation map to pose tracking example (#948)\n\n* Add segmentation map to pose tracking example\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil@rerun.io>",
          "timestamp": "2023-01-27T09:22:41+01:00",
          "tree_id": "4a49ccaae3301d72442b17c056ea1eda348edd0f",
          "url": "https://github.com/rerun-io/rerun/commit/1d07e665fd4c9159d26de37954e5c6c1952464c6"
        },
        "date": 1674807888786,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 570600,
            "range": "± 1601",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marten@martenbjork.com",
            "name": "Marten Bjork",
            "username": "martenbjork"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a0e8a66c5d317d5366afd4e679828d30881784a",
          "message": "Add code examples to rerun repo (#950)\n\n* Add code examples to rerun repo\r\n\r\n* Add missing dir name\r\n\r\n* Remove old files",
          "timestamp": "2023-01-27T09:25:14+01:00",
          "tree_id": "43c36dcde06fb06c8bbd4288c9dd586ec55228e5",
          "url": "https://github.com/rerun-io/rerun/commit/9a0e8a66c5d317d5366afd4e679828d30881784a"
        },
        "date": 1674808092963,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576741,
            "range": "± 1732",
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
          "id": "3ec2c3b5b690dcdae2049f2b5e747c2723bce06f",
          "message": "Fix space views duplicating on startup from script. (#946)\n\nHeuristic didn't realize that the space views shown are \"more powerful\" (seen more objects) than the ones it would propose",
          "timestamp": "2023-01-27T10:13:13+01:00",
          "tree_id": "99d5590f0d77c972ad7d72e3452d336a2a2f83ae",
          "url": "https://github.com/rerun-io/rerun/commit/3ec2c3b5b690dcdae2049f2b5e747c2723bce06f"
        },
        "date": 1674810922104,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576579,
            "range": "± 1756",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marten@martenbjork.com",
            "name": "Marten Bjork",
            "username": "martenbjork"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6aa27af163f8eda46980c7a61a3d56e2249cfa47",
          "message": "Change markdown structure (#952)",
          "timestamp": "2023-01-27T10:33:38+01:00",
          "tree_id": "69ba52e4739aed641f55b85f4347794463ed548d",
          "url": "https://github.com/rerun-io/rerun/commit/6aa27af163f8eda46980c7a61a3d56e2249cfa47"
        },
        "date": 1674812168529,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 570112,
            "range": "± 15240",
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
          "id": "f9ba39c02b9d14d5714ee40d8d80647f370ca2f9",
          "message": "re_datastore: puffin probes! (#942)\n\n* instrumenting meta APIs\r\n\r\n* instrumenting read APIs\r\n\r\n* instrument write APIs\r\n\r\n* instrument polars APIs\r\n\r\n* puffin native-only macros\r\n\r\n* native-only puffin",
          "timestamp": "2023-01-27T10:47:19+01:00",
          "tree_id": "14d4cf0404afda3e3668c3e9eead56f37e6468e3",
          "url": "https://github.com/rerun-io/rerun/commit/f9ba39c02b9d14d5714ee40d8d80647f370ca2f9"
        },
        "date": 1674812969731,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 578940,
            "range": "± 2197",
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
          "id": "c7f10b848810d227c7613a74d52e60a773448005",
          "message": "Improve the blueprint tree looks (#938)\n\n* Improve the blueprint tree looks\r\n\r\n* Disabled and invisible rows are now dimmer\r\n* Only show visibility button on hover\r\n* Switch visibility button to a toggle-switch\r\n\r\n* Add icon infront of data blueprints too for consistency\r\n\r\n* fix TODO formatting\r\n\r\n* lint.py: Ignore the rust analyzer target directory\r\n\r\n* Get Response back\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-01-27T13:50:40+01:00",
          "tree_id": "082c2adcab39a242940a23e566d4d6974e9988fd",
          "url": "https://github.com/rerun-io/rerun/commit/c7f10b848810d227c7613a74d52e60a773448005"
        },
        "date": 1674823966937,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562232,
            "range": "± 3746",
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
          "id": "14d0ec56d231cbc09a9c927f742535faf544ef98",
          "message": "Detangle spaceinfo from transform cache (#945)\n\n* transform cache no longer know about space info\r\n* rename SpacesInfo to SpaceInfoCollection\r\n* no longer use transform cache for populating space views\r\n* space info can now give reachability information",
          "timestamp": "2023-01-27T14:46:19+01:00",
          "tree_id": "618a83240c841061d88d9690da340fd42428cb9a",
          "url": "https://github.com/rerun-io/rerun/commit/14d0ec56d231cbc09a9c927f742535faf544ef98"
        },
        "date": 1674827313245,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 568465,
            "range": "± 2453",
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
          "id": "ce45f0c75fb11876193bc3feeacc2d269efa0642",
          "message": "Add options to create a cleaner UI for when doing screen recordings (#955)\n\n* Add options to create a cleaner UI for when doing screen recordings\r\n\r\n* Add separator in menu to make clicking \"panic!\" button less likely\r\n\r\n* Call it show_spaceview_controls\r\n\r\n* Options -> AppOptions",
          "timestamp": "2023-01-27T15:48:28+01:00",
          "tree_id": "e823aed9bd16ba6c20f9f7f8ad430bd9cba6921b",
          "url": "https://github.com/rerun-io/rerun/commit/ce45f0c75fb11876193bc3feeacc2d269efa0642"
        },
        "date": 1674831033201,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 580587,
            "range": "± 3211",
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
          "id": "3640e923852df1ca906538a28fe48c3a88dd27e4",
          "message": "Update wgpu to 0.15 (#954)\n\n* Update wgpu to 0.15\r\n\r\n* allow duplicated `windows` package\r\n\r\n* wgsl typedefs now work everywhere\r\n\r\n* pipeline stabilization now takes 3 ticks\r\n\r\n* comment fix\r\n\r\n* revert unrelated package updates\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-01-27T16:58:23+01:00",
          "tree_id": "80d164d539e0429bd84db0c2797ad876eb058c89",
          "url": "https://github.com/rerun-io/rerun/commit/3640e923852df1ca906538a28fe48c3a88dd27e4"
        },
        "date": 1674835360269,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 577119,
            "range": "± 1869",
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
          "id": "6700007c59e6f10188f979de2451c22a19a0daa1",
          "message": "Force the ouput of the color-conversion code to be unsigned (#961)",
          "timestamp": "2023-01-27T17:05:22+01:00",
          "tree_id": "03f560c61701cc320c7f1a7ede23c147d1eb56c8",
          "url": "https://github.com/rerun-io/rerun/commit/6700007c59e6f10188f979de2451c22a19a0daa1"
        },
        "date": 1674835706836,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 577352,
            "range": "± 1717",
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
          "id": "c748e0e674584bb756bb88d7e7c3a0397e0f5f63",
          "message": "Always run bench, properly fail if the bench fails, and fix the benches (#944)\n\n* Always run bench, and properly fail if the bench fails\r\n* Only save cach on push\r\n* Fix the arrow benchmarks",
          "timestamp": "2023-01-27T17:47:53+01:00",
          "tree_id": "8a26fa5bc9b065f41dc32bf2b7d06a2d813d1b89",
          "url": "https://github.com/rerun-io/rerun/commit/c748e0e674584bb756bb88d7e7c3a0397e0f5f63"
        },
        "date": 1674839020843,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 587126,
            "range": "± 4114",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1834,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 316,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 390,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 158733,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 956198604,
            "range": "± 4111050",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 376799,
            "range": "± 11467",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 98155454,
            "range": "± 741719",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10919,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23813558,
            "range": "± 207546",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6907,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4462790,
            "range": "± 202969",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12294493,
            "range": "± 793559",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16312354,
            "range": "± 1204964",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39126559,
            "range": "± 797723",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53883667,
            "range": "± 743941",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137352135,
            "range": "± 1226611",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167276925,
            "range": "± 1500631",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 356393735,
            "range": "± 2057509",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188241017,
            "range": "± 1110748",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77917689,
            "range": "± 1004476",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262287101,
            "range": "± 1851499",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3393,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 382051,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 388014,
            "range": "± 1587",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 756350,
            "range": "± 1966",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 333281,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6221,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356578,
            "range": "± 2537",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 718034,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345982,
            "range": "± 2064",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2119,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356430,
            "range": "± 1204",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6841593835,
            "range": "± 80798174",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1722223,
            "range": "± 19423",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2689995,
            "range": "± 41537",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15275,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
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
          "id": "80c8d3ef85211c184ab7636e92d07a639061a6ae",
          "message": "Gracefully log an error if there are too many points or lines (#959)",
          "timestamp": "2023-01-27T18:16:54+01:00",
          "tree_id": "0ca38b86f24bf872dbb8b14104c624e8c9c0bea4",
          "url": "https://github.com/rerun-io/rerun/commit/80c8d3ef85211c184ab7636e92d07a639061a6ae"
        },
        "date": 1674840569503,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576772,
            "range": "± 1962",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1842,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 317,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 386,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 157931,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 865434683,
            "range": "± 4758022",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 369894,
            "range": "± 2163",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89780897,
            "range": "± 290878",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10964,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23102028,
            "range": "± 80821",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6944,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4689880,
            "range": "± 196418",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12335553,
            "range": "± 299631",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16883268,
            "range": "± 779555",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38396683,
            "range": "± 349403",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49427402,
            "range": "± 497349",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127251000,
            "range": "± 1068455",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150623428,
            "range": "± 717929",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327752140,
            "range": "± 1351693",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180080387,
            "range": "± 694773",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69469344,
            "range": "± 702994",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 244954257,
            "range": "± 1313160",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3405,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 380568,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 388436,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 753922,
            "range": "± 2101",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331874,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6238,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347864,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716601,
            "range": "± 1980",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349538,
            "range": "± 1091",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2144,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353524,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6015417391,
            "range": "± 17334844",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1674256,
            "range": "± 14591",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2674871,
            "range": "± 18587",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15345,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
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
          "id": "f2c8542d4535d6f69056a27a785380826a3b7aa6",
          "message": "Mike needs flag to update 'latest' alias (#969)",
          "timestamp": "2023-01-27T19:32:36+01:00",
          "tree_id": "190b19f4ed0d3d34ce6392c2b38a5b8f333cf899",
          "url": "https://github.com/rerun-io/rerun/commit/f2c8542d4535d6f69056a27a785380826a3b7aa6"
        },
        "date": 1674845178021,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581932,
            "range": "± 3051",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1827,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 327,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 385,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156365,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 868363935,
            "range": "± 3493901",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 364053,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88330278,
            "range": "± 451112",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10943,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22107935,
            "range": "± 275447",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6922,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4169200,
            "range": "± 89385",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11019202,
            "range": "± 304458",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16491636,
            "range": "± 626183",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36433434,
            "range": "± 706732",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47391038,
            "range": "± 1415710",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125135496,
            "range": "± 1196778",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149843615,
            "range": "± 1278725",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322383583,
            "range": "± 1624391",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176800396,
            "range": "± 920496",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66643050,
            "range": "± 912325",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240659198,
            "range": "± 1894849",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3534,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 381050,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 387332,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 757243,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331304,
            "range": "± 1161",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6184,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348726,
            "range": "± 610",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711321,
            "range": "± 1439",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347424,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2131,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354264,
            "range": "± 5718",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6008886059,
            "range": "± 16133773",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1695681,
            "range": "± 10068",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2605634,
            "range": "± 7203",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15300,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
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
          "id": "31e8d0f8b282ee6cd904c734a07b6c66a0014d3a",
          "message": "Good looking Blueprint View (#962)\n\n* Make the hover background color brighter to make it easier to see\r\n\r\n* Add a nice hover-effect to the entire row in the blueprint view\r\n\r\n* Tweak hover rect\r\n\r\n* Fix hover going through menus\r\n\r\n* Make room for visibility button, even when not visible\r\n\r\n* Add a little comment\r\n\r\n* More comments\r\n\r\n* Don't leave room for the visibility button\r\n\r\n* Draw hover-rect behind instead\r\n\r\n* Clip button text instead of painting over it\r\n\r\n* Log instead of unwrap\r\n\r\n* Compilation fix\r\n\r\n* Remove the indent vlines\r\n\r\n* Tweak button spacing in the timeline view",
          "timestamp": "2023-01-27T22:38:25+01:00",
          "tree_id": "f97307bbd2d782603c52b80f086ca9a50a1e999d",
          "url": "https://github.com/rerun-io/rerun/commit/31e8d0f8b282ee6cd904c734a07b6c66a0014d3a"
        },
        "date": 1674856258708,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 572646,
            "range": "± 1788",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1868,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 317,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 387,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 158739,
            "range": "± 1029",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 863783779,
            "range": "± 7500465",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357096,
            "range": "± 2284",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89498297,
            "range": "± 418844",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10985,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23133147,
            "range": "± 172789",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6930,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4223441,
            "range": "± 139602",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12044152,
            "range": "± 716579",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16342397,
            "range": "± 853380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38192717,
            "range": "± 585027",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49456001,
            "range": "± 654108",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126492580,
            "range": "± 1218219",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153299462,
            "range": "± 1549790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332720569,
            "range": "± 2182953",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180601094,
            "range": "± 890895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70561567,
            "range": "± 1092742",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 245702318,
            "range": "± 1563528",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3415,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 394212,
            "range": "± 687",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 400184,
            "range": "± 1418",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 746197,
            "range": "± 3059",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332943,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6255,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348606,
            "range": "± 1128",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 710437,
            "range": "± 4190",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349564,
            "range": "± 1504",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2125,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355780,
            "range": "± 2017",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6095095560,
            "range": "± 33364528",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1691520,
            "range": "± 14248",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2650660,
            "range": "± 13995",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15856,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
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
          "id": "cc227f843b5ca8fcee508b1fad77d2c58509f3fe",
          "message": "Make buttons smaller, and everything a bit tighter (#970)\n\n* Make buttons smaller, and everything a bit tighter\r\n\r\n* Update egui to use the proportional font font DragValue and Slider",
          "timestamp": "2023-01-28T10:41:16+01:00",
          "tree_id": "34b113c0a60693084b234a285dee84b846013a69",
          "url": "https://github.com/rerun-io/rerun/commit/cc227f843b5ca8fcee508b1fad77d2c58509f3fe"
        },
        "date": 1674899654843,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581208,
            "range": "± 2878",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1828,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 318,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 394,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 160478,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1004531537,
            "range": "± 4210214",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 373042,
            "range": "± 2466",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 98329925,
            "range": "± 543552",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10905,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23538619,
            "range": "± 160465",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6954,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4679500,
            "range": "± 255932",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11471859,
            "range": "± 504241",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15321413,
            "range": "± 869402",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37540272,
            "range": "± 767919",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53997401,
            "range": "± 782729",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138552774,
            "range": "± 1238896",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165543751,
            "range": "± 1068082",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 362335209,
            "range": "± 1515511",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190789121,
            "range": "± 936581",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81308882,
            "range": "± 1104696",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 266611022,
            "range": "± 1688164",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3494,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 390279,
            "range": "± 1075",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 396769,
            "range": "± 917",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 733829,
            "range": "± 4321",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329292,
            "range": "± 647",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6239,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352077,
            "range": "± 3000",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 710686,
            "range": "± 2723",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346690,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2179,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353039,
            "range": "± 1512",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7106090197,
            "range": "± 19258168",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1682285,
            "range": "± 13720",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2629391,
            "range": "± 12629",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16328,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
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
          "id": "843e6851fd730136e8f037d5ec5f9007ff3319f2",
          "message": "Widget hover effect (#935)\n\n* WIP: widget hover effect\r\n\r\n* Highlight whole row in blueprint panel\r\n\r\n* More inclusive with what is highlighted\r\n\r\n* Highlight fix\r\n\r\n* Don't show visibility button on highlight (just on hover)\r\n\r\n* Use HoverHighlight and other PR feedback",
          "timestamp": "2023-01-28T11:04:55+01:00",
          "tree_id": "47c30f16d31f567d986cd2b194ade224a2a9f77d",
          "url": "https://github.com/rerun-io/rerun/commit/843e6851fd730136e8f037d5ec5f9007ff3319f2"
        },
        "date": 1674901184063,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 584177,
            "range": "± 6695",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1835,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 315,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 393,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154714,
            "range": "± 1752",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 879135061,
            "range": "± 4437338",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 370720,
            "range": "± 2003",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88105653,
            "range": "± 1433292",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10805,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 21418457,
            "range": "± 410780",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6788,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4181952,
            "range": "± 51169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10427084,
            "range": "± 391624",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14954363,
            "range": "± 375561",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34889416,
            "range": "± 716176",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45010446,
            "range": "± 1739810",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123735245,
            "range": "± 1484152",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 148063708,
            "range": "± 2271056",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 319524351,
            "range": "± 3005516",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 172249825,
            "range": "± 2006196",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66416878,
            "range": "± 803747",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237199371,
            "range": "± 2374742",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3304,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 369456,
            "range": "± 5685",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 373641,
            "range": "± 4931",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 705658,
            "range": "± 11309",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324352,
            "range": "± 4776",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6035,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348517,
            "range": "± 4101",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 691136,
            "range": "± 8413",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344939,
            "range": "± 2664",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2090,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354151,
            "range": "± 6074",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5979708572,
            "range": "± 17156829",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1618523,
            "range": "± 18156",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2631745,
            "range": "± 32290",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14951,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
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
          "id": "e111a432cb6826bb3d787c48cc069ebeed28f47a",
          "message": "Select single objects directly and click through selection (#964)\n\nDetermining instance id during (spatial) scene creation in a central location now.\r\nUse instance path only when an object already has a selection highlight",
          "timestamp": "2023-01-28T16:19:09+01:00",
          "tree_id": "a52e661555cf8cd7400c2f37cdc48112c93ee913",
          "url": "https://github.com/rerun-io/rerun/commit/e111a432cb6826bb3d787c48cc069ebeed28f47a"
        },
        "date": 1674919902083,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576540,
            "range": "± 1689",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1834,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 334,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 389,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 159057,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 861961391,
            "range": "± 9927225",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 384456,
            "range": "± 2508",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88768906,
            "range": "± 401077",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11007,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22761483,
            "range": "± 193284",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6942,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4306523,
            "range": "± 126988",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11250110,
            "range": "± 593103",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16003944,
            "range": "± 853055",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37438441,
            "range": "± 749570",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50059601,
            "range": "± 452868",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 129535277,
            "range": "± 1214881",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152665348,
            "range": "± 2345030",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331721161,
            "range": "± 2424363",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180858222,
            "range": "± 1011219",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72395159,
            "range": "± 917944",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 248691515,
            "range": "± 1875891",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3402,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 382155,
            "range": "± 912",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 389502,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 738481,
            "range": "± 4726",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 333986,
            "range": "± 642",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6251,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350476,
            "range": "± 1217",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 714493,
            "range": "± 2259",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348721,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2168,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353786,
            "range": "± 1313",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6018927440,
            "range": "± 18934586",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1674870,
            "range": "± 19058",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2695405,
            "range": "± 22638",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15269,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 37,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}