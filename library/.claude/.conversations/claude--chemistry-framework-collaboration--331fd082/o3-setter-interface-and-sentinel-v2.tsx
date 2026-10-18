import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

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
