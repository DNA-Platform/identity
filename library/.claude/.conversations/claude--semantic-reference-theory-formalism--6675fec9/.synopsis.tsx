import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation focused on developing and refining a comprehensive article about Semantic Reference Theory
            (SRT), specifically "The Semantics of Representation" - a formal specification for a complete representation
            language. The user, Doug, is the creator of SRT and guided Claude through multiple iterations to properly
            understand and document the theory's notation, syntax, and philosophical implications.
        </Paragraph>
    </Chapter>
);
