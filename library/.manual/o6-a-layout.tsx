import { Chapter, Heading, Paragraph, Section, Svg, Title } from '@dna-platform/public';
import { Coloured } from './18-the-colour~code.tsx';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Kind>$[[ ./A Layout ]]</Kind>
        <Coloured>#553561</Coloured>
        <Title>[[ A Layout ]]</Title>
        <Paragraph>
            <Brief />
            Where the regions of the frame go, said of the book once.
        </Paragraph>
        <Paragraph>
            <Svg>![[ icon.svg ]]</Svg>
        </Paragraph>
        <Section>
            <Heading>What a layout is</Heading>
            <Paragraph>
                Where the regions of the frame go, said of the book once: one grid, the library's bar across
                the top, what the book holds down the side, the head and the leaves. A layout is named for
                where it puts the bar and never for the book it was first drawn on.
            </Paragraph>
        </Section>
    </Chapter>
);
