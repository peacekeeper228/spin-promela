import { IRegulars, IWordRegulars } from '../model/regulars'

export let Regulars: IRegulars = {
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
}

export let GroupRegular: IWordRegulars[] = [
    {wordNumber: 1, regs: RegExp(/ *[?] *< *([\w ,]+?) *>/), replaceTo: ['?<','>']},
    {wordNumber: 1, regs: RegExp(/ *[?] *\[ *([\w ,]+?) *\]/), replaceTo: ['?[',']']}
]