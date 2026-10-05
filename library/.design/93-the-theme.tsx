import { Chapter, Code, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Appendix, Wide } from './.book';

export default () => (
    <Chapter>
        <Appendix />
        <Title>[[ The Theme ]]</Title>
        <Section>
            <Heading>What this book's theme is</Heading>
            <Paragraph>
                This book wears a theme of its own, registered on its own book class, so no other book of the
                library sees it. It is the library's theme with other values and four parts added. The page is
                paper and the ink is dark; the dark of the coming-soon page is kept as an accent, on the rail
                and on the bar of the viewer, and its pale blue lights the open entry of the index.
            </Paragraph>
            <Paragraph>
                The parts are the rail, the front, the reading and the concepts. Each is a method that returns a
                fragment of rules, every rule naming a mark on the writing it dresses, and every value read from
                the theme's own fields.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The theme's file</Heading>
            <Paragraph>
                <Wide />
                <Code language="tsx">![[ code.tsx ]]</Code>
            </Paragraph>
        </Section>
    </Chapter>
);
