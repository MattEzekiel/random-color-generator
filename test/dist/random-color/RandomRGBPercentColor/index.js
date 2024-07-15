"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RandomRGBPercentColor() {
    var r = Math.floor(Math.random() * 101);
    var g = Math.floor(Math.random() * 101);
    var b = Math.floor(Math.random() * 101);
    return "rgb(".concat(r, "%, ").concat(g, "%, ").concat(b, "%)");
}
exports.default = RandomRGBPercentColor;
