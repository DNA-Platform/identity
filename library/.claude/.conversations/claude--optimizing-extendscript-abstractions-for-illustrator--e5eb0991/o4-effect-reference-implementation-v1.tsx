import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ effect-reference-implementation v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}
class $Effect {
    protected _expression: string;
    protected _variable?: string;
    
    constructor(expression: string, variable?: string) {
        this._expression = expression;
        this._variable = variable;
    }

    expression(): string { 
        return this._expression; 
    }

    $var(name: string): $Effect {
        this._variable = name;
        this._expression = \`var \${name} = \${this._expression};\`;
        return this;
    }

    $dispatch(): $Reference {
        $Command.current.addStep(this);
        return this._variable ? 
            new $Reference(this._variable) : 
            new $Reference("$.global");
    }

    toString(): string {
        return this.expression();
    }
}

class $Command {
    private static _instance: $Command;
    private _steps: $Effect[] = [];

    static get current(): $Command {
        if (!this._instance) {
            this._instance = new $Command();
        }
        return this._instance;
    }

    addStep(effect: $Effect): void {
        this._steps.push(effect);
    }

    $compile(): string {
        return this._steps.map(e => e.expression()).join('\\n');
    }

    $execute<T = any>(global: boolean = false): T {
        const script = this.$compile();
        if (global) {
            return eval.call($.global || globalThis, script);
        }
        return eval(script);
    }

    static reset(): void {
        this._instance = new $Command();
    }
}

class $Reference<Type = any> extends $Effect {
    constructor(address: string) {
        super(address);
    }

    $func<T = any>(selector: (o: Type) => T): $Reference<T> {
        return new $Reference<T>(\`\${this.expression()}.\${selector.toString()}\`);
    }

    $resolve(): Type {
        const effect = new $Effect(this.expression());
        const ref = effect.$var("__temp__").$dispatch();
        return $Command.current.$execute();
    }

    $assign(value: $Arg): $Reference<Type> {
        const effect = new $Effect(\`\${this.expression()} = \${$arg(value)}\`);
        return effect.$dispatch();
    }

    $var(name: string): $Reference<Type> {
        return super.$var(name).$dispatch() as $Reference<Type>;
    }
}

// Helper functions remain largely the same
function $ref<Type = any>(expression: string): $Reference<Type> {
    return new $Reference<Type>(expression);
}
`}
        </CodeBox>
    </Chapter>
);
