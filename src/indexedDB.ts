import envPaths from "env-paths";
import IDBFactory from "./IDBFactory";

const { cache } = envPaths("jcbhmr-indexeddb-node");
/**
 * Why use the "cache" folder? Because this is supposed to emulate browser
 * non-persistent storage. The "cache" folder is the closest thing to that.
 *
 * If you need persistent storage for something like your webapp's DB backend,
 * you can create your own `IDBFactory` instance with a different path and use
 * the same API as the global `indexedDB` object.
 */
const indexedDB = new IDBFactory(cache);

export default indexedDB;
