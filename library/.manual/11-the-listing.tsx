import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from './.book';

export default () => (
    <Chapter>
        <Title>[[ The Listing ]]</Title>
        <Section>
            <Heading>A chapter and its file</Heading>
            <Paragraph>
                A chapter that says what a part is carries the part's file, and the file is printed in one of
                its sections, the listing. A book sets such a chapter as a spread, the words and the file side
                by side, so that neither is read without the other.
            </Paragraph>
            <Paragraph>
                This manual's chapters are of that kind. So is the appendix of any other book, where the code
                that builds the book is kept, which is why an appendix here reads like a page of this manual.
                Nothing marks such a chapter but the file it carries.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Which is forward</Heading>
            <Paragraph>
                There are two spreads, and a reader changes between them. With the words forward, the file
                stands narrow at the right, there to show that it can be opened out. With the code forward, the
                file takes the wide side and the words stand beside it, because code does not look right unless
                it is in full view.
            </Paragraph>
            <Paragraph>
                The change is one press, and no chapter is rewritten for it. The book is given the other spread
                from outside, in front of its own, by the switch
                of <Means>$[[ ./The Book ]]</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The listing's file</Heading>
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
