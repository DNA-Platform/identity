import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Command Builder Architecture v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}
// Singleton command builder that maintains the current command chain
class CommandBuilder {
    private static instance: CommandBuilder;
    private _steps: string[] = [];
    private _currentReference: string | null = null;

    private constructor() {}

    static get current(): CommandBuilder {
        if (!CommandBuilder.instance) {
            CommandBuilder.instance = new CommandBuilder();
        }
        return CommandBuilder.instance;
    }

    addStep(expression: string) {
        this._steps.push(expression);
        return this;
    }

    setCurrentReference(ref: string) {
        this._currentReference = ref;
        return this;
    }

    reset() {
        CommandBuilder.instance = new CommandBuilder();
    }

    compile(): string {
        return this._steps.join('\\n');
    }
}

// Simplified Reference class that works with the command builder
class Reference<T = any> {
    constructor(private address: string) {
        CommandBuilder.current.setCurrentReference(address);
    }

    dot<K extends keyof T>(property: K): Reference<T[K]> {
        const newAddress = \`\${this.address}.\${String(property)}\`;
        CommandBuilder.current.setCurrentReference(newAddress);
        return new Reference<T[K]>(newAddress);
    }

    call(...args: any[]): Reference {
        const callExpr = \`\${this.address}(\${args.map(arg => JSON.stringify(arg)).join(',')})\`;
        CommandBuilder.current.addStep(callExpr);
        return new Reference(callExpr);
    }

    assign(value: any): void {
        const assignExpr = \`\${this.address} = \${JSON.stringify(value)};\`;
        CommandBuilder.current.addStep(assignExpr);
    }

    execute(): void {
        const script = CommandBuilder.current.compile();
        // Execute the script (implementation depending on context)
        CommandBuilder.current.reset();
    }
}

// Type-safe entry points for the API
interface IllustratorApp {
    documents: () => Reference<DocumentList>;
    activeDocument: Reference<Document>;
    // ... other app properties
}

interface DocumentList {
    add: (name: string) => Reference<Document>;
    // ... other document list methods
}

// Usage example:
const app = new Reference<IllustratorApp>('app');
const newDoc = app.dot('documents').call().dot('add').call('NewDocument');
newDoc.execute();
`}
        </CodeBox>
    </Chapter>
);
