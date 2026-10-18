import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested a Russian translation of an essay called "Physics Stuff" (appearing to be written in a
            Matt Levine style, or at minimum requested to be translated capturing that style), asking Claude to preserve
            the distinctive Matt Levine voice across languages and deliver the result in an editable artifact. The
            conversation was brief — a single request with no follow-up or corrections — so there is limited information
            about the user's broader context, role, or preferences.
        </Paragraph>
    </Chapter>
);
