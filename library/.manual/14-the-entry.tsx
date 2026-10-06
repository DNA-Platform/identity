import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Entry ]]</Title>
        <Paragraph>
            <Brief />
            A row of the table of contents that leads somewhere, lit when its chapter is open.
        </Paragraph>
        <Section>
            <Heading>A row that leads somewhere</Heading>
            <Paragraph>
                A table of contents is a list of rows, and most of them lead to a chapter. I call such a row an
                entry. An entry knows the chapter it leads to, whether the row names the chapter or a heading
                inside it, and it says so when that chapter is the open one. So a table of contents can show
                where I am in the book.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a table of contents gets its entries</Heading>
            <Paragraph>
                The index is the framework's table of contents with one thing added. When the book is bound it
                says of each row that leads somewhere that it is an entry. A book's own table of contents is an
                index with a look, so no table file has to say entry on every row.
            </Paragraph>
            <Paragraph>
                A type of book may have its own kind of entry. It registers that kind on its class and the index
                uses it. The one in <Means>$[[ the manual ]]( ./The Manual )</Means> also shows the type of the
                file its chapter appends.
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
