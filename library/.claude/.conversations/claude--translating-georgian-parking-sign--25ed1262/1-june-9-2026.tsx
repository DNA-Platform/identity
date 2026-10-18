import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 June 2026](2026-06-09)</Date>
        </Dated>
        <Title>[[ 9 June 2026 ]]</Title>
        <Message
            at="2026-06-09T09:18:21.135537Z"
        >
            <Origin>019eabad-3966-7e8a-8417-842c3ba8d2ae</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate from George to English</Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-09T09:18:28.665080Z"
        >
            <Origin>019eabad-396a-7624-91d5-1bebae5d1e96</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>The sign reads:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "Don't park your car at the entrance!"
                </Word>
            </Paragraph>
            <Paragraph>
                (შესასვლელთან მანქანას ნუ გააჩერებთ! — literally "Do not stop/park the car near the entrance.")
            </Paragraph>
        </Message>
    </Chapter>
);
