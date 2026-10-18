import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about 2026 Social Security Administration earnings thresholds relevant to their personal
            circumstances, specifically wanting to understand how much they can earn while maintaining benefits. Claude
            explained two key thresholds: a lower monthly figure that triggers the Trial Work Period (TWP), and a higher
            monthly figure representing the Substantial Gainful Activity (SGA) level at which benefits can be lost after
            the TWP is exhausted.
        </Paragraph>
    </Chapter>
);
