import { test, expect, assert } from "vitest";
import "../src/index";
import Dexie from "dexie";

test("Dexie works", async () => {
  const db = new Dexie("MyDatabase");

  db.version(1).stores({
    friends: "++id, name, age",
  });

  await db.friends.add({
    name: "Alice",
    age: 25,
    street: "East 13:th Street",
  });

  await db.friends.add({
    name: "Bob",
    age: 80,
    street: "East 13:th Street",
  });

  const oldFriends = await db.friends.where("age").above(75).toArray();

  expect(oldFriends.length).toBe(1);
});
