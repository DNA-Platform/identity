import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ array-split v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`split(separator: string = ""): A<string> {
    var str = this.s();
    return new A<string>(str.split(separator));
}`}
        </CodeBox>
    </Chapter>
);
