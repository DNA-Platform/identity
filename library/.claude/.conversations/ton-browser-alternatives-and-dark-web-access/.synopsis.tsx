import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is conducting research into TON (The Open Network) blockchain's darknet/privacy infrastructure,
            specifically exploring whether a reputable Tor Browser equivalent exists for TON. The conversation began
            with the person referencing "Nikolai" (Nikolai Durov) and his concept of a "dark web 2.0" built into the TON
            stack, and questioning whether serious privacy tooling actually existed for it. They noted correctly that
            dark.fail-style indexing wouldn't appear on Telegram itself.
        </Paragraph>
    </Chapter>
);
