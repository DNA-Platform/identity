import { Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-21T12:11:46.613176Z"
        >
            <Origin>019eea18-08a6-794b-84de-0723c1b5ba67</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Briefly: what is the one-sentence intuition behind Rust's ownership model? No need to search the web.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T12:11:48.256704Z"
        >
            <Origin>019eea18-08a6-74bf-9231-fe4838dbdf76</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Each value in Rust has exactly one owner, and when that owner goes out of scope the value is automatically
                freed—so memory safety falls out of tracking ownership at compile time rather than needing a garbage
                collector or manual <Word>
                    <Verbatim />
                    free
                </Word>.
            </Paragraph>
        </Message>
    </Chapter>
);
