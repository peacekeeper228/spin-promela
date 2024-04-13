"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberOfTabsToIncrease = exports.NumberOfTabsToDecrease = exports.ProcessString = void 0;
const regulars_1 = require("../data/regulars");
function ProcessString(CurString, TabsNumber) {
    if (CurString.startsWith("//")) {
        return CurString;
    }
    let newString = CurString;
    for (let key in regulars_1.Regulars) {
        newString = newString.replace(regulars_1.Regulars[key], key);
    }
    if (TabsNumber < 0) {
        return newString.trimStart();
    }
    return '\t'.repeat(TabsNumber) + newString.trimStart();
}
exports.ProcessString = ProcessString;
function NumberOfTabsToDecrease(CurString) {
    let TabCounter = 0;
    if (CurString.startsWith("od") || CurString.startsWith("fi")) {
        TabCounter += 1;
    }
    if (CurString.indexOf("}") >= 0) {
        TabCounter += 1;
    }
    return TabCounter;
}
exports.NumberOfTabsToDecrease = NumberOfTabsToDecrease;
function NumberOfTabsToIncrease(CurString) {
    let TabCounter = 0;
    if (CurString.indexOf("{") >= 0) {
        TabCounter += 1;
    }
    if (CurString.startsWith("if") || CurString.startsWith("do")) {
        TabCounter += 1;
    }
    return TabCounter;
}
exports.NumberOfTabsToIncrease = NumberOfTabsToIncrease;
//# sourceMappingURL=functions.js.map