"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupRegular = exports.Regulars = void 0;
exports.Regulars = {
    ' > ': RegExp(/ *> */, 'g'),
    ' < ': RegExp(/ *< */, 'g'),
    ' = ': RegExp(/ *= */, 'g'),
    ' + ': RegExp(/ *\+ */, 'g'),
    ' - ': RegExp(/ *- */, 'g'),
    ' * ': RegExp(/ *\* */, 'g'),
    ' / ': RegExp(/ *\/ */, 'g'),
    '!': RegExp(/ *! */, 'g'),
    '?': RegExp(/ *[?] */, 'g'),
    '// ': RegExp(/ *\/ *\/ */, 'g'),
    '/* ': RegExp(/ *\/ *\* */, 'g'),
    '*/ ': RegExp(/ *\* *\/ */, 'g'),
    '++': RegExp(/ *\+ *\+ */, 'g'),
    '--': RegExp(/ *- *- */, 'g'),
    ' == ': RegExp(/ *= *= */, 'g'),
    ' != ': RegExp(/ *! *= */, 'g'),
    ' <= ': RegExp(/ *< *= */, 'g'),
    ' >= ': RegExp(/ *> *= */, 'g'),
    ' && ': RegExp(/ *&& */, 'g'),
    ' || ': RegExp(/ *\|\| */, 'g'),
    ' -> ': RegExp(/ *- *> */, 'g'),
    ':: ': RegExp(/:: */, 'g'),
    ' <> ': RegExp(/ *< *> */, 'g'),
    ';': RegExp(/ *; */, 'g'),
    ',': RegExp(/ *, */, 'g')
};
exports.GroupRegular = [
    { wordNumber: 1, regs: RegExp(/ *[?] *< *([\w ,]+?) *>/), replaceTo: ['?<', '>'] },
    { wordNumber: 1, regs: RegExp(/ *[?] *\[ *([\w ,]+?) *\]/), replaceTo: ['?[', ']'] }
];
//# sourceMappingURL=regulars.js.map