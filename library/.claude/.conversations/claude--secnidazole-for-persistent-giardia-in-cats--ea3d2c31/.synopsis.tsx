import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested Claude to conduct specialized research on region-specific parasites and pathogens that a
            house cat might contract from Alanya, Turkey, and potentially Istanbul or the Egyptian coast. They
            specifically wanted localized research conducted in appropriate languages (Turkish and Arabic) to identify
            diseases that might be underrepresented in standard English veterinary literature or Claude's typical
            dataset. This research was aimed at exploring additional diagnostic possibilities beyond what conventional
            Western veterinary sources typically cover.
        </Paragraph>
    </Chapter>
);
