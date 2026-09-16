import { $Chapter, Heading, Ref, Section, TableOfContents, Title, chapter as Chapter, book as bookMention } from '@dna-platform/public';
import { $ } from '@dna-platform/chemistry';

const Book = $(bookMention);
import { Option } from '@dna-platform/public/application';

export default class $Table extends $Chapter {
    print() {
        return (
            <TableOfContents>
                <Title print={false}>Table of Contents</Title>
                <Section>
                    <Heading>Contents</Heading>
                    <Option><Ref>[Reference is not travel](#reference-is-not-travel)</Ref></Option>
                    <Option><Ref>[The conversations](#the-conversations)</Ref></Option>
                    <Option><Ref>[Semantics of Types &amp; More](#semantics-of-types-and-more)</Ref><Book>Semantics of Types &amp; More</Book></Option>
                    <Chapter print={false}>Semantic Reference Theory</Chapter>
                    <Chapter print={false}>The Theory</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                    <Chapter print={false}>Lead</Chapter>
                    <Chapter print={false}>The conversations</Chapter>
                </Section>
            </TableOfContents>
        );
    }
}
