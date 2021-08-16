import { assert, assertEquals } from "https://deno.land/std@0.104.0/testing/asserts.ts";
import { hello, helloworld } from "./misc.ts"

// Simple name and function, compact form, but not configurable
Deno.test("hello world #1", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

// Fully fledged test definition, longer form, but configurable (see below)
Deno.test({
  name: "hello world #2",
  fn: () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
});

Deno.test("hello world #3", () => {
  assert(helloworld());
  assertEquals(helloworld(), "Hello World!!!");
  assertEquals(hello('World'), "Hello World");
});


// Remove-Item -LiteralPath "coverage" -Force -Recurse; deno test --coverage=coverage; deno coverage coverage