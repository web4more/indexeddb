/**
 * An event handler IDL attribute is an IDL attribute for a specific event
 * handler. The name of the IDL attribute is the same as the name of the event
 * handler.
 *
 * Certain event handler IDL attributes have additional requirements, in
 * particular the onmessage attribute of MessagePort objects.
 *
 * @see https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes
 */
export default function defineEventHandlerIDLAttribute<
  T extends EventTarget,
  U extends EventListener
>(target: T, name: string): T {
  // For both of these two ways, the event handler is exposed through a name,
  // which is a string that always starts with "on" and is followed by the name
  // of the event for which the handler is intended.
  const type = name.slice(2);
  const eventHandler = new WeakMap<T, U | null>();
  return Object.defineProperty(target, name, {
    get(): U | null {
      // The getter of an event handler IDL attribute with name name, when
      // called, must run these steps:

      // 1. Let eventTarget be the result of determining the target of an event
      //    handler given this object and name.
      const eventTarget = this;

      // 2. If eventTarget is null, then return null.
      if (eventTarget === null) {
        return null;
      }

      // 3. Return the result of getting the current value of the event handler
      //    given eventTarget and name.
      return eventHandler.get(eventTarget)!;
    },
    set(handleEvent: U | null) {
      if (
        typeof handleEvent !== "object" &&
        typeof handleEvent !== "function"
      ) {
        handleEvent = null;
      }

      // The setter of an event handler IDL attribute with name name, when called, must run these steps:

      // 1. Let eventTarget be the result of determining the target of an event handler given this object and name.
      const eventTarget = this;

      // 2. If eventTarget is null, then return.
      if (eventTarget === null) {
        return;
      }

      // 3. If the given value is null, then deactivate an event handler given eventTarget and name.
      if (handleEvent === null) {
        this.removeEventListener(type, eventHandler.get(eventTarget) as U);
        eventHandler.delete(eventTarget);
        return;
      }

      // 4. Otherwise:
      else {
        // 1. Let handlerMap be eventTarget's event handler map.
        // 2. Let eventHandler be handlerMap[name].
        // 3. Set eventHandler's value to the given value.
        // 4. Activate an event handler given eventTarget and name.
        if (typeof handleEvent === "function") {
          this.addEventListener(type, handleEvent);
        }
        eventHandler.set(eventTarget, handleEvent);
        // Note: We don't want to activate the .addEventListener() call above
        // unless the event handler is a function. Otherwise, we'll end up
        // calling .addEventListener() with a non-function value, which could
        // trigger the .handleEvent() method of the event handler. That's not
        // what we want. Chrome and Firefox don't do this, either. Here's an
        // example. Run this in the console of a page that has a <body> element
        // with no event listeners:
        //
        //   document.body.onclick = console.log;
        //   document.body.onclick;
        //   //=> console.log
        //   getEventListeners(document.body);
        //
        //   document.body.onclick = "console.log(42)";
        //   document.body.onclick;
        //   //=> null
        //   getEventListeners(document.body);
        //   //=> {}
        //
        //   document.body.onclick = { handleEvent: console.log };
        //   document.body.onclick;
        //   //=> { handleEvent: console.log }
        //   getEventListeners(document.body);
        //   //=> {}
      }
    },
    enumerable: true,
    configurable: true,
  });
}
