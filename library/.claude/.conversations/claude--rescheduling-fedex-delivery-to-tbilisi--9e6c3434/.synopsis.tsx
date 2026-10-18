import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is navigating an incoming FedEx international shipment from Freeport, New York to Tbilisi,
            Georgia, arriving around Thursday June 11, 2026, at a time when they will not be available to receive it.
            The conversation focused on understanding options for rescheduling delivery or arranging a hold, and what
            happens if a delivery attempt fails. The person shared their tracking page, which showed the shipment
            (tracking ID 872047218750, two pieces) currently in transit through Dartford, GB as of June 4, with a
            provisional delivery date contingent on Georgian customs clearance.
        </Paragraph>
    </Chapter>
);
