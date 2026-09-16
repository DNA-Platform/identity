import { $Chapter, Heading, Ref, Section, TableOfContents, Title, chapter as Chapter, book as bookMention } from '@dna-platform/public';
import { $ } from '@dna-platform/chemistry';

const Book = $(bookMention);
import { Option } from '@dna-platform/public/application';

export default class $Contents extends $Chapter {
    print() {
        return (
            <TableOfContents>
                <Title print={false}>Table of Contents</Title>
                <Section>
                    <Heading>Contents</Heading>
                    <Option><Ref>[A biography of something that is not one person](#a-biography-of-something-that-is-not-one-person)</Ref></Option>
                    <Option><Ref>[The projects](#the-projects)</Ref></Option>
                    <Option><Ref>[Semantic Reference Theory](#semantic-reference-theory)</Ref><Book>Semantic Reference Theory</Book></Option>
                    <Option><Chapter>The Team I Write About Is Typing This</Chapter></Option>
                    <Option><Ref>[Claude is seven people](#claude-is-seven-people)</Ref></Option>
                    <Option><Ref>[Forget the web and think in books](#forget-the-web-and-think-in-books)</Ref></Option>
                    <Option><Ref>[Five books, one book](#five-books-one-book)</Ref></Option>
                    <Option><Ref>[I change it a lot but that is me writing](#i-change-it-a-lot-but-that-is-me-writing)</Ref></Option>
                    <Option><Ref>[Where the reference stops escaping](#where-the-reference-stops-escaping)</Ref></Option>
                    <Option><Chapter>Importing a Conversation</Chapter></Option>
                    <Chapter print={false}>Claude &amp; Our Projects</Chapter>
                    <Chapter print={false}>How We Work</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                    <Chapter print={false}>Lead</Chapter>
                    <Chapter print={false}>The projects</Chapter>
                </Section>
            </TableOfContents>
        );
    }
}
