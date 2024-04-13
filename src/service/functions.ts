import { Regulars } from "../data/regulars";

export function ProcessString(CurString: string, TabsNumber: number) {

    if (CurString.startsWith("//")) {
        return CurString
    }
    let newString = CurString
	for (let key in Regulars) {
		newString = newString.replace(Regulars[key], key)
	}
	if (TabsNumber < 0) {
		return newString.trimStart();
	}
	return '\t'.repeat(TabsNumber) + newString.trimStart();
}

export function NumberOfTabsToDecrease(CurString: string){
    let TabCounter = 0;
    if (CurString.startsWith("od") || CurString.startsWith("fi")) {
        TabCounter += 1;
    }
    if (CurString.indexOf("}") >= 0) {
        TabCounter += 1;
    }
    return TabCounter
}

export function NumberOfTabsToIncrease(CurString: string){
    let TabCounter = 0;
    if (CurString.indexOf("{") >= 0) {
        TabCounter += 1;
    }
    if (CurString.startsWith("if") || CurString.startsWith("do")) {
        TabCounter += 1;
    }
    return TabCounter
}