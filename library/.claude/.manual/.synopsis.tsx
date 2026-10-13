import { Chapter, Means, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            What a message of Claude's is made of beyond what was said: an action and its result, an artifact and
            an attachment, each a writing of its own that the importer writes and the page draws as Claude's
            application does. They specialize what <Means>$[[ my reference manual ]]( Dougs Reference Manual / The Conversation )</Means> says
            a conversation is in general, a book of messages, each by a speaker at a time, with its participants
            on the cover; the conversations themselves are filed
            under <Means>$[[ Our Conversations ]]</Means>.
        </Paragraph>
    </Chapter>
);
