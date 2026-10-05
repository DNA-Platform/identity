import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Listing ]]</Title>
        <Section>
            <Heading>A chapter and its file</Heading>
            <Paragraph>
                A chapter that is about a part of this library keeps the part's file beside it, and appends it.
                The words say what the part is and how I use it. The file is the part.
            </Paragraph>
            <Paragraph>
                A listing is how a book shows one such file: the name it was appended under, and under that the
                file as it is on disk. <Means>$[[ The book ]]( ./The Book )</Means> decides where a listing
                goes. Left to itself it prints each one under its chapter.
            </Paragraph>
            <Paragraph>
                This manual's chapters are of that kind. So are the chapters at the back of any other book, where
                the code that builds that book is kept, which is why the back of a book reads like a page of this
                manual.
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
