import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user presented a sophisticated investment thesis centered on TON (The Open Network) and Telegram,
            drawing structural parallels to the historical development of Tor and Bitcoin adoption through Silk Road.
            They articulated a "dark web 2.0" infrastructure thesis, arguing that Telegram is evolving into Nikolai
            Durov's vision of a censorship-resistant economic platform accessible to over 1 billion users without
            technical barriers. The user positioned this as an economic flywheel theory where TON's value depends on
            circulation rather than speculation, requiring platforms where users both earn and spend TON to create
            sustained velocity.
        </Paragraph>
    </Chapter>
);
