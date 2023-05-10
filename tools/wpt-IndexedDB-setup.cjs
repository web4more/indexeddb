let ponyfill;
import("../dist/ponyfill.js").then((m) => (ponyfill = m));

function setup(window) {
  // This is a race condition. I know. Right now I don't know of a way to async
  // import an ESM file when using the wpt-runner. So we just hope the file is
  // loaded by now! If not, then we have a problem.
  if (!ponyfill) {
    throw new ReferenceError("setup() called before ponyfill was loaded");
  }

  Object.assign(window, ponyfill);
}

module.exports = exports = setup;
