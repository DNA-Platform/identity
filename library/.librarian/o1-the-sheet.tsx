import { Append, Chapter, Heading, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { First, Manual } from '../.manual/.book';

export default () => (
    <Chapter>
        <Part>How this book is built</Part>
        <Manual />
        <Title>[[ The Sheet ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                <First />
                This book is read a chapter at a time, on one sheet. Across the top is the library's bar, and down
                the side are my story's chapters on its own pale amber, the open one lit. That is the frame
                of <Means>$[[ 15 ]]( Dougs Design / A Black Top Bar and an Opal Side Bar )</Means>, which every
                book here shares. Over the sheet are its three papers, picked
                with <Means>$[[ the switch ]]( Dougs Reference Manual / The Switch )</Means>. At the head of the
                sheet runs one line, the book's name and mine, and under it the date of the chapter that is open.
                Under that is the chapter, with <Means>$[[ the turn ]]( Dougs Reference Manual / The Turn )</Means> at
                its foot: the chapter before, where I am, and the chapter after.
            </Paragraph>
            <Paragraph>
                When the address names no chapter, the book opens on the latest one, the most recent thing I have
                written. There is no page for the synopsis. What this book is about is read
                on <Means>$[[ its entry in the catalogue ]]( Dougs Library / Dougs Story )</Means>.
            </Paragraph>
            <Paragraph>
                The class of this book writes those parts where they go. The sheet is the arrangement said of the
                book: the papers over the sheet, and the sheet held to the width of a line of reading. The design
                it follows
                is <Means>$[[ the reading view in the frame ]]( Dougs Design / The Reading View, in the Frame, with the Chapters at the Side )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How it is set</Heading>
            <Paragraph>
                The theme is the library's with this book's type: a serif for the words, a chapter's title in the
                middle of the sheet, the text set to both edges, and a large first letter on the paragraph a
                chapter opens with. Each chapter says which paragraph that is by calling
                it <Means>$[[ first ]]( Dougs Reference Manual / The First )</Means>, so nothing in this book is
                found by where it is.
            </Paragraph>
            <Paragraph>
                The cover and the table of contents are this book's own. The cover is drawn as the running line
                at the head of the sheet. The table of contents
                is <Means>$[[ the index ]]( Dougs Reference Manual / The Entry )</Means> down the side, and what
                this book is built with, which is this chapter, stands at its foot in a smaller voice.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The papers</Heading>
            <Paragraph>
                The sheet comes in three papers: book, night and white. A paper is said of the book, as a tone
                is, and sets the colours of the sheet and the ground around it and nothing else. The book paper is
                my story's own paper and ink, a cream and a sepia. White is the library's own page. Night is my
                story's amber taken down almost to black, with cream words, and the amber itself for the first
                letter and the links.
            </Paragraph>
            <Paragraph>
                That is the rule I took
                from <Means>$[[ Matter ]]( Dougs Design / Driving the Build )</Means>: a dark paper carries a
                hint of its own book's hue and never a foreign one. So each paper sets four things, the ground,
                the paper, the ink and the accent, and the soft words and the hairlines are the ink thinned, as
                in <Means>$[[ 33 ]]( Dougs Design / Four Schemes )</Means>. The book paper is the one registered on
                the class. I pick another with the switch, and only one holds at a time.
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
