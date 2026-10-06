import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Manual ]]</Title>
        <Section>
            <Heading>A book for looking things up</Heading>
            <Paragraph>
                A manual is one of the types of book in my library. It is read to look something up, so it keeps
                its table of contents at the side as an index, and shows one chapter at a time with the file that
                chapter is about beside it. This book is one. The design it follows
                is <Means>$[[ Side by Side ]]( Dougs Design / Side by Side )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What a manual is made of</Heading>
            <Paragraph>
                The class of book says where each part goes. At the side it puts what the book is filed under,
                the cover, who it is by, <Means>$[[ the switch ]]( ./The Switch )</Means> and the table of
                contents. Beside the side it puts the chapters, each on <Means>$[[ a leaf ]]( ./The Imposition )</Means> of
                its own: the synopsis on the front, then each chapter with its files.
            </Paragraph>
            <Paragraph>
                The spread is the imposition said of the book: the side and the leaves in two columns, and on
                the open leaf the words in one column and the file in another. On a narrow screen everything is
                one column, and the index closes while a chapter is open.
            </Paragraph>
            <Paragraph>
                The cover and the table of contents are this type's own. The cover is the framework's with a
                look. The table of contents is <Means>$[[ the index ]]( ./The Entry )</Means> with a look, so each
                of its rows that leads somewhere is an entry and lights when its chapter is the open one. A
                manual's cover file and table file take them from here.
            </Paragraph>
            <Paragraph>
                A manual has its own kind of entry, registered on its class. It shows the type of the file its
                chapter appends, so the index tells a chapter about a tool from one that only explains.
            </Paragraph>
            <Paragraph>
                The theme is the library's with three parts added: the side, the words, and what changes on a
                narrow screen.
            </Paragraph>
            <Paragraph>
                A manual gives the words the room unless I press code forward. Then the file takes the room and
                the words keep to a narrow column beside it. It is one more thing said of the book, so it goes on
                and comes off without anything being drawn again from the start.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="faces"
            type=".tsx"
        >
            ![[ faces.tsx ]]
        </Append>
        <Append
            identifier="entry"
            type=".tsx"
        >
            ![[ entry.tsx ]]
        </Append>
        <Append
            identifier="theme"
            type=".tsx"
        >
            ![[ theme.tsx ]]
        </Append>
        <Append
            identifier="forward"
            type=".tsx"
        >
            ![[ forward.tsx ]]
        </Append>
    </Chapter>
);
