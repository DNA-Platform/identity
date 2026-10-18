import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user contacted Claude about a new symptom in their Bengal cat Penelope - a white dot above her nose
            where fur appears to be missing. This inquiry was made in the context of an ongoing project involving
            Penelope's chronic colitis and parasitic infections including trichomoniasis and giardiasis. Claude used
            conversation search tools to review Penelope's extensive medical history, which includes months of chronic
            diarrhea, treatment with ronidazole, and a diagnosis that couldn't rule out adverse food reactions.
        </Paragraph>
    </Chapter>
);
