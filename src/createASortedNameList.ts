import DOMStringList from "./REF-html-domstringlist/DOMStringList";

export default function createASortedNameList(names: string[]): DOMStringList {
  // To create a sorted name list from a list names, run these steps:

  // 1. Let sorted be names sorted in ascending order with the code unit less
  //    than algorithm.
  const sorted = names.slice().sort();

  // 2. Return a new DOMStringList associated with sorted.
  return new DOMStringList(sorted);

  // Details: This matches the sort() method on an Array of String. This
  // ordering compares the 16-bit code units in each string, producing a highly
  // efficient, consistent, and deterministic sort order. The resulting list
  // will not match any particular alphabet or lexicographical order,
  // particularly for code points represented by a surrogate pair.
}
