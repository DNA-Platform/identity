
import * as vscode from 'vscode';
import * as ts from 'typescript';

// Base class for all source files
abstract class SourceFile {
    protected document: vscode.TextDocument;
    protected languageService: vscode.typescript.LanguageService;

    constructor(document: vscode.TextDocument) {
        this.document = document;
    }

    protected async initialize() {
        // Get the language service for the current document
        this.languageService = await vscode.languages.typescript.getLanguageService();
    }
}

// TypeScript-specific source file handling
class TypeScriptSourceFile extends SourceFile {
    constructor(document: vscode.TextDocument) {
        super(document);
    }

    // Add $ prefix to all members
    async addDollarToMembers() {
        // Get edits from language service and apply them through VSCode's edit API
        // to ensure proper undo/redo handling
        const workspaceEdit = new vscode.WorkspaceEdit();
        
        // Get the source file from the language service
        const sourceFile = await this.languageService.getSourceFile(this.document.uri);
        
        // Find all member nodes and create edits
        const edits = await this.languageService.findRenameLocations(
            this.document.uri,
            this.document.positionAt(0),
            false,
            false
        );

        if (edits) {
            for (const edit of edits) {
                const newName = '$' + edit.text;
                workspaceEdit.replace(this.document.uri, edit.range, newName);
            }
        }

        // Apply edits through VSCode to get undo/redo support
        await vscode.workspace.applyEdit(workspaceEdit);
    }
}

// Register the command
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand(
        'extension.addDollarToMembers',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (editor && editor.document.languageId === 'typescript') {
                const sourceFile = new TypeScriptSourceFile(editor.document);
                await sourceFile.initialize();
                await sourceFile.addDollarToMembers();
            }
        }
    );

    context.subscriptions.push(disposable);
}
