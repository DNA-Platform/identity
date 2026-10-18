import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in an extended, technically sophisticated conversation about psychopharmacology, centered
            on evaluating and planning a switch from one atypical antipsychotic (quetiapine, at 400mg) to another
            (aripiprazole), motivated by a wellness concern involving metabolic effects and appetite, particularly
            nighttime hunger. The person has been on quetiapine for over a decade, is based in Tbilisi, Georgia, and has
            a unipolar mania diagnosis managed alongside lamotrigine. The conversation covered drug mechanisms in
            considerable depth, including receptor binding kinetics, dopamine tone versus phasic signaling, D2 partial
            agonism, histamine-mediated appetite and sedation, and the population-level pharmacoeconomic reasons why
            direct head-to-head trials between similar agents rarely exist.
        </Paragraph>
    </Chapter>
);
