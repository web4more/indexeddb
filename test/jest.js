// Copyright 2017 Jeremy Scheff
// SPDX-License-Identifier: Apache-2.0

describe("jest", () => {
    it("auto in setupFiles", () => {
        if (typeof indexedDB === "undefined") {
            throw new Error("undefind indexeDB");
        }
    });
});
