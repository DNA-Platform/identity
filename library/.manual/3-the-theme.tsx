import { Append, Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Theme ]]</Title>
        <Paragraph>
            <Brief />
            Every value the library's rules read, declared once, and the parts that dress the frame.
        </Paragraph>
        <Section>
            <Heading>What the theme is</Heading>
            <Paragraph>
                The theme is where this library keeps its values, and the one styled component every book is
                drawn inside. The framework's own theme has no values and no rules, so everything here is mine.
            </Paragraph>
            <Paragraph>
                It holds two things. The first is the properties: the faces, the sizes and the spaces, the colors
                of a page, the colors of the dark panel a file is printed on, and the colors of the library's
                frame, which are the soft black, the sky and the opal. Every property the library uses is
                declared here, so a rule anywhere can read it. A book's own theme sets some of them again and
                declares none.
            </Paragraph>
            <Paragraph>
                The second is the rules every book needs: the page, the space around a chapter, a section and a
                paragraph, a link, a picture, a listing with its numbered lines, the switch, and the line at the
                foot of a chapter. It grows as each design is built, and every value in it is one I chose.
            </Paragraph>
            <Paragraph>
                The component is made of parts, each a method that returns some rules, so a book can change one
                part and keep the rest. A book's own theme is a class under this one. It sets properties, adds
                parts, and is registered on that book's class.
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
