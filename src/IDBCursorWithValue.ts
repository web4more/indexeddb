// Copyright 2017 Jeremy Scheff
// SPDX-License-Identifier: Apache-2.0

import FDBCursor from "./IDBCursor.js";
import {
  CursorRange,
  CursorSource,
  FDBCursorDirection,
  Value,
} from "./internal/types.js";

class FDBCursorWithValue extends FDBCursor {
  public value: Value = undefined;

  constructor(
    source: CursorSource,
    range: CursorRange,
    direction?: FDBCursorDirection,
    request?: any
  ) {
    super(source, range, direction, request);
  }

  public toString() {
    return "[object IDBCursorWithValue]";
  }
}

export default FDBCursorWithValue;
