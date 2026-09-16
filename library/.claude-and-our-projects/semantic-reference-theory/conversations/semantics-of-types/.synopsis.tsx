import { $Chapter, For, Paragraph, Synopsis, Title } from '@dna-platform/public';

export default class $Synopsis extends $Chapter {
    print() {
        return (
            <Synopsis>
                <For>Semantics of Types &amp; More</For>
                <Title print={false}>What Was Said</Title>
                <Paragraph>Recorded 2026-09-09, and the chapters are the turns of it.</Paragraph>
            </Synopsis>
        );
    }
}
