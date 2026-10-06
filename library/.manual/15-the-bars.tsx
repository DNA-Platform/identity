import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Bars ]]</Title>
        <Section>
            <Heading>The cover as a top bar, the table of contents as a side bar</Heading>
            <Paragraph>
                Most of my designs have a bar across the top and a bar down the side. The bar across the top is
                the book's cover, set in a line; the bar down the side is the book's table of contents, its
                chapters in groups with the open one lit. A top bar is not a kind of cover, and a side bar is not
                a kind of table of contents. Each is something said of one, the way the cover itself is
                something said of a chapter.
            </Paragraph>
            <Paragraph>
                So a cover file says it is the cover and that it is a top bar, and a table file says it is the
                table of contents, that it is <Means>$[[ an index ]]( ./The Entry )</Means>, and that it is a side
                bar. The chapter stays what it is, and each thing said of it adds its own look. A book's layout
                then places the chapter that is a side bar where its side is, and the one that is a top bar
                across its top.
            </Paragraph>
            <Paragraph>
                Both read their colors from the theme, so one book's side bar is dark and another's is pale with
                nothing in the bar itself changed.
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
