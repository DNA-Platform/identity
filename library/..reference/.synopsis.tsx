import { $Chapter, For, Paragraph, Synopsis, Title } from '@dna-platform/public';

// OWED TO DOUG — "a synopsis about who I am as a librarian". The paragraph below is scaffolding so
// the book specifies; it is not his account of himself and nobody else writes that.
// "The Librarian" is a PROXY TITLE, flagged.
export default class $Synopsis extends $Chapter {
    print() {
        return (
            <Synopsis>
                <For>Doug&rsquo;s Library</For>
                <Title print={false}>The Librarian</Title>
                <Paragraph>This library is kept by one person, and this is where he says who that is.</Paragraph>
            </Synopsis>
        );
    }
}
