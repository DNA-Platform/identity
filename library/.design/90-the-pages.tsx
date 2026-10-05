import { Chapter, Code, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Appendix, Wide } from './.book';

export default () => (
    <Chapter>
        <Appendix />
        <Title>[[ The Pages ]]</Title>
        <Section>
            <Heading>What the pages are</Heading>
            <Paragraph>
                This book shows one chapter at a time. Its chapters are pages, and the open page is the one the
                address names. When it names none the book opens on its first page, the thing I am meant to
                look at, and not on its cover. That is the framework's Paginated, taken up by a class of this
                book's own that says which chapters are pages: every chapter but the table of contents, which
                is the index and always in view, and the synopsis, which is shown with the cover. A place
                inside a chapter opens the chapter that holds it and is brought to the top, so a kind of page
                is one press from the index.
            </Paragraph>
            <Paragraph>
                Two marks go with it. A chapter that says it is an appendix wears the mark, and the theme and the
                index read it; the chapters at the back of this book are the appendix, one for each part the book
                is built with. And an entry of the index knows the chapter or the place it means and lights
                when that is where I am, by comparing two references and reading no address.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The pages' file</Heading>
            <Paragraph>
                <Wide />
                <Code language="tsx">![[ code.tsx ]]</Code>
            </Paragraph>
        </Section>
    </Chapter>
);
