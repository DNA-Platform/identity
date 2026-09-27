import { $Chapter, For, Paragraph, Synopsis, Title } from '@dna-platform/public';

export const said = <Paragraph>Recorded 2026-09-09, and the chapters are the turns of it.</Paragraph>;

export default class $Synopsis extends $Chapter {
    print() {
        return (
            <Synopsis>
                <For>Semantics of Types &amp; More</For>
                <Title print={false}>Synopsis</Title>
                {said}
            </Synopsis>
        );
    }
}
