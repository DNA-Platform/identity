import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved Doug, a US citizen in a complex international legal situation, working through a
            multi-jurisdictional family protection and documentation problem with Russian, Georgian, and EU legal
            dimensions. He referenced prior work done on another account and noted that the current Claude instance may
            not have full context from those sessions. The conversation involved detailed legal research into Russian
            travel ban mechanics under Приказ МВД №651, Georgian documentation pathways, EU protection frameworks, and
            citizenship routes. Key people in the situation include Ana (Doug's wife), their two young children, and
            Maxim (Ana's former spouse), who holds a Russian travel ban on one of the children and is appealing a
            Russian court's custody order granting Ana full custody with abroad-residence rights. Alex and Lena are
            referenced as the legal team handling the Russian proceedings, with Georgian lawyers also consulted.
        </Paragraph>
    </Chapter>
);
