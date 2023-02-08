window.BENCHMARK_DATA = {
  "lastUpdate": 1675869872505,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
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
          "id": "b77bd520972396263a5f68183f80f5d4f9c3a3ad",
          "message": "Nicer ready text (#1078)",
          "timestamp": "2023-02-04T11:36:56+01:00",
          "tree_id": "603ba9b148621f6618bb39a3504fd5f76dd0cd5c",
          "url": "https://github.com/rerun-io/rerun/commit/b77bd520972396263a5f68183f80f5d4f9c3a3ad"
        },
        "date": 1675507498548,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 577692,
            "range": "± 4718",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1780,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 377,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155478,
            "range": "± 1390",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46226300,
            "range": "± 1130829",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124995848,
            "range": "± 1294355",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153122266,
            "range": "± 1938590",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325530957,
            "range": "± 2346703",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174644642,
            "range": "± 880729",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64156979,
            "range": "± 870293",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 238108450,
            "range": "± 1578861",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318397,
            "range": "± 3040",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6051,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352185,
            "range": "± 1171",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704090,
            "range": "± 10024",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347229,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2043,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352229,
            "range": "± 1367",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6000266740,
            "range": "± 31398025",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1701472,
            "range": "± 12585",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2657662,
            "range": "± 14765",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17074,
            "range": "± 52",
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
          "id": "3bf2aebb884fde858b87efe26065cecc1cfc77d7",
          "message": "Improve tensor view margins (#1091)\n\n* Remove margins from the tensor view\r\n\r\n* refactor: remove right-ward drift\r\n\r\n* Refactor again: make helper function\r\n\r\n* Paint tensor labels on top of the tensor (again)\r\n\r\n* Add more rounding and margin to the axis labels\r\n\r\n* Improve spacing around sliders\r\n\r\n* Show tensor axes _unless_ hovered\r\n\r\n* Remove deprecated warning\r\n\r\n* Clarify the rounding and margins",
          "timestamp": "2023-02-04T11:52:57+01:00",
          "tree_id": "553b38b3e31f53f9e4b185f8c171166e622f3ddd",
          "url": "https://github.com/rerun-io/rerun/commit/3bf2aebb884fde858b87efe26065cecc1cfc77d7"
        },
        "date": 1675508457107,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581325,
            "range": "± 5161",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1794,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 322,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 386,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 157340,
            "range": "± 919",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47267450,
            "range": "± 976710",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123994764,
            "range": "± 1485638",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149905578,
            "range": "± 803083",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322292104,
            "range": "± 1704744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173562763,
            "range": "± 1195564",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63188689,
            "range": "± 753667",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 235082781,
            "range": "± 1774520",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319398,
            "range": "± 1240",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6073,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350305,
            "range": "± 1690",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701033,
            "range": "± 4096",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344068,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2006,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354136,
            "range": "± 2263",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5953385649,
            "range": "± 22982376",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1697212,
            "range": "± 13312",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2661479,
            "range": "± 13050",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17082,
            "range": "± 38",
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
          "id": "237745394c005b976baea1de58b9a224fc4ae6f1",
          "message": "Nicer top bar on web (#1080)\n\n* egui::style::Margin -> egui::Margin\r\n\r\n* Make the top bar higher on non-mac\r\n\r\n* Remove the custom URL selector in the web viewer\r\n\r\n* use top_bar_margin\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-02-04T12:07:13+01:00",
          "tree_id": "40e0a24dc3347533f6fe29620746780766ff4455",
          "url": "https://github.com/rerun-io/rerun/commit/237745394c005b976baea1de58b9a224fc4ae6f1"
        },
        "date": 1675509342107,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576184,
            "range": "± 8712",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1774,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 313,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 379,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156650,
            "range": "± 839",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46604302,
            "range": "± 1153892",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123547007,
            "range": "± 1176551",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152027856,
            "range": "± 614399",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325671518,
            "range": "± 1551168",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177061355,
            "range": "± 800998",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64010117,
            "range": "± 922610",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239680659,
            "range": "± 1504902",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319251,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6083,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348431,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 698889,
            "range": "± 15112",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351712,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2023,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358587,
            "range": "± 1318",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6083162699,
            "range": "± 12842426",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1700471,
            "range": "± 11073",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2694292,
            "range": "± 12734",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17057,
            "range": "± 73",
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
          "id": "8fe38c0acdc1a1b1c2d0ca43d9db218a85af9ea0",
          "message": "Timeline panel design details (#1088)\n\n* Adjusted timepanel border to be as in the design\r\n\r\n* adjust timeline panel\r\n\r\n* timeline stream names and data now separated by a shadow\r\n\r\n* add drop shadow to timeline gaps\r\n\r\n* adjust timepanel controls to have the same distance from the border top and bottom\r\n\r\n* replace shadow_gradient_bright_end with Color32::TRANSPARENT\r\n\r\n* make time panel stroke show only on the top\r\n\r\n* update to an egui main version",
          "timestamp": "2023-02-04T12:26:54+01:00",
          "tree_id": "79f5d27be234ca5dbecf94f31a2659265a8731a4",
          "url": "https://github.com/rerun-io/rerun/commit/8fe38c0acdc1a1b1c2d0ca43d9db218a85af9ea0"
        },
        "date": 1675510512143,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 567101,
            "range": "± 2162",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1764,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 307,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 378,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155224,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49989433,
            "range": "± 916000",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137666992,
            "range": "± 1358497",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163559347,
            "range": "± 1087161",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350632715,
            "range": "± 1589321",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183935487,
            "range": "± 948957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73097686,
            "range": "± 974163",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252888706,
            "range": "± 1583829",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328164,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6111,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362867,
            "range": "± 1089",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712601,
            "range": "± 2740",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346884,
            "range": "± 1877",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2086,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354425,
            "range": "± 1100",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6767927679,
            "range": "± 23030332",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1746899,
            "range": "± 9373",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2655948,
            "range": "± 11778",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17473,
            "range": "± 38",
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
          "id": "220ba25f7c4363b3855d990fd85106b4bbc236dc",
          "message": "Ship rerun package inside of a rerun_sdk folder (#1085)\n\n* Ship rerun package inside of a rerun_sdk folder",
          "timestamp": "2023-02-05T05:20:16+01:00",
          "tree_id": "c071f1651289ce5173188e95eddbf2bf8552da7b",
          "url": "https://github.com/rerun-io/rerun/commit/220ba25f7c4363b3855d990fd85106b4bbc236dc"
        },
        "date": 1675571319712,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 588307,
            "range": "± 4006",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1783,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 306,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 379,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 157012,
            "range": "± 1900",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48995820,
            "range": "± 1297126",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134582943,
            "range": "± 1395440",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163073905,
            "range": "± 955977",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350703248,
            "range": "± 1909774",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182619039,
            "range": "± 1086054",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70465401,
            "range": "± 1091364",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251598210,
            "range": "± 1866774",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 315805,
            "range": "± 1622",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6028,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360581,
            "range": "± 2054",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704927,
            "range": "± 3117",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349107,
            "range": "± 1401",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2104,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353678,
            "range": "± 1149",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6863381972,
            "range": "± 11682013",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1717782,
            "range": "± 13878",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2664433,
            "range": "± 11530",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17500,
            "range": "± 97",
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
          "id": "f7b57da90eb46ef0d9184900c5db801b2cb5be7e",
          "message": "Update to winit 0.28 (#997)\n\n* Update to winit 0.28\r\n\r\n* Double-click title bar on mac to toggle maximize state",
          "timestamp": "2023-02-05T08:10:57+01:00",
          "tree_id": "db8851cd8296dcdbc9d84057cb4cc1a652aa8370",
          "url": "https://github.com/rerun-io/rerun/commit/f7b57da90eb46ef0d9184900c5db801b2cb5be7e"
        },
        "date": 1675581545795,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 577195,
            "range": "± 7033",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1802,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 310,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 380,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155956,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47239947,
            "range": "± 1207371",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124600302,
            "range": "± 1079404",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154032834,
            "range": "± 1009699",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324019336,
            "range": "± 1577582",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177241838,
            "range": "± 750685",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63090812,
            "range": "± 868263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239975477,
            "range": "± 1464726",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318143,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6182,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356350,
            "range": "± 1003",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712442,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346000,
            "range": "± 1601",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2060,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351064,
            "range": "± 1348",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5993764729,
            "range": "± 9190013",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1730608,
            "range": "± 11440",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2692439,
            "range": "± 27331",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16887,
            "range": "± 34",
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
          "id": "78b260fec12f992fedcc2c698590d1442f0e94d6",
          "message": "Increase maximum number of points from 1 Mi to 4 Mi (#1093)\n\nThe colmap example with full history would hit the limit,\r\nbut with this change it works.",
          "timestamp": "2023-02-05T14:13:28+01:00",
          "tree_id": "2366cfc9f73f86f8bd56da5c2fb464ef4ac07fad",
          "url": "https://github.com/rerun-io/rerun/commit/78b260fec12f992fedcc2c698590d1442f0e94d6"
        },
        "date": 1675603313685,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 580976,
            "range": "± 2395",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1779,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 306,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 379,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154762,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51128375,
            "range": "± 1540600",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137254420,
            "range": "± 1985996",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173916595,
            "range": "± 4613191",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354292898,
            "range": "± 4764301",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186300393,
            "range": "± 2857094",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74761076,
            "range": "± 1336070",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257533347,
            "range": "± 3752472",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319211,
            "range": "± 1095",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6170,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359219,
            "range": "± 2660",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 720458,
            "range": "± 3421",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349316,
            "range": "± 2179",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2086,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 363201,
            "range": "± 6111",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7075203442,
            "range": "± 145333315",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1740514,
            "range": "± 11762",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2602656,
            "range": "± 9475",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17053,
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
          "id": "1bd2b6b2c3f5c388a276a6a8134f811d5983e0b5",
          "message": "Hide perf stats in release, + tweak separator lines (#1095)\n\n* Fix: always hide perf stats in release builds\r\n* Use the separator colors from the design\r\n* Hide category icon in tab names",
          "timestamp": "2023-02-05T14:52:29+01:00",
          "tree_id": "042fd736eec72e20a7ef48c06281644215b291de",
          "url": "https://github.com/rerun-io/rerun/commit/1bd2b6b2c3f5c388a276a6a8134f811d5983e0b5"
        },
        "date": 1675605684388,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 572294,
            "range": "± 1917",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1776,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 383,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 157089,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47596840,
            "range": "± 719250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125372496,
            "range": "± 1168629",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153044656,
            "range": "± 619026",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324707665,
            "range": "± 2434925",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174749323,
            "range": "± 946980",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63213959,
            "range": "± 964198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237600364,
            "range": "± 1532686",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 317494,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6111,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356807,
            "range": "± 2094",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715168,
            "range": "± 4116",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348282,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2074,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352995,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5974543525,
            "range": "± 24782481",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1740830,
            "range": "± 9516",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2597596,
            "range": "± 10952",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17003,
            "range": "± 26",
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
          "id": "80d324774379f60efcff36d95a80ea732a8d634b",
          "message": "Use Selection color from design token (#1092)\n\n* selection color from design tokens\r\n\r\n* fmt\r\n\r\n* cargo fmt\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil@rerun.io>\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-02-05T15:10:46+01:00",
          "tree_id": "dd35bb85e2c2ee14a7fed888e9d597cf032abb5b",
          "url": "https://github.com/rerun-io/rerun/commit/80d324774379f60efcff36d95a80ea732a8d634b"
        },
        "date": 1675606751300,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 583292,
            "range": "± 2067",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1781,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 307,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 380,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156875,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50868108,
            "range": "± 1218864",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137591575,
            "range": "± 1353571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163606654,
            "range": "± 727978",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353325589,
            "range": "± 1517888",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185355836,
            "range": "± 994111",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71659315,
            "range": "± 1205726",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255867143,
            "range": "± 1653272",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318395,
            "range": "± 520",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6086,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359977,
            "range": "± 1120",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707576,
            "range": "± 2454",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350686,
            "range": "± 994",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2068,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353854,
            "range": "± 1259",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6988555874,
            "range": "± 17290443",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1732719,
            "range": "± 15970",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2659913,
            "range": "± 11738",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17046,
            "range": "± 169",
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
          "id": "513ffdeafd6048298cebe1531ef4959047c6ccdc",
          "message": "Revert \"Fix python bridge preventing logging transforms to root child (#1097)\" (#1098)\n\nThis reverts commit 891a5b251970fbbbddf534d55f8e4512e63fccc8.",
          "timestamp": "2023-02-05T16:39:11+01:00",
          "tree_id": "ff86a526b3ace8fc275b1ff4464546065a5f500a",
          "url": "https://github.com/rerun-io/rerun/commit/513ffdeafd6048298cebe1531ef4959047c6ccdc"
        },
        "date": 1675612073603,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 577770,
            "range": "± 2455",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1768,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 306,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 380,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154859,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50956811,
            "range": "± 846471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137610020,
            "range": "± 1321254",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165160509,
            "range": "± 1263062",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354421741,
            "range": "± 1969213",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183898147,
            "range": "± 955174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74763783,
            "range": "± 912654",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256548802,
            "range": "± 1649946",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318498,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6145,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366155,
            "range": "± 1499",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715970,
            "range": "± 4210",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348352,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2067,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355217,
            "range": "± 1003",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7027707613,
            "range": "± 20467739",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1713386,
            "range": "± 14194",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2609538,
            "range": "± 9836",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16972,
            "range": "± 96",
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
          "id": "81162f9d58c60d11df8eb9d628589672b60eda94",
          "message": "Don't make top-level spaces their own children (#1100)\n\n* Don't make top-level spaces their own children\r\n* Allow view coordinates to be logged at the root",
          "timestamp": "2023-02-06T10:16:16+01:00",
          "tree_id": "907d14cd899f5dd2fb100816295b54aa079a5c13",
          "url": "https://github.com/rerun-io/rerun/commit/81162f9d58c60d11df8eb9d628589672b60eda94"
        },
        "date": 1675675477757,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581341,
            "range": "± 1816",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1768,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 322,
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
            "value": 156226,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44830054,
            "range": "± 1022837",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122902393,
            "range": "± 1086635",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149246589,
            "range": "± 676380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322241218,
            "range": "± 3088609",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174191655,
            "range": "± 821289",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61822021,
            "range": "± 1017663",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236279081,
            "range": "± 1625218",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 317957,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6109,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360397,
            "range": "± 1402",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708681,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343083,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2076,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353207,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5985380036,
            "range": "± 12515274",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1725116,
            "range": "± 14642",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2643889,
            "range": "± 7633",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17007,
            "range": "± 44",
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
          "id": "1875e0af2b2d7abe9bee6a34877f3cf26d339b55",
          "message": "Rename `Selection` to `Item`, `MultiSelection` to `ItemCollection` (#1104)",
          "timestamp": "2023-02-06T13:47:56+01:00",
          "tree_id": "3b79ebcee247c0858fd32f28b3f91313d9925a8d",
          "url": "https://github.com/rerun-io/rerun/commit/1875e0af2b2d7abe9bee6a34877f3cf26d339b55"
        },
        "date": 1675688307000,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576965,
            "range": "± 7110",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1764,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 308,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 379,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154761,
            "range": "± 1824",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48007404,
            "range": "± 3379848",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125755701,
            "range": "± 1198112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151149138,
            "range": "± 1128664",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324819208,
            "range": "± 2391494",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176137332,
            "range": "± 2650537",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64263824,
            "range": "± 915282",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240787769,
            "range": "± 6058701",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319220,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6023,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 371547,
            "range": "± 6762",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717788,
            "range": "± 2643",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351429,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2069,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355671,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5963737051,
            "range": "± 17456993",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1780539,
            "range": "± 19896",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2623092,
            "range": "± 13902",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17108,
            "range": "± 61",
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
          "id": "4fbd9b5efe6cb7df4ec68626f12ab660bd746755",
          "message": "Use less \"arrow\" in re_viewer (#1105)\n\n* Rename EntityDb::arrow_store to data_store\r\n* arrow_query -> latest_at_query",
          "timestamp": "2023-02-06T14:32:07+01:00",
          "tree_id": "b508a78773bb8fd0f5bcc406fd7952178ad8d2f7",
          "url": "https://github.com/rerun-io/rerun/commit/4fbd9b5efe6cb7df4ec68626f12ab660bd746755"
        },
        "date": 1675690817528,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 574154,
            "range": "± 3137",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1781,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 306,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 379,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156952,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48993067,
            "range": "± 652173",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126273930,
            "range": "± 1579105",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 157162276,
            "range": "± 3816317",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329185445,
            "range": "± 5448962",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176278951,
            "range": "± 1192747",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64707295,
            "range": "± 1169954",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239843760,
            "range": "± 1975416",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318999,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6021,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364558,
            "range": "± 1425",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716158,
            "range": "± 4049",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 354980,
            "range": "± 3126",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2063,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 361647,
            "range": "± 3216",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6168640503,
            "range": "± 92055479",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1774367,
            "range": "± 24537",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2698223,
            "range": "± 33328",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17024,
            "range": "± 68",
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
          "id": "0c9936e484c011cfba3964571960c558281bbd6a",
          "message": "Restore previous non-tracked camera pose on esc (#1102)\n\n* Allow to restore the camera state with escape if a camera was tracked before\r\n* note in HELP_TEXT_3D",
          "timestamp": "2023-02-06T16:14:05+01:00",
          "tree_id": "83b14346f6700df99b0710a1803ff1997f64788b",
          "url": "https://github.com/rerun-io/rerun/commit/0c9936e484c011cfba3964571960c558281bbd6a"
        },
        "date": 1675696944119,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 584453,
            "range": "± 1803",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1805,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 379,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 157872,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47308041,
            "range": "± 1008596",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125935055,
            "range": "± 1754565",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151064785,
            "range": "± 1105324",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 326236781,
            "range": "± 1809468",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176367598,
            "range": "± 884117",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64696352,
            "range": "± 818572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239998035,
            "range": "± 2090572",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319562,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6071,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358912,
            "range": "± 2118",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 710682,
            "range": "± 2503",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346239,
            "range": "± 1299",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2083,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356514,
            "range": "± 1203",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6032979329,
            "range": "± 33967878",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1740081,
            "range": "± 6440",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2616764,
            "range": "± 26106",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17051,
            "range": "± 37",
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
          "id": "23dfd97ffcffbf68cdf6520f320e4e9f022abf8c",
          "message": "Default spaceview names are now last space path bit only unless it is root (#1103)\n\n* Default spaceview names are now last space path bit only unless it is root\r\n* still name space views after single entity if they only have a single entity. remove unnecessary comment",
          "timestamp": "2023-02-06T16:23:22+01:00",
          "tree_id": "fb07896bfffc6d0745d375bc418c39dc6a679ede",
          "url": "https://github.com/rerun-io/rerun/commit/23dfd97ffcffbf68cdf6520f320e4e9f022abf8c"
        },
        "date": 1675697504818,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 568408,
            "range": "± 26222",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1771,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 307,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 380,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155471,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51831327,
            "range": "± 1039126",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136968320,
            "range": "± 1392165",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164183482,
            "range": "± 1217797",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354299060,
            "range": "± 2974230",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184809057,
            "range": "± 862242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75066380,
            "range": "± 907782",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256882328,
            "range": "± 1742160",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318529,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6055,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364525,
            "range": "± 2676",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712996,
            "range": "± 2034",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347828,
            "range": "± 1429",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2061,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352268,
            "range": "± 1128",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6904369637,
            "range": "± 29642805",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1755904,
            "range": "± 15326",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2699543,
            "range": "± 28678",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17028,
            "range": "± 38",
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
          "id": "0a3e8bbcaddd66335c1df08447ed2cceef191f1f",
          "message": "EntityPath::from_str should still parse (#1114)",
          "timestamp": "2023-02-06T18:42:40+01:00",
          "tree_id": "e3861701828527830d892a5f12c66e9b7d25dd9a",
          "url": "https://github.com/rerun-io/rerun/commit/0a3e8bbcaddd66335c1df08447ed2cceef191f1f"
        },
        "date": 1675705868865,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576060,
            "range": "± 6290",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1778,
            "range": "± 1",
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
            "value": 424,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152353,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46084085,
            "range": "± 1467421",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137843492,
            "range": "± 2457453",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165919594,
            "range": "± 866154",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352620315,
            "range": "± 5980745",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183983622,
            "range": "± 2899224",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73332778,
            "range": "± 931439",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255737046,
            "range": "± 4518510",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 317801,
            "range": "± 1213",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6096,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366310,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711719,
            "range": "± 2691",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 354272,
            "range": "± 1938",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2059,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354499,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6842091184,
            "range": "± 60117528",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1778314,
            "range": "± 9788",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2705341,
            "range": "± 20986",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16785,
            "range": "± 252",
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
          "id": "7aaedbf033f95775908c5af72ac337bdc585d988",
          "message": "On push sync the docs to gh-pages (#1086)\n\n* New workflow for building & deploying the rust-docs\r\n* Only update the docs on push to main",
          "timestamp": "2023-02-06T19:46:54+01:00",
          "tree_id": "143c569c2368096acddedaaf64b3dc40cffb7b8c",
          "url": "https://github.com/rerun-io/rerun/commit/7aaedbf033f95775908c5af72ac337bdc585d988"
        },
        "date": 1675709719096,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 578949,
            "range": "± 1704",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1804,
            "range": "± 0",
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
            "value": 425,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153067,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49448217,
            "range": "± 1214609",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136639765,
            "range": "± 2870063",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166587802,
            "range": "± 1171355",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352091936,
            "range": "± 3107043",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183941706,
            "range": "± 2230011",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73566526,
            "range": "± 2588873",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256758246,
            "range": "± 1997541",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319665,
            "range": "± 1456",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6078,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364932,
            "range": "± 2681",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716022,
            "range": "± 5330",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342158,
            "range": "± 1014",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2063,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 360447,
            "range": "± 3156",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6958107805,
            "range": "± 81915776",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1700975,
            "range": "± 15144",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2659038,
            "range": "± 9607",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17052,
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
          "id": "f3dc81a8968940af79ff293b7314187c927290be",
          "message": "Rust SDK: introduce `MsgSender` builder-like interface for logging data (#1037)\n\n* fixing the whole nb_components/nb_rows/nb_instances situation\r\n\r\n* introduce SerializableComponent trait\r\n\r\n* implement MsgSender API\r\n\r\n* port raw_mesh example to MsgSender API\r\n\r\n* clean up raw_mesh example\r\n\r\n* clean up SDK imports\r\n\r\n* sanity checks and tests\r\n\r\n* formatters & linters\r\n\r\n* talk about vicious\r\n\r\n* addressed PR comments",
          "timestamp": "2023-02-07T00:15:33+01:00",
          "tree_id": "07a137317efa9595b39792b5652cc505f4b35009",
          "url": "https://github.com/rerun-io/rerun/commit/f3dc81a8968940af79ff293b7314187c927290be"
        },
        "date": 1675725828639,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 583387,
            "range": "± 3603",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1799,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 359,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 427,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152460,
            "range": "± 1095",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47308390,
            "range": "± 783475",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124640329,
            "range": "± 1056506",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151847159,
            "range": "± 700296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323311700,
            "range": "± 1757303",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173219263,
            "range": "± 1053416",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63272549,
            "range": "± 783314",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236509353,
            "range": "± 2298776",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 314872,
            "range": "± 2187",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6082,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357264,
            "range": "± 2240",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705623,
            "range": "± 11453",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348087,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2093,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351866,
            "range": "± 2522",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6064326254,
            "range": "± 12997162",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1715220,
            "range": "± 15190",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2732384,
            "range": "± 23177",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16872,
            "range": "± 118",
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
          "id": "e73700dcfc05e4e0a234b8a609ad056fb94a33c8",
          "message": "Better ComponentBundle invariants (#1112)\n\n* ComponentBundle now contains a ListArray for better type safety. Made\r\nmembers private.\r\n\r\n* rustdoc fix\r\n\r\n* ComponentBundle: allow cross-crate inlines for all pub APIs\r\n\r\n* MsgBundle: allow cross-crate inlines for all pub APIs\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-02-07T10:01:41+01:00",
          "tree_id": "0b2f5816ab873aa053dc1d5e4af0e8a7d1b84c73",
          "url": "https://github.com/rerun-io/rerun/commit/e73700dcfc05e4e0a234b8a609ad056fb94a33c8"
        },
        "date": 1675761033410,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 862755,
            "range": "± 2810",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1790,
            "range": "± 2",
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156041,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49832597,
            "range": "± 961196",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137873730,
            "range": "± 1544346",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166249463,
            "range": "± 1330924",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 355771714,
            "range": "± 2031838",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186843129,
            "range": "± 928600",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73872708,
            "range": "± 948234",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257762677,
            "range": "± 2065177",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325013,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6175,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358771,
            "range": "± 1838",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705564,
            "range": "± 2596",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351585,
            "range": "± 1582",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2026,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356324,
            "range": "± 1535",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 8507150756,
            "range": "± 37529483",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1740521,
            "range": "± 12506",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 4123109,
            "range": "± 30392",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17142,
            "range": "± 31",
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
          "id": "95fce09bc8f3d8fae16163918c3c57ffbbf23556",
          "message": "Renamed `spawn_and_connect` to just `spawn` (#1101)\n\n* Renamed `spawn_and_connect` to just `spawn`\r\n\r\nAlso removed `spawn_viewer`.\r\n\r\n`spawn` now takes a single `connect: bool=true` argument.\r\n\r\nRational: this is the most common thing users will want to do,\r\nso make it short and sweet and simple.\r\n\r\n* Update link in changelog\r\n\r\n* format\r\n\r\n* merge fix\r\n\r\n* cargo fmt",
          "timestamp": "2023-02-07T10:30:44+01:00",
          "tree_id": "930a49ed1b2708629f9d6f336f515b2514f3b106",
          "url": "https://github.com/rerun-io/rerun/commit/95fce09bc8f3d8fae16163918c3c57ffbbf23556"
        },
        "date": 1675762846467,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 842373,
            "range": "± 1948",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1793,
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
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151387,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45189952,
            "range": "± 1994432",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135290139,
            "range": "± 1486134",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160510812,
            "range": "± 818982",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348832698,
            "range": "± 1955886",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181222367,
            "range": "± 1010462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71033358,
            "range": "± 1411792",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249378049,
            "range": "± 2525480",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323957,
            "range": "± 1215",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6270,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 349871,
            "range": "± 824",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697234,
            "range": "± 2166",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346573,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2017,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350164,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 8311635554,
            "range": "± 17689051",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1696043,
            "range": "± 8448",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 4059197,
            "range": "± 10989",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17135,
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
          "id": "6f821c206d5fb51b189e95e3f9565cd955ec1455",
          "message": "Windows/Linux: work towards replacing native window frame with our own custom buttons (#1094)\n\n* Windows/Linux: replace native window frame with our own custom buttons\r\n\r\n* Update egui with a cursor bug fix\r\n\r\n* Work on adding rounded corners\r\n\r\n* Set bottom panel frame in re_ui\r\n\r\n* Refactor: break out wait_screen_ui\r\n\r\n* Put all other panels within one master CentralPanel\r\n\r\n* Paint a window frame around it all\r\n\r\n* Round the corners of the memory panel\r\n\r\n* Fill in gap above time panel rounding\r\n\r\n* Fix web build\r\n\r\n* Disable the custom window frame feature\r\n\r\n* update egui with fix for wgpu transparency\r\n\r\n* Enable the custom window frame for !mac\r\n\r\n* Disable the custom window decorations until we solve the problems\r\n\r\n* Use transparent clear_color",
          "timestamp": "2023-02-07T13:09:45+01:00",
          "tree_id": "93b50fc13d1c156ffa3ade880df73e5cc05bdedc",
          "url": "https://github.com/rerun-io/rerun/commit/6f821c206d5fb51b189e95e3f9565cd955ec1455"
        },
        "date": 1675772293547,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 820255,
            "range": "± 11670",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1776,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 339,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 410,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148002,
            "range": "± 2172",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 39593044,
            "range": "± 1878927",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 120011728,
            "range": "± 2169726",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 148438286,
            "range": "± 3317634",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 313723148,
            "range": "± 4350450",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 167188332,
            "range": "± 2153283",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59861605,
            "range": "± 1211675",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 228067870,
            "range": "± 3782052",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311642,
            "range": "± 4460",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5842,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355631,
            "range": "± 3947",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712626,
            "range": "± 9230",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342260,
            "range": "± 3414",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1979,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352742,
            "range": "± 3568",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7459667968,
            "range": "± 33985239",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1637274,
            "range": "± 25646",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3944573,
            "range": "± 49194",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17230,
            "range": "± 273",
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
          "id": "bae1a67656d3f01a63cda253798343baeaba99cc",
          "message": "use forward/backwards icon in selection panel (#1128)",
          "timestamp": "2023-02-07T15:43:46+01:00",
          "tree_id": "45307e33a006cc9c3566a340258b7c4f9831ddc6",
          "url": "https://github.com/rerun-io/rerun/commit/bae1a67656d3f01a63cda253798343baeaba99cc"
        },
        "date": 1675781565817,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 821913,
            "range": "± 11041",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1801,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 339,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 407,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150405,
            "range": "± 2228",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42277255,
            "range": "± 1595294",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 129416361,
            "range": "± 1428924",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156833966,
            "range": "± 2127790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 334208659,
            "range": "± 3328819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179711070,
            "range": "± 4543733",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71184612,
            "range": "± 1692313",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250798145,
            "range": "± 1935672",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326040,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6087,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363804,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 720593,
            "range": "± 2223",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351658,
            "range": "± 3764",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2008,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356360,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 8303332867,
            "range": "± 35163700",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1731067,
            "range": "± 16256",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 4124921,
            "range": "± 36210",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17762,
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
          "id": "1b66c57b5111a87dcb612f8c2fcf79f823288a6e",
          "message": "gh-pages docs should redirect to `rerun` crate (#1130)",
          "timestamp": "2023-02-07T19:17:01+01:00",
          "tree_id": "a0a53c0d77849349650fa354c6497a4a486e855e",
          "url": "https://github.com/rerun-io/rerun/commit/1b66c57b5111a87dcb612f8c2fcf79f823288a6e"
        },
        "date": 1675794437111,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 864643,
            "range": "± 4217",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1817,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 347,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 414,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153274,
            "range": "± 1148",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45534559,
            "range": "± 1329384",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 131879701,
            "range": "± 2113972",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163162294,
            "range": "± 1205581",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348034064,
            "range": "± 1974165",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181173904,
            "range": "± 1372249",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71177525,
            "range": "± 864895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 248807033,
            "range": "± 3092972",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 320467,
            "range": "± 2907",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6006,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361084,
            "range": "± 2556",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 718263,
            "range": "± 6427",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346680,
            "range": "± 1974",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2022,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 342691,
            "range": "± 2064",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 8194043140,
            "range": "± 14352965",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1726714,
            "range": "± 18257",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 4060360,
            "range": "± 36542",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17902,
            "range": "± 31",
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
          "id": "2d07c3daea3854c65e8afaa70497f21291a3e109",
          "message": "Don't box/unbox values-array on insert (#1137)\n\n* Don't box/unbox values-array on insert\r\n* Renaming value -> value_boxed and more cleanup for the affected call-sites",
          "timestamp": "2023-02-08T01:35:07+01:00",
          "tree_id": "86c0860ed410d20170d39dad2a275a36ae1a6941",
          "url": "https://github.com/rerun-io/rerun/commit/2d07c3daea3854c65e8afaa70497f21291a3e109"
        },
        "date": 1675817016569,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553930,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1815,
            "range": "± 9",
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
            "value": 423,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152949,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48646096,
            "range": "± 1591895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134243223,
            "range": "± 1221788",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165049791,
            "range": "± 1104853",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 347496246,
            "range": "± 1663549",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184376952,
            "range": "± 952025",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70698552,
            "range": "± 902067",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255052290,
            "range": "± 1718048",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322526,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6113,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366240,
            "range": "± 2650",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717593,
            "range": "± 2219",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347417,
            "range": "± 1669",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2016,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353716,
            "range": "± 909",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6771218496,
            "range": "± 25156015",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1751383,
            "range": "± 13843",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2607425,
            "range": "± 18196",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17791,
            "range": "± 21",
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
          "id": "decadf4f80a966cc338b8425b37ca44f25d1fe5f",
          "message": "Rust SDK: objectron (#1099)\n\n* wip\r\n\r\n* matching 1-to-1\r\n\r\n* cranky hell\r\n\r\n* just fmt\r\n\r\n* forgot those\r\n\r\n* dont rebuild protos on CI\r\n\r\n* pr comments: more points inlining all around\r\n\r\n* --frames, --run-forever, --per-frame-sleep\r\n\r\n* addressed PR comments\r\n\r\n* reflecting changes to python\r\n\r\n* all last minute changes\r\n\r\n* even more last minute changes",
          "timestamp": "2023-02-08T10:40:53+01:00",
          "tree_id": "9d9000c95083273640dcbdc292498d568c9172b4",
          "url": "https://github.com/rerun-io/rerun/commit/decadf4f80a966cc338b8425b37ca44f25d1fe5f"
        },
        "date": 1675849766888,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 570742,
            "range": "± 10589",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1814,
            "range": "± 1",
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
            "value": 423,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156516,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52359357,
            "range": "± 950452",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141101279,
            "range": "± 1941134",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 176240670,
            "range": "± 4064797",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 374777288,
            "range": "± 4586242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190934873,
            "range": "± 3252009",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76359522,
            "range": "± 2100892",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260769168,
            "range": "± 6449521",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331336,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6096,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 373004,
            "range": "± 5598",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 757824,
            "range": "± 7391",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 373742,
            "range": "± 4920",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2069,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353823,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7620182917,
            "range": "± 505103767",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 2004860,
            "range": "± 192561",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3129213,
            "range": "± 427546",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17600,
            "range": "± 13",
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
          "id": "bfcda14e42f1f2bf6bdc817c73dae440c7ce0b50",
          "message": "Rust SDK: `api_demo` example (#1068)\n\n* boilerplate\r\n\r\n* demo_bbox\r\n\r\n* demo_extension_components\r\n\r\n* demo_log_cleared\r\n\r\n* demo_points_3d\r\n\r\n* demo_text_logs\r\n\r\n* remove old sdk examples\r\n\r\n* demo_transforms_3d\r\n\r\n* demo_rects\r\n\r\n* demo_segmentation\r\n\r\n* general clean up + bbox demo matching 1-to-1\r\n\r\n* extension_component demo matching 1-to-1\r\n\r\n* log_cleared demo matching 1-to-1\r\n\r\n* 3d_points demo matching 1-to-1\r\n\r\n* Revert \"remove old sdk examples\"\r\n\r\nThis reverts commit c62561115dc81103d1a1f5aed3f4a3935e94fb11.\r\n\r\n* rects demo matching 1-to-1\r\n\r\n* segmentation demo matching 1-to-1\r\n\r\n* text demo matching 1-to-1\r\n\r\n* transforms_3d demo matching 1-to-1 + enable glam stuff\r\n\r\n* formatters linters etc\r\n\r\n* squash merge cleanup branch\r\n\r\ncommit aa670318256d9c1e04abedeaa11d5db17e6a2844\r\nAuthor: Clement Rey <cr.rey.clement@gmail.com>\r\nDate:   Mon Feb 6 12:43:38 2023 +0100\r\n\r\n    remove time stuff\r\n\r\ncommit cace6fa5410905ce7934fb1752fd73504381cbda\r\nAuthor: Clement Rey <cr.rey.clement@gmail.com>\r\nDate:   Mon Feb 6 12:41:01 2023 +0100\r\n\r\n    remove rerun_sdk examples\r\n\r\n* warnings gotta go\r\n\r\n* todos\r\n\r\n* all demos by default\r\n\r\n* MsgSender: cross-crate inlines at least for the time APIs\r\n\r\n* tricky log times\r\n\r\n* last minute changes",
          "timestamp": "2023-02-08T11:01:06+01:00",
          "tree_id": "ec10859b61f2064148e6807f142d43cb14e82025",
          "url": "https://github.com/rerun-io/rerun/commit/bfcda14e42f1f2bf6bdc817c73dae440c7ce0b50"
        },
        "date": 1675850951370,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 556715,
            "range": "± 29302",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1819,
            "range": "± 9",
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
            "value": 428,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154132,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43605179,
            "range": "± 1008835",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123436657,
            "range": "± 1038519",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150694917,
            "range": "± 989402",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 319011265,
            "range": "± 3069639",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173845803,
            "range": "± 1044503",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63076030,
            "range": "± 1281509",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236208660,
            "range": "± 2807753",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 313555,
            "range": "± 1436",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6032,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356348,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708293,
            "range": "± 2018",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344210,
            "range": "± 19979",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2040,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357527,
            "range": "± 997",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5992946107,
            "range": "± 12961203",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1763599,
            "range": "± 13170",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2570281,
            "range": "± 11209",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17591,
            "range": "± 22",
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
          "id": "0de263c9026214c9e98a519fb56d35de02ad560d",
          "message": "UI spacing tweaks (#1083)\n\n* Fix spacing issues in Grid\r\n* add spacing between spaceview buttons and rest of selection ui\r\n* Set a better interact_height, found by empiricism\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\nCo-authored-by: Nikolaus West <niko@grapic.co>",
          "timestamp": "2023-02-08T11:54:50+01:00",
          "tree_id": "f9fb23b86f50e5b179967e0b8a5027ef0e4c90a0",
          "url": "https://github.com/rerun-io/rerun/commit/0de263c9026214c9e98a519fb56d35de02ad560d"
        },
        "date": 1675854266040,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 546367,
            "range": "± 1692",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1846,
            "range": "± 4",
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
            "value": 426,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153396,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47198306,
            "range": "± 553459",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126063375,
            "range": "± 1446971",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 155220768,
            "range": "± 1744842",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 326211104,
            "range": "± 7269812",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176022931,
            "range": "± 938533",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65906352,
            "range": "± 909983",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 238314592,
            "range": "± 1606596",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 277461,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6349,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 372568,
            "range": "± 1459",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 671821,
            "range": "± 2869",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347763,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2081,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354397,
            "range": "± 1199",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6047298099,
            "range": "± 39204495",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1712432,
            "range": "± 11992",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2633015,
            "range": "± 19147",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16580,
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
          "id": "dd38835068702345e0262a50d5d9f8405240892b",
          "message": "bacon: work around infinite build loop (#1144)\n\n* work around infinite build loop\r\n\r\n* wrong!",
          "timestamp": "2023-02-08T15:34:33+01:00",
          "tree_id": "8c164167c23c3d820711ebde3762c144421c79fd",
          "url": "https://github.com/rerun-io/rerun/commit/dd38835068702345e0262a50d5d9f8405240892b"
        },
        "date": 1675867364974,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 545642,
            "range": "± 2296",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1852,
            "range": "± 3",
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
            "value": 427,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154652,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45180855,
            "range": "± 1003205",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124100953,
            "range": "± 1084547",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149482767,
            "range": "± 1832392",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 318095482,
            "range": "± 1439425",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176819653,
            "range": "± 853676",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62090207,
            "range": "± 755043",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240078680,
            "range": "± 1692145",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 278875,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6365,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363563,
            "range": "± 1308",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 671697,
            "range": "± 2215",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345710,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2032,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355745,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6330312329,
            "range": "± 45967815",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1691316,
            "range": "± 5811",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2604366,
            "range": "± 10175",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16724,
            "range": "± 65",
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
          "id": "4e8fd7e2ac502418e35ec1fa303f40d64d3af432",
          "message": "Fetch before pushing docs & put python docs in sub-directories (#1143)",
          "timestamp": "2023-02-08T15:56:58+01:00",
          "tree_id": "9561c9383b5edd622bd165c7acd0bd45be96e8ca",
          "url": "https://github.com/rerun-io/rerun/commit/4e8fd7e2ac502418e35ec1fa303f40d64d3af432"
        },
        "date": 1675868698744,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 541831,
            "range": "± 1872",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1811,
            "range": "± 37",
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
            "value": 153967,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45213237,
            "range": "± 1015835",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123794393,
            "range": "± 1056398",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152159001,
            "range": "± 919819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 320578323,
            "range": "± 1346704",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174192425,
            "range": "± 947004",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64862920,
            "range": "± 771898",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 235173317,
            "range": "± 1515838",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 277067,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6372,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366061,
            "range": "± 1632",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 665890,
            "range": "± 2658",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343768,
            "range": "± 1183",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2023,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351736,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5958742747,
            "range": "± 34018576",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1698563,
            "range": "± 55649",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2782195,
            "range": "± 364785",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16612,
            "range": "± 49",
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
          "id": "951150844f2bd9a59d70694612bb9ffa090ac0cd",
          "message": "Fix mike args since the docs are wrong (#1146)",
          "timestamp": "2023-02-08T16:16:23+01:00",
          "tree_id": "150f4b2c8686a7ebd78c2c50337d6463481988af",
          "url": "https://github.com/rerun-io/rerun/commit/951150844f2bd9a59d70694612bb9ffa090ac0cd"
        },
        "date": 1675869870286,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 543553,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1836,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 360,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 424,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153505,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47305025,
            "range": "± 637152",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125306313,
            "range": "± 1175779",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153397360,
            "range": "± 2592464",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 326399176,
            "range": "± 2681785",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177205913,
            "range": "± 1099164",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65422512,
            "range": "± 727796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 238520663,
            "range": "± 1530482",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 279061,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6245,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365438,
            "range": "± 1924",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 665607,
            "range": "± 3918",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350171,
            "range": "± 1537",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2012,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355586,
            "range": "± 2348",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6008046193,
            "range": "± 56723848",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1682662,
            "range": "± 16252",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2704485,
            "range": "± 56537",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16583,
            "range": "± 31",
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