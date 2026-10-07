import { Chapter, Heading, Paragraph, Section, Svg, Title } from '@dna-platform/public';
import { Coloured } from './18-the-colour~code.tsx';
import { Brief } from './10-the-manual~forward.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Kind>$[[ ./A Type of Book ]]</Kind>
        <Coloured>#26323a</Coloured>
        <Title>[[ A Type of Book ]]</Title>
        <Paragraph>
            <Brief />
            A class under the book whose write places its chapters differently.
        </Paragraph>
        <Paragraph>
            <Svg>![[ icon.svg ]]</Svg>
        </Paragraph>
        <Section>
            <Heading>What a type of book is</Heading>
            <Paragraph>
                A class under the book whose write places its chapters differently: the manual, the
                catalogue, my story, the design book. A type reads what its chapters carry, never where they
                stand, and its layout, its theme and its faces stand beside it.
            </Paragraph>
        </Section>
    </Chapter>
);
