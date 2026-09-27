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
                    <Option>$[ ./A biography of something that is not one person ]</Option>
                    <Option><Chapter>The Team I Write About Is Typing This</Chapter></Option>
                    <Option>$[ ./Claude is seven people ]</Option>
                    <Option>$[ ./Forget the web and think in books ]</Option>
                    <Option>$[ ./Five books, one book ]</Option>
                    <Option>$[ ./I change it a lot but that is me writing ]</Option>
                    <Option>$[ ./Where the reference stops escaping ]</Option>
                    <Option><Chapter>Importing a Conversation</Chapter></Option>
                    <Option>$[ ./The projects are in the conversations ]</Option>
                    <Option>$[ ./What moving in turned out to require ]</Option>
                    <Option>$[ ./Which is why the code is in here too ]</Option>
                    <Option>$[ ./What the first one turned out to hold ]</Option>
                    <Option><Chapter>The projects</Chapter></Option>
                    <Option><Chapter>[[ Semantic Reference Theory ]]( Semantic Reference Theory / Synopsis )</Chapter>&nbsp;<Book>[[ ]]( Semantic Reference Theory )**</Book></Option>
                    <Option><Chapter>The tools</Chapter></Option>
                    <Option><Chapter>[[ Claude&rsquo;s Library Importer ]]( Claude&rsquo;s Library Importer / Synopsis )</Chapter>&nbsp;<Book>[[ ]]( Claude&rsquo;s Library Importer )**</Book></Option>
                    <Chapter print={false}>Claude &amp; Our Projects</Chapter>
                    <Chapter print={false}>Synopsis</Chapter>
                    <Chapter print={false}>Table of Contents</Chapter>
                    <Chapter print={false}>Lead</Chapter>
                </Section>
            </TableOfContents>
        );
    }
}
