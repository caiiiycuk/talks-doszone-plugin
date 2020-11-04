import { acceptance } from "discourse/tests/helpers/qunit-helpers";

acceptance("jsdos", { loggedIn: true });

test("jsdos works", async assert => {
  await visit("/admin/plugins/jsdos");

  assert.ok(false, "it shows the jsdos button");
});
