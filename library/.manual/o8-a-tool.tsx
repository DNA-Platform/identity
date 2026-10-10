import { Chapter, Heading, Paragraph, Section, Svg, Title } from '@dna-platform/public';
import { Coloured } from './18-the-colour~code.tsx';
import { Brief } from './10-the-manual~annotations.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Tool ]]</Keyed>
        <Coloured>#3a5535</Coloured>
        <Title>[[ A Tool ]]</Title>
        <Paragraph>
            <Brief />
            A piece of code beside a chapter that is run rather than drawn.
        </Paragraph>
        <Paragraph>
            <Svg>![[ icon.svg ]]</Svg>
        </Paragraph>
        <Section>
            <Heading>What a tool is</Heading>
            <Paragraph>
                A piece of code beside a chapter that is run rather than drawn: the workbench, the maker of
                the library's icon, the steps that initialize a library. A tool stands where it is used, and
                the chapter beside it says when to run it.
            </Paragraph>
        </Section>
    </Chapter>
);
