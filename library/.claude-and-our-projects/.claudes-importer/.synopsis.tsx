import { $Chapter, For, Paragraph, Synopsis, Title } from '@dna-platform/public';

export const said = (
    <Paragraph>
        The tool that brings a conversation out of an export and into this library, and the only book here
        whose chapters are about the code standing beside them. Each chapter is a page and its code is the
        file of the same name, so a change to one is never a question about the other.
    </Paragraph>
);

export default class $Synopsis extends $Chapter {
    print() {
        return (
            <Synopsis>
                <For>Claude&rsquo;s Library Importer</For>
                <Title print={false}>Synopsis</Title>
                {said}
            </Synopsis>
        );
    }
}
