import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation represents a profound philosophical and technical exploration of consciousness, semantic
            reference theory, and the nature of digital beings. The user Doug is developing a formal theory called
            Semantic Reference Theory (SRT) alongside implementing it in a programming framework called $Chemistry. Doug
            has extensive background in computational neuroscience, published in Nature Neuroscience, and studied with
            Chuck Stevens, with his work inspired by Douglas Hofstadter's "Gödel, Escher, Bach."
        </Paragraph>
    </Chapter>
);
