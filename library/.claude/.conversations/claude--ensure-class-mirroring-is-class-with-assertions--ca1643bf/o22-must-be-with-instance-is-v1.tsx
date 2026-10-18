import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ must-be-with-instance-is v1 ]]</Title>
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
                instanceIs(this.value, type, { orThrow: MustBe.formatMessage(message) });
                return this.value;
            },
            get: (target, prop) => {
                return (this as any)[prop];
            },
        });
    }

    undefined(message?: string): T {
        instanceIs.undefined(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    null(message?: string): T {
        instanceIs.null(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    string(message?: string): T {
        instanceIs.string(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    number(message?: string): T {
        instanceIs.number(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    boolean(message?: string): T {
        instanceIs.boolean(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    true(message?: string): T {
        instanceIs.true(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    false(message?: string): T {
        instanceIs.false(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    bigint(message?: string): T {
        instanceIs.bigint(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    symbol(message?: string): T {
        instanceIs.symbol(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    object(message?: string): T {
        instanceIs.object(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    function(message?: string): T {
        instanceIs.function(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    type(message?: string): T {
        instanceIs.type(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    emptyObject(message?: string): T {
        instanceIs.emptyObject(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    populatedObject(message?: string): T {
        instanceIs.populatedObject(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    array(message?: string): T {
        instanceIs.array(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    emptyArray(message?: string): T {
        instanceIs.emptyArray(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    populatedArray(message?: string): T {
        instanceIs.populatedArray(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    specified(message?: string): T {
        instanceIs.specified(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    unspecified(message?: string): T {
        instanceIs.unspecified(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    positiveInfinity(message?: string): T {
        instanceIs.positiveInfinity(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    negativeInfinity(message?: string): T {
        instanceIs.negativeInfinity(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    nan(message?: string): T {
        instanceIs.nan(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    notNan(message?: string): T {
        instanceIs.notNan(this.value, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    equal(other: any, message?: string): T {
        instanceIs.equal(this.value, other, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    instanceOf<U>(type: Constructor<U>, message?: string): T {
        instanceIs.instanceOf(this.value, type, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    parentType(parentType: Constructor, message?: string): T {
        instanceIs.parentType(this.value, parentType, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }

    childType(childType: Constructor, message?: string): T {
        instanceIs.childType(this.value, childType, { orThrow: MustBe.formatMessage(message) });
        return this.value;
    }
}`}
        </CodeBox>
    </Chapter>
);
