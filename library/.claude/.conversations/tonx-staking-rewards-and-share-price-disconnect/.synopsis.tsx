import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in a sophisticated, research-driven investment analysis conversation focused on the TON
            blockchain ecosystem, specifically examining two publicly traded companies — TON Strategy Company (Nasdaq:
            TONX) and AlphaTON Capital (Nasdaq: ATON) — as investment vehicles. The person demonstrated strong existing
            knowledge of the thesis and repeatedly pushed Claude to verify claims rather than accept them at face value,
            correcting Claude's analysis several times when it was imprecise or understated.
        </Paragraph>
    </Chapter>
);
