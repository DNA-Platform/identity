import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is attending MoC7 (Models of Consciousness conference), running October 12–16 at the University
            of Copenhagen's HC Ørsted Institute, and asked Claude to help them catch up on talks in real time while they
            take notes, particularly on Megan Peters' keynote. Claude researched the conference schedule, speaker
            backgrounds, and talk abstracts, correcting its own guesses about Peters' talk topic based on the person's
            firsthand corrections (the actual title was "A proximity-guided iterative natural kinds strategy: Let's do
            computational epistemology to discover what consciousness is and who has it," focused on computational
            epistemology and taking seriously whether AI systems might be conscious).
        </Paragraph>
    </Chapter>
);
