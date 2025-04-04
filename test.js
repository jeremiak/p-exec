import assert from "node:assert/strict";
import { it } from "node:test";

import exec from "./index.js";

it("should resolve successfully with stdout", async () => {
  const result = await exec('echo "hi"');
  assert.equal(result.trim(), "hi");
});

it("should pass opts parameter through to child_process", async () => {
  const result = await exec("echo $TEST_VAR", { env: { TEST_VAR: "oranges" } });
  assert.equal(result.trim(), 'oranges')
});

it("should pass error to catch if not successful", () => {
  exec("thingthatdoesntexist --help").catch((e) => {
    // 127 is returned by /bin/sh when the given command is not found within
    // your PATH system variable and it is not a built-in shell command
    assert.equal(127, e.code);
  });
});


