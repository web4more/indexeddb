import { openAsBlob } from "node:fs";
import "@jcbhmr/indexeddb.node";

const dbRequest = indexedDB.open("db", 1);
dbRequest.onblocked = () => {
  console.debug("Blocked!");
};
dbRequest.onupgradeneeded = () => {
  const db = dbRequest.result;
  const store = db.createObjectStore("store");
  store.put("Hello world!");
  store.put({ hello: "world" });
};
const db = await new Promise((resolve, reject) => {
  dbRequest.onsuccess = () => resolve(dbRequest.result);
  dbRequest.onerror = () => reject(dbRequest.error);
});

async function generateResponse(request) {
  const url = new URL(request.url);

  if (request.mode === "GET" && url.pathname === "/") {
    const blob = await openAsBlob("index.html", { type: "text/html" });
    return new Response(blob);
  } //
  else if (request.mode === "POST" && url.pathname === "/api/add") {
    const json = await request.json();
    const tx = db.transaction("store");
    const store = tx.objectStore("store");
    store.add(json);
    await new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
    return new Response("Added!", { status: 201 });
  } //
  else if (request.mode === "GET" && url.pathname === "/api/getAll") {
    const tx = db.transaction("store");
    const store = tx.objectStore("store");
    const allRequest = store.getAll();
    const all = await new Promise((resolve, reject) => {
      allRequest.onsuccess = () => resolve(allRequest.result);
      allRequest.onerror = () => reject(allRequest.error);
    });
    return new Response.json(all);
  } //
  else {
    return new Response("Not found", { status: 404 });
  }
}

globalThis.addEventListener("fetch", (event) =>
  event.respondWith(generateResponse(event.request))
);
