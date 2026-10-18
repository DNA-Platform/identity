import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug Rubino, author and creator of the $Chemistry framework, engaged in an extensive technical discussion
            about the architecture and philosophy of his React-based framework. Doug is developing $Chemistry as both a
            practical UI framework and an artistic expression of his Semantic Reference Theory work on consciousness and
            meaning. The conversation covered deep technical implementation details, from bond systems and molecular
            structures to component rendering patterns, while exploring the philosophical underpinnings of using
            particle physics and chemistry metaphors to create a programming paradigm.
        </Paragraph>
    </Chapter>
);
