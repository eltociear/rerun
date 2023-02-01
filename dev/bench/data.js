window.BENCHMARK_DATA = {
  "lastUpdate": 1675241377052,
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
          "id": "02f3c1e87b3ecacd8be1325bcac921a62bf9bff3",
          "message": "Optimize loading of segmentation maps (#978)",
          "timestamp": "2023-01-29T14:10:06+01:00",
          "tree_id": "f55ae782cd69adfd670fc3944ffbdd89cecd3ce6",
          "url": "https://github.com/rerun-io/rerun/commit/02f3c1e87b3ecacd8be1325bcac921a62bf9bff3"
        },
        "date": 1674998695925,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 580889,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1850,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 317,
            "range": "± 1",
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
            "value": 158686,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 861762974,
            "range": "± 6245424",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 371375,
            "range": "± 2896",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88710022,
            "range": "± 402710",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10994,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22705456,
            "range": "± 207920",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6913,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4275126,
            "range": "± 141849",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12900239,
            "range": "± 700359",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16882827,
            "range": "± 672521",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37642745,
            "range": "± 430376",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48763758,
            "range": "± 746751",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125895230,
            "range": "± 1194752",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150528605,
            "range": "± 818508",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325527272,
            "range": "± 1381423",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178266749,
            "range": "± 831026",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69565839,
            "range": "± 937706",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 242009995,
            "range": "± 1523833",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3469,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 380763,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 388555,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 736801,
            "range": "± 21817",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332034,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6236,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351404,
            "range": "± 1317",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712827,
            "range": "± 1852",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346551,
            "range": "± 963",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2143,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352341,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5984051221,
            "range": "± 24846635",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1689741,
            "range": "± 14556",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2664770,
            "range": "± 10208",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15296,
            "range": "± 58",
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
          "id": "e158075b459295edcec7789d91c2a097aaf7cfd9",
          "message": "Tweak store profile scopes (#979)\n\n* Remove too-low-level profiling scopes\r\n\r\n* Add some query-level profiling scopes\r\n\r\n* Lift out annotation lookup from inner loop",
          "timestamp": "2023-01-29T20:16:51+01:00",
          "tree_id": "89805e97d1b2a73fc269d63f9625680a5b8b344c",
          "url": "https://github.com/rerun-io/rerun/commit/e158075b459295edcec7789d91c2a097aaf7cfd9"
        },
        "date": 1675020590672,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581836,
            "range": "± 4554",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1869,
            "range": "± 4",
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
            "value": 389,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 159502,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1002754190,
            "range": "± 7967836",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357765,
            "range": "± 2848",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 99953721,
            "range": "± 627026",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11007,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23380254,
            "range": "± 196516",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6921,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4296750,
            "range": "± 132208",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11734442,
            "range": "± 554662",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16933867,
            "range": "± 689220",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38255816,
            "range": "± 720190",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 54821285,
            "range": "± 638174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139105843,
            "range": "± 1335119",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163404702,
            "range": "± 912962",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 359539530,
            "range": "± 1916949",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190891278,
            "range": "± 1239756",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 83388481,
            "range": "± 1178685",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263850278,
            "range": "± 2519982",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3330,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 382555,
            "range": "± 933",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 387815,
            "range": "± 808",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 736625,
            "range": "± 903",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 333217,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6245,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353594,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712034,
            "range": "± 2984",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347759,
            "range": "± 830",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2141,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353677,
            "range": "± 1283",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6961390131,
            "range": "± 14947835",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1710349,
            "range": "± 20338",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2642908,
            "range": "± 9219",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15812,
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
          "id": "c9209e8a1666063cfbe1c352900ff93657790b9a",
          "message": "re_renderer: leave 2D texture padding to Queue::write_texture (#975)",
          "timestamp": "2023-01-30T09:03:49+01:00",
          "tree_id": "30fd32f4bd78c39714d68f79ff9eca34b05f06f5",
          "url": "https://github.com/rerun-io/rerun/commit/c9209e8a1666063cfbe1c352900ff93657790b9a"
        },
        "date": 1675066569637,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576973,
            "range": "± 4623",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1817,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 318,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 401,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 157096,
            "range": "± 1189",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 854198130,
            "range": "± 10831868",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 389232,
            "range": "± 7645",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 90024386,
            "range": "± 759429",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10995,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23000024,
            "range": "± 271093",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6921,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4341215,
            "range": "± 100969",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13557302,
            "range": "± 1231477",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15554444,
            "range": "± 608913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38344260,
            "range": "± 1037068",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51066023,
            "range": "± 733661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125216414,
            "range": "± 1100419",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150136651,
            "range": "± 5185609",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324299491,
            "range": "± 2043549",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178065482,
            "range": "± 2529585",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70703463,
            "range": "± 3337406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243471659,
            "range": "± 5604843",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3345,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 383947,
            "range": "± 1693",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 387111,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 738044,
            "range": "± 4064",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331961,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6210,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 345685,
            "range": "± 1315",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711870,
            "range": "± 4813",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346588,
            "range": "± 1178",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2112,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351021,
            "range": "± 1034",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6002373371,
            "range": "± 117858925",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1781616,
            "range": "± 27751",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2666036,
            "range": "± 81747",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15829,
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
          "id": "41371e3c17017cdc337a368de89c47ebdad99e35",
          "message": "Update to released versions of huggingface libs (#981)",
          "timestamp": "2023-01-30T10:09:39+01:00",
          "tree_id": "d9e4f2cee9068cccdd5c321f9c4bfca1772bf5db",
          "url": "https://github.com/rerun-io/rerun/commit/41371e3c17017cdc337a368de89c47ebdad99e35"
        },
        "date": 1675070607088,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 568495,
            "range": "± 25503",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1840,
            "range": "± 1",
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
            "value": 389,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156116,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 856480862,
            "range": "± 4087284",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 365297,
            "range": "± 2855",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89365710,
            "range": "± 1755383",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10979,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23190148,
            "range": "± 55675",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6925,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 5186879,
            "range": "± 402063",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13337651,
            "range": "± 156883",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 19351183,
            "range": "± 813655",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39156823,
            "range": "± 285443",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50046480,
            "range": "± 462907",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125883074,
            "range": "± 1029077",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154059076,
            "range": "± 1481371",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328324872,
            "range": "± 2176089",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181300042,
            "range": "± 924297",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69821899,
            "range": "± 775061",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 245284353,
            "range": "± 1519770",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3427,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 382343,
            "range": "± 1198",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 387435,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 740741,
            "range": "± 1048",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331896,
            "range": "± 895",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6246,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 349368,
            "range": "± 1403",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 720151,
            "range": "± 3643",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346427,
            "range": "± 1115",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2155,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357523,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6140807371,
            "range": "± 29779600",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1681494,
            "range": "± 14840",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2626057,
            "range": "± 18080",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15820,
            "range": "± 15",
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
          "id": "b4e4ad36b53eb390c0124e45bc4a66b8cc54b146",
          "message": "re_analytics: fixed salt for hashed props (#958)\n\n* fixed salt for hashed props\r\n\r\n* cranky\r\n\r\n* addressed PR comments",
          "timestamp": "2023-01-30T10:26:57+01:00",
          "tree_id": "0f93e3cfa49dcad6b4555313680e79635e2873e0",
          "url": "https://github.com/rerun-io/rerun/commit/b4e4ad36b53eb390c0124e45bc4a66b8cc54b146"
        },
        "date": 1675071563988,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573942,
            "range": "± 5276",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1822,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 322,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 400,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 158266,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 885272218,
            "range": "± 6613739",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 372680,
            "range": "± 1851",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 91761192,
            "range": "± 589297",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11123,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22794554,
            "range": "± 155537",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6922,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4240915,
            "range": "± 149038",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11301348,
            "range": "± 439004",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15519651,
            "range": "± 465884",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36204470,
            "range": "± 778786",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48409599,
            "range": "± 730078",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125756759,
            "range": "± 1209737",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151635409,
            "range": "± 432166",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327367845,
            "range": "± 1254291",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177964484,
            "range": "± 762887",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68300415,
            "range": "± 929133",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 242785298,
            "range": "± 1403952",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3499,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 381448,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 386208,
            "range": "± 1417",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732985,
            "range": "± 5354",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330910,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6291,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354483,
            "range": "± 1531",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717611,
            "range": "± 2056",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348916,
            "range": "± 1166",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2163,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357590,
            "range": "± 914",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6079467606,
            "range": "± 14768023",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1708269,
            "range": "± 12380",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2666585,
            "range": "± 49376",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15838,
            "range": "± 75",
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
          "id": "e47584363808e19aa0cebb389c866af3e2681c2e",
          "message": "Prepare for switching to the `re_int_histogram` crate (#984)\n\n* Don't store MsgIds over time, just their count\r\n\r\n* Don't purge timeless data\r\n\r\n* re_int_histogram: implement min_key and max_key\r\n\r\n* Use separate top-level bookkeeping of time points for the time control\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-01-30T11:22:27+01:00",
          "tree_id": "2e5a004ebe1951dcb4cd05611ff2dd33ed2bc718",
          "url": "https://github.com/rerun-io/rerun/commit/e47584363808e19aa0cebb389c866af3e2681c2e"
        },
        "date": 1675074922441,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 580563,
            "range": "± 4342",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1814,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 322,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 386,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156411,
            "range": "± 830",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 973129571,
            "range": "± 5706442",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 359647,
            "range": "± 2895",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 96439830,
            "range": "± 653662",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10951,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23352648,
            "range": "± 352337",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6926,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4214949,
            "range": "± 153608",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10962907,
            "range": "± 599548",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15171961,
            "range": "± 745806",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36585290,
            "range": "± 971511",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50750791,
            "range": "± 1611519",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135210292,
            "range": "± 1401842",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165301846,
            "range": "± 3252091",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353095247,
            "range": "± 3497297",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188941244,
            "range": "± 1045653",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77936920,
            "range": "± 1199368",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264814676,
            "range": "± 1819335",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3412,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 380059,
            "range": "± 2889",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 386611,
            "range": "± 2364",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 733005,
            "range": "± 6481",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330638,
            "range": "± 1148",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6295,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354792,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708822,
            "range": "± 3774",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349571,
            "range": "± 1334",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2146,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353177,
            "range": "± 1652",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6840177495,
            "range": "± 15411995",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1690323,
            "range": "± 14918",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2617499,
            "range": "± 17002",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15881,
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
          "id": "633ba3e1bf23d691d2ef57bdbdad48f9c03bfb08",
          "message": "Remove a lot of classical stuff (#988)\n\n* Remove Session::register_type\r\n\r\n* Remove TypeMsg\r\n\r\n* Remove Session::send_data\r\n\r\n* Remove classical text scene\r\n\r\n* Remove DataMsg\r\n\r\n* Remove classic loading of tensors and annotations\r\n\r\n* Remove ObjDb::store\r\n\r\n* Remove add_data_msg\r\n\r\n* Remove classical DataStore\r\n\r\n* Remove unused Error cases\r\n\r\n* Properly throttle arrow messages\r\n\r\n* Remove ObjectType\r\n\r\n* Remove LoggedData\r\n\r\n* Remove DataVec\r\n\r\n* Remove DataTrait\r\n\r\n* Remove Data\r\n\r\n* Remove DataType\r\n\r\n* Tweak how view categorization is done\r\n\r\n* Remove docstrings referring to dead stuff\r\n\r\n* remove batch.rs\r\n\r\n* rename DataPath::field_name to component_name\r\n\r\n* Remove FieldOrComponent\r\n\r\n* Fix doclink\r\n\r\n* Remove FieldName\r\n\r\n* Remove ObjTypePath and IndexPath",
          "timestamp": "2023-01-30T15:54:15+01:00",
          "tree_id": "73532eef1c8651962ab24b2420e09fc9e59f30f4",
          "url": "https://github.com/rerun-io/rerun/commit/633ba3e1bf23d691d2ef57bdbdad48f9c03bfb08"
        },
        "date": 1675090994279,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573893,
            "range": "± 2221",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1788,
            "range": "± 4",
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
            "value": 377,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153642,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45910302,
            "range": "± 1243574",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122845021,
            "range": "± 1160841",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150469127,
            "range": "± 667565",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322484797,
            "range": "± 1691694",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175805098,
            "range": "± 930708",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63120988,
            "range": "± 855015",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239283985,
            "range": "± 3309220",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308674,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6308,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350220,
            "range": "± 1019",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 691083,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 325811,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2191,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 330225,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5948599794,
            "range": "± 10643380",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1643153,
            "range": "± 5791",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2634346,
            "range": "± 13821",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16225,
            "range": "± 24",
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
          "id": "7f9d835d583b4b395df3371bb4435f55c6b84c24",
          "message": "Clean up component imports (#985)\n\n* Clean up component imports\r\n\r\n* Fix import loop, document RectFormat\r\n\r\n* Improve py lint/format commands in justfile to not take forever",
          "timestamp": "2023-01-30T18:01:19+01:00",
          "tree_id": "c343d4fb36a1f32a245f02c68e25ea937fbf5e16",
          "url": "https://github.com/rerun-io/rerun/commit/7f9d835d583b4b395df3371bb4435f55c6b84c24"
        },
        "date": 1675098640589,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 574501,
            "range": "± 6952",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1799,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 317,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 382,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152934,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52487848,
            "range": "± 641104",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138942519,
            "range": "± 1318496",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170622955,
            "range": "± 2358767",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 360329122,
            "range": "± 2494703",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190142500,
            "range": "± 1421497",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77024581,
            "range": "± 1011355",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262208744,
            "range": "± 1669646",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 310861,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6264,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365925,
            "range": "± 3115",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706563,
            "range": "± 20090",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 333641,
            "range": "± 1694",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2212,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 340583,
            "range": "± 1892",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7085060642,
            "range": "± 36808979",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1687254,
            "range": "± 18927",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2742888,
            "range": "± 50523",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16270,
            "range": "± 54",
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
          "id": "0a780341efa6fa6de3386d9d470358b99601237b",
          "message": "Fix crash when zooming out camera too far (#986)",
          "timestamp": "2023-01-30T18:39:04+01:00",
          "tree_id": "e02d27dcef13a27a48e77f2e1e9303d270dd2cc0",
          "url": "https://github.com/rerun-io/rerun/commit/0a780341efa6fa6de3386d9d470358b99601237b"
        },
        "date": 1675100931876,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 566615,
            "range": "± 3232",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1770,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 1",
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
            "value": 151126,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45136455,
            "range": "± 1735007",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134664801,
            "range": "± 1617907",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165186168,
            "range": "± 1175847",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351317721,
            "range": "± 2600887",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185446827,
            "range": "± 1362444",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70864692,
            "range": "± 1378963",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257335202,
            "range": "± 2890176",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 305540,
            "range": "± 1498",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6233,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352646,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 689260,
            "range": "± 4486",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 324922,
            "range": "± 1287",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2174,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 337677,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6800111353,
            "range": "± 18644433",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1614452,
            "range": "± 10284",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2662956,
            "range": "± 13956",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16166,
            "range": "± 93",
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
          "id": "55b75084a6a3fd645e7ed58ce75a188bae553006",
          "message": "Rust: rename objects and fields (#993)\n\n* ClearFields -> ClearComponents\r\n\r\n* field_name -> component_name\r\n\r\n* Remove unnecessary function indirection\r\n\r\n* File rename: Object -> Instance\r\n\r\n* ObjPath* -> EntityPath*\r\n\r\n* obj_path -> entity_path\r\n\r\n* object_path -> entity_path\r\n\r\n* ObjectTree -> EntityTree\r\n\r\n* ObjectProps -> EntityProperties\r\n\r\n* obj_query_benchmark -> query_benchmark\r\n\r\n* OptionalSpaceViewObjectHighlight -> OptionalSpaceViewEntityHighlight\r\n\r\n* ObjDb -> EntityDb\r\n\r\n* Use \"Entity path\" in UI:s\r\n\r\n* obj_db -> entity_db\r\n\r\n* Fix wrong benchmark_group name\r\n\r\n* reference_from_obj -> reference_from_entity\r\n\r\n* rename some obj-related variables\r\n\r\n* object path -> entity path\r\n\r\n* blueprint-related renamings\r\n\r\n* object_highlight -> entity_highlight\r\n\r\n* load_object -> load\r\n\r\n* queries_objects -> queries_entities\r\n\r\n* rename things in space_view.rs\r\n\r\n* highlighted_object -> highlighted_entity\r\n\r\n* object -> entity in comments and strings\r\n\r\n* A few more object -> entity in comments and strings\r\n\r\n* object path -> entity path\r\n\r\n* obj_path -> entity_path\r\n\r\n* object -> entity\r\n\r\n* REGISTERED_FIELDS -> REGISTERED_COMPONENT_NAMES\r\n\r\n* fix accidental all-caps\r\n\r\n* field_types -> component_types\r\n\r\n* py-format\r\n\r\n* a EntityPath -> an EntityPath\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* PathOpMsg -> EntityPathOpMsg\r\n\r\n* \"Double-click an object to focus the view on it\"\r\n\r\n* EntityPathComponent -> EntityPathPart\r\n\r\nfor less confusion\r\n\r\n* Fix doscstring link\r\n\r\n* DataPath -> ComponentPath\r\n\r\n* fix doctests: update field_types -> component_types\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-01-30T20:33:59+01:00",
          "tree_id": "a5088702fdc16028db7a42ad58581356b1a3a6db",
          "url": "https://github.com/rerun-io/rerun/commit/55b75084a6a3fd645e7ed58ce75a188bae553006"
        },
        "date": 1675107854048,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 575019,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1801,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 376,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152824,
            "range": "± 1283",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44442276,
            "range": "± 1019410",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123734679,
            "range": "± 1120324",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152498632,
            "range": "± 718697",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323255535,
            "range": "± 1877888",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177244092,
            "range": "± 1014700",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63062310,
            "range": "± 874649",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237613684,
            "range": "± 2729177",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324718,
            "range": "± 2203",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6200,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 345156,
            "range": "± 2131",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704848,
            "range": "± 3110",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 327225,
            "range": "± 3475",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2119,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 331821,
            "range": "± 7647",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6039983244,
            "range": "± 11472279",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1614384,
            "range": "± 7477",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2634147,
            "range": "± 10212",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16658,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
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
          "id": "023eb39872b6993dce73af7b8b5471d487294023",
          "message": "Fix hovering bug introduced in The Great Removal (#998)\n\nBug introduced by https://github.com/rerun-io/rerun/pull/988\r\n\r\nNext up I'll refactor and simplify `InstanceId` and `InstanceIdHash`",
          "timestamp": "2023-01-30T20:50:29+01:00",
          "tree_id": "8729076de0e2df1ec7e50c77c96b1c36c8bc256a",
          "url": "https://github.com/rerun-io/rerun/commit/023eb39872b6993dce73af7b8b5471d487294023"
        },
        "date": 1675108799737,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 585597,
            "range": "± 3394",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1763,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 375,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152900,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44785285,
            "range": "± 968151",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123675738,
            "range": "± 1176019",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152452438,
            "range": "± 772153",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323237108,
            "range": "± 1691426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175357296,
            "range": "± 1216392",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63308313,
            "range": "± 988477",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240589046,
            "range": "± 1585499",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322467,
            "range": "± 2017",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6130,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351766,
            "range": "± 1853",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 698490,
            "range": "± 4318",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 323815,
            "range": "± 1121",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2123,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 330630,
            "range": "± 2227",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6035191567,
            "range": "± 17695968",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1653957,
            "range": "± 40282",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2701278,
            "range": "± 16345",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16692,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
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
          "id": "7cb752f2fdb7bc2a718241d94e0ba2743d9bdbc6",
          "message": "Update readme and remove the docs in favor of dedicated repo (#995)\n\n* Update README.md\r\n* Remove the docs folder",
          "timestamp": "2023-01-31T02:01:10+01:00",
          "tree_id": "af896af43e8cf24d6d6245ae2ebf5c8e4055f0f6",
          "url": "https://github.com/rerun-io/rerun/commit/7cb752f2fdb7bc2a718241d94e0ba2743d9bdbc6"
        },
        "date": 1675127369280,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581449,
            "range": "± 2439",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1801,
            "range": "± 3",
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
            "value": 376,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154048,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47014339,
            "range": "± 734333",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123542395,
            "range": "± 993753",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153409799,
            "range": "± 869287",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323901499,
            "range": "± 1356017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177898728,
            "range": "± 686213",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64503501,
            "range": "± 932906",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 238350481,
            "range": "± 1305380",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325494,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6145,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347765,
            "range": "± 1413",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 702407,
            "range": "± 2910",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 328905,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2112,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 326589,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5984786558,
            "range": "± 11438961",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1593619,
            "range": "± 9340",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2664687,
            "range": "± 23437",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16639,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
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
          "id": "52c752aa7a4318f9c8f3c2989293ffb187c40a53",
          "message": "Update to Rust 1.67 (#1000)\n\n* Update to Rust 1.67\r\n\r\n* cargo clippy --fix\r\n\r\n* Add a few new clippy lints to Cranky.toml, and fix one case\r\n\r\n* Update to a docker image that hopefully will work\r\n\r\n* update the formatting of some dead code too, because why not\r\n\r\n* cargo fmt",
          "timestamp": "2023-01-31T05:49:14+01:00",
          "tree_id": "f23e506590dba9b1973fb42e22d639110297c0eb",
          "url": "https://github.com/rerun-io/rerun/commit/52c752aa7a4318f9c8f3c2989293ffb187c40a53"
        },
        "date": 1675141134239,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 559409,
            "range": "± 7203",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1744,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 303,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 362,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152112,
            "range": "± 2680",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43478086,
            "range": "± 1530536",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 121762850,
            "range": "± 1478126",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149258659,
            "range": "± 2059181",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 317524430,
            "range": "± 4600271",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 168648389,
            "range": "± 2272806",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61807097,
            "range": "± 1004534",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 230549080,
            "range": "± 2653979",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319180,
            "range": "± 5103",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6042,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354499,
            "range": "± 3378",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704017,
            "range": "± 7150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 341247,
            "range": "± 2541",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2064,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 346697,
            "range": "± 3436",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6000823830,
            "range": "± 28763766",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1674978,
            "range": "± 21422",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2570384,
            "range": "± 21795",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16896,
            "range": "± 266",
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
          "id": "1838b71e095236f4464e05e2d113cfc2a39fa0eb",
          "message": "Update all of the docstrings on public-facing APIs to numpy style (#1001)\n\n* Update __init__.py\r\n\r\n* More docstrings\r\n\r\n* lints\r\n\r\n* Tweak the material class template\r\n\r\n* Add some extra spacing\r\n\r\n* Docstrings for the dataclasses\r\n\r\n* Update obb docstring\r\n\r\n* docstrings for camera\r\n\r\n* docstrings for meshes and images\r\n\r\n* More docstring linting\r\n\r\n* docstrings for lines\r\n\r\n* Docstrings for images\r\n\r\n* docstrings for points\r\n\r\n* docstrings for rects\r\n\r\n* Docstrings for scalar\r\n\r\n* Docstrings for tensor\r\n\r\n* Docstrings for text\r\n\r\n* docstrings for transforms\r\n\r\n* Make tabs sticky\r\n\r\n* Revert usage of type subscriptions since not in python 3.8\r\n\r\n* unused import\r\n\r\n* Fix docstring for rerun.init()\r\n\r\n* Consistency in points doc",
          "timestamp": "2023-01-31T06:06:57+01:00",
          "tree_id": "9fd6a8c8f9c7edae14c53083e677bca215ac3ba3",
          "url": "https://github.com/rerun-io/rerun/commit/1838b71e095236f4464e05e2d113cfc2a39fa0eb"
        },
        "date": 1675142096671,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576466,
            "range": "± 1687",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1789,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 7",
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
            "value": 155625,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47435847,
            "range": "± 821056",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126132452,
            "range": "± 1210529",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151815575,
            "range": "± 2491572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328116379,
            "range": "± 2494487",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175001643,
            "range": "± 1057898",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64660158,
            "range": "± 744780",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236472215,
            "range": "± 2105614",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331138,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6271,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362172,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721118,
            "range": "± 5048",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346874,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2133,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354284,
            "range": "± 2166",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5988440665,
            "range": "± 20666088",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1689782,
            "range": "± 24024",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2643441,
            "range": "± 59990",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17380,
            "range": "± 64",
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
          "id": "dc1769d179c5895921409e588c483a4558522c73",
          "message": "Refactor `InstanceId` (#999)\n\n* Instance::splat() -> Instance::SPLAT\r\n\r\n* Refactor InstanceId and InstanceIdHash\r\n\r\n* InstanceId -> InstancePath\r\n\r\n* instance_id -> instance_path\r\n\r\n* Fix docstring\r\n\r\n* remove dead code\r\n\r\n* Improve error formatting\r\n\r\n* Avoid infinite recursion\r\n\r\n* Simplify the arrow ui code\r\n\r\n* tidy up\r\n\r\n* Remove ArrowInstance\r\n\r\n* More instance_hash -> instance_path_hash\r\n\r\n* Improve comment about SPLAT\r\n\r\n* cargo fmt\r\n\r\n* Remove dead code\r\n\r\n* Use re_ui.error_text",
          "timestamp": "2023-01-31T06:20:38+01:00",
          "tree_id": "4365039f90a8f84140276fd626ab651acf50ee8e",
          "url": "https://github.com/rerun-io/rerun/commit/dc1769d179c5895921409e588c483a4558522c73"
        },
        "date": 1675142920893,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 567170,
            "range": "± 2819",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1769,
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
            "value": 377,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153407,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47501775,
            "range": "± 1193583",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126531658,
            "range": "± 1095471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149970282,
            "range": "± 2485764",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324492963,
            "range": "± 2405845",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176708220,
            "range": "± 978341",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64578263,
            "range": "± 1083723",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 238343797,
            "range": "± 1674575",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325483,
            "range": "± 1516",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6327,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363129,
            "range": "± 1469",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 723531,
            "range": "± 23114",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349708,
            "range": "± 2564",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2119,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352535,
            "range": "± 3812",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6026591385,
            "range": "± 12872881",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1701737,
            "range": "± 15210",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2645944,
            "range": "± 67497",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16924,
            "range": "± 23",
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
          "id": "822dd23ff369bd8b9f1ec7cc4d43a38fb36d5cb7",
          "message": "bind to all network interfaces (#1005)\n\n* bind to all network interfaces\r\n\r\n* actually, why not the profiler too",
          "timestamp": "2023-01-31T13:02:07+01:00",
          "tree_id": "5e395a522807f4ffb46a1d89431bd4d7384a4b4a",
          "url": "https://github.com/rerun-io/rerun/commit/822dd23ff369bd8b9f1ec7cc4d43a38fb36d5cb7"
        },
        "date": 1675167189392,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 577098,
            "range": "± 2013",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1765,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 377,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154554,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45029172,
            "range": "± 1096678",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125994298,
            "range": "± 1193691",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151640192,
            "range": "± 934868",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328226834,
            "range": "± 1476388",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175863015,
            "range": "± 918213",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63749135,
            "range": "± 1111446",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237227547,
            "range": "± 1765896",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325673,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6283,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361364,
            "range": "± 1055",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716822,
            "range": "± 11077",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346883,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2121,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350445,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5959865072,
            "range": "± 33291590",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1712535,
            "range": "± 26982",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2695262,
            "range": "± 34815",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16844,
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
          "id": "fe4b4b8a13f49f86a2cf6cfda2fb1d038debb2a3",
          "message": "Rename `Instance` to `InstanceKey` (#1002)\n\n* Rename Instance to InstanceKey\r\n\r\n* rerun.instance -> rerun.instance_key\r\n\r\n* Selection::Instance -> Selection::InstancePath\r\n\r\n* instance_index -> instance_key\r\n\r\n* \"For instance\" -> \"For example\"\r\n\r\n* `instance` -> `instance_key`\r\n\r\n* Update the once missed table",
          "timestamp": "2023-01-31T14:23:41+01:00",
          "tree_id": "34d6c53160a3f1e83cccd0386908bdb883355400",
          "url": "https://github.com/rerun-io/rerun/commit/fe4b4b8a13f49f86a2cf6cfda2fb1d038debb2a3"
        },
        "date": 1675171910001,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576330,
            "range": "± 4665",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1754,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 306,
            "range": "± 6",
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
            "value": 154127,
            "range": "± 899",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46618267,
            "range": "± 1030182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127594450,
            "range": "± 1305008",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154257871,
            "range": "± 1125563",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327891612,
            "range": "± 1634965",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176430415,
            "range": "± 800622",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65141337,
            "range": "± 854946",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240751869,
            "range": "± 1529466",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325443,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6304,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363464,
            "range": "± 1250",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721450,
            "range": "± 3565",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345840,
            "range": "± 2834",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2145,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354086,
            "range": "± 1642",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6065305183,
            "range": "± 15999505",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1736715,
            "range": "± 13942",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2692577,
            "range": "± 27317",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17398,
            "range": "± 24",
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
          "id": "49b426f5ef0f3a24592728767ae43025623eb3df",
          "message": "Better looking tabs (#1011)\n\n* Move egui_dock styling to re_ui\r\n\r\n* Add egui_dock example to re_ui_example\r\n\r\n* No context-menu on right-click\r\n\r\n* Improve the look of tabs\r\n\r\n* Use the space icon in the tab name",
          "timestamp": "2023-01-31T16:56:59+01:00",
          "tree_id": "12b396e1207277f3137791a10a48094655ea4e79",
          "url": "https://github.com/rerun-io/rerun/commit/49b426f5ef0f3a24592728767ae43025623eb3df"
        },
        "date": 1675181169040,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 611865,
            "range": "± 3471",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1758,
            "range": "± 3",
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
            "value": 378,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 157212,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51149000,
            "range": "± 1400333",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 142066717,
            "range": "± 1388532",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164830545,
            "range": "± 1128806",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358113947,
            "range": "± 1936781",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184983013,
            "range": "± 1215114",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75480782,
            "range": "± 977950",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 261460979,
            "range": "± 1656113",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326615,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6198,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 408232,
            "range": "± 1884",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 755651,
            "range": "± 3772",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 378820,
            "range": "± 13443",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2096,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 369499,
            "range": "± 3535",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7147631933,
            "range": "± 22032561",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1840174,
            "range": "± 12098",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2883971,
            "range": "± 16495",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17475,
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
          "id": "feb84117608f1e119ec094cd21a94a39c1d6e88c",
          "message": "Improve colmap example (#1008)\n\n* Fix identifiers handling in log_points\r\n\r\n* Log both keypoints so they match 3D points",
          "timestamp": "2023-01-31T17:21:35+01:00",
          "tree_id": "70e92dcd2dc0856b741b29929cbc398dbb95c426",
          "url": "https://github.com/rerun-io/rerun/commit/feb84117608f1e119ec094cd21a94a39c1d6e88c"
        },
        "date": 1675182583436,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571674,
            "range": "± 37323",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1774,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 307,
            "range": "± 1",
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
            "value": 154739,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47423425,
            "range": "± 918652",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126962134,
            "range": "± 1192567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154031797,
            "range": "± 898426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329504338,
            "range": "± 1753180",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176078600,
            "range": "± 907339",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63967440,
            "range": "± 808578",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239697032,
            "range": "± 1516538",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326200,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6274,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364527,
            "range": "± 1312",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 726720,
            "range": "± 2292",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346736,
            "range": "± 1229",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2129,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354977,
            "range": "± 1242",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5995010828,
            "range": "± 10361276",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1721015,
            "range": "± 16378",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2643982,
            "range": "± 13846",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17238,
            "range": "± 53",
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
          "id": "c8e59feaf24ee3e909232cd33c5b0baeca7d2c07",
          "message": "Less bright frustum (#1015)",
          "timestamp": "2023-02-01T09:38:52+01:00",
          "tree_id": "93dafc3157b835d1b280d8675d2597883fba3b81",
          "url": "https://github.com/rerun-io/rerun/commit/c8e59feaf24ee3e909232cd33c5b0baeca7d2c07"
        },
        "date": 1675241375962,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 580623,
            "range": "± 3133",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1773,
            "range": "± 3",
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152950,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52818868,
            "range": "± 664143",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140196047,
            "range": "± 1251437",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167846836,
            "range": "± 1695681",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357644116,
            "range": "± 1936977",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189126465,
            "range": "± 1589444",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76111972,
            "range": "± 1065468",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257988077,
            "range": "± 1920799",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326081,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6267,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363398,
            "range": "± 1342",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721397,
            "range": "± 2355",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346177,
            "range": "± 1746",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2122,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350836,
            "range": "± 1121",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6935966993,
            "range": "± 25535033",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1734643,
            "range": "± 14365",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2619012,
            "range": "± 18466",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17273,
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
      }
    ]
  }
}