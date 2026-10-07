import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Kind>$[[ ./An Annotation ]]</Kind>
        <Title>[[ The Colour ]]</Title>
        <Paragraph>
            <Brief />
            Said of a chapter or a paragraph that stands for a book, holding the book's colour for the rules beside it to read.
        </Paragraph>
        <Section>
            <Heading>Each book has a colour of its own</Heading>
            <Paragraph>
                A chapter that stands for a book on a shelf says the book's colour, as a librarian's label does,
                and so does the paragraph that names the book in the library's bar. The colour is set where it
                is said, as a property the rules beside it read: the cover on the shelf is a gradient of it, the
                dot beside the name is it, the line under the open subject is it, and a row of the contents
                reads it from the chapter it leads to. The book itself says the same colour in its own theme,
                so its pressed switches wear it. That is one colour said in two places for now, because what a
                cover says does not yet reach its catalogue's page, and the two are brought to one when it does.
            </Paragraph>
            <Paragraph>
                The colours are each book's scheme's, drawn from the comparables and softened to the frame: the
                catalogue the site's blue-black, my story an amber, the design book a rose, the manual the teal
                of its sketch. <Means>$[[ The catalogue ]]( Dougs Library )</Means> says each.
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
