window.BENCHMARK_DATA = {
  "lastUpdate": 1675502891678,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
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
          "id": "9d4f81f5f50e8c5793bc46282a3e8f024f9ee8e5",
          "message": "Issue templates with \"👀 needs triage\" (#1016)\n\n* Add \"needs triage\" to label to issue templates\r\n\r\n* Add issue template for \"annoyance report\"",
          "timestamp": "2023-02-01T09:51:11+01:00",
          "tree_id": "56500231fac6f11b51b790d95033be5c0a555044",
          "url": "https://github.com/rerun-io/rerun/commit/9d4f81f5f50e8c5793bc46282a3e8f024f9ee8e5"
        },
        "date": 1675241954012,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571836,
            "range": "± 6015",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1745,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 305,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 368,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150045,
            "range": "± 2005",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44401804,
            "range": "± 1591700",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124355285,
            "range": "± 1785187",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 148379846,
            "range": "± 1524446",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 321933029,
            "range": "± 3573980",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 171856778,
            "range": "± 1908951",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62666717,
            "range": "± 1094201",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 234293424,
            "range": "± 2858554",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 316469,
            "range": "± 4768",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5936,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362862,
            "range": "± 3812",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704546,
            "range": "± 10447",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342180,
            "range": "± 3322",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2045,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 348249,
            "range": "± 3990",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6041710858,
            "range": "± 14581215",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1661809,
            "range": "± 30562",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2641340,
            "range": "± 26284",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16801,
            "range": "± 259",
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
          "id": "dafe10bac6eb48294d0f3078eb302566c1faffef",
          "message": "Hide MsgId & InstanceId for on-hover ui (#1017)\n\n* Hide MsgId & InstanceId for on-hover ui\r\n* shorten msg id display\r\n* always hide instance_key",
          "timestamp": "2023-02-01T13:47:29+01:00",
          "tree_id": "cae6aa7bb3eb8eb9f3aefddaef5cde9bb5b12b41",
          "url": "https://github.com/rerun-io/rerun/commit/dafe10bac6eb48294d0f3078eb302566c1faffef"
        },
        "date": 1675256158467,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 564166,
            "range": "± 1900",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1771,
            "range": "± 0",
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
            "value": 383,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153000,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47212518,
            "range": "± 1443410",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135823822,
            "range": "± 1327598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 159537104,
            "range": "± 740964",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 349304928,
            "range": "± 1688001",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182550742,
            "range": "± 1004333",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71233372,
            "range": "± 1218162",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253835349,
            "range": "± 1615026",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324979,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6257,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 346389,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 702116,
            "range": "± 5150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343839,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2136,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351320,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6863402504,
            "range": "± 13042997",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1685975,
            "range": "± 5731",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2632030,
            "range": "± 7357",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17359,
            "range": "± 74",
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
          "id": "9b671d5360edb873bac51fce2c274513f4860a32",
          "message": "Show Space View options in tab bar (#1027)\n\n* Add spaceview options to tab bar\r\n\r\n* Protect against bad data\r\n\r\n* Remove unnecessary tensor headroom\r\n\r\n* Make sure the buttons cover the tab labels if they intersect\r\n\r\n* Text view: remove the top row with the number of text entries\r\n\r\n* less :facepalm:\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* less self-descriptive code\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-02-01T14:54:13+01:00",
          "tree_id": "b97547f06df3fed4f510b81f35e5826f1b03d07c",
          "url": "https://github.com/rerun-io/rerun/commit/9b671d5360edb873bac51fce2c274513f4860a32"
        },
        "date": 1675260159617,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 572274,
            "range": "± 2308",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1766,
            "range": "± 1",
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
            "value": 153393,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52706078,
            "range": "± 641190",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138534705,
            "range": "± 1302432",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166374690,
            "range": "± 1245397",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 360705928,
            "range": "± 3503888",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189084195,
            "range": "± 1458649",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75169742,
            "range": "± 1290742",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258705433,
            "range": "± 2272475",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326090,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6162,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353665,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711997,
            "range": "± 2504",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349828,
            "range": "± 2440",
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
            "value": 355859,
            "range": "± 2187",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7119122306,
            "range": "± 66550803",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1729487,
            "range": "± 22604",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2657974,
            "range": "± 42829",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17409,
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
          "id": "5c38ec55905beb706f89c2052a70a90c333b2491",
          "message": "lint against using dbg!() macro in production code (#1029)",
          "timestamp": "2023-02-01T15:18:19+01:00",
          "tree_id": "dda7cf284d54efb67c34017cedb5cfcdbdaab804",
          "url": "https://github.com/rerun-io/rerun/commit/5c38ec55905beb706f89c2052a70a90c333b2491"
        },
        "date": 1675261629630,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 612862,
            "range": "± 13810",
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
            "value": 305,
            "range": "± 2",
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
            "value": 155364,
            "range": "± 1381",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51897299,
            "range": "± 915163",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139864255,
            "range": "± 1317894",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164800431,
            "range": "± 1245171",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 360475307,
            "range": "± 1980497",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186260916,
            "range": "± 1241900",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74619537,
            "range": "± 905567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260303491,
            "range": "± 1991240",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323730,
            "range": "± 2327",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6156,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 402826,
            "range": "± 1983",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 750602,
            "range": "± 5378",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 379195,
            "range": "± 1860",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2094,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 384134,
            "range": "± 1715",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7214922589,
            "range": "± 23393099",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1758790,
            "range": "± 17627",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2852575,
            "range": "± 19399",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17216,
            "range": "± 151",
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
          "id": "534384dd44a54742513b402b2a9103f136a7fdaf",
          "message": "Fix compilation failure due to bad merge (#1030)",
          "timestamp": "2023-02-01T15:32:00+01:00",
          "tree_id": "7d234ee3ccea5ff85f5ecf223c03b97249ad334a",
          "url": "https://github.com/rerun-io/rerun/commit/534384dd44a54742513b402b2a9103f136a7fdaf"
        },
        "date": 1675262548970,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 596302,
            "range": "± 13607",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1751,
            "range": "± 6",
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
            "value": 376,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155715,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52160400,
            "range": "± 1195188",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140302255,
            "range": "± 1514388",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164394909,
            "range": "± 1378295",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 359092062,
            "range": "± 1842774",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187249053,
            "range": "± 1268651",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76477655,
            "range": "± 855728",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260799411,
            "range": "± 1939051",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327433,
            "range": "± 1238",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6162,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 399551,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708387,
            "range": "± 4716",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 381216,
            "range": "± 2620",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2103,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 386751,
            "range": "± 1746",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7226788498,
            "range": "± 16072857",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1765309,
            "range": "± 14764",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2856373,
            "range": "± 21015",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17400,
            "range": "± 125",
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
          "id": "ee40f2f1580987d52119b8d0834d12dc9bce8f9b",
          "message": "Click space view title to select it (#1032)\n\n Remove the cogwheel button from the tab row",
          "timestamp": "2023-02-01T16:06:29+01:00",
          "tree_id": "6889a8664ae2d65a39c94f7ae8ce3235f87b3b77",
          "url": "https://github.com/rerun-io/rerun/commit/ee40f2f1580987d52119b8d0834d12dc9bce8f9b"
        },
        "date": 1675264548805,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 563320,
            "range": "± 3115",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1751,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 308,
            "range": "± 5",
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
            "value": 152182,
            "range": "± 896",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47201053,
            "range": "± 1521303",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136124522,
            "range": "± 1331445",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161548305,
            "range": "± 3410859",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 347928813,
            "range": "± 1781654",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182662221,
            "range": "± 1253502",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72188886,
            "range": "± 1474192",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251283197,
            "range": "± 2219850",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 316800,
            "range": "± 1438",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6011,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347308,
            "range": "± 1270",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 690638,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343119,
            "range": "± 974",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2043,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355818,
            "range": "± 1076",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6992082107,
            "range": "± 22753436",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1725854,
            "range": "± 16862",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2685849,
            "range": "± 214075",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17360,
            "range": "± 129",
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
          "id": "70c4dd59664d7336477e1806130499bbc58ef21e",
          "message": "Switch to a generator for our common-API registry as well. (#1035)\n\n* Switch to a generator for our common-API registry as well.",
          "timestamp": "2023-02-01T19:33:00+01:00",
          "tree_id": "8230141bbacf6d3ffa7166cb17956c3d6fe09dd4",
          "url": "https://github.com/rerun-io/rerun/commit/70c4dd59664d7336477e1806130499bbc58ef21e"
        },
        "date": 1675277130741,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 568043,
            "range": "± 2057",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1760,
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
            "value": 378,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152116,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49595299,
            "range": "± 476571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126284514,
            "range": "± 1100245",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 157657950,
            "range": "± 1416281",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331769162,
            "range": "± 1733813",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178114587,
            "range": "± 814237",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66553013,
            "range": "± 788198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240872757,
            "range": "± 1546881",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319378,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6052,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356366,
            "range": "± 1402",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711254,
            "range": "± 3170",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352791,
            "range": "± 1781",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2104,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357536,
            "range": "± 1591",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6268878807,
            "range": "± 37087384",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1757201,
            "range": "± 18891",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2788584,
            "range": "± 71356",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17407,
            "range": "± 109",
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
          "id": "ec3ed86b0bdf3e46baa8bba86c541e711b1abe60",
          "message": "Catch it when we break the docs (#1040)\n\n* Catch it when we break the docs\r\n* Make gen_common_index work on python3.8",
          "timestamp": "2023-02-01T21:41:25+01:00",
          "tree_id": "cb8f0bcfe68ca3500345d012d25eb8b8694f356a",
          "url": "https://github.com/rerun-io/rerun/commit/ec3ed86b0bdf3e46baa8bba86c541e711b1abe60"
        },
        "date": 1675284587800,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 566259,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1757,
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
            "value": 379,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152660,
            "range": "± 674",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49723676,
            "range": "± 1278325",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134276252,
            "range": "± 1382523",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163251871,
            "range": "± 963404",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351539717,
            "range": "± 1761804",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182356634,
            "range": "± 882676",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72580056,
            "range": "± 1047876",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 254810941,
            "range": "± 1910716",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 315563,
            "range": "± 1076",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6028,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 349749,
            "range": "± 1475",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 694080,
            "range": "± 2149",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347545,
            "range": "± 988",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2082,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351371,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6847366249,
            "range": "± 19501858",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1758847,
            "range": "± 12449",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2668259,
            "range": "± 13678",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17478,
            "range": "± 51",
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
          "id": "b26c8a6962e7ef4cfce1db4307381d1166c8ed09",
          "message": "Selection panel: improve view of component path\n\nShow entity path separate from the component name,\nand make the former clickable.",
          "timestamp": "2023-02-02T09:40:24+01:00",
          "tree_id": "c0d45a22a5ac851b886195ed9b7ef1c17b786ab3",
          "url": "https://github.com/rerun-io/rerun/commit/b26c8a6962e7ef4cfce1db4307381d1166c8ed09"
        },
        "date": 1675327714758,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581464,
            "range": "± 1980",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1788,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 306,
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
            "value": 156007,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46445201,
            "range": "± 1033029",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123569255,
            "range": "± 1156945",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149483374,
            "range": "± 587210",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 321203136,
            "range": "± 1509789",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173510138,
            "range": "± 902974",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62511712,
            "range": "± 705011",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236594351,
            "range": "± 1641754",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331294,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6015,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363274,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 723123,
            "range": "± 2354",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347489,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2054,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353277,
            "range": "± 1407",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6023641151,
            "range": "± 15143375",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1712881,
            "range": "± 13321",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2706992,
            "range": "± 12416",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17377,
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
          "id": "47443a592fd08412c1b055287ffeaf1b923fe526",
          "message": "python SDK: raw 3D meshes and example (#1026)\n\n* impl log_mesh & log_meshes\r\n\r\n* port raw_mesh example to python\r\n\r\n* typo\r\n\r\n* pylint\r\n\r\n* lints\r\n\r\n* addressed PR comments + docs\r\n\r\n* ???",
          "timestamp": "2023-02-02T10:05:19+01:00",
          "tree_id": "f8a0b97c158bca53dd4d066e540c4046a752b273",
          "url": "https://github.com/rerun-io/rerun/commit/47443a592fd08412c1b055287ffeaf1b923fe526"
        },
        "date": 1675329221370,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565557,
            "range": "± 6987",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1772,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 367,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152518,
            "range": "± 2494",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47945046,
            "range": "± 2882229",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136969303,
            "range": "± 1906263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161558951,
            "range": "± 3174186",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 346829841,
            "range": "± 3638868",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180519579,
            "range": "± 1953591",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70652634,
            "range": "± 1968851",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 244104260,
            "range": "± 3905233",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323919,
            "range": "± 4573",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5792,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357607,
            "range": "± 21268",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 710371,
            "range": "± 11719",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 339944,
            "range": "± 3295",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1955,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347012,
            "range": "± 4126",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6993982030,
            "range": "± 26404932",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1672355,
            "range": "± 18949",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2564811,
            "range": "± 29568",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16567,
            "range": "± 280",
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
          "id": "c3151ddca5cb41db6dd098b80e08a64d72f01fa0",
          "message": "Slightly nicer tensor view (#1028)\n\n* Break out a helper function\r\n\r\n* Only show tensor axes on hover\r\n\r\n* Add comments and TODO\r\n\r\n* Wider slider\r\n\r\n* Don't show hover axes if dragging something\r\n\r\n* Shorter selector names\r\n\r\n* Add colon for the names\r\n\r\n* Add background behind axis text\r\n\r\n* Remove the colon\r\n\r\n* spelling\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* Build fix\r\n\r\n* Add some margin for the axis label\r\n\r\n* Fix the cross-positions of the labels\r\n\r\n* Add a TODO\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-02-02T10:08:01+01:00",
          "tree_id": "8e4c05fe66bea6837b504e99479197772f757c4c",
          "url": "https://github.com/rerun-io/rerun/commit/c3151ddca5cb41db6dd098b80e08a64d72f01fa0"
        },
        "date": 1675329420523,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571560,
            "range": "± 2725",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1759,
            "range": "± 2",
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
            "value": 383,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155215,
            "range": "± 607",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44864811,
            "range": "± 1105086",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125026118,
            "range": "± 1172232",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 146855865,
            "range": "± 669571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 320189538,
            "range": "± 1397253",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174239866,
            "range": "± 750979",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63283819,
            "range": "± 1097409",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236390597,
            "range": "± 1514712",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330097,
            "range": "± 1064",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6117,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362272,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 726232,
            "range": "± 1369",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347828,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2077,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350936,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5943947651,
            "range": "± 9601980",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1712719,
            "range": "± 8771",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2647659,
            "range": "± 16778",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17425,
            "range": "± 75",
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
          "id": "f2460b12ddde93d3fbb6d9683120d6cfb8c17425",
          "message": "Skip data selection section for space views and data blueprint groups (#1039)",
          "timestamp": "2023-02-02T10:22:05+01:00",
          "tree_id": "041ad41dcf659cd7d5e0e5ec6b30888e38ab3ae8",
          "url": "https://github.com/rerun-io/rerun/commit/f2460b12ddde93d3fbb6d9683120d6cfb8c17425"
        },
        "date": 1675330225323,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 560287,
            "range": "± 2877",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1776,
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
            "value": 376,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156363,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50889788,
            "range": "± 774024",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138047155,
            "range": "± 1597418",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166002520,
            "range": "± 2188135",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 359069724,
            "range": "± 4590706",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189255268,
            "range": "± 1025850",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76416955,
            "range": "± 890880",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263487293,
            "range": "± 1829642",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331474,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6100,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 370043,
            "range": "± 1584",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 724404,
            "range": "± 2884",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 353625,
            "range": "± 1208",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2139,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359141,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6985255601,
            "range": "± 18855737",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1704434,
            "range": "± 16740",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2649119,
            "range": "± 10286",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17165,
            "range": "± 95",
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
          "id": "7f6bc9147dc988d03de7cd8b1bfd1d0cd99097aa",
          "message": "Preview component data (#1034)\n\n* Show first n elements for component data\r\n* instance key is no longer printed with 'key:'\r\n* use \"...plus {} more\" like on linestrip on other pr",
          "timestamp": "2023-02-02T11:12:52+01:00",
          "tree_id": "0e03db3a22ca369fd4d8d86e0d33c02ba1b40c6f",
          "url": "https://github.com/rerun-io/rerun/commit/7f6bc9147dc988d03de7cd8b1bfd1d0cd99097aa"
        },
        "date": 1675333394884,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 572489,
            "range": "± 1831",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1759,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 313,
            "range": "± 8",
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
            "value": 152899,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44699795,
            "range": "± 1744552",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123564531,
            "range": "± 1219293",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151406151,
            "range": "± 759983",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324979573,
            "range": "± 1481410",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174856046,
            "range": "± 931167",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62408603,
            "range": "± 821373",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 237692676,
            "range": "± 1522693",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 317980,
            "range": "± 644",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6045,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347416,
            "range": "± 850",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 694890,
            "range": "± 1334",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346356,
            "range": "± 478",
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
            "value": 355687,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6023487970,
            "range": "± 9800220",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1728684,
            "range": "± 7698",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2603876,
            "range": "± 7488",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17426,
            "range": "± 60",
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
          "id": "6e00f1b3cef9063df8911c6ec204f6af7b98a0c9",
          "message": "Add `ComponentName::short_name` helper function (#1053)\n\n* Add ComponentName::short_name helper function\r\n\r\n* Keep the 'ext.' prefix",
          "timestamp": "2023-02-02T12:46:46+01:00",
          "tree_id": "6b4b759cb60f923e82885f675300a00cc7e6c6e9",
          "url": "https://github.com/rerun-io/rerun/commit/6e00f1b3cef9063df8911c6ec204f6af7b98a0c9"
        },
        "date": 1675338927518,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571150,
            "range": "± 7425",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1806,
            "range": "± 8",
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
            "value": 378,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156273,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50551320,
            "range": "± 1418508",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136140484,
            "range": "± 1356150",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160792295,
            "range": "± 1055702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348848406,
            "range": "± 1777895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184400753,
            "range": "± 1269016",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72034085,
            "range": "± 1209127",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253644384,
            "range": "± 2183636",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327952,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6147,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360870,
            "range": "± 1100",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716960,
            "range": "± 1751",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343799,
            "range": "± 1315",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2063,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347553,
            "range": "± 1173",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7027894027,
            "range": "± 25601447",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1755920,
            "range": "± 11086",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2727803,
            "range": "± 7955",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17248,
            "range": "± 51",
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
          "id": "cd92a63e1ff8d2231a0e5187f53fb47e30536f7e",
          "message": "Improved text space view blueprint (#1055)\n\n* Much more compact log space view config\r\n\r\n* central `visibility_toggle_button` on re_ui\r\n\r\n* finish\r\n\r\n* undo a few changes - will do separate pr with more there",
          "timestamp": "2023-02-02T14:34:33+01:00",
          "tree_id": "9af55258e37109dc14cbcec7a2bc3a068edef237",
          "url": "https://github.com/rerun-io/rerun/commit/cd92a63e1ff8d2231a0e5187f53fb47e30536f7e"
        },
        "date": 1675345381510,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 584872,
            "range": "± 2434",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1777,
            "range": "± 12",
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
            "value": 382,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154719,
            "range": "± 1575",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45260385,
            "range": "± 1524023",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134190511,
            "range": "± 1550458",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160770746,
            "range": "± 1322479",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 346694456,
            "range": "± 2286740",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186087337,
            "range": "± 1221039",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70309365,
            "range": "± 1926776",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256287921,
            "range": "± 2080077",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327726,
            "range": "± 1317",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6060,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364038,
            "range": "± 1044",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715011,
            "range": "± 1964",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351003,
            "range": "± 1421",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2041,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355591,
            "range": "± 1149",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6986940213,
            "range": "± 23335003",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1701429,
            "range": "± 13485",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2631227,
            "range": "± 8246",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17268,
            "range": "± 59",
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
          "id": "b0562751d8a82636e7a9fc980b5b7dd19f292acf",
          "message": "Build+Deploy Python Wheels in CI (#996)\n\n* Upgrade numpy, pyo3, maturin\r\n* Fix `rerun` entrypoint\r\n* Use Rerun fork of cache-apt-pkgs-action with a fix\r\n* Rename the python crate to `rerun_py` to match the folder\r\n* Updated CHANGELOG.md",
          "timestamp": "2023-02-02T15:27:13+01:00",
          "tree_id": "85b423505507e602f3732b002a8617f689995689",
          "url": "https://github.com/rerun-io/rerun/commit/b0562751d8a82636e7a9fc980b5b7dd19f292acf"
        },
        "date": 1675348685715,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 578124,
            "range": "± 1975",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1782,
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
            "value": 381,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155149,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51575128,
            "range": "± 843983",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135974989,
            "range": "± 1221929",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163690579,
            "range": "± 1537535",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 355487436,
            "range": "± 1816103",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185176360,
            "range": "± 905007",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72311419,
            "range": "± 1001636",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255017708,
            "range": "± 1736660",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328047,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6075,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364979,
            "range": "± 2039",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 730364,
            "range": "± 2945",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345372,
            "range": "± 2297",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2072,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353624,
            "range": "± 1526",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6820284417,
            "range": "± 32224134",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1708234,
            "range": "± 10609",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2671666,
            "range": "± 11675",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17269,
            "range": "± 47",
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
          "id": "456be8dec5d3f347bd11bc4403d997162a63d378",
          "message": "Show all instance values in the selection panel (#1056)\n\n* Use debug_assert instead of assert - we don't want to crash in release\r\n\r\n* Add profiling scopes to component inspection data_ui\r\n\r\n* spelling\r\n\r\n* Use a table to show all instance values of an entity\r\n\r\n* Show all points in line strips\r\n\r\n* Sort because I need it all sorted because I am crazy\r\n\r\n* Add context of what EntityPath we are showing components for\r\n\r\n* Less right-ward drift\r\n\r\n* Cleanup\r\n\r\n* Make the instance keys clickable\r\n\r\n* Instance Key, capitalized",
          "timestamp": "2023-02-02T15:54:27+01:00",
          "tree_id": "8cd5842b96467d0b6e6276fdde578166e9ca228e",
          "url": "https://github.com/rerun-io/rerun/commit/456be8dec5d3f347bd11bc4403d997162a63d378"
        },
        "date": 1675350315163,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 557136,
            "range": "± 6852",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1764,
            "range": "± 13",
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
            "value": 371,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149116,
            "range": "± 2237",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44987018,
            "range": "± 1525722",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132860886,
            "range": "± 1586675",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156799267,
            "range": "± 1630804",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 344585801,
            "range": "± 3459518",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179427849,
            "range": "± 2060840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69300333,
            "range": "± 1332749",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253127239,
            "range": "± 4375640",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 316598,
            "range": "± 4228",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5901,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360369,
            "range": "± 3614",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 700893,
            "range": "± 7117",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 340278,
            "range": "± 2429",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1982,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347952,
            "range": "± 2559",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6919276841,
            "range": "± 87442413",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1631482,
            "range": "± 27947",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2639990,
            "range": "± 61362",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17269,
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
          "id": "f8125ce57c6eab4466b9b881d550ee88ed733504",
          "message": "Workflows: update python.yml\n\nSet input files for action-automatic-releases on different lines",
          "timestamp": "2023-02-02T16:28:38+01:00",
          "tree_id": "181a971e905a59cca025c4153b6afbd89a42d31e",
          "url": "https://github.com/rerun-io/rerun/commit/f8125ce57c6eab4466b9b881d550ee88ed733504"
        },
        "date": 1675352256925,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 580699,
            "range": "± 1681",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1780,
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
            "value": 380,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156056,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53189766,
            "range": "± 645698",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139293599,
            "range": "± 1387267",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 169679895,
            "range": "± 2083791",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 356852267,
            "range": "± 3622999",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 192813035,
            "range": "± 1446083",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75593144,
            "range": "± 1050762",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263572918,
            "range": "± 2086844",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328775,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6029,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364140,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 724041,
            "range": "± 2737",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350450,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2029,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353044,
            "range": "± 1279",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7018106597,
            "range": "± 19407071",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1734336,
            "range": "± 13815",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2649516,
            "range": "± 18549",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17270,
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
          "id": "b58af6a60a075a35458305d8d83e7b94c107cfed",
          "message": "more spaceview blueprint improvements (#1057)\n\n* don't show space view name, show space path only for spatial views and rename it root\r\n\r\n* remove remove button for space view. Put add/remove & clone next to each other\r\n\r\n* clean up spatial view selection view\r\n\r\n* grid_left_hand_label in re_ui\r\n\r\n* selection_grid on re_ui\r\n\r\n* tooltips!\r\n\r\n* code cleanliness, improved label",
          "timestamp": "2023-02-02T19:59:56+01:00",
          "tree_id": "85a57861facb6c7b26fcbe404416fe349ae19577",
          "url": "https://github.com/rerun-io/rerun/commit/b58af6a60a075a35458305d8d83e7b94c107cfed"
        },
        "date": 1675364911103,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 590605,
            "range": "± 3295",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1773,
            "range": "± 6",
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
            "value": 379,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154809,
            "range": "± 6076",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50025048,
            "range": "± 1864692",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137926029,
            "range": "± 6301212",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164185687,
            "range": "± 1793142",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351260650,
            "range": "± 6034523",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187781949,
            "range": "± 3791069",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72546506,
            "range": "± 1575330",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255154699,
            "range": "± 2371274",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327823,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6056,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362532,
            "range": "± 2200",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715453,
            "range": "± 2759",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349605,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2014,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355797,
            "range": "± 944",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7036163977,
            "range": "± 11457202",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1716667,
            "range": "± 36054",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2672637,
            "range": "± 25590",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17254,
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
          "id": "2c971399406ed895b7ef8694b7c02e02d5d4bb8c",
          "message": "Speed up Point3D (#1064)\n\n* Don't process annotations if the components aren't presetn\r\n* Pre-allocate storage for aggregating points, colors, and user-data",
          "timestamp": "2023-02-02T23:31:04+01:00",
          "tree_id": "92ecb42180edd26d204a66934e54de773b2c2cf0",
          "url": "https://github.com/rerun-io/rerun/commit/2c971399406ed895b7ef8694b7c02e02d5d4bb8c"
        },
        "date": 1675377709867,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 580109,
            "range": "± 3442",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1787,
            "range": "± 10",
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
            "value": 155935,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 54454561,
            "range": "± 630826",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138386741,
            "range": "± 1484714",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166748535,
            "range": "± 6058512",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 360273248,
            "range": "± 10191378",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188291471,
            "range": "± 2940512",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69389942,
            "range": "± 1520038",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258214327,
            "range": "± 3868258",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328604,
            "range": "± 955",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6106,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357567,
            "range": "± 1092",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715654,
            "range": "± 1746",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342343,
            "range": "± 1183",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2014,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355807,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6955226774,
            "range": "± 44276359",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1676807,
            "range": "± 21453",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2629592,
            "range": "± 21323",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16953,
            "range": "± 165",
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
          "id": "46d013ce1b3a83d23c5a30f8c0b1ef59ac34b449",
          "message": "Misc code cleanup (#1070)\n\n* use trait as _\r\n\r\n* Use TimeInt::MAX\r\n\r\n* code simplification\r\n\r\n* Small Cargo.toml cleanups\r\n\r\n* Replace DebugOptions with `show_metrics` option\r\n\r\n* Add example of how to run objectron with other recordings\r\n\r\n* Add some margin right of the maximize button in the spaceview tab bar\r\n\r\nMatches the text margin on the left\r\n\r\n* Explicitly name the 2D/3D help texts\r\n\r\n* Lint .yml files too",
          "timestamp": "2023-02-03T08:54:10+01:00",
          "tree_id": "e67c3422892509fef21ec8feae5ac89b6e8fad97",
          "url": "https://github.com/rerun-io/rerun/commit/46d013ce1b3a83d23c5a30f8c0b1ef59ac34b449"
        },
        "date": 1675411529072,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 579344,
            "range": "± 2056",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1787,
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
            "value": 380,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156435,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51703254,
            "range": "± 1008837",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137278741,
            "range": "± 1353090",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163394606,
            "range": "± 1438190",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353613785,
            "range": "± 1852939",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189159518,
            "range": "± 1045564",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74387643,
            "range": "± 907705",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259352770,
            "range": "± 1988845",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328508,
            "range": "± 2943",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6048,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361736,
            "range": "± 1400",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 725175,
            "range": "± 4081",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345237,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2044,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351360,
            "range": "± 1401",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7078540703,
            "range": "± 19828410",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1764278,
            "range": "± 7099",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2666525,
            "range": "± 19836",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17247,
            "range": "± 51",
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
          "id": "5582f6179ea526d9b9acf0c32a990d71ef96428a",
          "message": "Fix play/pause toggle annoyance (#1066)\n\n* Fix play/pause toggle annoyance\r\n\r\n* wording",
          "timestamp": "2023-02-03T09:20:40+01:00",
          "tree_id": "a136cb815ae25fc87d1c34b6ea706ad41767c278",
          "url": "https://github.com/rerun-io/rerun/commit/5582f6179ea526d9b9acf0c32a990d71ef96428a"
        },
        "date": 1675412959619,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 584163,
            "range": "± 1568",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1825,
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
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 159056,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47317708,
            "range": "± 679919",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126372902,
            "range": "± 1124587",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150826371,
            "range": "± 1740895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325818904,
            "range": "± 2608865",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 175345725,
            "range": "± 1747879",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64001123,
            "range": "± 812057",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239225342,
            "range": "± 1644029",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328146,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6136,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358590,
            "range": "± 1482",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 720742,
            "range": "± 1644",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351975,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2032,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356710,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6115703113,
            "range": "± 16586211",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1719127,
            "range": "± 19335",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2604588,
            "range": "± 11742",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17383,
            "range": "± 84",
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
          "id": "767d34125c60dc9c50d5f562de0ef2519dac6265",
          "message": "Same height for tab bar and title bars of side panels (#1072)\n\n* Same height for tab bar and title bars of side panels\r\n\r\n* Correct horizontal spacing between tabs",
          "timestamp": "2023-02-03T09:45:33+01:00",
          "tree_id": "040da153300c14a5b5bfca8182d65e30534fcf4c",
          "url": "https://github.com/rerun-io/rerun/commit/767d34125c60dc9c50d5f562de0ef2519dac6265"
        },
        "date": 1675414426822,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 557560,
            "range": "± 7898",
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
            "value": 293,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 370,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149185,
            "range": "± 1946",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42525606,
            "range": "± 1431899",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 121398081,
            "range": "± 1551358",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 141435272,
            "range": "± 1886186",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 307677491,
            "range": "± 3168302",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 169367457,
            "range": "± 2783312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 60411975,
            "range": "± 1253834",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 230711565,
            "range": "± 2347132",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 312611,
            "range": "± 4207",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5792,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353244,
            "range": "± 3497",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 696263,
            "range": "± 8140",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342575,
            "range": "± 4650",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1933,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 345578,
            "range": "± 3257",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5967990210,
            "range": "± 26946352",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1626991,
            "range": "± 17868",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2554317,
            "range": "± 27469",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16950,
            "range": "± 237",
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
          "id": "a0197aeee5ef8031be7c3b5566114125dd601a1b",
          "message": "Workflow fixes for Python Wheel release (#1059)\n\n* Workflow fixes for Python Wheel release\r\n*Revert rerun_py/build.rs back to original\r\n* Patch Cargo.toml with a scripts/patch_prerelease_version.py now\r\n* Patched egui for windows fix",
          "timestamp": "2023-02-03T14:49:32+01:00",
          "tree_id": "0b1d312b17b3169e84bea943a1de26e9f5f0d516",
          "url": "https://github.com/rerun-io/rerun/commit/a0197aeee5ef8031be7c3b5566114125dd601a1b"
        },
        "date": 1675432674022,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571638,
            "range": "± 7089",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1764,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 301,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 366,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147837,
            "range": "± 2007",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44789839,
            "range": "± 2098064",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 131551617,
            "range": "± 1916683",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 157473089,
            "range": "± 2030899",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 338418489,
            "range": "± 2633342",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176054548,
            "range": "± 1746124",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67803573,
            "range": "± 1032595",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 244700509,
            "range": "± 2760086",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 313735,
            "range": "± 3864",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5901,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356775,
            "range": "± 3274",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712992,
            "range": "± 9816",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 335978,
            "range": "± 2944",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1963,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 343512,
            "range": "± 2600",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6731000418,
            "range": "± 16622646",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1658432,
            "range": "± 24050",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2601140,
            "range": "± 27316",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16803,
            "range": "± 242",
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
          "id": "d5cbc0f7f6c1111ff8e9724b9506ec4c61ebe766",
          "message": "use the crosshair for zoom previews (#1073)",
          "timestamp": "2023-02-03T15:12:53+01:00",
          "tree_id": "5878ea78448fb8f2328df5f1a1a283c129854540",
          "url": "https://github.com/rerun-io/rerun/commit/d5cbc0f7f6c1111ff8e9724b9506ec4c61ebe766"
        },
        "date": 1675434051236,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 555131,
            "range": "± 6156",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1749,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 298,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 369,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150321,
            "range": "± 2345",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45614972,
            "range": "± 2038319",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122038960,
            "range": "± 2499833",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 143344416,
            "range": "± 2106689",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 312913825,
            "range": "± 2650323",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 169258996,
            "range": "± 1433901",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 60989952,
            "range": "± 960527",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236928721,
            "range": "± 2387106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318001,
            "range": "± 4906",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5981,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355072,
            "range": "± 3291",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 709342,
            "range": "± 8574",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 339795,
            "range": "± 2788",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1998,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349471,
            "range": "± 2425",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5936567439,
            "range": "± 17985614",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1673027,
            "range": "± 19320",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2558562,
            "range": "± 23648",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16865,
            "range": "± 264",
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
          "id": "eff9ddb42d7b69dc57e1b6520018b050c9df3c9e",
          "message": "raw meshes: support albedo factors, clean up examples and acknowledge lack of support for .obj (#1081)\n\n* support albedo factors with raw meshes\r\n\r\n* albedo factors in python raw mesh APIs\r\n\r\n* rust example for albedo factors\r\n\r\n* python example for albedo factors\r\n\r\n* we dont support obj anymore!!!\r\n\r\n* python's raw_mesh now directly uses python's deep_sdf dataset\r\n\r\n* lints\r\n\r\n* woop\r\n\r\n* typos",
          "timestamp": "2023-02-03T17:45:56+01:00",
          "tree_id": "1a4531e6e94d6f4fe2b0de18478d6a452a562395",
          "url": "https://github.com/rerun-io/rerun/commit/eff9ddb42d7b69dc57e1b6520018b050c9df3c9e"
        },
        "date": 1675443252412,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 576609,
            "range": "± 1594",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1777,
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
            "value": 381,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154257,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49739053,
            "range": "± 447511",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125676160,
            "range": "± 1074278",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 155746704,
            "range": "± 2375284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329015609,
            "range": "± 2605372",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177127454,
            "range": "± 877895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65622935,
            "range": "± 707783",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239332091,
            "range": "± 1696833",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323110,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6058,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365268,
            "range": "± 1443",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717216,
            "range": "± 3531",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 355190,
            "range": "± 2141",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2037,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354844,
            "range": "± 1470",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6075337622,
            "range": "± 72892765",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1716470,
            "range": "± 12759",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2680940,
            "range": "± 27361",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17400,
            "range": "± 48",
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
          "id": "ba4722a36b6690ec9429049a38c8abab2cd6f359",
          "message": "Allow root space views transforms to other roots (#1075)\n\n* Allow adding entities from arbitrary space paths\r\nFix bug in space info reachability check (which drives the entity picker)\r\n* improve group naming for now unrestricted object addings",
          "timestamp": "2023-02-04T00:55:15+01:00",
          "tree_id": "7c924587b13e5d6c84ba41a68e965557d3e1dbed",
          "url": "https://github.com/rerun-io/rerun/commit/ba4722a36b6690ec9429049a38c8abab2cd6f359"
        },
        "date": 1675469008853,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 579601,
            "range": "± 1297",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1767,
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
            "value": 384,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154856,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47825833,
            "range": "± 910471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127891441,
            "range": "± 1102510",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150974612,
            "range": "± 722342",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328575269,
            "range": "± 1540072",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176022699,
            "range": "± 850958",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64763640,
            "range": "± 904873",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239137245,
            "range": "± 1450921",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323019,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6181,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362266,
            "range": "± 1192",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713427,
            "range": "± 3460",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346922,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2028,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351874,
            "range": "± 1165",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6109667578,
            "range": "± 13215717",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1711192,
            "range": "± 15950",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2624266,
            "range": "± 13320",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17576,
            "range": "± 19",
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
          "id": "da282a2fc323936417db24e7bbc48263d7991aeb",
          "message": "expose egui debug options in debug menu (#1089)",
          "timestamp": "2023-02-04T10:16:42+01:00",
          "tree_id": "f01ac367cfefe1d7559fe5389c81b50b67fece5e",
          "url": "https://github.com/rerun-io/rerun/commit/da282a2fc323936417db24e7bbc48263d7991aeb"
        },
        "date": 1675502890058,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 575275,
            "range": "± 6024",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1780,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 375,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154802,
            "range": "± 1467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49064537,
            "range": "± 1273864",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134305455,
            "range": "± 1539759",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164044815,
            "range": "± 1036908",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351232668,
            "range": "± 2224724",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183151709,
            "range": "± 1196255",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70542538,
            "range": "± 977613",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 254906923,
            "range": "± 1982924",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 317563,
            "range": "± 3507",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6012,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351498,
            "range": "± 2351",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 687712,
            "range": "± 6288",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348014,
            "range": "± 1456",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2006,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351320,
            "range": "± 1303",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6731203546,
            "range": "± 22401041",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1699443,
            "range": "± 22705",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2642365,
            "range": "± 15247",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16968,
            "range": "± 100",
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