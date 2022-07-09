<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Student's t][t-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Student's t][t-distribution] random variable is

<!-- <equation class="equation" label="eq:t_quantile_function" align="center" raw="Q(p;\nu)\,=\,\inf\left\{ x\in \mathbb{R} : p \le F(x;\nu) \right\}" alt="Quantile function for a Student's t distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\nu)\,=\,\inf\left\{ x\in \mathbb{R} : p \le F(x;\nu) \right\}" data-equation="eq:t_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/t/quantile/docs/img/equation_t_quantile_function.svg" alt="Quantile function for a Student's t distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `v > 0` is the degrees of freedom.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
quantile = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-quantile@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var quantile = require( 'path/to/vendor/umd/stats-base-dists-t-quantile/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-quantile@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.quantile;
})();
</script>
```

#### quantile( p, v )

Evaluates the [quantile function][quantile-function] for a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = quantile( 0.8, 1.0 );
// returns ~1.376

y = quantile( 0.1, 1.0 );
// returns ~-3.078

y = quantile( 0.5, 0.1 );
// returns 0.0
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 1.0 );
// returns NaN

y = quantile( -0.1, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0 );
// returns NaN

y = quantile( 0.0, NaN );
// returns NaN
```

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0 );
// returns NaN
```

#### quantile.factory( v )

Returns a function for evaluating the [quantile function][quantile-function] of an [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var myquantile = quantile.factory( 4.0 );

var y = myquantile( 0.2 );
// returns ~-0.941

y = myquantile( 0.9 );
// returns ~1.533
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-quantile@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var v;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    v = randu() * 10.0;
    y = quantile( p, v );
    console.log( 'p: %d, v: %d, Q(p;v): %d', p.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-t-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-t-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-t-quantile/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-t-quantile/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-t-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-t-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-t-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-t-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-t-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-t-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-t-quantile/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-t-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-t-quantile/main/LICENSE

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

</section>

<!-- /.links -->
