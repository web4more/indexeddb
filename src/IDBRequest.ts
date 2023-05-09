// Copyright 2017 Jeremy Scheff
// SPDX-License-Identifier: Apache-2.0

import FDBCursor from "./IDBCursor.js";
import FDBIndex from "./IDBIndex.js";
import FDBObjectStore from "./IDBObjectStore.js";
import FDBTransaction from "./IDBTransaction.js";
import { InvalidStateError } from "./internal/errors.js";
import FakeEventTarget from "./internal/FakeEventTarget.js";
import { EventCallback } from "./internal/types.js";

class FDBRequest extends FakeEventTarget {
  public _result: any = null;
  public _error: Error | null | undefined = null;
  public source: FDBCursor | FDBIndex | FDBObjectStore | null = null;
  public transaction: FDBTransaction | null = null;
  public readyState: "done" | "pending" = "pending";
  public onsuccess: EventCallback | null = null;
  public onerror: EventCallback | null = null;

  public get error() {
    if (this.readyState === "pending") {
      throw new InvalidStateError();
    }
    return this._error;
  }

  public set error(value: any) {
    this._error = value;
  }

  public get result() {
    if (this.readyState === "pending") {
      throw new InvalidStateError();
    }
    return this._result;
  }

  public set result(value: any) {
    this._result = value;
  }

  public toString() {
    return "[object IDBRequest]";
  }
}

export default FDBRequest;
