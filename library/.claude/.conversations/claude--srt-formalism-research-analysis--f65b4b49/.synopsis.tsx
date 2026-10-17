import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged Claude in an advanced philosophical and formal logic discussion about Semantic Reference
            Theory (SRT), a formal semantic framework they are developing. The conversation began with the user
            requesting that Claude analyze SRT formalism comprehensively, perform comparative analysis with related
            scholarly work, and provide reflections without basic qualifications, focusing instead on big picture
            understanding and corner cases.
        </Paragraph>
    </Chapter>
);
