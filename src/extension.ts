// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ProcessString, NumberOfTabsToDecrease, NumberOfTabsToIncrease } from "./service/functions";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "spin-promela" is now active!');

	vscode.languages.registerDocumentFormattingEditProvider('promela', {
		provideDocumentFormattingEdits: (document: vscode.TextDocument) => {
			let tabCounter = 0;
			let result: vscode.TextEdit[] = [];

			for (let index = 0; index < document.lineCount; index++) {
				const currentLine = document.lineAt(index);
				const textString = currentLine.text.trimStart()
				tabCounter -= NumberOfTabsToDecrease(textString)
				const processedString = (textString.startsWith("::")) ?
					ProcessString(textString, tabCounter - 1) :
					ProcessString(textString, tabCounter)
				let range: vscode.Range;
				if (index == 0) {
					range = new vscode.Range(currentLine.range.start, currentLine.range.end);
				} else {
					range = new vscode.Range(document.lineAt(index - 1).range.end, currentLine.range.end);
				}
				if (index != document.lineCount - 1) {
					result.push(new vscode.TextEdit(range, processedString + '\n'))
				} else {
					result.push(new vscode.TextEdit(range, processedString))
				}
				tabCounter += NumberOfTabsToIncrease(textString)
			}
			return result;
		}
	});
}

// This method is called when your extension is deactivated
export function deactivate() { }
