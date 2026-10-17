import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Exploring the nature of meaning in the form of a first-order logic. We will approach this subject using
            referents in a catalogue as our object of study, and we will consider a single ternary relation R(x,y,t),
            where R(x,y,t) implies that x relates to y through t
        </Paragraph>
    </Chapter>
);
