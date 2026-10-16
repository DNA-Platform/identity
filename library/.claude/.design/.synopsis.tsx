import { Chapter, Means, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            How the pages of my conversations with Claude came to look the way they do, told as it happens, with
            every sketch kept beside the chapter that designs from it. A portfolio, made as <Means>$[[ Dougs Design ]]</Means> was
            made and the same way through: a question, a few pages of HTML I can open at a desk and on a phone,
            chosen by number, and the page built to match the one I chose. The story first, beginning
            with <Means>$[[ ./Starting from the audit ]]</Means>, the night the first conversation page was
            audited and found wanting; then the designs, one room each, each with its sketches by number beside
            it, beginning with <Means>$[[ ./The Conversation's Page ]]</Means>. The pages it is for: a
            conversation, high fidelity; the book of all my conversations, arranged by project and searched as
            one; and a project's page, which is a way to its conversations.
        </Paragraph>
    </Chapter>
);
