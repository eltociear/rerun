window.BENCHMARK_DATA = {
  "lastUpdate": 1672935477135,
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
          "id": "095daba40465da6ccf6b0796735581e1ba5e3e2b",
          "message": "Refactor data_ui (#651)\n\n* Split data_ui into submodules.\r\n* Create and impl DataUi trait",
          "timestamp": "2022-12-28T10:28:18+01:00",
          "tree_id": "3e159881c2f1bac535a8c6934c03913fa55c3942",
          "url": "https://github.com/rerun-io/rerun/commit/095daba40465da6ccf6b0796735581e1ba5e3e2b"
        },
        "date": 1672220424913,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 175098,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 738,
            "range": "± 5",
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
            "value": 838523693,
            "range": "± 6520543",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 356425,
            "range": "± 1503",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 86064694,
            "range": "± 268410",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11357,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22810023,
            "range": "± 217267",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7898,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4294878,
            "range": "± 66713",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10779263,
            "range": "± 494649",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15529825,
            "range": "± 1085043",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36237688,
            "range": "± 851864",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 28537087,
            "range": "± 1397280",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 94469978,
            "range": "± 971155",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 117907937,
            "range": "± 623767",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 239608437,
            "range": "± 1453175",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 137259203,
            "range": "± 725400",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 50112171,
            "range": "± 735352",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 187173379,
            "range": "± 1263460",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3413,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417275,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 424086,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 724730,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 245265,
            "range": "± 1244",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4654,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 261998,
            "range": "± 711",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 542871,
            "range": "± 1933",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 206350,
            "range": "± 741",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1672,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 214189,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3564503385,
            "range": "± 10469695",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1693458,
            "range": "± 15617",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1518886,
            "range": "± 5209",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15437,
            "range": "± 30",
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
          "id": "9c07e0f97eca847fe1739b43a39113b0c2236f31",
          "message": "Allow 3D elements to be added to a space at a pinhole camera (#625)\n\n* allow projecting 3d objects into pinhole cameras\r\n* a few visitors for space info",
          "timestamp": "2023-01-02T12:15:11+01:00",
          "tree_id": "2edd81f1f3d8d3e2ebfec570cdd4d9689cd7b447",
          "url": "https://github.com/rerun-io/rerun/commit/9c07e0f97eca847fe1739b43a39113b0c2236f31"
        },
        "date": 1672658882664,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 173484,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 736,
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
            "value": 381,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 935376122,
            "range": "± 5196102",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 364622,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 93869810,
            "range": "± 514643",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11354,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23104339,
            "range": "± 386908",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7890,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4571478,
            "range": "± 115907",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10832955,
            "range": "± 402396",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15248368,
            "range": "± 452394",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35017778,
            "range": "± 1108143",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 28482432,
            "range": "± 1615373",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 102102935,
            "range": "± 1112291",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 126971515,
            "range": "± 1129093",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 257612610,
            "range": "± 1991467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 143601243,
            "range": "± 785655",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 54930536,
            "range": "± 1024313",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 196753519,
            "range": "± 1367391",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3414,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 417841,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 422482,
            "range": "± 655",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725226,
            "range": "± 1317",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 248059,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4634,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 264451,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 538820,
            "range": "± 2011",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 208357,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1674,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 215129,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3927185411,
            "range": "± 8507145",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1705939,
            "range": "± 10259",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1495056,
            "range": "± 27453",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15430,
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
          "id": "2bda7dbb784b186cdecc0d9dce9e471df54202a0",
          "message": "Remove obsolete ClassDescription (#659)",
          "timestamp": "2023-01-02T16:16:10+01:00",
          "tree_id": "333bf60eb922143851200ce38e59c996f248ad30",
          "url": "https://github.com/rerun-io/rerun/commit/2bda7dbb784b186cdecc0d9dce9e471df54202a0"
        },
        "date": 1672673261014,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 174176,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 775,
            "range": "± 13",
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
            "value": 383,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 930130611,
            "range": "± 5151532",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 383300,
            "range": "± 9710",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 96320762,
            "range": "± 645418",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11373,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23908328,
            "range": "± 47271",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7923,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4819827,
            "range": "± 337231",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13280552,
            "range": "± 490459",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 18931546,
            "range": "± 1492467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 39695271,
            "range": "± 398898",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 32577764,
            "range": "± 499321",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 104028327,
            "range": "± 1067648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 132677275,
            "range": "± 1579289",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 272208376,
            "range": "± 2357158",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 147208560,
            "range": "± 864951",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61105586,
            "range": "± 843852",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 203457509,
            "range": "± 1405875",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3838,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 391847,
            "range": "± 1552",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 398162,
            "range": "± 1404",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 747291,
            "range": "± 1894",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 244993,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4615,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 272216,
            "range": "± 1721",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 542029,
            "range": "± 2932",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 207501,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1666,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 213703,
            "range": "± 1223",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4154097097,
            "range": "± 13980001",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1810656,
            "range": "± 38512",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1515893,
            "range": "± 10953",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15408,
            "range": "± 29",
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
          "id": "853b714d94902a3af1ec94893c094dd04ecb367e",
          "message": "re_datastore: range queries (#609)\n\n* get is supposed to return a row, not a [row]\r\n\r\n* unwrap note\r\n\r\n* the bench too\r\n\r\n* self review\r\n\r\n* doc test also\r\n\r\n* and re_query ofc!\r\n\r\n* slicing is _very_ slow, don't do it if you don't have to\r\n\r\n* no more col_arrays in re_query\r\n\r\n* there's actually no need for concatenating at all\r\n\r\n* incrementally compute and cache bucket sizes\r\n\r\n* cleaning up and documenting existing limitations\r\n\r\n* introducing bucket retirement\r\n\r\n* issue ref\r\n\r\n* some more doc stuff\r\n\r\n* self-review\r\n\r\n* polars/fmt should always be there for tests\r\n\r\n* streamlining batch support\r\n\r\n* take list header into account\r\n\r\n* it's fine\r\n\r\n* self-review\r\n\r\n* just something i want to keep around for later\r\n\r\n* (un)wrapping lists is a bit slow... and slicing them is _extremely_ slow!\r\n\r\n* merge cmc/datastore/get_a_single_row (#590)\r\n\r\n* no more col_arrays in re_query\r\n\r\n* introducing the notion of clustering key, thankfully breaking all tests by design\r\n\r\n* making good use of that shiny new Instance component\r\n\r\n* merge cmc/datastore/get_rid_of_copies (#584)\r\n\r\n* missed one\r\n\r\n* introducing arrow_util with is_dense_array()\r\n\r\n* finding the clustering comp of the row... or creating it!\r\n\r\n* rebasin'\r\n\r\n* post rebase clean up\r\n\r\n* addressing PR comments, I hope\r\n\r\n* ensure that clustering components are properly sorted, failing the existing test suite\r\n\r\n* build_instances now generate sorted ids, thus greenlighting the test suite\r\n\r\n* missed a couple\r\n\r\n* addressed PR comments\r\n\r\n* going for the ArrayExt route\r\n\r\n* completing the quadrifecta of checks\r\n\r\n* the unavoidable typed error revolution is on its way, and it's early\r\n\r\n* where we're going we don't need polars\r\n\r\n* update everything for the new APIs\r\n\r\n* error for unsupported clustering key types\r\n\r\n* clean up and actually testing our error paths\r\n\r\n* move those nasty internal tests into their own dirty corner\r\n\r\n* finally some high-level tests in here\r\n\r\n* i happen to like where this is going\r\n\r\n* shuffling things\r\n\r\n* demonstrating that implicit instances are somehow broken\r\n\r\n* fully working implicit clustering keys, but demonstrating a sorting issue somewhere\r\n\r\n* there is still something weird going on tho\r\n\r\n* latest_at behaving as one would expect\r\n\r\n* automatically cache generated cluster instances\r\n\r\n* time to clean up en masse\r\n\r\n* still want to put some stress on the bucketing\r\n\r\n* make ArrayExt::is_dense a little more friendly, just in case...\r\n\r\n* TimeType::format_range\r\n\r\n* independent latest_at query and using appropriate types everywhere\r\n\r\n* re_query: use polars/fmt in tests\r\n\r\n* re_query: remove implicit instances\r\n\r\n* fixing the u32 vs u64 instance drama\r\n\r\n* really starting to like how this looks\r\n\r\n* cluster-aware polars helpers :>\r\n\r\n* cleanin up tests\r\n\r\n* continuing cleanup and doc\r\n\r\n* updating visuals for this brave new world\r\n\r\n* docs\r\n\r\n* self-review\r\n\r\n* bruh\r\n\r\n* bruh...\r\n\r\n* ...\r\n\r\n* outdated comment\r\n\r\n* no reason to search for it multiple times\r\n\r\n* polars_helpers => polars_util for consistency's sake\r\n\r\n* addressing PR comments and a couple other things\r\n\r\n* xxx\r\n\r\n* post-merge fixes\r\n\r\n* TimeInt should be nohash\r\n\r\n* high-level polar range tools + making first half of range impl pass\r\n\r\n* implement the streaming half\r\n\r\n* finally defeated all demons\r\n\r\n* still passes?\r\n\r\n* it looks like we've made it out alive\r\n\r\n* polars util: join however you wish\r\n\r\n* fixed formatting\r\n\r\n* point2d's PoVs working as expected\r\n\r\n* passing full ranges\r\n\r\n* docs and such part 1, the semantics are hell\r\n\r\n* fixing the filtering mess in tests\r\n\r\n* me stoopid\r\n\r\n* polars docs\r\n\r\n* addressing the clones\r\n\r\n* xxx\r\n\r\n* missed a gazillon conflict somehow\r\n\r\n* polars util spring cleaning\r\n\r\n* do indicate and demonstrate that range_components is _not_ a real streaming join\r\n\r\n* fixed some comments\r\n\r\n* bruh\r\n\r\n* screw it, going for the real deal: full streaming joins\r\n\r\n* YESgit sgit s FINALLY SEMANTICS I ACTUALLY LIKE\r\n\r\n* yep yep i like this\r\n\r\n* I hereby declare myself _satisfied_\r\n\r\n* initiating the great cleanup\r\n\r\n* add notes for upcoming terminology pr\r\n\r\n* bringing IndexRowNr into the mix and slowly starting to fix terminology mess\r\n\r\n* improving range_components ergonomics\r\n\r\n* putting it all in self-reviewable state\r\n\r\n* self-review\r\n\r\n* add bench\r\n\r\n* xxx\r\n\r\n* addressing PR comments\r\n\r\n* demonstrating nasty edge-case with streaming-joins\r\n\r\n* update streaming-join merging rules to fix said edge case\r\n\r\n* implement PoV-less, always-yield lower-level API + adapt higher-level one\r\n\r\n* addressing PR comments\r\n\r\n* self and not-so-self reviews",
          "timestamp": "2023-01-02T17:28:34+01:00",
          "tree_id": "034e9f074dde81fbe071f896070c80e6237c7294",
          "url": "https://github.com/rerun-io/rerun/commit/853b714d94902a3af1ec94893c094dd04ecb367e"
        },
        "date": 1672677608964,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 169114,
            "range": "± 254",
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
            "value": 306,
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
            "value": 45077,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 992010058,
            "range": "± 5381404",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 362032,
            "range": "± 1396",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94465228,
            "range": "± 465520",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11294,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22838540,
            "range": "± 256885",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7881,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4357290,
            "range": "± 28474",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10245119,
            "range": "± 353308",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14569072,
            "range": "± 349489",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35153401,
            "range": "± 625964",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 25132270,
            "range": "± 1545286",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 101495966,
            "range": "± 1395652",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 128951170,
            "range": "± 934009",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 260810335,
            "range": "± 1917860",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 145011501,
            "range": "± 1074818",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 56050404,
            "range": "± 1583016",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 199648350,
            "range": "± 1916117",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3580,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393309,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 396671,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 743895,
            "range": "± 29862",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 243679,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4562,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 265977,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 534835,
            "range": "± 1754",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 205868,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1681,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 212120,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4052297893,
            "range": "± 10555742",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1647100,
            "range": "± 10576",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1490507,
            "range": "± 10297",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16429,
            "range": "± 33",
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
          "id": "78b64861ee8f90725d1eca93abfea8f24ee6a942",
          "message": "re_datastore: dump to flat dataframe (#645)\n\n* get is supposed to return a row, not a [row]\r\n\r\n* unwrap note\r\n\r\n* the bench too\r\n\r\n* self review\r\n\r\n* doc test also\r\n\r\n* and re_query ofc!\r\n\r\n* slicing is _very_ slow, don't do it if you don't have to\r\n\r\n* no more col_arrays in re_query\r\n\r\n* there's actually no need for concatenating at all\r\n\r\n* incrementally compute and cache bucket sizes\r\n\r\n* cleaning up and documenting existing limitations\r\n\r\n* introducing bucket retirement\r\n\r\n* issue ref\r\n\r\n* some more doc stuff\r\n\r\n* self-review\r\n\r\n* polars/fmt should always be there for tests\r\n\r\n* streamlining batch support\r\n\r\n* take list header into account\r\n\r\n* it's fine\r\n\r\n* self-review\r\n\r\n* just something i want to keep around for later\r\n\r\n* (un)wrapping lists is a bit slow... and slicing them is _extremely_ slow!\r\n\r\n* merge cmc/datastore/get_a_single_row (#590)\r\n\r\n* no more col_arrays in re_query\r\n\r\n* introducing the notion of clustering key, thankfully breaking all tests by design\r\n\r\n* making good use of that shiny new Instance component\r\n\r\n* merge cmc/datastore/get_rid_of_copies (#584)\r\n\r\n* missed one\r\n\r\n* introducing arrow_util with is_dense_array()\r\n\r\n* finding the clustering comp of the row... or creating it!\r\n\r\n* rebasin'\r\n\r\n* post rebase clean up\r\n\r\n* addressing PR comments, I hope\r\n\r\n* ensure that clustering components are properly sorted, failing the existing test suite\r\n\r\n* build_instances now generate sorted ids, thus greenlighting the test suite\r\n\r\n* missed a couple\r\n\r\n* addressed PR comments\r\n\r\n* going for the ArrayExt route\r\n\r\n* completing the quadrifecta of checks\r\n\r\n* the unavoidable typed error revolution is on its way, and it's early\r\n\r\n* where we're going we don't need polars\r\n\r\n* update everything for the new APIs\r\n\r\n* error for unsupported clustering key types\r\n\r\n* clean up and actually testing our error paths\r\n\r\n* move those nasty internal tests into their own dirty corner\r\n\r\n* finally some high-level tests in here\r\n\r\n* i happen to like where this is going\r\n\r\n* shuffling things\r\n\r\n* demonstrating that implicit instances are somehow broken\r\n\r\n* fully working implicit clustering keys, but demonstrating a sorting issue somewhere\r\n\r\n* there is still something weird going on tho\r\n\r\n* latest_at behaving as one would expect\r\n\r\n* automatically cache generated cluster instances\r\n\r\n* time to clean up en masse\r\n\r\n* still want to put some stress on the bucketing\r\n\r\n* make ArrayExt::is_dense a little more friendly, just in case...\r\n\r\n* TimeType::format_range\r\n\r\n* independent latest_at query and using appropriate types everywhere\r\n\r\n* re_query: use polars/fmt in tests\r\n\r\n* re_query: remove implicit instances\r\n\r\n* fixing the u32 vs u64 instance drama\r\n\r\n* really starting to like how this looks\r\n\r\n* cluster-aware polars helpers :>\r\n\r\n* cleanin up tests\r\n\r\n* continuing cleanup and doc\r\n\r\n* updating visuals for this brave new world\r\n\r\n* docs\r\n\r\n* self-review\r\n\r\n* bruh\r\n\r\n* bruh...\r\n\r\n* ...\r\n\r\n* outdated comment\r\n\r\n* no reason to search for it multiple times\r\n\r\n* polars_helpers => polars_util for consistency's sake\r\n\r\n* addressing PR comments and a couple other things\r\n\r\n* xxx\r\n\r\n* post-merge fixes\r\n\r\n* TimeInt should be nohash\r\n\r\n* high-level polar range tools + making first half of range impl pass\r\n\r\n* implement the streaming half\r\n\r\n* finally defeated all demons\r\n\r\n* still passes?\r\n\r\n* it looks like we've made it out alive\r\n\r\n* polars util: join however you wish\r\n\r\n* fixed formatting\r\n\r\n* point2d's PoVs working as expected\r\n\r\n* passing full ranges\r\n\r\n* docs and such part 1, the semantics are hell\r\n\r\n* fixing the filtering mess in tests\r\n\r\n* me stoopid\r\n\r\n* polars docs\r\n\r\n* addressing the clones\r\n\r\n* xxx\r\n\r\n* missed a gazillon conflict somehow\r\n\r\n* polars util spring cleaning\r\n\r\n* do indicate and demonstrate that range_components is _not_ a real streaming join\r\n\r\n* fixed some comments\r\n\r\n* bruh\r\n\r\n* screw it, going for the real deal: full streaming joins\r\n\r\n* YESgit sgit s FINALLY SEMANTICS I ACTUALLY LIKE\r\n\r\n* yep yep i like this\r\n\r\n* I hereby declare myself _satisfied_\r\n\r\n* initiating the great cleanup\r\n\r\n* add notes for upcoming terminology pr\r\n\r\n* bringing IndexRowNr into the mix and slowly starting to fix terminology mess\r\n\r\n* improving range_components ergonomics\r\n\r\n* putting it all in self-reviewable state\r\n\r\n* self-review\r\n\r\n* add bench\r\n\r\n* xxx\r\n\r\n* having some casual fun with dataframes :>\r\n\r\n* now with components!\r\n\r\n* just some experiments im not too found of... keeping around just in case\r\n\r\n* Revert \"just some experiments im not too found of... keeping around just in case\"\r\n\r\nThis reverts commit 15f64877825546bd249b87635dcfb3dd004b270d.\r\n\r\n* playing around with insert_id-as-data... which turns out to be quite helpful\r\n\r\n* going into store_insert_ids for real\r\n\r\n* full impl\r\n\r\n* add example\r\n\r\n* self-review\r\n\r\n* reviewable\r\n\r\n* addressing PR comments\r\n\r\n* is that readable\r\n\r\n* Revert \"is that readable\"\r\n\r\nThis reverts commit f802ff509cb66c28936b3ae99f186dc40281e92e.\r\n\r\n* standalone examples for all dataframe APIs\r\n\r\n* burn all todos\r\n\r\n* update doc: you can do that now!\r\n\r\n* demonstrating nasty edge-case with streaming-joins\r\n\r\n* update streaming-join merging rules to fix said edge case\r\n\r\n* addressed PR comments",
          "timestamp": "2023-01-02T18:04:38+01:00",
          "tree_id": "c24cc895f29d7ad450b7bc21b3ca075737cd688a",
          "url": "https://github.com/rerun-io/rerun/commit/78b64861ee8f90725d1eca93abfea8f24ee6a942"
        },
        "date": 1672679911422,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 175706,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 713,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 298,
            "range": "± 1",
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
            "value": 46339,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 955040379,
            "range": "± 3470260",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 365255,
            "range": "± 1643",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 93523083,
            "range": "± 500933",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11303,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23337416,
            "range": "± 301376",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7890,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4594160,
            "range": "± 189655",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11238624,
            "range": "± 926713",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16017163,
            "range": "± 1084451",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37337228,
            "range": "± 760089",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 31779172,
            "range": "± 1163774",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 102257529,
            "range": "± 1201648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 130567576,
            "range": "± 876238",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 258902176,
            "range": "± 2554611",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 143341792,
            "range": "± 958919",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 54599444,
            "range": "± 1568695",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 197966026,
            "range": "± 1894680",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3391,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 394647,
            "range": "± 632",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 402392,
            "range": "± 1277",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 744849,
            "range": "± 2932",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 243717,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4579,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 266763,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 539320,
            "range": "± 1509",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 206928,
            "range": "± 3918",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1668,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 213554,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3989775979,
            "range": "± 12681978",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1724686,
            "range": "± 24401",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1517300,
            "range": "± 10406",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15538,
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
          "id": "f4c7d43b08da062cf44e928e7b9be0e7e3222807",
          "message": "re_datastore: sanity checking cluster keys and their data (#650)\n\n* get is supposed to return a row, not a [row]\r\n\r\n* unwrap note\r\n\r\n* the bench too\r\n\r\n* self review\r\n\r\n* doc test also\r\n\r\n* and re_query ofc!\r\n\r\n* slicing is _very_ slow, don't do it if you don't have to\r\n\r\n* no more col_arrays in re_query\r\n\r\n* there's actually no need for concatenating at all\r\n\r\n* incrementally compute and cache bucket sizes\r\n\r\n* cleaning up and documenting existing limitations\r\n\r\n* introducing bucket retirement\r\n\r\n* issue ref\r\n\r\n* some more doc stuff\r\n\r\n* self-review\r\n\r\n* polars/fmt should always be there for tests\r\n\r\n* streamlining batch support\r\n\r\n* take list header into account\r\n\r\n* it's fine\r\n\r\n* self-review\r\n\r\n* just something i want to keep around for later\r\n\r\n* (un)wrapping lists is a bit slow... and slicing them is _extremely_ slow!\r\n\r\n* merge cmc/datastore/get_a_single_row (#590)\r\n\r\n* no more col_arrays in re_query\r\n\r\n* introducing the notion of clustering key, thankfully breaking all tests by design\r\n\r\n* making good use of that shiny new Instance component\r\n\r\n* merge cmc/datastore/get_rid_of_copies (#584)\r\n\r\n* missed one\r\n\r\n* introducing arrow_util with is_dense_array()\r\n\r\n* finding the clustering comp of the row... or creating it!\r\n\r\n* rebasin'\r\n\r\n* post rebase clean up\r\n\r\n* addressing PR comments, I hope\r\n\r\n* ensure that clustering components are properly sorted, failing the existing test suite\r\n\r\n* build_instances now generate sorted ids, thus greenlighting the test suite\r\n\r\n* missed a couple\r\n\r\n* addressed PR comments\r\n\r\n* going for the ArrayExt route\r\n\r\n* completing the quadrifecta of checks\r\n\r\n* the unavoidable typed error revolution is on its way, and it's early\r\n\r\n* where we're going we don't need polars\r\n\r\n* update everything for the new APIs\r\n\r\n* error for unsupported clustering key types\r\n\r\n* clean up and actually testing our error paths\r\n\r\n* move those nasty internal tests into their own dirty corner\r\n\r\n* finally some high-level tests in here\r\n\r\n* i happen to like where this is going\r\n\r\n* shuffling things\r\n\r\n* demonstrating that implicit instances are somehow broken\r\n\r\n* fully working implicit clustering keys, but demonstrating a sorting issue somewhere\r\n\r\n* there is still something weird going on tho\r\n\r\n* latest_at behaving as one would expect\r\n\r\n* automatically cache generated cluster instances\r\n\r\n* time to clean up en masse\r\n\r\n* still want to put some stress on the bucketing\r\n\r\n* make ArrayExt::is_dense a little more friendly, just in case...\r\n\r\n* TimeType::format_range\r\n\r\n* independent latest_at query and using appropriate types everywhere\r\n\r\n* re_query: use polars/fmt in tests\r\n\r\n* re_query: remove implicit instances\r\n\r\n* fixing the u32 vs u64 instance drama\r\n\r\n* really starting to like how this looks\r\n\r\n* cluster-aware polars helpers :>\r\n\r\n* cleanin up tests\r\n\r\n* continuing cleanup and doc\r\n\r\n* updating visuals for this brave new world\r\n\r\n* docs\r\n\r\n* self-review\r\n\r\n* bruh\r\n\r\n* bruh...\r\n\r\n* ...\r\n\r\n* outdated comment\r\n\r\n* no reason to search for it multiple times\r\n\r\n* polars_helpers => polars_util for consistency's sake\r\n\r\n* addressing PR comments and a couple other things\r\n\r\n* xxx\r\n\r\n* post-merge fixes\r\n\r\n* TimeInt should be nohash\r\n\r\n* high-level polar range tools + making first half of range impl pass\r\n\r\n* implement the streaming half\r\n\r\n* finally defeated all demons\r\n\r\n* still passes?\r\n\r\n* it looks like we've made it out alive\r\n\r\n* polars util: join however you wish\r\n\r\n* fixed formatting\r\n\r\n* point2d's PoVs working as expected\r\n\r\n* passing full ranges\r\n\r\n* docs and such part 1, the semantics are hell\r\n\r\n* fixing the filtering mess in tests\r\n\r\n* me stoopid\r\n\r\n* polars docs\r\n\r\n* addressing the clones\r\n\r\n* xxx\r\n\r\n* missed a gazillon conflict somehow\r\n\r\n* polars util spring cleaning\r\n\r\n* do indicate and demonstrate that range_components is _not_ a real streaming join\r\n\r\n* fixed some comments\r\n\r\n* bruh\r\n\r\n* screw it, going for the real deal: full streaming joins\r\n\r\n* YESgit sgit s FINALLY SEMANTICS I ACTUALLY LIKE\r\n\r\n* yep yep i like this\r\n\r\n* I hereby declare myself _satisfied_\r\n\r\n* initiating the great cleanup\r\n\r\n* add notes for upcoming terminology pr\r\n\r\n* bringing IndexRowNr into the mix and slowly starting to fix terminology mess\r\n\r\n* improving range_components ergonomics\r\n\r\n* putting it all in self-reviewable state\r\n\r\n* self-review\r\n\r\n* add bench\r\n\r\n* xxx\r\n\r\n* addressing PR comments\r\n\r\n* sanity checking cluster components\r\n\r\n* demonstrating nasty edge-case with streaming-joins\r\n\r\n* update streaming-join merging rules to fix said edge case\r\n\r\n* implement PoV-less, always-yield lower-level API + adapt higher-level one\r\n\r\n* addressing PR comments\r\n\r\n* self and not-so-self reviews\r\n\r\n* always-on cluster key, it's fiiiine",
          "timestamp": "2023-01-02T18:24:04+01:00",
          "tree_id": "9c7f2002c217d8432a825c1b849e5d2247be2380",
          "url": "https://github.com/rerun-io/rerun/commit/f4c7d43b08da062cf44e928e7b9be0e7e3222807"
        },
        "date": 1672680908535,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 172198,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 732,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 298,
            "range": "± 1",
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
            "value": 45707,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 844107087,
            "range": "± 4108346",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 365166,
            "range": "± 3017",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 86515767,
            "range": "± 322674",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11345,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22972935,
            "range": "± 163465",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7900,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4460557,
            "range": "± 98276",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10992254,
            "range": "± 490935",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16087941,
            "range": "± 1247907",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36034636,
            "range": "± 821158",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 28177100,
            "range": "± 1020898",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 94086421,
            "range": "± 857424",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 120267805,
            "range": "± 994832",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 241927627,
            "range": "± 1419060",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 138261775,
            "range": "± 624091",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 51319149,
            "range": "± 711426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 187226736,
            "range": "± 2144223",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3399,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 391060,
            "range": "± 1098",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 400926,
            "range": "± 1126",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 748069,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 244852,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4580,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 264407,
            "range": "± 741",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 535540,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 206944,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1702,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 210707,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 3532698352,
            "range": "± 8983778",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1657753,
            "range": "± 20414",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1480920,
            "range": "± 9062",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15628,
            "range": "± 97",
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
          "id": "1d28875673a49e26e94a02fbf727fc218c9e0332",
          "message": "re_query: support for range queries (#653)\n\n* get is supposed to return a row, not a [row]\r\n\r\n* unwrap note\r\n\r\n* the bench too\r\n\r\n* self review\r\n\r\n* doc test also\r\n\r\n* and re_query ofc!\r\n\r\n* slicing is _very_ slow, don't do it if you don't have to\r\n\r\n* no more col_arrays in re_query\r\n\r\n* there's actually no need for concatenating at all\r\n\r\n* incrementally compute and cache bucket sizes\r\n\r\n* cleaning up and documenting existing limitations\r\n\r\n* introducing bucket retirement\r\n\r\n* issue ref\r\n\r\n* some more doc stuff\r\n\r\n* self-review\r\n\r\n* polars/fmt should always be there for tests\r\n\r\n* streamlining batch support\r\n\r\n* take list header into account\r\n\r\n* it's fine\r\n\r\n* self-review\r\n\r\n* just something i want to keep around for later\r\n\r\n* (un)wrapping lists is a bit slow... and slicing them is _extremely_ slow!\r\n\r\n* merge cmc/datastore/get_a_single_row (#590)\r\n\r\n* no more col_arrays in re_query\r\n\r\n* introducing the notion of clustering key, thankfully breaking all tests by design\r\n\r\n* making good use of that shiny new Instance component\r\n\r\n* merge cmc/datastore/get_rid_of_copies (#584)\r\n\r\n* missed one\r\n\r\n* introducing arrow_util with is_dense_array()\r\n\r\n* finding the clustering comp of the row... or creating it!\r\n\r\n* rebasin'\r\n\r\n* post rebase clean up\r\n\r\n* addressing PR comments, I hope\r\n\r\n* ensure that clustering components are properly sorted, failing the existing test suite\r\n\r\n* build_instances now generate sorted ids, thus greenlighting the test suite\r\n\r\n* missed a couple\r\n\r\n* addressed PR comments\r\n\r\n* going for the ArrayExt route\r\n\r\n* completing the quadrifecta of checks\r\n\r\n* the unavoidable typed error revolution is on its way, and it's early\r\n\r\n* where we're going we don't need polars\r\n\r\n* update everything for the new APIs\r\n\r\n* error for unsupported clustering key types\r\n\r\n* clean up and actually testing our error paths\r\n\r\n* move those nasty internal tests into their own dirty corner\r\n\r\n* finally some high-level tests in here\r\n\r\n* i happen to like where this is going\r\n\r\n* shuffling things\r\n\r\n* demonstrating that implicit instances are somehow broken\r\n\r\n* fully working implicit clustering keys, but demonstrating a sorting issue somewhere\r\n\r\n* there is still something weird going on tho\r\n\r\n* latest_at behaving as one would expect\r\n\r\n* automatically cache generated cluster instances\r\n\r\n* time to clean up en masse\r\n\r\n* still want to put some stress on the bucketing\r\n\r\n* make ArrayExt::is_dense a little more friendly, just in case...\r\n\r\n* TimeType::format_range\r\n\r\n* independent latest_at query and using appropriate types everywhere\r\n\r\n* re_query: use polars/fmt in tests\r\n\r\n* re_query: remove implicit instances\r\n\r\n* fixing the u32 vs u64 instance drama\r\n\r\n* really starting to like how this looks\r\n\r\n* cluster-aware polars helpers :>\r\n\r\n* cleanin up tests\r\n\r\n* continuing cleanup and doc\r\n\r\n* updating visuals for this brave new world\r\n\r\n* docs\r\n\r\n* self-review\r\n\r\n* bruh\r\n\r\n* bruh...\r\n\r\n* ...\r\n\r\n* outdated comment\r\n\r\n* no reason to search for it multiple times\r\n\r\n* polars_helpers => polars_util for consistency's sake\r\n\r\n* addressing PR comments and a couple other things\r\n\r\n* xxx\r\n\r\n* post-merge fixes\r\n\r\n* TimeInt should be nohash\r\n\r\n* high-level polar range tools + making first half of range impl pass\r\n\r\n* implement the streaming half\r\n\r\n* finally defeated all demons\r\n\r\n* still passes?\r\n\r\n* it looks like we've made it out alive\r\n\r\n* polars util: join however you wish\r\n\r\n* fixed formatting\r\n\r\n* point2d's PoVs working as expected\r\n\r\n* passing full ranges\r\n\r\n* docs and such part 1, the semantics are hell\r\n\r\n* fixing the filtering mess in tests\r\n\r\n* me stoopid\r\n\r\n* polars docs\r\n\r\n* addressing the clones\r\n\r\n* xxx\r\n\r\n* missed a gazillon conflict somehow\r\n\r\n* polars util spring cleaning\r\n\r\n* do indicate and demonstrate that range_components is _not_ a real streaming join\r\n\r\n* fixed some comments\r\n\r\n* bruh\r\n\r\n* screw it, going for the real deal: full streaming joins\r\n\r\n* YESgit sgit s FINALLY SEMANTICS I ACTUALLY LIKE\r\n\r\n* yep yep i like this\r\n\r\n* I hereby declare myself _satisfied_\r\n\r\n* initiating the great cleanup\r\n\r\n* add notes for upcoming terminology pr\r\n\r\n* bringing IndexRowNr into the mix and slowly starting to fix terminology mess\r\n\r\n* improving range_components ergonomics\r\n\r\n* putting it all in self-reviewable state\r\n\r\n* self-review\r\n\r\n* add bench\r\n\r\n* xxx\r\n\r\n* addressing PR comments\r\n\r\n* first impl\r\n\r\n* ported simple_query() to simple_range\r\n\r\n* doc and such\r\n\r\n* added e2e example for range queries\r\n\r\n* self-review\r\n\r\n* support for new EntityView\r\n\r\n* demonstrating nasty edge-case with streaming-joins\r\n\r\n* update streaming-join merging rules to fix said edge case\r\n\r\n* mimicking range_components' new merging rules\r\n\r\n* implement PoV-less, always-yield lower-level API + adapt higher-level one\r\n\r\n* addressing PR comments\r\n\r\n* ported to new low-level APIs\r\n\r\n* xxx\r\n\r\n* addressed PR comments\r\n\r\n* self and not-so-self reviews\r\n\r\n* the future is quite literally here",
          "timestamp": "2023-01-02T18:50:20+01:00",
          "tree_id": "77f8620307f064630ffe29e3434bbfdfe573c94d",
          "url": "https://github.com/rerun-io/rerun/commit/1d28875673a49e26e94a02fbf727fc218c9e0332"
        },
        "date": 1672682513181,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 170871,
            "range": "± 1144",
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
            "value": 299,
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
            "value": 45826,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 984012092,
            "range": "± 5857099",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 351515,
            "range": "± 1547",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95383856,
            "range": "± 513603",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11312,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23146684,
            "range": "± 236515",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7909,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4381574,
            "range": "± 117545",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10687902,
            "range": "± 661819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15207799,
            "range": "± 956548",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36342832,
            "range": "± 949868",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 27691863,
            "range": "± 1768002",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 102563364,
            "range": "± 1046854",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 129161710,
            "range": "± 951038",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 262380439,
            "range": "± 1762644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 146318512,
            "range": "± 969580",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59214198,
            "range": "± 923106",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 201380477,
            "range": "± 1758582",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3458,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393779,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 400243,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 745873,
            "range": "± 4368",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 243846,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4550,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 264572,
            "range": "± 899",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 542300,
            "range": "± 1701",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 205247,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1662,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 210884,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4066392993,
            "range": "± 12559278",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1658457,
            "range": "± 23021",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1477736,
            "range": "± 5292",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16874,
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
          "id": "5d014da5fefbc6de0812ac21d3734461b1635996",
          "message": "Nicer formatting of the bounding box (#658)",
          "timestamp": "2023-01-02T19:31:26+01:00",
          "tree_id": "f40c2780ccfa1f028b9c5fc1f0a88f1e5fda0731",
          "url": "https://github.com/rerun-io/rerun/commit/5d014da5fefbc6de0812ac21d3734461b1635996"
        },
        "date": 1672685002454,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 170247,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 742,
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
            "value": 384,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46013,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1003035627,
            "range": "± 5926279",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 348834,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94625599,
            "range": "± 617473",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11359,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23134225,
            "range": "± 334337",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7914,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4369473,
            "range": "± 33047",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10331383,
            "range": "± 422899",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 14373445,
            "range": "± 376179",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34331866,
            "range": "± 453317",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 24808968,
            "range": "± 1330261",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 102977643,
            "range": "± 1412275",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 127906894,
            "range": "± 1142255",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 257079959,
            "range": "± 2216828",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 142835213,
            "range": "± 1079444",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 55183681,
            "range": "± 1276616",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 196445415,
            "range": "± 1797095",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3568,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 393165,
            "range": "± 6965",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 398390,
            "range": "± 2279",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 743988,
            "range": "± 7781",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 243802,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4589,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 263460,
            "range": "± 1311",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 536664,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 205834,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1670,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 211307,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 4152192531,
            "range": "± 84129204",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1659971,
            "range": "± 4474",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 1502040,
            "range": "± 3913",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16952,
            "range": "± 34",
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
          "id": "f96b395ee9748cc453c22020164b7b762d2508c9",
          "message": "`MsgId`-as-a-component (#655)\n\n* get is supposed to return a row, not a [row]\r\n\r\n* unwrap note\r\n\r\n* the bench too\r\n\r\n* self review\r\n\r\n* doc test also\r\n\r\n* and re_query ofc!\r\n\r\n* slicing is _very_ slow, don't do it if you don't have to\r\n\r\n* no more col_arrays in re_query\r\n\r\n* there's actually no need for concatenating at all\r\n\r\n* incrementally compute and cache bucket sizes\r\n\r\n* cleaning up and documenting existing limitations\r\n\r\n* introducing bucket retirement\r\n\r\n* issue ref\r\n\r\n* some more doc stuff\r\n\r\n* self-review\r\n\r\n* polars/fmt should always be there for tests\r\n\r\n* streamlining batch support\r\n\r\n* take list header into account\r\n\r\n* it's fine\r\n\r\n* self-review\r\n\r\n* just something i want to keep around for later\r\n\r\n* (un)wrapping lists is a bit slow... and slicing them is _extremely_ slow!\r\n\r\n* merge cmc/datastore/get_a_single_row (#590)\r\n\r\n* no more col_arrays in re_query\r\n\r\n* introducing the notion of clustering key, thankfully breaking all tests by design\r\n\r\n* making good use of that shiny new Instance component\r\n\r\n* merge cmc/datastore/get_rid_of_copies (#584)\r\n\r\n* missed one\r\n\r\n* introducing arrow_util with is_dense_array()\r\n\r\n* finding the clustering comp of the row... or creating it!\r\n\r\n* rebasin'\r\n\r\n* post rebase clean up\r\n\r\n* addressing PR comments, I hope\r\n\r\n* ensure that clustering components are properly sorted, failing the existing test suite\r\n\r\n* build_instances now generate sorted ids, thus greenlighting the test suite\r\n\r\n* missed a couple\r\n\r\n* addressed PR comments\r\n\r\n* going for the ArrayExt route\r\n\r\n* completing the quadrifecta of checks\r\n\r\n* the unavoidable typed error revolution is on its way, and it's early\r\n\r\n* where we're going we don't need polars\r\n\r\n* update everything for the new APIs\r\n\r\n* error for unsupported clustering key types\r\n\r\n* clean up and actually testing our error paths\r\n\r\n* move those nasty internal tests into their own dirty corner\r\n\r\n* finally some high-level tests in here\r\n\r\n* i happen to like where this is going\r\n\r\n* shuffling things\r\n\r\n* demonstrating that implicit instances are somehow broken\r\n\r\n* fully working implicit clustering keys, but demonstrating a sorting issue somewhere\r\n\r\n* there is still something weird going on tho\r\n\r\n* latest_at behaving as one would expect\r\n\r\n* automatically cache generated cluster instances\r\n\r\n* time to clean up en masse\r\n\r\n* still want to put some stress on the bucketing\r\n\r\n* make ArrayExt::is_dense a little more friendly, just in case...\r\n\r\n* TimeType::format_range\r\n\r\n* independent latest_at query and using appropriate types everywhere\r\n\r\n* re_query: use polars/fmt in tests\r\n\r\n* re_query: remove implicit instances\r\n\r\n* fixing the u32 vs u64 instance drama\r\n\r\n* really starting to like how this looks\r\n\r\n* cluster-aware polars helpers :>\r\n\r\n* cleanin up tests\r\n\r\n* continuing cleanup and doc\r\n\r\n* updating visuals for this brave new world\r\n\r\n* docs\r\n\r\n* self-review\r\n\r\n* bruh\r\n\r\n* bruh...\r\n\r\n* ...\r\n\r\n* outdated comment\r\n\r\n* no reason to search for it multiple times\r\n\r\n* polars_helpers => polars_util for consistency's sake\r\n\r\n* addressing PR comments and a couple other things\r\n\r\n* xxx\r\n\r\n* post-merge fixes\r\n\r\n* TimeInt should be nohash\r\n\r\n* high-level polar range tools + making first half of range impl pass\r\n\r\n* implement the streaming half\r\n\r\n* finally defeated all demons\r\n\r\n* still passes?\r\n\r\n* it looks like we've made it out alive\r\n\r\n* polars util: join however you wish\r\n\r\n* fixed formatting\r\n\r\n* point2d's PoVs working as expected\r\n\r\n* passing full ranges\r\n\r\n* docs and such part 1, the semantics are hell\r\n\r\n* fixing the filtering mess in tests\r\n\r\n* me stoopid\r\n\r\n* polars docs\r\n\r\n* addressing the clones\r\n\r\n* xxx\r\n\r\n* missed a gazillon conflict somehow\r\n\r\n* polars util spring cleaning\r\n\r\n* do indicate and demonstrate that range_components is _not_ a real streaming join\r\n\r\n* fixed some comments\r\n\r\n* bruh\r\n\r\n* screw it, going for the real deal: full streaming joins\r\n\r\n* YESgit sgit s FINALLY SEMANTICS I ACTUALLY LIKE\r\n\r\n* yep yep i like this\r\n\r\n* I hereby declare myself _satisfied_\r\n\r\n* initiating the great cleanup\r\n\r\n* add notes for upcoming terminology pr\r\n\r\n* bringing IndexRowNr into the mix and slowly starting to fix terminology mess\r\n\r\n* improving range_components ergonomics\r\n\r\n* putting it all in self-reviewable state\r\n\r\n* self-review\r\n\r\n* add bench\r\n\r\n* xxx\r\n\r\n* addressing PR comments\r\n\r\n* first impl\r\n\r\n* ported simple_query() to simple_range\r\n\r\n* doc and such\r\n\r\n* added e2e example for range queries\r\n\r\n* self-review\r\n\r\n* support for new EntityView\r\n\r\n* demonstrating nasty edge-case with streaming-joins\r\n\r\n* update streaming-join merging rules to fix said edge case\r\n\r\n* mimicking range_components' new merging rules\r\n\r\n* Demonstrating how insanely slow the obvious solution is\r\n\r\ndatastore/insert/batch/rects/insert\r\n            time:   [387.54 µs 387.98 µs 388.52 µs]\r\n            thrpt:  [25.739 Melem/s 25.775 Melem/s 25.804 Melem/s]\r\n     change:\r\n            time:   [+227.27% +227.92% +228.56%] (p = 0.00 < 0.05)\r\n            thrpt:  [-69.564% -69.505% -69.444%]\r\n            Performance has regressed.\r\n\r\n* it'd be a tiny bit better with some kind of splats...\r\n\r\ndatastore/insert/batch/rects/insert\r\n            time:   [284.35 µs 284.55 µs 284.86 µs]\r\n            thrpt:  [35.105 Melem/s 35.144 Melem/s 35.167 Melem/s]\r\n     change:\r\n            time:   [+137.45% +138.08% +138.52%] (p = 0.00 < 0.05)\r\n            thrpt:  [-58.075% -57.997% -57.885%]\r\n            Performance has regressed.\r\n\r\n* and now with MsgId being a full fledged component\r\n\r\ndatastore/insert/batch/rects/insert\r\n            time:   [180.84 µs 184.42 µs 188.96 µs]\r\n            thrpt:  [52.920 Melem/s 54.225 Melem/s 55.296 Melem/s]\r\n     change:\r\n            time:   [+1.0072% +2.1236% +3.3206%] (p = 0.00 < 0.05)\r\n            thrpt:  [-3.2139% -2.0795% -0.9972%]\r\n\r\n* stuff\r\n\r\n* bruh\r\n\r\n* implement PoV-less, always-yield lower-level API + adapt higher-level one\r\n\r\n* addressing PR comments\r\n\r\n* ported to new low-level APIs\r\n\r\n* xxx\r\n\r\n* addressed PR comments\r\n\r\n* self and not-so-self reviews\r\n\r\n* the future is quite literally here\r\n\r\n* some comments at the very least\r\n\r\n* msgid standing on its own\r\n\r\n* bruh",
          "timestamp": "2023-01-03T08:57:45+01:00",
          "tree_id": "23d4ff5f4c70599f93ba7b3bdcb7bd4a812e5d9e",
          "url": "https://github.com/rerun-io/rerun/commit/f96b395ee9748cc453c22020164b7b762d2508c9"
        },
        "date": 1672733559305,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 266210,
            "range": "± 1696",
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
            "value": 303,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 388,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45778,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 873105199,
            "range": "± 3890833",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 377395,
            "range": "± 3016",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 86653388,
            "range": "± 328829",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11346,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23160846,
            "range": "± 154349",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7964,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4397880,
            "range": "± 122401",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11768094,
            "range": "± 643992",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16560920,
            "range": "± 1063426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36718773,
            "range": "± 453177",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48845244,
            "range": "± 450413",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125582643,
            "range": "± 995706",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152455399,
            "range": "± 971057",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 326167008,
            "range": "± 1396598",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177202271,
            "range": "± 709372",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69161851,
            "range": "± 822769",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 242254207,
            "range": "± 1384172",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3532,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 412681,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 418798,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 720084,
            "range": "± 2281",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 321071,
            "range": "± 1204",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6208,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 362613,
            "range": "± 1334",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711596,
            "range": "± 2606",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344477,
            "range": "± 914",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2153,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 349039,
            "range": "± 1061",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5821422963,
            "range": "± 11800691",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1688238,
            "range": "± 13726",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2501077,
            "range": "± 16413",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16795,
            "range": "± 61",
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
          "id": "7f92b591e8251269a5119aeda52ef30b9c51cd6b",
          "message": "Full Points3D rendering with Arrow path (#660)",
          "timestamp": "2023-01-03T11:54:54+01:00",
          "tree_id": "c6b511306815fdd1d17917d16bbafbf1df026a53",
          "url": "https://github.com/rerun-io/rerun/commit/7f92b591e8251269a5119aeda52ef30b9c51cd6b"
        },
        "date": 1672744083233,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 264471,
            "range": "± 1203",
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
            "value": 305,
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
            "value": 45661,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 844817027,
            "range": "± 3480534",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 355917,
            "range": "± 4602",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 87063918,
            "range": "± 363519",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11346,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23208245,
            "range": "± 102726",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7933,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4738166,
            "range": "± 313290",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13049504,
            "range": "± 438560",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 18193346,
            "range": "± 1097442",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37660205,
            "range": "± 384788",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49472994,
            "range": "± 478517",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124510077,
            "range": "± 1079789",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156402966,
            "range": "± 2397917",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 330463623,
            "range": "± 2680557",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179599665,
            "range": "± 980700",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71049487,
            "range": "± 835283",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 245620732,
            "range": "± 1539287",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3510,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 387215,
            "range": "± 880",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 394171,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 732775,
            "range": "± 4741",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 321664,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6026,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348262,
            "range": "± 2228",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 704649,
            "range": "± 3518",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349156,
            "range": "± 1648",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2154,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355194,
            "range": "± 1874",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5848157970,
            "range": "± 20722948",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1692681,
            "range": "± 25938",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2521570,
            "range": "± 34940",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16758,
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
          "id": "e8d743c821aad1d75e3e39a60ffe47225e9b8a60",
          "message": "re_datastore: testing/specifying `latest_components_at` :warning:  (#662)\n\n* testing latest_components_at\r\n\r\n* the trickiest of them all\r\n\r\n* cranky",
          "timestamp": "2023-01-03T15:13:25+01:00",
          "tree_id": "67a7c63a0e5c39f2dff3482f932efc85410c78ac",
          "url": "https://github.com/rerun-io/rerun/commit/e8d743c821aad1d75e3e39a60ffe47225e9b8a60"
        },
        "date": 1672755993825,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 272801,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 710,
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
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44210,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1000462289,
            "range": "± 6857634",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 356140,
            "range": "± 6871",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94532571,
            "range": "± 541359",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11382,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23712629,
            "range": "± 188324",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7945,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4383981,
            "range": "± 123814",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11107846,
            "range": "± 581398",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15304519,
            "range": "± 905317",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35057820,
            "range": "± 968934",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49054011,
            "range": "± 1065937",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137708001,
            "range": "± 1462436",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164255358,
            "range": "± 1358897",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354737012,
            "range": "± 2134810",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188765512,
            "range": "± 1036770",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 79484487,
            "range": "± 1459358",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263107038,
            "range": "± 1776512",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3529,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 381131,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 385545,
            "range": "± 1720",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 734592,
            "range": "± 1078",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 316438,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6148,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351490,
            "range": "± 1382",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 702803,
            "range": "± 2400",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352872,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2130,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356576,
            "range": "± 1464",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6874854387,
            "range": "± 27952545",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1656604,
            "range": "± 14043",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2573582,
            "range": "± 10540",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16225,
            "range": "± 97",
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
          "id": "996012fc9be950650177f7f8cf4fe527100d5ccd",
          "message": "Upgrade arrow2, arrow2_convert and polars (#665)\n\n* Upgrade arrow2, arrow2_convert and polars including unmerged/unreleased PRs",
          "timestamp": "2023-01-04T13:32:06+01:00",
          "tree_id": "4bb741ed2c3d9c43114813c6955f70e1e41f7be2",
          "url": "https://github.com/rerun-io/rerun/commit/996012fc9be950650177f7f8cf4fe527100d5ccd"
        },
        "date": 1672836398947,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 275899,
            "range": "± 3696",
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
            "value": 45278,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 941043825,
            "range": "± 6919329",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 372120,
            "range": "± 3787",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95493615,
            "range": "± 531217",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11478,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23881484,
            "range": "± 30674",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7956,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4968611,
            "range": "± 278247",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13838820,
            "range": "± 385900",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 20554480,
            "range": "± 922108",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 40139140,
            "range": "± 272661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53763709,
            "range": "± 623381",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138735682,
            "range": "± 1345995",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 169444469,
            "range": "± 916652",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 363533270,
            "range": "± 2011150",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190675666,
            "range": "± 927609",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 79889872,
            "range": "± 1072545",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 267454225,
            "range": "± 1945184",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3380,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 386571,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 391285,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 742352,
            "range": "± 3231",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 325110,
            "range": "± 578",
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
            "value": 352650,
            "range": "± 1469",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 717522,
            "range": "± 3683",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346710,
            "range": "± 1303",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2128,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357838,
            "range": "± 1430",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6863558650,
            "range": "± 38423548",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1690461,
            "range": "± 25183",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2692122,
            "range": "± 34525",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13016,
            "range": "± 29",
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
          "id": "034f10366d75c271a9e25d6645d5fe8c5f2d3173",
          "message": "end-to-end arrow-based scalars / time-series (#666)\n\n* add scalar component\r\n\r\n* add scalarplotprops component\r\n\r\n* re_query: visit4 & visit5\r\n\r\n* building the scene\r\n\r\n* dispatching to plot view\r\n\r\n* complete rust example\r\n\r\n* python bindings\r\n\r\n* doesnt look like it's used but still",
          "timestamp": "2023-01-04T14:30:03+01:00",
          "tree_id": "c359361f163c8de9fe486f12ab74718398f955da",
          "url": "https://github.com/rerun-io/rerun/commit/034f10366d75c271a9e25d6645d5fe8c5f2d3173"
        },
        "date": 1672839874930,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 281468,
            "range": "± 2667",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 712,
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
            "value": 372,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45102,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1241247556,
            "range": "± 15165627",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 375319,
            "range": "± 7144",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 116090396,
            "range": "± 731483",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11495,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 26422364,
            "range": "± 306849",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7972,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 6664583,
            "range": "± 1166702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 17089648,
            "range": "± 576862",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 22787506,
            "range": "± 2643036",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 43060939,
            "range": "± 1065491",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 66739347,
            "range": "± 1081415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 174560698,
            "range": "± 1886650",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 207816459,
            "range": "± 6067174",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 449207605,
            "range": "± 5154956",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 221086532,
            "range": "± 1644215",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 114545412,
            "range": "± 1612205",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 325496189,
            "range": "± 2707486",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3446,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 389407,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 395509,
            "range": "± 10526",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 748744,
            "range": "± 7392",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 333959,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6230,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 372267,
            "range": "± 6602",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 749704,
            "range": "± 17782",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 364502,
            "range": "± 5529",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2116,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 364375,
            "range": "± 11180",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 9976262179,
            "range": "± 111747850",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1740537,
            "range": "± 151648",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2719421,
            "range": "± 63068",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 12919,
            "range": "± 14",
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
          "id": "b839da522909cfa5e0b326bc984a94d21e537c35",
          "message": "fix merge race between #665 & #666 (#670)\n\n* all the new derives\r\n\r\n* arrow2-convert with windows patch\r\n\r\n* Revert \"all the new derives\"\r\n\r\nThis reverts commit a2f5cf4a5fef4dcdee39c056009a3e3cb709f0ea.\r\n\r\n* dude please run the CI???\r\n\r\nThis reverts commit c0ef309ca9eb0d8d4f9005fbc03d5fab133c4300.",
          "timestamp": "2023-01-04T15:45:13+01:00",
          "tree_id": "fe3a0945528bd2d353f95bc93ece88d6fc7de838",
          "url": "https://github.com/rerun-io/rerun/commit/b839da522909cfa5e0b326bc984a94d21e537c35"
        },
        "date": 1672844260438,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 271022,
            "range": "± 1783",
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
            "value": 305,
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
            "value": 46012,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 854075445,
            "range": "± 5817341",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 357409,
            "range": "± 1564",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 86773613,
            "range": "± 325383",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11446,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22818093,
            "range": "± 188181",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7985,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4331351,
            "range": "± 64575",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11176053,
            "range": "± 448312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15500556,
            "range": "± 937565",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35464410,
            "range": "± 624032",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49283822,
            "range": "± 749976",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126132857,
            "range": "± 960380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 156440977,
            "range": "± 1414541",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332162445,
            "range": "± 1752232",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180181668,
            "range": "± 1309728",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71589682,
            "range": "± 978238",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 245915978,
            "range": "± 1611514",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3376,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 423176,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 430502,
            "range": "± 697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725740,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 323308,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6277,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366707,
            "range": "± 1750",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715067,
            "range": "± 2036",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350408,
            "range": "± 1448",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2169,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356378,
            "range": "± 1043",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5934314503,
            "range": "± 18769024",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1623048,
            "range": "± 8501",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2576033,
            "range": "± 10728",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13779,
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
          "id": "602871211d7ff4023a34288ce3317260d47d40b0",
          "message": "Unify spatial picking & fix \"3d in 2d\" picking (#663)\n\n* 3d picking ui is now almost identical to 2d picking ui\r\n* picking can now always handle transparent objects\r\n* move picking to its own module\r\n* fix 2d labels not showing\r\n* 2d boxes are no longer hovered like rects",
          "timestamp": "2023-01-04T15:57:48+01:00",
          "tree_id": "8f31c92589f00cc04a234184e1f84ab42576f7ca",
          "url": "https://github.com/rerun-io/rerun/commit/602871211d7ff4023a34288ce3317260d47d40b0"
        },
        "date": 1672845050476,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 280132,
            "range": "± 3568",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 720,
            "range": "± 2",
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
            "value": 371,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46090,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 986058425,
            "range": "± 4463992",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 369624,
            "range": "± 5831",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95454744,
            "range": "± 482687",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11455,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23751891,
            "range": "± 140742",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7986,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4554763,
            "range": "± 205564",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 13018109,
            "range": "± 745989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 17416457,
            "range": "± 1440900",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37254629,
            "range": "± 618212",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53658543,
            "range": "± 745098",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139683030,
            "range": "± 1351471",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167980934,
            "range": "± 1829984",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 362087694,
            "range": "± 2186589",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190285867,
            "range": "± 1080668",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 83027261,
            "range": "± 977715",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 266464408,
            "range": "± 2710491",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3368,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 422729,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 429743,
            "range": "± 1299",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725510,
            "range": "± 2370",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 322266,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6281,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 368357,
            "range": "± 1991",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713331,
            "range": "± 3530",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349118,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2156,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357227,
            "range": "± 1990",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6900745027,
            "range": "± 26101239",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1648018,
            "range": "± 23818",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2645914,
            "range": "± 56318",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13738,
            "range": "± 30",
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
          "id": "14a9cc8fa343863dea0a2fa5b0e2660fdd608af9",
          "message": "Splat colors and radii on the client side as necessary (#671)",
          "timestamp": "2023-01-04T17:48:45+01:00",
          "tree_id": "63885f184d6906b2859fa5b77225b05cf2cea7a6",
          "url": "https://github.com/rerun-io/rerun/commit/14a9cc8fa343863dea0a2fa5b0e2660fdd608af9"
        },
        "date": 1672851708566,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 272658,
            "range": "± 486",
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
            "value": 308,
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
            "value": 46322,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 968213631,
            "range": "± 10992011",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 362145,
            "range": "± 1577",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 94516426,
            "range": "± 465105",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11430,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23020798,
            "range": "± 352888",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7988,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4401474,
            "range": "± 85096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11276028,
            "range": "± 912949",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15064909,
            "range": "± 869574",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 35204850,
            "range": "± 980816",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52293051,
            "range": "± 1100752",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139092138,
            "range": "± 1324885",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166848973,
            "range": "± 1057556",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 357023279,
            "range": "± 1742375",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189910421,
            "range": "± 903527",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80875022,
            "range": "± 1310206",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264471847,
            "range": "± 1805072",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3571,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 422942,
            "range": "± 2912",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 430554,
            "range": "± 1654",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725993,
            "range": "± 5210",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 321971,
            "range": "± 1791",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6357,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 361103,
            "range": "± 2006",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 710484,
            "range": "± 4672",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348365,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2141,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356813,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6877712124,
            "range": "± 20267372",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1648228,
            "range": "± 13721",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2555962,
            "range": "± 30581",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13786,
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
          "id": "711a7653cc8a7082d922c040eeae076f5477b441",
          "message": "Add radius to log_point API for arrow (#673)",
          "timestamp": "2023-01-04T18:13:52+01:00",
          "tree_id": "6589b0e550dcf16bcb283739356fea3635ee77a5",
          "url": "https://github.com/rerun-io/rerun/commit/711a7653cc8a7082d922c040eeae076f5477b441"
        },
        "date": 1672853272935,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 270357,
            "range": "± 1324",
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
            "value": 304,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 378,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 46232,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 857647174,
            "range": "± 6404420",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 348001,
            "range": "± 3032",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 87883968,
            "range": "± 423988",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11643,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 21904924,
            "range": "± 381978",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7940,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4321981,
            "range": "± 117513",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 10802729,
            "range": "± 343440",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15201630,
            "range": "± 442286",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 33990134,
            "range": "± 679377",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46563265,
            "range": "± 1177546",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 127924397,
            "range": "± 1402404",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 152530632,
            "range": "± 1849146",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327654196,
            "range": "± 1628895",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177461911,
            "range": "± 1438796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68581118,
            "range": "± 922822",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 247465728,
            "range": "± 2125907",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3348,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 418524,
            "range": "± 3584",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423001,
            "range": "± 3771",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 722773,
            "range": "± 5790",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 314492,
            "range": "± 3339",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6263,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360604,
            "range": "± 2625",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 699572,
            "range": "± 5275",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344411,
            "range": "± 2598",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2126,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352757,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5836563030,
            "range": "± 17364516",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1583588,
            "range": "± 15719",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2524084,
            "range": "± 17118",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13505,
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
          "id": "b41ec9847a547316ddae26f8c743ddebad60ee12",
          "message": "Replace latest_components_at with all_components (#664)\n\nAs demonstrated by @teh-cmc in #662, latest_components_at had some undesirable behavior. This replaces it with all_components, which is more explicit and produces the behavior we expect in the UI even in cases of pathological bucket-splits.",
          "timestamp": "2023-01-04T21:38:12+01:00",
          "tree_id": "fdbd3f66a39cf2183d05a0550a5e2a507de801f5",
          "url": "https://github.com/rerun-io/rerun/commit/b41ec9847a547316ddae26f8c743ddebad60ee12"
        },
        "date": 1672865574148,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 276668,
            "range": "± 1285",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 722,
            "range": "± 4",
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
            "value": 372,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45367,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 992080991,
            "range": "± 3861613",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 367743,
            "range": "± 1676",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95176392,
            "range": "± 373038",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11445,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23723672,
            "range": "± 199642",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 8013,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4335634,
            "range": "± 94431",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11389869,
            "range": "± 543263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16853558,
            "range": "± 733469",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36582122,
            "range": "± 669453",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52981719,
            "range": "± 719951",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141497659,
            "range": "± 1309828",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165469951,
            "range": "± 753171",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358570726,
            "range": "± 1350026",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188511868,
            "range": "± 888819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81687664,
            "range": "± 1015105",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264751747,
            "range": "± 1595567",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3440,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 423376,
            "range": "± 1275",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 431025,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 729380,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 320884,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6270,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360334,
            "range": "± 1322",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713431,
            "range": "± 2935",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349975,
            "range": "± 1023",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2139,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356596,
            "range": "± 1365",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6968394670,
            "range": "± 12945999",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1603275,
            "range": "± 12078",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2629708,
            "range": "± 11512",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13324,
            "range": "± 86",
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
          "id": "f8fc9fba74e30e5be0a00c7674945e1c7f4574f5",
          "message": "Make tensor and image logging more lenient (#634)\n\n* make _log_tensor compatible with pytorch tensors\r\n\r\n* Break out name extraction for pytorch tensors\r\n\r\n* Make image logging more lenient\r\n\r\n* Send warning to rerun instead of raising exception\r\n\r\n* log (depth) image handles non numpy arrays\r\n\r\n* Send SDK warnings to python logging as well\r\n\r\n* Drop \"up\" if \"xyz\" also given\r\n\r\n\r\nCo-authored-by: Nikolaus West <niko@rerun.io>",
          "timestamp": "2023-01-04T22:02:09+01:00",
          "tree_id": "6ce6920c511a4e786b0efb23f72820d0140fdb89",
          "url": "https://github.com/rerun-io/rerun/commit/f8fc9fba74e30e5be0a00c7674945e1c7f4574f5"
        },
        "date": 1672866902850,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 273602,
            "range": "± 1067",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 716,
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
            "value": 379,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45075,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 965813925,
            "range": "± 4623852",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 373926,
            "range": "± 2152",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 95399811,
            "range": "± 451519",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11474,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23707747,
            "range": "± 185187",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7956,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4455460,
            "range": "± 312634",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 12605556,
            "range": "± 797196",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16311426,
            "range": "± 1365567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 37659409,
            "range": "± 607698",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 53098519,
            "range": "± 773889",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138491896,
            "range": "± 1387243",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166312158,
            "range": "± 1592016",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 359387120,
            "range": "± 2481840",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188801361,
            "range": "± 883462",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 82387802,
            "range": "± 1139567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264504733,
            "range": "± 1763284",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3545,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 422938,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 430514,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 725022,
            "range": "± 777",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 321510,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6247,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 367770,
            "range": "± 1765",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 715013,
            "range": "± 2818",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 353109,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2152,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354903,
            "range": "± 1395",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7095751452,
            "range": "± 24143749",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1641599,
            "range": "± 15491",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2625671,
            "range": "± 12357",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13415,
            "range": "± 139",
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
          "id": "21326f4edab512b047cfb8e7511d0481c12e4cbf",
          "message": "Stable diffusion example (#642)\n\n* Remove unused imports from the tracking example\r\n\r\n* Add stable diffusion example\r\n\r\n* Update defaults for more fun out of the box image",
          "timestamp": "2023-01-04T22:16:58+01:00",
          "tree_id": "ab8a7f461d5694df9c798928e5a3f9ca1d209a63",
          "url": "https://github.com/rerun-io/rerun/commit/21326f4edab512b047cfb8e7511d0481c12e4cbf"
        },
        "date": 1672867893989,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 271246,
            "range": "± 3272",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 715,
            "range": "± 4",
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
            "value": 366,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 44555,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 993599366,
            "range": "± 3466295",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 358097,
            "range": "± 2205",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 93807823,
            "range": "± 813016",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11297,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22867417,
            "range": "± 310420",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7867,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4317657,
            "range": "± 100406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11043267,
            "range": "± 366864",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 15412265,
            "range": "± 502232",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 34633684,
            "range": "± 1047603",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49476566,
            "range": "± 1002929",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137089649,
            "range": "± 1533415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164304897,
            "range": "± 1239398",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354792773,
            "range": "± 1837796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186167415,
            "range": "± 1612847",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 80312670,
            "range": "± 1288567",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 261184571,
            "range": "± 2237268",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3420,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 423976,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 423928,
            "range": "± 3974",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 715812,
            "range": "± 6780",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 317630,
            "range": "± 3724",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6151,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363016,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 699968,
            "range": "± 6605",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350320,
            "range": "± 1822",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2125,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352069,
            "range": "± 2283",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6955334236,
            "range": "± 18335487",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1564832,
            "range": "± 18589",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2526251,
            "range": "± 20617",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13175,
            "range": "± 171",
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
          "id": "1c5f5b5a5e1ba5d03f523fa6aec6a9d49d29aa11",
          "message": "Fix a bug that meant we never sqeezed images (#679)\n\nCo-authored-by: Nikolaus West <niko@rerun.io>",
          "timestamp": "2023-01-05T10:00:08+01:00",
          "tree_id": "79ff6b5d615529f589dcc3ddaef668846f5b7b9e",
          "url": "https://github.com/rerun-io/rerun/commit/1c5f5b5a5e1ba5d03f523fa6aec6a9d49d29aa11"
        },
        "date": 1672909994968,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 273519,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 717,
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
            "value": 373,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 45018,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1004110432,
            "range": "± 2834395",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 363368,
            "range": "± 1380",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97571948,
            "range": "± 494739",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11465,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 23485118,
            "range": "± 163666",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 7998,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/generate_messages",
            "value": 4381348,
            "range": "± 88214",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_log_msg",
            "value": 11692954,
            "range": "± 652884",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/encode_total",
            "value": 16454384,
            "range": "± 547068",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_classic/decode_total",
            "value": 36221718,
            "range": "± 422359",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52801391,
            "range": "± 697133",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138181909,
            "range": "± 1258869",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165463963,
            "range": "± 909338",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358192816,
            "range": "± 1381629",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188514682,
            "range": "± 1727298",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 81470359,
            "range": "± 1085488",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263870722,
            "range": "± 1635571",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/generate_messages",
            "value": 3393,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_log_msg",
            "value": 424639,
            "range": "± 2170",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/encode_total",
            "value": 429600,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_classic/decode_total",
            "value": 726235,
            "range": "± 1528",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 318800,
            "range": "± 1381",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6268,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359710,
            "range": "± 1175",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 719996,
            "range": "± 2041",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350286,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2147,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352989,
            "range": "± 1081",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6989426775,
            "range": "± 9272560",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1650507,
            "range": "± 9370",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2648515,
            "range": "± 10267",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 13364,
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
      }
    ]
  }
}