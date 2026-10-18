import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            In multiple chats, I keep sending you a message and you respond with nothing. What’s going on?
        </Paragraph>
    </Chapter>
);
