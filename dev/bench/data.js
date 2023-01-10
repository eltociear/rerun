window.BENCHMARK_DATA = {
  "lastUpdate": 1673361783998,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
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
      }
    ]
  }
}