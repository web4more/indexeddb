/**
 * An opaque origin An internal value, with no serialization it can be recreated
 * from (it is serialized as "null" per serialization of an origin), for which
 * the only meaningful operation is testing for equality.
 */
type OpaqueOrigin = null;

export type { OpaqueOrigin as default };
