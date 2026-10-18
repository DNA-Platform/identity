import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Updated Properties Type v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// Helper type to extract non-Chemical $ properties
type Properties<T> = {
    [K in keyof T as K extends \`$\${infer Rest}\` 
        ? T[K] extends $Chemical
            ? never  // Exclude $properties that are Chemicals
            : Rest   // Include non-Chemical $properties
        : never
    ]: T[K]
} & {
    children?: ReactNode;
};`}
        </CodeBox>
    </Chapter>
);
