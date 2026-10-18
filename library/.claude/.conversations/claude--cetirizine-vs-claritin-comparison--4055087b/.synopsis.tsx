import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation covered a series of pharmacology and linguistics questions, with the person exploring
            over-the-counter and prescription medications used for allergy and nasal congestion treatment. The
            discussion began with a comparison of cetirizine (Zyrtec) and loratadine (Claritin) as second-generation H1
            receptor antagonists — same drug class, different chemical scaffolds, with cetirizine being more potent but
            more sedating, and loratadine preferred when alertness is needed. The person then asked about budesonide,
            initially using an unfamiliar term ("budesonidium" / "cetrizinium"), which Claude identified and corrected
            in each case rather than fabricating a match.
        </Paragraph>
    </Chapter>
);
