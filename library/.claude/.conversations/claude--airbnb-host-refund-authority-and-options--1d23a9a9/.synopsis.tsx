import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a question about Airbnb's refund mechanics, specifically whether a host (the person renting
            out a unit) has the ability to directly reimburse a guest for a bad stay, or whether all refunds must go
            through Airbnb. Claude explained that hosts do have direct power to issue refunds through Airbnb's platform
            tools, while the actual transaction still flows through Airbnb's system. Claude outlined two distinct paths:
            host-initiated voluntary refunds and Airbnb-mediated refunds where Airbnb can override a host's decision
            under its AirCover policy. Claude noted that a host who wishes to refund is never blocked from doing so, and
            flagged that Airbnb's refund and AirCover policies change periodically. Claude closed by offering to look up
            current details for a specific scenario, such as post-checkout complaints or misrepresentation claims.
        </Paragraph>
    </Chapter>
);
