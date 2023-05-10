import DOMStringList from "./REF-html-domstringlist/DOMStringList";
import defineEventHandlerIDLAttribute from "./REF-html-event-handlers/defineEventHandlerIDLAttribute";
import type IDBTransactionMode from "./IDBTransactionMode";
import type IDBTransactionDurability from "./IDBTransactionDurability";
import type IDBDatabase from "./IDBDatabase";
import IDBObjectStore from "./IDBObjectStore";

/**
 * All transactions are created through a connection, which is the transaction’s
 * connection.
 */
const connection = new WeakMap<IDBTransaction, IDBDatabase>();

/**
 * A transaction has a scope which is a set of object stores that the
 * transaction may interact with.
 *
 * NOTE: A transaction's scope remains fixed unless the transaction is an
 * upgrade transaction.
 */
const scope = new WeakMap<IDBTransaction, Set<IDBObjectStore>>();

/**
 * A transaction is used to interact with the data in a database. Whenever data
 * is read or written to the database it is done by using a transaction.
 *
 * Transactions offer some protection from application and system failures. A
 * transaction may be used to store multiple data records or to conditionally
 * modify certain data records. A transaction represents an atomic and durable
 * set of data access and data mutation operations.
 *
 * @see https://w3c.github.io/IndexedDB/#transaction-construct
 * @see https://w3c.github.io/IndexedDB/#transaction
 */
class IDBTransaction extends EventTarget {
  static {
    Object.defineProperty(this.prototype, Symbol.toStringTag, {
      value: "IDBTransactionPrototype",
      configurable: true,
    });

    defineEventHandlerIDLAttribute(this.prototype, "onabort");
    defineEventHandlerIDLAttribute(this.prototype, "oncomplete");
    defineEventHandlerIDLAttribute(this.prototype, "onerror");
  }

  readonly onabort: EventListener | null;
  readonly oncomplete: EventListener | null;
  readonly onerror: EventListener | null;

  #objectStoreNames: string[];
  #mode: IDBTransactionMode;
  #durability: IDBTransactionDurability;
  #db: IDBDatabase;
  #error: DOMException | null | undefined;

  constructor(
    db: IDBDatabase,
    objectStoreNames: string[],
    mode: IDBTransactionMode,
    durability: IDBTransactionDurability
  ) {
    super();

    this.#db = db;
    this.#objectStoreNames = objectStoreNames;
    this.#mode = mode;
    this.#durability = durability;
  }

  get objectStoreNames(): DOMStringList {
    // The objectStoreNames getter steps are:

    // 1. Let names be a list of the names of the object stores in this's scope.
    const names = this.#objectStoreNames;

    // 2. Return the result (a DOMStringList) of creating a sorted name list
    //    with names.
    return new DOMStringList(names);

    // Note: The contents of each list returned by this attribute does not
    // change, but subsequent calls to this attribute during an upgrade
    // transaction can return lists with different contents as object stores are
    // created and deleted.
  }

  get mode(): IDBTransactionMode {
    return this.#mode;
  }

  get durability(): IDBTransactionDurability {
    return this.#durability;
  }

  get db(): IDBDatabase {
    return this.#db;
  }

  get error(): DOMException | null {
    return this.#error ?? null;
  }

  objectStore(name: string): IDBObjectStore {
    name = "" + name;

    if (!this.#objectStoreNames.contains(name)) {
      throw new DOMException("Object store not found", "NotFoundError");
    }

    return;
  }

  commit(): void {}

  abort(): void {}
}

export default IDBTransaction;
export { scope };
