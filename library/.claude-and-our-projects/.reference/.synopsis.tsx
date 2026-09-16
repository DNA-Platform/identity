import { $Chapter, For, Paragraph, Synopsis, Title } from '@dna-platform/public';

// OWED TO DOUG — "then I need to write a book about you and how we interact". He is the author of
// this one; the paragraph below is scaffolding so the book specifies.
export default class $Synopsis extends $Chapter {
    print() {
        return (
            <Synopsis>
                <For>Claude &amp; Our Projects</For>
                <Title print={false}>How We Work</Title>
                <Paragraph>What it is like to work together, written by the one of us who can write it.</Paragraph>
            </Synopsis>
        );
    }
}
