"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regulars = void 0;
exports.Regulars = {
    ' > ': RegExp(/ *> */, 'g'),
    ' < ': RegExp(/ *< */, 'g'),
    ' = ': RegExp(/ *= */, 'g'),
    ' + ': RegExp(/ *\+ */, 'g'),
    ' - ': RegExp(/ *- */, 'g'),
    ' * ': RegExp(/ *\* */, 'g'),
    ' / ': RegExp(/ *\/ */, 'g'),
    '// ': RegExp(/ *\/ *\/ */, 'g'),
    '/* ': RegExp(/ *\/ *\* */, 'g'),
    '*/ ': RegExp(/ *\* *\/ */, 'g'),
    '++': RegExp(/ *\+ *\+ */, 'g'),
    ' == ': RegExp(/ *= *= */, 'g'),
    ' != ': RegExp(/ *! *= */, 'g'),
    ' <= ': RegExp(/ *< *= */, 'g'),
    ' >= ': RegExp(/ *> *= */, 'g'),
    ' && ': RegExp(/ *&& */, 'g'),
    ' || ': RegExp(/ *\|\| */, 'g'),
    ' -> ': RegExp(/ *- *> */, 'g'),
    ':: ': RegExp(/:: */, 'g'),
    ' <> ': RegExp(/ *< *> */, 'g')
};
//# sourceMappingURL=regulars.js.map