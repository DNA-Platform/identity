import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 September 2025](2025-09-07)</Date>
        </Dated>
        <Title>[[ 7 September 2025 ]]</Title>
        <Message
            at="2025-09-07T08:49:18.984674Z"
        >
            <Origin>aca59544-b436-4fd9-82ab-2eea44a04949</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you write me a type called State which has string indexer to any</Paragraph>
        </Message>
        <Message
            at="2025-09-07T08:49:30.619495Z"
        >
            <Origin>e672f350-106d-41b4-9524-d35da28a5b23</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`${''}type State = {
    [key: string]: any;
}`}
            </CodeBox>
            <Paragraph>Or if you want to be more explicit about it being a record type:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`type State = Record<string, any>;`}
            </CodeBox>
            <Paragraph>
                Both are equivalent - they create a type that accepts any string as a key and any value type.
            </Paragraph>
        </Message>
    </Chapter>
);
