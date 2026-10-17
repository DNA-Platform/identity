import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked Claude to review their extensive project knowledge about SRT (Semantic Relationship Theory),
            focusing on five candidate axioms, semantics of identity, subject-object relationships, and the concept of
            reference. The user specifically wanted Claude to understand their "peculiar" derivation method before
            starting a conversation topic. Claude conducted thorough searches through the project knowledge and provided
            detailed analysis of the user's theoretical framework.
        </Paragraph>
    </Chapter>
);
