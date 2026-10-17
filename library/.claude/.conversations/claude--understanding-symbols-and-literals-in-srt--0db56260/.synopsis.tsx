import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is studying Semantic Reference Theory (SRT) and requested a comprehensive explanation of core
            concepts including symbols, literals, referents, relationships, canonical symbols, subjects/objects, and
            properties/qualities. They specifically asked for explanations suitable for a beginner who could then teach
            these concepts to others. Claude provided detailed explanations in Russian with examples, then created both
            markdown and HTML versions in English for sharing with "Doug" for review. The user has access to project
            files containing SRT documentation, which Claude referenced to ensure accuracy.
        </Paragraph>
    </Chapter>
);
