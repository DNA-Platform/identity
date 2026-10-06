import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Shelves ]]</Title>
        <Section>
            <Heading>What is here</Heading>
            <Paragraph>
                Three books are filed under this one. <Means>$[[ Dougs Story ]]</Means> is mine, and the one book
                here that is by its own subject. It is the place to begin from, and it begins
                with <Means>$[[ starting over ]]( Dougs Story / Starting Over )</Means>. The design of this library
                is kept in <Means>$[[ Dougs Design ]]</Means>. The parts I build this library with are
                in <Means>$[[ Dougs Reference Manual ]]</Means>, each beside the chapter that says what it is.
            </Paragraph>
            <Paragraph>
                Each of the three has a chapter here that represents it and carries its synopsis: its entry,
                drawn on the shelf as a cover with one line under it. In the contents the name opens the entry
                on this page, and the arrow after it leads to the book itself. And this catalogue is on its own
                shelf, first, because it is filed under what it is about, which is itself.
            </Paragraph>
        </Section>
    </Chapter>
);
