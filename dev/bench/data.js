window.BENCHMARK_DATA = {
  "lastUpdate": 1672219690380,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "name": "rerun-io",
            "username": "rerun-io"
          },
          "committer": {
            "name": "rerun-io",
            "username": "rerun-io"
          },
          "id": "3c26563219af9fb1bac29ca4073c3f654dd3f539",
          "message": "Benchmark encode decode",
          "timestamp": "2022-12-12T12:44:52Z",
          "url": "https://github.com/rerun-io/rerun/pull/598/commits/3c26563219af9fb1bac29ca4073c3f654dd3f539"
        },
        "date": 1671472860837,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 187213,
            "range": "± 1662",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 724,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 304,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 390,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1034686548,
            "range": "± 11753978",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 362006,
            "range": "± 2153",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94046330,
            "range": "± 655489",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11385,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22749051,
            "range": "± 305059",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7656,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4302887,
            "range": "± 46898",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10754211,
            "range": "± 520486",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14487111,
            "range": "± 309096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35816789,
            "range": "± 810799",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 25564345,
            "range": "± 1651144",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 100821815,
            "range": "± 1270530",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 125675603,
            "range": "± 902992",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 255887604,
            "range": "± 2390607",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 144278962,
            "range": "± 1426136",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59478261,
            "range": "± 1611901",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 200928837,
            "range": "± 2116113",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3331,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 400301,
            "range": "± 3052",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 406337,
            "range": "± 3278",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 739637,
            "range": "± 5378",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 222863,
            "range": "± 1744",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4553,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 261070,
            "range": "± 1704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 515066,
            "range": "± 3852",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 202703,
            "range": "± 1742",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1557,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 208652,
            "range": "± 1392",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 22039072,
            "range": "± 1304745",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 748650,
            "range": "± 5916",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 110621,
            "range": "± 913",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 11607,
            "range": "± 106",
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
          "id": "1e054f481d26e82acc5279a5bc7509241f7641ba",
          "message": "Switch CI to only run benchmarks on merge to main (#599)",
          "timestamp": "2022-12-19T18:56:51+01:00",
          "tree_id": "674bfecd6b10fc1c68a6abde775fc99106879fef",
          "url": "https://github.com/rerun-io/rerun/commit/1e054f481d26e82acc5279a5bc7509241f7641ba"
        },
        "date": 1671472979052,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 184157,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 690,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 265,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 339,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 972518725,
            "range": "± 5628671",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 341708,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95835351,
            "range": "± 557555",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11312,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23558360,
            "range": "± 306299",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7887,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 24840431,
            "range": "± 2097008",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 741060,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 106650,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 11570,
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
          "id": "2a158fe909f7dcfea7800eae73fa4b6d275c6029",
          "message": "re_datastore: native primary & secondary indices (#600)\n\n* arrow-less primary & secondary indices\r\n\r\n* first-class non-zeroable row indices\r\n\r\n* disable time range tracking for GC until we support GC\r\n\r\n* cranky\r\n\r\n* Revert \"disable time range tracking for GC until we support GC\"\r\n\r\nThis reverts commit 1a647ab01b3d1f2d049d9cda0ab60cf15be442d8.\r\n\r\n* addressed PR comments\r\n\r\n* this one becomes useless too",
          "timestamp": "2022-12-19T19:44:55+01:00",
          "tree_id": "b4557d1193d954db2448ba677cd6474854734002",
          "url": "https://github.com/rerun-io/rerun/commit/2a158fe909f7dcfea7800eae73fa4b6d275c6029"
        },
        "date": 1671475939474,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 181319,
            "range": "± 973",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 676,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 268,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 327,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1051365891,
            "range": "± 12924667",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 354431,
            "range": "± 8710",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 99636448,
            "range": "± 966716",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11325,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23832315,
            "range": "± 285728",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7868,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 25796488,
            "range": "± 3080607",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 738621,
            "range": "± 4625",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 103729,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 11512,
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
          "id": "97f81404eb02ea76c3fcaca80ec2c957d9891c13",
          "message": "Use the same 1000/1000 bench configuration as for our old benchmarks (#602)",
          "timestamp": "2022-12-19T21:02:02+01:00",
          "tree_id": "2673fe169aa77cbb25ed91b6e9c376cc8bcd8a52",
          "url": "https://github.com/rerun-io/rerun/commit/97f81404eb02ea76c3fcaca80ec2c957d9891c13"
        },
        "date": 1671480522339,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 182464,
            "range": "± 2111",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 677,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 269,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 328,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 959331741,
            "range": "± 8196268",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 351177,
            "range": "± 2509",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97231072,
            "range": "± 451264",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11309,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23232666,
            "range": "± 320752",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7840,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3573984161,
            "range": "± 6418099",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7821805,
            "range": "± 89889",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1326666,
            "range": "± 4515",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 45269,
            "range": "± 99",
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
          "id": "6ad17047de0c4d69a416a5bb0305176d46a8a75e",
          "message": "Break out field_types into sub modules. (#601)\n\n* Break out field_types into sub modules.",
          "timestamp": "2022-12-19T21:46:36+01:00",
          "tree_id": "10b8898daeb5426bdf87d3714b5a380d11556390",
          "url": "https://github.com/rerun-io/rerun/commit/6ad17047de0c4d69a416a5bb0305176d46a8a75e"
        },
        "date": 1671483185932,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 182575,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 687,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 270,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 328,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 893348635,
            "range": "± 8319722",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 345495,
            "range": "± 6584",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89015338,
            "range": "± 241846",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11291,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22964398,
            "range": "± 259154",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7870,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3311272214,
            "range": "± 16430747",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7655343,
            "range": "± 72637",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1401220,
            "range": "± 17205",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 46193,
            "range": "± 100",
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
          "id": "1cf15adc80d59cebf1346053198942507cedb58d",
          "message": "Benchmark encode decode (#598)\n\n* Fix obj_path macro\r\n\r\n* Add message encode/decode benchmark for the classic LogMsg\r\n\r\n* Add benchmark of arrow\r\n\r\n* More apples-to-apples\r\n\r\n* Reorder benchmarks\r\n\r\n* Remove confused comments\r\n\r\n* Add re_log_types benchmark to CI\r\n\r\n* Build benches with --all-features\r\n\r\nCo-authored-by: John Hughes <john@rerun.io>",
          "timestamp": "2022-12-20T09:20:10+01:00",
          "tree_id": "e782d1da515d4734d7ef9a782d761ae5f5cc7dca",
          "url": "https://github.com/rerun-io/rerun/commit/1cf15adc80d59cebf1346053198942507cedb58d"
        },
        "date": 1671525129239,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 188944,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 728,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 310,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 380,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 883907869,
            "range": "± 5445091",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357812,
            "range": "± 4819",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 87935143,
            "range": "± 415140",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11540,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23085841,
            "range": "± 105884",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6302,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4403014,
            "range": "± 84037",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11640197,
            "range": "± 609723",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15775794,
            "range": "± 480023",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36234269,
            "range": "± 524086",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 27897918,
            "range": "± 974598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 94027446,
            "range": "± 980407",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 119309161,
            "range": "± 1781273",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 239681719,
            "range": "± 1320699",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 136692595,
            "range": "± 3310928",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53486605,
            "range": "± 581315",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 186048099,
            "range": "± 3812250",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3479,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 394983,
            "range": "± 796",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 400516,
            "range": "± 1069",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 716488,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 236757,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4544,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 264957,
            "range": "± 1009",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 537776,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207160,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1553,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 212300,
            "range": "± 1081",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3303863475,
            "range": "± 9489520",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7796029,
            "range": "± 69687",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1391927,
            "range": "± 10978",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 45053,
            "range": "± 153",
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
          "id": "35bd226b10fda98e358f4f4d212e3bc00e4b6da9",
          "message": "Replace some DEBUG logging with TRACE (#605)\n\n* Add guidelines for what log levels to use when\r\n\r\n* Replace some DEBUG logging with TRACE",
          "timestamp": "2022-12-20T09:44:05+01:00",
          "tree_id": "d9813a8b7d706982b4c466ba06f920b03a9bd720",
          "url": "https://github.com/rerun-io/rerun/commit/35bd226b10fda98e358f4f4d212e3bc00e4b6da9"
        },
        "date": 1671526634679,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 186773,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 713,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 381,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 880662470,
            "range": "± 4926110",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 345673,
            "range": "± 1744",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 85549885,
            "range": "± 272607",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11465,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22660952,
            "range": "± 190511",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6292,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4403006,
            "range": "± 60462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11327360,
            "range": "± 487369",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15056822,
            "range": "± 416392",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35552869,
            "range": "± 735558",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26462208,
            "range": "± 1214662",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 91962892,
            "range": "± 840666",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 117472478,
            "range": "± 629083",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 238064159,
            "range": "± 1243407",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 136461685,
            "range": "± 1016806",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 51196344,
            "range": "± 896627",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 185050924,
            "range": "± 1436913",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3440,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393284,
            "range": "± 993",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 400385,
            "range": "± 1119",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 715019,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 236036,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4545,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 263891,
            "range": "± 1180",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 524932,
            "range": "± 1619",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 203823,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1536,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 211039,
            "range": "± 776",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3319398997,
            "range": "± 10589400",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7899003,
            "range": "± 43262",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1382502,
            "range": "± 12613",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 45156,
            "range": "± 92",
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
          "id": "9958bc734f8681d98427a838d8a17b473424058e",
          "message": "3D (rigid) transforms in space views (#585)",
          "timestamp": "2022-12-20T10:21:37+01:00",
          "tree_id": "a931a1d9eecb18b8659dd6b19dc8ebada7f2713d",
          "url": "https://github.com/rerun-io/rerun/commit/9958bc734f8681d98427a838d8a17b473424058e"
        },
        "date": 1671528779212,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 186468,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 718,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 313,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 380,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1009311184,
            "range": "± 14228197",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 369945,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94472175,
            "range": "± 406754",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11537,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22681119,
            "range": "± 281085",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6300,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4358875,
            "range": "± 34731",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10751076,
            "range": "± 703489",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15323209,
            "range": "± 345502",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35446763,
            "range": "± 606352",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26681581,
            "range": "± 1007239",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 101029245,
            "range": "± 1208205",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 126613281,
            "range": "± 1187761",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 255355330,
            "range": "± 1913862",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 141585782,
            "range": "± 1016891",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58013438,
            "range": "± 1826218",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 198018497,
            "range": "± 1813052",
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
            "value": 392652,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 399554,
            "range": "± 973",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 715905,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 235596,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4487,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 259862,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 527985,
            "range": "± 1377",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 204416,
            "range": "± 1076",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1570,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 210922,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3854937261,
            "range": "± 6300326",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7942235,
            "range": "± 35855",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1372072,
            "range": "± 5024",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 45275,
            "range": "± 108",
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
          "id": "18a1926656827a5fe83b4e40a707055372ac4d97",
          "message": "fix typo in toml causing a warning on builds (#607)",
          "timestamp": "2022-12-20T11:40:30+01:00",
          "tree_id": "406296be23b66007a1ee7137ac73a7d700c7aab3",
          "url": "https://github.com/rerun-io/rerun/commit/18a1926656827a5fe83b4e40a707055372ac4d97"
        },
        "date": 1671533509595,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 186132,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 706,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 301,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 375,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 979780982,
            "range": "± 6833872",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 356455,
            "range": "± 3011",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 93617089,
            "range": "± 1104520",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11172,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22056008,
            "range": "± 660625",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6404,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4329805,
            "range": "± 159172",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10289154,
            "range": "± 428814",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14390321,
            "range": "± 418087",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 33553483,
            "range": "± 1214639",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 24962619,
            "range": "± 1401190",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 97069024,
            "range": "± 2412292",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 123613058,
            "range": "± 3120385",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 252194890,
            "range": "± 3574832",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 139148585,
            "range": "± 2505837",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 54448553,
            "range": "± 2101209",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 191867884,
            "range": "± 3482397",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3313,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 380238,
            "range": "± 5324",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 386846,
            "range": "± 5057",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 704941,
            "range": "± 9192",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 233363,
            "range": "± 3210",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4414,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 260755,
            "range": "± 3012",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 514945,
            "range": "± 6399",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 202139,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1545,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 205391,
            "range": "± 2612",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4249532822,
            "range": "± 22426755",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7688656,
            "range": "± 152974",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1375958,
            "range": "± 18668",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 43596,
            "range": "± 729",
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
          "id": "afe18710a57001283d274a925891172084b2d1b1",
          "message": "Better auto-viewport (#604)\n\n* Add previews to tooltips when hovering links\r\n\r\n* If a Space View only has one object, name the space view after it\r\n\r\n* Only stack images if they are the same size\r\n\r\n* Nicer Debug view of ObjPath\r\n\r\n* Primarily group space-views by path\r\n\r\n* When creating space views for stacked images, remove them from siblings\r\n\r\ninstead of just making them invisible\r\n\r\n* Rename `has_been_user_edited`",
          "timestamp": "2022-12-20T15:27:32+01:00",
          "tree_id": "9f99b65416366a45e24782be6ef1febd6b56eb0e",
          "url": "https://github.com/rerun-io/rerun/commit/afe18710a57001283d274a925891172084b2d1b1"
        },
        "date": 1671547129806,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 189714,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 725,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 313,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 381,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 845842831,
            "range": "± 3605457",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 356621,
            "range": "± 2223",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 86281656,
            "range": "± 282775",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11522,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23240022,
            "range": "± 38452",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6300,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4888491,
            "range": "± 237897",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13168259,
            "range": "± 110201",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 19076976,
            "range": "± 689756",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38709938,
            "range": "± 206905",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 30664204,
            "range": "± 371834",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 93931840,
            "range": "± 805105",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 121683656,
            "range": "± 967742",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 245711055,
            "range": "± 1177956",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 138395051,
            "range": "± 615274",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 54169805,
            "range": "± 483937",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 189465366,
            "range": "± 1072724",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3445,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 394403,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 400965,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 719798,
            "range": "± 12667",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 236538,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4501,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 266222,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 530164,
            "range": "± 3128",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207825,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1600,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 210545,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3325879215,
            "range": "± 9284632",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7997252,
            "range": "± 139073",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1407413,
            "range": "± 9799",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 45146,
            "range": "± 75",
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
          "id": "b2ecd4e3b93171a79ad9ce2268601ced540b692c",
          "message": "Fix zoom/pan navigation of the time panel (#606)",
          "timestamp": "2022-12-20T16:00:24+01:00",
          "tree_id": "349eacb4cf94e4a01b5ec2d2a5f4e6da2699bacd",
          "url": "https://github.com/rerun-io/rerun/commit/b2ecd4e3b93171a79ad9ce2268601ced540b692c"
        },
        "date": 1671549141629,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 180802,
            "range": "± 3402",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 680,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 295,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 360,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 978219898,
            "range": "± 3009861",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357747,
            "range": "± 3521",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89092068,
            "range": "± 1015393",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10903,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 21168726,
            "range": "± 501473",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 5971,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4183667,
            "range": "± 56439",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 9778732,
            "range": "± 203294",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14076357,
            "range": "± 205742",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 32531219,
            "range": "± 558602",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22969336,
            "range": "± 1572476",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 97706254,
            "range": "± 1432886",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 118862970,
            "range": "± 2137782",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 244362479,
            "range": "± 3330161",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 134765897,
            "range": "± 2219529",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 51486488,
            "range": "± 1566812",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 186636251,
            "range": "± 3531803",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3303,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 376204,
            "range": "± 5342",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 381996,
            "range": "± 6102",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 689680,
            "range": "± 11309",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 224581,
            "range": "± 2834",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4346,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 252341,
            "range": "± 2759",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 513121,
            "range": "± 7557",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 198960,
            "range": "± 2783",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1491,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 206479,
            "range": "± 2404",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3682342050,
            "range": "± 27779894",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7509081,
            "range": "± 76637",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1317856,
            "range": "± 15580",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 42564,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 35,
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
          "id": "95e2d2dcd498716de049cc3c77e84c50c0e4983a",
          "message": "Implement tensors with dtype u8 u16 u32 u64 i8 i16 i32 i64 f16 f32 f64 (#608)\n\n* Implement tensors with dtype u8 u16 u32 u64 i8 i16 i32 i64 f16 f32 f64\r\n\r\n* fix\r\n\r\n* py-format\r\n\r\n* Put links inside of < >\r\n\r\n* Use proper names for the tensor data types in the UI",
          "timestamp": "2022-12-21T09:30:32+01:00",
          "tree_id": "49a9b60baafe52c501a42a0a01f6da90c3d39c63",
          "url": "https://github.com/rerun-io/rerun/commit/95e2d2dcd498716de049cc3c77e84c50c0e4983a"
        },
        "date": 1671612315809,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 189100,
            "range": "± 2740",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 721,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 380,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 877080299,
            "range": "± 4255829",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 366266,
            "range": "± 4764",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 86874769,
            "range": "± 348375",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11461,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23180845,
            "range": "± 112832",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7694,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 5051841,
            "range": "± 310698",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12887565,
            "range": "± 294442",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 19680796,
            "range": "± 933413",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37781728,
            "range": "± 421230",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 30023043,
            "range": "± 410380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 93642753,
            "range": "± 947581",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 121274208,
            "range": "± 1011424",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 241797677,
            "range": "± 1505722",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 137781946,
            "range": "± 1679041",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 53459605,
            "range": "± 589996",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 188202684,
            "range": "± 1121839",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3394,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 387896,
            "range": "± 1232",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 393240,
            "range": "± 1368",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 758305,
            "range": "± 2647",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 262398,
            "range": "± 11030",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4562,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 265195,
            "range": "± 946",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 539117,
            "range": "± 2187",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207359,
            "range": "± 7197",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1594,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 213927,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3304029766,
            "range": "± 11050855",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7981740,
            "range": "± 206831",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1413310,
            "range": "± 10093",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 46445,
            "range": "± 973",
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
          "id": "89bebf2218259939b034de0c26e394b7412b29c3",
          "message": "`cargo r --release --example memory_usage` to print LogMsg memory use (#611)\n\n* `cargo r --release --example memory_usage` to print LogMsg memory use\r\n\r\n* Add batches too\r\n\r\n* Use random pos2 for symmetry\r\n\r\n* Also print decoded size",
          "timestamp": "2022-12-21T10:10:07+01:00",
          "tree_id": "55695d8f5cf542c53811f4fc5de715a8b3b902bc",
          "url": "https://github.com/rerun-io/rerun/commit/89bebf2218259939b034de0c26e394b7412b29c3"
        },
        "date": 1671614520171,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 187950,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 723,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 311,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 384,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 938696794,
            "range": "± 7172288",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 378143,
            "range": "± 2680",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94290297,
            "range": "± 495332",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11471,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23719376,
            "range": "± 143028",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7679,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4432720,
            "range": "± 187509",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13470701,
            "range": "± 915594",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 19409106,
            "range": "± 1416194",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38549778,
            "range": "± 478536",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 32727121,
            "range": "± 450838",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 103039124,
            "range": "± 1123936",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 140016202,
            "range": "± 3974872",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 268496291,
            "range": "± 2482226",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 148919364,
            "range": "± 1323366",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61211459,
            "range": "± 794186",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 205686286,
            "range": "± 2030675",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3438,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 389453,
            "range": "± 1943",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 404298,
            "range": "± 2238",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 762636,
            "range": "± 4154",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 243226,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4626,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 266475,
            "range": "± 1869",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 549692,
            "range": "± 4462",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 212248,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1604,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 210231,
            "range": "± 1725",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3856374061,
            "range": "± 71195398",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 8003307,
            "range": "± 166476",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1406428,
            "range": "± 22933",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 46244,
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
          "id": "d520c9a04d4660b971ce08cb4bd522912e9e80b0",
          "message": "Reorganize the python sdk into seperate modules (#617)\n\n* Reorganize the python SDK into separate modules",
          "timestamp": "2022-12-21T12:31:34+01:00",
          "tree_id": "ab91b740ff9fa6f3476191576997807c25196cf2",
          "url": "https://github.com/rerun-io/rerun/commit/d520c9a04d4660b971ce08cb4bd522912e9e80b0"
        },
        "date": 1671623186887,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 189059,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 724,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 311,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 382,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 958238246,
            "range": "± 5508978",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 363775,
            "range": "± 2315",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95414522,
            "range": "± 502320",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11450,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23408061,
            "range": "± 290204",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7677,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4424210,
            "range": "± 90462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12067814,
            "range": "± 795617",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16683196,
            "range": "± 718559",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37176583,
            "range": "± 796378",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 28710221,
            "range": "± 1539564",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 101588289,
            "range": "± 1104273",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 128313315,
            "range": "± 760386",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 260407436,
            "range": "± 1628533",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 143392464,
            "range": "± 862988",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58597538,
            "range": "± 1078222",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 201128517,
            "range": "± 1305106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3474,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 378319,
            "range": "± 2812",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 384903,
            "range": "± 644",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 754651,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 241249,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4570,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 264377,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 536103,
            "range": "± 1595",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 201398,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1607,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 211495,
            "range": "± 758",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3732116749,
            "range": "± 9718300",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 7813227,
            "range": "± 47168",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1380131,
            "range": "± 3313",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 46287,
            "range": "± 98",
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
          "id": "c294de5e42d9d635f57738321865c29fcd39464b",
          "message": "Simplify tensor logging from python (#613)\n\n* Implement tensors with dtype u8 u16 u32 u64 i8 i16 i32 i64 f16 f32 f64\r\n* Use proper names for the tensor data types in the UI\r\n* Simplify tensor logging from python\r\n* Rename the error UnsupportedDataType\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2022-12-21T15:48:24+01:00",
          "tree_id": "355c3499a31526fd741e828fd62cf9058158b95d",
          "url": "https://github.com/rerun-io/rerun/commit/c294de5e42d9d635f57738321865c29fcd39464b"
        },
        "date": 1671634772255,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 190592,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 720,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 310,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 380,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1005713984,
            "range": "± 3880785",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 369931,
            "range": "± 2614",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95480335,
            "range": "± 419087",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11474,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23803764,
            "range": "± 140376",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7725,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4457907,
            "range": "± 286990",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12733188,
            "range": "± 906931",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17050803,
            "range": "± 1303554",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38708017,
            "range": "± 747085",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 30239564,
            "range": "± 1190722",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 103838252,
            "range": "± 2296507",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 132116937,
            "range": "± 2579880",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 263822690,
            "range": "± 2161572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 144961865,
            "range": "± 856644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63400902,
            "range": "± 758616",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 203274088,
            "range": "± 1592069",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3451,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 377479,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 384867,
            "range": "± 1075",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 751358,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 241686,
            "range": "± 1525",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4742,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 266401,
            "range": "± 1566",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 539751,
            "range": "± 5046",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207460,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1626,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 214232,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3883044031,
            "range": "± 10099241",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 8059846,
            "range": "± 127320",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1402609,
            "range": "± 4686",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 46294,
            "range": "± 57",
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
          "id": "d4f8219747c70367050a79057575e437a5fa4f3e",
          "message": "Use nice, big buttons for the time panel play, pause, loop, and arrows (#620)\n\n* Use nice, big buttons for the time panel play, pause, loop, and arrows\r\n\r\n* Fix icon resolution\r\n\r\n* Normalize tooltips\r\n\r\n* Combine loop selection area with the timeline area",
          "timestamp": "2022-12-21T16:50:37+01:00",
          "tree_id": "998d60d70ed5b03e5ac0b0892287875eff2c18c8",
          "url": "https://github.com/rerun-io/rerun/commit/d4f8219747c70367050a79057575e437a5fa4f3e"
        },
        "date": 1671638601003,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 187770,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 722,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 382,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1014777370,
            "range": "± 4360020",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 373237,
            "range": "± 2904",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97985596,
            "range": "± 368103",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11413,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23561282,
            "range": "± 194646",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6299,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4353696,
            "range": "± 149287",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12704149,
            "range": "± 815840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16986346,
            "range": "± 1373015",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38782985,
            "range": "± 735631",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 31546547,
            "range": "± 1180975",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 103767531,
            "range": "± 1063709",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 129673068,
            "range": "± 1672727",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 262162022,
            "range": "± 1916967",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 146409526,
            "range": "± 931236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63232063,
            "range": "± 824451",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 204598741,
            "range": "± 1366086",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3615,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 410635,
            "range": "± 836",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 416068,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 733412,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 241603,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4594,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 266820,
            "range": "± 1555",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 537690,
            "range": "± 2345",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207529,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1601,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 214191,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3924420840,
            "range": "± 17246027",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1495074,
            "range": "± 31388",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1434146,
            "range": "± 32614",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16776,
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
          "id": "e45633170ccc5075931d647f683f03c7d0bdcb41",
          "message": "Make InstanceIds work wirth ArrowObjects (#614)\n\n* Separate the dataframe-generation code from the querying\r\n* Make InstanceIds work with ArrowObjects",
          "timestamp": "2022-12-21T17:24:22+01:00",
          "tree_id": "cb332259c1ba85dd733b48c2b89ddf91c9bbb466",
          "url": "https://github.com/rerun-io/rerun/commit/e45633170ccc5075931d647f683f03c7d0bdcb41"
        },
        "date": 1671640674813,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 187230,
            "range": "± 932",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 722,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 308,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 383,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 951251785,
            "range": "± 5942667",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 363676,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94406654,
            "range": "± 805668",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11386,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23376074,
            "range": "± 171496",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7835,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4476401,
            "range": "± 50422",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10793678,
            "range": "± 357133",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15499513,
            "range": "± 671109",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36881956,
            "range": "± 531116",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 28108563,
            "range": "± 1160793",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 102112966,
            "range": "± 1118916",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 129163275,
            "range": "± 658446",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 264578540,
            "range": "± 1873439",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 144159545,
            "range": "± 696107",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58758698,
            "range": "± 802724",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 202280892,
            "range": "± 1765201",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3423,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 379433,
            "range": "± 1788",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 385417,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 740255,
            "range": "± 2663",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 245175,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4513,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 265610,
            "range": "± 928",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 538119,
            "range": "± 1939",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207350,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1541,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 211798,
            "range": "± 979",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3794437097,
            "range": "± 17854195",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1450063,
            "range": "± 12001",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1441921,
            "range": "± 7446",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16759,
            "range": "± 64",
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
          "id": "714cabfe7b8c918db100dfa4043623fc1ac1dc52",
          "message": "Allow objects under pinhole transform to be placed into 3D spaces. (#621)\n\n* handling of pinhole child transforms under 3d transforms\r\n* camera frustum is now as long as image plane is away\r\n* determine & show reasons for unreachability in the transform hierarchy",
          "timestamp": "2022-12-21T18:43:52+01:00",
          "tree_id": "26f72c8f96aa7989d05489db79ef91f7ac665888",
          "url": "https://github.com/rerun-io/rerun/commit/714cabfe7b8c918db100dfa4043623fc1ac1dc52"
        },
        "date": 1671645429841,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 189719,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 760,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 323,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 382,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 962460407,
            "range": "± 24620645",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 352530,
            "range": "± 7029",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95312111,
            "range": "± 835302",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11367,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23731790,
            "range": "± 147729",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7792,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4444649,
            "range": "± 144302",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12106606,
            "range": "± 564069",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16725864,
            "range": "± 688194",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 40183836,
            "range": "± 323558",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 31126796,
            "range": "± 902268",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 103864271,
            "range": "± 1122158",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 128484516,
            "range": "± 1315989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 264049838,
            "range": "± 3393465",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 144249287,
            "range": "± 975204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63395153,
            "range": "± 949882",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 203299655,
            "range": "± 2226544",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3538,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 388824,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 395008,
            "range": "± 1320",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 746809,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 238006,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4597,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 261606,
            "range": "± 1006",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 548366,
            "range": "± 2268",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 206569,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1600,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 213554,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3927652953,
            "range": "± 117069299",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1438528,
            "range": "± 11374",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1423758,
            "range": "± 11354",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16294,
            "range": "± 16",
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
          "id": "546b23f9c64917360f9247f039ef90f00320da3b",
          "message": "Refactor SceneSpatial'a load* functions into trait impl types in prep (#626)",
          "timestamp": "2022-12-22T10:40:09+01:00",
          "tree_id": "e24983a453545474cebeeedeb53c52a64cf221f0",
          "url": "https://github.com/rerun-io/rerun/commit/546b23f9c64917360f9247f039ef90f00320da3b"
        },
        "date": 1671702668535,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 190119,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 720,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 307,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 381,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 846016109,
            "range": "± 2146344",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 362127,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 85714864,
            "range": "± 352378",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11529,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22215956,
            "range": "± 218616",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7831,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4332613,
            "range": "± 82892",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10278550,
            "range": "± 341269",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14500085,
            "range": "± 215754",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35180880,
            "range": "± 522496",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 25051911,
            "range": "± 830948",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 92355523,
            "range": "± 842699",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 117641592,
            "range": "± 740230",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 237011337,
            "range": "± 1420495",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 135236737,
            "range": "± 643194",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 50097080,
            "range": "± 715935",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 183989353,
            "range": "± 6087137",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3557,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 387892,
            "range": "± 1114",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 396301,
            "range": "± 1024",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 743569,
            "range": "± 1992",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 237246,
            "range": "± 2063",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4722,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 267158,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 538417,
            "range": "± 1765",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 205901,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1591,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 212496,
            "range": "± 1884",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3305211092,
            "range": "± 11005250",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1450648,
            "range": "± 12106",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1454329,
            "range": "± 14040",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16401,
            "range": "± 44",
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
          "id": "9a4356c513c2267b783f4aee98eb8608f8475f52",
          "message": "fixed missing feature flags (#627)",
          "timestamp": "2022-12-22T11:07:20+01:00",
          "tree_id": "9436c432bf2766b2529c16fde4297e6ee1e807e1",
          "url": "https://github.com/rerun-io/rerun/commit/9a4356c513c2267b783f4aee98eb8608f8475f52"
        },
        "date": 1671704331178,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 186582,
            "range": "± 3067",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 743,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 300,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 371,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1009004973,
            "range": "± 8881079",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 345888,
            "range": "± 5170",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 92089164,
            "range": "± 981719",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10862,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 21644997,
            "range": "± 394465",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7593,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4281989,
            "range": "± 48708",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 9708914,
            "range": "± 251564",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14111718,
            "range": "± 347428",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34413052,
            "range": "± 662021",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 24409220,
            "range": "± 1449250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 100456936,
            "range": "± 1788421",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 123900207,
            "range": "± 1255130",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 251176415,
            "range": "± 2738582",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 139097116,
            "range": "± 2142358",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 56036670,
            "range": "± 1536208",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 193341334,
            "range": "± 2648947",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3296,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 373452,
            "range": "± 5115",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 380656,
            "range": "± 5753",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 727895,
            "range": "± 13344",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 227621,
            "range": "± 3191",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4528,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 257185,
            "range": "± 2727",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 513297,
            "range": "± 6703",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 198488,
            "range": "± 3204",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1511,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 207587,
            "range": "± 2697",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3787340223,
            "range": "± 14771512",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1426121,
            "range": "± 17647",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1377767,
            "range": "± 17094",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15824,
            "range": "± 213",
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
          "id": "42911ed80b43aecd246555c3696d10bd858d18be",
          "message": "re_datastore: introduce cluster keys (#593)\n\n* get is supposed to return a row, not a [row]\r\n\r\n* unwrap note\r\n\r\n* the bench too\r\n\r\n* self review\r\n\r\n* doc test also\r\n\r\n* and re_query ofc!\r\n\r\n* slicing is _very_ slow, don't do it if you don't have to\r\n\r\n* no more col_arrays in re_query\r\n\r\n* there's actually no need for concatenating at all\r\n\r\n* incrementally compute and cache bucket sizes\r\n\r\n* cleaning up and documenting existing limitations\r\n\r\n* introducing bucket retirement\r\n\r\n* issue ref\r\n\r\n* some more doc stuff\r\n\r\n* self-review\r\n\r\n* polars/fmt should always be there for tests\r\n\r\n* streamlining batch support\r\n\r\n* take list header into account\r\n\r\n* it's fine\r\n\r\n* self-review\r\n\r\n* just something i want to keep around for later\r\n\r\n* (un)wrapping lists is a bit slow... and slicing them is _extremely_ slow!\r\n\r\n* merge cmc/datastore/get_a_single_row (#590)\r\n\r\n* no more col_arrays in re_query\r\n\r\n* introducing the notion of clustering key, thankfully breaking all tests by design\r\n\r\n* making good use of that shiny new Instance component\r\n\r\n* merge cmc/datastore/get_rid_of_copies (#584)\r\n\r\n* missed one\r\n\r\n* introducing arrow_util with is_dense_array()\r\n\r\n* finding the clustering comp of the row... or creating it!\r\n\r\n* rebasin'\r\n\r\n* post rebase clean up\r\n\r\n* addressing PR comments, I hope\r\n\r\n* ensure that clustering components are properly sorted, failing the existing test suite\r\n\r\n* build_instances now generate sorted ids, thus greenlighting the test suite\r\n\r\n* missed a couple\r\n\r\n* addressed PR comments\r\n\r\n* going for the ArrayExt route\r\n\r\n* completing the quadrifecta of checks\r\n\r\n* the unavoidable typed error revolution is on its way, and it's early\r\n\r\n* where we're going we don't need polars\r\n\r\n* update everything for the new APIs\r\n\r\n* error for unsupported clustering key types\r\n\r\n* clean up and actually testing our error paths\r\n\r\n* move those nasty internal tests into their own dirty corner\r\n\r\n* finally some high-level tests in here\r\n\r\n* i happen to like where this is going\r\n\r\n* shuffling things\r\n\r\n* demonstrating that implicit instances are somehow broken\r\n\r\n* fully working implicit clustering keys, but demonstrating a sorting issue somewhere\r\n\r\n* there is still something weird going on tho\r\n\r\n* latest_at behaving as one would expect\r\n\r\n* automatically cache generated cluster instances\r\n\r\n* time to clean up en masse\r\n\r\n* still want to put some stress on the bucketing\r\n\r\n* make ArrayExt::is_dense a little more friendly, just in case...\r\n\r\n* re_query: use polars/fmt in tests\r\n\r\n* re_query: remove implicit instances\r\n\r\n* fixing the u32 vs u64 instance drama\r\n\r\n* cluster-aware polars helpers :>\r\n\r\n* cleanin up tests\r\n\r\n* continuing cleanup and doc\r\n\r\n* updating visuals for this brave new world\r\n\r\n* docs\r\n\r\n* self-review\r\n\r\n* bruh\r\n\r\n* bruh...\r\n\r\n* ...\r\n\r\n* outdated comment\r\n\r\n* no reason to search for it multiple times\r\n\r\n* polars_helpers => polars_util for consistency's sake\r\n\r\n* addressing PR comments and a couple other things\r\n\r\n* xxx\r\n\r\n* post-merge fixes\r\n\r\n* more fixes",
          "timestamp": "2022-12-22T11:19:55+01:00",
          "tree_id": "ace94179f2011c35d3d6bd1f588d42172c31a542",
          "url": "https://github.com/rerun-io/rerun/commit/42911ed80b43aecd246555c3696d10bd858d18be"
        },
        "date": 1671705252584,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 175720,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 757,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 306,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 399,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 933465504,
            "range": "± 5737794",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 348859,
            "range": "± 2347",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 93813369,
            "range": "± 541496",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11328,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22847844,
            "range": "± 347675",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7946,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4591908,
            "range": "± 649682",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10204085,
            "range": "± 424036",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15362487,
            "range": "± 796930",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36034723,
            "range": "± 836802",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 25903792,
            "range": "± 1567678",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 100669631,
            "range": "± 1047961",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 126943604,
            "range": "± 817429",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 256144246,
            "range": "± 2486809",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 142399641,
            "range": "± 997029",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58094621,
            "range": "± 1970467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 201275731,
            "range": "± 1744167",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3436,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 388605,
            "range": "± 1264",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 395589,
            "range": "± 1677",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 743200,
            "range": "± 1453",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 237283,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4700,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 260907,
            "range": "± 1727",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 529040,
            "range": "± 2247",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 204091,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1596,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 210513,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3891482964,
            "range": "± 12445494",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1732045,
            "range": "± 12871",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1494717,
            "range": "± 3713",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16255,
            "range": "± 31",
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
          "id": "d9212306613aed5da606a4888079a6670f1147df",
          "message": "move SceneSpatialPrimitives to its own mod and picking along with it (#628)",
          "timestamp": "2022-12-22T11:44:43+01:00",
          "tree_id": "81e66ce8bdc403b3621de97f85c40d9ac01ec7ee",
          "url": "https://github.com/rerun-io/rerun/commit/d9212306613aed5da606a4888079a6670f1147df"
        },
        "date": 1671706717656,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 174880,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 727,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 312,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 385,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 958807626,
            "range": "± 8507782",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 361371,
            "range": "± 3638",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94712222,
            "range": "± 542419",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11315,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23855501,
            "range": "± 28237",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7964,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4635192,
            "range": "± 234620",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13177846,
            "range": "± 533141",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17705232,
            "range": "± 1325920",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39308525,
            "range": "± 335720",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 32262327,
            "range": "± 413723",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 104890183,
            "range": "± 1169567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 130948047,
            "range": "± 1342890",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 265334307,
            "range": "± 1998630",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 145896018,
            "range": "± 868903",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62768241,
            "range": "± 658215",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 204198167,
            "range": "± 1466964",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3417,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 389053,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 395645,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 744357,
            "range": "± 2872",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 238014,
            "range": "± 979",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4645,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 266316,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 533013,
            "range": "± 1857",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 205221,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1566,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 212106,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4043260108,
            "range": "± 12561346",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1749845,
            "range": "± 18567",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1502560,
            "range": "± 13867",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16253,
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
          "id": "607cd6647852dec7fef7b11e35105792a3a8d55e",
          "message": "Improve clock demo (#618)\n\n* Use correct angles\r\n* Log real time\r\n* Add --steps argument, useful for benchmarking",
          "timestamp": "2022-12-22T12:29:31+01:00",
          "tree_id": "b687871451c2bcac289432cf835a8e45dc9a40cc",
          "url": "https://github.com/rerun-io/rerun/commit/607cd6647852dec7fef7b11e35105792a3a8d55e"
        },
        "date": 1671709238257,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 175007,
            "range": "± 2947",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 722,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 306,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 382,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 832520689,
            "range": "± 3780836",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 347513,
            "range": "± 2265",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 86300623,
            "range": "± 413191",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11336,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22865492,
            "range": "± 263990",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7977,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4455244,
            "range": "± 355012",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11149688,
            "range": "± 973974",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15537995,
            "range": "± 937615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37336922,
            "range": "± 726508",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 28994374,
            "range": "± 1468242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 94452671,
            "range": "± 889051",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 119805430,
            "range": "± 1389751",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 244349233,
            "range": "± 1891848",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 137720455,
            "range": "± 752491",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 52721385,
            "range": "± 788185",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 189119477,
            "range": "± 1197282",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3597,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 388138,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 396214,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 743849,
            "range": "± 3115",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 237307,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4632,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 265696,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 536346,
            "range": "± 4007",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 208849,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1577,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 215372,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3485640048,
            "range": "± 12584613",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1754166,
            "range": "± 13389",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1494573,
            "range": "± 26116",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16231,
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
          "id": "d427b6ee8586aff38b1b6d0579911d9b1818091d",
          "message": "Populate the selection panel using the selected Instance (#624)\n\n* Populate simple generic arrow table in selection panel\r\n* Display a single component instance in the selection panel",
          "timestamp": "2022-12-22T18:27:47+01:00",
          "tree_id": "11154880ddfa163e810c175a3b3911a24db87564",
          "url": "https://github.com/rerun-io/rerun/commit/d427b6ee8586aff38b1b6d0579911d9b1818091d"
        },
        "date": 1671730763269,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 173147,
            "range": "± 2358",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 714,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 296,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 370,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 968532295,
            "range": "± 3594855",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 352641,
            "range": "± 3065",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 92112562,
            "range": "± 1149780",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10996,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22372600,
            "range": "± 405857",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7860,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4299871,
            "range": "± 76239",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10052044,
            "range": "± 313196",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14109220,
            "range": "± 231277",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34001422,
            "range": "± 838867",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 24270146,
            "range": "± 1191918",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 100102774,
            "range": "± 1435169",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 124236470,
            "range": "± 1134234",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 253467815,
            "range": "± 3653615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 139412408,
            "range": "± 1978697",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 55970935,
            "range": "± 1353250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 193377671,
            "range": "± 2802045",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3268,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 380612,
            "range": "± 3343",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 387761,
            "range": "± 4593",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 726211,
            "range": "± 9714",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 229712,
            "range": "± 4921",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4513,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 259771,
            "range": "± 2710",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 514216,
            "range": "± 6306",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 201125,
            "range": "± 1952",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1523,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 206457,
            "range": "± 2970",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4053344045,
            "range": "± 19130501",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1648542,
            "range": "± 23527",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1460048,
            "range": "± 25948",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16243,
            "range": "± 176",
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
          "id": "160066babbbac2e80cbd4651c91729368e7f08d0",
          "message": "Split the arrow path for the ScenePart for Box2D (#629)\n\n* Split arrow path for box2d ScenePart",
          "timestamp": "2022-12-22T19:04:41+01:00",
          "tree_id": "c76704eb8dffe77e4134ad91dfaaeb21ea2d1ffd",
          "url": "https://github.com/rerun-io/rerun/commit/160066babbbac2e80cbd4651c91729368e7f08d0"
        },
        "date": 1671733005944,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 169941,
            "range": "± 2202",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 708,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 304,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 380,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1073988667,
            "range": "± 12574439",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357299,
            "range": "± 1383",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 99240849,
            "range": "± 804205",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10979,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22943929,
            "range": "± 539638",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7709,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4227402,
            "range": "± 80956",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 9927999,
            "range": "± 301934",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14284459,
            "range": "± 484605",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34838038,
            "range": "± 777185",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 25297650,
            "range": "± 1344739",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 108150246,
            "range": "± 1877415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 131966898,
            "range": "± 1263867",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 264886633,
            "range": "± 3465472",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 145079270,
            "range": "± 1684946",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63252807,
            "range": "± 1535974",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 202783323,
            "range": "± 2657140",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3304,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 377346,
            "range": "± 5111",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 382066,
            "range": "± 5295",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 727072,
            "range": "± 7278",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 228293,
            "range": "± 3170",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4435,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 255893,
            "range": "± 3160",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 512591,
            "range": "± 6053",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 199184,
            "range": "± 2521",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1515,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 205978,
            "range": "± 2713",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4769285095,
            "range": "± 16927457",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1689661,
            "range": "± 21694",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1438039,
            "range": "± 20298",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15815,
            "range": "± 295",
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
          "id": "55a993bd579d50eeda4fe41443791219688e5f3c",
          "message": "Even nicer Time Panel (#630)\n\n* Simplify interaction with time panel loop selection and time marker\r\n\r\n* Time panel: Make \"even\" ticks larger\r\n\r\n* small refactor\r\n\r\n* Speed up tick painting when zoomed in\r\n\r\n* Always allow dragging the time marker\r\n\r\n* Allow scroll and zoom with cmd-scroll in timeline area too\r\n\r\n* Tweak loop selection color\r\n\r\n* Tweak the gap estimation algorithm, and add some comments to it\r\n\r\n* Make sure the time text don't bleed over to the next time range\r\n\r\n* Don't display huge time ranges\r\n\r\n* Click loop selection to toggle it on/off, plus misc cleanup\r\n\r\n* Support showing times below the millisecond limit\r\n\r\n* Split the day in two\r\n\r\n* Explain a comment a bit better",
          "timestamp": "2022-12-22T20:08:02+01:00",
          "tree_id": "c12aacac8ae43f275aee00a17ebb68b1e4c2f0c3",
          "url": "https://github.com/rerun-io/rerun/commit/55a993bd579d50eeda4fe41443791219688e5f3c"
        },
        "date": 1671736895832,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 174158,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 717,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 306,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 383,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 980026985,
            "range": "± 8907876",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357023,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94888691,
            "range": "± 822449",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11306,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23029601,
            "range": "± 443193",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7933,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4302286,
            "range": "± 34766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10378806,
            "range": "± 431946",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14848301,
            "range": "± 501170",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37120314,
            "range": "± 1368850",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26776081,
            "range": "± 1523741",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 101806297,
            "range": "± 1515761",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 126375658,
            "range": "± 1152920",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 258901615,
            "range": "± 1853011",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 141907121,
            "range": "± 1196114",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 60115449,
            "range": "± 1660938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 200883254,
            "range": "± 2266566",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3559,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 388391,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 393524,
            "range": "± 2833",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 741713,
            "range": "± 4299",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 236550,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4592,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 262890,
            "range": "± 1028",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 524071,
            "range": "± 1363",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 205213,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1573,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 210917,
            "range": "± 680",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4028040063,
            "range": "± 12961936",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1723940,
            "range": "± 10269",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1500834,
            "range": "± 12753",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16430,
            "range": "± 26",
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
          "id": "219659a449b6fcf9007ab2ac02f8969476903f93",
          "message": "Workaround that the viewer can't handle f64 depth (#636)\n\nCo-authored-by: Nikolaus West <niko@rerun.io>",
          "timestamp": "2022-12-23T14:30:15+01:00",
          "tree_id": "01faf67236ee5ad9122c05c15ef47ee73843d865",
          "url": "https://github.com/rerun-io/rerun/commit/219659a449b6fcf9007ab2ac02f8969476903f93"
        },
        "date": 1671803083496,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 173331,
            "range": "± 735",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 746,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 322,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 386,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 998717282,
            "range": "± 4924824",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 380106,
            "range": "± 2453",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 99673184,
            "range": "± 417532",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11376,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 24362690,
            "range": "± 134178",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7967,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4949777,
            "range": "± 170797",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11787338,
            "range": "± 726426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 18233082,
            "range": "± 1036481",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38494600,
            "range": "± 799812",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 31753715,
            "range": "± 952986",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 105820599,
            "range": "± 1155508",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 131759492,
            "range": "± 889295",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 270058958,
            "range": "± 1730906",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 149069004,
            "range": "± 825598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64900971,
            "range": "± 954726",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 209214035,
            "range": "± 1445593",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3425,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 388715,
            "range": "± 6738",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 395533,
            "range": "± 1384",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 746327,
            "range": "± 6184",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 238187,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4657,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 295815,
            "range": "± 1584",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 558392,
            "range": "± 2435",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 217512,
            "range": "± 1093",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1592,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 225019,
            "range": "± 864",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4211826445,
            "range": "± 21501284",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1755796,
            "range": "± 19581",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1662124,
            "range": "± 8289",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16389,
            "range": "± 78",
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
          "id": "16ac5dc303e17430d8fb0b5b00609ab0bc6a6b29",
          "message": "Additional color type conversions (#632)",
          "timestamp": "2022-12-25T13:35:02+01:00",
          "tree_id": "72e3aef8db01d58018106b474e45d62b08d6fb87",
          "url": "https://github.com/rerun-io/rerun/commit/16ac5dc303e17430d8fb0b5b00609ab0bc6a6b29"
        },
        "date": 1671972597716,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 174009,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 738,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 305,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 384,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1018869282,
            "range": "± 4891464",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 354340,
            "range": "± 2564",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 96433873,
            "range": "± 577642",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11379,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23598088,
            "range": "± 140012",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7876,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4619376,
            "range": "± 284524",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12521990,
            "range": "± 856095",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 18470887,
            "range": "± 1116816",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38235410,
            "range": "± 541222",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 30697327,
            "range": "± 1164585",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 103847150,
            "range": "± 1048610",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 130166199,
            "range": "± 2053085",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 261975580,
            "range": "± 1958343",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 144097048,
            "range": "± 965157",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59026863,
            "range": "± 815022",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 200661130,
            "range": "± 1635778",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3458,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418563,
            "range": "± 1076",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 424110,
            "range": "± 27541",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 726844,
            "range": "± 3977",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 245463,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4635,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 263627,
            "range": "± 1570",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 545708,
            "range": "± 2311",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 204850,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1670,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 214039,
            "range": "± 841",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4047364924,
            "range": "± 8994227",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1738814,
            "range": "± 13941",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1515181,
            "range": "± 3885",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15828,
            "range": "± 89",
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
          "id": "96890fab3f2f65ac0aec8606843c04b57bc8ec6f",
          "message": "re_renderer: #pragma-once semantics for shader imports (#649)\n\n* remove non-sensical assertion\r\n\r\n* updating file resolver tests for pragma once semantics (failing as expected)\r\n\r\n* supporting #pragma once (the very dumb way)\r\n\r\n* demonstrating that resolve_imports recursiveness has always been broken\r\n\r\n* fixing resolve_imports for indirect recursive deps (again, the dumb way)\r\n\r\n* getting of the caching stuff that's incompatible with a pragma-once model\r\n\r\n* update doc\r\n\r\n* self review\r\n\r\n* addressed PR comments",
          "timestamp": "2022-12-27T10:25:38+01:00",
          "tree_id": "5b49e2f2f86a9a98e1c006f639d1513b15048bbf",
          "url": "https://github.com/rerun-io/rerun/commit/96890fab3f2f65ac0aec8606843c04b57bc8ec6f"
        },
        "date": 1672134062482,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 174232,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 746,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 306,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 382,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 943093873,
            "range": "± 6503807",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 354532,
            "range": "± 836",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94796189,
            "range": "± 375866",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11331,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22883080,
            "range": "± 350554",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7900,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4299184,
            "range": "± 163678",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10473681,
            "range": "± 415979",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14945805,
            "range": "± 619054",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34590012,
            "range": "± 1166997",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26178212,
            "range": "± 1875999",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 100183202,
            "range": "± 1248912",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 125318635,
            "range": "± 849712",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 258822134,
            "range": "± 2162109",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 141972328,
            "range": "± 880680",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 54542054,
            "range": "± 1045198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 195753108,
            "range": "± 1841330",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3470,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 416154,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423161,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 727474,
            "range": "± 1520",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 247719,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4565,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 262612,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 539483,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 204478,
            "range": "± 669",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1671,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 212451,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3907460593,
            "range": "± 9155979",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1696187,
            "range": "± 17996",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1488601,
            "range": "± 8630",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15825,
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
          "id": "27c2ae8503ea3dc07be10124b0500260edeaea05",
          "message": "EntityView - bring out primary component as generic (#633)\n\n* EntityView - bring out primary component as generic, added missing iter\r\nmethods",
          "timestamp": "2022-12-28T10:15:46+01:00",
          "tree_id": "8d01538b4f24f4fd0db5b4bc2571f481524b3d24",
          "url": "https://github.com/rerun-io/rerun/commit/27c2ae8503ea3dc07be10124b0500260edeaea05"
        },
        "date": 1672219689421,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 175855,
            "range": "± 1491",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 745,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/primary",
            "value": 306,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/missing_components/secondaries",
            "value": 381,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 867825915,
            "range": "± 7224458",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 362389,
            "range": "± 1866",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 86540594,
            "range": "± 302227",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11349,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22861382,
            "range": "± 203923",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7890,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4362001,
            "range": "± 124744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10786891,
            "range": "± 469149",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15394931,
            "range": "± 626619",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35722806,
            "range": "± 746520",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 26528958,
            "range": "± 1341555",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 93634109,
            "range": "± 866365",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 118829835,
            "range": "± 817447",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 241841972,
            "range": "± 1474428",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 137331042,
            "range": "± 621164",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 51454262,
            "range": "± 808621",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 186035880,
            "range": "± 1241662",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3459,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417250,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 421804,
            "range": "± 902",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 727716,
            "range": "± 2291",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 248098,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4601,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 266746,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 543567,
            "range": "± 1712",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207861,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1681,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 215739,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3446272035,
            "range": "± 8461480",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1686258,
            "range": "± 16151",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1482473,
            "range": "± 5856",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15377,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/Tuid::random",
            "value": 38,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}