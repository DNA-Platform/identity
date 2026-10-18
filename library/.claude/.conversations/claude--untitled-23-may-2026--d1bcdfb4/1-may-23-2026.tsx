import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 May 2026](2026-05-23)</Date>
        </Dated>
        <Title>[[ 23 May 2026 ]]</Title>
        <Message
            at="2026-05-23T12:02:48.313584Z"
        >
            <Origin>019e54b7-6693-7efd-a2fe-e347c6b03c3d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-23T12:02:53.057075Z"
        >
            <Origin>019e54b7-6693-7904-89de-6cf0ccc645ff</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-23T12:15:06.083450Z"
        >
            <Origin>019e54c2-a8d5-7952-b005-2cb3e23cafcc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-23T12:15:11.112204Z"
        >
            <Origin>019e54c2-a8d6-706a-ad72-a5a8a8c3a8a5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
    </Chapter>
);
