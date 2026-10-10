import { Chapter, Heading, Paragraph, Section, Svg, Title } from '@dna-platform/public';
import { Coloured } from './18-the-colour~code.tsx';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Noun ]]</Keyed>
        <Coloured>#263e60</Coloured>
        <Title>[[ A Noun ]]</Title>
        <Paragraph>
            <Brief />
            A writing of this library's own, with a write of its own.
        </Paragraph>
        <Paragraph>
            <Svg>![[ icon.svg ]]</Svg>
        </Paragraph>
        <Section>
            <Heading>What a noun is</Heading>
            <Paragraph>
                A writing of this library's own, with a write of its own: a byline, a switch, a turn, a
                jacket, a mark. It is categorically different from what it stands beside, as an image is
                from a paragraph, and the test is whether it writes content no existing writing produces.
            </Paragraph>
        </Section>
    </Chapter>
);
