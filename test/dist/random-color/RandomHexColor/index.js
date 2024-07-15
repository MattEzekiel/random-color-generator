"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RandomHexColor() {
    var hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#".concat(hex.padStart(6, '0'));
}
exports.default = RandomHexColor;
