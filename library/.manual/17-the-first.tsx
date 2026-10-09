import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./An Annotation ]]</Keyed>
        <Title>[[ The First ]]</Title>
        <Paragraph>
            <Brief />
            Said of the paragraph a chapter opens with, so a book may set its first letter large.
        </Paragraph>
        <Section>
            <Heading>The paragraph a chapter opens with</Heading>
            <Paragraph>
                A chapter that opens with a large letter says which paragraph it opens with: the paragraph says
                it is first, and a theme sets that paragraph's first letter however the book's design has it.
                Nothing finds the paragraph by where it stands. In <Means>$[[ my story ]]( Dougs Story )</Means>
                every chapter says it of one paragraph, and the sheet draws the drop initial there.
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
