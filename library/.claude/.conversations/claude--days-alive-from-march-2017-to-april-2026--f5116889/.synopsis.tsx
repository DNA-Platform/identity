import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to calculate how many days old someone born on 3/24/2017 would be on 4/25/2026, then
            asked Claude to identify interesting or round numbers related to that time span. After Claude suggested
            several nearby "milestone" dates, the person clarified that 4/25/2026 was fixed and non-negotiable — the
            goal was to find notable or interesting numerical facts specifically for that exact date, intended for use
            on a birthday cake.
        </Paragraph>
    </Chapter>
);
