# p-exec

Promisified `exec` from the `child_process` module from the Node standard library.

## Usage

The default export is a function and the signature matches that of [`child_process`](https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback), without a callback.

The first parameter passed to the function is the command to execute, the second, optional parameter is any options to be passed along to `exec` from `child_process`.

For example:

```js
import exec from "p-exec"

const result = await exec('echo "hi"')
console.log(result.trim()) // "hi"
```
