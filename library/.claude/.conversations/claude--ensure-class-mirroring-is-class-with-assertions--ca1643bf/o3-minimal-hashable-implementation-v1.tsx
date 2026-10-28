import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

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
