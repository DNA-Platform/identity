import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is developing a comprehensive formal theory called Semantic Reference Theory (SRT) that aims to
            bridge Gödel's incompleteness theorems with consciousness studies. They are building this theory from the
            ground up, starting with a primitive ternary relation R(x,y,t) meaning "x relates to y through relationship
            type t" and using their own notation system where A&#91;x&#93; means "for all x", E&#91;x&#93; means "there
            exists x", = denotes "there exists some relationship", and - denotes inheritance chains.
        </Paragraph>
    </Chapter>
);
