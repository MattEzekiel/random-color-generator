"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RandomRGBColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
}
exports.default = RandomRGBColor;
