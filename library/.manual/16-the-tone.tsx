import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./An Annotation ]]</Keyed>
        <Title>[[ The Tone ]]</Title>
        <Paragraph>
            <Brief />
            Dark, light, or white over black: what colours the frame's five regions.
        </Paragraph>
        <Section>
            <Heading>What a tone is</Heading>
            <Paragraph>
                The frame has a tone, and a book wears one. Dark
                is <Means>$[[ the frame of 15 ]]( Dougs Design / A Black Top Bar and an Opal Side Bar )</Means>:
                the soft black of my coming-soon page across the top, and down the side the book's own pale
                colour, opal for the library. Light is the frame of 16, the same side bar under a white top
                bar. White over black is the white bar over the dark side, which
                is <Means>$[[ the frame of 26 ]]( Dougs Design / A White Top Bar and a Black Side Bar )</Means> and
                the frame my story wears. Black is on one bar, relative to the pale side bar beside it and the
                white page under it; it is never everywhere. A tone stands alone — saying a second one stands the first down —
                and every book wears the dark tone unless it says otherwise, because the dark side bar is the
                thing that makes the library memorable.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a tone fits the library's patterns</Heading>
            <Paragraph>
                A tone adds a class to the book and nothing else; the rules that read the class are a part
                of <Means>$[[ the theme ]]( ./The Theme )</Means>, which declares the sketch's values once, by
                role — the bar and what is read on it, the side bar and what is read on it, the paper and the
                ink. A tone says which of those each region takes. A book sets five of them — its colour, its
                accent, its side bar, its paper and its ink — and every tone reads them; that is how the library
                is colour fluid, each book with a colour scheme of its own and the frame still one frame.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a tone is used</Heading>
            <Paragraph>
                A book registers its tone on its class in one line, as the base registers dark for every
                book: <Means>$[[ the manual ]]( ./The Manual )</Means> and <Means>$[[ the design book ]]( Dougs Design / The Frame )</Means> take
                light, <Means>$[[ my story ]]( Dougs Story / The Sheet )</Means> white over black. The design book
                offers white and the black top bar as tabs at its head.
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
