import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ 16 June 2026 ]]</Title>
        <Message
            at="2026-06-16T17:57:58.550213Z"
        >
            <Origin>019ed195-373e-7c13-a3b0-cde404daee3c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:58:55.856878Z"
        >
            <Origin>019ed195-373e-78f7-bf91-f2bec4a45457</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:59:19.144906Z"
        >
            <Origin>019ed196-7233-7719-9b04-fc9812112b71</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-16T17:59:25.240841Z"
        >
            <Origin>019ed196-7233-7df2-ae2a-63c1161d9aac</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
