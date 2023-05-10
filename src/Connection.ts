import IDBObjectStore from "./IDBObjectStore";
import defineEventHandlerIDLAttribute from "./REF-html-event-handlers/defineEventHandlerIDLAttribute";

/**
 * Script does not interact with databases directly. Instead, script has
 * indirect access via a connection. A connection object can be used to
 * manipulate the objects of that database. It is also the only way to obtain a
 * transaction for that database.
 *
 * @see https://w3c.github.io/IndexedDB/#database-connection
 */
class Connection extends EventTarget {
  static {
    /**
     * An event with type versionchange will be fired at an open connection if
     * an attempt is made to upgrade or delete the database. This gives the
     * connection the opportunity to close to allow the upgrade or delete to
     * proceed.
     */
    defineEventHandlerIDLAttribute(this.prototype, "onversionchange");

    /**
     * An event with type close will be fired at a connection if the connection
     * is closed abnormally.
     */
    defineEventHandlerIDLAttribute(this.prototype, "onclose");
  }

  readonly onversionchange: EventListener | null;
  readonly onclose: EventListener | null;

  /**
   * A connection has a version, which is set when the connection is created. It
   * remains constant for the lifetime of the connection unless an upgrade is
   * aborted, in which case it is set to the previous version of the database.
   * Once the connection is closed the version does not change.
   */
  #version: number;

  /** Each connection has a close pending flag which is initially false. */
  #closePending: boolean;

  /**
   * A connection has an object store set, which is initialized to the set of
   * object stores in the associated database when the connection is created.
   * The contents of the set will remain constant except when an upgrade
   * transaction is running.
   */
  #objectStoreSet: Set<IDBObjectStore>;
}

// Hidden from TypeScript
Object.assign(Connection.prototype, {
  /** A connection's get the parent algorithm returns null. */
  get parentNode() {
    return null;
  },
});

export default Connection;
