# color-manipulator

Color API to operate mathematically with numbers in RGB and HEX formats. For both, browser and Node.js. 

## Online user interface

Visit the online user interface here:

- [https://allnulled.github.io/color-manipulator](https://allnulled.github.io/color-manipulator)

## Installation

```sh
npm install --save color-manipulator
```

## Usage

Use the classic `import` or `require` statement for Node.js

In the browser, you can use the `src/color-manipulator.js` as standalone `<script>` import, or the API or `browserify`, `webpack` or this kind of bundlers.

## API reference

You can visit the [`REFERENCE.md file`](./documentation/REFERENCE.md) to find all the methods of the API.

## The `color-calculator-parser`

The `color-calculator-parser` is the parser for making color mathematical operations. These operations are allowed (each line is valid, separatedly only):

```
#000000 + #00FF00 + #0000FF
#000000 + 1 + 3 + 4
#00FF00 - #00FF00
#FFFFFF - 1 - 3 - 4
#010101 * 5 * 10
#202020 / 2 / 2
( #000000 + 10 ) - ( #000000 + 10 )
```

If you get the idea, this is enough. You can multiply colors by colors, and divide, but if you don't use it as a way of matrix, the numbers get easily out of bounds. In additions and substractions, it has more sense. But everything is allowed.

## Examples

The test verses as follows:

```js
const { Color } = require(__dirname + "/../src/color-manipulator.js");

const color_1 = Color.create("rgb(255,255,255)");
const color_2 = Color.create("#101010");
const color_3 = Color.create("#FFF");

const color_in_rgb = color_1.toRGB();
const color_in_hex = color_1.toHexadecimal();

console.log("color_1:", color_1);
console.log("color_2:", color_2);
console.log("color_3:", color_3);
console.log("color_in_rgb:", color_in_rgb);
console.log("color_in_hex:", color_in_hex);

console.log("color_1.substractColor:", color_1.cloned().substractColor(Color.create("rgb(127,127,127)")));
console.log("color_1.substractFromRed:", color_1.cloned().substractFromRed(Color.hexToNumber("FF")));
console.log("color_1.substractFromGreen:", color_1.cloned().substractFromGreen(Color.hexToNumber("FF")));
console.log("color_1.substractFromBlue:", color_1.cloned().substractFromBlue(Color.hexToNumber(Color.numberToHex("200"))));

console.log("color_2.addColor:", color_2.cloned().addColor(Color.create("rgb(127,127,127)")));
console.log("color_2.addToRed:", color_2.cloned().addToRed(Color.hexToNumber("FF")));
console.log("color_2.addToGreen:", color_2.cloned().addToGreen(Color.hexToNumber("FF")));
console.log("color_2.addToBlue:", color_2.cloned().addToBlue(Color.hexToNumber(Color.numberToHex("200"))));

console.log("color_2.multiplyAllBy:", color_2.cloned().multiplyAllBy(2));
console.log("color_2.multiplyRedBy:", color_2.cloned().multiplyRedBy(Color.hexToNumber("0A")));
console.log("color_2.multiplyGreenBy:", color_2.cloned().multiplyGreenBy(Color.hexToNumber("0A")));
console.log("color_3.multiplyBlueBy:", color_2.cloned().multiplyBlueBy(Color.hexToNumber(Color.numberToHex("10"))));

console.log("color_2.divideAllBy:", color_3.cloned().divideAllBy(2).rounded());
console.log("color_3.divideRedBy:", color_3.cloned().divideRedBy(Color.hexToNumber("0A")).rounded());
console.log("color_3.divideGreenBy:", color_3.cloned().divideGreenBy(Color.hexToNumber("0A")).rounded());
console.log("color_3.divideBlueBy:", color_3.cloned().divideBlueBy(Color.hexToNumber(Color.numberToHex("10"))).rounded());
```

Maybe it is poor, but you can play with the [online UI playground](https://allnulled.github.io/color-manipulator).