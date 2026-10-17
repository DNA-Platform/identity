import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in an extended technical discussion about developing a formal type system within SRT
            (Semantic Relationship Theory), a logical framework built around a primitive ternary relation R(x,y,t). The
            conversation focused on mapping concepts from programming language type systems and Martin-Löf Type Theory
            (MLTT) onto SRT's formalism, with particular attention to how generic types, polymorphism, and inheritance
            relationships could be expressed.
        </Paragraph>
    </Chapter>
);
