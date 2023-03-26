"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluck = void 0;
var pluck = function (elements, fields) {
    return elements.map(function (element) { return element[fields]; });
};
exports.pluck = pluck;
