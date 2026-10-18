import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought research assistance for a complex international custody case involving Russian family
            courts. They are facing a strategic dilemma where requesting temporary custody requires revealing their
            current location, which creates two distinct risks: direct danger from a potentially dangerous spouse and
            jurisdictional complications that could trigger involvement from Georgian authorities. The user needed
            comprehensive information about how similar situations are handled, particularly regarding location
            disclosure requirements and protective mechanisms in custody proceedings.
        </Paragraph>
    </Chapter>
);
