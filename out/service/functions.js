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
    regulars_1.GroupRegular.forEach(element => {
        let matcher = newString.match(element.regs);
        if (matcher != undefined) {
            let replacingPart = "";
            for (let index = 1; index < matcher.length; index++) {
                replacingPart += element.replaceTo[index - 1] + matcher[index];
            }
            replacingPart += element.replaceTo[matcher.length - 1];
            newString = newString.replace(matcher[0], replacingPart);
        }
        ;
    });
    if (TabsNumber < 0) {
        return newString.trimStart();
    }
    ;
    return '\t'.repeat(TabsNumber) + newString.trimStart();
}
exports.ProcessString = ProcessString;
function NumberOfTabsToDecrease(CurString) {
    let TabCounter = 0;
    if (CurString.startsWith("fi ") || CurString.startsWith("od ")
        || CurString.endsWith(" fi") || CurString.endsWith(" od")
        || CurString.endsWith(" fi;") || CurString.endsWith(" od;")
        || CurString == "fi;" || CurString == "od;"
        || CurString == "fi" || CurString == "od") {
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
    if (CurString.startsWith("if ") || CurString.startsWith("do ")
        || CurString.endsWith(" if") || CurString.endsWith(" do")
        || CurString == "do" || CurString == "if") {
        TabCounter += 1;
    }
    return TabCounter;
}
exports.NumberOfTabsToIncrease = NumberOfTabsToIncrease;
//# sourceMappingURL=functions.js.map