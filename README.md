# startInterval()

Calls a function immediately and repeatedly after a fixed delay.

This is a tiny package with a simple task: execute a function immediately and then periodically after a specified delay. This is usually done by calling the function and then calling `setInterval` but it will be much easier to have a function that does it all at the same time!

In addition, and to properly mimic the behavior of `setInterval`, the initial call is done in the next tick and in the global context instead of doing a synchronous call. Multiple parameters are also supported as in the standard `setTimeout` and `setInterval` calls.

## Usage

Install the module:

```bash
$ npm install startinterval2
```

Then:

```js
const startInterval = require('startinterval2')

function callback() {
  // your code here...
}

// will execute callback immediately and repeatedly after 1 sec
const intervalId = startInterval(callback, 1000)
```

## API

### `startInterval(fn, delay[, param1, param2, ...])`

Same as standard `setInterval()`

## License

WTFPL
