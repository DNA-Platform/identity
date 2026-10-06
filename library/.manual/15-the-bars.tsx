import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Bars ]]</Title>
        <Section>
            <Heading>The cover as a top bar, the table of contents as a side bar</Heading>
            <Paragraph>
                Most of my designs have a bar across the top and a bar down the side. The bar across the top is
                the book's cover: its name, what it is filed under and who it is by, set in a line. The bar down
                the side is the book's table of contents: its chapters in groups, the open one lit. So the two
                bars are not new things. They are the cover and the table of contents, each with a look, and any
                book that wants a bar takes it from here.
            </Paragraph>
            <Paragraph>
                The top bar is the framework's cover with a look. The side bar
                is <Means>$[[ the index ]]( ./The Entry )</Means> with a look, so each of its rows that leads
                somewhere is an entry. Each reads its colors from the theme, so one book's side bar is dark and
                another's is pale with nothing in the bar itself changed.
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
