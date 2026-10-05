import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Shelves ]]</Title>
        <Section>
            <Heading>What stands here</Heading>
            <Paragraph>
                Three books stand under this one. <Means>$[[ Dougs Story ]]</Means> is mine, and the one book here
                that is by its own subject. It is the place to begin from, and it begins
                with <Means>$[[ starting over ]]( Dougs Story / Starting Over )</Means>. <Means>$[[ Dougs Design ]]</Means> is where the design of this library
                is kept. <Means>$[[ Dougs Reference Manual ]]</Means> holds the parts I build this library with,
                each beside the chapter that says what it is.
            </Paragraph>
            <Paragraph>
                Each of the three has a chapter here that stands in for it and carries its synopsis. In the table
                of contents the name leads to that chapter, and the small square at the right of the row,
                its <Means>$[[ shelfmark ]]( Dougs Reference Manual / The Shelfmark )</Means>, leads to the book
                itself.
            </Paragraph>
        </Section>
    </Chapter>
);
