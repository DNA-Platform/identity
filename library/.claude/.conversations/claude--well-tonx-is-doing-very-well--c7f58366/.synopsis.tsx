import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is a co-founder of a hedge fund with sophisticated investment analysis experience. The
            conversation centered on a deep-dive analysis of TONX (TON Strategy Company), a Nasdaq-listed company in
            which the person holds a position acquired at roughly half its current value. The discussion covered TONX's
            business model, valuation framework, near-term catalysts, and long-term thesis. The person demonstrated
            extensive prior research and corrected Claude multiple times when responses were imprecise or calibrated too
            low for their expertise level.
        </Paragraph>
    </Chapter>
);
