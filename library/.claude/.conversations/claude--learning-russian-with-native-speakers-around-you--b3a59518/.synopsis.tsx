import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is learning Russian and is in an advantageous immersion environment, surrounded by native Russian
            speakers in their daily life. They asked Claude to research and explain the landscape of language learning
            methods, tools, and resources available to a beginner, and to help them understand how to build a
            structured, committable schedule. Claude conducted web searches and synthesized findings into a
            comprehensive guide covering the science of language acquisition (spaced repetition, comprehensible input),
            Russian-specific challenges (Cyrillic alphabet, case system), a recommended app stack (Anki, Rocket Russian,
            Babbel, RussianPod101), and how to find and brief online tutors through platforms like italki and Preply.
        </Paragraph>
    </Chapter>
);
