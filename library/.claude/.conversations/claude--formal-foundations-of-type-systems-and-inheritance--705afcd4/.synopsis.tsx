import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought instruction on the formal foundations of type systems and compiler soundness proofs,
            specifically asking for the minimum formalism used by TypeScript and Haskell compiler teams. Claude provided
            a structured tutorial starting with simply-typed lambda calculus (STLC) as the foundational formalism,
            explaining the core syntax with three basic typing rules (Var, Abs, App) and the judgment form Γ ⊢ e : τ.
            The conversation covered the Wright-Felleisen method for proving soundness through Progress and Preservation
            theorems, then extended to System F-sub for modeling inheritance through subtyping relations and the
            critical subsumption rule.
        </Paragraph>
    </Chapter>
);
