import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is a scientist who has been managing a nine-month veterinary situation involving their Bengal
            cat, Penelope, who contracted an infection while in Turkey. Based on their own research, the person made the
            clinical call to treat with ronidazole despite a negative PCR result, reasoning correctly from the known
            false-negative rate of that diagnostic. The household also includes a second cat, Penelope's partner, who is
            currently asymptomatic. The working hypothesis is Tritrichomonas foetus, possibly as a co-infection with
            Giardia, though confirmation remains elusive. The person is preparing for an upcoming vet appointment and
            wants to be equipped with precise statistics and mechanistic reasoning to support, challenge, or extend
            whatever direction the vet proposes.
        </Paragraph>
    </Chapter>
);
