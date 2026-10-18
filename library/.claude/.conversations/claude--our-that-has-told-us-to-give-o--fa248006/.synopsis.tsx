import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person sought help understanding their Bengal cat Penelope's adverse reaction to Animal Biome Gut
            Restore FMT capsules, prescribed by their vet (referred to as Dr. Korytina) for 30 days. Penelope had
            recently resolved a bout of diarrhea just before starting the capsules, then vomited on each of the first
            two days of the protocol and became lethargic — symptoms she had not shown since recovering from a prior
            Giardia infection over a month earlier. The person wanted to understand whether these symptoms were
            expected, what to do, and how to communicate with the vet. Claude helped draft a bilingual Russian/English
            message to the vet, but the person corrected Claude for overclaiming — specifically, Claude characterized
            AnimalBiome's soft dosing caveat for sensitive cats as a formal "sensitive-cat protocol," language that read
            as authoritative to the vet and was flagged as AI-generated.
        </Paragraph>
    </Chapter>
);
