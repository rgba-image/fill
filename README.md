# fill

Fill an ImageData instance with a single color

## install

`npm install @rgba-image/fill`

## usage

Fill the whole image:

```js
const { fill } = require( '@rgba-image/fill' )

fill( image, [ 51, 153, 255, 127 ] )
```

Fill a region in the image:

```js
const { fill } = require( '@rgba-image/fill' )

const x = 20
const y = 50
const width = 70
const height = 90

fill( image, [ 51, 153, 255, 127 ], x, y, width, height )
```

Arguments following `image` are optional, their default values are:

```js
x = 0
y = 0
width = image.width - x
height = image.height - y
```

There is also an alias function for calling fill with transparent pixels,
`clear`:

```js
const { clear } = require( '@rgba-image/fill' )

clear( image )
```

Clear a region:

```js
const { clear } = require( '@rgba-image/fill' )

const x = 20
const y = 50
const width = 70
const height = 90

clear( image, x, y, width, height )
```

Arguments following `image` are optional and have same defaults as above

The color argument should be an arraylike with four values, any missing values 
are substituted from the values `[ 0, 0, 0, 255 ]`, so you can pass eg RGB 
triplets and alpha will be set to 255

## License

MIT License

Copyright (c) 2018 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.