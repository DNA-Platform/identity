import { Chapter, Means, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The catalogue of my library, filed under what it is about, which is itself. Everything I keep is
            filed under it, directly or through another book.
        </Paragraph>
        <Paragraph>
            Three books are filed under this one. <Means>$[[ Dougs Story ]]</Means> is mine, and the one
            book here that is by its own subject. It is the place to begin from, and it begins
            with <Means>$[[ starting over ]]( Dougs Story / Starting Over )</Means>. The design of this
            library is kept in <Means>$[[ Dougs Design ]]</Means>. The parts I build this library with are
            in <Means>$[[ Dougs Reference Manual ]]</Means>, each beside the chapter that says what it is.
        </Paragraph>
        <Paragraph>
            Each of the three has a chapter here that stands for it and holds its cover and its synopsis:
            its entry, drawn on the shelf as its jacket with its name under it. In the contents the name
            opens the entry on the desk above the shelf, and the triangle after it leads to the book itself.
            And this catalogue is on its own shelf, first, because it is filed under what it is about, which
            is itself.
        </Paragraph>
    </Chapter>
);
