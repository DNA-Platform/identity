import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Table ]]</Title>
        <Section>
            <Heading>What an entry knows</Heading>
            <Paragraph>
                The table of contents is how a book is moved through. So each of its entries knows which
                chapter it means, and whether that chapter is the open page
                of <Means>$[[ the pages ]]( ./The Pages )</Means>.
            </Paragraph>
            <Paragraph>
                I write a table as I always did, a line for each chapter. The library's own table of contents
                puts the entry on every line when the book is bound, and the entry puts a class on its line
                when its chapter is open. <Means>$[[ A frame ]]( ./The Frames )</Means> lights the line that has
                it.
            </Paragraph>
            <Paragraph>
                An entry says two more things about its line. It notes the kind of file its chapter carries,
                if it carries one. And it puts a class on the line that answers for a book filed under this one,
                which is what lets a catalogue show its table as a shelf.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The table's file</Heading>
            <Paragraph>
                <Code identifier="code" />
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
