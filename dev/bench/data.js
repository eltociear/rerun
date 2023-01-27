window.BENCHMARK_DATA = {
  "lastUpdate": 1674812169613,
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
      }
    ]
  }
}