/**
 * A name is a string equivalent to a DOMString; that is, an arbitrary sequence
 * of 16-bit code units of any length, including the empty string. Names are
 * always compared as opaque sequences of 16-bit code units.
 *
 * As a result, name comparison is sensitive to variations in case as well as
 * other minor variations such as normalization form, the inclusion or omission
 * of controls, and other variations in Unicode text. [Charmod-Norm] If an
 * implementation uses a storage mechanism which does not support arbitrary
 * strings, the implementation can use an escaping mechanism or something
 * similar to map the provided name to a string that it can store.
 */
type Name = string;

export type { Name as default };
