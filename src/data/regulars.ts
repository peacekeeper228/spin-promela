import { IRegulars } from '../model/regulars'

export let Regulars: IRegulars = {
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
}