import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person requested that Claude translate a legal document from Russian into English and generate a
            formatted PDF preserving the original document's structure. The document consisted of questions prepared for
            legal consultants in Georgia, organized into a factual background section followed by two thematic question
            sections covering court proceedings and immigration matters.
        </Paragraph>
    </Chapter>
);
