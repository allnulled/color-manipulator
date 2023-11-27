const ColorManipulator = require(__dirname + "/../src/color-manipulator.js");
const { ColorCalculatorParser } = require(__dirname + "/../src/color-calculator-parser.js");
console.log("Color Calculator Language");

const expresiones = [
    "rgb(1,1,1) * #050805",
    "rgb(100,100,100) / #050505"
];
for(let index=0; index<expresiones.length; index++) {
  const expresion = expresiones[index];
  console.log(expresion + " =", ColorCalculatorParser.parse(expresion));
}
