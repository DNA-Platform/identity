import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ type-properties v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// For Object prototype - gets type from constructor
Object.defineProperty(Object.prototype, 'type', {
    get: function () {
        return typeOf(this.constructor);
    },
    enumerable: false,
    configurable: true
});

// For Number primitive wrapper - fixed type
Object.defineProperty(Number.prototype, 'type', {
    get: function () {
        return typeOf(Number);
    },
    enumerable: false,
    configurable: true
});

// For String primitive wrapper - fixed type
Object.defineProperty(String.prototype, 'type', {
    get: function () {
        return typeOf(String);
    },
    enumerable: false,
    configurable: true
});

// For Boolean primitive wrapper - fixed type
Object.defineProperty(Boolean.prototype, 'type', {
    get: function () {
        return typeOf(Boolean);
    },
    enumerable: false,
    configurable: true
});

// For Symbol primitive wrapper - fixed type
Object.defineProperty(Symbol.prototype, 'type', {
    get: function () {
        return typeOf(Symbol);
    },
    enumerable: false,
    configurable: true
});

// For BigInt primitive wrapper - fixed type
Object.defineProperty(BigInt.prototype, 'type', {
    get: function () {
        return typeOf(BigInt);
    },
    enumerable: false,
    configurable: true
});`}
        </CodeBox>
    </Chapter>
);
