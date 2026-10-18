import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged Claude in a wordplay and pattern-recognition puzzle centered on Douglas Hofstadter's
            Gödel, Escher, Bach: An Eternal Golden Braid (GEB). The task was to complete a humorous analogy where the
            three philosophers Chalmers, Dennett, and Hofstadter (C, D, H) replace the original trio (G, E, B),
            requiring a subtitle that mirrors the structural trick of the original: the subtitle "An Eternal Golden
            Braid" permutes the initials G-E-B back as E-G-B, embedding the title's own letters into itself as a strange
            loop.
        </Paragraph>
    </Chapter>
);
