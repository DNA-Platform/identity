import { Chapter, Means, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The parts this library is built with, one chapter to a part, its code beside the chapter that says
            what it is and how it is used; every other book imports its tools from this manual's door. Start
            with <Means>$[[ ./The Book ]]</Means>, which every book here extends,
            and <Means>$[[ ./The Theme ]]</Means>, which every book dresses itself
            from. <Means>$[[ ./The Cover ]]</Means> is a book's data model, what a cover says and how another
            book reads it; <Means>$[[ ./The Bookshelf ]]</Means> is the catalogue's design as a type of book
            with its theme. <Means>$[[ ./Developing a Library ]]</Means> is how a page is worked on with the
            page open, and <Means>$[[ ./Initializing a Library ]]</Means> how one is begun.
        </Paragraph>
    </Chapter>
);
