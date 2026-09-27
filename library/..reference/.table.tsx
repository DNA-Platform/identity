import { $Chapter, Heading, Section, TableOfContents, Title, chapter as Chapter, book as bookMention } from '@dna-platform/public';
import { $ } from '@dna-platform/chemistry';
import { Option } from '@dna-platform/public/application';

const Book = $(bookMention);

// THIS PAGE IS TWO THINGS AND THE TABLE CARRIES BOTH. It is the summit catalogue, so it must say
// what the library holds; and it is the reference manual, so it must name its own chapters. Listing
// only the chapters left the library with no visible list of its books anywhere but a shut menu —
// measured on the built page: not one book mention in the table, and two books reachable from
// nowhere a reader could see. A catalogue's job comes first, so the books come first.
export default class $Table extends $Chapter {
    print() {
        return (
            <TableOfContents>
                <Title print={false}>Table of Contents</Title>
                <Section>
                    <Heading>Contents</Heading>
                    <Option><Chapter>The books</Chapter></Option>
                    <Option><Chapter>The Sheet</Chapter></Option>
                    <Option><Chapter>The Masthead</Chapter></Option>
                    <Option><Chapter>The Chapter Mark</Chapter></Option>
                    <Option><Chapter>The Plate</Chapter></Option>
                    <Option><Chapter>The Ledger</Chapter></Option>
                    <Option><Chapter>The Switchboard</Chapter></Option>
                    <Option><Chapter>The Domain</Chapter></Option>
                    <Chapter print={false}>Dougs Library</Chapter>
                    <Chapter print={false}>Synopsis</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                    <Chapter print={false}>Lead</Chapter>
                </Section>
                <Section>
                    <Heading>The Catalogue</Heading>
                    <Option><Chapter>[[ My Library Log ]]( My Library Log / Synopsis )</Chapter>&nbsp;<Book>[[ ]]( My Library Log )**</Book></Option>
                    <Option><Chapter>[[ Claude &amp; Our Projects ]]( Claude &amp; Our Projects / Synopsis )</Chapter>&nbsp;<Book>[[ ]]( Claude &amp; Our Projects )**</Book></Option>
                </Section>
            </TableOfContents>
        );
    }
}
