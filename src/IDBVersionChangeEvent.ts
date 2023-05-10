import IDBVersionChangeEventInit from "./IDBVersionChangeEventInit";

export default class IDBVersionChangeEvent extends Event {
  static {
    Object.defineProperty(this.prototype, Symbol.toStringTag, {
      value: "IDBVersionChangeEventPrototype",
      configurable: true,
    });
  }

  #oldVersion: number;
  #newVersion: number | null;
  constructor(
    type: string,
    eventInitDict_: IDBVersionChangeEventInit | undefined = {}
  ) {
    type = "" + type;
    const eventInitDict = IDBVersionChangeEventInit.from(eventInitDict_);

    super(type, eventInitDict);

    this.#oldVersion = eventInitDict.oldVersion;
    this.#newVersion = eventInitDict.newVersion;
  }

  get oldVersion(): number {
    return this.#oldVersion;
  }

  get newVersion(): number | null {
    return this.#newVersion;
  }
}
