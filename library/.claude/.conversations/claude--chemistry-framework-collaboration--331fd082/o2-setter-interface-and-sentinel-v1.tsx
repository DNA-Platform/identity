import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Setter Interface and Sentinel v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// Setter function interface
export interface Setter<T extends $Chemical = $Chemical> {
    (value: T): void;
    instance?: $Chemical;  // The instance that owns this setter
}

// Sentinel value that marks a property as a setter placeholder
export const $setter: Setter = (value) => {
    throw new Error('$setter is a placeholder that should be replaced with an actual setter');
};`}
        </CodeBox>
    </Chapter>
);
