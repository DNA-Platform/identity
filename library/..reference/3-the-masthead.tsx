import { Bold, Document, Heading, Italics, Paragraph, Resource, Section, Title } from '@dna-platform/public';
import { $Article, Comments } from './.book';

export default class $TheMasthead extends $Article {
    print() {
        return (
            <Document>
                <Title>The Masthead</Title>
                <Section>
                    <Heading>What it specifies</Heading>
                    <Paragraph>The strip above every page &mdash; the library name, its mark and its menu &mdash; and the row of tabs beneath the title. Two kinds, one a header and one a toolbar. Both are writing.</Paragraph>
                </Section>
                <Section>
                    <Heading>What a book gets</Heading>
                    <Paragraph>A masthead and a tab row from two tags. The menu is the table of contents, opened from the strip: the chapters of this book and the books it catalogues, exactly as the rail lists them, and nothing else. The tabs are three mentions: where the reader is, drawn as the page it stands on; what the book is about, which leads to the catalogue it is filed under; and who wrote it.</Paragraph>
                </Section>
                <Section>
                    <Heading>How it is used</Heading>
                    <Paragraph>A cover writes the header first and the tab row last, with title, author and subject between. The three tabs are written on the cover as mentions, the book&rsquo;s own name, its catalogue and its author, and the compiler writes each one&rsquo;s address. The menu asks the book for its table and draws it a second time. Everything else is identical on every page.</Paragraph>
                </Section>
                <Section>
                    <Heading>Cautions</Heading>
                    <Paragraph>These were functions returning markup, placed into a cover as expressions. A cover was then composed of writing and two holes. Nothing in the holes could be inherited, stood in the block, or was visible to anything asking the page what it held.</Paragraph>
                    <Paragraph>The governing rule is that <Bold>a library closed under books is closed under writing</Bold>. There may not be places where that ceases to hold. Both kinds now build what they supply within their bond and concatenate it onto their own block, which is the seam a title uses to build a heading it was not given.</Paragraph>
                </Section>
                <Comments by="Phillip">
                    <Paragraph>The repair mattered more than it looked. Two functions returning markup drew the same pixels as two kinds do now, so nothing on the page changed &mdash; but the page could not be asked what its own masthead was, and now it can. A reader never sees that difference. Everything downstream of a reader does.</Paragraph>
                </Comments>
                <Resource>.tsx</Resource>
            </Document>
        );
    }
}
