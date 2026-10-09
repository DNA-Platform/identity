import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Noun ]]</Keyed>
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
                file as it is on disk. <Means>$[[ The panel ]]( ./The Panel )</Means> decides where a listing goes:
                one for each file the chapter appends, the one in front shown and the rest kept.
            </Paragraph>
            <Paragraph>
                This manual's chapters are of that sort. So are the chapters at the back of any other book, where
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
                framework's own code figure, numbered and coloured. It is given the file it stands for, an append
                of its chapter, and reads its name, its type and its chapter off it; whether it is the one in
                front it reads from <Means>$[[ the manual ]]( ./The Manual )</Means> said of that chapter, and the
                press that puts a file in front is the same file press wherever it stands, in the panel's tabs,
                in <Means>$[[ the rail ]]( ./The Rail )</Means> with the name turned on its side, or in the chapter's
                row of the table.
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
