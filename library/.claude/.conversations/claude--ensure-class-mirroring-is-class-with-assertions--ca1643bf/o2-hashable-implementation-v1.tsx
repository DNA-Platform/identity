import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Hashable Implementation v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// Helper function to define hashCode property
const defineHashCode = (prototype: any) => {
    Object.defineProperty(prototype, 'hashCode', {
        get: function () {
            if (this._hashCode === undefined) {
                Object.defineProperty(this, '_hashCode', {
                    value: Hash.forNumber(Math.random()),
                    enumerable: false
                });
            }
            return this._hashCode;
        },
        enumerable: false,
        configurable: true
    });
};

// Add hashCode to Object prototype (covers plain objects)
defineHashCode(Object.prototype);

// Add hashCode to Function prototype (covers functions and classes)
defineHashCode(Function.prototype);

// Add hashCode to Array prototype
defineHashCode(Array.prototype);

// Add hashCode to primitive wrapper prototypes
defineHashCode(String.prototype);
defineHashCode(Number.prototype);
defineHashCode(Boolean.prototype);
defineHashCode(Symbol.prototype);
defineHashCode(BigInt.prototype);

// Add hashCode to Date prototype
defineHashCode(Date.prototype);

// Add hashCode to RegExp prototype
defineHashCode(RegExp.prototype);

// Add hashCode to Error prototype and its derivatives
defineHashCode(Error.prototype);

// Add hashCode to Promise prototype
defineHashCode(Promise.prototype);

// Add hashCode to Map prototype
defineHashCode(Map.prototype);

// Add hashCode to Set prototype
defineHashCode(Set.prototype);

// Add hashCode to WeakMap prototype
defineHashCode(WeakMap.prototype);

// Add hashCode to WeakSet prototype
defineHashCode(WeakSet.prototype);

// Add hashCode to TypedArray prototypes
defineHashCode(Int8Array.prototype);
defineHashCode(Uint8Array.prototype);
defineHashCode(Uint8ClampedArray.prototype);
defineHashCode(Int16Array.prototype);
defineHashCode(Uint16Array.prototype);
defineHashCode(Int32Array.prototype);
defineHashCode(Uint32Array.prototype);
defineHashCode(Float32Array.prototype);
defineHashCode(Float64Array.prototype);
defineHashCode(BigInt64Array.prototype);
defineHashCode(BigUint64Array.prototype);

// Add hashCode to ArrayBuffer prototype
defineHashCode(ArrayBuffer.prototype);

// Add hashCode to SharedArrayBuffer prototype
defineHashCode(SharedArrayBuffer.prototype);

// Add hashCode to DataView prototype
defineHashCode(DataView.prototype);`}
        </CodeBox>
    </Chapter>
);
