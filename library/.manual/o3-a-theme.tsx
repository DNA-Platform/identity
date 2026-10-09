import { Chapter, Heading, Paragraph, Section, Svg, Title } from '@dna-platform/public';
import { Coloured } from './18-the-colour~code.tsx';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Theme ]]</Keyed>
        <Coloured>#5a4610</Coloured>
        <Title>[[ A Theme ]]</Title>
        <Paragraph>
            <Brief />
            Values and nothing else: the fields a design is set in and the parts that read them.
        </Paragraph>
        <Paragraph>
            <Svg>![[ icon.svg ]]</Svg>
        </Paragraph>
        <Section>
            <Heading>What a theme is</Heading>
            <Paragraph>
                Values and nothing else: the fields a design is set in, and the parts, each a set of rules
                that read them. A theme is registered on a type of book in one line, and a tone is a theme
                named for what it looks like.
            </Paragraph>
        </Section>
    </Chapter>
);
