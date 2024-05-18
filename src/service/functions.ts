import { Regulars, GroupRegular } from "../data/regulars";

export function ProcessString(CurString: string, TabsNumber: number) {

    if (CurString.startsWith("//")) {
        return CurString
    }
    let newString = CurString
    for (let key in Regulars) {
        newString = newString.replace(Regulars[key], key)
    }
    GroupRegular.forEach(element => {
        let matcher = newString.match(element.regs);
        if (matcher != undefined) {
            let replacingPart = "";
            for (let index = 1; index < matcher.length; index++) {
                replacingPart += element.replaceTo[index - 1] + matcher[index]
            }
            replacingPart += element.replaceTo[matcher.length - 1]
            newString = newString.replace(matcher[0], replacingPart)
        };

    });
    if (TabsNumber < 0) {
        return newString.trimStart();
    };
    return '\t'.repeat(TabsNumber) + newString.trimStart();
}

export function NumberOfTabsToDecrease(CurString: string) {
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
    return TabCounter
}

export function NumberOfTabsToIncrease(CurString: string) {
    let TabCounter = 0;
    if (CurString.indexOf("{") >= 0) {
        TabCounter += 1;
    }
    if (CurString.startsWith("if ") || CurString.startsWith("do ")
        || CurString.endsWith(" if") || CurString.endsWith(" do")
        || CurString == "do" || CurString == "if") {
        TabCounter += 1;
    }
    return TabCounter
}