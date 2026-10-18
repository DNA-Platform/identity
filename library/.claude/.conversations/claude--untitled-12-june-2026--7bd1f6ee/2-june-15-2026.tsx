import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 June 2026](2026-06-15)</Date>
        </Dated>
        <Title>[[ 15 June 2026 ]]</Title>
        <Message
            at="2026-06-15T17:59:31.232225Z"
        >
            <Origin>019ecc70-3e94-7f7a-9dd4-37b1ab8cbe81</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-06-15T18:02:52.024779Z"
        >
            <Origin>019ecc70-3e94-70f4-be89-cefe35ef1346</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
