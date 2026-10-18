import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to research the TON AI Agent Hackathon, a competition running March 11–25, 2026,
            with a $20,000 prize pool that they had seen announced in a Telegram channel. They shared screenshots from
            the official TON Telegram channel to help Claude identify the specific event. The hackathon has two tracks:
            Track 1 (Agent Infrastructure, $10K) focused on building tooling and primitives for AI apps on TON, and
            Track 2 (User-Facing Agents, $10K) focused on AI agents that interact with users directly inside Telegram.
            The overarching vision positions Telegram as the interaction layer, AI as the execution engine, and TON
            blockchain as the payments and trust layer.
        </Paragraph>
    </Chapter>
);
