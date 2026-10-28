import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

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
