import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Kind>$[[ ./A Noun ]]</Kind>
        <Title>[[ The Listing ]]</Title>
        <Paragraph>
            <Brief />
            A paragraph that prints a file beside its chapter under the file's own name.
        </Paragraph>
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
            <Paragraph>
                In the manual a listing is also a press: pressing it opens its file in the split, and a file's
                tab on the editor's bar is a switch in the file's colour that does the same. Both say what they
                are in their container, as every switch does, and the design is in <Means>$[[ The Manual's Page ]]( Dougs Design / The Manual's Page )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a listing fits the library's patterns</Heading>
            <Paragraph>
                A listing is a paragraph with content of its own: the file's name as a word, and the file as the
                framework's own code figure, numbered and coloured. The book draws one for each file a chapter
                appends, in the leaf beside the chapter, and <Means>$[[ the manual ]]( ./The Manual )</Means> sets
                the two side by side or folds the listing to a strip, its name turned on its side.
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
