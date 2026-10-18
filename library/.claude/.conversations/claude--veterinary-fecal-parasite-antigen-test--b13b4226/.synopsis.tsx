import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought help interpreting veterinary test results for their cat experiencing severe diarrhea. They
            presented a VETI Diagnostix fecal parasite antigen test showing negative results for Giardia (GIA), Feline
            Coronavirus (FCoV), and Feline Parvovirus (FPV). The conversation focused on understanding false positive
            and negative rates for these rapid antigen tests, with Claude explaining that false negative rates for
            Giardia are significantly higher (15-30%) than false positive rates (1-5%).
        </Paragraph>
    </Chapter>
);
