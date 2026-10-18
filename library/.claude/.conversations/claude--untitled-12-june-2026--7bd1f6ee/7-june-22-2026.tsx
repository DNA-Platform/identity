import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 June 2026](2026-06-22)</Date>
        </Dated>
        <Title>[[ 22 June 2026 ]]</Title>
        <Message
            at="2026-06-22T06:48:54.016035Z"
        >
            <Origin>019eee16-d385-742a-a06c-cabee1460d70</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-22T06:56:44.421833Z"
        >
            <Origin>019eee16-d385-742a-a06c-cabfa31cd48f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
