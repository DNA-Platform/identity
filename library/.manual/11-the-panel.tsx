import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Noun ]]</Keyed>
        <Title>[[ The Panel ]]</Title>
        <Paragraph>
            <Brief />
            The box beside a chapter's words where its files are read: the tab bar at its head, and the file in
            front under it.
        </Paragraph>
        <Section>
            <Heading>What a panel is</Heading>
            <Paragraph>
                When a chapter is read beside its files, the files stand in a panel: a dark box with a bar of tabs
                across its head and one file open beneath, as an editor shows them. The bar holds a tab for each
                file the chapter appends, in the file's colour; the words tab, which brings the words back in
                front; the dock, which sends the panel across the whole page or back to its half; and three
                options, light, wrap and lines. The file in front is the one whose tab is pressed, and when none
                has been pressed it is the first. The design is <Means>$[[ Side by Side ]]( Dougs Design / Side by Side )</Means>,
                and the page is <Means>$[[ The Manual's Page ]]( Dougs Design / The Manual's Page )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a panel fits the library's patterns</Heading>
            <Paragraph>
                A panel is a paragraph with content of its own, drawn as a box: the tabs, which are a paragraph of
                switches, and under them <Means>$[[ a listing ]]( ./The Listing )</Means> for each file the chapter
                appends, the one in front shown and the rest kept. It reads everything it draws off the chapter it
                stands in, through <Means>$[[ the manual ]]( ./The Manual )</Means> said of that chapter: which files
                there are, which is in front, and which states of the panel a tab may choose among. Nothing is handed to it.
                Its rules are its own, on its own element, and the manual's spread only says where in its grid
                the panel stands. Another manual that wants a different panel registers its own class for the
                panel's, and the spread draws that one.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a panel is used</Heading>
            <Paragraph>
                A chapter that says it is a manual has a panel; nothing else is written. A tab pressed shows its
                file; the words tab puts the words back in front; the dock fills the page with the panel, and the
                grip at the edge, which is <Means>$[[ the rail's ]]( ./The Rail )</Means>, pulls the words back.
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
