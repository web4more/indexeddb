```
@jcbhmr ➜ /workspaces/indexeddb.node (main) $ npx wpt-runner --help
wpt-runner <path>

Runs the web platform tests at the given path, e.g. wpt/dom/nodes/

Options:
      --help      Show help                                            [boolean]
      --version   Show version number                                  [boolean]
  -u, --root-url  The relative URL path for the tests at <path>, e.g. dom/nodes/
                                                                        [string]
  -s, --setup     The filename of a setup function module               [string]
```

```sh
npx wpt-runner test/wpt-IndexedDB
```
