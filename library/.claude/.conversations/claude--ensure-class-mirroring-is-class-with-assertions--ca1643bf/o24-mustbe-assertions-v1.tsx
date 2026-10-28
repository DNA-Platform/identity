import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ mustbe-assertions v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// For Object prototype
Object.defineProperty(Object.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For Number prototype
Object.defineProperty(Number.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For String prototype
Object.defineProperty(String.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For Boolean prototype
Object.defineProperty(Boolean.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For Symbol prototype
Object.defineProperty(Symbol.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});

// For BigInt prototype
Object.defineProperty(BigInt.prototype, 'mustbe', {
    value: function<T>(type: Constructor<T>): asserts this is T {
        this.must.be(type);
    },
    enumerable: false,
    configurable: true
});`}
        </CodeBox>
    </Chapter>
);
