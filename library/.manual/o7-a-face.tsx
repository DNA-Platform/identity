import { Chapter, Heading, Paragraph, Section, Svg, Title } from '@dna-platform/public';
import { Coloured } from './18-the-colour~code.tsx';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Face ]]</Keyed>
        <Coloured>#772f25</Coloured>
        <Title>[[ A Face ]]</Title>
        <Paragraph>
            <Brief />
            An existing writing given a look in one book.
        </Paragraph>
        <Paragraph>
            <Svg>![[ icon.svg ]]</Svg>
        </Paragraph>
        <Section>
            <Heading>What a face is</Heading>
            <Paragraph>
                An existing writing given a look in one book: a subclass with a style, exported under the
                framework's own name and imported by the chapter that writes it. A face is a sentence that
                must be true: a manual's cover is a cover, and a side bar is not a table of contents.
            </Paragraph>
        </Section>
    </Chapter>
);
