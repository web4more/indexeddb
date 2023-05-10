import Origin from "../REF-html-origins/Origin";

/**
 * A storage key is a tuple consisting of an origin (an origin). [HTML]
 *
 * 🛑 This is expected to change; see Client-Side Storage Partitioning.
 */
type StorageKey = [Origin];

export type { StorageKey as default };
