import { $Chapter, Heading, Ref, Section, TableOfContents, Title, book as bookMention, chapter as Chapter } from '@dna-platform/public';
import { $ } from '@dna-platform/chemistry';
import { Option } from '@dna-platform/public/application';

const Book = $(bookMention);

export default class $Contents extends $Chapter {
    print() {
        return (
            <TableOfContents>
                <Title print={false}>Table of Contents</Title>
                <Section>
                    <Heading>Contents</Heading>
                    <Option><Chapter>Entries</Chapter></Option>
                    <Option><Chapter>The Semantics of THIS Library</Chapter></Option>
                    <Option>$[ Librarian&rsquo;s Log: Stardate 2026-09-15 ]( ./Librarian's Log: Stardate 2026-09-15 )</Option>
                    <Chapter print={false}>My Library Log</Chapter>
                    <Chapter print={false}>Synopsis</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                </Section>
                <Section>
                    <Heading>What I have written</Heading>
                    <Option><Book>[[ Dougs Library ]]*</Book></Option>
                    <Option><Book>[[ Claude &amp; Our Projects ]]*</Book></Option>
                    <Option><Book>[[ Claude&rsquo;s Library Importer ]]*</Book></Option>
                    <Option><Book>[[ Semantic Reference Theory ]]*</Book></Option>
                    <Option><Book>[[ Semantics of Types &amp; More ]]*</Book></Option>
                </Section>
            </TableOfContents>
        );
    }
}
