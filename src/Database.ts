import StorageKey from "./REF-storage/StorageKey";
import ObjectStore from "./internal/ObjectStore";

class Database {
  objectStores: ObjectStore[];
  name: string;
  version: number;
  upgradeTransaction: UpgradeTransaction | null = null;
  constructor(name: string, version: number, objectStores: ObjectStore[]) {
    this.name = name;
    this.version = version;
    this.objectStores = objectStores;
  }
}
