"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RandomHSLColor() {
    var h = Math.floor(Math.random() * 361);
    var s = Math.floor(Math.random() * 101);
    var l = Math.floor(Math.random() * 101);
    return "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)");
}
exports.default = RandomHSLColor;
