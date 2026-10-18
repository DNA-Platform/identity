import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person was preparing to administer a veterinary antibiotic injection to their cat, Penelope, to treat a
            bacterial infection of her bio duct. The prescribed treatment involved Marbosan-100, a marbofloxacin 100
            mg/ml injectable formulation licensed for cattle and pigs, being used off-label for a cat at a dose of
            approximately 0.1 ml (10 mg). The vet had instructed them to use glucose as a diluent/carrier alongside the
            injection, and the person was having difficulty sourcing it, prompting questions about whether water or
            saline could substitute.
        </Paragraph>
    </Chapter>
);
