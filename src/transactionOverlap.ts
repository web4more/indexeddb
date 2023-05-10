import IDBTransaction, { scope } from "./IDBTransaction";

/**
 * Two transactions have overlapping scope if any object store is in both
 * transactions' scope.
 */
export default function transactionOverlap(
  a: IDBTransaction,
  b: IDBTransaction
): boolean {
  // https://github.com/tc39/proposal-set-methods#readme
  // https://2ality.com/2015/01/es6-set-operations.html
  const intersection = new Set(
    [...scope.get(a)!].filter((x) => scope.get(b)!.has(x))
  );
  return intersection.size > 0;
}
