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
                    <Option>$[ ./Reference is not travel ]</Option>
                    <Option><Chapter>The conversations</Chapter></Option>
                    <Option><Chapter>[[ Semantics of Types &amp; More ]]( Semantics of Types &amp; More / Synopsis )</Chapter>&nbsp;<Book>[[ ]]( Semantics of Types &amp; More )**</Book></Option>
                    <Chapter print={false}>Semantic Reference Theory</Chapter>
                    <Chapter print={false}>Synopsis</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                    <Chapter print={false}>Lead</Chapter>
                </Section>
            </TableOfContents>
        );
    }
}
