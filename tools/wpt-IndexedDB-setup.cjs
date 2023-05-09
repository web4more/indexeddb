let ponyfill;
import("../dist/ponyfill.js").then((m) => (ponyfill = m));

function setup(window) {
  if (!ponyfill) {
    throw new ReferenceError("setup() called before ponyfill was loaded");
  }

  Object.assign(window, ponyfill);
}

module.exports = exports = setup;
