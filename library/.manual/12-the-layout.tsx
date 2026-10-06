import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Layout ]]</Title>
        <Paragraph>
            <Brief />
            Said of every book: each chapter on a leaf of its own, one open at a time, in the frame's grid.
        </Paragraph>
        <Section>
            <Heading>What the layout is</Heading>
            <Paragraph>
                In printing, the layout is the arrangement of a book's parts on the sheet. Here it is said of a
                book, once, and it does two things. It shows one chapter at a time: <Means>$[[ the book ]]( ./The Book )</Means> draws
                each chapter on a leaf of its own and says which leaf is open, and the layout hides the rest —
                every leaf stays in the document, so a link to any place in the book has somewhere to land. And
                it carries the six grids of <Means>$[[ the arrangements ]]( ./The Bars )</Means>, each keyed by
                the class the arrangement puts on the book, so that pressing from one arrangement to another
                changes a class and redraws nothing.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the layout fits the library's patterns</Heading>
            <Paragraph>
                The layout is the framework's own Paginated extended: it answers the framework's two questions,
                which chapters are pages and which is open, with the book's own chapters and the book's own
                open, and keeps the framework's way of marking them. It is a Format with a look, a styled
                component composed of parts — the paging, the regions, the grids, the phone — and it is given to
                every book when the book is defined, so it is always there. That is why the arrangements can be
                annotations that add a class and nothing else: the rules that read the class live here.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the layout is used</Heading>
            <Paragraph>
                A book never writes it; the book class gives it. What a type of book wants inside the page it
                says with a Format of its own, given the same way: the spread
                of <Means>$[[ the manual ]]( ./The Manual )</Means> sets a chapter beside its file, the sheet
                of <Means>$[[ my story ]]( Dougs Story / The Sheet )</Means> sets the page's width. Neither is
                a layout; each is said of the book beside it.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The parts of the layout</Heading>
            <Paragraph>
                The paging, which hides every leaf but the open one. The regions: what each of the five does
                inside its area — the library's bar a row, the head a row that wraps, the holds and the leaves
                scrolling on their own. The areas, one grid per arrangement, with the widths from the theme. The
                phone: one column, the library's bar stuck at the top at the bar's height, me fixed at the
                right, the table of contents hidden once a chapter is open.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where the layout bites</Heading>
            <Paragraph>
                A Format given through a switch is a container, and a container added to the book remounts
                everything inside it. The arrangements were Formats once, and a press replaced the whole book;
                measured, then made annotations, with their grids here. Anything a reader switches follows that
                rule: the class changes, the rules were always there.
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
