import { $Chapter, For, Paragraph, Synopsis, Title } from '@dna-platform/public';

// OWED TO DOUG — an autobiography is written by its subject and by nobody else. The paragraph below
// is scaffolding so the book specifies; every chapter of the life is his.
export default class $Synopsis extends $Chapter {
    print() {
        return (
            <Synopsis>
                <For>MY Library Log</For>
                <Title print={false}>A Life</Title>
                <Paragraph>Written by its subject, which is the only thing that distinguishes it from a biography.</Paragraph>
            </Synopsis>
        );
    }
}
