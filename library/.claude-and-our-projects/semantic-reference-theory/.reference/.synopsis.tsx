import { $Chapter, For, Paragraph, Synopsis, Title } from '@dna-platform/public';

// OWED TO DOUG — what this project is, in his words. Scaffolding so the book specifies.
export const said = <Paragraph>A first-order theory of reference, and the place the semantics of books were derived.</Paragraph>;

export default class $Synopsis extends $Chapter {
    print() {
        return (
            <Synopsis>
                <For>Semantic Reference Theory</For>
                <Title print={false}>Synopsis</Title>
                {said}
            </Synopsis>
        );
    }
}
