window.BENCHMARK_DATA = {
  "lastUpdate": 1674746266408,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
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
          "id": "0145234fbea5b662cf79729dbf4161fe20c7b5e6",
          "message": "examples: add missing stable diffusion reqs (#884)\n\n* add missing stable diffusion reqs\r\n\r\n* pin stable_diffusion's transformers & diffusers",
          "timestamp": "2023-01-25T10:31:01+01:00",
          "tree_id": "47e78aec2e7648af1f62c5567ba85315003a8ed4",
          "url": "https://github.com/rerun-io/rerun/commit/0145234fbea5b662cf79729dbf4161fe20c7b5e6"
        },
        "date": 1674639192472,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576979,
            "range": "± 15218",
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
          "id": "034cb335c026d1cdd19cd5043ca83ad297244edd",
          "message": "Update egui with deadlock fix (#911)",
          "timestamp": "2023-01-25T14:03:56+01:00",
          "tree_id": "d3c34d37931887b50b44dd2280f13d8d1d046e26",
          "url": "https://github.com/rerun-io/rerun/commit/034cb335c026d1cdd19cd5043ca83ad297244edd"
        },
        "date": 1674651967367,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 559897,
            "range": "± 1949",
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
          "id": "105a425dfc1898a146845ef93714b0c25d9fb082",
          "message": "Update dependencies: Python3.8, arrow==10.0.1, numpy>=1.23 (#898)\n\n* Bump pyarrow\r\n* Use 1.23 as a minimum numpy version\r\n* We already depend on python 3.8 featuees -- make it explicit",
          "timestamp": "2023-01-25T17:01:27+01:00",
          "tree_id": "037a3484ffe0894796fdd2267e95a7e9ccf9a884",
          "url": "https://github.com/rerun-io/rerun/commit/105a425dfc1898a146845ef93714b0c25d9fb082"
        },
        "date": 1674662874086,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 563722,
            "range": "± 7607",
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
          "id": "ec1a00c6f3b69aa0527d54a7d18a21e0c3aca129",
          "message": "Get rid of re_web_server dep on web_build.sh (#905)\n\n* Get rid of re_web_server dep on web_build.sh\r\n* Fix path handling for wasm builds on windows",
          "timestamp": "2023-01-25T17:51:06+01:00",
          "tree_id": "5e0acaeb6a008d05c349436a9d3dfecccd16cca1",
          "url": "https://github.com/rerun-io/rerun/commit/ec1a00c6f3b69aa0527d54a7d18a21e0c3aca129"
        },
        "date": 1674665681274,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 566843,
            "range": "± 9595",
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
          "id": "d4763a238e6c8e30ef5f10075af6e3fc7a3c5031",
          "message": "Add Viridis colormap for tensors and use by default (#915)\n\nFixes #868",
          "timestamp": "2023-01-25T18:52:16+01:00",
          "tree_id": "9703f1ec6bf2f57697813b59e953425cdf64a66f",
          "url": "https://github.com/rerun-io/rerun/commit/d4763a238e6c8e30ef5f10075af6e3fc7a3c5031"
        },
        "date": 1674669263288,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 567154,
            "range": "± 1645",
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
          "id": "47361384f65d6195b12fab7ddc84184b246b933c",
          "message": "re_analytics: fix rerun-if-changed clause (#924)",
          "timestamp": "2023-01-25T19:13:52+01:00",
          "tree_id": "a802c6885bd4059ddc0245eb3d572ede459d12f0",
          "url": "https://github.com/rerun-io/rerun/commit/47361384f65d6195b12fab7ddc84184b246b933c"
        },
        "date": 1674670676960,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 580077,
            "range": "± 10497",
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
          "id": "2efa3d1e336396ba12f1d3e4361515c0f16ace74",
          "message": "Depth images are now always mapped with turbo color map (#912)",
          "timestamp": "2023-01-25T19:32:57+01:00",
          "tree_id": "aed0335c5aaefab10bce2a7e417c64ca1f1f216d",
          "url": "https://github.com/rerun-io/rerun/commit/2efa3d1e336396ba12f1d3e4361515c0f16ace74"
        },
        "date": 1674671706327,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 569642,
            "range": "± 5618",
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
          "id": "b65f99fbce6bc7d6925b870b08cf509cb0e64aa7",
          "message": "analytics for everyone (#885)\n\n* analytics in release too\r\n\r\n* introducing tel.rerun.io\r\n\r\n* added release key\r\n\r\n* fixing git change detection\r\n\r\n* rerun analytics email <email>\r\n\r\n* Update the analytics disclaimer and details\r\n\r\n* versioned links in details subcommand\r\n\r\nCo-authored-by: Nikolaus West <niko@rerun.io>\r\nCo-authored-by: Emil Ernerfeldt <emil@rerun.io>\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-01-25T21:27:19+01:00",
          "tree_id": "db5b3e25b63aa0d646afb536af113f01c6eed650",
          "url": "https://github.com/rerun-io/rerun/commit/b65f99fbce6bc7d6925b870b08cf509cb0e64aa7"
        },
        "date": 1674678848026,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 570870,
            "range": "± 2297",
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
          "id": "778891ffa74474e2a0950214e3a0b82adca53360",
          "message": "Make multiprocessing example simpler with spawn/connect calls (#907)\n\n* Make multiprocessing example simpler with spawn/connect calls\r\n\r\n* py-format\r\n\r\n* Update docs and comments\r\n\r\n* py-format",
          "timestamp": "2023-01-25T21:34:27+01:00",
          "tree_id": "1165099fd2af512185eeb103921a7c87a3549541",
          "url": "https://github.com/rerun-io/rerun/commit/778891ffa74474e2a0950214e3a0b82adca53360"
        },
        "date": 1674679058713,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581894,
            "range": "± 3395",
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
      }
    ]
  }
}