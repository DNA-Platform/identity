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
            <Heading>One chapter open at a time</Heading>
            <Paragraph>
                In printing, the layout is the arrangement of a book's parts on the sheet. Here it is the
                arrangement said of a book: where its chapters go and which of them is shown. The one every book
                of mine starts from shows one chapter at a time. <Means>$[[ The book ]]( ./The Book )</Means> draws
                each chapter on a leaf of its own, with the files the chapter appends, and says which leaf is
                open; a leaf that is not open is not shown. Every leaf is in the document, so a link to any place
                in the book has somewhere to land.
            </Paragraph>
            <Paragraph>
                A type of book has an layout of its own under this one, with its own rules added: the
                spread of <Means>$[[ a manual ]]( ./The Manual )</Means>, the sheet of my story, the frame of the
                design book. A type says which it has in one line.
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
