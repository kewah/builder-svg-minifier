# builder-svg-minifier

Optimize SVG vector graphics files. Plugin for [component-builder2](https://github.com/component/builder2.js) using [svgo](https://github.com/svg/svgo).

## Installation

```
$ npm install builder-svg-minifier --save-dev
```

## Usage

```js
var builder = require('component-builder')
var svg = require('builder-svg-minifier')
var opts = {};

builder.scripts(tree, options)
  .use('templates', svg(opts))
  .pipe(process.stdout)
```

## Licence

MIT
