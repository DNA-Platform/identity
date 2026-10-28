import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Setter Interface and Sentinel v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// Setter function interface
export interface Setter<T extends $Chemical = $Chemical> {
    (value: T): void;
    instance?: $Chemical;  // The instance that owns this setter
}`}
        </CodeBox>
    </Chapter>
);
