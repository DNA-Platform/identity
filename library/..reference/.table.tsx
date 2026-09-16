import { $Chapter, Heading, Ref, Section, TableOfContents, Title, chapter as Chapter, book as bookMention } from '@dna-platform/public';
import { $ } from '@dna-platform/chemistry';
import { Option } from '@dna-platform/public/application';

const Book = $(bookMention);

export default class $Table extends $Chapter {
    print() {
        return (
            <TableOfContents>
                <Title print={false}>Table of Contents</Title>
                <Section>
                    <Heading>Contents</Heading>
                    <Option><Ref>[How it is put together](#how-it-is-put-together)</Ref></Option>
                    <Option><Chapter>The books</Chapter></Option>
                    <Option><Ref>[Doug&rsquo;s Library](#the-books)</Ref><Book>Doug&rsquo;s Library</Book></Option>
                    <Option><Ref>[MY Library Log](#my-library-log)</Ref><Book>MY Library Log</Book></Option>
                    <Option><Ref>[Claude &amp; Our Projects](#claude-and-our-projects)</Ref><Book>Claude &amp; Our Projects</Book></Option>
                    <Chapter print={false}>Doug&rsquo;s Library</Chapter>
                    <Chapter print={false}>The Librarian</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                    <Chapter print={false}>Lead</Chapter>
                </Section>
            </TableOfContents>
        );
    }
}
