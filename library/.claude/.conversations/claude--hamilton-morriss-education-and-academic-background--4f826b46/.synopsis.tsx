import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation began as a factual inquiry about Hamilton Morris's educational background and evolved into
            a sustained, philosophically rich exchange about intellectual formation, institutional identity, and the
            nature of returning to foundational intellectual passions. The person attended the University of Chicago,
            where they studied computational neuroscience with a strong mathematical foundation, including real analysis
            in their first year. They also considered Brown and Amherst but chose Chicago deliberately for its Core
            Curriculum. They went on to study theoretical neuroscience with Charles Stevens, then spent over a decade as
            a software engineer before cofounding a hedge fund. They have now decided to devote their life to formal
            mathematics, specifically foundations-level work involving real analysis, first-order logic, and ZFC set
            theory, returning to what captivated them as a first-year undergraduate.
        </Paragraph>
    </Chapter>
);
