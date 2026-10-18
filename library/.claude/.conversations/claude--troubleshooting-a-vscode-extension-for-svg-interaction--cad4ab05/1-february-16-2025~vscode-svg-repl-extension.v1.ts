import * as vscode from 'vscode';
import * as svgson from 'svgson';

// Interfaces for better type safety
interface SvgNode {
    name: string;
    type: string;
    value: string;
    attributes: { [key: string]: string };
    children: SvgNode[];
}

interface ReplContext {
    svg: SvgNode;
    markDirty: () => void;
    sync: () => Promise<void>;
}

// Handles SVG document parsing and modifications
class SvgDocument {
    private uri: vscode.Uri;
    private document: vscode.TextDocument;
    private _ast?: SvgNode;
    private dirty: boolean = false;
    private initialized: boolean = false;

    constructor(document: vscode.TextDocument) {
        this.uri = document.uri;
        this.document = document;
    }

    get ast(): SvgNode {
        if (!this.initialized || !this._ast) {
            throw new Error('SvgDocument not initialized. Call initialize() first.');
        }
        return this._ast;
    }

    async initialize(): Promise<void> {
        if (this.initialized) return;
        
        try {
            const content = this.document.getText() || '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"></svg>';
            this._ast = await svgson.parse(content);
            this.initialized = true;
            console.log('SVG Document initialized successfully');
        } catch (error) {
            console.error('Failed to initialize SVG document:', error);
            throw error;
        }
    }

    markDirty(): void {
        this.dirty = true;
    }

    async sync(): Promise<void> {
        if (!this.dirty || !this._ast) return;

        try {
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
            console.log('SVG Document synced successfully');
        } catch (error) {
            console.error('Failed to sync SVG document:', error);
            throw error;
        }
    }
}

// Manages the REPL terminal and command execution
class SvgRepl {
    private document: SvgDocument | null = null;
    private terminal: vscode.Terminal;
    private outputChannel: vscode.OutputChannel;

    constructor() {
        this.terminal = vscode.window.createTerminal({
            name: 'SVG REPL',
            shellPath: process.platform === 'win32' ? 'cmd.exe' : 'bash'
        });
        this.outputChannel = vscode.window.createOutputChannel('SVG REPL');
        this.terminal.show(true);  // Show terminal and focus it
        this.log('SVG REPL initialized');
    }

    private log(message: string) {
        this.outputChannel.appendLine(`[${new Date().toISOString()}] ${message}`);
    }

    setActiveDocument(document: SvgDocument) {
        this.document = document;
        this.log('Active document set');
    }

    async executeCommand(command: string) {
        if (!this.document) {
            this.log('No active SVG document');
            vscode.window.showErrorMessage('No SVG document is currently active');
            return;
        }

        try {
            const context: ReplContext = {
                svg: this.document.ast,
                markDirty: () => this.document?.markDirty(),
                sync: () => this.document?.sync() || Promise.resolve()
            };

            this.log(`Executing command: ${command}`);
            
            const result = new Function('context', `
                with (context) {
                    return (${command});
                }
            `)(context);

            if (result !== undefined) {
                const output = JSON.stringify(result, null, 2);
                this.terminal.sendText(`// Result:`);
                this.terminal.sendText(output);
                this.log(`Command executed successfully: ${output}`);
            }

            await this.document.sync();
        } catch (error) {
            const errorMessage = `Error executing command: ${error}`;
            this.terminal.sendText(`// ${errorMessage}`);
            this.log(errorMessage);
            vscode.window.showErrorMessage(errorMessage);
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

// Extension activation and command registration
export async function activate(context: vscode.ExtensionContext) {
    console.log('Activating SVG REPL extension');
    
    let currentDocument: SvgDocument | null = null;
    const repl = new SvgRepl();

    // Register commands
    const disposables = [
        vscode.commands.registerCommand('extension.openSvgRepl', () => {
            repl.show();
        }),

        vscode.commands.registerCommand('extension.executeReplCommand', async () => {
            const command = await vscode.window.showInputBox({
                prompt: 'Enter REPL command',
                placeHolder: 'e.g., svg.attributes.width = "200"',
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
                repl.setActiveDocument(currentDocument);
            }
        }),

        {
            dispose: () => {
                repl.dispose();
            }
        }
    ];

    context.subscriptions.push(...disposables);

    // Initialize with current active editor if it's an SVG
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor?.document.languageId === 'xml') {
        currentDocument = new SvgDocument(activeEditor.document);
        await currentDocument.initialize();
        repl.setActiveDocument(currentDocument);
    }
}

export function deactivate() {
    // Cleanup will be handled by disposables
}