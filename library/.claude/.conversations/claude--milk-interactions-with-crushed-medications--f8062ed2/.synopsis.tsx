import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a focused pharmacology question about whether milk interacts with various substance classes
            in ways that would affect their efficacy or absorption, particularly when taken in powder or crushed form.
            The conversation was technical and exploratory in nature, using specific drug classes as reference points —
            SSRIs, benzos, and classical psychedelics — to anchor the discussion before expanding to a second set of
            four specific compounds: lamotrigine, quetiapine, MDMA, and amphetamine salts.
        </Paragraph>
    </Chapter>
);
