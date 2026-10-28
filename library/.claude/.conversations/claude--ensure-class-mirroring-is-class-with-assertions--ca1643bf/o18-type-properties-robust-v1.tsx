import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ type-properties-robust v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// For Object prototype
Object.defineProperty(Object.prototype, 'type', {
    get: function () {
        return typeOf(this.constructor);
    },
    enumerable: false,
    configurable: true
});

// For Number primitive wrapper - using constructor for subclassing support
Object.defineProperty(Number.prototype, 'type', {
    get: function () {
        return typeOf(this.constructor);
    },
    enumerable: false,
    configurable: true
});

// For String primitive wrapper - using constructor for subclassing support
Object.defineProperty(String.prototype, 'type', {
    get: function () {
        return typeOf(this.constructor);
    },
    enumerable: false,
    configurable: true
});

// For Boolean primitive wrapper - using constructor for subclassing support
Object.defineProperty(Boolean.prototype, 'type', {
    get: function () {
        return typeOf(this.constructor);
    },
    enumerable: false,
    configurable: true
});

// For Symbol primitive wrapper - using constructor for subclassing support
Object.defineProperty(Symbol.prototype, 'type', {
    get: function () {
        return typeOf(this.constructor);
    },
    enumerable: false,
    configurable: true
});

// For BigInt primitive wrapper - using constructor for subclassing support
Object.defineProperty(BigInt.prototype, 'type', {
    get: function () {
        return typeOf(this.constructor);
    },
    enumerable: false,
    configurable: true
});`}
        </CodeBox>
    </Chapter>
);
