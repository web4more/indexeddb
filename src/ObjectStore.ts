import Record from "./Record";
import KeyGenerator from "./internal/KeyGenerator";

/**
 * An object store is the primary storage mechanism for storing data in a
 * database.
 *
 * @see https://w3c.github.io/IndexedDB/#object-store
 */
class ObjectStore {
  /**
   * An object store has a list of records which hold the data stored in the
   * object store. Each record consists of a key and a value. The list is sorted
   * according to key in ascending order. There can never be multiple records in
   * a given object store with the same key.
   */
  #listOfRecords: Record[];

  /**
   * An object store has a name, which is a name. At any one time, the name is
   * unique within the database to which it belongs.
   */
  #name: string;

  /**
   * An object store optionally has a key path. If the object store has a key
   * path it is said to use in-line keys. Otherwise it is said to use
   * out-of-line keys.
   */
  #keyPath: string | string[] | null | undefined;

  /** An object store optionally has a key generator. */
  #keyGenerator: KeyGenerator | null | undefined;

  /**
   * An object store can derive a key for a record from one of three sources:
   *
   * 1. A key generator. A key generator generates a monotonically increasing
   *    numbers every time a key is needed.
   * 2. Keys can be derived via a key path.
   * 3. Keys can also be explicitly specified when a value is stored in the object
   *    store.
   */
  #deriveAKeyForARecord(
    record: Record,
  ): Key {
    if (this.#keyGenerator) {
      return this.#keyGenerator.generate();
    }

    if (this.#keyPath) {
      return this.#keyPath;
    }

    return record.key;
  }
}
