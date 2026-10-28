import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Optional Function Props Type v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}export type $Properties<T> = {
    [K in keyof T as K extends \`$\${infer Rest}\` ? Rest : never]: T[K] extends Function ? T[K] | undefined : T[K]
} & {
    [K in keyof T as K extends \`$\${infer Rest}\` ? (T[K] extends Function ? Rest : never) : never]?: T[K]
};`}
        </CodeBox>
    </Chapter>
);
