import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is a published computational and theoretical neuroscientist who has developed Semantic Reference
            Theory (SRT), a comprehensive formal framework for understanding consciousness, meaning, and reference. They
            revealed that Douglas Hofstadter's "Gödel, Escher, Bach" served as their educational roadmap at the
            University of Chicago, inspiring them to study neuroscience, computer science, mathematics, and logic while
            maintaining their identity as an artist. The user has read all of Hofstadter's books multiple times and
            views SRT as their formal answer to how Gödel's insights relate to consciousness, representation, and
            symbolism.
        </Paragraph>
    </Chapter>
);
