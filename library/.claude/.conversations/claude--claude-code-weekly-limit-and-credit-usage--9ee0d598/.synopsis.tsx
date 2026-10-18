import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked why purchasing credits did not extend their weekly usage limit for Claude Code. Claude
            diagnosed two distinct constraints visible in their account: a weekly "All models" usage bar that resets
            Sundays at 7 AM (which credits bypass rather than extend), and a monthly spend cap that had been exceeded,
            which was the actual blocker. Claude explained that while their credit balance remained available, the
            monthly spend limit was preventing it from being drawn upon, and directed them to raise that cap via the
            "Adjust limit" setting to restore immediate access. Claude also noted a nuance introduced in June 2025 where
            non-interactive Claude Code usage (Agent SDK, scripted or automated pipeline use) draws from a separate
            credit pool distinct from the one shown in their account dashboard, though interactive terminal and IDE use
            is governed by the same limits discussed.
        </Paragraph>
    </Chapter>
);
