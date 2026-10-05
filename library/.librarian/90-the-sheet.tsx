import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Sheet ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book is read a chapter at a time, on one sheet. Over the sheet is a thin bar,
                with <Means>$[[ the switch ]]( Dougs Reference Manual / The Switch )</Means> and the way back to
                the library. At the head of the sheet are the book's name and mine. Under them is one page: the
                synopsis and the table of contents when no chapter is open, and otherwise the open chapter.
            </Paragraph>
            <Paragraph>
                The class of this book writes those parts where they go, and its specification says every chapter
                I add has a place. The sheet is the arrangement said of the book: the bar across the top, and the
                sheet held to the width of a line of reading.
            </Paragraph>
            <Paragraph>
                The design it is growing toward
                is <Means>$[[ the reading view ]]( Dougs Design / The Reading View )</Means>. It does not have its
                paper, its type or its three colors yet.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);
