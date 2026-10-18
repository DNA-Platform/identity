import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person initiated a discussion about a real-time news event: a White House "Super Intelligence" luncheon
            hosted by President Trump on September 29, 2026, featuring major tech leaders including Elon Musk, Mark
            Zuckerberg, Jensen Huang, Sundar Pichai, Jeff Bezos, and Satya Nadella, among others. The person asked
            Claude to look up the seating chart and analyze why certain figures were present while others appeared
            absent or marginalized.
        </Paragraph>
    </Chapter>
);
