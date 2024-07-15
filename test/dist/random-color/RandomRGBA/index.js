"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RandomRGBAColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var a = (Math.random()).toFixed(2);
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
}
exports.default = RandomRGBAColor;
