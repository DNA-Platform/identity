import { $Chapter, Heading, Section, TableOfContents, Title, chapter as Chapter } from '@dna-platform/public';
import { Option } from '@dna-platform/public/application';

export default class $Table extends $Chapter {
    print() {
        return (
            <TableOfContents>
                <Title print={false}>Table of Contents</Title>
                <Section>
                    <Heading>Contents</Heading>
                    <Option><Chapter>Ivitivity</Chapter></Option>
                    <Option><Chapter>Subjectivity and Passivity</Chapter></Option>
                    <Option><Chapter>Adjectivity</Chapter></Option>
                    <Option><Chapter>The Ten Referents</Chapter></Option>
                    <Option><Chapter>A Property of the Type</Chapter></Option>
                    <Option><Chapter>The Little Type Document</Chapter></Option>
                    <Option><Chapter>Narrowing and the Diamond</Chapter></Option>
                    <Option><Chapter>Semantic Context</Chapter></Option>
                    <Chapter print={false}>Semantics of Types &amp; More</Chapter>
                    <Chapter print={false}>What Was Said</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                    <Chapter print={false}>Lead</Chapter>
                </Section>
            </TableOfContents>
        );
    }
}
