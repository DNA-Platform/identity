import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked Claude to compare a Wolt delivery app listing with a veterinary prescription letter to
            determine if the listed product matched what the vet recommended. Claude examined both documents and
            confirmed that the Wolt listing for "Enterol 250mg, 10 capsules" at ₾12.62 from PSP Kazbegi 24 matched the
            veterinary prescription for Enterol (1 capsule/sachet once daily for 10-14 days) for a pet named Penelope.
            Claude noted a practical consideration that the 10-capsule package might require a second box if the full
            14-day treatment course is needed, but observed that the price point made this affordable. The interaction
            demonstrated the user's approach to efficiently cross-referencing medical prescriptions with available
            products through delivery services.
        </Paragraph>
    </Chapter>
);
