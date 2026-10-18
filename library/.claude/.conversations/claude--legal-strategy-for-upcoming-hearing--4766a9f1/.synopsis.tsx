import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, Douglas (Doug), shared a legal strategy document from lawyers representing Ana (Nastya) in a
            Russian family court custody case with a hearing scheduled for February 5, 2026. Doug requested that Claude
            extract only the English portions of the bilingual messages to make them easier to read. The lawyers
            outlined a comprehensive strategy including establishing a narrative about domestic violence and safety
            concerns, preparing procedural documents (objections, interim custody applications, amended claims),
            engaging with guardianship authorities in multiple locations, and requesting video participation for future
            hearings. They also provided an extensive list of required documents ranging from lease agreements and
            medical records to correspondence and call recordings.
        </Paragraph>
    </Chapter>
);
