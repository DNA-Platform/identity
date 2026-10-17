import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested Claude to research and develop a comprehensive table of contents for a serious financial
            analysis of TONX (TON Strategy Company, NASDAQ: TONX), emphasizing both technical financial insights and
            human-readable narrative. The user specifically wanted to understand the company rather than just the
            ticker, focusing on current management and operations, and mentioned that TONX appears to be trading at
            approximately a 60% discount to net asset value. They requested the analysis be structured for part-by-part
            writing, combining professional financial analysis with accessible storytelling that explains both human and
            technical dimensions of the business.
        </Paragraph>
    </Chapter>
);
