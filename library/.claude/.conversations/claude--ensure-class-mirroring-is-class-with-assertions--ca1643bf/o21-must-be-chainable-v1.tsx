import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ must-be-chainable v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}export class MustBe<T = any> extends Function {
    private static formatMessage(message?: string): string {
        if (!message) return message;
        
        return message.replace(/^because[:\\s]?\\s*/i, (match) => {
            const restOfMessage = message.slice(match.length);
            return restOfMessage.charAt(0).toUpperCase() + restOfMessage.slice(1);
        });
    }

    constructor(private value: T) {
        super();
        return new Proxy(this, {
            apply: (target, thisArg, args) => {
                const [type, message] = args;
                if (!instanceIs(this.value, type)) {
                    throw new Error(MustBe.formatMessage(message) || \`Value must be instance of \${type.name}\`);
                }
                return this.value;
            },
            get: (target, prop) => {
                return (this as any)[prop];
            },
        });
    }

    undefined(message?: string): T {
        if (!instanceIs.undefined(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be undefined");
        }
        return this.value;
    }

    null(message?: string): T {
        if (!instanceIs.null(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be null");
        }
        return this.value;
    }

    string(message?: string): T {
        if (!instanceIs.string(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a string");
        }
        return this.value;
    }

    number(message?: string): T {
        if (!instanceIs.number(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a number");
        }
        return this.value;
    }

    boolean(message?: string): T {
        if (!instanceIs.boolean(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a boolean");
        }
        return this.value;
    }

    bigint(message?: string): T {
        if (!instanceIs.bigint(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a bigint");
        }
        return this.value;
    }

    symbol(message?: string): T {
        if (!instanceIs.symbol(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a symbol");
        }
        return this.value;
    }

    object(message?: string): T {
        if (!instanceIs.object(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be an object");
        }
        return this.value;
    }

    function(message?: string): T {
        if (!instanceIs.function(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a function");
        }
        return this.value;
    }

    type(message?: string): T {
        if (!instanceIs.type(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a type");
        }
        return this.value;
    }

    emptyObject(message?: string): T {
        if (!instanceIs.emptyObject(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be an empty object");
        }
        return this.value;
    }

    populatedObject(message?: string): T {
        if (!instanceIs.populatedObject(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a populated object");
        }
        return this.value;
    }

    array(message?: string): T {
        if (!instanceIs.array(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be an array");
        }
        return this.value;
    }

    emptyArray(message?: string): T {
        if (!instanceIs.emptyArray(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be an empty array");
        }
        return this.value;
    }

    populatedArray(message?: string): T {
        if (!instanceIs.populatedArray(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be a populated array");
        }
        return this.value;
    }

    specified(message?: string): T {
        if (!instanceIs.specified(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be specified");
        }
        return this.value;
    }

    unspecified(message?: string): T {
        if (!instanceIs.unspecified(this.value)) {
            throw new Error(MustBe.formatMessage(message) || "Value must be unspecified");
        }
        return this.value;
    }

    equal(other: any, message?: string): T {
        if (!instanceIs.equal(this.value, other)) {
            throw new Error(MustBe.formatMessage(message) || \`Value must be equal to \${other}\`);
        }
        return this.value;
    }

    instanceOf<U>(type: Constructor<U>, message?: string): T {
        if (!instanceIs.instanceOf(this.value, type)) {
            throw new Error(MustBe.formatMessage(message) || \`Value must be instance of \${type.name}\`);
        }
        return this.value;
    }
}`}
        </CodeBox>
    </Chapter>
);
