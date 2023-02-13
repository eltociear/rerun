window.BENCHMARK_DATA = {
  "lastUpdate": 1676323168344,
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
          "id": "8c84530cc6f8ce8d498961d552b935fcc38e0929",
          "message": "Don't use non-ISO transforms for updating bounds (#1194)\n\nResolves: #1203",
          "timestamp": "2023-02-11T18:21:18+01:00",
          "tree_id": "3e8f78b4b4989bc0d62aa71f563917a643c3d479",
          "url": "https://github.com/rerun-io/rerun/commit/8c84530cc6f8ce8d498961d552b935fcc38e0929"
        },
        "date": 1676136782601,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 550221,
            "range": "± 6131",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1718,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 338,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 419,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 143240,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43939668,
            "range": "± 1708185",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 130661174,
            "range": "± 1820064",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 158959305,
            "range": "± 2123339",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 340678218,
            "range": "± 3202794",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178058766,
            "range": "± 2422773",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67837004,
            "range": "± 1237253",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 244928943,
            "range": "± 3426906",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 271433,
            "range": "± 4225",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5982,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347837,
            "range": "± 3783",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 640504,
            "range": "± 6960",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343076,
            "range": "± 2521",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1956,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 348792,
            "range": "± 2838",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6801244266,
            "range": "± 31018891",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1655532,
            "range": "± 20239",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2652650,
            "range": "± 25651",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16361,
            "range": "± 266",
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
          "id": "ab7ea977a24d7e4b5ae53651045fda2388f23a06",
          "message": "Revert \"Disable picking in spatial scenes while dragging (i.e. controlling the camera) (#1198)\" (#1205)\n\nThis reverts commit 6900f9a22f04e6b9ed3de2af99ccd48202a7d739.",
          "timestamp": "2023-02-11T18:44:42+01:00",
          "tree_id": "37ea8630fe93cc6d8616167f69f2abb7859cbba7",
          "url": "https://github.com/rerun-io/rerun/commit/ab7ea977a24d7e4b5ae53651045fda2388f23a06"
        },
        "date": 1676138173266,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 545509,
            "range": "± 5773",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1786,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 345,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 412,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146212,
            "range": "± 2094",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45823861,
            "range": "± 1530330",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136233482,
            "range": "± 5754612",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164517976,
            "range": "± 2299110",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345478008,
            "range": "± 4039886",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179838287,
            "range": "± 2314335",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70660749,
            "range": "± 1224661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249439725,
            "range": "± 2724133",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 270680,
            "range": "± 3876",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6020,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351929,
            "range": "± 3842",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 639428,
            "range": "± 7308",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345743,
            "range": "± 3056",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1963,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349963,
            "range": "± 3053",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7088370101,
            "range": "± 21747567",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1641838,
            "range": "± 27166",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2632255,
            "range": "± 27643",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16340,
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
          "id": "31ad622788a06d14d557135253781d544b0a29ae",
          "message": "Show a warning in web viewer on Windows (#1207)\n\n* Show a warning in web viewer on Windows\r\n\r\nhttps://github.com/rerun-io/rerun/issues/1206\r\n\r\n* default size and non-resizable",
          "timestamp": "2023-02-11T19:08:55+01:00",
          "tree_id": "2d92d4d5d34fd269354f383ab8670ebf0869432a",
          "url": "https://github.com/rerun-io/rerun/commit/31ad622788a06d14d557135253781d544b0a29ae"
        },
        "date": 1676139587938,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 543284,
            "range": "± 3227",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1740,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 342,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 420,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145487,
            "range": "± 2133",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46148088,
            "range": "± 1375092",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133865273,
            "range": "± 1550615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164466894,
            "range": "± 1340463",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350519604,
            "range": "± 2435736",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181772175,
            "range": "± 1833603",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71027675,
            "range": "± 1176525",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250820520,
            "range": "± 2431863",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 271515,
            "range": "± 4614",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6207,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352614,
            "range": "± 1759",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 643178,
            "range": "± 7139",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349911,
            "range": "± 4318",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1975,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354730,
            "range": "± 2759",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6768148061,
            "range": "± 15104347",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1721775,
            "range": "± 21347",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2678138,
            "range": "± 22035",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16515,
            "range": "± 199",
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
          "id": "c1dae9d7a21f7020174bcd25dcd0ad4406cc26a7",
          "message": "Rust SDK: integrate wth the `image` crate (#1202)\n\n* rerun sdk: add helper for creating a Tensor from a jpeg file\r\n\r\n* Add Tensor::from_image\r\n\r\n* Add example to crates/rerun/README.md\r\n\r\n* Better error message",
          "timestamp": "2023-02-11T19:21:05+01:00",
          "tree_id": "4408f1249065584d81d37fc6652ee29fa6f85012",
          "url": "https://github.com/rerun-io/rerun/commit/c1dae9d7a21f7020174bcd25dcd0ad4406cc26a7"
        },
        "date": 1676140257767,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 554959,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1730,
            "range": "± 1",
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
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145855,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47822963,
            "range": "± 1224111",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135044552,
            "range": "± 1263572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162286153,
            "range": "± 965965",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 346880805,
            "range": "± 2029940",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183182736,
            "range": "± 1170958",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71821962,
            "range": "± 1180692",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249639828,
            "range": "± 1888660",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324492,
            "range": "± 1327",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6157,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365512,
            "range": "± 1892",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721590,
            "range": "± 1775",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348069,
            "range": "± 873",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1980,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352550,
            "range": "± 1252",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6705618374,
            "range": "± 17067871",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1669091,
            "range": "± 11881",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2660322,
            "range": "± 11225",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17225,
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
          "id": "b1ec85b9a8cc900d5723099e0bbe6d89702b3d04",
          "message": "do not rely on `CARGO_WORKSPACE_DIR` anymore (#1211)\n\n* CARGO_WORKSPACE_DIR is ignored when used as a dependency...\r\n\r\n* no it's not",
          "timestamp": "2023-02-11T20:51:03+01:00",
          "tree_id": "a9a7a1c7172b3f4cbff838d09b51dc918f28bcc2",
          "url": "https://github.com/rerun-io/rerun/commit/b1ec85b9a8cc900d5723099e0bbe6d89702b3d04"
        },
        "date": 1676145653737,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 544878,
            "range": "± 1974",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1758,
            "range": "± 43",
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
            "value": 423,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148579,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50111476,
            "range": "± 1010428",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136804276,
            "range": "± 1564607",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163303404,
            "range": "± 1879111",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350507475,
            "range": "± 2073364",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183179662,
            "range": "± 1245656",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74826479,
            "range": "± 1126463",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 254564974,
            "range": "± 2079618",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325994,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6129,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364759,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 709958,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347429,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1994,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354635,
            "range": "± 1836",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7016364722,
            "range": "± 23781012",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1693356,
            "range": "± 19213",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2602061,
            "range": "± 16262",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17192,
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
          "id": "d3d1e9ce2ef7b0a64aa3eb1bd5059eed6ac1ae25",
          "message": "deal with file!() shenanigans (#1212)",
          "timestamp": "2023-02-11T22:01:45+01:00",
          "tree_id": "1fb1a6ee36ddd1a34078e78776c4a112d481edfc",
          "url": "https://github.com/rerun-io/rerun/commit/d3d1e9ce2ef7b0a64aa3eb1bd5059eed6ac1ae25"
        },
        "date": 1676150056797,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 554709,
            "range": "± 1870",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1721,
            "range": "± 1",
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
            "value": 145367,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50843623,
            "range": "± 1234814",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136794894,
            "range": "± 1199968",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166665142,
            "range": "± 2000852",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354252248,
            "range": "± 2843565",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185850849,
            "range": "± 3006171",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76721065,
            "range": "± 1017779",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256248470,
            "range": "± 1838199",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325371,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6174,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 374528,
            "range": "± 2136",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 729245,
            "range": "± 3166",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346249,
            "range": "± 1975",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2049,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357782,
            "range": "± 2455",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7020476256,
            "range": "± 24453282",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1690193,
            "range": "± 24592",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2622601,
            "range": "± 36015",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17200,
            "range": "± 12",
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
          "id": "14a7918b090b0f4aff03edb3c7aafd074af8c39c",
          "message": "Update arrow2_convert (#1225)",
          "timestamp": "2023-02-12T15:19:37+01:00",
          "tree_id": "544ef6be506db242d9da88a04c0b5490d292468d",
          "url": "https://github.com/rerun-io/rerun/commit/14a7918b090b0f4aff03edb3c7aafd074af8c39c"
        },
        "date": 1676212167189,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 549806,
            "range": "± 6191",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1747,
            "range": "± 5",
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
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147864,
            "range": "± 823",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49667831,
            "range": "± 551825",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134995102,
            "range": "± 1366443",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162641507,
            "range": "± 1214132",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 347271332,
            "range": "± 2614168",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182252492,
            "range": "± 1792457",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70768650,
            "range": "± 1153582",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 248527166,
            "range": "± 2524384",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 328092,
            "range": "± 3997",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6242,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 367340,
            "range": "± 3006",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715734,
            "range": "± 5339",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345127,
            "range": "± 2261",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1969,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 345908,
            "range": "± 3024",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6769647320,
            "range": "± 16515933",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1642949,
            "range": "± 18221",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2536303,
            "range": "± 27571",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16378,
            "range": "± 210",
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
          "id": "7e8adaf17a8b7e228559e217ba877bc9ba2205c9",
          "message": "Rename `log_path` to `log_line_strip` (#1221)\n\n* Improve some python docs\r\n\r\n* Rename log_path to log_line_strip\r\n\r\n* fixes\r\n\r\n* better docstring\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-02-12T15:42:12+01:00",
          "tree_id": "708fcacf5e766b29b04435509b9a55c90e30ecf1",
          "url": "https://github.com/rerun-io/rerun/commit/7e8adaf17a8b7e228559e217ba877bc9ba2205c9"
        },
        "date": 1676213511044,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552742,
            "range": "± 13499",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1734,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 345,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 412,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 143327,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46151126,
            "range": "± 1404359",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134621931,
            "range": "± 1836064",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160724013,
            "range": "± 1229977",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345771903,
            "range": "± 2408825",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180481052,
            "range": "± 1733421",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71256384,
            "range": "± 1070460",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250877413,
            "range": "± 2511946",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322628,
            "range": "± 4109",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6026,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364638,
            "range": "± 3585",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717689,
            "range": "± 7548",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 340463,
            "range": "± 2482",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1958,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356514,
            "range": "± 7630",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6773844324,
            "range": "± 22344154",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1671055,
            "range": "± 10624",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2604552,
            "range": "± 17203",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16609,
            "range": "± 124",
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
          "id": "42803fccbeef1bf59bafccd31c28520e497c0bed",
          "message": "Icon for Windows (#1222)\n\n* Update eframe, fixes #1216",
          "timestamp": "2023-02-12T16:22:30+01:00",
          "tree_id": "6dd185e96cee1778108b80dee1af4241150be0ea",
          "url": "https://github.com/rerun-io/rerun/commit/42803fccbeef1bf59bafccd31c28520e497c0bed"
        },
        "date": 1676215906628,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 542080,
            "range": "± 4778",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1744,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 361,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145892,
            "range": "± 1500",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43813788,
            "range": "± 1216226",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124674795,
            "range": "± 1329392",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149986089,
            "range": "± 1331538",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322521278,
            "range": "± 2050196",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173377175,
            "range": "± 1454664",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62144005,
            "range": "± 894102",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 232724710,
            "range": "± 2056350",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 327705,
            "range": "± 3316",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6175,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363765,
            "range": "± 3009",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717712,
            "range": "± 8270",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345253,
            "range": "± 2017",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1973,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352035,
            "range": "± 1959",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6067780686,
            "range": "± 14410389",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1681382,
            "range": "± 18399",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2604149,
            "range": "± 23576",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16516,
            "range": "± 227",
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
          "id": "a5a6a01fcb92a2b49d62ce0ab3c5f616ca0069aa",
          "message": "Always log the primary component last so it is joined properly (#1217)\n\n* Always log splats before the primary component\r\n* Make comment clear that the important thing is primary last not splat first",
          "timestamp": "2023-02-12T17:02:44+01:00",
          "tree_id": "760f5d295a749ea2a00e16525bf39f4d3421ac78",
          "url": "https://github.com/rerun-io/rerun/commit/a5a6a01fcb92a2b49d62ce0ab3c5f616ca0069aa"
        },
        "date": 1676218421287,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565624,
            "range": "± 30986",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1767,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 361,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 432,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150902,
            "range": "± 5189",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42430752,
            "range": "± 2268873",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127902158,
            "range": "± 4798511",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153685811,
            "range": "± 6409150",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 334292154,
            "range": "± 11757065",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178400834,
            "range": "± 4789593",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63992211,
            "range": "± 3919661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240995666,
            "range": "± 8758457",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 338427,
            "range": "± 20414",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6361,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364705,
            "range": "± 12867",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 735389,
            "range": "± 31602",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345197,
            "range": "± 11278",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2047,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350955,
            "range": "± 17963",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6294760119,
            "range": "± 90811310",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1706945,
            "range": "± 62477",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2675754,
            "range": "± 101231",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16975,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 35,
            "range": "± 1",
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
          "id": "8c58a9566a62d9aaa61db4614329f017b677b1f7",
          "message": "Add user-component for error, don't colorize keypoints, and add a plot of average reprojection error (#1230)",
          "timestamp": "2023-02-12T18:37:43+01:00",
          "tree_id": "0197dae40b09e9a035bd7a889d275f45e26f50d2",
          "url": "https://github.com/rerun-io/rerun/commit/8c58a9566a62d9aaa61db4614329f017b677b1f7"
        },
        "date": 1676224109141,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 535972,
            "range": "± 7336",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1731,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 340,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 409,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 144479,
            "range": "± 2139",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43853249,
            "range": "± 1942384",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 131350238,
            "range": "± 1877116",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 157532619,
            "range": "± 1953642",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 341544658,
            "range": "± 3109687",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177104160,
            "range": "± 2097168",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68329350,
            "range": "± 1473383",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 245812892,
            "range": "± 2931850",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322229,
            "range": "± 4682",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6060,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360491,
            "range": "± 3408",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716253,
            "range": "± 10524",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346397,
            "range": "± 3258",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1933,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351926,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6736295126,
            "range": "± 17680001",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1610355,
            "range": "± 21639",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2539890,
            "range": "± 30649",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16210,
            "range": "± 212",
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
          "id": "b7565dfebf8a8b4c4ec1a8ffa7df58b0b95e600a",
          "message": "Link to examples, expand example README.md:s (#1214)\n\n* Rename docs.md to writing_docs.md\r\n\r\n* Add link to Python examples from the Python API docs\r\n\r\n* Link to examples\r\n\r\n* Explain Session object a bit better\r\n\r\n* Document api_demo a bit more fairly\r\n\r\n* fix naming\r\n\r\n* Document the rust examples\r\n\r\n* Tweak readmes\r\n\r\n* Better docstring\r\n\r\n* be less self-deprecating\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-02-12T20:10:25+01:00",
          "tree_id": "a4496d159213196802b088636d774b4e402e92dd",
          "url": "https://github.com/rerun-io/rerun/commit/b7565dfebf8a8b4c4ec1a8ffa7df58b0b95e600a"
        },
        "date": 1676229716183,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 554846,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1725,
            "range": "± 2",
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
            "value": 416,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 143566,
            "range": "± 2384",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42708835,
            "range": "± 1629445",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125639314,
            "range": "± 1604769",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152295529,
            "range": "± 3158651",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 319840533,
            "range": "± 2094189",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174002246,
            "range": "± 1162692",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63289376,
            "range": "± 794511",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 233129735,
            "range": "± 2789385",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326358,
            "range": "± 5514",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6265,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364125,
            "range": "± 2515",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 724987,
            "range": "± 3563",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348477,
            "range": "± 1309",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1960,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350888,
            "range": "± 2970",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6003704913,
            "range": "± 15460768",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1634613,
            "range": "± 28011",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2567740,
            "range": "± 25438",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16702,
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
          "id": "ebf692c6a3101230a02155023ef7252bd055b43b",
          "message": "Change the RRD builder to run the colmap example (#1231)\n\n* Change the RRD builder to run the colmap example\r\n\r\n* Add missing opencv dependency to colmap\r\n\r\n* Update .github/workflows/python.yml\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-02-12T21:33:06+01:00",
          "tree_id": "c838de85b77d4bf589b1e1971930e3b961ffc4ac",
          "url": "https://github.com/rerun-io/rerun/commit/ebf692c6a3101230a02155023ef7252bd055b43b"
        },
        "date": 1676234731929,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 554767,
            "range": "± 2481",
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
            "range": "± 3",
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
            "value": 146718,
            "range": "± 1599",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45472552,
            "range": "± 1181290",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135353367,
            "range": "± 1259028",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162071322,
            "range": "± 853549",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348078903,
            "range": "± 2294605",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 181928239,
            "range": "± 1011262",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70702138,
            "range": "± 1169539",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250445077,
            "range": "± 2106872",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331008,
            "range": "± 1329",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6187,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364561,
            "range": "± 2018",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 727497,
            "range": "± 5166",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348039,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2008,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355305,
            "range": "± 1330",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6849018254,
            "range": "± 20617034",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1642402,
            "range": "± 11796",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2612303,
            "range": "± 14813",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16588,
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
          "id": "e0d23bdaaa865cb4eee888975c4ffc200ad94811",
          "message": "Shorten 'average_reprojection_error' to keep the blueprint manageable (#1232)",
          "timestamp": "2023-02-13T05:12:24+01:00",
          "tree_id": "825a64fc376b95f0735974b2720228f34f401ce2",
          "url": "https://github.com/rerun-io/rerun/commit/e0d23bdaaa865cb4eee888975c4ffc200ad94811"
        },
        "date": 1676262123628,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 540348,
            "range": "± 10443",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1727,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 344,
            "range": "± 4",
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
            "value": 143032,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 43785554,
            "range": "± 1799702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 131686715,
            "range": "± 1674140",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156883851,
            "range": "± 1995674",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 339469299,
            "range": "± 3086819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178644330,
            "range": "± 1773299",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67036118,
            "range": "± 1346871",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243508530,
            "range": "± 2963316",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319440,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5991,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358698,
            "range": "± 3575",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701840,
            "range": "± 14228",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342781,
            "range": "± 3666",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1948,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349809,
            "range": "± 2817",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6641121373,
            "range": "± 17559295",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1612787,
            "range": "± 21598",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2517185,
            "range": "± 26985",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16042,
            "range": "± 261",
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
          "id": "762bb3af94d13738755b50d845025c9b3b88c485",
          "message": "Don't bury the analytics command (#1234)",
          "timestamp": "2023-02-13T09:17:18+01:00",
          "tree_id": "dd5f3aeeadaca0296972f8ea620f39b2869ea311",
          "url": "https://github.com/rerun-io/rerun/commit/762bb3af94d13738755b50d845025c9b3b88c485"
        },
        "date": 1676276831055,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 555062,
            "range": "± 1597",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1754,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 359,
            "range": "± 0",
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
            "value": 147210,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48672588,
            "range": "± 954835",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135946024,
            "range": "± 1241291",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160818994,
            "range": "± 1081103",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351782054,
            "range": "± 1828220",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182315807,
            "range": "± 967928",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73451297,
            "range": "± 1414961",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253527274,
            "range": "± 1871148",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332352,
            "range": "± 718",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6247,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364840,
            "range": "± 1537",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 722340,
            "range": "± 2359",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346031,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1969,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354417,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6870860481,
            "range": "± 13848605",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1657851,
            "range": "± 10578",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2579354,
            "range": "± 11694",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16655,
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
          "id": "c817ecc8fff76754b7382c2d914c07cba0049d14",
          "message": "Validate that tagged version matches Cargo.toml for release in CI (#1210)\n\n* Rename scripts/patch_prerelease_version.py -> version_util.py\r\n* Now also validate versions for tagged releases in CI",
          "timestamp": "2023-02-13T10:01:26+01:00",
          "tree_id": "1c258c0bd64c307d374c3a8573ce16ed6f2e4b17",
          "url": "https://github.com/rerun-io/rerun/commit/c817ecc8fff76754b7382c2d914c07cba0049d14"
        },
        "date": 1676279475913,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552867,
            "range": "± 2387",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1759,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 426,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146881,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50768240,
            "range": "± 631443",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138723356,
            "range": "± 1332357",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164491329,
            "range": "± 1136901",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353085778,
            "range": "± 1957637",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184540857,
            "range": "± 970523",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75119682,
            "range": "± 996039",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255611106,
            "range": "± 1840753",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332318,
            "range": "± 1433",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6283,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 369616,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 720273,
            "range": "± 2721",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348726,
            "range": "± 1388",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2015,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359574,
            "range": "± 2118",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7111879882,
            "range": "± 26746053",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1721021,
            "range": "± 9250",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2586328,
            "range": "± 11119",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16671,
            "range": "± 76",
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
          "id": "1a77a26be72203ce92caeb3da5b98c781995f621",
          "message": "Issue template for questions pointing to discord (#1236)",
          "timestamp": "2023-02-13T10:30:44+01:00",
          "tree_id": "78a4ed5baa576e86519db0f98968e19e4b0fbccd",
          "url": "https://github.com/rerun-io/rerun/commit/1a77a26be72203ce92caeb3da5b98c781995f621"
        },
        "date": 1676281311259,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 549794,
            "range": "± 1981",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1754,
            "range": "± 6",
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
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146554,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49563687,
            "range": "± 632194",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136815691,
            "range": "± 1206903",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163803416,
            "range": "± 1213742",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351784388,
            "range": "± 2053926",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186503067,
            "range": "± 846461",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73968789,
            "range": "± 1004748",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256228284,
            "range": "± 1769123",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332257,
            "range": "± 669",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6211,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365724,
            "range": "± 1757",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 728652,
            "range": "± 2974",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350943,
            "range": "± 1274",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1990,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353387,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7012487408,
            "range": "± 22871690",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1705639,
            "range": "± 13007",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2661999,
            "range": "± 25765",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16668,
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
          "id": "2ef9330031ab119cbedc698b3fe5f8e95c99dcc5",
          "message": "Release `0.2.0-alpha.0` (#1229)\n\n* fix release tag matching\r\n\r\n* Update release instructions\r\n\r\n* Bump version to 0.2.0-alpha.0\r\n\r\n* Turn on all features for all crates when building the docs\r\n\r\n* Add badges to all the crates\r\n\r\n* put internal crates as workspace items with version numbers\r\n\r\n* re_renderer/build.rs: only touch file on disk if it changed\r\n\r\n* Don't call cargofmt from re_renderer build.rs\r\n\r\n* Add sanity-check to re_renderer/build.rs\r\n\r\n* Make the sanity check sane\r\n\r\n* include shaders in re_renderer package\r\n\r\n* fix publishing of re_ui\r\n\r\n* Improve error message from re_web_server/build.rs\r\n\r\n* re_web_server/build.rs: handle building outside of rerun workspace\r\n\r\n* fix re_sdk_comms path\r\n\r\n* Just include shaders under re_renderer/shader\r\n\r\n* Only run our build.rs files when in our workspace\r\n\r\n* Fix publishing or re_web_server\r\n\r\n* Fix publishing re_renderer/build.rs\r\n\r\n* Remove wrong badge\r\n\r\n* Clean up RELEASES.md\r\n\r\n* nit\r\n\r\n* Clean up RELEASES.md\r\n\r\n* Revert \"re_web_server/build.rs: handle building outside of rerun workspace\"\r\n\r\nThis reverts commit c055908d6aca4be88dcc915736c02714d12e9fc0.\r\n\r\n* fix rerun badges\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>\r\n\r\n* Better comment\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-02-13T11:04:15+01:00",
          "tree_id": "4d71945c5934005bac19dbda59268bf76fa71421",
          "url": "https://github.com/rerun-io/rerun/commit/2ef9330031ab119cbedc698b3fe5f8e95c99dcc5"
        },
        "date": 1676283346677,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 542799,
            "range": "± 3520",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1760,
            "range": "± 2",
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
            "value": 420,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150004,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48683301,
            "range": "± 1799355",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136460703,
            "range": "± 1349970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162777447,
            "range": "± 1946387",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353191824,
            "range": "± 8114959",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183971863,
            "range": "± 1941936",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75297514,
            "range": "± 1308672",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 254192792,
            "range": "± 2547842",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 358279,
            "range": "± 1146",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6123,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363170,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 754025,
            "range": "± 3953",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348161,
            "range": "± 2739",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2012,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352319,
            "range": "± 1723",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6937726477,
            "range": "± 24369894",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1642271,
            "range": "± 351715",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2608549,
            "range": "± 30054",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17182,
            "range": "± 231",
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
          "id": "a9451c9c5a5050909f1e265b4efe217c3180bf13",
          "message": "Update Cargo.lock (#1241)",
          "timestamp": "2023-02-13T12:55:15+01:00",
          "tree_id": "e73c14f19d3a78090b3ff5b2c907faabe23af5c8",
          "url": "https://github.com/rerun-io/rerun/commit/a9451c9c5a5050909f1e265b4efe217c3180bf13"
        },
        "date": 1676289911960,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 543584,
            "range": "± 1583",
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
            "value": 149565,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50519202,
            "range": "± 834681",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136906805,
            "range": "± 1415241",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163432897,
            "range": "± 1019486",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351901459,
            "range": "± 2163964",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188128311,
            "range": "± 6945917",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75528276,
            "range": "± 1102303",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256995944,
            "range": "± 1971862",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 358195,
            "range": "± 858",
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
            "value": 363902,
            "range": "± 1743",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 750354,
            "range": "± 3084",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347207,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2018,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353460,
            "range": "± 836",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7554387351,
            "range": "± 323970129",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1684291,
            "range": "± 17182",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2619161,
            "range": "± 17155",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17701,
            "range": "± 156",
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
          "id": "96956baa8f29bae0b507c25106c290073bd4f6df",
          "message": "make re_analytics build in all environments (#1240)\n\n* fix something that slipped into cargo.lock in another pr...\r\n\r\n* make analytics work everywhere all the time\r\n\r\n* dealing with git hashes in all situations\r\n\r\n* self-review\r\n\r\n* use release tag when it makes sense",
          "timestamp": "2023-02-13T14:59:37+01:00",
          "tree_id": "2dc242a265b086d95c9f3f4a5e114742df3173f7",
          "url": "https://github.com/rerun-io/rerun/commit/96956baa8f29bae0b507c25106c290073bd4f6df"
        },
        "date": 1676297458704,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 531324,
            "range": "± 7734",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1729,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 344,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 404,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 141951,
            "range": "± 2143",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42773770,
            "range": "± 2068510",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132017995,
            "range": "± 2080648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153621210,
            "range": "± 2922905",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 336894409,
            "range": "± 4221545",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176327510,
            "range": "± 2497787",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70330588,
            "range": "± 2131467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 244903444,
            "range": "± 3361875",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 343846,
            "range": "± 6000",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5915,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359177,
            "range": "± 4552",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721492,
            "range": "± 8475",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 341218,
            "range": "± 3250",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1932,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 348825,
            "range": "± 3565",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6867099851,
            "range": "± 24985255",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1650370,
            "range": "± 28919",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2535867,
            "range": "± 38893",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16583,
            "range": "± 221",
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
          "id": "0fa51fd0a902f94284ad7bf9bfea67f0287c11a0",
          "message": "Use the semver package for `version_util.py` (#1244)\n\n* Use the semver package for `version_util.py`\r\n* Explicitly install requirements-build.txt in Python workflow",
          "timestamp": "2023-02-13T16:08:13+01:00",
          "tree_id": "85f40d3a50e194d0b5f0cdfdea13cb8a017ed940",
          "url": "https://github.com/rerun-io/rerun/commit/0fa51fd0a902f94284ad7bf9bfea67f0287c11a0"
        },
        "date": 1676301486175,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 546259,
            "range": "± 1591",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1781,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 350,
            "range": "± 34",
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
            "value": 150105,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49179552,
            "range": "± 1370963",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136973374,
            "range": "± 1365440",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160520421,
            "range": "± 1529550",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350398276,
            "range": "± 2878489",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 182857077,
            "range": "± 1332198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72776180,
            "range": "± 1127647",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252549650,
            "range": "± 2207543",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 357592,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6205,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 368588,
            "range": "± 1224",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 744339,
            "range": "± 2480",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350548,
            "range": "± 913",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1995,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354516,
            "range": "± 1317",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6934724579,
            "range": "± 24021020",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1665327,
            "range": "± 12491",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2661367,
            "range": "± 15925",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17383,
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
          "id": "341b265398c96f8b49ace4fcad1ee769a63c637e",
          "message": "Always include the rerun_sdk in the python search path (#1245)",
          "timestamp": "2023-02-13T16:26:35+01:00",
          "tree_id": "6e324898726e04528e3359b68bb4efee6fd6a66f",
          "url": "https://github.com/rerun-io/rerun/commit/341b265398c96f8b49ace4fcad1ee769a63c637e"
        },
        "date": 1676302585060,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 550749,
            "range": "± 1606",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1746,
            "range": "± 14",
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
            "value": 147911,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49875287,
            "range": "± 1318327",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135857626,
            "range": "± 1483408",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161278257,
            "range": "± 1498182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 351826379,
            "range": "± 2271263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184209697,
            "range": "± 1499976",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72838903,
            "range": "± 1219152",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253165184,
            "range": "± 2082975",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 357263,
            "range": "± 696",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6168,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 370200,
            "range": "± 1350",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 754282,
            "range": "± 2256",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347965,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2032,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354531,
            "range": "± 1349",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6931791552,
            "range": "± 20170875",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1685922,
            "range": "± 18003",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2691144,
            "range": "± 35449",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17291,
            "range": "± 62",
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
          "id": "c0ea0f8cb907d0c7237e503dac70e7403be82dbc",
          "message": "make re_renderer build in every environment (#1247)\n\n* re_renderer everywhere\r\n\r\n* missed one",
          "timestamp": "2023-02-13T17:05:04+01:00",
          "tree_id": "d2323624dffe023ebc1a19064b6898d3a95c1760",
          "url": "https://github.com/rerun-io/rerun/commit/c0ea0f8cb907d0c7237e503dac70e7403be82dbc"
        },
        "date": 1676304872255,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 541013,
            "range": "± 1833",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1767,
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
            "value": 420,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150461,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44834018,
            "range": "± 894053",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125365626,
            "range": "± 1183499",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150122774,
            "range": "± 896219",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 326605950,
            "range": "± 2079911",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 173410412,
            "range": "± 929038",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63366969,
            "range": "± 1001865",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 233291039,
            "range": "± 1663777",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 357574,
            "range": "± 655",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6194,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362090,
            "range": "± 907",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 743757,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 341653,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1993,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350856,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6111131914,
            "range": "± 34460583",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1742586,
            "range": "± 24096",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2712127,
            "range": "± 17101",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17427,
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
          "id": "34832f0b92490bf84e91d14ce7d8c9ba1bb5e3ea",
          "message": "Release `0.2.0-alpha.1` (#1248)",
          "timestamp": "2023-02-13T17:35:21+01:00",
          "tree_id": "aebd673687af25d55736486743be878726a7541c",
          "url": "https://github.com/rerun-io/rerun/commit/34832f0b92490bf84e91d14ce7d8c9ba1bb5e3ea"
        },
        "date": 1676306714846,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 555079,
            "range": "± 6216",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1722,
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
            "value": 420,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148671,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50383181,
            "range": "± 672684",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134843051,
            "range": "± 1453328",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163742191,
            "range": "± 1263227",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350355972,
            "range": "± 2754787",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183890343,
            "range": "± 1008662",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72458134,
            "range": "± 892523",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253187768,
            "range": "± 2868315",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326389,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6145,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 369047,
            "range": "± 2281",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 718459,
            "range": "± 3643",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347787,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2008,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353293,
            "range": "± 1377",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6731490238,
            "range": "± 27801792",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1728978,
            "range": "± 14362",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2610336,
            "range": "± 14291",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17576,
            "range": "± 42",
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
          "id": "af95011efcf72b3ecd55549beb1b936ab2f18bad",
          "message": "Only run a single doc-deploy job for python regardless of release or main (#1246)",
          "timestamp": "2023-02-13T18:00:58+01:00",
          "tree_id": "c6a01e337cf8c248b6e14fcf07d633b4da5bcdbc",
          "url": "https://github.com/rerun-io/rerun/commit/af95011efcf72b3ecd55549beb1b936ab2f18bad"
        },
        "date": 1676308248067,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 556826,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1749,
            "range": "± 29",
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145612,
            "range": "± 1284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46261657,
            "range": "± 1236720",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134651208,
            "range": "± 1240162",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160863783,
            "range": "± 881182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 347901217,
            "range": "± 1759881",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180852677,
            "range": "± 1135633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71282580,
            "range": "± 1334458",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 248662549,
            "range": "± 2047318",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325342,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6115,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 367764,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706523,
            "range": "± 1836",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348703,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1964,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354277,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6993495010,
            "range": "± 12195612",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1681054,
            "range": "± 13589",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2625883,
            "range": "± 8749",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17461,
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
      }
    ]
  }
}