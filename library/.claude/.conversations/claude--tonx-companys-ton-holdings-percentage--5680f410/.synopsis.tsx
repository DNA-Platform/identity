import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug engaged in an extensive discussion about cryptocurrency governance systems, beginning with an analysis
            of TON (The Open Network) blockchain's governance structure and transitioning into developing his own
            concept called the DNA Trust. The conversation started with examining how Nikolai Durov transitioned control
            of TON to the TON Foundation, revealing that the governance operates through a hybrid human-machine system
            where validators vote on protocol changes via smart contracts, but proposals and decisions remain
            fundamentally human-driven. Doug noted the practical reality that becoming a validator requires significant
            capital (300,000+ TON tokens) and technical expertise, with voting conducted through Telegram channels and
            command-line interfaces.
        </Paragraph>
    </Chapter>
);
