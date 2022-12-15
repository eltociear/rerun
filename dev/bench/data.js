window.BENCHMARK_DATA = {
  "lastUpdate": 1671108756024,
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
          "id": "fe1379eebdb03a14a2e8ab67e2d3ebe3dd269a78",
          "message": "Configure Github Actions Benchmark runner",
          "timestamp": "2022-12-12T12:44:52Z",
          "url": "https://github.com/rerun-io/rerun/pull/530/commits/fe1379eebdb03a14a2e8ab67e2d3ebe3dd269a78"
        },
        "date": 1671108754977,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/batch/rects/insert",
            "value": 1668381,
            "range": "± 11999",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/batch/rects/query",
            "value": 30824,
            "range": "± 7183",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/insert",
            "value": 1006694542,
            "range": "± 9657585",
            "unit": "ns/iter"
          },
          {
            "name": "obj_mono_points/query",
            "value": 377787,
            "range": "± 2453",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/insert",
            "value": 97524231,
            "range": "± 708884",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points/query",
            "value": 11246,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/insert",
            "value": 22913445,
            "range": "± 267189",
            "unit": "ns/iter"
          },
          {
            "name": "obj_batch_points_sequential/query",
            "value": 8609,
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
      }
    ]
  }
}