import { $Chapter, Heading, Section, TableOfContents, Title, chapter as Chapter } from '@dna-platform/public';
import { Option } from '@dna-platform/public/application';

export default class $Table extends $Chapter {
    print() {
        return (
            <TableOfContents>
                <Title print={false}>Table of Contents</Title>
                <Section>
                    <Heading>Contents</Heading>
                    <Option><Chapter>The Importer</Chapter></Option>
                    <Option><Chapter>The Source</Chapter></Option>
                    <Option><Chapter>The Thread</Chapter></Option>
                    <Option><Chapter>The Movements</Chapter></Option>
                    <Option><Chapter>The Writing</Chapter></Option>
                    <Option><Chapter>The Book</Chapter></Option>
                    <Chapter print={false}>Claude&rsquo;s Library Importer</Chapter>
                    <Chapter print={false}>Synopsis</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                </Section>
            </TableOfContents>
        );
    }
}
