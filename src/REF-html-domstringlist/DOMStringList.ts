const array = new WeakMap<DOMStringList, string[]>();

class DOMStringList {
  readonly [index: number]: string;

  constructor(ref: string[]) {
    const that = new Proxy(this, {
      get(target, p, receiver) {
        if (typeof p === "string" && +p >= 0) {
          return array.get(target)![+p];
        }

        return Reflect.get(target, p, receiver);
      },
      set(target, p, newValue, receiver) {
        if (typeof p === "string" && +p >= 0) {
          // Unsure if this is correct...
          return true;
        }

        return Reflect.set(target, p, newValue, receiver);
      },
      has(target, p) {
        if (typeof p === "string" && +p >= 0) {
          return +p < array.get(target)!.length;
        }

        return Reflect.has(target, p);
      },
    });

    array.set(that, ref);
  }

  get length(): number {
    return array.get(this)!.length;
  }

  item(index: number): string | null {
    if (index > 0 && index < array.get(this)!.length) {
      return array.get(this)![index];
    } else {
      return null;
    }
  }

  contains(str: string): boolean {
    return array.get(this)!.includes(str);
  }

  [Symbol.iterator](): IterableIterator<string> {
    return array.get(this)![Symbol.iterator]();
  }
}

export default DOMStringList;
