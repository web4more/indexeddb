/**
 * This is a recreation of the IDL things that are defined in the API spec. We
 * are exporting the non-global things like `IDBReqestReadyState` as types only.
 * The global things like `indexedDB` are exported as values. Note that if the
 * `indexedDB` property of the window were a getter, we would need to do a bit
 * more cajolling to make it so that `indexedDB` wasn't "gotten" (trigger the
 * getter) until a `Proxy` wrapper told it to "get". But since it's not, we can
 * just export it as a value. 😊
 *
 * @file
 * @see https://w3c.github.io/IndexedDB/#idl-index
 */

export { default as IDBRequest } from "./IDBRequest";
export type { default as IDBRequestReadyState } from "./IDBRequestReadyState";
export { default as IDBOpenRequest } from "./IDBOpenRequest";
export { default as IDBVersionChangeEvent } from "./IDBVersionChangeEvent";
export type { default as IDBVersionChangeEventInit } from "./IDBVersionChangeEventInit";
export { default as indexedDB } from "./indexedDB";
export { default as IDBFactory } from "./IDBFactory";
export type { default as IDBDatabaseInfo } from "./IDBDatabaseInfo";
export { default as IDBDatabase } from "./IDBDatabase";
export type { default as IDBTransactionDurability } from "./IDBTransactionDurability";
export type { default as IDBTransactionOptions } from "./IDBTransactionOptions";
export type { default as IDBObjectStoreParams } from "./IDBObjectStoreParams";
export { default as IDBObjectStore } from "./IDBObjectStore";
export type { default as IDBIndexParameters } from "./IDBIndexParameters";
export { default as IDBIndex } from "./IDBIndex";
export { default as IDBKeyRange } from "./IDBKeyRange";
export { default as IDBCursor } from "./IDBCursor";
export type { default as IDBCursorDirection } from "./IDBCursorDirection";
export { default as IDBCursorWithValue } from "./IDBCursorWithValue";
export { default as IDBTransaction } from "./IDBTransaction";
export type { default as IDBTransactionMode } from "./IDBTransactionMode";
