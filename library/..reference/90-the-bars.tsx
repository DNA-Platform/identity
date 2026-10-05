import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from '../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ The Bars ]]</Title>
        <Section>
            <Heading>Two bars</Heading>
            <Paragraph>
                Two bars stand across the top of this book. The upper one is the library's, and is to be the same
                on every catalogue: the library's name at one end and mine at the other. The one under it is this
                book's own cover, its title, with the ways of showing what it holds at its right.
            </Paragraph>
            <Paragraph>
                It is the frame
                of <Means>$[[ the design I chose for the library's catalogue ]]( Dougs Design / The library's catalogue )</Means>,
                and it is <Means>$[[ a frame ]]( Dougs Reference Manual / The Frames )</Means> like any other, a
                class under the library's book that places the parts. It is kept here until a second catalogue
                uses it.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The bars' file</Heading>
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
