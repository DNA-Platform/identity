import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Sheet ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book is read a chapter at a time, on one sheet. Over the sheet is a thin bar,
                with <Means>$[[ the switch ]]( Dougs Reference Manual / The Switch )</Means> and the way back to
                the library. At the head of the sheet runs one line: the book's name and mine. Under it is one
                page: the synopsis and the table of contents when no chapter is open, and otherwise the open
                chapter, with the chapter before and the chapter after at its foot.
            </Paragraph>
            <Paragraph>
                The class of this book writes those parts where they go. The sheet is the arrangement said of the
                book: the bar over the sheet, and the sheet held to the width of a line of reading. The design it
                follows is <Means>$[[ the reading view ]]( Dougs Design / The Reading View )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How it is set</Heading>
            <Paragraph>
                The theme is the library's with this book's type: a serif for the words, a chapter's title in the
                middle of the sheet, the text set to both edges, and a large first letter on the paragraph a
                chapter opens with. The arrangement finds that paragraph when the book is bound. It is the first
                paragraph of the chapter, which makes it the one thing in my library found by where it is and
                not by what it says it is.
            </Paragraph>
            <Paragraph>
                The cover and the table of contents are this book's own. The cover is drawn as the running line
                at the head of the sheet. The table of contents
                is <Means>$[[ the index ]]( Dougs Reference Manual / The Entry )</Means> set in the middle of
                the front page.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The papers</Heading>
            <Paragraph>
                The sheet comes in three papers: book, night and white. Each is a theme of its own under this
                book's theme, and sets colors and nothing else. The book paper is the one registered on the
                class. I pick another with the switch, and only one holds at a time.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="theme"
            type=".tsx"
        >
            ![[ theme.tsx ]]
        </Append>
        <Append
            identifier="faces"
            type=".tsx"
        >
            ![[ faces.tsx ]]
        </Append>
    </Chapter>
);
