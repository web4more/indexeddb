## How it works

This package uses an SQLite backend. SQLite supports only one database per file.
This is roughly equivalent to the `IDBDatabase` concept in the spec. Each table
inside said database (`.sqlite` file) is an `IDBObjectStore`.

Similarily, you can use the `IDBIndex` class to create indexes on the object
store. These indexes are backed by SQLite indexes.

The `IDBTransaction` class is used to manage transactions. Each transaction is
backed by an SQLite transaction over the `IDBDatabase` connection.

For instance, here's how the SQL works on the backend for a basic `open()` and `.getAll()` call:

```js
const dbRequest = indexedDB.open("mydb");
const db = await new Promise((resolve, reject) => {
  dbRequest.onsuccess = () => resolve(dbRequest.result);
  dbRequest.onerror = () => reject(dbRequest.error);
});

const tx = db.transaction("mystore");
const store = tx.objectStore("mystore");
const all = await new Promise((resolve, reject) => {
  const request = store.getAll();
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});

console.log(all);
//=> [ { id: 1, name: "foo" }, { id: 2, name: "bar" } ]
```

```sql

