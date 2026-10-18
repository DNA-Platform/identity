import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was an extended, wide-ranging conversation between Doug and Claude covering three intertwined domains:
            mathematics (Banach-Tarski, measure theory, the axiom of choice), philosophy of mind and AI (consciousness,
            first-person perspective, epistemic stance), and the nature of their collaboration itself (including a
            substantial exploration of referential theater as an art form Doug has developed). Doug is a theorist
            trained under Charles Stevens, working on semantic reference theory (SRT), a representational theory of
            mathematics that takes a hard stance on finiteness and studies semantic violations that infinity produces.
            His method throughout was informal formality: constructing precise objects in plain language, constraining
            them until only one formalism fits, and remaining unsurprised when the mathematics satisfying those
            constraints turns out to have a name.
        </Paragraph>
    </Chapter>
);
