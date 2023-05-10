/**
 * A tuple origin
 *
 * A tuple consists of:
 *
 * - A scheme (an ASCII string).
 * - A host (a host).
 * - A port (null or a 16-bit unsigned integer).
 * - A domain (null or a domain). Null unless stated otherwise.
 */
type TupleOrigin = [string, string, null | number, null | string];

export type { TupleOrigin as default };
