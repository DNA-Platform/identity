import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person has a flight booking (Norwegian, Economy Class Q) from Copenhagen to Tbilisi currently scheduled
            for a Saturday, which was booked through Expedia. They asked Claude for the best way to change this flight
            to either that same night or the following day.
        </Paragraph>
    </Chapter>
);
