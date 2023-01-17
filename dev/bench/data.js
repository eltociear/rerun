window.BENCHMARK_DATA = {
  "lastUpdate": 1673961560426,
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
          "id": "2a714c4acd40e532c683e971941b8c6e87f13b4b",
          "message": "Add Lines3dPart to the Spatial Scene for Arrow Lines (#728)\n\n* Lines3DPart->Lines3DPartClassic\r\n* Add the Line3D ScenPart",
          "timestamp": "2023-01-11T16:55:21+01:00",
          "tree_id": "18e28080708f2d3416e62c1b653b4d1841013d3d",
          "url": "https://github.com/rerun-io/rerun/commit/2a714c4acd40e532c683e971941b8c6e87f13b4b"
        },
        "date": 1673453290109,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 274018,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 720,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 377,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45470,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 927694423,
            "range": "± 5849035",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 370302,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 103061828,
            "range": "± 840789",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10998,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23479508,
            "range": "± 224572",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7231,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4792137,
            "range": "± 233209",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12429932,
            "range": "± 489283",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15804702,
            "range": "± 795797",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38678370,
            "range": "± 678153",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52834647,
            "range": "± 1161462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136395261,
            "range": "± 1179023",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164129825,
            "range": "± 2560819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357604191,
            "range": "± 1750826",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187687549,
            "range": "± 945558",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76879790,
            "range": "± 1100281",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258230645,
            "range": "± 1719474",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3578,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417319,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423770,
            "range": "± 1421",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 735706,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 307956,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6333,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366469,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707565,
            "range": "± 1735",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351491,
            "range": "± 1378",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2123,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351716,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6739228901,
            "range": "± 12616762",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1657099,
            "range": "± 12711",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2586894,
            "range": "± 11290",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14839,
            "range": "± 39",
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
          "id": "6a31e3ae2206841770412fdcad3d0a48bf740fb3",
          "message": "re_datastore: make autogenerated cluster keys always timeless (#720)\n\n* 63bits RowIndex\r\n\r\n* always-timeless generated cluster components\r\n\r\n* self-review\r\n\r\n* to_dataframe() fixes for new row indices",
          "timestamp": "2023-01-11T19:13:39+01:00",
          "tree_id": "f5de78d13125c237457df62e9e89c12b87523593",
          "url": "https://github.com/rerun-io/rerun/commit/6a31e3ae2206841770412fdcad3d0a48bf740fb3"
        },
        "date": 1673461675216,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280967,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 724,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45193,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 848944741,
            "range": "± 3787779",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 377260,
            "range": "± 1091",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95329227,
            "range": "± 592224",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10968,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22194781,
            "range": "± 209709",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7241,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4316660,
            "range": "± 15984",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10857029,
            "range": "± 150248",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15008830,
            "range": "± 277098",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35544684,
            "range": "± 462414",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45464569,
            "range": "± 820174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125709439,
            "range": "± 1143207",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151970889,
            "range": "± 712674",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328160592,
            "range": "± 1804818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176779717,
            "range": "± 833754",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68782405,
            "range": "± 985267",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241176050,
            "range": "± 1652451",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3580,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417752,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423306,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731647,
            "range": "± 1030",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 313507,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6393,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364266,
            "range": "± 998",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 702861,
            "range": "± 6309",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350256,
            "range": "± 1224",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2158,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358107,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6052338896,
            "range": "± 49218554",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1634575,
            "range": "± 7799",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2625207,
            "range": "± 9280",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14297,
            "range": "± 38",
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
          "id": "6e688a4759e70675a67821c9fabcf475d2a57697",
          "message": "Macro-ify the visitor functions for EntityView (#733)",
          "timestamp": "2023-01-11T21:07:42+01:00",
          "tree_id": "e09a4e55fa6cbf5262477fa042feb6653228e713",
          "url": "https://github.com/rerun-io/rerun/commit/6e688a4759e70675a67821c9fabcf475d2a57697"
        },
        "date": 1673468439997,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280253,
            "range": "± 1543",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 716,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 371,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 48195,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 955963332,
            "range": "± 23597522",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 383722,
            "range": "± 7697",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 104203146,
            "range": "± 890673",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10807,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23685319,
            "range": "± 224914",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7216,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4974808,
            "range": "± 477651",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11847423,
            "range": "± 544713",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15541111,
            "range": "± 625312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38951514,
            "range": "± 1129085",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51860921,
            "range": "± 1057134",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139187223,
            "range": "± 1310259",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163779558,
            "range": "± 873201",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353764234,
            "range": "± 2985100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184274733,
            "range": "± 2090382",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 79955886,
            "range": "± 9136810",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263071256,
            "range": "± 2070912",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3426,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417771,
            "range": "± 1426",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423625,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 720643,
            "range": "± 6684",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 309143,
            "range": "± 3711",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6268,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360037,
            "range": "± 3298",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697420,
            "range": "± 6348",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349229,
            "range": "± 2299",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2106,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357711,
            "range": "± 1850",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7047240935,
            "range": "± 16570318",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1583980,
            "range": "± 18948",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2582463,
            "range": "± 23373",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14234,
            "range": "± 173",
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
          "id": "e3ca6f703f365513638ce7a8131b922530fcf52c",
          "message": "Implement 3d boxes for Arrow (#734)",
          "timestamp": "2023-01-11T21:31:31+01:00",
          "tree_id": "0095c7840cbe0a605d753d1b21d771a93e3abe60",
          "url": "https://github.com/rerun-io/rerun/commit/e3ca6f703f365513638ce7a8131b922530fcf52c"
        },
        "date": 1673469870403,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276948,
            "range": "± 3422",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 732,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 316,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 370,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45870,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1020106713,
            "range": "± 4929722",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 363125,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 102905951,
            "range": "± 989332",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10686,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22602995,
            "range": "± 468225",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7140,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4347862,
            "range": "± 93127",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13247135,
            "range": "± 626338",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15714670,
            "range": "± 469915",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37459257,
            "range": "± 604183",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53209486,
            "range": "± 1155950",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137832368,
            "range": "± 1551403",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162006064,
            "range": "± 1277750",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353020292,
            "range": "± 3266245",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185082180,
            "range": "± 1792019",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 79910790,
            "range": "± 1140719",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258575425,
            "range": "± 2416113",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3442,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 421679,
            "range": "± 3796",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 425618,
            "range": "± 4952",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 716688,
            "range": "± 6131",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308063,
            "range": "± 2922",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6194,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358268,
            "range": "± 2792",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 699635,
            "range": "± 6023",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345139,
            "range": "± 1807",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2132,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353826,
            "range": "± 2334",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7005950511,
            "range": "± 17559333",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1603537,
            "range": "± 19147",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2545706,
            "range": "± 20770",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14034,
            "range": "± 170",
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
          "id": "2200546f3d2e51fd3d89cf36f3efbaa717a528f8",
          "message": "Timeless data support for arrow on logging-APIs and UI (#727)\n\n* Do some extra book-keeping for timeless directly in the objecttree\r\n* Fix the view_coord paths on the transform3d example",
          "timestamp": "2023-01-11T23:06:21+01:00",
          "tree_id": "54eca1cb762869b9d12e86f196b9638faf510a36",
          "url": "https://github.com/rerun-io/rerun/commit/2200546f3d2e51fd3d89cf36f3efbaa717a528f8"
        },
        "date": 1673475561297,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276125,
            "range": "± 2809",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 709,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 296,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 362,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 43334,
            "range": "± 680",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 956927639,
            "range": "± 7607901",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 354436,
            "range": "± 3414",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95819565,
            "range": "± 1103240",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10749,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22638884,
            "range": "± 548833",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7098,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4290897,
            "range": "± 66534",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10911265,
            "range": "± 537501",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15164541,
            "range": "± 601099",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35742948,
            "range": "± 919175",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49898678,
            "range": "± 1651648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135097312,
            "range": "± 1631469",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161996179,
            "range": "± 1830086",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 349418650,
            "range": "± 5261240",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183856431,
            "range": "± 2704617",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75347165,
            "range": "± 1435962",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255416249,
            "range": "± 4822220",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3379,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 420067,
            "range": "± 6106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 429689,
            "range": "± 7208",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 726565,
            "range": "± 5187",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311139,
            "range": "± 2712",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6203,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361066,
            "range": "± 4612",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 696588,
            "range": "± 9911",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346193,
            "range": "± 2107",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2139,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353387,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6824968791,
            "range": "± 47849161",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1604864,
            "range": "± 21288",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2512061,
            "range": "± 25603",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14192,
            "range": "± 218",
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
          "id": "fcab325363247c1b6276f54cdb27ca7c52272cd1",
          "message": "re_datastore: mem stats (#722)\n\n* 63bits RowIndex\r\n\r\n* always-timeless generated cluster components\r\n\r\n* self-review\r\n\r\n* make room for store stats\r\n\r\n* store stats living on their own\r\n\r\n* store stats in memory panel\r\n\r\n* make it clearer what's what\r\n\r\n* to_dataframe() fixes for new row indices",
          "timestamp": "2023-01-12T09:02:51+01:00",
          "tree_id": "fe4f2eabe0df1ad888f9b987c86cdb4c0a0c48b9",
          "url": "https://github.com/rerun-io/rerun/commit/fcab325363247c1b6276f54cdb27ca7c52272cd1"
        },
        "date": 1673511352563,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 281666,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 723,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45804,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 976459081,
            "range": "± 8716927",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 359268,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97742476,
            "range": "± 589631",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10998,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23578478,
            "range": "± 182022",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6683,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4447146,
            "range": "± 118373",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12122334,
            "range": "± 648449",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16211674,
            "range": "± 656406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38642897,
            "range": "± 592501",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53401907,
            "range": "± 704979",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139976057,
            "range": "± 1314254",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166787215,
            "range": "± 669322",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 362488900,
            "range": "± 1697050",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189924949,
            "range": "± 966428",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80876262,
            "range": "± 919917",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263287523,
            "range": "± 1549011",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3456,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 427599,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 434088,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 730640,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 314941,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6303,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364170,
            "range": "± 1462",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712254,
            "range": "± 2535",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348651,
            "range": "± 988",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2176,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356498,
            "range": "± 1114",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6976403684,
            "range": "± 27973478",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1635472,
            "range": "± 12017",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2580279,
            "range": "± 12326",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 12995,
            "range": "± 28",
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
          "id": "84c8121a4e12aec49d7a4bb988c32d4cc00fbf29",
          "message": "Arrow support for log_cleared (#735)\n\n* Arrow support for log_cleared\r\n* Add the clear-events back to the object-tree",
          "timestamp": "2023-01-12T16:15:56+01:00",
          "tree_id": "6b95efa620c7815c7ffc087ccf5db5389705ca78",
          "url": "https://github.com/rerun-io/rerun/commit/84c8121a4e12aec49d7a4bb988c32d4cc00fbf29"
        },
        "date": 1673537341305,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276559,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 727,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 374,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45815,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 965650183,
            "range": "± 4644032",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 353784,
            "range": "± 1946",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97594553,
            "range": "± 536039",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10975,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23532064,
            "range": "± 206664",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6627,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4449795,
            "range": "± 122786",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12375403,
            "range": "± 688530",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17390559,
            "range": "± 969924",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37688850,
            "range": "± 620093",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52495784,
            "range": "± 794076",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136823110,
            "range": "± 1368087",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165665151,
            "range": "± 870741",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357979330,
            "range": "± 1340935",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187583192,
            "range": "± 988958",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77590500,
            "range": "± 1376023",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260297850,
            "range": "± 1654173",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3522,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 426891,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 433205,
            "range": "± 2649",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 728080,
            "range": "± 1421",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311403,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6393,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362443,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706973,
            "range": "± 3103",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348242,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2175,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355645,
            "range": "± 838",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6839471537,
            "range": "± 18181163",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1651766,
            "range": "± 15495",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2656968,
            "range": "± 11276",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 12911,
            "range": "± 9",
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
          "id": "c6399ad8d16018e08fed24b02b48ef4dbff519fd",
          "message": "Arrow Tensor logging with Image display (#714)\n\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-01-12T16:41:41+01:00",
          "tree_id": "79da378a159d0fd7361ed54e65b38abf40ca011b",
          "url": "https://github.com/rerun-io/rerun/commit/c6399ad8d16018e08fed24b02b48ef4dbff519fd"
        },
        "date": 1673538953262,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 281337,
            "range": "± 940",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 725,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 371,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45616,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1000041563,
            "range": "± 4826371",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 380941,
            "range": "± 2337",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 98082509,
            "range": "± 548268",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10974,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23671476,
            "range": "± 209425",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7226,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4298346,
            "range": "± 321390",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13606104,
            "range": "± 673017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17249920,
            "range": "± 1315776",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38877424,
            "range": "± 712725",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52922837,
            "range": "± 879012",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138699222,
            "range": "± 1366861",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166067481,
            "range": "± 1459015",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 360366737,
            "range": "± 2238860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190634344,
            "range": "± 858703",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80468659,
            "range": "± 1116716",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 266559261,
            "range": "± 2335569",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3548,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 427889,
            "range": "± 1075",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 434037,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732313,
            "range": "± 1287",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 316209,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6260,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361294,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717988,
            "range": "± 3316",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347708,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2166,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351859,
            "range": "± 1417",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6939614106,
            "range": "± 30576582",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1648412,
            "range": "± 15555",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2652920,
            "range": "± 53097",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15322,
            "range": "± 20",
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
          "id": "7cd1f338297f1f26bde9e192b83fb00c04570ad0",
          "message": "Cameras are now handled like other scene parts (#738)\n\n* \"the camera\" is now consistently at the projection matrix\r\n   * this is what is shown when a camera is selected, Fixes #638\r\n* It is not necessary to define a rigid transform to define a camera - the camera just picks the rigid transform at the place where it sits in the hierarchy, i.e. it defaults to identity and transforms can be higher up in the tree above the projection transform\r\n* `SpaceCoordinates` default now to RUB and can be logged anywhere at or above the projection matrix of a camera, Fixes #731",
          "timestamp": "2023-01-12T18:24:36+01:00",
          "tree_id": "74a8323a918ea1303f4c47a8c582700afd891604",
          "url": "https://github.com/rerun-io/rerun/commit/7cd1f338297f1f26bde9e192b83fb00c04570ad0"
        },
        "date": 1673545059903,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 279325,
            "range": "± 924",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 722,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 375,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45781,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 987375957,
            "range": "± 8873665",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 417272,
            "range": "± 1633",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97010113,
            "range": "± 521312",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10978,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22774683,
            "range": "± 541866",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7273,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4250699,
            "range": "± 51439",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11068985,
            "range": "± 417721",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16601050,
            "range": "± 1382327",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37746833,
            "range": "± 665547",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52391568,
            "range": "± 960741",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139313344,
            "range": "± 1472522",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163103827,
            "range": "± 1717978",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 355536605,
            "range": "± 1671881",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188388908,
            "range": "± 1131968",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 79380145,
            "range": "± 1204784",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263634166,
            "range": "± 1855429",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3531,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 424990,
            "range": "± 974",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 430947,
            "range": "± 1375",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 728606,
            "range": "± 1911",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 315178,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6315,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366655,
            "range": "± 1696",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706502,
            "range": "± 1870",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351258,
            "range": "± 1870",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2168,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354014,
            "range": "± 1007",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6914257874,
            "range": "± 17822220",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1646651,
            "range": "± 18424",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2651069,
            "range": "± 12927",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15376,
            "range": "± 47",
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
          "id": "7712a65b2314a99bbfed4c865a7d394f883d7790",
          "message": "fix incorrect rectangle outline on hover of images (#745)",
          "timestamp": "2023-01-12T19:42:42+01:00",
          "tree_id": "44d95542e62f578174b473d9c778bd14c959b27b",
          "url": "https://github.com/rerun-io/rerun/commit/7712a65b2314a99bbfed4c865a7d394f883d7790"
        },
        "date": 1673550253549,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280690,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 734,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45591,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 868557560,
            "range": "± 4786789",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 372865,
            "range": "± 2822",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 90355694,
            "range": "± 501302",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10983,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23342641,
            "range": "± 44167",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7213,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 6380660,
            "range": "± 665053",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13969200,
            "range": "± 106593",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 21427163,
            "range": "± 335342",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39706939,
            "range": "± 243112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50536693,
            "range": "± 438793",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 128623807,
            "range": "± 1089936",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164227212,
            "range": "± 1634933",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 342961014,
            "range": "± 1722880",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185804277,
            "range": "± 1028633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71160748,
            "range": "± 891238",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252630365,
            "range": "± 1727536",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3473,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 427882,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 435144,
            "range": "± 1512",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 736591,
            "range": "± 2148",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 316378,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6226,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 369042,
            "range": "± 1466",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 728500,
            "range": "± 3376",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 360055,
            "range": "± 3051",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2134,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 363709,
            "range": "± 3033",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6403954817,
            "range": "± 19704646",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1722722,
            "range": "± 50940",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2874229,
            "range": "± 161950",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15435,
            "range": "± 36",
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
          "id": "4ab4788ac31f19417bef543afcb42585d4066351",
          "message": "Merge arrow2-convert rebase 90 with rerun_main (#747)\n\n* Merge arrow2-convert rebase 90 with rerun_main\r\n* update cargo.lock",
          "timestamp": "2023-01-12T20:11:56+01:00",
          "tree_id": "b5bd061f7d137ce347452fd0797828090433733a",
          "url": "https://github.com/rerun-io/rerun/commit/4ab4788ac31f19417bef543afcb42585d4066351"
        },
        "date": 1673552091444,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 277564,
            "range": "± 1019",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 735,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 371,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45769,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 986858523,
            "range": "± 7971465",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 383165,
            "range": "± 1818",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 98066034,
            "range": "± 613724",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10945,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23714082,
            "range": "± 183159",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7196,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4545011,
            "range": "± 148070",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13064498,
            "range": "± 616800",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17713103,
            "range": "± 1201636",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38109433,
            "range": "± 674464",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53435020,
            "range": "± 646088",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139301559,
            "range": "± 1356032",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165462041,
            "range": "± 797497",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358850851,
            "range": "± 1494644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189185550,
            "range": "± 883434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80621085,
            "range": "± 981599",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 266956260,
            "range": "± 1642399",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3470,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 384215,
            "range": "± 836",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 389918,
            "range": "± 2075",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 749810,
            "range": "± 3481",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 310976,
            "range": "± 2597",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6153,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348029,
            "range": "± 1329",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 695650,
            "range": "± 2739",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346180,
            "range": "± 1260",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2137,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354575,
            "range": "± 1126",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7046620938,
            "range": "± 21488155",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1654391,
            "range": "± 27028",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2637516,
            "range": "± 11006",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13938,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 38,
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
          "id": "392911ce1e14f78e9db72c0dcf505cffa35c6cdb",
          "message": "Arrow: Handle splats during query iteration (#736)\n\n* Start logging splats with a special instance-id\r\n* Splat during iteration on special instance-id\r\n* Full python splats for points and rects",
          "timestamp": "2023-01-12T21:24:49+01:00",
          "tree_id": "b1f7848d86fabc46b5bbf8cdf3d9f09748d3e9af",
          "url": "https://github.com/rerun-io/rerun/commit/392911ce1e14f78e9db72c0dcf505cffa35c6cdb"
        },
        "date": 1673555966960,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 278407,
            "range": "± 5708",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 731,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45794,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 872301025,
            "range": "± 16841009",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 366173,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88096290,
            "range": "± 348489",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10969,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22200752,
            "range": "± 221891",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7220,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4289024,
            "range": "± 53177",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10956847,
            "range": "± 245832",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15405542,
            "range": "± 370830",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34707888,
            "range": "± 555494",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45976765,
            "range": "± 923712",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124480255,
            "range": "± 1109171",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149390425,
            "range": "± 497115",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324849178,
            "range": "± 2259959",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178290975,
            "range": "± 774780",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67338755,
            "range": "± 936159",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241657342,
            "range": "± 1479139",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3591,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393344,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 407290,
            "range": "± 52292",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 736192,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311464,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6140,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363029,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707048,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350586,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2107,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355693,
            "range": "± 653",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5942184998,
            "range": "± 25522646",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1621234,
            "range": "± 4550",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2621239,
            "range": "± 8603",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15727,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 38,
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
          "id": "579b0c6f66cf6cbe3139669263de6d1764b29ee1",
          "message": "Log arrow pinholes (#751)",
          "timestamp": "2023-01-13T09:18:17+01:00",
          "tree_id": "89690636759d92f38397ea9d11a031d0335a65b7",
          "url": "https://github.com/rerun-io/rerun/commit/579b0c6f66cf6cbe3139669263de6d1764b29ee1"
        },
        "date": 1673598648902,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 275411,
            "range": "± 707",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 737,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 376,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45465,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 843252679,
            "range": "± 4907319",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 376591,
            "range": "± 2671",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88364063,
            "range": "± 342626",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10950,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23066381,
            "range": "± 96587",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7177,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4482990,
            "range": "± 163587",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13022711,
            "range": "± 515598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17670262,
            "range": "± 790810",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37677499,
            "range": "± 349936",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48540414,
            "range": "± 442626",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125345805,
            "range": "± 1090676",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152359193,
            "range": "± 969621",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325907132,
            "range": "± 1389702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177747814,
            "range": "± 755205",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68924711,
            "range": "± 807919",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243166581,
            "range": "± 1367063",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3493,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393056,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 399956,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 740896,
            "range": "± 1447",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311566,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6183,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363300,
            "range": "± 1439",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 714105,
            "range": "± 2331",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351968,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2106,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354660,
            "range": "± 1335",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6052298815,
            "range": "± 14855747",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1667313,
            "range": "± 17152",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2666941,
            "range": "± 17729",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15624,
            "range": "± 21",
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
          "id": "7030d0f32259e14959344a43b8b4cd93844420c7",
          "message": "Derive more field types for Arrow (#739)\n\n* Derive more field types for Arrow\r\n* Update arrow2_convert to point to latest commit on rerun_main",
          "timestamp": "2023-01-13T11:11:03+01:00",
          "tree_id": "4aa0c07cce4c71c3f80586afaaf60e9d672a668a",
          "url": "https://github.com/rerun-io/rerun/commit/7030d0f32259e14959344a43b8b4cd93844420c7"
        },
        "date": 1673605422337,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 272622,
            "range": "± 815",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 732,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45980,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 850248825,
            "range": "± 41865119",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 355077,
            "range": "± 129748",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88870340,
            "range": "± 357037",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10966,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22849231,
            "range": "± 230899",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7214,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4386209,
            "range": "± 1283207",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11825865,
            "range": "± 760975",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16144324,
            "range": "± 899597",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37481782,
            "range": "± 722406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49252913,
            "range": "± 522319",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126666288,
            "range": "± 1046879",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154547632,
            "range": "± 16448447",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 330224979,
            "range": "± 1745219",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179505077,
            "range": "± 24309416",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68750759,
            "range": "± 773223",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 246372569,
            "range": "± 1437486",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3435,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 399625,
            "range": "± 29947",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 405572,
            "range": "± 1269",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 747626,
            "range": "± 4040",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 317389,
            "range": "± 1570",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6224,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357845,
            "range": "± 1029",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 700714,
            "range": "± 192890",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347896,
            "range": "± 1099",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2134,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351914,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6114208949,
            "range": "± 341500088",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1653034,
            "range": "± 9821",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2660473,
            "range": "± 18709",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15955,
            "range": "± 57",
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
          "id": "cd4b1b1e97e4a9c86f0095b93ebfa6e879ee6c4d",
          "message": "End-to-end arrow support for Meshes (#748)\n\n* Arrow Encoding for Meshes\r\n* Register the Mesh component\r\n* Log mesh through the SDK\r\n* Keep UI from exploding when we click on the mesh\r\n* ScenePart for Arrow Mesh",
          "timestamp": "2023-01-13T15:12:09+01:00",
          "tree_id": "5ef50f8d9243a02534771a1479687afe77d0f2ad",
          "url": "https://github.com/rerun-io/rerun/commit/cd4b1b1e97e4a9c86f0095b93ebfa6e879ee6c4d"
        },
        "date": 1673620041298,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 278128,
            "range": "± 878",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 735,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 375,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45735,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 850229006,
            "range": "± 8321485",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 380028,
            "range": "± 2322",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89883286,
            "range": "± 524484",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10930,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23359788,
            "range": "± 38993",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7103,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 7163469,
            "range": "± 298878",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13808803,
            "range": "± 72774",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 21518785,
            "range": "± 132856",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39435929,
            "range": "± 304804",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49500942,
            "range": "± 427804",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124498198,
            "range": "± 916023",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 155640967,
            "range": "± 1550694",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328088905,
            "range": "± 1614705",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178960412,
            "range": "± 2140524",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70889379,
            "range": "± 804877",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 242872209,
            "range": "± 1908795",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3423,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 390258,
            "range": "± 849",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 395656,
            "range": "± 1679",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 749057,
            "range": "± 3833",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319185,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6148,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354990,
            "range": "± 1194",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701175,
            "range": "± 3315",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350721,
            "range": "± 1663",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2138,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357450,
            "range": "± 1753",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6168731674,
            "range": "± 52687817",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1726613,
            "range": "± 21301",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2775716,
            "range": "± 65792",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16045,
            "range": "± 34",
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
          "id": "e554c2acb2e82df74de79c842eef0d8424ea0494",
          "message": "Tracking a 3D camera is now independent of selection (#744)\n\nFocusing on an object (or a camera!) is now done with a double click. This allows to select objects while still following a camera!\r\nFixes #693",
          "timestamp": "2023-01-13T16:21:12+01:00",
          "tree_id": "606d6b4c6f380dbdb07bc838cfa3d01af3ffc174",
          "url": "https://github.com/rerun-io/rerun/commit/e554c2acb2e82df74de79c842eef0d8424ea0494"
        },
        "date": 1673624126353,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 267186,
            "range": "± 3778",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 707,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 293,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 353,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44007,
            "range": "± 696",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1211744215,
            "range": "± 5351123",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 362802,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 113895403,
            "range": "± 1275490",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10405,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22767242,
            "range": "± 512310",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6643,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4081764,
            "range": "± 63801",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10465455,
            "range": "± 225292",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14948970,
            "range": "± 482837",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34678605,
            "range": "± 742504",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52590865,
            "range": "± 2056210",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 162263955,
            "range": "± 2131718",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 187923999,
            "range": "± 2018023",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 412519383,
            "range": "± 3238430",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 205672961,
            "range": "± 5594981",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 99587129,
            "range": "± 2167063",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 297912179,
            "range": "± 4183629",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3245,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 371240,
            "range": "± 3615",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 376326,
            "range": "± 4733",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 709301,
            "range": "± 7257",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 302057,
            "range": "± 4202",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5896,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 345133,
            "range": "± 3509",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 675726,
            "range": "± 7853",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349749,
            "range": "± 23417",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2115,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 345040,
            "range": "± 4418",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 9359941068,
            "range": "± 38907725",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1622484,
            "range": "± 19735",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2553122,
            "range": "± 25010",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15134,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 36,
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
          "id": "1992cb7b07023841bee430e4e3d650cb0ee929ab",
          "message": "End-to-end support for Linesegments (#750)\n\n* Add scenepart for Lines2D\r\n* SDK logging of line segments",
          "timestamp": "2023-01-13T16:43:41+01:00",
          "tree_id": "5a1712c2e7729e87c8c7f5df79af190f569a341b",
          "url": "https://github.com/rerun-io/rerun/commit/1992cb7b07023841bee430e4e3d650cb0ee929ab"
        },
        "date": 1673625461806,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 278439,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 730,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 377,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45900,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 932860787,
            "range": "± 9661315",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 371545,
            "range": "± 1167",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97766193,
            "range": "± 332913",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10917,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23251068,
            "range": "± 267057",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6926,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4397897,
            "range": "± 379402",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11426464,
            "range": "± 324772",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15516926,
            "range": "± 567854",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36967442,
            "range": "± 579576",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49570416,
            "range": "± 1271195",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137475139,
            "range": "± 1362047",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162484477,
            "range": "± 826100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353054931,
            "range": "± 2583881",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188083743,
            "range": "± 1362487",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80251490,
            "range": "± 1247258",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262380349,
            "range": "± 2046865",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3542,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 390745,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 397503,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 743750,
            "range": "± 1183",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323522,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6187,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358251,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711223,
            "range": "± 2146",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350150,
            "range": "± 1203",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2150,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357859,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7000617108,
            "range": "± 25398827",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1733168,
            "range": "± 33940",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2774473,
            "range": "± 78100",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15968,
            "range": "± 26",
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
          "id": "1061941df1743a47118d8e61cb08fa6612186599",
          "message": "Use the right value for default (#755)",
          "timestamp": "2023-01-13T18:27:26+01:00",
          "tree_id": "758ed70bc85297e22bd1b6a1c16240df1e6421f4",
          "url": "https://github.com/rerun-io/rerun/commit/1061941df1743a47118d8e61cb08fa6612186599"
        },
        "date": 1673631677371,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 275383,
            "range": "± 672",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 725,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45701,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 970760579,
            "range": "± 15517328",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 368336,
            "range": "± 3633",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 99535184,
            "range": "± 698670",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10947,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23890679,
            "range": "± 222405",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6933,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4884092,
            "range": "± 320998",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 14382256,
            "range": "± 305620",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 18656003,
            "range": "± 1098251",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39954111,
            "range": "± 438380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53263616,
            "range": "± 656285",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139238684,
            "range": "± 2476294",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 172192847,
            "range": "± 1734589",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 367537880,
            "range": "± 6408552",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190373652,
            "range": "± 1553761",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80817104,
            "range": "± 971571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 265929557,
            "range": "± 2400732",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3470,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 389768,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 396571,
            "range": "± 1184",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 741581,
            "range": "± 2872",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319704,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6243,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354072,
            "range": "± 2131",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705876,
            "range": "± 6523",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 356212,
            "range": "± 1370",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2155,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 360921,
            "range": "± 6346",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7183736398,
            "range": "± 69327620",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1697885,
            "range": "± 17640",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2664170,
            "range": "± 31016",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15942,
            "range": "± 33",
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
          "id": "30bddbc056dcf35dd840df50bceaee0af770ab47",
          "message": "Fix data blueprint containing removed objects (#740)\n\n`DataBlueprintTree` is now the only place where we store which objects are queried",
          "timestamp": "2023-01-14T10:05:37+01:00",
          "tree_id": "cb23e35e8646e75e936f9b78a181a64836eb078d",
          "url": "https://github.com/rerun-io/rerun/commit/30bddbc056dcf35dd840df50bceaee0af770ab47"
        },
        "date": 1673687914490,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 277867,
            "range": "± 1344",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 733,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45488,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 968530211,
            "range": "± 5047934",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 384889,
            "range": "± 4615",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 99194347,
            "range": "± 391951",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10952,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23460270,
            "range": "± 263824",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6940,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4686237,
            "range": "± 313953",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13812647,
            "range": "± 611932",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 18870863,
            "range": "± 1214425",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38351152,
            "range": "± 749970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52942569,
            "range": "± 931079",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138433958,
            "range": "± 1434799",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166874748,
            "range": "± 1708142",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 359416441,
            "range": "± 2397612",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189790158,
            "range": "± 1074212",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81851906,
            "range": "± 1076329",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263597310,
            "range": "± 1983691",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3385,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 389663,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 396217,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 745245,
            "range": "± 3015",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318176,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6185,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347800,
            "range": "± 1241",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705027,
            "range": "± 2453",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348511,
            "range": "± 1478",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2141,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358449,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6959340010,
            "range": "± 24249554",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1695226,
            "range": "± 12189",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2689955,
            "range": "± 32641",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16015,
            "range": "± 38",
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
          "id": "dd76526c1be113e24ba29c32cf872625ea6c8c97",
          "message": "Show `Image Plane Distance` only in 3D nav mode (#763)\n\nFixes #682",
          "timestamp": "2023-01-16T11:25:58+01:00",
          "tree_id": "6b89c05e990fc11945edc44b7b648151362218e5",
          "url": "https://github.com/rerun-io/rerun/commit/dd76526c1be113e24ba29c32cf872625ea6c8c97"
        },
        "date": 1673865656896,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 277656,
            "range": "± 653",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 738,
            "range": "± 0",
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
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45792,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 878715359,
            "range": "± 4272013",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 365913,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88998806,
            "range": "± 357280",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10928,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22291177,
            "range": "± 281717",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6926,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4176696,
            "range": "± 73154",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11025649,
            "range": "± 545787",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15498186,
            "range": "± 781583",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36766370,
            "range": "± 713239",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46371363,
            "range": "± 1173883",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124922317,
            "range": "± 1079139",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151292700,
            "range": "± 849182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327334225,
            "range": "± 1565912",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177058008,
            "range": "± 831451",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67438442,
            "range": "± 928021",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240701734,
            "range": "± 1544779",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3499,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 390943,
            "range": "± 903",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 396894,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 730812,
            "range": "± 1676",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 321520,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6176,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347695,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 702153,
            "range": "± 1772",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350723,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2159,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352519,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5919975754,
            "range": "± 11401427",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1576891,
            "range": "± 9626",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2608919,
            "range": "± 7522",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16195,
            "range": "± 52",
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
          "id": "dfd937ad82664528bc91907849c8713a44d016d0",
          "message": "re_datastore: garbage collection (#746)\n\n* the 8th approach turned out to be the right one it seems\r\n\r\n* datastore driven purge\r\n\r\n* purging it all\r\n\r\n* correctness and further investigations\r\n\r\n* demoable state\r\n\r\n* are indices worth it?\r\n\r\n* eh, they prob are\r\n\r\n* clean up\r\n\r\n* more cleanup\r\n\r\n* woop\r\n\r\n* empirical conf improvement\r\n\r\n* addressing discussions\r\n\r\n* found the nasty gremlins\r\n\r\n* back on real cfg",
          "timestamp": "2023-01-16T12:11:58+01:00",
          "tree_id": "14c688dacd16a598e8953b54098c3476a2d02fc7",
          "url": "https://github.com/rerun-io/rerun/commit/dfd937ad82664528bc91907849c8713a44d016d0"
        },
        "date": 1673868366782,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 288607,
            "range": "± 968",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 724,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44856,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1056792053,
            "range": "± 6844855",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 416262,
            "range": "± 1652",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 102006238,
            "range": "± 611859",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10908,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23780085,
            "range": "± 383197",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6941,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4743596,
            "range": "± 209259",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12071245,
            "range": "± 771598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16764353,
            "range": "± 676524",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36690449,
            "range": "± 949124",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51781921,
            "range": "± 1505345",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138723522,
            "range": "± 1430064",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165713945,
            "range": "± 901703",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 364064460,
            "range": "± 1454893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190066067,
            "range": "± 1128544",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80696728,
            "range": "± 1093512",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 267503091,
            "range": "± 1778112",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3453,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 391137,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 397116,
            "range": "± 1300",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 730157,
            "range": "± 2580",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322605,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6146,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 405572,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 749244,
            "range": "± 2913",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 381087,
            "range": "± 1836",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2121,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 384377,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7282335008,
            "range": "± 13268254",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1684750,
            "range": "± 39832",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2884118,
            "range": "± 16638",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15731,
            "range": "± 62",
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
          "id": "b7a1c6de8cc349610b92d507aa658416da2bdccc",
          "message": "Command palette (#656)\n\n* First-effort command palette in re_ui_example\r\n\r\n* Move Command and CommandPalette into re_ui proper\r\n\r\n* Add Command::listen_for_kb_shortcut\r\n\r\n* Print last command in re_ui test app\r\n\r\n* Add tooltips and improve UI\r\n\r\n* Make it easy to show a command in a menu\r\n\r\n* Integrate into the viewer\r\n\r\n* center command palette\r\n\r\n* cleanup\r\n\r\n* Make play/pause a Command\r\n\r\n* Make time stepping into commands\r\n\r\n* Refactor time control command execution\r\n\r\n* Fuzzy matching\r\n\r\n* Better interaction with the command palette\r\n\r\n* Add command palette toggling to \"View\" menu\r\n\r\n* Fix wasm32 build\r\n\r\n* Fix camera moving while typing into command palette\r\n\r\n* _ui naming\r\n\r\n* Turn on DEBUG log level for the web viewer\r\n\r\n* Document how to run the web viewer\r\n\r\n* Update egui to prevent ctrl-p from opening the print dialog on web\r\n\r\n* Add line to changelog",
          "timestamp": "2023-01-16T15:55:46+01:00",
          "tree_id": "e29368bd9a92d265d7a51f493a51328f30ad7de2",
          "url": "https://github.com/rerun-io/rerun/commit/b7a1c6de8cc349610b92d507aa658416da2bdccc"
        },
        "date": 1673881886634,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280057,
            "range": "± 14222",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 723,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 374,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44662,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1038643826,
            "range": "± 8520343",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 423106,
            "range": "± 2122",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 103911033,
            "range": "± 767693",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10999,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 24805698,
            "range": "± 59969",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6913,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 7821442,
            "range": "± 498620",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 15152182,
            "range": "± 213259",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 23752279,
            "range": "± 726784",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 40755351,
            "range": "± 268019",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 56520596,
            "range": "± 719633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 142872758,
            "range": "± 2679634",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 176317799,
            "range": "± 2770986",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 374528062,
            "range": "± 3216253",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 197109149,
            "range": "± 1516342",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 84683010,
            "range": "± 1136872",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 277754536,
            "range": "± 2389429",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3352,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 397032,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 408488,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 737499,
            "range": "± 2153",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329107,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6202,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 411339,
            "range": "± 2298",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 760101,
            "range": "± 5566",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 392624,
            "range": "± 2548",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2136,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 403698,
            "range": "± 2424",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7666437598,
            "range": "± 75485433",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1844298,
            "range": "± 28888",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 3234090,
            "range": "± 233044",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16013,
            "range": "± 38",
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
          "id": "e5997fdafaf7ef4a8056e004677f61a55bff0a58",
          "message": "Fix visual artifacts when dealing with line caps & line batches. (#761)\n\nFix visual artifacts when dealing with line caps & line batches.\r\nRearrange shader again a bit towards better readability.\r\nAdd more documentation\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil@rerun.io>",
          "timestamp": "2023-01-16T16:31:23+01:00",
          "tree_id": "1596265785bf12408f32164f14e87ad2f5f4c8e9",
          "url": "https://github.com/rerun-io/rerun/commit/e5997fdafaf7ef4a8056e004677f61a55bff0a58"
        },
        "date": 1673883833963,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 275785,
            "range": "± 652",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 737,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 375,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45195,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 835214653,
            "range": "± 12528336",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 406648,
            "range": "± 1812",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 87959634,
            "range": "± 420588",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11009,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22847332,
            "range": "± 172119",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6980,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4264690,
            "range": "± 73840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10786673,
            "range": "± 387142",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15235037,
            "range": "± 450343",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37879367,
            "range": "± 623388",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49091796,
            "range": "± 1023968",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126877708,
            "range": "± 1126693",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149717643,
            "range": "± 1810400",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 326049378,
            "range": "± 1504095",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181645246,
            "range": "± 948047",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68030301,
            "range": "± 1067819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 245417144,
            "range": "± 1514774",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3599,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 395568,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 400211,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 729930,
            "range": "± 1958",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326516,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6391,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347181,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708700,
            "range": "± 2439",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348624,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2130,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354049,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5975926109,
            "range": "± 28543978",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1610196,
            "range": "± 7833",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2576100,
            "range": "± 9222",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16007,
            "range": "± 40",
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
          "id": "6aabf5c0e37b8f4709ae7ae5f4ee2d790dc0bce0",
          "message": "Add \"Streams\" title to the timeline panel (#782)\n\n* Brighter tooltip background\r\n* Time panel: full-width separator lines\r\n* Add \"Streams\" text with tooltip to the timeline panel",
          "timestamp": "2023-01-16T17:25:45+01:00",
          "tree_id": "f1193e534133e96a1c8f0efec09060798cd9293b",
          "url": "https://github.com/rerun-io/rerun/commit/6aabf5c0e37b8f4709ae7ae5f4ee2d790dc0bce0"
        },
        "date": 1673887091269,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 279077,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 731,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 300,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44499,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 873093507,
            "range": "± 6678690",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 367115,
            "range": "± 3175",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 87189857,
            "range": "± 782547",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10967,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 21678904,
            "range": "± 496537",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6728,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4214596,
            "range": "± 55209",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10373322,
            "range": "± 385525",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14341601,
            "range": "± 385520",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 33680539,
            "range": "± 626426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44177437,
            "range": "± 1317648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123464964,
            "range": "± 1351656",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 148906525,
            "range": "± 4010916",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323705010,
            "range": "± 3516224",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175954804,
            "range": "± 2365672",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67112879,
            "range": "± 853833",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241294803,
            "range": "± 2310541",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3366,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393718,
            "range": "± 3984",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 401468,
            "range": "± 5046",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732831,
            "range": "± 4375",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326388,
            "range": "± 2761",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6198,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350633,
            "range": "± 2333",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708721,
            "range": "± 3934",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347603,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2104,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352171,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6075339851,
            "range": "± 13899714",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1574538,
            "range": "± 17903",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2574444,
            "range": "± 23344",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15778,
            "range": "± 141",
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
          "id": "c6fbaa2a610806d00c1db0cf5b4259d7b043a137",
          "message": "Arrows^2 (#785)\n\n* move arrow3d to field_types\r\n* Arrow serialization for Arrow3D\r\n* Arrow logging from python\r\n* Arrow-arrow scenepart",
          "timestamp": "2023-01-16T22:50:57+01:00",
          "tree_id": "017fdec08755f9214a543a7df2324c3faa9d46c4",
          "url": "https://github.com/rerun-io/rerun/commit/c6fbaa2a610806d00c1db0cf5b4259d7b043a137"
        },
        "date": 1673906896563,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 278188,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 729,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 376,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46484,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 964317543,
            "range": "± 4177515",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 385323,
            "range": "± 1778",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 98437666,
            "range": "± 646087",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10958,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23936514,
            "range": "± 42254",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6920,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 5071364,
            "range": "± 341033",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 14252025,
            "range": "± 336426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 21222582,
            "range": "± 639553",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39923340,
            "range": "± 391552",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 54459091,
            "range": "± 509859",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138881941,
            "range": "± 1289144",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170703968,
            "range": "± 944128",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 363789658,
            "range": "± 1466096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 192174419,
            "range": "± 1102257",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 79939028,
            "range": "± 964477",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 265341753,
            "range": "± 1907219",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3366,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 384523,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 391095,
            "range": "± 1469",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731711,
            "range": "± 3110",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332716,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6396,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355486,
            "range": "± 2089",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 725269,
            "range": "± 2719",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 354051,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2184,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 362214,
            "range": "± 2547",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6970620999,
            "range": "± 15976058",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1692441,
            "range": "± 24517",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2669917,
            "range": "± 63056",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15962,
            "range": "± 68",
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
          "id": "5dd1a5a4628037c3c3ca89b5416013c9f0771c04",
          "message": "Fix 3D view drawing outside its bounds (#793)\n\n* Fix 3D view drawing outside its bounds\r\n\r\nCloses https://github.com/rerun-io/rerun/issues/791\r\n\r\n* Remove unused `egui::Response` return type\r\n\r\n* Properly clip labels to 3D area\r\n\r\nCloses https://github.com/rerun-io/rerun/issues/699",
          "timestamp": "2023-01-17T06:24:17+01:00",
          "tree_id": "bc5c3f96279a52dde821579270df8f1fcad09f0e",
          "url": "https://github.com/rerun-io/rerun/commit/5dd1a5a4628037c3c3ca89b5416013c9f0771c04"
        },
        "date": 1673933861141,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 278975,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 723,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44928,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 854540228,
            "range": "± 4799322",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 378526,
            "range": "± 2093",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88643643,
            "range": "± 341242",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10969,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22554416,
            "range": "± 267551",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6892,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4187470,
            "range": "± 83771",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11056452,
            "range": "± 584002",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15353217,
            "range": "± 650112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37267567,
            "range": "± 853533",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47139709,
            "range": "± 878561",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125999815,
            "range": "± 1182884",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149939977,
            "range": "± 758559",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325519832,
            "range": "± 1739940",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176922650,
            "range": "± 868617",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69196477,
            "range": "± 938394",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241258597,
            "range": "± 1472755",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3591,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 383923,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 387265,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 730388,
            "range": "± 1337",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331976,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6416,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 344247,
            "range": "± 1259",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704572,
            "range": "± 1747",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350856,
            "range": "± 1708",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2180,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352200,
            "range": "± 848",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5927056906,
            "range": "± 10537994",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1643546,
            "range": "± 11135",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2658177,
            "range": "± 7561",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16034,
            "range": "± 33",
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
          "id": "4aa7cbd9cf1fc0f024defcf9f27f587e5ff8fd19",
          "message": "Improve look of 3D boxes, make 2D points unshaded (#792)\n\n* Nicer box outlines\r\n\r\n* add shading flags to point cloud",
          "timestamp": "2023-01-17T06:48:25+01:00",
          "tree_id": "86676397655866b17fedabb916a37e7d27d54664",
          "url": "https://github.com/rerun-io/rerun/commit/4aa7cbd9cf1fc0f024defcf9f27f587e5ff8fd19"
        },
        "date": 1673935247993,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 274434,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 719,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 377,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45190,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 852671505,
            "range": "± 13888068",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 361216,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 87925647,
            "range": "± 342125",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11005,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22423785,
            "range": "± 206034",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6947,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4248513,
            "range": "± 78874",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10898257,
            "range": "± 346643",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15001272,
            "range": "± 372695",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36424823,
            "range": "± 487564",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46975022,
            "range": "± 727108",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124156375,
            "range": "± 1110572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151072640,
            "range": "± 537529",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324318082,
            "range": "± 1235600",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177697077,
            "range": "± 754998",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68113162,
            "range": "± 854451",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243476574,
            "range": "± 1408900",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3554,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 381252,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 389129,
            "range": "± 1149",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731677,
            "range": "± 1491",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330559,
            "range": "± 691",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6312,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353494,
            "range": "± 2623",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 709618,
            "range": "± 2862",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 341967,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2178,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350896,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5903470113,
            "range": "± 12916141",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1602572,
            "range": "± 8074",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2574602,
            "range": "± 7450",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16136,
            "range": "± 79",
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
          "id": "0238e2d8a695bf3e44f6342cbe8f88b22d69dd7e",
          "message": "Remove rerun from example requirements.txt (#800)\n\n* Remove rerun from example requirements.txt\r\n\r\n* Remove reference to multiprocessing's requirements\r\n\r\nCo-authored-by: Nikolaus West <niko@rerun.io>",
          "timestamp": "2023-01-17T11:02:42+01:00",
          "tree_id": "89bc0de78d814dd8bfb78d3c53877b46e4323326",
          "url": "https://github.com/rerun-io/rerun/commit/0238e2d8a695bf3e44f6342cbe8f88b22d69dd7e"
        },
        "date": 1673950649313,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 277068,
            "range": "± 1275",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 730,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 373,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44452,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 858075956,
            "range": "± 10843511",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 361561,
            "range": "± 2117",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88473740,
            "range": "± 518453",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10951,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22030908,
            "range": "± 314013",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6870,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4292105,
            "range": "± 147211",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10944482,
            "range": "± 341204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14629893,
            "range": "± 315808",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36113751,
            "range": "± 908965",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48096230,
            "range": "± 1064340",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123801940,
            "range": "± 1180153",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152191668,
            "range": "± 1035743",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324104225,
            "range": "± 2240873",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175694693,
            "range": "± 1418648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66746649,
            "range": "± 1019525",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239356356,
            "range": "± 1916132",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3479,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 381532,
            "range": "± 2456",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 386855,
            "range": "± 2222",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 727619,
            "range": "± 4376",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328608,
            "range": "± 1850",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6318,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348846,
            "range": "± 1176",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 707603,
            "range": "± 3062",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347005,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2102,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353029,
            "range": "± 2548",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5885878797,
            "range": "± 20302908",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1597240,
            "range": "± 21063",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2544587,
            "range": "± 26097",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15484,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 36,
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
          "id": "c45c2a706eae457c09d77bf2fc168a7f8c27a675",
          "message": "Log Tensors from Python SDK (#798)\n\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-01-17T12:19:08+01:00",
          "tree_id": "cabf20e3667bea1d7ec20ad3bc3022ef1b01e2f9",
          "url": "https://github.com/rerun-io/rerun/commit/c45c2a706eae457c09d77bf2fc168a7f8c27a675"
        },
        "date": 1673955116479,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 279607,
            "range": "± 2520",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 725,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 299,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 369,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44597,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 966269414,
            "range": "± 6077430",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 369414,
            "range": "± 2517",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 96972593,
            "range": "± 904194",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10985,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23114276,
            "range": "± 438983",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6900,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4221924,
            "range": "± 131195",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11217849,
            "range": "± 522531",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15247367,
            "range": "± 891549",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35372343,
            "range": "± 1097794",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50531499,
            "range": "± 1449242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136115016,
            "range": "± 1367488",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164036915,
            "range": "± 1284840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352681653,
            "range": "± 2486771",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187331693,
            "range": "± 1372867",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 79031321,
            "range": "± 1165767",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262567377,
            "range": "± 2220186",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3557,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 384190,
            "range": "± 1809",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 389283,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731307,
            "range": "± 1200",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331300,
            "range": "± 763",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6374,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350136,
            "range": "± 1419",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708867,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345254,
            "range": "± 1737",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2159,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355288,
            "range": "± 6360",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6848222065,
            "range": "± 37117578",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1684396,
            "range": "± 17911",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2636814,
            "range": "± 12506",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16134,
            "range": "± 157",
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
          "id": "c4fa65634e275129d378f1dd2b2d2c8156b33986",
          "message": "Add RELEASES.md with release and versioning strategy (#799)\n\n* Add RELEASES.md with release and versioning strategy\r\n\r\n* Add instructions for breaking changes to the CHANGELOG.md\r\n\r\nCo-authored-by: Nikolaus West <niko@grapic.co>\r\n\r\nCo-authored-by: Nikolaus West <niko@grapic.co>",
          "timestamp": "2023-01-17T14:06:49+01:00",
          "tree_id": "6ed6ab803e62f8288821c3ab55e194afc27a59da",
          "url": "https://github.com/rerun-io/rerun/commit/c4fa65634e275129d378f1dd2b2d2c8156b33986"
        },
        "date": 1673961559373,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 275290,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 729,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 375,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45138,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 891525249,
            "range": "± 5916205",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 379353,
            "range": "± 2386",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88813521,
            "range": "± 564752",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10960,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22778256,
            "range": "± 169614",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6930,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4237798,
            "range": "± 132164",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11873333,
            "range": "± 524941",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16369982,
            "range": "± 630282",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38025599,
            "range": "± 475751",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49169686,
            "range": "± 810962",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124913336,
            "range": "± 1082577",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153897812,
            "range": "± 1837392",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 330446774,
            "range": "± 2475320",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180493024,
            "range": "± 785426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69765175,
            "range": "± 843583",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 247676810,
            "range": "± 1518447",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3746,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 384230,
            "range": "± 1153",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 388862,
            "range": "± 1032",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731906,
            "range": "± 2291",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332176,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6407,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356093,
            "range": "± 1180",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715728,
            "range": "± 2355",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351514,
            "range": "± 1070",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2167,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358599,
            "range": "± 947",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6079459062,
            "range": "± 8303846",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1612836,
            "range": "± 13697",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2584788,
            "range": "± 23644",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16135,
            "range": "± 57",
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