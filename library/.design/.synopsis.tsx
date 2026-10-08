import { Chapter, Means, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The story of how this library was designed, told as it happens, with every sketch kept beside the
            telling — its photographs and its code. <Means>$[[ ./The Designs I Am Going With ]]</Means> says
            what was decided and why, and <Means>$[[ ./What I Am Asked ]]</Means> holds the questions put to
            me with my answers; <Means>$[[ ./Every Concept ]]</Means> is every sketch, numbered, with its
            photographs at a desk and a phone; <Means>$[[ ./Driving the Build ]]</Means> is what building the
            sketches taught and where the sketch phase ended; and <Means>$[[ ./The Bookshelf ]]</Means> is
            the first page designed together, in HTML, and carried into the library;
            <Means>$[[ ./The Manual's Page ]]</Means> is the second, the manual's own look carried the same
            way, with what the carrying uncovered in the framework. The tools the designing
            is done with — <Means>$[[ ./The Camera ]]</Means>, which photographs a concept,
            and <Means>$[[ ./The Print ]]</Means>, which makes a page from a book's own print — stand in the
            appendix beside the chapters that say what they are.
        </Paragraph>
    </Chapter>
);
