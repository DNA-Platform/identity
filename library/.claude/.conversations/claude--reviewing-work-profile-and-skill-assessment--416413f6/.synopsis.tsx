import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is exploring freelance consulting opportunities on platforms like Fiverr and Upwork, specifically
            seeking to understand how to monetize their analytical and technical expertise. They have a background in
            quantitative finance (hedge fund experience), computational neuroscience (UChicago, Nature Neuroscience
            publication), software engineering (10+ years, C, language design), AI/LLM theory, visual arts (oil
            painting), and crypto investment analysis. The user expressed interest in offering services like crypto due
            diligence, business idea stress-testing, and other analytical consulting work.
        </Paragraph>
    </Chapter>
);
