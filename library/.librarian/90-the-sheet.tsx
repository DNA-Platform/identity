import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from '../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ The Sheet ]]</Title>
        <Section>
            <Heading>What the sheet is</Heading>
            <Paragraph>
                This book is read a chapter at a time on one typeset sheet. It
                is <Means>$[[ the reading view I chose for it ]]( Dougs Design / My autobiography )</Means>, drawn
                after the way the algebra of perspective was set in the original demo.
            </Paragraph>
            <Paragraph>
                The cover runs as one line at the head of the sheet, the book's name and mine. The table of
                contents shows only at the front of the book, under the synopsis, and a chapter has the sheet to
                itself.
            </Paragraph>
            <Paragraph>
                The sheet is <Means>$[[ a frame ]]( Dougs Reference Manual / The Frames )</Means>. It is kept here
                because this is the only book that wears it. When a second book wants it, it moves to the manual.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The sheet's file</Heading>
            <Paragraph>
                <Code identifier="code" />
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
