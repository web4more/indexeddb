import TupleOrigin from "./TupleOrigin";

/**
 * Origins are the fundamental currency of the web's security model. Two actors
 * in the web platform that share an origin are assumed to trust each other and
 * to have the same authority. Actors with differing origins are considered
 * potentially hostile versus each other, and are isolated from each other to
 * varying degrees.
 */
type Origin = TupleOrigin;

export type { Origin as default };
