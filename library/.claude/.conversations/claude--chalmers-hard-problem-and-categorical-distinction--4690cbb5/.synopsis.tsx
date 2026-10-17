import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The conversation was a sustained philosophical dialogue about David Chalmers' hard problem of consciousness,
            with the person demonstrating deep familiarity with the primary literature and making several original,
            precise observations that pushed back on Claude's characterizations. The person's central argument was that
            the word "hard" in Chalmers' formulation carries specific technical content — referring to a categorical
            distinction from the "easy problems" (which are hard in practical terms but susceptible to
            functional/mechanistic explanation in principle) — and that most people who invoke the phrase fail to
            grapple with this, effectively treating it as just a difficult unsolved science question.
        </Paragraph>
    </Chapter>
);
