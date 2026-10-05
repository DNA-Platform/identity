import { Append, Chapter, Heading, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Outline ]]</Title>
        <Section>
            <Heading>What the outline shows</Heading>
            <Paragraph>
                The outline draws a dashed line around every chapter, every section, every listing, and every
                paragraph that something has been said of. Over each it writes the classes that part carries. A
                class is put on a part by what the part is, or by something said of it. A rule finds the part by
                its class, and the code finds it by asking what was said of it. So the outline shows what a
                design has to work with.
            </Paragraph>
            <Paragraph>
                It is there to check the structure of a book before any design is built on it. A cover says it is
                a cover. A chapter that represents another book says it is a synopsis. A dated chapter says it
                is dated. If a chapter does not say what I expect, the structure is wrong, and no design will fix
                that.
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
