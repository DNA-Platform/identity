import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Optional Function Props Type v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}export type $Properties<T> = {
    [K in keyof T as K extends \`\${infer Rest}\` ? (T[K] extends Function ? never : Rest) : never]: T[K]
} & {
    [K in keyof T as K extends \`\${infer Rest}\` ? (T[K] extends Function ? Rest : never) : never]?: T[K]
};`}
        </CodeBox>
    </Chapter>
);
