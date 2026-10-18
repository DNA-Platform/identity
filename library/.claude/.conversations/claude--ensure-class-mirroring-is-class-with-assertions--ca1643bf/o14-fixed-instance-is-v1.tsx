import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ fixed-instance-is v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}export interface InstanceIs {
    <T>(value: any, constructor: Constructor<T>, orThrow?: { orThrow: boolean | string }): value is T;
}

export class InstanceIs extends Function {
    constructor() {
        super();
        return new Proxy(this, {
            apply: (target, thisArg, args) => (this.instanceOf as Function)(...args),
            get: (target, prop) => {
                return (this as any)[prop];
            },
        });
    }

    instanceOf<T>(value: any, type: Constructor<T>, orThrow?: { orThrow: boolean | string }): value is T {
        const isInstanceOf = value instanceof type;
        return this._handleResult(isInstanceOf, orThrow, \`The provided value is not an instance of \${type.name ?? "the specified constructor"}.\`);
    }

    // Rest of your methods stay the same...

    private _<T>(value: any, constructor: Constructor<T>, orThrow?: { orThrow: boolean | string }): value is T {
        let result: boolean;
    
        // Handle cases where \`constructor\` is a primitive type
        if (constructor === String) {
            result = value instanceof String;  // Notice we're using instanceof here consistently
        } else if (constructor === Number) {
            result = value instanceof Number;
        } else if (constructor === Boolean) {
            result = value instanceof Boolean;
        } else if (constructor === BigInt) {
            result = typeof value === "bigint";  // BigInt is special case
        } else if (constructor === Symbol) {
            result = typeof value === "symbol";  // Symbol is special case
        } else if (constructor === Object) {
            result = value instanceof Object;
        } else if (constructor === Function) {
            result = value instanceof Function;
        } else {
            // For non-primitive types, use \`instanceof\`
            result = value instanceof constructor;
        }
    
        return this._handleResult(result, orThrow, \`The provided value is not an instance of \${constructor.name ?? "the specified constructor"}.\`);
    }

    private _handleResult(result: boolean, orThrow?: { orThrow: boolean | string }, message?: string): boolean {
        if (!result && orThrow?.orThrow) {
            const errorMessage = typeof orThrow.orThrow === 'string' ? orThrow.orThrow : message || "The validation failed.";
            throw new Error(errorMessage);
        }
        return result;
    }
}

export const instanceIs: InstanceIs = new InstanceIs();`}
        </CodeBox>
    </Chapter>
);
