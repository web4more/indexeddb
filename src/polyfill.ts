/**
 * This file is exposed as `@jcbhmr/indexeddb.node/polyfill.js` and is intended
 * to apply the polyfill to the global scope **unconditionally**. This is done a
 * bit non-spec-compliantly, since we aren't adding these things to the `Window`
 * prototype, but instead just adding them to the global scope. This is,
 * however, more compatible with the way that Node.js users expect things to
 * work.
 *
 * Use the main export of this package if you just want to import these values
 * locally.
 *
 * @file
 * @see https://w3c.github.io/IndexedDB/#idl-index
 */

import IDBRequest from "./IDBRequest";
import type IDBRequestReadyState from "./IDBRequestReadyState";
import IDBOpenRequest from "./IDBOpenRequest";
import IDBVersionChangeEvent from "./IDBVersionChangeEvent";
import type IDBVersionChangeEventInit from "./IDBVersionChangeEventInit";
import indexedDB from "./indexedDB";
import IDBFactory from "./IDBFactory";
import type IDBDatabaseInfo from "./IDBDatabaseInfo";
import IDBDatabase from "./IDBDatabase";
import type IDBTransactionDurability from "./IDBTransactionDurability";
import type IDBTransactionOptions from "./IDBTransactionOptions";
import type IDBObjectStoreParams from "./IDBObjectStoreParams";
import IDBObjectStore from "./IDBObjectStore";
import type IDBIndexParameters from "./IDBIndexParameters";
import IDBIndex from "./IDBIndex";
import IDBKeyRange from "./IDBKeyRange";
import IDBCursor from "./IDBCursor";
import type IDBCursorDirection from "./IDBCursorDirection";
import IDBCursorWithValue from "./IDBCursorWithValue";
import IDBTransaction from "./IDBTransaction";
import type IDBTransactionMode from "./IDBTransactionMode";

type IDBRequest_ = IDBRequest;
type IDBRequestT = typeof IDBRequest;
type IDBRequestReadyState_ = IDBRequestReadyState;
type IDBOpenRequest_ = IDBOpenRequest;
type IDBOpenRequestT = typeof IDBOpenRequest;
type IDBVersionChangeEvent_ = IDBVersionChangeEvent;
type IDBVersionChangeEventT = typeof IDBVersionChangeEvent;
type IDBVersionChangeEventInit_ = IDBVersionChangeEventInit;
type indexedDBT = typeof indexedDB;
type IDBFactory_ = IDBFactory;
type IDBFactoryT = typeof IDBFactory;
type IDBDatabaseInfo_ = IDBDatabaseInfo;
type IDBDatabase_ = IDBDatabase;
type IDBDatabaseT = typeof IDBDatabase;
type IDBTransactionDurability_ = IDBTransactionDurability;
type IDBTransactionOptions_ = IDBTransactionOptions;
type IDBObjectStoreParams_ = IDBObjectStoreParams;
type IDBObjectStore_ = IDBObjectStore;
type IDBObjectStoreT = typeof IDBObjectStore;
type IDBIndexParameters_ = IDBIndexParameters;
type IDBIndex_ = IDBIndex;
type IDBIndexT = typeof IDBIndex;
type IDBKeyRange_ = IDBKeyRange;
type IDBCursor_ = IDBCursor;
type IDBCursorT = typeof IDBCursor;
type IDBCursorDirection_ = IDBCursorDirection;
type IDBCursorWithValue_ = IDBCursorWithValue;
type IDBTransaction_ = IDBTransaction;
type IDBTransactionT = typeof IDBTransaction;
type IDBTransactionMode_ = IDBTransactionMode;
declare global {
  type IDBRequest = IDBRequest_;
  var IDBRequest: IDBRequestT;
  type IDBRequestReadyState = IDBRequestReadyState_;
  type IDBOpenRequest = IDBOpenRequest_;
  var IDBOpenRequest: IDBOpenRequestT;
  type IDBVersionChangeEvent = IDBVersionChangeEvent_;
  var IDBVersionChangeEvent: IDBVersionChangeEventT;
  type IDBVersionChangeEventInit = IDBVersionChangeEventInit_;
  var indexedDB: indexedDBT;
  type IDBFactory = IDBFactory_;
  var IDBFactory: IDBFactoryT;
  type IDBDatabaseInfo = IDBDatabaseInfo_;
  type IDBDatabase = IDBDatabase_;
  var IDBDatabase: IDBDatabaseT;
  type IDBTransactionDurability = IDBTransactionDurability_;
  type IDBTransactionOptions = IDBTransactionOptions_;
  type IDBObjectStoreParams = IDBObjectStoreParams_;
  type IDBObjectStore = IDBObjectStore_;
  var IDBObjectStore: IDBObjectStoreT;
  type IDBIndexParameters = IDBIndexParameters_;
  type IDBIndex = IDBIndex_;
  var IDBIndex: IDBIndexT;
  type IDBKeyRange = IDBKeyRange_;
  type IDBCursor = IDBCursor_;
  var IDBCursor: IDBCursorT;
  type IDBCursorDirection = IDBCursorDirection_;
  type IDBCursorWithValue = IDBCursorWithValue_;
  type IDBTransaction = IDBTransaction_;
  var IDBTransaction: IDBTransactionT;
  type IDBTransactionMode = IDBTransactionMode_;
}

globalThis.IDBRequest = IDBRequest;
globalThis.IDBOpenRequest = IDBOpenRequest;
globalThis.IDBVersionChangeEvent = IDBVersionChangeEvent;
globalThis.indexedDB = indexedDB;
globalThis.IDBFactory = IDBFactory;
globalThis.IDBDatabase = IDBDatabase;
globalThis.IDBObjectStore = IDBObjectStore;
globalThis.IDBIndex = IDBIndex;
globalThis.IDBKeyRange = IDBKeyRange;
globalThis.IDBCursor = IDBCursor;
globalThis.IDBCursorWithValue = IDBCursorWithValue;
globalThis.IDBTransaction = IDBTransaction;
