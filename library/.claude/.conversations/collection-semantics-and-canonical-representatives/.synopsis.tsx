import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation centered on developing the formal foundations of Semantic Reference Theory (SRT),
            specifically around collection semantics, the definition of canonical, and the introduction of a new
            semantic pair — canonical and typical — to complement the existing vocabulary of the Foundational Sketch.
            The person is the theory's author and primary formal thinker; Claude's role was explicitly demoted over the
            course of the conversation from formal collaborator to sounding board, after repeated failures to work
            rigorously within the theory rather than importing external frameworks.
        </Paragraph>
    </Chapter>
);
