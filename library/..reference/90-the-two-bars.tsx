import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Two Bars ]]</Title>
        <Section>
            <Heading>How this book is laid out</Heading>
            <Paragraph>
                This book is the way into every other, so it is laid out as a place to choose from. Across the top
                are two bars. The first is the library's: what this book is filed under, and me. The second is this
                book's: its cover, and <Means>$[[ the switch ]]( Dougs Reference Manual / The Switch )</Means>.
                Under the bars the table of contents is kept at the left. Beside it is one page: the synopsis and
                a shelf when no chapter is open, and otherwise the open chapter.
            </Paragraph>
            <Paragraph>
                The shelf holds the chapters that each represent a book. The class of this book finds them by what
                they are: a chapter that carries the synopsis of a book other than this one. Its specification
                says every chapter I add has a place.
            </Paragraph>
            <Paragraph>
                The two bars are the arrangement said of the book. The design it is growing toward
                is <Means>$[[ the shelf ]]( Dougs Design / The Shelf )</Means> under <Means>$[[ the black and the sky ]]( Dougs Design / Two Top Bars: Black, then Sky )</Means>.
                It has no covers and no color yet, and the shelf is its only view.
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
