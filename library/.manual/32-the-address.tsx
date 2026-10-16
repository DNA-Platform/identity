import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./An Annotation ]]</Keyed>
        <Title>[[ The Address ]]</Title>
        <Paragraph>
            <Brief />
            Said of a section whose headings are its own and no address of the page.
        </Paragraph>
        <Section>
            <Heading>What an opaque section is</Heading>
            <Paragraph>
                Every heading of this library is an address: the framework gives it an id made from its words and
                a link to itself the moment it has a name, so that a chapter's sections can be pointed at. A
                section that is opaque keeps the headings it holds to itself. They look as headings look and they
                structure what the section says, but none of them wears an id or a link, and no address of the
                page reaches inside the section; its own heading, the canonical one, keeps its address, since
                that is the section's. The word is said once, of the section, and read as a sentence: this
                message is opaque.
            </Paragraph>
            <Paragraph>
                The first section to say it is the message
                of <Means>$[[ The Conversation ]]( ./The Conversation )</Means>. An answer Claude wrote may be
                headed Proof sketch six times in one conversation, and the page has one address for each
                message, its instant, as the application has it; without this, six headings wore one id and the
                page did not prove.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How an opaque section fits the library's patterns</Heading>
            <Paragraph>
                Opaque is said of a section, and it changes no word of the writing. It acts when the section is
                bound, after every heading in it has given itself its address, and takes the address back
                through the one door an annotation has, so no line of the framework changes and a section that
                does not say it is addressed exactly as before. It is read, as every annotation is, through
                the section's own is.
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
