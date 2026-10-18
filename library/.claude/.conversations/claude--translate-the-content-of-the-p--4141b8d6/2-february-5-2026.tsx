import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Title>[[ 5 February 2026 ]]</Title>
        <Message
            at="2026-02-05T13:22:55.731182Z"
        >
            <Origin>019c2df8-8661-7ded-90c2-7a7d23603f03</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to Russian:</Paragraph>
            <Paragraph>Thank you so much for clarifying!</Paragraph>
        </Message>
        <Message
            at="2026-02-05T13:22:58.582235Z"
        >
            <Origin>019c2df8-8661-7ab8-b226-62e41c8c780c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>«Большое спасибо за разъяснение!»</Paragraph>
        </Message>
    </Chapter>
);
