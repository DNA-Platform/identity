import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Outline ]]</Title>
        <Paragraph>
            <Brief />
            A switch that draws each part's classes over the page, to see the structure.
        </Paragraph>
        <Section>
            <Heading>What the outline shows</Heading>
            <Paragraph>
                The outline draws a dashed line around every chapter, every section, every listing, and every
                paragraph that something has been said of. Over each it writes the classes that part carries. A
                class is put on a part by what the part is, or by something said of it. A rule finds the part by
                its class. The code mostly finds it by asking what was said of it. So the outline shows what a
                design has to work with.
            </Paragraph>
            <Paragraph>
                It is there to check the structure of a book before any design is built on it. A cover says it is
                a cover. A chapter that represents another book says it is a synopsis. A dated chapter says it
                is dated. If a chapter does not say what I expect, the structure is wrong, and no design will fix
                that.
            </Paragraph>
            <Paragraph>
                It is off until I press it. It is the first choice
                of <Means>$[[ the switch ]]( ./The Switch )</Means>, and every book carries it.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the outline fits the library's patterns</Heading>
            <Paragraph>
                The outline is said of a book and adds one class to it; the rules that draw the lines and the
                names over every part are a part of <Means>$[[ the theme ]]( ./The Theme )</Means>, always there,
                so pressing it changes a class and redraws nothing. It was a format once, and the press replaced
                the whole book; measured, and made what it is.
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
