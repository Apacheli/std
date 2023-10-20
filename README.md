# @apacheli/std

A collection of JavaScript modules written for [Deno](https://deno.com/).

Browser-compatible modules will include the following comment at the top:

```js
// This module is browser-compatible.
```

> [!NOTE] This software is experimental.

### Development

I will most likely not accept feature PRs. Bug fixes are welcome!

Use `deno lint` and `deno fmt` for code styling.

### Installing

Import from GitHub:

```js
import * as color from "https://github.com/apacheli/std/raw/master/lib/color.js";

console.log(color.rgb(0xff0000));
```

### Modules

- [`args_parser`](lib/args_parser.js)
  - `args_parser.parse(s)`
  - `args_parser.parseArgs(list)`
- [`color`](lib/color.js)
  - `color.rgb(n)`
  - `color.rgbToCmyk(r, g, b)`
  - `color.cmykToRgb(c, m, y, k)`
  - `color.rgbToHls(r, g, b)`
  - `color.hlsToRgb(h, l, s)`
  - `color.rgbToHsv(r, g, b)`
  - `color.hsvToRgb(h, s, v)`
- [`event_dispatcher`](lib/event_dispatcher.js)
  - `EventDispatcher`
    - `EventDispatcher.listen(event, listener)`
    - `EventDispatcher.deafen(event, listener)`
    - `EventDispatcher.dispatch(event, ...args)`
    - `EventDispatcher.receive(event)`
    - `EventDispatcher.stream(event)`
    - `EventDispatcher.listening(event)`
- [`fs`](lib/fs.js)
  - `fs.readDirRecursive(path)`
  - `fs.write(path, data, options)`
  - `fs.writeText(path, data, options)`
- [`random`](lib/random.js)
  - `random.choice(list)`
  - `random.rng(max, min)`
  - `random.shuffle(list)`
  - `random.shuffleSattolo(list)`
- [`time`](lib/time.js)
  - `time.sleep(delay)`

### Licenses

This project is licensed under [the Apache License](LICENSE.txt).

- [Python License](https://github.com/python/cpython/blob/main/LICENSE)
