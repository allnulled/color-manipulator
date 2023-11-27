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

console.log("color_1.substractColor:", color_1.cloned().substractColor(
    Color.create("rgb(127,127,127)")
));
console.log("color_1.substractFromRed:", color_1.cloned().substractFromRed(
    Color.hexToNumber("FF")
));
console.log("color_1.substractFromGreen:", color_1.cloned().substractFromGreen(
    Color.hexToNumber("FF")
));
console.log("color_1.substractFromBlue:", color_1.cloned().substractFromBlue(
    Color.hexToNumber(Color.numberToHex("200"))
));

console.log("color_2.addColor:", color_2.cloned().addColor(
    Color.create("rgb(127,127,127)")
));
console.log("color_2.addToRed:", color_2.cloned().addToRed(
    Color.hexToNumber("FF")
));
console.log("color_2.addToGreen:", color_2.cloned().addToGreen(
    Color.hexToNumber("FF")
));
console.log("color_2.addToBlue:", color_2.cloned().addToBlue(
    Color.hexToNumber(Color.numberToHex("200"))
));

console.log("color_2.multiplyAllBy:", color_2.cloned().multiplyAllBy(
    2
));
console.log("color_2.multiplyRedBy:", color_2.cloned().multiplyRedBy(
    Color.hexToNumber("0A")
));
console.log("color_2.multiplyGreenBy:", color_2.cloned().multiplyGreenBy(
    Color.hexToNumber("0A")
));
console.log("color_3.multiplyBlueBy:", color_2.cloned().multiplyBlueBy(
    Color.hexToNumber(Color.numberToHex("10"))
));

console.log("color_2.divideAllBy:", color_3.cloned().divideAllBy(
    2
).rounded());
console.log("color_3.divideRedBy:", color_3.cloned().divideRedBy(
    Color.hexToNumber("0A")
).rounded());
console.log("color_3.divideGreenBy:", color_3.cloned().divideGreenBy(
    Color.hexToNumber("0A")
).rounded());
console.log("color_3.divideBlueBy:", color_3.cloned().divideBlueBy(
    Color.hexToNumber(Color.numberToHex("10"))
).rounded());

require(__dirname + "/test-language.js");