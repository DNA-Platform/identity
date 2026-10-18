import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Minimal Hashable Implementation v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// Adding to Object.prototype covers almost everything since most objects inherit from it
Object.defineProperty(Object.prototype, 'hashCode', {
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
});`}
        </CodeBox>
    </Chapter>
);
