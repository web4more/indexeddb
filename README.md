![🚧 Under construction 👷‍♂️](https://i.imgur.com/LEP2R3N.png)

# `indexedDB` for Node.js

🖥️ Node.js `indexedDB` API using an SQLite backend

<div align="center">

![](https://picsum.photos/600/400)

</div>

📜 Implements the Indexedb Database API 3.0 spec \
💱 Properly handles `.transaction()` \
🔑 Provides "origin-keyed" `indexedDB` polyfill \
🧪 Uses web-platform-tests for IndexedDB

## Installation

## Usage

```js
import "@jcbhmr/indexeddb.node";
import { createServerAdapter } from '@whatwg-node/server'
import { createServer } from "node:http"

const dbRequest = indexedDB.open("db", 1);
dbRequest.onugradeneeded = () => {
  const db = dbRequest.result;
  const store = db.createObjectStore("store");
  objectStore.createIndex("email", "email", { unique: false });
};
const db = await new Promise((resolve, reject) => {
  dbRequest.onsuccess = () => resolve(dbRequest.result);
  dbRequest.onerror = () => reject(dbRequest.error);
});

const tx = db.transaction("store")
const store = tx.objectStore("store")
store.add({ name: "Ada Lovelace", email: "ada@example.org" })
await new Promise((resolve, reject) => {
  tx.oncomplete = () => resolve()
  tx.onerror = () => reject(tx.error)
  tx.onabort = () => reject(tx.error)
})
```
