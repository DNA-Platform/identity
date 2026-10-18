import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about the safety and appropriateness of using Claritin (loratadine) for young people, and
            whether childhood allergies are real and managed similarly to adult allergies. Claude confirmed that
            loratadine is generally considered safe and is approved for use in children starting at age 2, with dosing
            based on age and weight (5mg for ages 2–5, 10mg for ages 6 and up). Claude affirmed that childhood allergies
            are legitimate and treated using the same approaches as adult allergies, including antihistamines, nasal
            corticosteroids like Flonase, and in more persistent cases, allergy testing and immunotherapy. Claude noted
            practical cautions around avoiding combination products that include decongestants such as pseudoephedrine,
            which have a narrower safety margin, and recommended consulting a pediatrician for children under 2 or those
            with kidney or liver concerns. The overall tone of the exchange was reassuring, with Claude characterizing
            loratadine as a well-established and non-alarming option within this drug class.
        </Paragraph>
    </Chapter>
);
