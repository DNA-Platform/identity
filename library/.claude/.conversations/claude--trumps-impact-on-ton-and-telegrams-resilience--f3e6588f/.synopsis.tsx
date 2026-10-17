import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user presented a sophisticated investment thesis arguing that Trump's presidency creates bearish
            conditions for TON (The Open Network), the cryptocurrency associated with Telegram. The user's argument
            centered on geopolitical dynamics: Trump's isolationist policies increase the probability of Putin
            consolidating power in Ukraine and beyond, which threatens Telegram's core mission of providing freedom
            technology to Russian users. The user emphasized that Russian users represent Telegram's spiritual and
            practical lifeblood, referencing Pavel Durov's personal connection to Russia and statements from investors
            like Stotz and Pantera Capital, as well as commentary from Lex Fridman.
        </Paragraph>
    </Chapter>
);
