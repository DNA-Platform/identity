import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was a sustained, high-level collaborative philosophy session focused on developing a two-part academic
            paper on the problem of consciousness. The person has a background in neuroscience (mentioning working with
            Charles Stevens) and a deep familiarity with Gödel, Escher, Bach and Hofstadter's work generally. The
            session began with the person sharing a project file containing a prior GPT conversation about Chalmers,
            Dennett, and Hofstadter, and asking Claude to distill the main ideas into an editable artifact, then
            fact-check them against primary sources.
        </Paragraph>
    </Chapter>
);
