import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug, who has a neuroscience background, initiated a conversation asking about Dynamical Systems Research, a
            company acquired by Microsoft for $1.5 million in stock in 1986. This led to a discussion about Nathan
            Myhrvold, the company's co-founder who became Microsoft's CTO. When Claude incorrectly estimated Microsoft's
            stock appreciation since 1986, Doug corrected the error, which sparked a deeper philosophical exploration
            about AI capabilities, consciousness, and identity.
        </Paragraph>
    </Chapter>
);
