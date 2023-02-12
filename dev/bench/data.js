window.BENCHMARK_DATA = {
  "lastUpdate": 1676229718941,
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
          "id": "3a91fa4ec57661802ac1add2271df09d3d110d79",
          "message": "Prepare crates for publishing (#1197)\n\n* Link to the CODE_OF_CONDUCT.md\r\n\r\n* Add publish=true to the crates that are going to be published\r\n\r\n* Add authors.workspace = true\r\n\r\n* Add readme, repository, and homepage to all published crates\r\n\r\n* Each crate must have its own README.md\r\n\r\n* Document re_memory better\r\n\r\n* Update descriptions and README.md:s for all the different crates\r\n\r\n* Missing license field for re_viewer\r\n\r\n* tweak re_memory/README.md\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* Expand some README.md:s\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-02-11T15:51:28+01:00",
          "tree_id": "648dd50c08039553b8935ccd4a3af7fa7138cfde",
          "url": "https://github.com/rerun-io/rerun/commit/3a91fa4ec57661802ac1add2271df09d3d110d79"
        },
        "date": 1676127667373,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 537964,
            "range": "± 2382",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1763,
            "range": "± 3",
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
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149883,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50016230,
            "range": "± 1324560",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137072457,
            "range": "± 1363509",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163889731,
            "range": "± 678433",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350933070,
            "range": "± 2166485",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 184490384,
            "range": "± 1034488",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73047833,
            "range": "± 1179364",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 254700108,
            "range": "± 1644094",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 277810,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6162,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355603,
            "range": "± 1485",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 647942,
            "range": "± 2589",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351169,
            "range": "± 847",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2007,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354145,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7037035669,
            "range": "± 24880384",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1704129,
            "range": "± 17362",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2665640,
            "range": "± 12963",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16997,
            "range": "± 63",
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
          "id": "a4f67efd90779c49206f61bc7b984d724429e919",
          "message": "Click banner to go to rerun.io",
          "timestamp": "2023-02-11T16:21:10+01:00",
          "tree_id": "0fcb852680510e4769b35c0abcbfe4f9d4fd30c0",
          "url": "https://github.com/rerun-io/rerun/commit/a4f67efd90779c49206f61bc7b984d724429e919"
        },
        "date": 1676129469261,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552827,
            "range": "± 1977",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1732,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 358,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 428,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149233,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49474466,
            "range": "± 1040702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137569303,
            "range": "± 1137090",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 162632684,
            "range": "± 741415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353481230,
            "range": "± 3297943",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185534936,
            "range": "± 1043781",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73900055,
            "range": "± 1009434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256627512,
            "range": "± 1664479",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 277649,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6241,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357018,
            "range": "± 1394",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 654636,
            "range": "± 3236",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345439,
            "range": "± 1927",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2011,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354770,
            "range": "± 1302",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6949418897,
            "range": "± 10383099",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1722462,
            "range": "± 14373",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2614649,
            "range": "± 12908",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16930,
            "range": "± 137",
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
          "id": "0d8bb1185c9f6d21bb24b0bbb8291d4b533b561f",
          "message": "Add banner and gifs to rerun/README.md and rerun_py/README.md",
          "timestamp": "2023-02-11T16:58:06+01:00",
          "tree_id": "3c20c246b150c5be3c7b7a456f993be8676c94e9",
          "url": "https://github.com/rerun-io/rerun/commit/0d8bb1185c9f6d21bb24b0bbb8291d4b533b561f"
        },
        "date": 1676131637969,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 537589,
            "range": "± 3894",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1745,
            "range": "± 7",
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
            "value": 148423,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45986615,
            "range": "± 714247",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124497581,
            "range": "± 1134329",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 153660349,
            "range": "± 1175146",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322601140,
            "range": "± 2007166",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174757849,
            "range": "± 2030482",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63227473,
            "range": "± 1067101",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236423947,
            "range": "± 1770586",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 278647,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6237,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353662,
            "range": "± 1570",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 656610,
            "range": "± 2928",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 342329,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2027,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353237,
            "range": "± 938",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5926878106,
            "range": "± 15636510",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1660455,
            "range": "± 8763",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2630279,
            "range": "± 7404",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17067,
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
          "id": "952000378eae07292b53e744f18ad08a1a25c256",
          "message": "Fix sign error on rects (#1200)",
          "timestamp": "2023-02-11T17:12:33+01:00",
          "tree_id": "26b7fc6a1d121ef336f28d0e1ff2935569318305",
          "url": "https://github.com/rerun-io/rerun/commit/952000378eae07292b53e744f18ad08a1a25c256"
        },
        "date": 1676132546158,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 554565,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1742,
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
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148448,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45969706,
            "range": "± 605460",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124569561,
            "range": "± 1054706",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151745669,
            "range": "± 878170",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 326133672,
            "range": "± 1876026",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174072234,
            "range": "± 832827",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63099207,
            "range": "± 811980",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 236142844,
            "range": "± 1584944",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 276814,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6214,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351709,
            "range": "± 916",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 656186,
            "range": "± 2275",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 343202,
            "range": "± 1291",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2040,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353932,
            "range": "± 764",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6036474464,
            "range": "± 18670936",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1717437,
            "range": "± 12532",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2668074,
            "range": "± 12852",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16899,
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
          "id": "223483f5e09a86b05c5a27ac342a1d17b9a12188",
          "message": "Overview documentation for re_renderer (#1199)",
          "timestamp": "2023-02-11T17:33:42+01:00",
          "tree_id": "ed9630349c88a60e14fcbd2852db9a59dc25e8e9",
          "url": "https://github.com/rerun-io/rerun/commit/223483f5e09a86b05c5a27ac342a1d17b9a12188"
        },
        "date": 1676133874022,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 547716,
            "range": "± 8522",
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
            "value": 402,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 142082,
            "range": "± 5734",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 42040408,
            "range": "± 1348967",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 129770744,
            "range": "± 1998789",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154986525,
            "range": "± 1771651",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 336614054,
            "range": "± 3460858",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174794142,
            "range": "± 1906884",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67180627,
            "range": "± 1559239",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239396972,
            "range": "± 2484536",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 263979,
            "range": "± 3841",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5892,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347591,
            "range": "± 3913",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 625318,
            "range": "± 6081",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 338952,
            "range": "± 2483",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1939,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 343132,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6807350637,
            "range": "± 19895416",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1628077,
            "range": "± 17581",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2551657,
            "range": "± 35442",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16093,
            "range": "± 202",
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
      }
    ]
  }
}