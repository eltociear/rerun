window.BENCHMARK_DATA = {
  "lastUpdate": 1676126988105,
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
          "id": "0eb034fc101478ce3aa70bb6c319f746cd009f3b",
          "message": "Add the ability to optionally insert a module docstring in gen_common_index.py (#1145)\n\n* Add the ability to optionally insert a module docstring in gen_common_index.py\r\n* Add highlighting on superfences\r\n* Make Section a dataclass",
          "timestamp": "2023-02-08T17:00:52+01:00",
          "tree_id": "81b59c2af234f9cb6bc7cd8703baa1687ec6aa82",
          "url": "https://github.com/rerun-io/rerun/commit/0eb034fc101478ce3aa70bb6c319f746cd009f3b"
        },
        "date": 1675872567034,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 537443,
            "range": "± 2013",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1831,
            "range": "± 2",
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
            "value": 423,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153243,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49436552,
            "range": "± 1334438",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135926044,
            "range": "± 1361924",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163237317,
            "range": "± 1009547",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348041167,
            "range": "± 2214126",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184286303,
            "range": "± 2239790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72436085,
            "range": "± 1298264",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250438979,
            "range": "± 1790280",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 277002,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6272,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 364341,
            "range": "± 1053",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 665928,
            "range": "± 2278",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346476,
            "range": "± 2542",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2054,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354593,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6814512649,
            "range": "± 17212316",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1665120,
            "range": "± 10107",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2619852,
            "range": "± 16674",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16649,
            "range": "± 20",
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
          "id": "650470e63289a68460a6759ba0c650b114cfb67b",
          "message": "Remove all log spam from rerun during normal use with `rr.spawn` (#1142)\n\n* Remove all log spam from rerun during normal use with `rr.spawn`\r\n\r\n* py lint\r\n\r\n* Suppress debug-log-spam from h2, hyper, reqwest, rustls\r\n\r\n* better docstring\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>\r\n\r\n* fmt\r\n\r\n* fmt\r\n\r\n---------\r\n\r\nCo-authored-by: Clement Rey <cr.rey.clement@gmail.com>",
          "timestamp": "2023-02-08T18:02:12+01:00",
          "tree_id": "e2ea97e9a56823e4bd2b1e62fda6f1e831e8c817",
          "url": "https://github.com/rerun-io/rerun/commit/650470e63289a68460a6759ba0c650b114cfb67b"
        },
        "date": 1675876243726,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 551449,
            "range": "± 6287",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1815,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 348,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 414,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149045,
            "range": "± 2487",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45052422,
            "range": "± 1720829",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135079690,
            "range": "± 1731667",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161993415,
            "range": "± 1344704",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 345909917,
            "range": "± 3163359",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180003782,
            "range": "± 2281664",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71919734,
            "range": "± 1486737",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252024296,
            "range": "± 3281882",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 274122,
            "range": "± 3512",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6144,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366078,
            "range": "± 4872",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 662214,
            "range": "± 9845",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349608,
            "range": "± 3078",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2010,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352624,
            "range": "± 3002",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6987875360,
            "range": "± 50877450",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1650521,
            "range": "± 26297",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2520582,
            "range": "± 37583",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16238,
            "range": "± 253",
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
          "id": "fdb6904eccb2ab2d0faf34be49c3fe592f56b0a0",
          "message": "Improve the docs of `rerun` (#1179)\n\n* Split out the `run` parts of the rerun library to its own file\r\n\r\n* Document that the web feature flag requires running scripts/setup_web.sh\r\n\r\n* Improve the docs of rerun and re_sdk\r\n\r\n* Describe more things\r\n\r\n* Fix warning\r\n\r\n* More docs, and split out `coordinates` into its own module\r\n\r\n* nit comment\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* Improve docstring\r\n\r\n* Improve error message\r\n\r\n* Add some spacing\r\n\r\n* For instance -> For example\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-02-10T18:25:25+01:00",
          "tree_id": "ad8b0b3b1bf8994ad794c2600d847792aed071b8",
          "url": "https://github.com/rerun-io/rerun/commit/fdb6904eccb2ab2d0faf34be49c3fe592f56b0a0"
        },
        "date": 1676050535814,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 542290,
            "range": "± 2849",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1841,
            "range": "± 17",
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
            "value": 423,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156956,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50474501,
            "range": "± 1322986",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136882042,
            "range": "± 1296691",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163000667,
            "range": "± 2113335",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352465174,
            "range": "± 2178091",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185580203,
            "range": "± 1147355",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74872201,
            "range": "± 1305028",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256716630,
            "range": "± 1747880",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 289677,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6250,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 373983,
            "range": "± 2898",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 685888,
            "range": "± 3379",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346197,
            "range": "± 5369",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2070,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356917,
            "range": "± 960",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7543899762,
            "range": "± 111810540",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1798277,
            "range": "± 86892",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2971712,
            "range": "± 235393",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16883,
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
          "id": "96a6b180ffa5dcb6588b4dc22d5bc0d0376c20b6",
          "message": "Add newlines before types, `impl`, `fn`, and docstrings",
          "timestamp": "2023-02-10T18:35:40+01:00",
          "tree_id": "da770402b78e4d749916ad5acb9fb44b5b25ef4c",
          "url": "https://github.com/rerun-io/rerun/commit/96a6b180ffa5dcb6588b4dc22d5bc0d0376c20b6"
        },
        "date": 1676051142518,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 548523,
            "range": "± 1646",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1825,
            "range": "± 3",
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
            "value": 154206,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46841904,
            "range": "± 514829",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125832531,
            "range": "± 1052908",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153403179,
            "range": "± 6024051",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329230834,
            "range": "± 1791980",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176583940,
            "range": "± 920582",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64720907,
            "range": "± 804212",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239343395,
            "range": "± 1442568",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 290159,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6260,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 370256,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 687655,
            "range": "± 2234",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346396,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2057,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353703,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6222576659,
            "range": "± 11925658",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1695715,
            "range": "± 16770",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2668383,
            "range": "± 13224",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16934,
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
          "id": "2049301be09e21c926e8685d2c50035869a819f8",
          "message": "Update examples/requirements.txt",
          "timestamp": "2023-02-10T18:54:00+01:00",
          "tree_id": "0061d8a45b45a4f1f7f7f58f1339e5072eec5bf3",
          "url": "https://github.com/rerun-io/rerun/commit/2049301be09e21c926e8685d2c50035869a819f8"
        },
        "date": 1676052250330,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562610,
            "range": "± 12001",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1834,
            "range": "± 4",
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 156214,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52718935,
            "range": "± 613584",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139566089,
            "range": "± 1244840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 172950171,
            "range": "± 1682377",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 366399742,
            "range": "± 2462862",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188288487,
            "range": "± 1221365",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76702234,
            "range": "± 1069860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260025844,
            "range": "± 1957717",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 290093,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6212,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 374885,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 697574,
            "range": "± 2342",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352413,
            "range": "± 1415",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2063,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352488,
            "range": "± 2030",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7119545196,
            "range": "± 36936775",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1781497,
            "range": "± 24493",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2710106,
            "range": "± 47996",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16881,
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
          "id": "cd80c7ce73591d41d09dc175eb819e9c98a55cb7",
          "message": "Mark git directories as safe for our docker_ci container and fix cargo caching (#1187)\n\n* Mark git directories as safe for our docker_ci container\r\n* New cargo packages means a new cache key\r\n* Add CACHE_KEY everywhere and Only update cache from 1 location",
          "timestamp": "2023-02-10T19:28:09+01:00",
          "tree_id": "a810f9e1bc4ea06952eff596dba62045cf0e7280",
          "url": "https://github.com/rerun-io/rerun/commit/cd80c7ce73591d41d09dc175eb819e9c98a55cb7"
        },
        "date": 1676054198517,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 550840,
            "range": "± 3466",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1809,
            "range": "± 7",
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
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155921,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48993118,
            "range": "± 1875450",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136339827,
            "range": "± 1533141",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163088564,
            "range": "± 2717103",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354755335,
            "range": "± 3307321",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183472531,
            "range": "± 1671618",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73907511,
            "range": "± 1279687",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253995374,
            "range": "± 2431737",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 289985,
            "range": "± 1143",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6246,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 372436,
            "range": "± 2457",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 693389,
            "range": "± 6650",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348403,
            "range": "± 1888",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2062,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353638,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6984339506,
            "range": "± 23997054",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1713788,
            "range": "± 26313",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2685233,
            "range": "± 39864",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16990,
            "range": "± 58",
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
          "id": "e382103b050eca3408e80c0782c2363f8c1ac033",
          "message": "Run cargo check after patching pre-release (#1190)",
          "timestamp": "2023-02-10T20:27:55+01:00",
          "tree_id": "16e6ca73209325aba4dba33f984ceb8ed6c729a7",
          "url": "https://github.com/rerun-io/rerun/commit/e382103b050eca3408e80c0782c2363f8c1ac033"
        },
        "date": 1676057754193,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 540260,
            "range": "± 24358",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1839,
            "range": "± 3",
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
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155356,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 41604257,
            "range": "± 1072970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122672283,
            "range": "± 1081308",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149536626,
            "range": "± 1011914",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 318763444,
            "range": "± 1618050",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 169516706,
            "range": "± 1108872",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62029372,
            "range": "± 1141186",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 230176578,
            "range": "± 1563718",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 288139,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6231,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366561,
            "range": "± 1440",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 671670,
            "range": "± 2515",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344538,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2056,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350393,
            "range": "± 996",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6004370710,
            "range": "± 18032038",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1652319,
            "range": "± 10933",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2622966,
            "range": "± 11808",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16846,
            "range": "± 87",
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
          "id": "712e07ea1c35fec1c701ac1e9ea63cc1636fa19b",
          "message": "Allow logging the contents of an image file, not by path (#1193)\n\n* log_image_file: require named arguments\r\n* Allow logging the contents of an image file, not by path",
          "timestamp": "2023-02-11T02:14:52+01:00",
          "tree_id": "8190f9acec55145d6bd845a61da37fe47aa31b53",
          "url": "https://github.com/rerun-io/rerun/commit/712e07ea1c35fec1c701ac1e9ea63cc1636fa19b"
        },
        "date": 1676078579580,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 525679,
            "range": "± 5169",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1786,
            "range": "± 21",
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
            "value": 402,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148585,
            "range": "± 1724",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 40033168,
            "range": "± 1253276",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 118991852,
            "range": "± 1572261",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 139426458,
            "range": "± 2458373",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 304627985,
            "range": "± 3526741",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 167396495,
            "range": "± 2098880",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59974820,
            "range": "± 1195415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 226643215,
            "range": "± 3178741",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 272687,
            "range": "± 3966",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5876,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352570,
            "range": "± 2513",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 653400,
            "range": "± 5892",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 340009,
            "range": "± 3651",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1929,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 345981,
            "range": "± 3256",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5881199222,
            "range": "± 28450742",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1571881,
            "range": "± 23305",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2519544,
            "range": "± 32008",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16060,
            "range": "± 233",
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
          "id": "603f1f3d5e9a3f79d2f0afaef648fbe0c7a519ed",
          "message": "Add --dataset and --resize flags to colmap (#1177)\n\n* Add --dataset and --resize flags to colmap",
          "timestamp": "2023-02-11T04:37:25+01:00",
          "tree_id": "544e463710ceb18d41d7b5910a4481e7d7bbefc6",
          "url": "https://github.com/rerun-io/rerun/commit/603f1f3d5e9a3f79d2f0afaef648fbe0c7a519ed"
        },
        "date": 1676087156033,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 557744,
            "range": "± 2996",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1848,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 353,
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
            "value": 158397,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50638639,
            "range": "± 1205768",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139732805,
            "range": "± 1224744",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165791722,
            "range": "± 1034452",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 356190795,
            "range": "± 1662317",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184909910,
            "range": "± 958972",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74573210,
            "range": "± 910911",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255240868,
            "range": "± 1596571",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 289125,
            "range": "± 1123",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6275,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366391,
            "range": "± 1559",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 678888,
            "range": "± 3310",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347262,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2072,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359783,
            "range": "± 1411",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7033469379,
            "range": "± 21323175",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1726024,
            "range": "± 18000",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2623784,
            "range": "± 36381",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16935,
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
          "id": "9506e1d699e641cd02f091f17284afa3547cedda",
          "message": "Enable `--web-viewer` in the Python Wheels (#1182)\n\n* Make 'web' a default feature of the python sdk\r\n\r\n* Add sanity-checking to crates/re_web_server/build.rs\r\n\r\n* Allow crates/re_web_server/build.rs to be run from any CWD\r\n\r\n* Run setup_web.sh on the Python CI\r\n\r\n* Turn on the web feature on the CI\r\n\r\n* Only enable the web feature when building pypi package\r\n\r\n* Improve setup_web.sh\r\n\r\n* Add winget package manager to setup_web.sh\r\n\r\n* Print out what is happening\r\n\r\n* Add shell: bash\r\n\r\n* Try getting wasm-opt into the windows build\r\n\r\n* Correct path to exe\r\n\r\n* run setup_web.sh but allow it to fail\r\n\r\n---------\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-02-11T00:14:27-05:00",
          "tree_id": "afc5ddc1d2ca5fca7c341399f66ad2065756f6d5",
          "url": "https://github.com/rerun-io/rerun/commit/9506e1d699e641cd02f091f17284afa3547cedda"
        },
        "date": 1676092979445,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553018,
            "range": "± 3376",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1828,
            "range": "± 7",
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
            "value": 422,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 154866,
            "range": "± 824",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48278873,
            "range": "± 1477847",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137953593,
            "range": "± 1247528",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162850883,
            "range": "± 847852",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353017712,
            "range": "± 2633798",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186737412,
            "range": "± 1242579",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74965622,
            "range": "± 1012341",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257161092,
            "range": "± 1707763",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 288542,
            "range": "± 986",
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
            "value": 364869,
            "range": "± 1596",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 679283,
            "range": "± 3611",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344516,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2109,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353668,
            "range": "± 1629",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7057570757,
            "range": "± 7367410",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1656057,
            "range": "± 17390",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2600099,
            "range": "± 22285",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16814,
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
          "id": "f84c8ba30f54ab66eb0812e8c037a244a2f00cd2",
          "message": "Install web dependencies before running cargo check (#1196)",
          "timestamp": "2023-02-11T08:29:17+01:00",
          "tree_id": "1ca4ef6e33f53a94260db25bfe46a170fa74b57e",
          "url": "https://github.com/rerun-io/rerun/commit/f84c8ba30f54ab66eb0812e8c037a244a2f00cd2"
        },
        "date": 1676101165122,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 555811,
            "range": "± 2022",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1830,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 348,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 417,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153616,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44946434,
            "range": "± 1677455",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123833574,
            "range": "± 1230034",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 148608376,
            "range": "± 1271527",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 318072583,
            "range": "± 2123027",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 170612519,
            "range": "± 1388995",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62781419,
            "range": "± 898442",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 235041775,
            "range": "± 2089114",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 288521,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6185,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365654,
            "range": "± 2167",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 678383,
            "range": "± 4985",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347933,
            "range": "± 1726",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2057,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353139,
            "range": "± 2084",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5941365571,
            "range": "± 21694634",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1637175,
            "range": "± 17253",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2589551,
            "range": "± 22232",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16787,
            "range": "± 142",
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
          "id": "67296fa1d7a873eb61a72acba35a9f81325f1a54",
          "message": "Update arrow2, arrow2_convert and polars (#1189)\n\n* Update arrow2, arrow2_convert and polars\r\n\r\n* Patch arrow2-convert again\r\n\r\n* Add instructions for how to patch crates to Cargo.toml\r\n\r\n* Use trunk polars in patch",
          "timestamp": "2023-02-11T10:41:58+01:00",
          "tree_id": "f06b23505b1d2ffeab39564abc0ca0d05b4727c7",
          "url": "https://github.com/rerun-io/rerun/commit/67296fa1d7a873eb61a72acba35a9f81325f1a54"
        },
        "date": 1676109081981,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 541886,
            "range": "± 1974",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1752,
            "range": "± 95",
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
            "value": 418,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147787,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44952482,
            "range": "± 770239",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124778285,
            "range": "± 1171296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151229563,
            "range": "± 588131",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 320193922,
            "range": "± 1378150",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174643483,
            "range": "± 936187",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62770647,
            "range": "± 800606",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 234543905,
            "range": "± 1680469",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 276784,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6190,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354160,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 650871,
            "range": "± 1937",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347655,
            "range": "± 2118",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2017,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351960,
            "range": "± 1145",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6015931521,
            "range": "± 9429954",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1683830,
            "range": "± 9557",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2599657,
            "range": "± 7716",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16966,
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
          "id": "49cea4ca504a7d61f1afd96c61cf8d076eb5cc15",
          "message": "Turn on and fix Python linting of examples (#1191)\n\n* Turn on python linting of examples\r\n\r\n* Fix minor lints\r\n\r\n* Mute lints about bad docstrings\r\n\r\n* Use list() instead of trivial list comprehension\r\n\r\n* ignore some lines, fix others\r\n\r\n* don't use single-letter names\r\n\r\n* ignore line\r\n\r\n* `catch:` -> `catch Exception:`\r\n\r\n* Dict comprehension\r\n\r\n* format\r\n\r\n* Docstring improvements\r\n\r\n* More docstring fixes\r\n\r\n* Docstring fixes\r\n\r\n* docstrings done!\r\n\r\n* Enable and fix more lints\r\n\r\n* One more\r\n\r\n* Clean up .flake8 file\r\n\r\n* Final cleanup of .flake8\r\n\r\n* Also lint python scripts under scripts/\r\n\r\n* py-format\r\n\r\n* better dicom explanation\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-02-11T11:11:44+01:00",
          "tree_id": "2baf2ea0e86ae99df04131aa464ed94e3b161686",
          "url": "https://github.com/rerun-io/rerun/commit/49cea4ca504a7d61f1afd96c61cf8d076eb5cc15"
        },
        "date": 1676110857874,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 540748,
            "range": "± 1630",
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 419,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149449,
            "range": "± 887",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45611340,
            "range": "± 806086",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124686698,
            "range": "± 1219396",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151193660,
            "range": "± 3204241",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 321309343,
            "range": "± 1510356",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174336792,
            "range": "± 977112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63667620,
            "range": "± 900152",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 234603090,
            "range": "± 1542168",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 279137,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6213,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 349798,
            "range": "± 1413",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 653644,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344640,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2019,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353367,
            "range": "± 1419",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6019426249,
            "range": "± 26053945",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1693606,
            "range": "± 11973",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2654756,
            "range": "± 12908",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17072,
            "range": "± 70",
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
          "id": "6900f9a22f04e6b9ed3de2af99ccd48202a7d739",
          "message": "Disable picking in spatial scenes while dragging (i.e. controlling the camera) (#1198)\n\nFixes #1185",
          "timestamp": "2023-02-11T15:37:22+01:00",
          "tree_id": "bf7378a31f9dfafe0e45ed58baf494fc508e8e3d",
          "url": "https://github.com/rerun-io/rerun/commit/6900f9a22f04e6b9ed3de2af99ccd48202a7d739"
        },
        "date": 1676126985613,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 545486,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1746,
            "range": "± 117",
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
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148664,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48215709,
            "range": "± 833908",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134061727,
            "range": "± 1330913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163834427,
            "range": "± 1064086",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 348368691,
            "range": "± 1666952",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183392297,
            "range": "± 1041806",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71200361,
            "range": "± 882667",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 251474894,
            "range": "± 1716509",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 275960,
            "range": "± 1307",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6195,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359314,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 655368,
            "range": "± 3041",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345408,
            "range": "± 2124",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2005,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353378,
            "range": "± 2162",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6837193482,
            "range": "± 21302666",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1703489,
            "range": "± 11555",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2703042,
            "range": "± 11612",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16939,
            "range": "± 89",
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