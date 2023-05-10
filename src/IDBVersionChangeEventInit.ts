interface IDBVersionChangeEventInit extends EventInit {
  oldVersion?: number;
  newVersion?: number | null;
}
const IDBVersionChangeEventInit = {
  from(o: IDBVersionChangeEventInit = {}): IDBVersionChangeEventInit & {
    oldVersion: number;
    newVersion: number | null;
  } {
    // TODO: Improve type coercion robustness
    o.oldVersion ??= 0;
    o.newVersion ??= null;
    return o as IDBVersionChangeEventInit & {
      oldVersion: number;
      newVersion: number | null;
    };
  },
};

export default IDBVersionChangeEventInit;
