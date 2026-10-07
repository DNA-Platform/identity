import { Chapter, Means, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The catalogue of my library, filed under what it is about, which is itself: everything I keep is
            filed under it, directly or through another book.
        </Paragraph>
        <Paragraph>
            Three books are filed here. <Means>$[[ Dougs Story ]]</Means> is where to begin — the one book by
            its own subject, written so that the rest of the library can be navigated from it, and it begins
            with <Means>$[[ starting over ]]( Dougs Story / Starting Over )</Means>. <Means>$[[ Dougs Design ]]</Means> is
            where every page of this library was decided, each sketch kept beside the telling with its
            photographs and its code. <Means>$[[ Dougs Reference Manual ]]</Means> holds the parts the library
            is built with, one chapter to a part, the code beside the chapter that says what it is.
        </Paragraph>
        <Paragraph>
            Press a book on the shelf, or its name in the contents, to see what it is here, on the desk above
            the shelf; press read on to see the whole entry. The triangle after a name in the contents, and the
            way at the foot of the desk, take you into the book itself. This catalogue stands on its own
            shelf, first, because it is filed under what it is about.
        </Paragraph>
    </Chapter>
);
