import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Doug discussed an elaborate multi-layered plan involving cryptocurrency investments, pseudonymous
            writing, and academic outreach centered around his theory that Nikolai Durov (co-founder of Telegram) is the
            anonymous creator of Bitcoin. Doug explained his investment thesis around TON (The Open Network) and
            Telegram's ecosystem, analyzing two publicly traded companies: TONX (a legitimate TON treasury company
            backed by crypto institutions like Pantera Capital) and ATON (which he views as suspicious due to
            connections to Cambridge Analytica through CEO Brittany Kaiser).
        </Paragraph>
    </Chapter>
);
