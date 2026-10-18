import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

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
