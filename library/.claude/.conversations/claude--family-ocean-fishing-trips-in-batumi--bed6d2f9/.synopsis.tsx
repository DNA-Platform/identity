import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is planning a family ocean fishing trip in Batumi this week and asked Claude to find available
            charter options. Claude searched for local operators and displayed a map of fishing charter businesses at
            the Batumi marina. Four operators were identified: Mirage Boat Trip (with Captain Ruslan, noted for family
            fishing trips), Poseidon Boat, Sea Life Batumi, and BatumiBoats. Sea Life Batumi was highlighted as the
            strongest fit for a family fishing charter, as it explicitly markets family sea-fishing trips with gear
            included and offers a post-trip fish market experience. Claude noted that all options are private charters
            requiring direct contact via call or WhatsApp rather than scheduled departures, that morning slots are
            preferable, and that August weather can cause short-notice cancellations. Claude advised confirming total
            pricing before boarding, as costs are typically negotiated via WhatsApp. Claude offered to draft a
            Russian-language WhatsApp message to send to multiple operators simultaneously to gather quotes efficiently.
        </Paragraph>
    </Chapter>
);
