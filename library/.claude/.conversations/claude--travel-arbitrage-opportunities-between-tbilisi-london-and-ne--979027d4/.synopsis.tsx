import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is planning a round trip flight itinerary from Tbilisi, Georgia with a European layover (London)
            to New York and back approximately 10 days later, and wanted to explore legitimate ways to offset travel
            costs through what they framed as "travel arbitrage." The core theory was that arbitrage opportunities
            should exist along such a route that could at minimum partially offset travel costs, even if not generating
            net profit. The person explicitly excluded ideas without a clear, pre-committed buyer or escrow mechanism,
            and was not interested in uncontrollable events as income sources (though open to registering for programs
            where a payout is possible if conditions are met).
        </Paragraph>
    </Chapter>
);
