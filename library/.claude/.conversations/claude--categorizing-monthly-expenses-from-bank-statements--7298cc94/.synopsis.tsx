import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to help categorize and analyze credit card expenses from a recent period between two
            payments. They sent twelve screenshots in two batches showing transactions from a Citi Strata Premier card,
            asking Claude to first transcribe the raw data and then organize it into a meaningful spending breakdown.
        </Paragraph>
    </Chapter>
);
