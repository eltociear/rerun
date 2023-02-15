window.BENCHMARK_DATA = {
  "lastUpdate": 1676467038341,
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
          "id": "1386120f620110026ef8222e5111e3b6ccd65348",
          "message": "Python documentation fixes - add log_tensor, call out \"spatial primitives\" (#1249)\n\nAdd log_tensor, call out \"spatial primitives\"",
          "timestamp": "2023-02-13T19:50:38+01:00",
          "tree_id": "0bd1df510f7004e882153ba0b67800e03ee82440",
          "url": "https://github.com/rerun-io/rerun/commit/1386120f620110026ef8222e5111e3b6ccd65348"
        },
        "date": 1676314808229,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 560056,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1726,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 353,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 429,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146073,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45922225,
            "range": "± 558774",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123431377,
            "range": "± 1046016",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150398938,
            "range": "± 654254",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 319841734,
            "range": "± 1338110",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173825605,
            "range": "± 651876",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64862421,
            "range": "± 723272",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 232516751,
            "range": "± 1452121",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327112,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6182,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365627,
            "range": "± 1353",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721550,
            "range": "± 3191",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348735,
            "range": "± 873",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1994,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353934,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5954611644,
            "range": "± 20111958",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1748081,
            "range": "± 13350",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2562147,
            "range": "± 437816",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17586,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "distinct": true,
          "id": "cc8a7305989a52b6cdb55275c1f773f8daa16141",
          "message": "CI: Don't continue on error",
          "timestamp": "2023-02-13T20:38:39+01:00",
          "tree_id": "8e0d869b251d8e9f5d415a150e89d927f3f6faaf",
          "url": "https://github.com/rerun-io/rerun/commit/cc8a7305989a52b6cdb55275c1f773f8daa16141"
        },
        "date": 1676317987528,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 549167,
            "range": "± 12933",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1735,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 354,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146068,
            "range": "± 860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45045516,
            "range": "± 890938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123032427,
            "range": "± 1109826",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149724678,
            "range": "± 882392",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 320908050,
            "range": "± 1169466",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 172255823,
            "range": "± 876145",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63932953,
            "range": "± 817488",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 233243816,
            "range": "± 1390180",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326551,
            "range": "± 803",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6083,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363316,
            "range": "± 1315",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715281,
            "range": "± 1742",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347514,
            "range": "± 1658",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1993,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353266,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6000591369,
            "range": "± 28055294",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1671672,
            "range": "± 9621",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2614599,
            "range": "± 9031",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17564,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
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
          "id": "490d8623c0f0454aa690a4c4cc75e864bc7294ab",
          "message": "Rust SDK: spawn() support (#1224)\n\n* implement spawn() support\r\n\r\n* api_demo_rs: spawn support\r\n\r\n* objectron_rs: spawn support\r\n\r\n* raw_mesh_rs: spawn support\r\n\r\n* slightly better doc, maybe\r\n\r\n* Update crates/re_sdk/src/session.rs\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* Update crates/re_sdk/src/session.rs\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* addressed PR comments\r\n\r\n* backporting arg refactorings from next PR\r\n\r\n* some vertical whitespace for emil\r\n\r\n* don't add wake_up_ui_thread_on_each_msg on wasm32 builds (we have no threads!)\r\n\r\n* who are you and what do you want from me\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-02-13T21:19:56+01:00",
          "tree_id": "2f27e4bd4f747673beec2a322d5f708c00b152bc",
          "url": "https://github.com/rerun-io/rerun/commit/490d8623c0f0454aa690a4c4cc75e864bc7294ab"
        },
        "date": 1676320252669,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553938,
            "range": "± 2670",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1742,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 358,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146428,
            "range": "± 2369",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46845050,
            "range": "± 441601",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124059644,
            "range": "± 1152804",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153567702,
            "range": "± 1421937",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 320646522,
            "range": "± 1929099",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173738964,
            "range": "± 792863",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64275117,
            "range": "± 1005357",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 233925149,
            "range": "± 4441286",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326511,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6120,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364424,
            "range": "± 1717",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 718102,
            "range": "± 2037",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347640,
            "range": "± 1898",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1990,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351756,
            "range": "± 1136",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6010001077,
            "range": "± 31309691",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1691615,
            "range": "± 20753",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2566935,
            "range": "± 16121",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17545,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "efc2c80a0e2fc4838cb86e23db052f2a9f192ee2",
          "message": "Release 0.2.0-alpha.2 (#1254)\n\n* Bump version to 0.2.0-alpha.2\r\n\r\n* Add script to publish crates\r\n\r\n* Improve RELEASES.md\r\n\r\n* Tweak RELEASES.md again",
          "timestamp": "2023-02-13T21:43:53+01:00",
          "tree_id": "9bb81d0af81e422bdba9552bf0678b3a90e0caa6",
          "url": "https://github.com/rerun-io/rerun/commit/efc2c80a0e2fc4838cb86e23db052f2a9f192ee2"
        },
        "date": 1676321594458,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552205,
            "range": "± 3323",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1762,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 349,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148976,
            "range": "± 1054",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43988621,
            "range": "± 904736",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122968683,
            "range": "± 1302414",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150327315,
            "range": "± 1048389",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 319897561,
            "range": "± 1762825",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173273914,
            "range": "± 1080498",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62672201,
            "range": "± 896942",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 234464285,
            "range": "± 1710325",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330406,
            "range": "± 3026",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6172,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350683,
            "range": "± 4142",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705437,
            "range": "± 5283",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342479,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2024,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351619,
            "range": "± 2022",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5975860526,
            "range": "± 16750898",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1659920,
            "range": "± 6617",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2597530,
            "range": "± 21700",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17347,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
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
          "id": "3ed81450880b17b51110eb5c36f7389507a2e094",
          "message": "Rust SDK: `--serve` support (#1228)\n\n* implement spawn() support\r\n\r\n* api_demo_rs: spawn support\r\n\r\n* objectron_rs: spawn support\r\n\r\n* raw_mesh_rs: spawn support\r\n\r\n* slightly better doc, maybe\r\n\r\n* Update crates/re_sdk/src/session.rs\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* Update crates/re_sdk/src/session.rs\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* addressed PR comments\r\n\r\n* backporting arg refactorings from next PR\r\n\r\n* some vertical whitespace for emil\r\n\r\n* implement Session::save\r\n\r\n* api_demo_rs: handle --save\r\n\r\n* objectron_rs: handle --save\r\n\r\n* raw_mesh_rs: handle --save\r\n\r\n* todo\r\n\r\n* api_demo_rs: --serve\r\n\r\n* objectron_rs: --serve\r\n\r\n* raw_mesh_rs: --serve\r\n\r\n* less verbose websocket logs\r\n\r\n* serve or save\r\n\r\n* don't add wake_up_ui_thread_on_each_msg on wasm32 builds (we have no threads!)\r\n\r\n* who are you and what do you want from me\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-02-13T22:09:15+01:00",
          "tree_id": "e64da8c081e9a378dc7406096bde8da3dc827b89",
          "url": "https://github.com/rerun-io/rerun/commit/3ed81450880b17b51110eb5c36f7389507a2e094"
        },
        "date": 1676323165370,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553109,
            "range": "± 2385",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1794,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150128,
            "range": "± 1728",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44012555,
            "range": "± 1006460",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124907557,
            "range": "± 1145571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151493977,
            "range": "± 903774",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 320990758,
            "range": "± 2448745",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174877785,
            "range": "± 854408",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64557252,
            "range": "± 956682",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 233986659,
            "range": "± 1465421",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332536,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6151,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355011,
            "range": "± 1275",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712294,
            "range": "± 1878",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346848,
            "range": "± 1784",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2021,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354296,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5938165980,
            "range": "± 41496333",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1688949,
            "range": "± 10722",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2596080,
            "range": "± 74489",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17417,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b1fc66e360bf391a9e316d83bcac5dc70ede12d9",
          "message": "CI: Only run setup_web.sh on non-Windows (#1253)\n\n* CI: Only run setup_web.sh on non-Windows",
          "timestamp": "2023-02-14T07:17:34+01:00",
          "tree_id": "6ccebe69fc18ad7a25b7d8d7d19c0a22d88ead20",
          "url": "https://github.com/rerun-io/rerun/commit/b1fc66e360bf391a9e316d83bcac5dc70ede12d9"
        },
        "date": 1676356028872,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 550537,
            "range": "± 6167",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1797,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149444,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45926474,
            "range": "± 713746",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124343093,
            "range": "± 969133",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153409743,
            "range": "± 1687512",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324311600,
            "range": "± 2867095",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175560955,
            "range": "± 959365",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64156089,
            "range": "± 1084368",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236751903,
            "range": "± 2092908",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332687,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6305,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354948,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 710157,
            "range": "± 3205",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348316,
            "range": "± 1425",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2066,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358620,
            "range": "± 3502",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6065441017,
            "range": "± 17868645",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1692577,
            "range": "± 16371",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2588203,
            "range": "± 27247",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17375,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "distinct": true,
          "id": "69181c50d0c0b886a4028c41bf7f7774c9e77f21",
          "message": "Update Cargo.lock",
          "timestamp": "2023-02-14T09:59:55+01:00",
          "tree_id": "aedcd1edcedf209b2178b0e71ace0114b6b68d02",
          "url": "https://github.com/rerun-io/rerun/commit/69181c50d0c0b886a4028c41bf7f7774c9e77f21"
        },
        "date": 1676365977097,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 539659,
            "range": "± 2059",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1746,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147875,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49619841,
            "range": "± 1055766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136917535,
            "range": "± 1265808",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163836005,
            "range": "± 1007945",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351870943,
            "range": "± 1692810",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186310295,
            "range": "± 926802",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74334032,
            "range": "± 938847",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257747347,
            "range": "± 1673041",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326758,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6161,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353815,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704854,
            "range": "± 4003",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347733,
            "range": "± 1199",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2005,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356620,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6964134002,
            "range": "± 31233451",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1686698,
            "range": "± 13777",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2617751,
            "range": "± 11015",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17310,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
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
          "id": "f9487b361f70fbee77b2ea1d46379748ae891212",
          "message": "Rust SDK: last minute fixes + example docs (#1264)\n\n* fix quirks in examples\r\n\r\n* fix clap + web feature interaction\r\n\r\n* example doc\r\n\r\n* Session::{new, with_default_enabled} are now doc(hidden)\r\n\r\n* might as well make it copypaste friendly?\r\n\r\n* Update examples/rust/README.md\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* Update examples/rust/README.md\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* cargo r -> cargo run\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-02-14T10:45:48+01:00",
          "tree_id": "86f9271a79cea83d05acfe6dee1773caba53b413",
          "url": "https://github.com/rerun-io/rerun/commit/f9487b361f70fbee77b2ea1d46379748ae891212"
        },
        "date": 1676368725005,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 559578,
            "range": "± 4341",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1739,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150020,
            "range": "± 627",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45759402,
            "range": "± 873699",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124872418,
            "range": "± 1030017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152424746,
            "range": "± 948751",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325552930,
            "range": "± 1341170",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177508684,
            "range": "± 713252",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63958973,
            "range": "± 864125",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239253195,
            "range": "± 1313475",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330342,
            "range": "± 596",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6108,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351565,
            "range": "± 1395",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707267,
            "range": "± 1914",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349495,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1968,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352591,
            "range": "± 979",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6109511760,
            "range": "± 64201066",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1751577,
            "range": "± 36478",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2696214,
            "range": "± 57924",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17330,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba3842021a7e5471356d5fd463cbf90bfec5c7ea",
          "message": "Update all our links and instructions (#1265)\n\n* Update all our links and instructions\r\n\r\n* Try to fix labels CI\r\n\r\n* Remove extra --\r\n\r\n* Better emojis",
          "timestamp": "2023-02-14T11:12:50+01:00",
          "tree_id": "61317ea96af4bf52a495686ef5da77b14a4c9c86",
          "url": "https://github.com/rerun-io/rerun/commit/ba3842021a7e5471356d5fd463cbf90bfec5c7ea"
        },
        "date": 1676370179220,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 546589,
            "range": "± 1474",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1767,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147348,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48747731,
            "range": "± 984181",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136241431,
            "range": "± 1568521",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163018148,
            "range": "± 2450882",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352789240,
            "range": "± 1272135",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184969977,
            "range": "± 925950",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73953790,
            "range": "± 1193989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253865980,
            "range": "± 1743425",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329183,
            "range": "± 932",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6118,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354353,
            "range": "± 1342",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 702347,
            "range": "± 2191",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347812,
            "range": "± 1689",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2001,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354472,
            "range": "± 24573",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6996190236,
            "range": "± 130303927",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1661466,
            "range": "± 23779",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2627865,
            "range": "± 10827",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17493,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
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
          "id": "3af3b887671c807455d17a9efd244a546b785ed0",
          "message": "Add missing elements to doc pages (#1252)\n\n* Add log_text_entry to doc pages\r\n\r\n* Add log_mesh(es\r\n\r\n* Fix time controls not mentioned in common index for python\r\n\r\n* Update rerun_py/docs/gen_common_index.py\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-02-14T11:24:30+01:00",
          "tree_id": "f39393dc0cb1d835e3aaf9c63a6ca2b9cc13422e",
          "url": "https://github.com/rerun-io/rerun/commit/3af3b887671c807455d17a9efd244a546b785ed0"
        },
        "date": 1676370856661,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 530424,
            "range": "± 9405",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1728,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 338,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 404,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 140983,
            "range": "± 2436",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 41669787,
            "range": "± 2016128",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 131090551,
            "range": "± 2014379",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156362028,
            "range": "± 2752047",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 334321357,
            "range": "± 4078785",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176093945,
            "range": "± 3111145",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69971348,
            "range": "± 2114782",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 245933763,
            "range": "± 3828944",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 312600,
            "range": "± 5379",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5942,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 342881,
            "range": "± 3704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 679550,
            "range": "± 8822",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344292,
            "range": "± 4037",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1962,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 345792,
            "range": "± 4052",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6880549636,
            "range": "± 17540880",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1629277,
            "range": "± 27905",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2589765,
            "range": "± 32310",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16620,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
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
          "id": "f0b070c28831a376b484643e89e866e42e7ddf33",
          "message": "missing function, move troubleshoot section, add to it, more getting started links (#1269)",
          "timestamp": "2023-02-14T12:53:36+01:00",
          "tree_id": "c950dd13674b5f6f899d5c1d0e4648de995f0881",
          "url": "https://github.com/rerun-io/rerun/commit/f0b070c28831a376b484643e89e866e42e7ddf33"
        },
        "date": 1676376232423,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 548444,
            "range": "± 2404",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1772,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 427,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146774,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48252138,
            "range": "± 1603438",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136699102,
            "range": "± 1412657",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161582488,
            "range": "± 4848872",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348942065,
            "range": "± 2775605",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183172854,
            "range": "± 1715998",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75360498,
            "range": "± 1541041",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251663012,
            "range": "± 2562224",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323157,
            "range": "± 3901",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5993,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348610,
            "range": "± 2606",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704532,
            "range": "± 11135",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349090,
            "range": "± 1274",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1972,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354896,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7016091195,
            "range": "± 20227624",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1691373,
            "range": "± 21520",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2568235,
            "range": "± 26589",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17067,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "431614b5d845d25e3c065d1effb5bbf9bbc50dc0",
          "message": "Add crate-level Rust docs (#1266)\n\n* Fix Discord id\r\n\r\n* Add crate-level Rust docs\r\n\r\n* Better and more info about the `rerun` binary",
          "timestamp": "2023-02-14T13:28:18+01:00",
          "tree_id": "715c18f562b5e3d5d898bc07fc3c768c6d15587c",
          "url": "https://github.com/rerun-io/rerun/commit/431614b5d845d25e3c065d1effb5bbf9bbc50dc0"
        },
        "date": 1676378292606,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 546134,
            "range": "± 5599",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1792,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148793,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49925920,
            "range": "± 1080096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136594509,
            "range": "± 3936812",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161579580,
            "range": "± 1208731",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 346946586,
            "range": "± 2553391",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183015882,
            "range": "± 1733776",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73568872,
            "range": "± 1404612",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253812840,
            "range": "± 2614392",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327580,
            "range": "± 3365",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6092,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351434,
            "range": "± 10911",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 695292,
            "range": "± 6649",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347491,
            "range": "± 2067",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2003,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353617,
            "range": "± 3437",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6907868978,
            "range": "± 23143323",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1672496,
            "range": "± 27034",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2608390,
            "range": "± 13988",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17241,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
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
          "id": "205714047b421719e71d18b116d33af576d732ce",
          "message": "Tweak colors of Python docs (#1267)\n\n* Tweak docs colors\r\n\r\n* Small tweaks",
          "timestamp": "2023-02-14T13:47:31+01:00",
          "tree_id": "5a2212743b623c8b3ded8b1b24ab54b4b92a20c5",
          "url": "https://github.com/rerun-io/rerun/commit/205714047b421719e71d18b116d33af576d732ce"
        },
        "date": 1676379558045,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 540200,
            "range": "± 1971",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1777,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150690,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50619963,
            "range": "± 745212",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136498164,
            "range": "± 2221228",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163654054,
            "range": "± 1719303",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351656865,
            "range": "± 1975739",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187408280,
            "range": "± 1035949",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75626922,
            "range": "± 1014475",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259405910,
            "range": "± 2042315",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326591,
            "range": "± 2369",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6044,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352981,
            "range": "± 2035",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716196,
            "range": "± 3641",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347941,
            "range": "± 2143",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2004,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354185,
            "range": "± 1993",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7107524784,
            "range": "± 35627354",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1696027,
            "range": "± 17626",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2623612,
            "range": "± 13738",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17334,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "distinct": true,
          "id": "b90c507e85ae9b53341708b75315e45941db4b8e",
          "message": "Release 0.2.0-alpha.4",
          "timestamp": "2023-02-14T14:03:45+01:00",
          "tree_id": "06eecc7b1604a21e3d39ecb1253934a5804560ea",
          "url": "https://github.com/rerun-io/rerun/commit/b90c507e85ae9b53341708b75315e45941db4b8e"
        },
        "date": 1676380418201,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 527468,
            "range": "± 6806",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1716,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 341,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 408,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 144448,
            "range": "± 2130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46493462,
            "range": "± 1989235",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134979409,
            "range": "± 1922153",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 158383042,
            "range": "± 1663302",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 340349608,
            "range": "± 3275939",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179426084,
            "range": "± 1901048",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71079637,
            "range": "± 1563749",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249929378,
            "range": "± 3155688",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 313743,
            "range": "± 4415",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6051,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355791,
            "range": "± 4047",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697419,
            "range": "± 9697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 340596,
            "range": "± 2159",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2001,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350008,
            "range": "± 2753",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6897542229,
            "range": "± 21436641",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1684752,
            "range": "± 26497",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2531293,
            "range": "± 33459",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17583,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
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
          "id": "cc7cfce8d45366f804d32bb9cbda57275e3ef088",
          "message": "Better feature defaults for rerun, re_sdk, rerun_py (#1273)\n\n* better defaults for rerun, re_sdk, rerun_py\r\n\r\n* remove explicit glam features\r\n\r\n* dont need image either",
          "timestamp": "2023-02-14T14:37:05+01:00",
          "tree_id": "215dbf212906e418a3e8df67719bb822e08b7a05",
          "url": "https://github.com/rerun-io/rerun/commit/cc7cfce8d45366f804d32bb9cbda57275e3ef088"
        },
        "date": 1676382399059,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 548830,
            "range": "± 1597",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1730,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145798,
            "range": "± 3024",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45698139,
            "range": "± 809911",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124685855,
            "range": "± 2918885",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 148627305,
            "range": "± 716286",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322552656,
            "range": "± 1451792",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173155768,
            "range": "± 758982",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63096175,
            "range": "± 851215",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 234265983,
            "range": "± 1441748",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329925,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6248,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 368493,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721276,
            "range": "± 2566",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351881,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2000,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354666,
            "range": "± 1113",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6033649003,
            "range": "± 22363727",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1676746,
            "range": "± 9423",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2640438,
            "range": "± 23724",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17949,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b08c62746a9e0ae1f8aa822643f47cbf7828a1d2",
          "message": "When loading an .rrd file, start rerun in Play-mode (#1277)\n\n* Refactor: apps always have a receiver\r\n\r\n* When loading an .rrd file, start rerun in Play-mode\r\n\r\n* Small fix in RELEASES.md",
          "timestamp": "2023-02-14T14:55:18+01:00",
          "tree_id": "5829b378d9c54b40e7ac36bdf31750b1a5bdfe11",
          "url": "https://github.com/rerun-io/rerun/commit/b08c62746a9e0ae1f8aa822643f47cbf7828a1d2"
        },
        "date": 1676383510686,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553587,
            "range": "± 2374",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1750,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146125,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49287812,
            "range": "± 2008663",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137576308,
            "range": "± 2154413",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163375757,
            "range": "± 1034480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351625021,
            "range": "± 2429682",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185628462,
            "range": "± 2145962",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72838101,
            "range": "± 1023942",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255113139,
            "range": "± 2570123",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326914,
            "range": "± 1185",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6245,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 375568,
            "range": "± 1323",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 722599,
            "range": "± 2835",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351218,
            "range": "± 6489",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2016,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354102,
            "range": "± 1519",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7094142753,
            "range": "± 34800450",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1705707,
            "range": "± 15170",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2641603,
            "range": "± 28542",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17943,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
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
          "id": "97fe5b7cc9b122f3770919e636cee6e53ca7dbb3",
          "message": "Rust crate readme: use explanation from the website (#1282)",
          "timestamp": "2023-02-14T15:22:53+01:00",
          "tree_id": "a83bd3d4ecdcf68331f701f48aee3a4af655c036",
          "url": "https://github.com/rerun-io/rerun/commit/97fe5b7cc9b122f3770919e636cee6e53ca7dbb3"
        },
        "date": 1676385453701,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 548271,
            "range": "± 4659",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1746,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 419,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146943,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49254845,
            "range": "± 927573",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136411241,
            "range": "± 2209335",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164126495,
            "range": "± 1186337",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350529556,
            "range": "± 1903051",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182190681,
            "range": "± 1876602",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72607443,
            "range": "± 1350755",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251281294,
            "range": "± 2527488",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322996,
            "range": "± 3166",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6262,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361943,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 724031,
            "range": "± 21831",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346943,
            "range": "± 5611",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2015,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356698,
            "range": "± 2717",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7038277128,
            "range": "± 23914509",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1684313,
            "range": "± 28978",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2596978,
            "range": "± 34189",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17649,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "john@rerun.io",
            "name": "John Hughes",
            "username": "jondo2010"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b3260bc6ecb5f7a9cfadd62dbd47d711419b276",
          "message": "Update `log_pinhole` docs. (#1274)\n\n* Update `log_pinhole` docs.",
          "timestamp": "2023-02-14T15:38:00+01:00",
          "tree_id": "c20cd0fc3c927d958e03ef23fbe4e955a75e8bd7",
          "url": "https://github.com/rerun-io/rerun/commit/3b3260bc6ecb5f7a9cfadd62dbd47d711419b276"
        },
        "date": 1676386078281,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 536757,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1727,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146665,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47678562,
            "range": "± 1394027",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137149535,
            "range": "± 1271694",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161748328,
            "range": "± 1330739",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 347328932,
            "range": "± 1884121",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184692512,
            "range": "± 1038477",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72448329,
            "range": "± 1287217",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252407984,
            "range": "± 2063811",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329377,
            "range": "± 2821",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6258,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359417,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715415,
            "range": "± 2508",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348624,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2001,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 344286,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7098434052,
            "range": "± 24583489",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1667688,
            "range": "± 7413",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2624842,
            "range": "± 47441",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17984,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
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
          "id": "60461816e525acc70cdd1199aa7fa7ca4c599417",
          "message": "fix timeline switch edge case (#1283)\n\n* fixed switch timeline edge case\r\n\r\n* end if following, beginning otherwise",
          "timestamp": "2023-02-14T15:58:54+01:00",
          "tree_id": "eb7d754545f80583a9411d5c1a2e4ff80d17682c",
          "url": "https://github.com/rerun-io/rerun/commit/60461816e525acc70cdd1199aa7fa7ca4c599417"
        },
        "date": 1676387302569,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 536875,
            "range": "± 1358",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1733,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145473,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44793469,
            "range": "± 702771",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123307342,
            "range": "± 1210168",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150043880,
            "range": "± 817651",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 318703828,
            "range": "± 1856305",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174486076,
            "range": "± 965031",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61165373,
            "range": "± 937423",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 232896849,
            "range": "± 1661851",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324969,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6259,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366868,
            "range": "± 912",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 719192,
            "range": "± 2396",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346801,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1976,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352621,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5979480431,
            "range": "± 19316056",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1687764,
            "range": "± 13508",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2606885,
            "range": "± 23019",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17954,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29d530a9e133a3b1ffc34efb41890b720fd40afb",
          "message": "Do some expectation management in main README.md (#1284)\n\n* Do some expectation management in main README.md\r\n\r\n* less typos and childish emojis\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-02-14T16:23:28+01:00",
          "tree_id": "c6124152b0b672d561fce3c6695f7a446fd2183c",
          "url": "https://github.com/rerun-io/rerun/commit/29d530a9e133a3b1ffc34efb41890b720fd40afb"
        },
        "date": 1676388804291,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 549254,
            "range": "± 1751",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1731,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145733,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48869943,
            "range": "± 1509406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135717734,
            "range": "± 1448330",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160398114,
            "range": "± 1769539",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345977198,
            "range": "± 2127087",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184299324,
            "range": "± 1104029",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72702409,
            "range": "± 1083206",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253298042,
            "range": "± 2004618",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323755,
            "range": "± 1530",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6270,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366895,
            "range": "± 1711",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715640,
            "range": "± 2464",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346189,
            "range": "± 896",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2007,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351955,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6848693801,
            "range": "± 22691806",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1712263,
            "range": "± 11799",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2586873,
            "range": "± 23144",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17966,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61abe228a515ae1d8e4db1e091ec824c66316c4b",
          "message": "Release 0.2.0-alpha.5 (#1292)\n\n* Release 0.2.0-alpha.5\r\n\r\n* Add `⛴ release` to labels\r\n\r\n* Say you need the `⛴ release` label on the PR",
          "timestamp": "2023-02-14T16:49:54+01:00",
          "tree_id": "8d02e84d74fc1433a1cdb5e1ba53263975e8d1b5",
          "url": "https://github.com/rerun-io/rerun/commit/61abe228a515ae1d8e4db1e091ec824c66316c4b"
        },
        "date": 1676390474981,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 558920,
            "range": "± 2287",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1726,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 360,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146899,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46345898,
            "range": "± 1110850",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136101069,
            "range": "± 1642695",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163008216,
            "range": "± 2155614",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 349458857,
            "range": "± 2904754",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184469766,
            "range": "± 1206268",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72112460,
            "range": "± 1355852",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 254330566,
            "range": "± 2346835",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328761,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6100,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350890,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717700,
            "range": "± 3659",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351379,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1995,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354140,
            "range": "± 1146",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7024725717,
            "range": "± 24928443",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1690733,
            "range": "± 11801",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2619676,
            "range": "± 54042",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17114,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "john@rerun.io",
            "name": "John Hughes",
            "username": "jondo2010"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a7a3a2477a07fdde712bad9dfaa69058ba35da4",
          "message": "Update docs in bounding_box.py and transform.py (#1298)",
          "timestamp": "2023-02-14T17:59:56+01:00",
          "tree_id": "270cdee0b348f09f8d47794b4ec67dc6539ae688",
          "url": "https://github.com/rerun-io/rerun/commit/7a7a3a2477a07fdde712bad9dfaa69058ba35da4"
        },
        "date": 1676394597229,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 543408,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1762,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147631,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51498668,
            "range": "± 552366",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137598729,
            "range": "± 1469881",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166496739,
            "range": "± 2015467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354685498,
            "range": "± 2508299",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184742950,
            "range": "± 1668287",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74233336,
            "range": "± 1137424",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252878022,
            "range": "± 2019433",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332198,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6200,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350994,
            "range": "± 7268",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711655,
            "range": "± 2653",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344698,
            "range": "± 7447",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2018,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355869,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7034372739,
            "range": "± 51416447",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1704658,
            "range": "± 14609",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2623107,
            "range": "± 29427",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17149,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
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
          "id": "1d09a2817ce0cb43d2f4bb91c126484bd190a5f6",
          "message": "readme: link to troubleshooting page (#1297)\n\n* link to troubleshooting page\r\n\r\n* Update README.md\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* link to troubleshooting doc everywhere\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-02-14T18:38:42+01:00",
          "tree_id": "ede345ef6f5d6fa5749322f86d6fa269f30c7869",
          "url": "https://github.com/rerun-io/rerun/commit/1d09a2817ce0cb43d2f4bb91c126484bd190a5f6"
        },
        "date": 1676396919946,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 550403,
            "range": "± 5680",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1747,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 418,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147366,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47180205,
            "range": "± 1606197",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135462563,
            "range": "± 1457042",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160731290,
            "range": "± 889762",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351288662,
            "range": "± 2206225",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184301505,
            "range": "± 4721636",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72251563,
            "range": "± 1370784",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251379731,
            "range": "± 2143564",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330511,
            "range": "± 5587",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6186,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353748,
            "range": "± 2276",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 720297,
            "range": "± 2029",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347393,
            "range": "± 907",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2028,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353646,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7102383023,
            "range": "± 24505300",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1677055,
            "range": "± 14257",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2657653,
            "range": "± 12101",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17084,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
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
          "id": "40389618ac19e34842b8ddff54d3cca08c214348",
          "message": "Doc fixes for set_time_seconds and set_time_nanos (#1288)\n\n* Doc fixes for set_time_seconds and set_time_nanos\r\n\r\n* doclinks and explain short time\r\n\r\n* fix doclinks\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-02-14T20:40:21+01:00",
          "tree_id": "95c54c3d981644b6092ac8f38945d65322b6c472",
          "url": "https://github.com/rerun-io/rerun/commit/40389618ac19e34842b8ddff54d3cca08c214348"
        },
        "date": 1676404235092,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 557039,
            "range": "± 2218",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1750,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148948,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51607314,
            "range": "± 565921",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137234803,
            "range": "± 1489448",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 169804618,
            "range": "± 2870198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 356421691,
            "range": "± 3502377",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187994890,
            "range": "± 1369236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75054487,
            "range": "± 1083547",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257211304,
            "range": "± 1896158",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 337034,
            "range": "± 1363",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6258,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 371701,
            "range": "± 2051",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 737172,
            "range": "± 6094",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 354717,
            "range": "± 2713",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2034,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 360733,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7174121070,
            "range": "± 42394063",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1761072,
            "range": "± 24253",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2702539,
            "range": "± 93022",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17309,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b60db961801347d1ee699009f9d7af649541f57",
          "message": "Last fixes! (#1305)\n\n* Sleep longer waiting for the spawned viewer to start\r\n\r\n* Don't spam the same error",
          "timestamp": "2023-02-14T20:57:51+01:00",
          "tree_id": "48ddc99d55c886ef98bb1b68d8becef01afd42d0",
          "url": "https://github.com/rerun-io/rerun/commit/1b60db961801347d1ee699009f9d7af649541f57"
        },
        "date": 1676405263049,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 570078,
            "range": "± 8662",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1780,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147282,
            "range": "± 1648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44289695,
            "range": "± 1460893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133646763,
            "range": "± 1609691",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160140805,
            "range": "± 1805665",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345611545,
            "range": "± 28190744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181250396,
            "range": "± 2614833",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70908870,
            "range": "± 1672633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 248910246,
            "range": "± 3105995",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328951,
            "range": "± 4820",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6017,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364166,
            "range": "± 3542",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711791,
            "range": "± 7576",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343607,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1959,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350782,
            "range": "± 1876",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6850536575,
            "range": "± 14843141",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1641234,
            "range": "± 17522",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2591680,
            "range": "± 83574",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16829,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90c160fc355d410bf7126e2212c89451fbc32b0e",
          "message": "Release 0.2.0 - The first public release of Rerun! (#1306)",
          "timestamp": "2023-02-14T21:26:35+01:00",
          "tree_id": "0248d7ebc8cbc2b9bf266fbcb47ffc3b6b326868",
          "url": "https://github.com/rerun-io/rerun/commit/90c160fc355d410bf7126e2212c89451fbc32b0e"
        },
        "date": 1676406991234,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552531,
            "range": "± 12390",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1742,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149904,
            "range": "± 3495",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47269236,
            "range": "± 1386536",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135958438,
            "range": "± 1390204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161387282,
            "range": "± 999855",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 349615688,
            "range": "± 1704312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182462207,
            "range": "± 1932917",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72026604,
            "range": "± 1487766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249347050,
            "range": "± 1934099",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324894,
            "range": "± 694",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6123,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351200,
            "range": "± 1159",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707867,
            "range": "± 2148",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347030,
            "range": "± 1128",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2022,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353471,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6989584664,
            "range": "± 21497312",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1691823,
            "range": "± 13459",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2619615,
            "range": "± 7647",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16630,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a15dc48ee1ff49632564bc14910da2252471fe4",
          "message": "Improve readme badges (#1307)\n\n* Fix RELEASES.md\r\n\r\n* Add badges for pypi and crates.io, and center the badges\r\n\r\n* Center badges and fix links",
          "timestamp": "2023-02-14T22:58:50+01:00",
          "tree_id": "f1e8da4b85e059555b3ebded63d14786b09aa5a6",
          "url": "https://github.com/rerun-io/rerun/commit/6a15dc48ee1ff49632564bc14910da2252471fe4"
        },
        "date": 1676412522895,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 538905,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1753,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148752,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46575484,
            "range": "± 538633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125045378,
            "range": "± 1291350",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154981974,
            "range": "± 1033326",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327683463,
            "range": "± 4208857",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175594686,
            "range": "± 1892893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64643283,
            "range": "± 739192",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 238132656,
            "range": "± 1793598",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325620,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6112,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354695,
            "range": "± 1126",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716557,
            "range": "± 3529",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346069,
            "range": "± 1222",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2056,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357583,
            "range": "± 1214",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6036668855,
            "range": "± 27846690",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1704415,
            "range": "± 40220",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2714365,
            "range": "± 58419",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16802,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
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
          "id": "3a03da727aad5a2b22aba233c7eef27a0e2a5a29",
          "message": "Prevent wrap on 'Streams' text (#1308)\n\n* Prevent wrap on 'Streams' text\r\n\r\n* Use wrap = false instead",
          "timestamp": "2023-02-15T08:00:25+01:00",
          "tree_id": "95e8c4f1b6c2aaf022056ec12443c4136176332e",
          "url": "https://github.com/rerun-io/rerun/commit/3a03da727aad5a2b22aba233c7eef27a0e2a5a29"
        },
        "date": 1676445166426,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 543890,
            "range": "± 1962",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1851,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147842,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47922163,
            "range": "± 1671429",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135199566,
            "range": "± 1272957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163408884,
            "range": "± 1812648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348650611,
            "range": "± 2177243",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183061383,
            "range": "± 1190031",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73411922,
            "range": "± 1565060",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249752480,
            "range": "± 1837039",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326504,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6111,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353258,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706403,
            "range": "± 2631",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348791,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1998,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353542,
            "range": "± 942",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7010972118,
            "range": "± 18602921",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1700172,
            "range": "± 8697",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2555203,
            "range": "± 7418",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16426,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "40140edbab4c98ee55f5f395d4f1ed92f5102f4f",
          "message": "Update to eframe 0.21.3 with fix for web text input (#1311)",
          "timestamp": "2023-02-15T13:31:25+01:00",
          "tree_id": "af4d3c9754e1c3cbfcd662e59dbedf85fc6ecf7b",
          "url": "https://github.com/rerun-io/rerun/commit/40140edbab4c98ee55f5f395d4f1ed92f5102f4f"
        },
        "date": 1676464882969,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 548053,
            "range": "± 3571",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1766,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147782,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45656825,
            "range": "± 1298376",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133270024,
            "range": "± 1236597",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162603331,
            "range": "± 837834",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345696103,
            "range": "± 2131852",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180607066,
            "range": "± 1102781",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69850266,
            "range": "± 1245125",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250317700,
            "range": "± 1920631",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322806,
            "range": "± 1955",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6067,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 349717,
            "range": "± 1971",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 694741,
            "range": "± 3990",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346447,
            "range": "± 1483",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1962,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354782,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6771166453,
            "range": "± 62403433",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1643416,
            "range": "± 12970",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2582868,
            "range": "± 16683",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16531,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12f75bab68eabc1b3f22fac6851f41623d07cd33",
          "message": "Fix some links (#1314)\n\n* lint markdown files too\r\n\r\n* Github -> GitHub\r\n\r\n* Update links to our Python API docs",
          "timestamp": "2023-02-15T14:07:08+01:00",
          "tree_id": "42983f901623d5e123ce609f58f7597dd874861e",
          "url": "https://github.com/rerun-io/rerun/commit/12f75bab68eabc1b3f22fac6851f41623d07cd33"
        },
        "date": 1676467035356,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 546573,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1730,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148240,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47787104,
            "range": "± 1577455",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135162646,
            "range": "± 1465229",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164696397,
            "range": "± 1187583",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348690843,
            "range": "± 1926746",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182958566,
            "range": "± 1049535",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72281118,
            "range": "± 976901",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251580555,
            "range": "± 1786321",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326320,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6100,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351875,
            "range": "± 1717",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713906,
            "range": "± 3003",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345735,
            "range": "± 1327",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2007,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351267,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6902761801,
            "range": "± 35428733",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1692020,
            "range": "± 17774",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2665535,
            "range": "± 9079",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16641,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}