import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is attending Models of Consciousness 7 (MoC7), an academic conference in Copenhagen, and used
            this chat to work through the detailed schedule and speaker landscape, treating a separate prior
            conversation as the master schedule reference. Claude retrieved the full Monday program via web lookup and
            later discussed Tuesday-Friday parallel session conflicts at a high level (referenced from the prior chat)
            before being asked to slow down and cover one day at a time, starting with Monday. For Monday, every session
            is plenary except 11:00–12:20, which splits into four parallel rooms (patient/infant/animal consciousness
            testing; LLM agency and AI risk; psychedelic/altered states research; formal and information-theoretic
            frameworks). The person asked for background on the conference's most prominent speakers, and Claude
            profiled John O'Keefe (Nobel laureate, discovered place cells, speaking on hippocampal maps and
            consciousness) and Megan Peters (metacognition researcher, co-author of a widely-cited AI consciousness
            indicators report, now critiquing that approach) as the two most significant Monday speakers, alongside
            brief notes on other named speakers across the week (Mudrik, Hohwy, Blum, Thompson, Hartimo, Dumas,
            Atmanspacher) for context.
        </Paragraph>
    </Chapter>
);
