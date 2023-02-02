window.BENCHMARK_DATA = {
  "lastUpdate": 1675329222741,
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
      }
    ]
  }
}