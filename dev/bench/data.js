window.BENCHMARK_DATA = {
  "lastUpdate": 1673550254614,
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
          "id": "d4d03fbac6421b06af2e82af719109c01014b309",
          "message": "Fix origin axis and missing line cap for last line (#689)\n\n* origin/camera axis rendering to be properly in screenspace\r\n* fix missing line cap for last line in a batch",
          "timestamp": "2023-01-05T17:04:50+01:00",
          "tree_id": "d4f9e1d17ed0df5d4ac10ebeade49fc063e45bea",
          "url": "https://github.com/rerun-io/rerun/commit/d4d03fbac6421b06af2e82af719109c01014b309"
        },
        "date": 1672935475983,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 279274,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 709,
            "range": "± 1",
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
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44852,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 973362818,
            "range": "± 7210170",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 354359,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95324519,
            "range": "± 561849",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11478,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23719487,
            "range": "± 119197",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7984,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4385784,
            "range": "± 62445",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12116602,
            "range": "± 761781",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15792389,
            "range": "± 700184",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36089899,
            "range": "± 838128",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52242099,
            "range": "± 729644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137966537,
            "range": "± 1297871",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164568242,
            "range": "± 1350877",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357288674,
            "range": "± 2004157",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189623003,
            "range": "± 1203685",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80824631,
            "range": "± 1152982",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264336316,
            "range": "± 1666799",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3542,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 423199,
            "range": "± 1829",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 430304,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725987,
            "range": "± 1450",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319407,
            "range": "± 1167",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6328,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360352,
            "range": "± 1365",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 719509,
            "range": "± 3254",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 354684,
            "range": "± 2075",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2166,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359107,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7026191776,
            "range": "± 32527711",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1696818,
            "range": "± 13415",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2607735,
            "range": "± 20741",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13303,
            "range": "± 10",
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
          "id": "29185ddadc60c8e23a12d9b91e4ff0024e7c2d5c",
          "message": "Fix 2D depth issues (#680)\n\n* depth offsets for rectangles\r\n* remove point/line depth offsets and 2d outlines\r\n* 2d picking is now aware of depth offset\r\n* more robust navmode (2d/3d view) heuristic",
          "timestamp": "2023-01-05T17:26:34+01:00",
          "tree_id": "ac82b0904ef4100fd91e60776e920f4763beb733",
          "url": "https://github.com/rerun-io/rerun/commit/29185ddadc60c8e23a12d9b91e4ff0024e7c2d5c"
        },
        "date": 1672936928551,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 270384,
            "range": "± 7949",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 702,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 294,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 358,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 43235,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 996610745,
            "range": "± 4692516",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 341993,
            "range": "± 2904",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 92296540,
            "range": "± 1093281",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11318,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22023767,
            "range": "± 326755",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7681,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4172763,
            "range": "± 58790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10151362,
            "range": "± 276369",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14295512,
            "range": "± 295701",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 32409274,
            "range": "± 626914",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46120854,
            "range": "± 1449712",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134922395,
            "range": "± 1737169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160064383,
            "range": "± 1453339",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350231425,
            "range": "± 3235221",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180605288,
            "range": "± 2345198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77285607,
            "range": "± 1370938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255773154,
            "range": "± 3112628",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3336,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 411853,
            "range": "± 6513",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 416368,
            "range": "± 7079",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 700485,
            "range": "± 11541",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 306504,
            "range": "± 4298",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5989,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355739,
            "range": "± 2667",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 693829,
            "range": "± 8068",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342940,
            "range": "± 3600",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2058,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 345534,
            "range": "± 3535",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6929423720,
            "range": "± 23538350",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1576285,
            "range": "± 28878",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2518666,
            "range": "± 37070",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 12802,
            "range": "± 208",
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
          "id": "987fab8a2688c3e511eed07da826f90bb1f3a00a",
          "message": "End-to-end support for logging transforms via arrow (#674)\n\n* Add arrow support for Transforms\r\n* Allow bridge to do arrow logging\r\n* Add arrow logging for transforms from bridge\r\n* Look up transforms in arrow store\r\n* Encode quaternion and vec as fixed size lists\r\n* Make Vec / Mat fixed-sized arrays",
          "timestamp": "2023-01-06T15:30:54+01:00",
          "tree_id": "3fd1118bd4983efd992edefd962ae1fc017c93b1",
          "url": "https://github.com/rerun-io/rerun/commit/987fab8a2688c3e511eed07da826f90bb1f3a00a"
        },
        "date": 1673016417302,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276706,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 728,
            "range": "± 1",
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
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46087,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 965642886,
            "range": "± 3748457",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 347406,
            "range": "± 2689",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 98267724,
            "range": "± 606363",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11496,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23823469,
            "range": "± 110978",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 8034,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4748602,
            "range": "± 288970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12525549,
            "range": "± 731767",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17023271,
            "range": "± 1270661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38783153,
            "range": "± 738017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53829985,
            "range": "± 722110",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139316891,
            "range": "± 1235530",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166393469,
            "range": "± 1544500",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 359669014,
            "range": "± 2553526",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190109175,
            "range": "± 1010743",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80596345,
            "range": "± 892917",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 265482670,
            "range": "± 1762908",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3407,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 403108,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 408273,
            "range": "± 2704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 729474,
            "range": "± 1760",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318459,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6274,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350109,
            "range": "± 1532",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704534,
            "range": "± 2968",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352523,
            "range": "± 1852",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2118,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358503,
            "range": "± 2212",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7042726543,
            "range": "± 27648720",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1640608,
            "range": "± 18912",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2632034,
            "range": "± 15575",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15113,
            "range": "± 60",
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
          "id": "180e1714f59f0556089e7451f3c37e8c506cc905",
          "message": "Clean up arrow arrays before we push them into polars (#696)\n\n* Demonstrate the polars conversion is broken for transforms\r\n* New utility to make arrow arrays safe for polars\r\n* Make clean_for_polars part of ArrowExt trait",
          "timestamp": "2023-01-06T15:51:52+01:00",
          "tree_id": "8ef00262787cfbe683368b08716d166a94673d1d",
          "url": "https://github.com/rerun-io/rerun/commit/180e1714f59f0556089e7451f3c37e8c506cc905"
        },
        "date": 1673017575557,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 278568,
            "range": "± 777",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 726,
            "range": "± 0",
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
            "value": 371,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45911,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 982872620,
            "range": "± 11129238",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 346649,
            "range": "± 3601",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 98631135,
            "range": "± 1834676",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11510,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23852245,
            "range": "± 338640",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 8013,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4462206,
            "range": "± 154957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12969557,
            "range": "± 1197375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17844077,
            "range": "± 1478130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38033831,
            "range": "± 917988",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 54988262,
            "range": "± 1781653",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140042143,
            "range": "± 3200129",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166075909,
            "range": "± 1726280",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 360511899,
            "range": "± 3727992",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186309645,
            "range": "± 1936316",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77593477,
            "range": "± 1058682",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260907904,
            "range": "± 1688465",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3581,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 400773,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 405737,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 727572,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322927,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6220,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347377,
            "range": "± 1653",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 699838,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343999,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2147,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350478,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6787470989,
            "range": "± 16573042",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1610902,
            "range": "± 8828",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2618111,
            "range": "± 8294",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15070,
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
          "id": "e201048fa1c366f8632b6c476b2e06cd6914e5ac",
          "message": "Enable arrow conversions for the AnnotationContext (#678)\n\n* Move context -> field_types\r\n* Switch AnnotationInfo to use Label and ColorRGBA fields\r\n* Arrow conversions for AnnotationContext\r\n* Add From<bytes> for ColorRGBA",
          "timestamp": "2023-01-06T16:13:06+01:00",
          "tree_id": "f7bfe16f65f88ac23287cfe254ab9dd54c22be9d",
          "url": "https://github.com/rerun-io/rerun/commit/e201048fa1c366f8632b6c476b2e06cd6914e5ac"
        },
        "date": 1673018730655,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280545,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 728,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 371,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46188,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 842716504,
            "range": "± 16245657",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 374142,
            "range": "± 2193",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89735212,
            "range": "± 488604",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10947,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22916198,
            "range": "± 167327",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7196,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4351720,
            "range": "± 61963",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11421161,
            "range": "± 587598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15257173,
            "range": "± 594931",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35611286,
            "range": "± 704017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48217560,
            "range": "± 640102",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123970669,
            "range": "± 1057624",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149130371,
            "range": "± 890730",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331413644,
            "range": "± 3179944",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179099259,
            "range": "± 2276953",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70689098,
            "range": "± 1138518",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 246796769,
            "range": "± 2149151",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3654,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393674,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 399485,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 743357,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323273,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6121,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351877,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 698188,
            "range": "± 1701",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352098,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2162,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356415,
            "range": "± 1612",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6146544522,
            "range": "± 38129946",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1665364,
            "range": "± 10231",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2722775,
            "range": "± 46083",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15193,
            "range": "± 63",
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
          "id": "c5a5debceb81cb598896a2867447d1520980bc6d",
          "message": "Fix point picking picking additional untransformed ghosts, split picking method into submethods (#691)\n\n* split picking method into submethods\r\n* fix iter_vertices_and_userdata_by_batch iterating over all vertices not just current batch\r\ncaused point picking bugs\r\n* small optimization for point picking detection",
          "timestamp": "2023-01-06T21:46:13+01:00",
          "tree_id": "b6b9561cdc4cab81009cbe90f4fbb8279f2f6756",
          "url": "https://github.com/rerun-io/rerun/commit/c5a5debceb81cb598896a2867447d1520980bc6d"
        },
        "date": 1673038963110,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 285577,
            "range": "± 1471",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 731,
            "range": "± 17",
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
            "value": 374,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46208,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 876711968,
            "range": "± 3913013",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 381386,
            "range": "± 2390",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89358563,
            "range": "± 441085",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10948,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22604446,
            "range": "± 197225",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7217,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4304800,
            "range": "± 47764",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10637516,
            "range": "± 393957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14881948,
            "range": "± 417572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35509547,
            "range": "± 548600",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47918958,
            "range": "± 733434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126076374,
            "range": "± 1161346",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150582309,
            "range": "± 451571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325005311,
            "range": "± 1385540",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176498360,
            "range": "± 733430",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68597347,
            "range": "± 793070",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241896863,
            "range": "± 1488387",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3572,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 392844,
            "range": "± 1156",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 398686,
            "range": "± 1248",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 741982,
            "range": "± 3472",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322769,
            "range": "± 1971",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6165,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354591,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704996,
            "range": "± 2153",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348470,
            "range": "± 937",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2160,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353772,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5961723750,
            "range": "± 11445037",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1613903,
            "range": "± 64771",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2576184,
            "range": "± 9642",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15283,
            "range": "± 117",
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
          "id": "0ea77144650e73a839e3ccac9193b72307f26ead",
          "message": "Track whether a datapath is a classic Field or an arrow Component (#700)",
          "timestamp": "2023-01-09T10:59:26+01:00",
          "tree_id": "0bad101c52785ad47209559eeddf2bde84655927",
          "url": "https://github.com/rerun-io/rerun/commit/0ea77144650e73a839e3ccac9193b72307f26ead"
        },
        "date": 1673259154001,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 282607,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 728,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
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
            "value": 45907,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1008097584,
            "range": "± 6665243",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 364224,
            "range": "± 3973",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 100568684,
            "range": "± 752253",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10990,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23635440,
            "range": "± 156426",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7191,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4459312,
            "range": "± 276793",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12912288,
            "range": "± 835169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17253906,
            "range": "± 1124216",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38593236,
            "range": "± 686380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53655395,
            "range": "± 690986",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139967896,
            "range": "± 1487209",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166927005,
            "range": "± 1601347",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 363586385,
            "range": "± 2293298",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189855548,
            "range": "± 1017139",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81481306,
            "range": "± 1344182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 265105304,
            "range": "± 2626940",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3553,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418082,
            "range": "± 1280",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 425588,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 734435,
            "range": "± 1056",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 314340,
            "range": "± 1146",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6358,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 370148,
            "range": "± 1380",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713255,
            "range": "± 2204",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346335,
            "range": "± 1859",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2147,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357272,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7028604065,
            "range": "± 17796984",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1646383,
            "range": "± 17304",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2606003,
            "range": "± 8746",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15300,
            "range": "± 72",
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
          "id": "a4d50619584cd78bd8d3f99a34d489aa20d7a08e",
          "message": "Better orbitcamera indicator (#690)\n\n* camera orbit indicator is now 3 crossing lines\r\n* notes on how the orbit center could be nicer",
          "timestamp": "2023-01-09T11:33:16+01:00",
          "tree_id": "3a85e5d8593e1f1a6b57b802015b2bac3f0fd714",
          "url": "https://github.com/rerun-io/rerun/commit/a4d50619584cd78bd8d3f99a34d489aa20d7a08e"
        },
        "date": 1673261140224,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280615,
            "range": "± 3536",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 720,
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
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46467,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 858417270,
            "range": "± 4092048",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 371669,
            "range": "± 2617",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 90134417,
            "range": "± 340700",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11046,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23022025,
            "range": "± 134155",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7212,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4612667,
            "range": "± 297990",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12675301,
            "range": "± 504336",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16915424,
            "range": "± 1094519",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37477757,
            "range": "± 450690",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49103268,
            "range": "± 423020",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126434629,
            "range": "± 1069825",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153098007,
            "range": "± 1385126",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328889065,
            "range": "± 2623273",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180569564,
            "range": "± 857703",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71054246,
            "range": "± 986248",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243281057,
            "range": "± 1382395",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3383,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418225,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 424083,
            "range": "± 1347",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732087,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311388,
            "range": "± 642",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6214,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366977,
            "range": "± 1768",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706405,
            "range": "± 2008",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350532,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2156,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353404,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5949125653,
            "range": "± 12705334",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1641317,
            "range": "± 10302",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2661055,
            "range": "± 17624",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15164,
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
          "id": "54f589969570543d1d8b4a1dc6263f69fa796dd8",
          "message": "Add arrow support for point2d (#698)",
          "timestamp": "2023-01-09T11:54:12+01:00",
          "tree_id": "bcd38086d16029191974d5cee43a859a6e317eae",
          "url": "https://github.com/rerun-io/rerun/commit/54f589969570543d1d8b4a1dc6263f69fa796dd8"
        },
        "date": 1673262533477,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 279351,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 729,
            "range": "± 5",
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
            "value": 371,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46144,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 856455233,
            "range": "± 4127459",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 359604,
            "range": "± 2173",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89373582,
            "range": "± 504827",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10908,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22574620,
            "range": "± 369515",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7178,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4318545,
            "range": "± 57157",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10914340,
            "range": "± 383986",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15544728,
            "range": "± 645242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35886426,
            "range": "± 835065",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47885275,
            "range": "± 906192",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126508041,
            "range": "± 1258635",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150584415,
            "range": "± 960363",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325885810,
            "range": "± 1873102",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177628906,
            "range": "± 1348749",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68279501,
            "range": "± 920080",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243750771,
            "range": "± 1632828",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3398,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417600,
            "range": "± 3687",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 420976,
            "range": "± 3574",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 735671,
            "range": "± 4281",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308807,
            "range": "± 3226",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6339,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365056,
            "range": "± 2258",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701265,
            "range": "± 6863",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346554,
            "range": "± 1565",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2143,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355169,
            "range": "± 2122",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6017147256,
            "range": "± 16160506",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1579787,
            "range": "± 15932",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2579037,
            "range": "± 18535",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15008,
            "range": "± 136",
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
          "id": "fb99993962ceb488c34ab6004d45ba264014e30d",
          "message": "Configurable auto size for points/lines per space view (#667)\n\n* re_renderer auto size is now configurable per view builder\r\n* space view can now configure their auto size for any unspecified size\r\n* refined heuristic for default world size\r\n* fix incorrect accumulated bounding box after deserialization\r\n* Fix default size label, fix serializing accum-bbox\r\n* don't show size setting if sizes are set to auto",
          "timestamp": "2023-01-09T13:45:31+01:00",
          "tree_id": "16a67920a26cac10762b8327951fb37b9c346ed4",
          "url": "https://github.com/rerun-io/rerun/commit/fb99993962ceb488c34ab6004d45ba264014e30d"
        },
        "date": 1673269117038,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 277624,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 727,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
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
            "value": 46043,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 989216037,
            "range": "± 4360205",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 367664,
            "range": "± 3769",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 100287197,
            "range": "± 1020469",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11055,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23858501,
            "range": "± 89533",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7217,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 5076971,
            "range": "± 633901",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 14413136,
            "range": "± 440881",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 20570325,
            "range": "± 1518984",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39580712,
            "range": "± 370063",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 54697657,
            "range": "± 658195",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140587368,
            "range": "± 1534578",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 168998514,
            "range": "± 1767822",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 367345360,
            "range": "± 3779747",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 192034077,
            "range": "± 1107865",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81775820,
            "range": "± 958846",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 269214858,
            "range": "± 2206420",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3463,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 419689,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 425202,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 736992,
            "range": "± 2449",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311840,
            "range": "± 2642",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6258,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363461,
            "range": "± 1666",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706839,
            "range": "± 2958",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351788,
            "range": "± 2162",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2136,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358556,
            "range": "± 1992",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7127917204,
            "range": "± 46333198",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1610227,
            "range": "± 17836",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2666802,
            "range": "± 28132",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15150,
            "range": "± 43",
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
          "id": "0e0f5c3f4624c572cabca487dcc3e0e19eae9868",
          "message": "updating tokio to unbreak CI (#711)",
          "timestamp": "2023-01-09T16:40:20+01:00",
          "tree_id": "6137e1dab299d7f7cdae9331f1cda784116327cf",
          "url": "https://github.com/rerun-io/rerun/commit/0e0f5c3f4624c572cabca487dcc3e0e19eae9868"
        },
        "date": 1673279559790,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 283204,
            "range": "± 1241",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 724,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
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
            "value": 45878,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 867823226,
            "range": "± 3085935",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 373430,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89588440,
            "range": "± 652465",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10993,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 21995978,
            "range": "± 279196",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7229,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4277458,
            "range": "± 10482",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10976135,
            "range": "± 175038",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15659058,
            "range": "± 264480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35531955,
            "range": "± 448451",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45034172,
            "range": "± 1013848",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124701929,
            "range": "± 1072606",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149815739,
            "range": "± 779757",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323675675,
            "range": "± 1830801",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177382471,
            "range": "± 880175",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66637814,
            "range": "± 982236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239712321,
            "range": "± 1554763",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3582,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418354,
            "range": "± 697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 424745,
            "range": "± 2376",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732906,
            "range": "± 1161",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 311138,
            "range": "± 1389",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6337,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360834,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705825,
            "range": "± 1946",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347876,
            "range": "± 661",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2142,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355677,
            "range": "± 771",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5914168611,
            "range": "± 8589176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1570132,
            "range": "± 6321",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2623415,
            "range": "± 8647",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15155,
            "range": "± 76",
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
          "id": "96bb1d308ec62f7d79492a88f6af6b262792958a",
          "message": "Fix new space views spawned with wrong nav mode (#692)\n\nAdditionally, \"Add new space view..\" will no longer spawn several space views at once",
          "timestamp": "2023-01-09T17:24:45+01:00",
          "tree_id": "1d15f6ebf615d489d036063810e7b1045efe64c4",
          "url": "https://github.com/rerun-io/rerun/commit/96bb1d308ec62f7d79492a88f6af6b262792958a"
        },
        "date": 1673282255529,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 273954,
            "range": "± 4641",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 731,
            "range": "± 5",
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
            "value": 364,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44488,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 980091375,
            "range": "± 4363422",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 348867,
            "range": "± 5136",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 96481121,
            "range": "± 1256653",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10829,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22246534,
            "range": "± 720624",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6973,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4360652,
            "range": "± 196509",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11803200,
            "range": "± 897724",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15071699,
            "range": "± 747663",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34887606,
            "range": "± 1555818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50179556,
            "range": "± 2669538",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135190812,
            "range": "± 1908607",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164071584,
            "range": "± 1527772",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350484900,
            "range": "± 3525060",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184879993,
            "range": "± 2939873",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75216688,
            "range": "± 1603199",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252873453,
            "range": "± 2843717",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3329,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 407915,
            "range": "± 5722",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 408718,
            "range": "± 5080",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 712105,
            "range": "± 10777",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 299556,
            "range": "± 4405",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6124,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361819,
            "range": "± 4445",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 685599,
            "range": "± 10155",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343936,
            "range": "± 3095",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2071,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349239,
            "range": "± 3774",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6996532891,
            "range": "± 31169062",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1553675,
            "range": "± 41454",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2681551,
            "range": "± 84152",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15016,
            "range": "± 251",
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
          "id": "7fc0a33c7569ddfcfc0ddb61bf03f07578a5cf98",
          "message": "re_datastore: support timeless data (#694)\n\n* core datastructures\r\n\r\n* separate cluster comp caches........\r\n\r\n* write path\r\n\r\n* read path\r\n\r\n* the rest of the read path, and the new temporal|timeless row indices\r\n\r\n* updating latest_at test suite for expected semantics\r\n\r\n* working timeless latest_at semantics\r\n\r\n* letting the timeless-ness of range queries spread everywhere\r\n\r\n* proper timeless range semantics everywhere (holy moly that was ridiculous)\r\n\r\n* component density sanity checks\r\n\r\n* no more weird inverted semantics for low-level ranges\r\n\r\n* these two belong in core\r\n\r\n* bringing all_components to the timeless world\r\n\r\n* started implementing always-timeless autogenerated data but got cold-feet instead\r\n\r\n* changing my mind on a million things last minute, as one should do\r\n\r\n* xxx\r\n\r\n* stuff\r\n\r\n* demonstrating latest-at temporal-only edge case\r\n\r\n* ...and the fix!\r\n\r\n* dead code\r\n\r\n* cranky\r\n\r\n* impl new semantics\r\n\r\n* misc\r\n\r\n* make the intent clearer",
          "timestamp": "2023-01-10T15:04:58+01:00",
          "tree_id": "4e7bbe0adc07ae17b8a21a963b86e77cac2fb36b",
          "url": "https://github.com/rerun-io/rerun/commit/7fc0a33c7569ddfcfc0ddb61bf03f07578a5cf98"
        },
        "date": 1673360386033,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 295190,
            "range": "± 4916",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 760,
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
            "value": 378,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45662,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1025952640,
            "range": "± 5672830",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 398011,
            "range": "± 1350",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 108604390,
            "range": "± 715559",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10954,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23955599,
            "range": "± 283831",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7234,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4967009,
            "range": "± 255071",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13348964,
            "range": "± 603997",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17293075,
            "range": "± 730911",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38356136,
            "range": "± 695316",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53925038,
            "range": "± 865526",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141338249,
            "range": "± 1258061",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165549936,
            "range": "± 1155284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 363780730,
            "range": "± 1782176",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 191215578,
            "range": "± 945832",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 82464935,
            "range": "± 1159054",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 272371519,
            "range": "± 1732395",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3450,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418852,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 426236,
            "range": "± 893",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732417,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 315066,
            "range": "± 418",
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
            "value": 419057,
            "range": "± 1104",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 758273,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 388044,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2140,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 392299,
            "range": "± 1133",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7074666845,
            "range": "± 20829989",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1718330,
            "range": "± 8835",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2788688,
            "range": "± 7327",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14957,
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
          "id": "a772ebcb5e7250d5f2bd5a8ca03daab7d909056d",
          "message": "re_datastore: timeless support for dataframe dumps (#710)\n\n* core datastructures\r\n\r\n* separate cluster comp caches........\r\n\r\n* write path\r\n\r\n* read path\r\n\r\n* the rest of the read path, and the new temporal|timeless row indices\r\n\r\n* updating latest_at test suite for expected semantics\r\n\r\n* working timeless latest_at semantics\r\n\r\n* letting the timeless-ness of range queries spread everywhere\r\n\r\n* proper timeless range semantics everywhere (holy moly that was ridiculous)\r\n\r\n* component density sanity checks\r\n\r\n* no more weird inverted semantics for low-level ranges\r\n\r\n* these two belong in core\r\n\r\n* bringing all_components to the timeless world\r\n\r\n* started implementing always-timeless autogenerated data but got cold-feet instead\r\n\r\n* changing my mind on a million things last minute, as one should do\r\n\r\n* xxx\r\n\r\n* stuff\r\n\r\n* demonstrating latest-at temporal-only edge case\r\n\r\n* ...and the fix!\r\n\r\n* dead code\r\n\r\n* cranky\r\n\r\n* making timeless indices part of DF dumps too\r\n\r\n* sort timeless first\r\n\r\n* self-review\r\n\r\n* impl new semantics\r\n\r\n* misc\r\n\r\n* make the intent clearer",
          "timestamp": "2023-01-10T15:28:27+01:00",
          "tree_id": "c65bda96ed9f91c76162886879f6489c79d3fb4d",
          "url": "https://github.com/rerun-io/rerun/commit/a772ebcb5e7250d5f2bd5a8ca03daab7d909056d"
        },
        "date": 1673361782219,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 275639,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 729,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 300,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 377,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45690,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 997950036,
            "range": "± 5936319",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 376492,
            "range": "± 2368",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 106064728,
            "range": "± 780642",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10961,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23960174,
            "range": "± 36387",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7184,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 5041770,
            "range": "± 314375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 14741722,
            "range": "± 180092",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 20976527,
            "range": "± 939089",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 40155296,
            "range": "± 251921",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 55403304,
            "range": "± 544030",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 142521509,
            "range": "± 1402759",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170402236,
            "range": "± 976670",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 368047473,
            "range": "± 1598812",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 193161103,
            "range": "± 936521",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 82846473,
            "range": "± 1016661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 269827113,
            "range": "± 1708774",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3374,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418964,
            "range": "± 2049",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 425402,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 734552,
            "range": "± 7781",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 315217,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6316,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 373486,
            "range": "± 1198",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717003,
            "range": "± 2149",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 353571,
            "range": "± 1422",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2153,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359343,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7204600959,
            "range": "± 26744216",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1726378,
            "range": "± 15291",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2619387,
            "range": "± 28043",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14937,
            "range": "± 94",
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
          "id": "533466b5be663a65f6e20765ef7684ce7987255e",
          "message": "re_query: timeless support (#709)\n\n* core datastructures\r\n\r\n* separate cluster comp caches........\r\n\r\n* write path\r\n\r\n* read path\r\n\r\n* the rest of the read path, and the new temporal|timeless row indices\r\n\r\n* updating latest_at test suite for expected semantics\r\n\r\n* working timeless latest_at semantics\r\n\r\n* letting the timeless-ness of range queries spread everywhere\r\n\r\n* proper timeless range semantics everywhere (holy moly that was ridiculous)\r\n\r\n* component density sanity checks\r\n\r\n* no more weird inverted semantics for low-level ranges\r\n\r\n* these two belong in core\r\n\r\n* bringing all_components to the timeless world\r\n\r\n* started implementing always-timeless autogenerated data but got cold-feet instead\r\n\r\n* changing my mind on a million things last minute, as one should do\r\n\r\n* xxx\r\n\r\n* stuff\r\n\r\n* demonstrating latest-at temporal-only edge case\r\n\r\n* ...and the fix!\r\n\r\n* dead code\r\n\r\n* cranky\r\n\r\n* add a timeless query test\r\n\r\n* timeless support for range\r\n\r\n* making timeless indices part of DF dumps too\r\n\r\n* sort timeless first\r\n\r\n* self-review\r\n\r\n* add timeless range test\r\n\r\n* clearer to just merge them really\r\n\r\n* impl new semantics\r\n\r\n* misc\r\n\r\n* impl new semantics\r\n\r\n* infinite range test\r\n\r\n* make the intent clearer\r\n\r\n* make the intent clearer",
          "timestamp": "2023-01-10T15:46:58+01:00",
          "tree_id": "3ac42b45c9bce29ecc40316370142c3ee3f2d937",
          "url": "https://github.com/rerun-io/rerun/commit/533466b5be663a65f6e20765ef7684ce7987255e"
        },
        "date": 1673362944215,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276707,
            "range": "± 5808",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 740,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 300,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 376,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45107,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 996055379,
            "range": "± 3069640",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 368568,
            "range": "± 1501",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 102790605,
            "range": "± 952791",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10856,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22415377,
            "range": "± 366271",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7176,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4278739,
            "range": "± 67062",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11473717,
            "range": "± 534851",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16719256,
            "range": "± 567203",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36096167,
            "range": "± 941081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47911979,
            "range": "± 1416754",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137086721,
            "range": "± 1384956",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162845648,
            "range": "± 755857",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354249598,
            "range": "± 1904118",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183734621,
            "range": "± 1318151",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 79657139,
            "range": "± 1756790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259638671,
            "range": "± 2020685",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3459,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 414299,
            "range": "± 3472",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 420428,
            "range": "± 4271",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 726495,
            "range": "± 5865",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308634,
            "range": "± 2240",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6229,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360793,
            "range": "± 1813",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 703600,
            "range": "± 5588",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345217,
            "range": "± 1572",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2162,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351758,
            "range": "± 2401",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6913565152,
            "range": "± 14100953",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1632674,
            "range": "± 12727",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2583649,
            "range": "± 11725",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14836,
            "range": "± 90",
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
          "id": "0604ead6f52bc89c90cc9ac35fe6a06cf45c436d",
          "message": "Filter visible objects consistently for arrow (#716)\n\nConsolidate into SceneQuery::iter_entities and remove redundant plumbing of ObjectProperties.",
          "timestamp": "2023-01-10T16:09:10+01:00",
          "tree_id": "b2f6d4771a950cb5f9d8964fe1ad0f8c3dea18db",
          "url": "https://github.com/rerun-io/rerun/commit/0604ead6f52bc89c90cc9ac35fe6a06cf45c436d"
        },
        "date": 1673364138820,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 275310,
            "range": "± 1914",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 730,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 300,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 374,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44900,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1006356825,
            "range": "± 4431536",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357615,
            "range": "± 2851",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 102848998,
            "range": "± 813803",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10889,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22523711,
            "range": "± 348755",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7094,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4198567,
            "range": "± 19856",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11132769,
            "range": "± 333452",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16976641,
            "range": "± 1045137",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36142661,
            "range": "± 925599",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48725831,
            "range": "± 1455065",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137568173,
            "range": "± 1367809",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162035335,
            "range": "± 782010",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354454018,
            "range": "± 1989770",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187634898,
            "range": "± 1864048",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 78083112,
            "range": "± 1333182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260127210,
            "range": "± 2213095",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3318,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 414142,
            "range": "± 2960",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 420234,
            "range": "± 3462",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 723930,
            "range": "± 5851",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 307704,
            "range": "± 2906",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6177,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360620,
            "range": "± 2494",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697278,
            "range": "± 4530",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347768,
            "range": "± 1578",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2128,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352483,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7175870196,
            "range": "± 9371619",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1637102,
            "range": "± 15359",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2582678,
            "range": "± 15137",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14885,
            "range": "± 142",
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
          "id": "56dbfed5ba35a7ea019dd99d7391defdc69111e4",
          "message": "Remove the glam dependency from focal_length_in_pixels (#726)",
          "timestamp": "2023-01-11T00:19:30+01:00",
          "tree_id": "bad2db9e86b57f45eebaf942ed0e0b6b9b49aabf",
          "url": "https://github.com/rerun-io/rerun/commit/56dbfed5ba35a7ea019dd99d7391defdc69111e4"
        },
        "date": 1673393731639,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276696,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 722,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
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
            "value": 45350,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 997929662,
            "range": "± 6757435",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 369846,
            "range": "± 3825",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 104633243,
            "range": "± 688442",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10914,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23378807,
            "range": "± 390322",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7204,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4252612,
            "range": "± 172978",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12149268,
            "range": "± 849231",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16800605,
            "range": "± 1185381",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37011439,
            "range": "± 1094081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52332126,
            "range": "± 896022",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140656703,
            "range": "± 1370329",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163127531,
            "range": "± 1175991",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357566611,
            "range": "± 1979938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188705388,
            "range": "± 2062174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80717411,
            "range": "± 918762",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262681614,
            "range": "± 1842384",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3385,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418236,
            "range": "± 1867",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423804,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 733606,
            "range": "± 2586",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308609,
            "range": "± 1880",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6309,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365360,
            "range": "± 1449",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713958,
            "range": "± 3207",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349831,
            "range": "± 1366",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2176,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356850,
            "range": "± 1093",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7048514456,
            "range": "± 17409323",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1667920,
            "range": "± 23045",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2628156,
            "range": "± 20079",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14808,
            "range": "± 70",
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
          "id": "e3fc9ad34c396797136e5a7e489124088460d72e",
          "message": "Python support for linestrips for log_path (#725)\n\n* Python support for linestrips for log_path",
          "timestamp": "2023-01-11T10:22:32+01:00",
          "tree_id": "4f69eeeddf9ab184c400cf7c8255940ed3905763",
          "url": "https://github.com/rerun-io/rerun/commit/e3fc9ad34c396797136e5a7e489124088460d72e"
        },
        "date": 1673429893691,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 274581,
            "range": "± 2202",
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
            "value": 303,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 376,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45150,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 982028620,
            "range": "± 4868762",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 351567,
            "range": "± 2449",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 101775780,
            "range": "± 699815",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10915,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23057135,
            "range": "± 301249",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7221,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4293311,
            "range": "± 95744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11076508,
            "range": "± 504175",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15225616,
            "range": "± 403361",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35439424,
            "range": "± 982869",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48776940,
            "range": "± 1612259",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136294535,
            "range": "± 1594944",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163709852,
            "range": "± 915671",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354142741,
            "range": "± 2167419",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186051415,
            "range": "± 1344195",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77190683,
            "range": "± 1261130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259255054,
            "range": "± 2507793",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3476,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 415391,
            "range": "± 3257",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 421024,
            "range": "± 2999",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732454,
            "range": "± 4735",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 307409,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6356,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364088,
            "range": "± 2343",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 700337,
            "range": "± 3779",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348634,
            "range": "± 1499",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2141,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 358058,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6773447256,
            "range": "± 19808943",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1636658,
            "range": "± 13202",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2568361,
            "range": "± 12800",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14884,
            "range": "± 71",
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
          "id": "d106132cc42d68373e754074620a510555aa7784",
          "message": "Fix loading images twice (#730)\n\n* image cache now always expects annotations, eliminating duplicated image loading for loading with `None` versus `missing annotation`\r\n* remove some unnecessary annotation context clones",
          "timestamp": "2023-01-11T12:56:31+01:00",
          "tree_id": "da58f9c108b689d49068f9d81eb785aab973c4ea",
          "url": "https://github.com/rerun-io/rerun/commit/d106132cc42d68373e754074620a510555aa7784"
        },
        "date": 1673438939055,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276090,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 724,
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
            "value": 378,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45931,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 841574864,
            "range": "± 3229842",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 354526,
            "range": "± 2261",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94807032,
            "range": "± 692679",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10931,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22831540,
            "range": "± 230713",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7214,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4459845,
            "range": "± 223049",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12615602,
            "range": "± 570390",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17192910,
            "range": "± 1011017",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37685096,
            "range": "± 620281",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49516062,
            "range": "± 645034",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127035662,
            "range": "± 1119362",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153494928,
            "range": "± 1074456",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 330521886,
            "range": "± 1899687",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177443527,
            "range": "± 785483",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70808561,
            "range": "± 823665",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 242908353,
            "range": "± 1519264",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3436,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417277,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423104,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732235,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308739,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6306,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362674,
            "range": "± 1245",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 709118,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348530,
            "range": "± 1636",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2189,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355234,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5991288492,
            "range": "± 11239066",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1658836,
            "range": "± 12676",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2665921,
            "range": "± 8684",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14925,
            "range": "± 66",
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
          "id": "9c38d807cf34e8c18bf92787a2fe488d5c96b668",
          "message": "Data Blueprint Groups (#724)\n\n* add data structure for data-blueprint groups\r\n* data blueprint has now all object properties and handles property propagation\r\n* auto collapse any group with 4 elements or more",
          "timestamp": "2023-01-11T14:18:30+01:00",
          "tree_id": "6a08726fccb96cdf5a46c667134db51da5c87b60",
          "url": "https://github.com/rerun-io/rerun/commit/9c38d807cf34e8c18bf92787a2fe488d5c96b668"
        },
        "date": 1673443885861,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 279780,
            "range": "± 1366",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 727,
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
            "value": 381,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45675,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 936752235,
            "range": "± 7929254",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 372192,
            "range": "± 3532",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 101396303,
            "range": "± 783902",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10941,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23479597,
            "range": "± 172449",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7231,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4738128,
            "range": "± 283326",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13478970,
            "range": "± 677068",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 18879792,
            "range": "± 985378",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38446680,
            "range": "± 448272",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52304726,
            "range": "± 608178",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135732535,
            "range": "± 1557339",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165568478,
            "range": "± 1422715",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354396650,
            "range": "± 2729485",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186351607,
            "range": "± 805598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77304776,
            "range": "± 912328",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259191820,
            "range": "± 1778697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3411,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417770,
            "range": "± 815",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 424386,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 734706,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 308746,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6289,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364791,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705616,
            "range": "± 3453",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350684,
            "range": "± 1784",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2135,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359675,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6721605431,
            "range": "± 214733810",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1706100,
            "range": "± 77776",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2698607,
            "range": "± 277324",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14920,
            "range": "± 50",
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
      }
    ]
  }
}