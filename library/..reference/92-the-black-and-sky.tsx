import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from '../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ The Black and Sky ]]</Title>
        <Section>
            <Heading>The library's own colours</Heading>
            <Paragraph>
                The library itself is black and sky: a black bar, a sky under it, and white beneath. Each
                catalogue is to have colours of its own, so these stand here, in this book's theme, and not in
                the theme every book shares. They are stand-ins until I choose mine.
            </Paragraph>
            <Paragraph>
                The theme is <Means>$[[ the library's ]]( Dougs Reference Manual / The Theme )</Means> with two
                values changed and two parts added: the rules that set the table
                as <Means>$[[ a shelf ]]( ./The Shelf )</Means> and as a list. <Means>$[[ The bars ]]( ./The Bars )</Means> carry
                their own rules and read these values.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The theme's own file</Heading>
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
