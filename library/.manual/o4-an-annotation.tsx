import { Chapter, Heading, Paragraph, Section, Svg, Title } from '@dna-platform/public';
import { Coloured } from './18-the-colour~code.tsx';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./An Annotation ]]</Keyed>
        <Coloured>#185056</Coloured>
        <Title>[[ An Annotation ]]</Title>
        <Paragraph>
            <Brief />
            A thing said of a writing that is already there, read as a sentence.
        </Paragraph>
        <Paragraph>
            <Svg>![[ icon.svg ]]</Svg>
        </Paragraph>
        <Section>
            <Heading>What an annotation is</Heading>
            <Paragraph>
                A thing said of a writing that is already there, read as a sentence: this chapter is dated,
                this paragraph is first, this book is outlined. It marks its presence with a class, it may
                hold what it is told as content and read it back as a property, and it changes no word of
                the writing.
            </Paragraph>
        </Section>
    </Chapter>
);
