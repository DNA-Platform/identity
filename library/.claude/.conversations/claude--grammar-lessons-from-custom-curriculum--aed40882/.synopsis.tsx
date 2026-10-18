import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug initiated a grammar curriculum lesson based on a previously created curriculum from another
            conversation. He requested that Claude begin teaching English grammar using the established curriculum
            format, with lessons delivered as editable artifacts followed by chat-based exploration of the material.
            Claude initially created a comprehensive Session 1 lesson titled "What Grammar Is (and Isn't)" covering
            descriptive versus prescriptive grammar, grammaticality notation systems, Standard English as a dialect, and
            grammar as a generative system.
        </Paragraph>
    </Chapter>
);
