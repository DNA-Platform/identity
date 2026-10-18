import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to identify an insect found on the leaf of an apple tree, noting it did not look
            like a typical ladybug and appeared possibly larval. Claude identified it as a ladybird (ladybug) pupa —
            specifically likely Harmonia axyridis (the harlequin or Asian lady beetle) — explaining the life stage, the
            visual cues (domed orange body, black blotches, shed larval skin still attached at the top), and noting it
            is a beneficial insect that preys on aphids. Claude advised leaving it undisturbed.
        </Paragraph>
    </Chapter>
);
