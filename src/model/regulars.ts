export interface IRegulars {
	[key: string]: RegExp;
}

export interface IWordRegulars {
	regs: RegExp, wordNumber: number, replaceTo: string[]
}