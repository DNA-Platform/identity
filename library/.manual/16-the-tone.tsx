import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';

export default () => (
    <Chapter>
        <Title>[[ The Tone ]]</Title>
        <Paragraph>
            <Brief />
            Dark, light, or white over black: what colours the frame's five regions.
        </Paragraph>
        <Section>
            <Heading>What a tone is</Heading>
            <Paragraph>
                The frame has a tone, and a book wears one. Dark is the soft black of my coming-soon page on
                every bar; light is white; white over black is the light bar over the dark side, which
                is <Means>$[[ the frame of 26 ]]( Dougs Design / A White Top Bar and a Black Side Bar )</Means> and
                the frame my story wears. A tone is one of a kind, as <Means>$[[ an arrangement ]]( ./The Bars )</Means> is,
                and every book wears the dark tone unless it says otherwise, because the dark side bar is the
                thing that makes the library memorable.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a tone fits the library's patterns</Heading>
            <Paragraph>
                A tone adds a class to the book and nothing else; the rules that read the class are a part
                of <Means>$[[ the theme ]]( ./The Theme )</Means>, which declares the sketch's seven values for
                each tone — the bar, its ink, its dim ink, the ground of what is on, its line, the mark and the
                mark's ink — fourteen fields in all. A book that wants its own bar sets its seven, and the tone
                reads them; that is how the library is colour fluid, each book with a colour scheme of its own
                and the frame still one frame.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a tone is used</Heading>
            <Paragraph>
                A book registers its tone on its class in one line, as the base registers dark for every
                book: <Means>$[[ the manual ]]( ./The Manual )</Means> and <Means>$[[ the design book ]]( Dougs Design / The Frame )</Means> take
                light, <Means>$[[ my story ]]( Dougs Story / The Sheet )</Means> white over black. The design book
                offers all three as tabs at its head.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where a tone bites</Heading>
            <Paragraph>
                A tone was a theme in the plan and a Format in the first build, and a press on it replaced the
                whole book, measured; a tone is now a class, and the rules were always there. A book's own
                colour is another thing: <Means>$[[ the colour ]]( ./The Colour )</Means>, which the tone leaves
                alone.
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
