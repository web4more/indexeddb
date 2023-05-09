// Copyright 2017 Jeremy Scheff
// SPDX-License-Identifier: Apache-2.0

import FDBRequest from "./FDBRequest.js";
import { EventCallback } from "./lib/types.js";

class FDBOpenDBRequest extends FDBRequest {
    public onupgradeneeded: EventCallback | null = null;
    public onblocked: EventCallback | null = null;

    public toString() {
        return "[object IDBOpenDBRequest]";
    }
}

export default FDBOpenDBRequest;
