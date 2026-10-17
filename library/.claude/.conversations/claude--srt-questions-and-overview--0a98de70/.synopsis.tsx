import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana is a Russian-speaking student learning Semantic Reference Theory (SRT) from Claude, with Doug (the
            theory's creator) providing guidance in English. Ana explicitly requested a structured pedagogical approach
            where Claude serves as her teacher, building concepts incrementally with examples, practice exercises, and
            comprehension checks. She emphasized needing clear transitions between ideas, with each sentence containing
            elements from the previous one to maintain conceptual continuity.
        </Paragraph>
    </Chapter>
);
