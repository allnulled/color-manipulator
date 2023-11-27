(function(factory) {
    const mod = factory();
    if(typeof window !== "undefined") {
        window.ColorManipulator = mod;
    }
    if(typeof global !== "undefined") {
        global.ColorManipulator = mod;
    }
    if(typeof module !== "undefined") {
        module.exports = mod;
    }
})(function() {
    const ColorManipulator = {};
    ColorManipulator.Color = class {
        
        static create(...args) {
            return new this(...args);
        }
        static hexToNumber(hex) {
            return parseInt(hex, 16);
        }
        static hexToNumberInString(hex) {
            return parseInt(hex, 16).toString(10);
        }
        static numberToHex(number) {
            return parseInt(number, 10).toString(16);
        }

        constructor(value) {
            this.red = undefined;
            this.green = undefined;
            this.blue = undefined;
            let red, green, blue;
            if(typeof value !== "string") {
                throw new Error("Color argument must be a string");
            }
            if(value.startsWith("rgb(")) {
                [red, green, blue ] = value.substr(4).split("").reverse().join("").substr(1).split("").reverse().join("").split(",").map(t => parseInt(t.trim()));
            } else if(value.startsWith("#") && value.length === 7) {
                red = parseInt(value.substring(1,3), 16);
                green = parseInt(value.substring(3,5), 16);
                blue = parseInt(value.substring(5,7), 16);
            } else if(value.startsWith("#") && value.length === 4) {
                red = parseInt(value.substring(1,2) + value.substring(1,2), 16);
                green = parseInt(value.substring(2,3) + value.substring(2,3), 16);
                blue = parseInt(value.substring(3,4) + value.substring(3,4), 16);
            } else {
                throw new Error("Color format not accepted: «" + value + "»: only rgb(RRR,GGG,BBB), #RGB and #RRGGBB are valid formats");
            }
            this.red = red;
            this.green = green;
            this.blue = blue;
        }

        cloned() {
            return new this.constructor(this.toHexadecimal());
        }
        
        addColor(color) {
            this.red += color.red;
            this.green += color.green;
            this.blue += color.blue;
            return this;
        }
        addToAll(number) {
            this.red += number;
            this.green += number;
            this.blue += number;
            return this;
        }
        addToRed(number) {
            this.red += number;
            return this;
        }
        addToGreen(number) {
            this.green += number;
            return this;
        }
        addToBlue(number) {
            this.blue += number;
            return this;
        }
        
        substractColor(color) {
            this.red -= color.red;
            this.green -= color.green;
            this.blue -= color.blue;
            return this;
        }
        substractFromAll(number) {
            this.red -= number;
            this.green -= number;
            this.blue -= number;
            return this;
        }
        substractFromRed(number) {
            this.red -= number;
            return this;
        }
        substractFromGreen(number) {
            this.green -= number;
            return this;
        }
        substractFromBlue(number) {
            this.blue -= number;
            return this;
        }

        multiplyAllBy(number) {
            this.red = this.red * number;
            this.green = this.green * number;
            this.blue = this.blue * number;
            return this;
        }
        multiplyRedBy(number) {
            this.red = this.red * number;
            return this;
        }
        multiplyGreenBy(number) {
            this.green = this.green * number;
            return this;
        }
        multiplyBlueBy(number) {
            this.blue = this.blue * number;
            return this;
        }

        divideAllBy(number) {
            this.red = this.red / number;
            this.green = this.green / number;
            this.blue = this.blue / number;
            return this;
        }
        divideRedBy(number) {
            this.red = this.red / number;
            return this;
        }
        divideGreenBy(number) {
            this.green = this.green / number;
            return this;
        }
        divideBlueBy(number) {
            this.blue = this.blue / number;
            return this;
        }

        rounded() {
            this.red = Math.round(this.red);
            this.green = Math.round(this.green);
            this.blue = Math.round(this.blue);
            return this;
        }

        toRGB() {
            return `rgb(${this.red},${this.green},${this.blue})`;
        }
        toHexadecimal() {
            return `#${this.red.toString(16).toUpperCase()}${this.green.toString(16).toUpperCase()}${this.blue.toString(16).toUpperCase()}`;
        }
        
    }
    ColorManipulator.default = ColorManipulator;
    return ColorManipulator;
});