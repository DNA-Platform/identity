import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Noun ]]</Keyed>
        <Title>[[ The Rail ]]</Title>
        <Paragraph>
            <Brief />
            The strip at the edge of the words where a chapter's files wait to be opened, and the grip that pulls
            the words back when the file has the page.
        </Paragraph>
        <Section>
            <Heading>What a rail is</Heading>
            <Paragraph>
                Reading the words of a chapter, its files are not in the way: they stand folded in a rail down the
                right edge, each a press with the file's name turned on its side and a thin sketch of its lines,
                so I can see how long a file is before I open it. Pressing one opens the split, the words beside
                the panel with that file in front. When the panel has taken the whole page, the rail gives way to
                the grip, a thin strip at the edge with a sketch of the chapter's paragraphs on it, and pressing
                the grip brings the words back.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a rail fits the library's patterns</Heading>
            <Paragraph>
                A rail is a paragraph of file presses, one for each file the chapter appends, each the same press
                that stands in the panel's tabs and in the chapter's row of the table of contents, given the file
                it stands for and reading the rest off it. The grip is a tab, the switch that chooses one reading
                among the three, drawn as the strip itself with the sketch inside it. Both read the chapter they
                stand in through <Means>$[[ the manual ]]( ./The Manual )</Means> said of it, both carry their own
                rules on their own element, and <Means>$[[ the panel ]]( ./The Panel )</Means> is their sibling in
                the spread's grid, which says where each stands and when each is shown.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a rail is used</Heading>
            <Paragraph>
                A chapter that says it is a manual has a rail and a grip; nothing else is written. On a phone
                neither is shown, since the files stand under the words there.
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
