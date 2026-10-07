import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Manual's Page ]]</Title>
        <Section>
            <Heading>What I come to the manual for</Heading>
            <Paragraph>
                The reference manual is the book I build the library with: one chapter to a part, the code that
                is the part beside the chapter that says what it is and how it is used. I come to its page to
                find a part, read what it is, and read its code without leaving the words — or to read the
                code first and the words beside it, which is the other way round. So the page is a chapter and
                its files, read two ways: words forward, where the chapter is the page and its files stand by;
                and code forward, where the file is the page and the chapter is a brief beside it. I decided
                that in the sketch phase — <Means>$[[ the manual read two ways ]]( ./The Designs I Am Going With )</Means> —
                and the switch between them is a thing said of the book, already built; what the page decides
                is how each reading looks and how one becomes the other.
            </Paragraph>
            <Paragraph>
                The page beside this chapter is the manual's own print — every chapter, every brief, every
                file, the framework's names on every element — made by <Means>$[[ The Print ]]( ./The Print )</Means> and
                opened from the file. It begins as the manual looks today, set in the frame
                that <Means>$[[ The Bookshelf ]]( ./The Bookshelf )</Means> decided: the bar is the cover, with
                the library's mark as the subject I am filed under, my mark and my name, and my author; the
                contents stand down the side. From there it is changed one thing at a time, and what I decide
                is written here in my words, as it was for the bookshelf.
            </Paragraph>
        </Section>
        <Append
            identifier="035"
            type=".html"
        >
            ![[ 035.html ]]
        </Append>
    </Chapter>
);
