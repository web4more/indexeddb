The [Indexed Database API 3.0] spec defines a lot of terms that don't mean very
much to us. For instance, there's an `IDBDatabase` interface that we very much
care about, but then there's also a few dozen paragraphs devoted to describing a
fictious `connection` type. But then we find out that, oh wait, "The IDBDatabase
interface represents a connection to a database." 🤷‍♂️ So, here's the big concepts
of how this code is organized to fit the spec and expose proper spec algorithms
to you if you need them.

The `IDBDatabase` class is the public interface that is the same as you would
find in a normal browser. That's pretty standard. But, it also happens to double
as the same class where all the `connection`-related concept data is stored.
That means things like `closePendingFlag` are exported as private-ish members
from the `./IDBDatabase.ts` file for your polyfilling tinkering pleasure.

```js
import IDBDatabase, {
  closePendingFlag, // 👈
} from "@jcbhmr/indexeddb.node/IDBDatabase.js";

const db = getMyDatabase();
closePendingFlag.set(db, true); // 👈
```

A similar thing to the `IDBDatabase` happens with `IDBKeyRange` which
"represents a key range." Wow! Isn't it nice when internal concepts are so well
named? 😅

```js
import IDBKeyRange, {
  lowerOpenFlag, // 👈
} from "@jcbhmr/indexeddb.node/IDBKeyRange.js";

const range = IDBKeyRange.lowerBound(1, true);
lowerOpenFlag.get(range); // 👈
```

Here's a complete list of the concepts that are defined in [2. Constructs] and
how they map to the `IDB*` classes in this library.

- `IDBDatabase`: Represents the `connection` concept to a `database`.
- `IDBRequest`: Represents the `request` concept.
- `IDBObjectStore`: Represents the `object store handle` concept.
- `IDBIndex`: Represents the `index handle` concept.
- `IDBKeyRange`: Represents the `key range` concept.
- `IDBCursor`: Represents one matching `cursor` concept.
- `IDBTransaction`: `transaction` objects implement this interface.

I know this does make things a bit more complicated. Now there's _two names_ for
the same idea/class! That means it's vital to **document things** with the
`@see` tag when possible to make sure you cover what things from the spec are
related to the code that you just wrote. 😊
