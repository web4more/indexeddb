// Copyright 2017 Jeremy Scheff
// SPDX-License-Identifier: Apache-2.0

import "core-js/stable";
// @ts-ignore
import { indexedDB, IDBKeyRange } from "../../../build/esm/index.js";

window.indexedDBmock = indexedDB;
window.IDBKeyRangemock = IDBKeyRange;
