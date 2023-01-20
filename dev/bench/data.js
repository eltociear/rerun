window.BENCHMARK_DATA = {
  "lastUpdate": 1674234024075,
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
          "id": "582293438a2bf06ba4ff74d3bef67e598c2dc65b",
          "message": "Improve selection view (#804)",
          "timestamp": "2023-01-18T09:43:02+01:00",
          "tree_id": "c2ca0b0e6a2d796848453b748c86d0651997cb21",
          "url": "https://github.com/rerun-io/rerun/commit/582293438a2bf06ba4ff74d3bef67e598c2dc65b"
        },
        "date": 1674032269121,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 287386,
            "range": "± 1322",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 718,
            "range": "± 0",
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
            "value": 376,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44840,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1046724045,
            "range": "± 5866904",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 422911,
            "range": "± 2288",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 102873094,
            "range": "± 420259",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11008,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23861109,
            "range": "± 289283",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6947,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4893216,
            "range": "± 176375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12454158,
            "range": "± 820224",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17306009,
            "range": "± 1328342",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37883201,
            "range": "± 951496",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53115669,
            "range": "± 1043359",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140211662,
            "range": "± 1496114",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165806248,
            "range": "± 1045430",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 366266691,
            "range": "± 1624732",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 191775423,
            "range": "± 1251639",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81567244,
            "range": "± 1242484",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 267753576,
            "range": "± 1891536",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3442,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 384841,
            "range": "± 1161",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 391222,
            "range": "± 1842",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 735085,
            "range": "± 2178",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332335,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6351,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 400321,
            "range": "± 2113",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 751755,
            "range": "± 3162",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 378732,
            "range": "± 2006",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2154,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 386094,
            "range": "± 1264",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7154827072,
            "range": "± 44105459",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1687185,
            "range": "± 17551",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2863218,
            "range": "± 12056",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16039,
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
          "id": "1839239102375f5af9f5a448e31cb2156463265b",
          "message": "Multi hover/select data structure, centralize currently hovered objects (#805)\n\n* put hover selection into a single place that handles multiple objects being hovered\r\n* improved selection query on multiselection\r\n* move all scene parts to the new multi-hover data structure\r\n* selection is now immutable, made ObjPath.hash() return a value instead of a reference\r\n* remove selection display string and improve selection display fallbacks",
          "timestamp": "2023-01-18T10:47:35+01:00",
          "tree_id": "6b3db4621b989251dd6799822d57cb57aee6176a",
          "url": "https://github.com/rerun-io/rerun/commit/1839239102375f5af9f5a448e31cb2156463265b"
        },
        "date": 1674035999836,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 274760,
            "range": "± 680",
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
            "value": 327,
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
            "value": 45216,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 875522982,
            "range": "± 7502650",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 370148,
            "range": "± 1087",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88226348,
            "range": "± 1501337",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10933,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23127421,
            "range": "± 226343",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6922,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4184836,
            "range": "± 25572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10797311,
            "range": "± 578669",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15794066,
            "range": "± 941713",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38330481,
            "range": "± 667452",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47370318,
            "range": "± 1044890",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125594760,
            "range": "± 1104488",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151415105,
            "range": "± 1091441",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327508816,
            "range": "± 1352585",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177283483,
            "range": "± 873308",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68836749,
            "range": "± 798693",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 243372088,
            "range": "± 1363602",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3576,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 382541,
            "range": "± 736",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 390142,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 730859,
            "range": "± 947",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331073,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6395,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 353438,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 709949,
            "range": "± 1850",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346671,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2171,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354445,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5902903421,
            "range": "± 8922188",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1619774,
            "range": "± 9704",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2586027,
            "range": "± 49913",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16046,
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
          "id": "9f97adfa7204da98cfda698b78296b80b8a1e183",
          "message": "More selection UI improvements (#808)\n\n* Always do a full match on Preview enum\r\n* Make Preview::Small even more compact for tensors\r\n* Nicer tensor dtype/shape ui\r\n* Rename Preview::Medium to Preview::Large\r\n* Tweak image hover preview",
          "timestamp": "2023-01-18T11:55:55+01:00",
          "tree_id": "953dcc1342a82dc7946b8179f9d581d39fe95a69",
          "url": "https://github.com/rerun-io/rerun/commit/9f97adfa7204da98cfda698b78296b80b8a1e183"
        },
        "date": 1674040236479,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 272991,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 743,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 374,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45397,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 865529353,
            "range": "± 10708244",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 362079,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 89301664,
            "range": "± 856493",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10978,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22270476,
            "range": "± 359517",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6957,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4167967,
            "range": "± 42197",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10613499,
            "range": "± 324640",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15084065,
            "range": "± 489374",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35780017,
            "range": "± 717598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47111384,
            "range": "± 1128712",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125364709,
            "range": "± 1335044",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 150901806,
            "range": "± 954968",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327006314,
            "range": "± 2321619",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177660531,
            "range": "± 1400510",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68196603,
            "range": "± 862370",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241834572,
            "range": "± 2898957",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3445,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 382616,
            "range": "± 4180",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 389170,
            "range": "± 3662",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 729421,
            "range": "± 10577",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330741,
            "range": "± 2764",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6317,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348187,
            "range": "± 1890",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712332,
            "range": "± 9949",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345010,
            "range": "± 1537",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2173,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351674,
            "range": "± 2634",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5956181131,
            "range": "± 12633013",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1621522,
            "range": "± 17777",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2556663,
            "range": "± 21384",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15959,
            "range": "± 126",
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
          "id": "66d38364183a643f7bcf228b7b934407af78b2aa",
          "message": "Hovering for arrow tensors (#815)\n\n* Hovering for arrow tensors\r\n* get() for Arrow tensors",
          "timestamp": "2023-01-18T18:43:25+01:00",
          "tree_id": "0ce7b35eebfb7d81c91a277af514d1ea2c68bd01",
          "url": "https://github.com/rerun-io/rerun/commit/66d38364183a643f7bcf228b7b934407af78b2aa"
        },
        "date": 1674064672065,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 274595,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 726,
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
            "value": 376,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45109,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 964661756,
            "range": "± 9102896",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 355357,
            "range": "± 1102",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97514190,
            "range": "± 739768",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11133,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22768070,
            "range": "± 414620",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6904,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4163490,
            "range": "± 55573",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10918862,
            "range": "± 526137",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15494894,
            "range": "± 865773",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38402067,
            "range": "± 841602",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50973462,
            "range": "± 1219646",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134778409,
            "range": "± 1141272",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164170198,
            "range": "± 626684",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353911738,
            "range": "± 3150211",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186239237,
            "range": "± 1048774",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77977297,
            "range": "± 1121808",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259576382,
            "range": "± 1862548",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3505,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 391174,
            "range": "± 1245",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 398397,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 729548,
            "range": "± 2262",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322148,
            "range": "± 884",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6152,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 347669,
            "range": "± 1411",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 702723,
            "range": "± 3185",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346219,
            "range": "± 680",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2212,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352422,
            "range": "± 1011",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6687848345,
            "range": "± 15480545",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1566063,
            "range": "± 13745",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2550354,
            "range": "± 9489",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14880,
            "range": "± 46",
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
          "id": "2eed974d0a5300a0eedd8660a9b2019e2dd05539",
          "message": "Improve point and line sizes (#818)\n\n* Separate point and line size configuration\r\n* Better default for point sizes",
          "timestamp": "2023-01-18T18:58:30+01:00",
          "tree_id": "c923efca7e84c92edff15ebbb67cdc393abb2692",
          "url": "https://github.com/rerun-io/rerun/commit/2eed974d0a5300a0eedd8660a9b2019e2dd05539"
        },
        "date": 1674065493222,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 277265,
            "range": "± 987",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 732,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 304,
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
            "value": 45336,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 987909282,
            "range": "± 6084600",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 381572,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97995055,
            "range": "± 553003",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10939,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23470676,
            "range": "± 233709",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6947,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4357785,
            "range": "± 284090",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 14244495,
            "range": "± 467793",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 18320288,
            "range": "± 1713005",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39537631,
            "range": "± 613544",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53852919,
            "range": "± 705431",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138336003,
            "range": "± 1271294",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167944909,
            "range": "± 1337423",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 360775298,
            "range": "± 1917152",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188128273,
            "range": "± 891819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80656149,
            "range": "± 996381",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 265983993,
            "range": "± 1866556",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3462,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393191,
            "range": "± 1453",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 399979,
            "range": "± 1064",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 733156,
            "range": "± 1990",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323963,
            "range": "± 741",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6235,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352452,
            "range": "± 1546",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711499,
            "range": "± 3192",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 353566,
            "range": "± 1307",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2204,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359701,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6953903191,
            "range": "± 18769326",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1614799,
            "range": "± 12775",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2577938,
            "range": "± 15878",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14975,
            "range": "± 47",
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
          "id": "c174dfb282f8cfcc88e0fca41f7536b9127bf3bb",
          "message": "Fix double click on non-camera object no longer focusing (#825)\n\nFixes #817",
          "timestamp": "2023-01-19T09:46:07+01:00",
          "tree_id": "e07e820685e5f7d27c3e1ea4f68095b534b5efc6",
          "url": "https://github.com/rerun-io/rerun/commit/c174dfb282f8cfcc88e0fca41f7536b9127bf3bb"
        },
        "date": 1674118750748,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 284373,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 726,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 302,
            "range": "± 9",
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
            "value": 44603,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1006199052,
            "range": "± 21673535",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 406483,
            "range": "± 9163",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 100719643,
            "range": "± 2049987",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11005,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23394061,
            "range": "± 485716",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6933,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4258958,
            "range": "± 239815",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10895309,
            "range": "± 692291",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16324572,
            "range": "± 764677",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39733070,
            "range": "± 629642",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52406477,
            "range": "± 837931",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135306503,
            "range": "± 1417881",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167268736,
            "range": "± 1448165",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357332375,
            "range": "± 2201497",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186768356,
            "range": "± 1798790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 78481471,
            "range": "± 1091043",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259559372,
            "range": "± 1991704",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3470,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393613,
            "range": "± 1284",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 399864,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 735928,
            "range": "± 2999",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325574,
            "range": "± 608",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6311,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354105,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713987,
            "range": "± 3313",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351788,
            "range": "± 1815",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2213,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356252,
            "range": "± 1014",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6786234599,
            "range": "± 74926876",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1621476,
            "range": "± 29614",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2677881,
            "range": "± 67081",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14894,
            "range": "± 17",
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
          "id": "76a699aef038484de064bc0477060269cd9de8b6",
          "message": "Fix typo in log_mesh_file (#828)",
          "timestamp": "2023-01-19T11:37:54+01:00",
          "tree_id": "d2e53a123344b87bbae0a97ed2982223e03ebec7",
          "url": "https://github.com/rerun-io/rerun/commit/76a699aef038484de064bc0477060269cd9de8b6"
        },
        "date": 1674125563740,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 278480,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 733,
            "range": "± 2",
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
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45558,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 955981572,
            "range": "± 6445652",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 368897,
            "range": "± 4694",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97143555,
            "range": "± 651111",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10991,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23593203,
            "range": "± 250684",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6936,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4619635,
            "range": "± 208320",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13974777,
            "range": "± 596890",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 19190427,
            "range": "± 1650786",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 38614374,
            "range": "± 954775",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52818316,
            "range": "± 834625",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136965148,
            "range": "± 1429754",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166972729,
            "range": "± 1278243",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 356173813,
            "range": "± 1872265",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188102404,
            "range": "± 1239161",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77129763,
            "range": "± 1078395",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 261240187,
            "range": "± 2484967",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3385,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 392777,
            "range": "± 891",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 398089,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731304,
            "range": "± 1387",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325025,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6255,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354136,
            "range": "± 1482",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711182,
            "range": "± 3043",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352761,
            "range": "± 1303",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2193,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355572,
            "range": "± 1795",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6729724315,
            "range": "± 52198345",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1604744,
            "range": "± 13057",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2591233,
            "range": "± 13404",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14919,
            "range": "± 64",
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
          "id": "c55325dadb0123badb376f7cae8dc71b8bed0d3d",
          "message": "Fix bad merge on mesh (#832)",
          "timestamp": "2023-01-19T14:14:52+01:00",
          "tree_id": "e3faae24aa1847aff9722b1258cbdde036503704",
          "url": "https://github.com/rerun-io/rerun/commit/c55325dadb0123badb376f7cae8dc71b8bed0d3d"
        },
        "date": 1674135031528,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 274048,
            "range": "± 1799",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 733,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 323,
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
            "value": 45318,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 962332059,
            "range": "± 8022732",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 361926,
            "range": "± 944",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97052681,
            "range": "± 828592",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10934,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22534512,
            "range": "± 320978",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6949,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4196685,
            "range": "± 25302",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10653916,
            "range": "± 511084",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15122226,
            "range": "± 406433",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36441492,
            "range": "± 1038847",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48469646,
            "range": "± 1311048",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135560936,
            "range": "± 1340505",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164644169,
            "range": "± 747752",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 355292708,
            "range": "± 1869560",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185097232,
            "range": "± 1345542",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 77685820,
            "range": "± 1188934",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258310250,
            "range": "± 2045422",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3443,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 391826,
            "range": "± 941",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 396387,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731935,
            "range": "± 2367",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322733,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6208,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354125,
            "range": "± 1354",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 703598,
            "range": "± 3302",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348405,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2231,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352705,
            "range": "± 959",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6789941404,
            "range": "± 15633496",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1582134,
            "range": "± 8765",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2575386,
            "range": "± 9105",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14921,
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
          "id": "3d53cfc6bf1bc7801d57e13a85f90225c3fc0188",
          "message": "Default to unknown if meaning isn't specified (#834)",
          "timestamp": "2023-01-19T15:59:38+01:00",
          "tree_id": "effa0b74c8bacec9b57b72f80075a5fcfaf14f55",
          "url": "https://github.com/rerun-io/rerun/commit/3d53cfc6bf1bc7801d57e13a85f90225c3fc0188"
        },
        "date": 1674141157029,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 273989,
            "range": "± 1085",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 734,
            "range": "± 0",
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
            "value": 376,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45442,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 986589598,
            "range": "± 7724854",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 364887,
            "range": "± 2429",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97332126,
            "range": "± 545563",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10888,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23437197,
            "range": "± 273828",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6957,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4292761,
            "range": "± 157369",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11751291,
            "range": "± 832439",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15399985,
            "range": "± 616627",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37583381,
            "range": "± 940208",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52929708,
            "range": "± 1530188",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137519218,
            "range": "± 1540172",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164353528,
            "range": "± 1798161",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357011341,
            "range": "± 2058724",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187064923,
            "range": "± 925252",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80376187,
            "range": "± 1410140",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264920967,
            "range": "± 2477063",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3516,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393345,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 398594,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731278,
            "range": "± 1143",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322898,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6247,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351735,
            "range": "± 1334",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701366,
            "range": "± 2833",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350779,
            "range": "± 1438",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2221,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350152,
            "range": "± 1662",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6966301865,
            "range": "± 22471714",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1617838,
            "range": "± 15404",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2596959,
            "range": "± 12119",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14905,
            "range": "± 43",
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
          "id": "dd91daf8956750274028da0beb7c41c12d317fb9",
          "message": "Handle splatted values in lookup (#835)\n\n* Handle splatted values in lookup\r\n\r\n* Use id of ::splat()",
          "timestamp": "2023-01-19T16:30:28+01:00",
          "tree_id": "7e1cab9d223a7d1d44407d6a11e2af8acd3f0b7e",
          "url": "https://github.com/rerun-io/rerun/commit/dd91daf8956750274028da0beb7c41c12d317fb9"
        },
        "date": 1674143006943,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 277085,
            "range": "± 6866",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 730,
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
            "value": 377,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44748,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 884137049,
            "range": "± 5761543",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 367017,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 88089796,
            "range": "± 445193",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10897,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 21978515,
            "range": "± 192620",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6912,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4191393,
            "range": "± 16103",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10563590,
            "range": "± 142998",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14689504,
            "range": "± 177625",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35297911,
            "range": "± 318802",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 45135018,
            "range": "± 816989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 123979069,
            "range": "± 996213",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149366740,
            "range": "± 522798",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322606188,
            "range": "± 1442103",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 174937784,
            "range": "± 831828",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67405579,
            "range": "± 838288",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241035484,
            "range": "± 1461500",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3540,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 390194,
            "range": "± 911",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 398041,
            "range": "± 1296",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 731780,
            "range": "± 1884",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323408,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6251,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351361,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704167,
            "range": "± 2007",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346150,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2164,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355459,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5930884081,
            "range": "± 14886253",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1604869,
            "range": "± 9748",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2583359,
            "range": "± 8515",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15073,
            "range": "± 77",
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
          "id": "d9d28375bce66a361abfc403031e76d77275009a",
          "message": "Remove spammy log from msg_bundle (#837)",
          "timestamp": "2023-01-19T17:07:06+01:00",
          "tree_id": "8253d43bb0e9d1f41d393d0341d671d84f8706aa",
          "url": "https://github.com/rerun-io/rerun/commit/d9d28375bce66a361abfc403031e76d77275009a"
        },
        "date": 1674145521493,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 277611,
            "range": "± 1951",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 727,
            "range": "± 2",
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
            "value": 372,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44821,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 871044062,
            "range": "± 3380196",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 388339,
            "range": "± 1498",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 87985858,
            "range": "± 509878",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 10921,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22281115,
            "range": "± 354812",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 6942,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4245934,
            "range": "± 97313",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10664218,
            "range": "± 290943",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15684258,
            "range": "± 797418",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35874782,
            "range": "± 627320",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47832888,
            "range": "± 1441883",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125375059,
            "range": "± 2287448",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 149958505,
            "range": "± 1471410",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327605905,
            "range": "± 2089709",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177192173,
            "range": "± 963029",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67854999,
            "range": "± 869739",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240680964,
            "range": "± 1974748",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3570,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 425378,
            "range": "± 2332",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 429827,
            "range": "± 3699",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 720698,
            "range": "± 4189",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 309546,
            "range": "± 2463",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6227,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363571,
            "range": "± 1971",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706741,
            "range": "± 3115",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351354,
            "range": "± 2434",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2131,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351927,
            "range": "± 1138",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5915878243,
            "range": "± 13638675",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1601728,
            "range": "± 22379",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2582193,
            "range": "± 28535",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 14941,
            "range": "± 189",
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
          "id": "e80055dcf2dde4341960eb89fb5f91f6c66be675",
          "message": "Rebuild Rect2D as a Union of Vec4D (#826)\n\n* Use Buffer<T> for Tensor payload\r\n* Add support for deriving Arrow for [T;SIZE]\r\n* Rework Vec2D, Vec3D and Vec4D to use [T] storage\r\n* Rework Rect2D to wrap a Vec4D, supporting all RectTypes as an Enum\r\n* Added missing components to Boxes2dPart\r\n* Fixed duck typing in log_rect/log_rects\r\n* No vec-allocation on fixed-size deserialization\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-01-19T17:34:10+01:00",
          "tree_id": "d2c036e93a64480bedf6cde2d8b5914b0f354f85",
          "url": "https://github.com/rerun-io/rerun/commit/e80055dcf2dde4341960eb89fb5f91f6c66be675"
        },
        "date": 1674146198441,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 584396,
            "range": "± 8470",
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
          "id": "52b70551b4dc317019c28715e56c9ab2b4460906",
          "message": "Stable diffusion example fixes (#831)\n\n* Add in fixes to huggingface_pipeline from main\r\n* Control SD model weights cache dir\r\n* Remove rerun from example requirements.txt\r\n* Remove reference to multiprocessing's requirements\r\n* Fix randn_tensor call\r\n* Fix comment in __call__\r\n* Improve prompt logging\r\n* Update default stable diffusion prompt",
          "timestamp": "2023-01-19T18:56:30+01:00",
          "tree_id": "630de2458589b76a1dc4ec98a7105a436a8f2fd3",
          "url": "https://github.com/rerun-io/rerun/commit/52b70551b4dc317019c28715e56c9ab2b4460906"
        },
        "date": 1674151228534,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565619,
            "range": "± 3521",
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
          "id": "cf68955e5fda622d9e2c3cfae424d769d433f963",
          "message": "Make visible history work for Point3D (#820)\n\n* Make visible history work for Point3D",
          "timestamp": "2023-01-19T22:32:24+01:00",
          "tree_id": "0e8d51e0101177cfa993fc9003b9d0851a2f62d5",
          "url": "https://github.com/rerun-io/rerun/commit/cf68955e5fda622d9e2c3cfae424d769d433f963"
        },
        "date": 1674164069878,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 557837,
            "range": "± 6447",
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
          "id": "210fba86c979b4e11154bbaf30b9ebcdb82ffb20",
          "message": "Add time histogram crate (#657)\n\n* First commit\r\n\r\n* less memory use\r\n\r\n* Better naming, and add tree8 + simple iterator\r\n\r\n* Fix multi-threaded memory-measurement\r\n\r\n* Add range to the query\r\n\r\n* sparseness test\r\n\r\n* Implement contraction\r\n\r\n* Implement removal\r\n\r\n* Use absolute indexing\r\n\r\n* Remove the other implementations\r\n\r\n* Add more tests\r\n\r\n* Docs\r\n\r\n* cleanup\r\n\r\n* Remove misleading comments\r\n\r\n* Some better naming and docs\r\n\r\n* Cleanup\r\n\r\n* Replace shell script with just-script\r\n\r\n* Use Relaxed\r\n\r\n* Explain the thread-local memory counting\r\n\r\n* Motivate weird u64_key_from_i64_key\r\n\r\n* Call it `root`\r\n\r\n* Document cutoff_size==0\r\n\r\n* Move up constant\r\n\r\n* Better comment\r\n\r\n* move stack pop\r\n\r\n* Document how to improve `remove` in the future\r\n\r\n* Document constants, and add some static assertions\r\n\r\n* Tree -> Node\r\n\r\n* Use SmallVec\r\n\r\n* Silence clippy",
          "timestamp": "2023-01-20T07:59:42+01:00",
          "tree_id": "35ac60a9ac50dd8f5de643ed9a8ca68ea51938cc",
          "url": "https://github.com/rerun-io/rerun/commit/210fba86c979b4e11154bbaf30b9ebcdb82ffb20"
        },
        "date": 1674198271913,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573679,
            "range": "± 3596",
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
          "id": "646a564a4ec7d5d075b00733a464b63db74d17ec",
          "message": "Dependency cleanup (#816)\n\n* Use workspace versions of wgpu and egui crates\r\n\r\n* Add document-features to re_renderer, re_query and re_tuid\r\n\r\n* Add a note about how we need to stop using patched crates\r\n\r\n* Clarify TODO",
          "timestamp": "2023-01-20T08:15:24+01:00",
          "tree_id": "a0a5fdd5aba7a539791895e3845d4af39b0ba7ba",
          "url": "https://github.com/rerun-io/rerun/commit/646a564a4ec7d5d075b00733a464b63db74d17ec"
        },
        "date": 1674199185417,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 582018,
            "range": "± 2405",
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
          "id": "e649a5e963aeb444cab3cb18e9f8ecf0eb43535a",
          "message": "Python SDK: Add `rerun.spawn_and_connect` (#821)\n\n* Python SDK: Add rerun.spawn_and_connect\r\n\r\n* Update all examples\r\n\r\n* Better docs\r\n\r\n* Update changelog\r\n\r\n* Python linting\r\n\r\n* Set start_new_session=True\r\n\r\n* Unify how we setup logging across all crates\r\n\r\n* Graceful shutdown of client connection\r\n\r\n* Add separate spawn_viewer function\r\n\r\n* py-lint\r\n\r\n* Update changelog date",
          "timestamp": "2023-01-20T09:12:23+01:00",
          "tree_id": "a19e5e9740dd1acf82bf53caf7e83590f81dd32d",
          "url": "https://github.com/rerun-io/rerun/commit/e649a5e963aeb444cab3cb18e9f8ecf0eb43535a"
        },
        "date": 1674202474508,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 572154,
            "range": "± 3784",
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
          "id": "2ad4848324d7660b7a5804acfa849994f0a87615",
          "message": "Remove all use of crate cgmath (#840)",
          "timestamp": "2023-01-20T11:25:49+01:00",
          "tree_id": "1add6b1b55c4c88d378f143596018cb3e7d715c0",
          "url": "https://github.com/rerun-io/rerun/commit/2ad4848324d7660b7a5804acfa849994f0a87615"
        },
        "date": 1674216195444,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 566078,
            "range": "± 2155",
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
          "id": "aa09fe470b45864a8b7afee920ebcd2117a9bca1",
          "message": "Fix objects with transform only missing in arrow and selection history prune crash (#844)\n\n* Fix objects with transform only not being added to scenes in arrow\r\n* Fix selection history prune causing crashes",
          "timestamp": "2023-01-20T13:12:02+01:00",
          "tree_id": "d172d63e9b2a4d4303a834c3570f3a199c5a1aa4",
          "url": "https://github.com/rerun-io/rerun/commit/aa09fe470b45864a8b7afee920ebcd2117a9bca1"
        },
        "date": 1674216948783,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 563321,
            "range": "± 4496",
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
          "id": "8ee3dfa362e204501e6e056c1e2ed498365ce4e1",
          "message": "Make `rr.init(\"my_app\", spawn_and_connect = True)` as a short form (#846)\n\n* Make `rr.init(\"my_app\", spawn_and_connect = True)` as a short form\r\n\r\n* Add dead simple example of how to use Rerun SDK\r\n\r\n* Update requirements files\r\n\r\n* pylint\r\n\r\n* make hello_world a main.py",
          "timestamp": "2023-01-20T13:33:09+01:00",
          "tree_id": "cf7db5d902f93927ef6d03a581a6a971418757dd",
          "url": "https://github.com/rerun-io/rerun/commit/8ee3dfa362e204501e6e056c1e2ed498365ce4e1"
        },
        "date": 1674218194510,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 559926,
            "range": "± 4903",
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
          "id": "3b5f4f32a59b1c5eeef25da0b82ee139297bea9a",
          "message": "Fix deadlock when flushing messages (#843)\n\n* Drop msgs on their own thread\r\n\r\n* Relesae the GIL before flush\r\n\r\n* Better expect msg\r\n\r\n* clippy",
          "timestamp": "2023-01-20T13:56:37+01:00",
          "tree_id": "64fef631611fb168c97315def96696584183b2f7",
          "url": "https://github.com/rerun-io/rerun/commit/3b5f4f32a59b1c5eeef25da0b82ee139297bea9a"
        },
        "date": 1674220172509,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 568925,
            "range": "± 4770",
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
          "id": "3918e839b072cd1c0a0a9b9822754425fb815363",
          "message": "Selected things are now highlighted (#838)\n\n* Selected things are now highlighted\r\n* flat shaded lines for 2d",
          "timestamp": "2023-01-20T14:15:52+01:00",
          "tree_id": "4f4cf8cf232184958f11a804969e82f19be21747",
          "url": "https://github.com/rerun-io/rerun/commit/3918e839b072cd1c0a0a9b9822754425fb815363"
        },
        "date": 1674220681157,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562857,
            "range": "± 3790",
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
          "id": "e6bb41f569a97d6748a6dbff40ca8834e7075a6b",
          "message": "Add profiling scopes to point3d scene population (#849)",
          "timestamp": "2023-01-20T14:31:14+01:00",
          "tree_id": "f683180d51a21e883d949497c68c7ec5eb2ecc22",
          "url": "https://github.com/rerun-io/rerun/commit/e6bb41f569a97d6748a6dbff40ca8834e7075a6b"
        },
        "date": 1674221608323,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 581575,
            "range": "± 4003",
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
          "id": "931d059ce6b4da760d6671710bcabbbb4599977a",
          "message": "Native rerun-agnostic analytics SDK (#819)\n\n* bootstrap and identifying the gazillon edge cases\r\n\r\n* getting... somewhere\r\n\r\n* why is this in xdg_config\r\n\r\n* all the CLI stuff\r\n\r\n* first take at a disclaimer\r\n\r\n* stuff\r\n\r\n* persistent attributes\r\n\r\n* starting to split/abstract pipelines and sinks\r\n\r\n* handling historical data\r\n\r\n* default props and some random cleanup\r\n\r\n* proper handling of unexpected catchup thread shutdown\r\n\r\n* wip\r\n\r\n* cleanin up the noise\r\n\r\n* more cleanup, more error handling\r\n\r\n* format\r\n\r\n* get rid of openssl\r\n\r\n* dealing with denied deps\r\n\r\n* self review\r\n\r\n* first copy pass and add 'details' command\r\n\r\n* todo\r\n\r\n* addressing PR comments\r\n\r\n* missed that one",
          "timestamp": "2023-01-20T14:37:22+01:00",
          "tree_id": "319d0162d26bc279608b0cff2dc9e4aea0dbd8e3",
          "url": "https://github.com/rerun-io/rerun/commit/931d059ce6b4da760d6671710bcabbbb4599977a"
        },
        "date": 1674221997212,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 561246,
            "range": "± 8179",
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
          "id": "4cabe0ada7b3d1f17e4ff8b2b5f55debb9ba9ffa",
          "message": "Improve selection history UI (#848)\n\n* Document SelectionHistory\r\n* Nice selection history UI: drop-down on right-clicking buttons\r\n* Don't serialize selection history\r\n* Store one selection history per recording\r\n* Fix potential out-of-bound in selection history\r\n* Simplify selection history pruning\r\n* Keep the correct index",
          "timestamp": "2023-01-20T15:00:28+01:00",
          "tree_id": "411222a46d2ab99d4d1974959e7f2726724bfde2",
          "url": "https://github.com/rerun-io/rerun/commit/4cabe0ada7b3d1f17e4ff8b2b5f55debb9ba9ffa"
        },
        "date": 1674223422047,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565637,
            "range": "± 6194",
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
          "id": "5d3a8759ccb5ff03d1cd4456cf329a8ccc4e43ac",
          "message": "Slightly cleaner error handling for AddrInUse (#847)\n\n* Slightly cleaner error handling for AddrInUse\r\n* Return error code consistently on failure",
          "timestamp": "2023-01-20T15:26:21+01:00",
          "tree_id": "352fbb7e33ad2eaa4a9b9674768a8170e679d32d",
          "url": "https://github.com/rerun-io/rerun/commit/5d3a8759ccb5ff03d1cd4456cf329a8ccc4e43ac"
        },
        "date": 1674224906786,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571825,
            "range": "± 7047",
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
          "id": "c9004877ab970d4bfcaeb725b2c14921b88dd245",
          "message": "Visible history all the types (#852)\n\n* Visible history all the types\r\n* Fix image layering on arrow",
          "timestamp": "2023-01-20T15:40:10+01:00",
          "tree_id": "b40ea11090229ffb94fd4e74a72688ccbab34b1b",
          "url": "https://github.com/rerun-io/rerun/commit/c9004877ab970d4bfcaeb725b2c14921b88dd245"
        },
        "date": 1674225739585,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 564991,
            "range": "± 3187",
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
          "id": "ee29c1485487d6ae0fcc287c13c953494cbe90f3",
          "message": "Convert F16 -> F32 on log (#855)",
          "timestamp": "2023-01-20T16:06:47+01:00",
          "tree_id": "6b64039625c951f81c50469141bf9a3c3ff02720",
          "url": "https://github.com/rerun-io/rerun/commit/ee29c1485487d6ae0fcc287c13c953494cbe90f3"
        },
        "date": 1674227412429,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 562405,
            "range": "± 1331",
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
          "id": "52feae25df85eecb1dc055c4ab28f1054df27632",
          "message": "Patch meter into ArrowTensor for the time being (#858)\n\n* Patch meter into ArrowTensor for the time being\r\n\r\n* Clarify meter constructions in tensor.py\r\n\r\n* cranky",
          "timestamp": "2023-01-20T17:30:47+01:00",
          "tree_id": "839dcb96cc9f1808761d61e2c0b40d9e3a333f3b",
          "url": "https://github.com/rerun-io/rerun/commit/52feae25df85eecb1dc055c4ab28f1054df27632"
        },
        "date": 1674232526875,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 571511,
            "range": "± 2171",
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
          "id": "ff7ea25e4514fc29ad71447e43e8082508ba0ae0",
          "message": "move selection state into dedicated struct (#857)",
          "timestamp": "2023-01-20T17:58:13+01:00",
          "tree_id": "3f5385c28730ac40f284e0c3e3fc656cfd8f2003",
          "url": "https://github.com/rerun-io/rerun/commit/ff7ea25e4514fc29ad71447e43e8082508ba0ae0"
        },
        "date": 1674234022731,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 573850,
            "range": "± 2286",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}