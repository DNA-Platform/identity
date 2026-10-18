import * as vscode from 'vscode';
import * as svgson from 'svgson';
import * as ts from 'typescript';

export class SvgDocument {
    private uri: vscode.Uri;
    private document: vscode.TextDocument;
    private _ast?: svgson.INode;
    private dirty: boolean = false;
    private initialized: boolean = false;

    constructor(document: vscode.TextDocument) {
        this.uri = document.uri;
        this.document = document;
    }

    get ast(): svgson.INode {
        if (!this.initialized || !this._ast) {
            throw new Error('SvgDocument not initialized. Call initialize() first.');
        }
        return this._ast;
    }

    async initialize(): Promise<void> {
        if (this.initialized) return;
        
        const content = this.document.getText() || '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"></svg>';
        this._ast = await svgson.parse(content);
        this.initialized = true;
        console.log('SVG Document initialized');
    }

    markDirty(): void {
        this.dirty = true;
    }

    async sync(): Promise<void> {
        if (!this.dirty || !this._ast) return;

        const newContent = svgson.stringify(this._ast);
        const edit = new vscode.WorkspaceEdit();
        edit.replace(
            this.uri,
            new vscode.Range(
                this.document.positionAt(0),
                this.document.positionAt(this.document.getText().length)
            ),
            newContent
        );
        
        await vscode.workspace.applyEdit(edit);
        this.dirty = false;
        console.log('SVG Document synced');
    }
}

export class TypeScriptServiceRepl {
    private document: SvgDocument | null = null;
    private terminal: vscode.Terminal;
    private virtualDocUri: vscode.Uri;
    private _virtualDoc?: vscode.TextDocument;
    private initialized: boolean = false;
    private outputChannel: vscode.OutputChannel;

    constructor() {
        this.terminal = vscode.window.createTerminal({
            name: 'TypeScript SVG REPL',
            shellPath: process.platform === 'win32' ? 'cmd.exe' : 'bash'
        });
        this.virtualDocUri = vscode.Uri.parse('untitled:repl.ts');
        this.outputChannel = vscode.window.createOutputChannel('TypeScript SVG REPL');
        
        // Show the terminal immediately
        this.terminal.show(true);
    }

    async initialize() {
        if (this.initialized) return;

        try {
            // Create our virtual TypeScript document using the URI
            this._virtualDoc = await vscode.workspace.openTextDocument(this.virtualDocUri);
            this.initialized = true;
            this.outputChannel.appendLine('TypeScript REPL initialized');
        } catch (error) {
            this.outputChannel.appendLine(`Failed to initialize REPL: ${error}`);
            throw error;
        }
    }

    async setActiveDocument(document: SvgDocument) {
        this.document = document;

        if (!this._virtualDoc) {
            throw new Error('Virtual document not initialized');
        }

        try {
            const typeContent = `
                interface SvgNode {
                    name: string;
                    type: string;
                    value: string;
                    attributes: { [key: string]: string };
                    children: SvgNode[];
                }

                declare const svg: SvgNode;
                declare function markDirty(): void;
                declare function sync(): Promise<void>;
            `;

            const edit = new vscode.WorkspaceEdit();
            edit.replace(
                this.virtualDocUri,
                new vscode.Range(
                    new vscode.Position(0, 0),
                    new vscode.Position(this._virtualDoc.lineCount, 0)
                ),
                typeContent
            );
            await vscode.workspace.applyEdit(edit);
            this.outputChannel.appendLine('Updated type definitions for active document');
        } catch (error) {
            this.outputChannel.appendLine(`Failed to set active document: ${error}`);
            throw error;
        }
    }

    async executeCommand(command: string) {
        if (!this.document) {
            this.outputChannel.appendLine('No active document available');
            return;
        }

        try {
            const diagnostics = await vscode.languages.getDiagnostics(this.virtualDocUri);
            if (diagnostics.length > 0) {
                const errors = diagnostics
                    .filter(d => d.severity === vscode.DiagnosticSeverity.Error)
                    .map(d => d.message)
                    .join('\n');
                if (errors) {
                    this.terminal.sendText(`// TypeScript Errors:\n${errors}`);
                    this.outputChannel.appendLine(`TypeScript errors: ${errors}`);
                    return;
                }
            }

            const context = {
                svg: this.document.ast,
                markDirty: () => this.document?.markDirty(),
                sync: () => this.document?.sync()
            };

            const result = new Function('context', `
                with (context) {
                    return (${command});
                }
            `)(context);

            if (result !== undefined) {
                const output = JSON.stringify(result, null, 2);
                this.terminal.sendText(`// Result:\n${output}`);
                this.outputChannel.appendLine(`Command executed successfully: ${command}`);
            }

            await this.document?.sync();
        } catch (error) {
            const errorMessage = `Error executing command: ${error}`;
            this.terminal.sendText(`// ${errorMessage}`);
            this.outputChannel.appendLine(errorMessage);
        }
    }

    show() {
        this.terminal.show(true);
    }

    dispose() {
        this.terminal.dispose();
        this.outputChannel.dispose();
    }
}

export async function activate(context: vscode.ExtensionContext) {
    console.log('Activating TypeScript SVG REPL extension');
    
    let currentDocument: SvgDocument | null = null;
    const repl = new TypeScriptServiceRepl();
    
    // Initialize the REPL
    await repl.initialize();

    // Register commands with proper error handling
    const registerCommand = (commandId: string, handler: (...args: any[]) => any) => {
        const wrappedHandler = async (...args: any[]) => {
            try {
                await handler(...args);
            } catch (error) {
                vscode.window.showErrorMessage(`Command failed: ${error}`);
            }
        };
        return vscode.commands.registerCommand(commandId, wrappedHandler);
    };

    // Register REPL commands
    context.subscriptions.push(
        registerCommand('extension.openSvgRepl', () => {
            repl.show();
        }),

        registerCommand('extension.executeReplCommand', async () => {
            const command = await vscode.window.showInputBox({
                prompt: 'Enter REPL command',
                ignoreFocusOut: true
            });

            if (command) {
                await repl.executeCommand(command);
            }
        }),

        vscode.window.onDidChangeActiveTextEditor(async (editor) => {
            if (editor?.document.languageId === 'xml') {
                currentDocument = new SvgDocument(editor.document);
                await currentDocument.initialize();
                await repl.setActiveDocument(currentDocument);
            }
        })
    );

    // Initialize with current active editor if it's an SVG
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor?.document.languageId === 'xml') {
        currentDocument = new SvgDocument(activeEditor.document);
        await currentDocument.initialize();
        await repl.setActiveDocument(currentDocument);
    }

    // Clean up
    context.subscriptions.push({
        dispose: () => {
            repl.dispose();
        }
    });
}

export function deactivate() {
    // Cleanup will be handled by disposables
}