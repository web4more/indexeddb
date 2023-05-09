if (typeof indexedDB !== "undefined") {
  process.emitWarning(
    "The `indexedDB` global already exists. This is probably because you " +
      "are using another indexedDB polyfill. The @jcbhmr/indexeddb.node " +
      "polyfill is still being applied, and will overwrite the existing " +
      "global."
  );
}

// Unconditionally apply the polyfill to the global scope. If it fails, it's
// probably because the user isn't in a Node.js environment.
await import("./polyfill");

export {};
