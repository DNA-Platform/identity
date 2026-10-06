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
            <Heading>Dark or light</Heading>
            <Paragraph>
                The frame has two tones, dark and light, and a book wears one. A tone colours the five regions
                the base book draws, <Means>$[[ the library's bar ]]( ./The Book )</Means>, me, what the book
                holds, from seven values the theme declares for it: the bar, its ink, its dim ink, the ground of
                what is on, its line, the mark and the mark's ink. The values are the ones the frame's sketch
                has under each tone, and a book that wants its own bar sets its seven.
            </Paragraph>
            <Paragraph>
                A tone is one of a kind, as <Means>$[[ an arrangement ]]( ./The Bars )</Means> is: the one said
                last stands and the others step down, so a press on a tab changes the tone and nothing else.
                Every book wears the dark tone unless it says otherwise, because the dark side bar is the thing
                that makes the library memorable.
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
