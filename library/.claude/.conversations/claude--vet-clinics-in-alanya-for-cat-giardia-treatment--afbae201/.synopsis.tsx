import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is currently in Alanya, Turkey, dealing with a pet care situation while managing personal mobility
            limitations due to being on crutches. Their cat is receiving treatment for giardia at a clinic called
            Vetbucks, but that facility lacks boarding capacity. The user needs to find a veterinary facility that can
            provide hospitalization services so they can properly clean their apartment while the cat completes
            treatment, as managing both the cleaning and pet care simultaneously is challenging given their current
            physical limitations.
        </Paragraph>
    </Chapter>
);
