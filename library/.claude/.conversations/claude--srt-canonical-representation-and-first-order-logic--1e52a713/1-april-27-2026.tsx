import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 April 2026](2026-04-27)</Date>
        </Dated>
        <Title>[[ 27 April 2026 ]]</Title>
        <Message
            at="2026-04-27T04:24:15.835149Z"
        >
            <Origin>019dcd2f-263b-76d3-aa1c-9f46740f46b9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                New and important project. Let’s start specifying it. SRT is meant to host its own canonical representation.
                So at minimum, it should be able to express first order logic. How about we test the abstraction by getting
                first-order logic in there at the base. Read the project documents and try to learn what you can before we
                start. Focus on whats foundational
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T04:27:35.348433Z"
        >
            <Origin>019dcd2f-263b-7efe-b1ff-fe9f25df785a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Reading the foundational material before we begin.</Paragraph>
            <Action>
                Searched the project's knowledge for “first-order logic transpilation primitive relation specification”
            </Action>
            <Action>
                Searched the project's knowledge for “primitive relation R(x,y,t) ternary subject object relationship axiom”
            </Action>
            <Action>Read /mnt/project/Seren__First-Order_Logic__Complete_Formal_Specification</Action>
            <Action>Read /mnt/project/Seren__First-Order_Logic__Complete_Formal_Specification</Action>
            <Action>
                Searched the project's knowledge for “canonical symbol function (x) (x,y) representation literal symbol
                axiom”
            </Action>
            <Action>
                Searched the project's knowledge for “reference frame catalogue self-representation hosting theory finite”
            </Action>
            <Action>Read /mnt/project/the-algebra-of-perspective.md</Action>
            <Action>Read /mnt/project/semantic-reference-theory.md</Action>
            <Paragraph>
                I've read the foundational material. Below is what I take to be the substrate, the level structure of the
                project, and the foundational decisions I think have to be settled before any encoding.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The substrate.
                </Word>
            </Paragraph>
            <Paragraph>
                SRT is a first-order theory whose only primitive is the ternary relation R(x,y,t), written <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word>. The theory itself has no constants and no functions — it begins purely existential. Equality is
                internalized as a referent <Word>
                    <Verbatim />
                    eq
                </Word> via
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x = y <iff> x =eq> y`}
            </CodeBox>
            <Paragraph>
                The base relationship type <Word>
                    <Verbatim />
                    r
                </Word>, inheritance <Word>
                    <Verbatim />
                    s -&gt; t := s =of&gt; t
                </Word>, and the canonical functions <Word>
                    <Verbatim />
                    (x)
                </Word> and <Word>
                    <Verbatim />
                    (x,y)
                </Word> are not new primitives but linguistic abbreviations for unique referents satisfying specified
                existential conditions; they transpile out completely. There are no axiom schemas in SRT — what looks like a
                schema is a universal quantification over a referent type, because the meta-level objects are first-class
                referents.
            </Paragraph>
            <Paragraph>
                So the substrate for hosting FOL is genuinely just <Word>
                    <Verbatim />
                    R(x,y,t) + FOL-with-equality + a small set of existential axioms
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The level structure.
                </Word>
            </Paragraph>
            <Paragraph>
                SRT's relationship to FOL goes in two directions, and the project depends on keeping them distinct:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Down
                    </Word>: SRT linguistic notation transpiles into FOL formulas. Settled — your "Formal Syntax under
                    Transpilation" is the spec.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Up
                    </Word>: FOL's syntactic objects — variables, constants, function symbols, relation symbols, terms,
                    formulas, proofs — become referents in an SRT catalogue, and FOL's structural rules become first-order
                    SRT axioms quantifying over those referents.
                </Line>
            </Paragraph>
            <Paragraph>
                These cannot collapse. The R in SRT's primitive is not the R that appears as a relation symbol inside the
                hosted FOL signature; the latter is one more referent named in the catalogue, and any number of distinct FOL
                relation symbols may coexist with it. The hosted R is content; the primitive R is structure.
            </Paragraph>
            <Paragraph>
                The project is the SRT analogue of Gödel's arithmetization, but with a substrate fit for the purpose:
                arithmetic encodes formal syntax in numbers because numbers were what was expressively available; SRT
                encodes formal syntax in reference, which is what formal syntax is <Word>
                    <Emphasis />
                    about
                </Word>. This is the load-bearing reason to expect the encoding to be cleaner than the arithmetical one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The minimum inventory to be represented.
                </Word>
            </Paragraph>
            <Paragraph>
                From your FOL spec: the signature (variables, constants, function symbols with arity, relation symbols with
                arity); the term constructor; the formula constructor (atomic, connectives, quantifiers); the free/bound
                distinction; substitution φ&#91;t/x&#93; with capture-avoidance; the axioms A1–A9; the inference rules MP
                and Gen; and the proof relation Γ ⊢ φ. Each item becomes a referent kind in SRT, organized by inheritance —
                <Word>
                    <Verbatim />
                    var
                </Word>, <Word>
                    <Verbatim />
                    term
                </Word>, <Word>
                    <Verbatim />
                    formula
                </Word>, <Word>
                    <Verbatim />
                    axiom
                </Word>, <Word>
                    <Verbatim />
                    proof
                </Word>, etc.
            </Paragraph>
            <Paragraph>
                The schema-to-axiom move is where SRT's hosting becomes stronger than FOL's self-hosting. A1 is no longer a
                schema φ → (ψ → φ) ranging over formulas; it becomes a single first-order SRT axiom
            </Paragraph>
            <CodeBox>
                {`${''}A[φ, ψ: φ -> formula & ψ -> formula]: imp(φ, imp(ψ, φ)) -> axiom`}
            </CodeBox>
            <Paragraph>
                quantifying over the referent type <Word>
                    <Verbatim />
                    formula
                </Word>, without escaping to second order. SRT can do this because formulas are referents in its domain, the
                way Gödel-numbered formulas are objects of arithmetic.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The foundational decisions.
                </Word>
            </Paragraph>
            <Paragraph>Four things, in order of priority:</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    1. Compositional structure with only R(x,y,t).
                </Word> FOL terms and formulas are trees; R is ternary. A node like <Word>
                    <Verbatim />
                    f(t₁, t₂)
                </Word> — a function symbol with two ordered children — must be a referent whose decomposition is
                recoverable through R alone. There are two natural routes. One: cons-cells — bake list/sequence structure
                into the foundation, with <Word>
                    <Verbatim />
                    =head&gt;
                </Word>, <Word>
                    <Verbatim />
                    =tail&gt;
                </Word>, <Word>
                    <Verbatim />
                    =nil&gt;
                </Word> as the constructor relationships, and arbitrary arity falls out. Two: arity-by-arity — use the
                existing canonical-function ladder <Word>
                    <Verbatim />
                    (x,y)
                </Word>, <Word>
                    <Verbatim />
                    (x,y,z)
                </Word>, <Word>
                    <Verbatim />
                    (x,y,z,w)
                </Word>, ... and treat each arity as a distinct constructor pattern. Route one is more uniform; route two
                stays closer to the existing notation. This decision propagates into everything else.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    2. Variables and binding.
                </Word> FOL's variables form a countably infinite supply. SRT's catalogue is finite at any moment but
                extensible by transduction. Variables can be transduced on demand. Once introduced, binding has to be
                representable: either de Bruijn indices, or variables-as-referents with explicit <Word>
                    <Verbatim />
                    =bound-by&gt;
                </Word> edges into quantifier nodes. This is the choice that most determines whether substitution is clean
                or fiddly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    3. Substitution: object-level or meta-level.
                </Word> The pivot of FOL's proof theory. φ&#91;t/x&#93; can be encoded as an object-level relation <Word>
                    <Verbatim />
                    =subst&gt;
                </Word> connecting (φ, t, x) to φ', or it can stay external as something we describe but don't internalize.
                Your transduction operator <Word>
                    <Verbatim />
                    |=&gt;
                </Word> is the right ancestor — both replace a variable with something specific to make an existential
                concrete — and that suggests substitution wants to be internal. But making it internal means encoding
                capture-avoidance as an SRT axiom, which is a real burden.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    4. What "host" means precisely.
                </Word> When you say SRT hosts its own canonical representation, hosting FOL is the necessary stepping stone
                — SRT is built on FOL, so hosting SRT entails hosting FOL. The terminal goal is <Word>
                    <Verbatim />
                    (SRT) =(SRT)&gt; SRT
                </Word> realized concretely. Decide now whether the FOL-hosting is a <Word>
                    <Emphasis />
                    production
                </Word> (the actual machinery on which the SRT self-hosting will run) or a <Word>
                    <Emphasis />
                    demonstration
                </Word> (a proof of concept that the abstraction works). The two answers imply different rigor levels in the
                encoding.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where I'd start.
                </Word>
            </Paragraph>
            <Paragraph>
                The compositional encoding (1) precedes everything else. If a constructor node like <Word>
                    <Verbatim />
                    f(t₁, t₂)
                </Word> lives correctly as a referent recoverable by R, formulas, axiom-as-universal-statement,
                substitution, and proofs are variations on the same theme. If the constructor encoding is wrong, every later
                part inherits the wrongness.
            </Paragraph>
            <Paragraph>
                What's your instinct on the constructor route, and do you intend hosting as production or demonstration?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T05:00:03.360949Z"
        >
            <Origin>019dcd4f-e968-7b23-b63d-5a1ae94d06da</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I would not believe anything is known. And for documents that cover raw syntax, I’d be sure I am sure. We
                use == rather than = as a transpilation rule. Everything is typographical like a programming language
            </Paragraph>
            <Paragraph>
                I could be wrong, but if we’re going to start on the bottom, I think we need to specify the syntax of the
                language, right? Representations have parts, some of those parts represent other referents that are not a
                part of the representation, but which it refers to through the representative act. How might a first-order
                logic textbook present a formalization of the grammar of first-order logic?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T05:02:36.598076Z"
        >
            <Origin>019dcd4f-e968-7553-a0ce-99affb6b8017</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right. The corpus is provisional, and the typography matters — <Word>
                    <Verbatim />
                    ==
                </Word> for equality, <Word>
                    <Verbatim />
                    =
                </Word> reserved, ASCII throughout, no special characters. And starting from the bottom means specifying the
                grammar of the thing to be hosted before any encoding. That's correct.
            </Paragraph>
            <Paragraph>
                Here is how a textbook would lay out the grammar of first-order logic. I'll use programmer typography
                throughout, with the SRT conventions where they're already established for connectives and quantifiers (<Word>
                    <Verbatim />
                    !
                </Word>, <Word>
                    <Verbatim />
                    &amp;
                </Word>, <Word>
                    <Verbatim />
                    ||
                </Word>, <Word>
                    <Verbatim />
                    =|&gt;
                </Word>, <Word>
                    <Verbatim />
                    &lt;|=|&gt;
                </Word>, <Word>
                    <Verbatim />
                    A&#91;v&#93;:
                </Word>, <Word>
                    <Verbatim />
                    E&#91;v&#93;:
                </Word>) and <Word>
                    <Verbatim />
                    ==
                </Word> for equality. I'll keep parts and references separated, since that distinction is exactly what the
                grammar prepares for.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Alphabet.
                </Word>
            </Paragraph>
            <Paragraph>
                The alphabet partitions into logical and non-logical symbols. The logical symbols are fixed once and for
                all:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}Connectives:   !   &   ||   =|>   <|=|>
Quantifiers:   A   E
Equality:      ==
Punctuation:   (   )   ,   [   ]   :
Variables:     Var = { v1, v2, v3, ... }    countably infinite`}
            </CodeBox>
            <Paragraph>
                The non-logical symbols form a <Word>
                    <Emphasis />
                    signature
                </Word> <Word>
                    <Verbatim />
                    Sig
                </Word>, parametric to the theory:
            </Paragraph>
            <CodeBox>
                {`Con   :  a set of constant symbols
Fun   :  a set of function symbols, each with arity n >= 1
Rel   :  a set of relation symbols, each with arity n >= 0`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Verbatim />
                    arity
                </Word> is a function on <Word>
                    <Verbatim />
                    Fun U Rel
                </Word>. The grammar below is defined relative to a fixed <Word>
                    <Verbatim />
                    Sig
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Terms.
                </Word>
            </Paragraph>
            <Paragraph>
                Terms are the syntactic objects that, under interpretation, denote domain elements. They are defined
                inductively:
            </Paragraph>
            <CodeBox>
                {`T ::= v                     where v in Var
T ::= c                     where c in Con
T ::= f(T1, T2, ..., Tn)    where f in Fun and arity(f) == n`}
            </CodeBox>
            <Paragraph>
                A term has <Word>
                    <Emphasis />
                    parts
                </Word>: its head symbol and its immediate subterms. The head of <Word>
                    <Verbatim />
                    f(T1,...,Tn)
                </Word> is <Word>
                    <Verbatim />
                    f
                </Word>; the head of <Word>
                    <Verbatim />
                    c
                </Word> is <Word>
                    <Verbatim />
                    c
                </Word>; the head of <Word>
                    <Verbatim />
                    v
                </Word> is <Word>
                    <Verbatim />
                    v
                </Word>. The grammar specifies how parts compose; it says nothing about what any of them refer to.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Atomic formulas.
                </Word>
            </Paragraph>
            <CodeBox>
                {`A ::= T1 == T2            where T1, T2 are terms
A ::= R(T1, T2, ..., Tn)  where R in Rel and arity(R) == n`}
            </CodeBox>
            <Paragraph>
                The 0-ary case <Word>
                    <Verbatim />
                    R()
                </Word> is a propositional constant. Some textbooks include it explicitly, others fold it into a separate
                category.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formulas.
                </Word>
            </Paragraph>
            <Paragraph>Formulas are built from atomic formulas by connectives and quantifiers:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F ::= A
F ::= !F
F ::= (F1 & F2)
F ::= (F1 || F2)
F ::= (F1 =|> F2)
F ::= (F1 <|=|> F2)
F ::= A[v]: F             where v in Var
F ::= E[v]: F             where v in Var`}
            </CodeBox>
            <Paragraph>
                The parentheses around binary connectives are part of the grammar — every binary formula has its own pair,
                which gives unique parsing without precedence rules. The colon after <Word>
                    <Verbatim />
                    A&#91;v&#93;
                </Word> and <Word>
                    <Verbatim />
                    E&#91;v&#93;
                </Word> is also part of the grammar; it separates binder from body.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Free and bound occurrences — where parts and references first separate.
                </Word>
            </Paragraph>
            <Paragraph>
                An occurrence of a variable <Word>
                    <Verbatim />
                    v
                </Word> in a formula <Word>
                    <Verbatim />
                    F
                </Word> is <Word>
                    <Emphasis />
                    bound
                </Word> if it lies inside the scope of a quantifier <Word>
                    <Verbatim />
                    A&#91;v&#93;
                </Word> or <Word>
                    <Verbatim />
                    E&#91;v&#93;
                </Word>; otherwise it is <Word>
                    <Emphasis />
                    free
                </Word>. The set of free variables <Word>
                    <Verbatim />
                    FV(F)
                </Word> is defined by recursion on the grammar:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}FV(v)                 == { v }
FV(c)                 == { }
FV(f(T1,...,Tn))      == FV(T1) U ... U FV(Tn)
FV(T1 == T2)          == FV(T1) U FV(T2)
FV(R(T1,...,Tn))      == FV(T1) U ... U FV(Tn)
FV(!F)                == FV(F)
FV(F1 op F2)          == FV(F1) U FV(F2)        op in { &, ||, =|>, <|=|> }
FV(A[v]: F)           == FV(F) \\ { v }
FV(E[v]: F)           == FV(F) \\ { v }`}
            </CodeBox>
            <Paragraph>
                A formula with <Word>
                    <Verbatim />
                    FV(F) == &#123; &#125;
                </Word> is a <Word>
                    <Emphasis />
                    sentence
                </Word>.
            </Paragraph>
            <Paragraph>
                The grammar's referring symbols — those that, under an interpretation, point outside the formula — are
                precisely the free variables, the constants, the function symbols, and the relation symbols. The
                non-referring parts are the connectives, parentheses, comma, colon, the binders <Word>
                    <Verbatim />
                    A
                </Word> and <Word>
                    <Verbatim />
                    E
                </Word>, and bound occurrences of variables. A bound <Word>
                    <Verbatim />
                    v
                </Word> in <Word>
                    <Verbatim />
                    A&#91;v&#93;: P(v)
                </Word> is a part of the formula whose only role is to mark the binding site; it refers to nothing fixed.
            </Paragraph>
            <Paragraph>
                This is the parts/reference split inside the grammar itself, before any interpretation has been added. The
                grammar tells us which parts are <Word>
                    <Emphasis />
                    referring sites
                </Word>; what each referring site refers to is left to a separate interpretation function.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Substitution.
                </Word>
            </Paragraph>
            <Paragraph>
                Substitution <Word>
                    <Verbatim />
                    F&#91;T/v&#93;
                </Word> produces the formula obtained by replacing every free occurrence of <Word>
                    <Verbatim />
                    v
                </Word> in <Word>
                    <Verbatim />
                    F
                </Word> with <Word>
                    <Verbatim />
                    T
                </Word>. The recursion goes through the grammar mechanically, with one nontrivial case at quantifiers —
                capture avoidance:
            </Paragraph>
            <CodeBox>
                {`${''}v[T/v]                 == T
v'[T/v]                == v'                                    if v' != v
c[T/v]                 == c
f(T1,...,Tn)[T/v]      == f(T1[T/v], ..., Tn[T/v])
(T1 == T2)[T/v]        == (T1[T/v] == T2[T/v])
R(T1,...,Tn)[T/v]      == R(T1[T/v], ..., Tn[T/v])
(!F)[T/v]              == !(F[T/v])
(F1 op F2)[T/v]        == (F1[T/v] op F2[T/v])
(A[v]: F)[T/v]         == A[v]: F                               v is bound here
(A[v']: F)[T/v]        == A[v']: F[T/v]                         v != v', v' not in FV(T)
(A[v']: F)[T/v]        == A[v'']: F[v''/v'][T/v]                v != v', v' in FV(T), v'' fresh`}
            </CodeBox>
            <Paragraph>
                and analogously for <Word>
                    <Verbatim />
                    E&#91;v'&#93;
                </Word>. The capture-avoidance side condition — that a free variable of <Word>
                    <Verbatim />
                    T
                </Word> must not become bound by the substitution — is the only step that requires inventing a fresh
                variable.
            </Paragraph>
            <Paragraph>That is the grammar. Three things worth noting before we move:</Paragraph>
            <Paragraph>
                The grammar describes only structural composition. No production of the grammar makes a part refer to
                anything; reference enters only with the interpretation function. Encoding the grammar in SRT is therefore
                strictly an encoding of <Word>
                    <Emphasis />
                    parts
                </Word> and the relations among them. The <Word>
                    <Verbatim />
                    =denotes&gt;
                </Word> layer comes later.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    arity
                </Word> is a function on the signature, but it has no production of its own; it constrains which <Word>
                    <Verbatim />
                    f(T1,...,Tn)
                </Word> and <Word>
                    <Verbatim />
                    R(T1,...,Tn)
                </Word> are well-formed. When hosted, this becomes either an SRT axiom for each signature symbol or a <Word>
                    <Verbatim />
                    =arity&gt;
                </Word> referent relation.
            </Paragraph>
            <Paragraph>
                The variable supply is the only countably infinite element of the grammar. Everything else is finitely
                specified once <Word>
                    <Verbatim />
                    Sig
                </Word> is given. This is where transduction will come in when we encode — variables are introduced on
                demand, never as a completed infinite set.
            </Paragraph>
            <Paragraph>
                Where I'd go next: the alphabet and the constructor productions — <Word>
                    <Verbatim />
                    f(T1,...,Tn)
                </Word> and <Word>
                    <Verbatim />
                    R(T1,...,Tn)
                </Word> — are the bones. If we're going to host this, the first encoding question is how those n-ary
                constructors live as SRT referents recoverable through R(x,y,t). But before that, you should tell me whether
                anything in the grammar above is wrong, missing, or written in a way you wouldn't accept as the definitive
                form to encode against.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T05:06:05.292813Z"
        >
            <Origin>019dcd55-70bc-7d8c-8bb6-74757e3fbe35</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I think you have levels confused. SRT uses x == y, but a transpiler fixes it. But when talking about FOL, we
                will use it’s syntax. We can use (=) as the canonical symbol for equals, which semantically should hopefully
                be mapped to eq eventually
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T05:08:18.478149Z"
        >
            <Origin>019dcd55-70bc-7625-8724-fa0f6ccaae6d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right. I imported SRT's typography into FOL's grammar where it doesn't belong. SRT uses <Word>
                    <Verbatim />
                    ==
                </Word> only because <Word>
                    <Verbatim />
                    =
                </Word> is reserved; the transpiler bridges them. FOL has <Word>
                    <Verbatim />
                    =
                </Word>. When we describe FOL, we describe the object language as a textbook would.
            </Paragraph>
            <Paragraph>
                The same discipline applies to the rest. FOL's grammar has <Word>
                    <Verbatim />
                    ¬ ∧ ∨ → ↔ ∀ ∃ =
                </Word>. SRT's <Word>
                    <Verbatim />
                    ! &amp; || =|&gt; &lt;|=|&gt; A E ==
                </Word> are typographic substitutes that transpile to those. When SRT hosts FOL, we are <Word>
                    <Emphasis />
                    naming
                </Word> FOL's symbols, not replacing them.
            </Paragraph>
            <Paragraph>
                And the canonical-symbol move you're pointing at is the right primitive for the naming. <Word>
                    <Verbatim />
                    (=)
                </Word> is SRT's canonical symbol for FOL's <Word>
                    <Verbatim />
                    =
                </Word> — the referent that names the syntactic atom inside the catalogue. It generalizes: every FOL
                primitive symbol becomes a referent in SRT, named by its canonical symbol.
            </Paragraph>
            <CodeBox>
                {`(=)   names the equality symbol
(¬)   names negation
(∧)   names conjunction
(∨)   names disjunction
(→)   names implication
(↔)   names biconditional
(∀)   names the universal quantifier
(∃)   names the existential quantifier`}
            </CodeBox>
            <Paragraph>
                Three distinct layers come into focus, and the project's success depends on keeping them apart:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Layer 1, FOL syntax: the symbol <Word>
                        <Verbatim />
                        =
                    </Word> in FOL's alphabet — a syntactic atom.
                </Line>
                <Line>
                    Layer 2, SRT representation: the referent <Word>
                        <Verbatim />
                        (=)
                    </Word> naming that atom inside the catalogue.
                </Line>
                <Line>
                    Layer 3, SRT semantics: the referent <Word>
                        <Verbatim />
                        eq
                    </Word> — equality internalized via <Word>
                        <Verbatim />
                        E&#91;eq&#93;: A&#91;x,y&#93;: x = y &lt;iff&gt; x =eq&gt; y
                    </Word>.
                </Line>
            </Paragraph>
            <Paragraph>
                The hoped-for mapping <Word>
                    <Verbatim />
                    (=) ⟼ eq
                </Word> is then a precise claim: the canonical symbol for FOL's equality, followed through interpretation,
                lands on SRT's own equality referent. If that bridge holds, FOL syntax and SRT semantics commute on
                equality, and the hosting becomes semantic rather than merely syntactic.
            </Paragraph>
            <Paragraph>
                Equality is also the unique case where such a bridge is on offer right now. SRT does not internalize
                negation, conjunction, implication, etc. as referents — those are logical scaffolding shared with FOL, not
                citizens of the catalogue. So <Word>
                    <Verbatim />
                    (¬)
                </Word>, <Word>
                    <Verbatim />
                    (∧)
                </Word>, ... live at Layer 2 only; they have no Layer 3 correlate. <Word>
                    <Verbatim />
                    (=)
                </Word> is special because equality was internalized. <Word>
                    <Verbatim />
                    (∀)
                </Word> and <Word>
                    <Verbatim />
                    (∃)
                </Word> are similarly scaffolding-only at this stage.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The grammar of FOL, in its own syntax.
                </Word>
            </Paragraph>
            <Paragraph>Alphabet:</Paragraph>
            <CodeBox>
                {`Connectives:   ¬   ∧   ∨   →   ↔
Quantifiers:   ∀   ∃
Equality:      =
Punctuation:   (   )   ,
Variables:     Var = { v₁, v₂, v₃, ... }    countably infinite`}
            </CodeBox>
            <Paragraph>The signature, parametric:</Paragraph>
            <CodeBox>
                {`Con   :  constant symbols
Fun   :  function symbols, each with arity n ≥ 1
Rel   :  relation symbols, each with arity n ≥ 0`}
            </CodeBox>
            <Paragraph>
                with <Word>
                    <Verbatim />
                    arity
                </Word> a function on <Word>
                    <Verbatim />
                    Fun ∪ Rel
                </Word>.
            </Paragraph>
            <Paragraph>Terms (inductive):</Paragraph>
            <CodeBox>
                {`T ::= v                     v ∈ Var
T ::= c                     c ∈ Con
T ::= f(T₁, ..., Tₙ)        f ∈ Fun, arity(f) = n`}
            </CodeBox>
            <Paragraph>Atomic formulas:</Paragraph>
            <CodeBox>
                {`A ::= T₁ = T₂
A ::= R(T₁, ..., Tₙ)        R ∈ Rel, arity(R) = n`}
            </CodeBox>
            <Paragraph>Formulas:</Paragraph>
            <CodeBox>
                {`F ::= A
F ::= ¬F
F ::= (F₁ ∧ F₂)
F ::= (F₁ ∨ F₂)
F ::= (F₁ → F₂)
F ::= (F₁ ↔ F₂)
F ::= ∀v F
F ::= ∃v F`}
            </CodeBox>
            <Paragraph>
                Free variables, sentences, and substitution follow by recursion through this grammar, with capture-avoidance
                the only nontrivial step at quantifiers.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the level fix exposes.
                </Word>
            </Paragraph>
            <Paragraph>
                When we move to encoding, every alphabet symbol — <Word>
                    <Verbatim />
                    ¬
                </Word>, <Word>
                    <Verbatim />
                    ∧
                </Word>, <Word>
                    <Verbatim />
                    ∨
                </Word>, <Word>
                    <Verbatim />
                    →
                </Word>, <Word>
                    <Verbatim />
                    ↔
                </Word>, <Word>
                    <Verbatim />
                    =
                </Word>, <Word>
                    <Verbatim />
                    ∀
                </Word>, <Word>
                    <Verbatim />
                    ∃
                </Word>, every parenthesis and comma, every variable, every signature symbol — becomes a Layer 2 referent
                named by its canonical symbol. The compositional productions <Word>
                    <Verbatim />
                    T ::= f(T₁, ..., Tₙ)
                </Word> and <Word>
                    <Verbatim />
                    F ::= ∀v F
                </Word> become R(x,y,t) statements relating a constructed referent to its parts. The interpretation function
                — Layer 2 to Layer 3 — is the place where bridges like <Word>
                    <Verbatim />
                    (=) ⟼ eq
                </Word> get specified. We don't need it yet, but we have to leave the seat open.
            </Paragraph>
            <Paragraph>Two real forks before encoding:</Paragraph>
            <Paragraph>
                The quantifier syntax. Textbooks vary: <Word>
                    <Verbatim />
                    ∀v F
                </Word>, <Word>
                    <Verbatim />
                    ∀v(F)
                </Word>, <Word>
                    <Verbatim />
                    ∀v: F
                </Word>, <Word>
                    <Verbatim />
                    (∀v)F
                </Word>. The colon form (<Word>
                    <Verbatim />
                    ∀v: F
                </Word>) gives unambiguous parsing without parentheses, parallels SRT's own <Word>
                    <Verbatim />
                    A&#91;v&#93;:
                </Word>, and is the easiest thing to encode. The bare juxtaposition (<Word>
                    <Verbatim />
                    ∀v F
                </Word>) is the more standard textbook form but fights with formulas that begin with <Word>
                    <Verbatim />
                    (
                </Word>. Your preference matters because the grammar we encode is the grammar we encode against.
            </Paragraph>
            <Paragraph>
                Whether <Word>
                    <Verbatim />
                    (=) ⟼ eq
                </Word> belongs in <Word>
                    <Emphasis />
                    this
                </Word> hosting or in a later semantic step. If it's part of this project, the encoding needs a place for
                the interpretation function from day one. If it's later, this hosting stays strictly syntactic — Layer 1 and
                Layer 2 only — and Layer 3 is a separate undertaking. Either is coherent; they are different projects.
            </Paragraph>
            <Paragraph>
                Is the grammar above the form you want to encode against, with the levels now in their right places?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T05:10:30.347857Z"
        >
            <Origin>019dcd59-7cbd-7e48-b52c-2a79992a4639</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ah but those aren’t typographic! How shall we refer to them! Through latex? Or just (eq)? Technically that
                does it. In our minds we can take that as… latex?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T05:12:33.999217Z"
        >
            <Origin>019dcd59-7cbd-7143-a8fc-70af5f80e507</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — and you've already named the device. The canonical-symbol notation <Word>
                    <Verbatim />
                    (name)
                </Word> is the universal mechanism; we don't need a separate one for non-typographic symbols. We give them
                typographic names and let <Word>
                    <Verbatim />
                    (name)
                </Word> do the rest. Reading <Word>
                    <Verbatim />
                    (neg)
                </Word> is reading <Word>
                    <Verbatim />
                    \neg
                </Word> — the typographic name is the LaTeX macro and the canonical symbol is what it expands to.
            </Paragraph>
            <Paragraph>Two distinct uses fall out, mapped onto the level structure we just settled.</Paragraph>
            <Paragraph>
                The connectives and quantifiers — ¬, ∧, ∨, →, ↔, ∀, ∃ — have no SRT-side internalization. We introduce fresh
                referents <Word>
                    <Verbatim />
                    neg, and, or, implies, iff, forall, exists
                </Word>, and their canonical symbols <Word>
                    <Verbatim />
                    (neg), (and), (or), (implies), (iff), (forall), (exists)
                </Word> are the typographic names of FOL's symbols inside the catalogue. The referents have no axioms
                binding them yet — they are names.
            </Paragraph>
            <Paragraph>
                Equality is the special case where SRT has already done the work. <Word>
                    <Verbatim />
                    eq
                </Word> is an existing referent with the internalization axiom <Word>
                    <Verbatim />
                    E&#91;eq&#93;: A&#91;x,y&#93;: x = y &lt;iff&gt; x =eq&gt; y
                </Word>. Its canonical symbol <Word>
                    <Verbatim />
                    (eq)
                </Word> plays both roles at once: typographic name of FOL's <Word>
                    <Verbatim />
                    =
                </Word> <Word>
                    <Emphasis />
                    and
                </Word> syntactic representative of the internalized semantic referent. The canonical-symbol structure
                <Word>
                    <Verbatim />
                    (eq) =(eq)&gt; eq
                </Word> carries the bridge from Layer 2 to Layer 3 automatically, because that is what canonical symbols
                always do — they point back to their referents.
            </Paragraph>
            <Paragraph>
                This is the load-bearing observation. When an FOL symbol corresponds to a referent SRT has internalized,
                naming it via the canonical symbol <Word>
                    <Emphasis />
                    is
                </Word> the bridge. No separate interpretation layer is required. For symbols SRT hasn't internalized, the
                canonical symbol is just a name, and a future internalization — axiomatizing <Word>
                    <Verbatim />
                    and
                </Word>, <Word>
                    <Verbatim />
                    or
                </Word>, the quantifiers — would convert that name into a bridge of the same kind. The path forward for
                those is structurally identical to the path that was already walked for equality.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The grammar of FOL, fully typographic.
                </Word>
            </Paragraph>
            <Paragraph>Alphabet:</Paragraph>
            <CodeBox>
                {`Connectives:   neg   and   or   implies   iff
Quantifiers:   forall   exists
Equality:      eq
Punctuation:   (   )   ,
Variables:     Var = { v1, v2, v3, ... }    countably infinite`}
            </CodeBox>
            <Paragraph>
                These are typographic names for FOL's symbols, the way <Word>
                    <Verbatim />
                    \neg
                </Word> is the typographic name for ¬. Inside SRT each is a referent with its canonical symbol — <Word>
                    <Verbatim />
                    (neg)
                </Word>, <Word>
                    <Verbatim />
                    (and)
                </Word>, ..., <Word>
                    <Verbatim />
                    (eq)
                </Word> — and only <Word>
                    <Verbatim />
                    (eq)
                </Word> has semantic content fixed by an SRT axiom.
            </Paragraph>
            <Paragraph>
                Signature, parametric: <Word>
                    <Verbatim />
                    Con
                </Word> (constants), <Word>
                    <Verbatim />
                    Fun
                </Word> (function symbols with arity ≥ 1), <Word>
                    <Verbatim />
                    Rel
                </Word> (relation symbols with arity ≥ 0), <Word>
                    <Verbatim />
                    arity
                </Word> a function on <Word>
                    <Verbatim />
                    Fun ∪ Rel
                </Word>.
            </Paragraph>
            <Paragraph>Terms:</Paragraph>
            <CodeBox>
                {`T ::= v                    v ∈ Var
T ::= c                    c ∈ Con
T ::= f(T1, ..., Tn)       f ∈ Fun, arity(f) = n`}
            </CodeBox>
            <Paragraph>
                Atomic formulas, written in prefix form to keep the grammar uniform with the relation case:
            </Paragraph>
            <CodeBox>
                {`A ::= eq(T1, T2)
A ::= R(T1, ..., Tn)       R ∈ Rel, arity(R) = n`}
            </CodeBox>
            <Paragraph>Formulas:</Paragraph>
            <CodeBox>
                {`F ::= A
F ::= neg(F)
F ::= and(F1, F2)
F ::= or(F1, F2)
F ::= implies(F1, F2)
F ::= iff(F1, F2)
F ::= forall(v, F)         v ∈ Var
F ::= exists(v, F)         v ∈ Var`}
            </CodeBox>
            <Paragraph>
                The grammar is now uniform: every constructor has the shape <Word>
                    <Verbatim />
                    head(arg1, ..., argn)
                </Word>, where the head is one of <Word>
                    <Verbatim />
                    neg, and, or, implies, iff, forall, exists, eq
                </Word>, an <Word>
                    <Verbatim />
                    R ∈ Rel
                </Word>, or an <Word>
                    <Verbatim />
                    f ∈ Fun
                </Word>. Connectives, quantifiers, and equality are no longer special cases of the production rules — they
                are all <Word>
                    <Verbatim />
                    name(args)
                </Word>.
            </Paragraph>
            <Paragraph>
                That uniformity is the payoff. When we move to encoding, the constructor question reduces to a single
                question: how does <Word>
                    <Verbatim />
                    head(arg1, ..., argn)
                </Word> live as a referent recoverable through <Word>
                    <Verbatim />
                    R(x,y,t)
                </Word>? Every formula, top to bottom, will reduce to that one shape.
            </Paragraph>
            <Paragraph>Two questions before we encode the constructor.</Paragraph>
            <Paragraph>
                Do you want surface prose to keep equality infix — writing <Word>
                    <Verbatim />
                    T1 = T2
                </Word> when reading — but treat it as <Word>
                    <Verbatim />
                    eq(T1, T2)
                </Word> in the grammar, or commit to prefix everywhere? Textbook habit pulls one way; encoding clarity pulls
                the other.
            </Paragraph>
            <Paragraph>
                Are the names I picked the ones you want — <Word>
                    <Verbatim />
                    neg, and, or, implies, iff, forall, exists, eq
                </Word> — or do you have a preference? <Word>
                    <Verbatim />
                    implies
                </Word> could be <Word>
                    <Verbatim />
                    imp
                </Word>; <Word>
                    <Verbatim />
                    iff
                </Word> could be <Word>
                    <Verbatim />
                    equiv
                </Word>; <Word>
                    <Verbatim />
                    and
                </Word>/<Word>
                    <Verbatim />
                    or
                </Word> are short enough that they're unlikely to collide, but <Word>
                    <Verbatim />
                    or
                </Word> does shadow English usage in a way that could read awkwardly inside expressions.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T10:11:45.326604Z"
        >
            <Origin>019dce6c-5a79-7dd6-b6ec-c319ab375a1d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Hmm, I think I want to point at the actual latex representation. We need to point at the outside world. SRT
                has dereference syntax: &#91;\neg&#93; that points to the thing that that represents. Can we express the
                alphabet of FOL like that?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T10:13:40.214247Z"
        >
            <Origin>019dce6c-5a79-74c7-838c-a8092a8866e5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the project's knowledge for “dereference syntax brackets &#91;x&#93; literal symbol”</Action>
            <Paragraph>
                Yes — the dereference notation does exactly what's needed, and this is consistent with established SRT
                usage. From "The Architecture of Semantic Space": <Word>
                    <Verbatim />
                    (x) =(x)&gt; x
                </Word> and <Word>
                    <Verbatim />
                    y =y&gt; &#91;y&#93;
                </Word> — parentheses symbolize, brackets dereference outward to the literal. The chain <Word>
                    <Verbatim />
                    (x) =sym&gt; x =sym&gt; &#91;x&#93;
                </Word> from "Eight Beautiful Discoveries" sets the three tiers: symbol, referent, literal.
            </Paragraph>
            <Paragraph>Applied to an FOL alphabet symbol, that gives us:</Paragraph>
            <CodeBox>
                {`${''}neg     -- the referent (catalogue-internal concept)
(neg)   -- the canonical symbol (what we write in SRT prose)
[neg]   -- the literal (the actual external mark; mentally, \\neg)`}
            </CodeBox>
            <Paragraph>
                The literal is what FOL's grammar productions actually consume. <Word>
                    <Verbatim />
                    &#91;neg&#93;
                </Word> <Word>
                    <Emphasis />
                    is
                </Word> the ¬ on the page. We never need to leave ASCII to point at it — the brackets do the pointing.
            </Paragraph>
            <Paragraph>
                This sits well with the literal-can-only-be-object constraint. The mark ¬ on a page does nothing
                semantically; it gets referred to. That is exactly the role of <Word>
                    <Verbatim />
                    &#91;neg&#93;
                </Word> in any SRT statement that mentions it. The FOL grammar's "alphabet" is, structurally, a collection
                of literals.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The alphabet of FOL.
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}Connectives:    [neg]   [and]   [or]   [implies]   [iff]
Quantifiers:    [forall]   [exists]
Equality:       [eq]
Punctuation:    [lparen]   [rparen]   [comma]
Variables:      [v_1], [v_2], [v_3], ...     countably infinite`}
            </CodeBox>
            <Paragraph>
                Mental rendering: <Word>
                    <Verbatim />
                    &#91;neg&#93;
                </Word> reads as <Word>
                    <Verbatim />
                    \neg
                </Word>, <Word>
                    <Verbatim />
                    &#91;and&#93;
                </Word> as <Word>
                    <Verbatim />
                    \wedge
                </Word>, <Word>
                    <Verbatim />
                    &#91;forall&#93;
                </Word> as <Word>
                    <Verbatim />
                    \forall
                </Word>, <Word>
                    <Verbatim />
                    &#91;eq&#93;
                </Word> as <Word>
                    <Verbatim />
                    =
                </Word>. Same content as a textbook alphabet, with the brackets making explicit that we're pointing at
                typographic atoms in the FOL world rather than at SRT-internal referents.
            </Paragraph>
            <Paragraph>Two things this clarifies that were murky before.</Paragraph>
            <Paragraph>
                The bridge for equality now has its full three-tier shape. <Word>
                    <Verbatim />
                    &#91;eq&#93;
                </Word> is the FOL <Word>
                    <Verbatim />
                    =
                </Word> on the page. <Word>
                    <Verbatim />
                    (eq)
                </Word> is the SRT canonical symbol naming the referent. <Word>
                    <Verbatim />
                    eq
                </Word> is the internalized referent satisfying <Word>
                    <Verbatim />
                    A&#91;x,y&#93;: x = y &lt;iff&gt; x =eq&gt; y
                </Word>. The hoped-for mapping you mentioned earlier isn't <Word>
                    <Verbatim />
                    (eq) → eq
                </Word> alone — it's the full chain <Word>
                    <Verbatim />
                    &#91;eq&#93; ↔ (eq) =(eq)&gt; eq
                </Word>, where the FOL atom and the SRT-internal referent are connected via the canonical symbol. The other
                connectives have only the first two tiers; their referents aren't axiomatized inside SRT, so the chain stops
                at the symbol.
            </Paragraph>
            <Paragraph>
                The signature-vs-logical split also lands cleanly. The logical alphabet — the eight literals above plus
                punctuation — is fixed across all FOL theories. The signature <Word>
                    <Verbatim />
                    Sig = (Con, Fun, Rel)
                </Word> is parametric, and its members are also literals: <Word>
                    <Verbatim />
                    &#91;c&#93;
                </Word> for a constant symbol, <Word>
                    <Verbatim />
                    &#91;f&#93;
                </Word> for a function symbol of some arity, <Word>
                    <Verbatim />
                    &#91;R&#93;
                </Word> for a relation symbol. They live in the same category as the connectives — typographic atoms,
                pointed at by formulas. The only difference is that logical literals have fixed roles assigned by the
                grammar, while signature literals get their roles from theory-specific axioms.
            </Paragraph>
            <Paragraph>Two things to settle before encoding.</Paragraph>
            <Paragraph>
                Variables. The supply is countably infinite. We don't want to commit to enumerating all <Word>
                    <Verbatim />
                    &#91;v_n&#93;
                </Word> upfront — and we don't have to, since SRT's catalogue is finite at any moment and extensible by
                transduction. So the natural move is: variables are a <Word>
                    <Emphasis />
                    type
                </Word> of literal, transduced as needed. We'd want a referent <Word>
                    <Verbatim />
                    var
                </Word> such that <Word>
                    <Verbatim />
                    x -&gt; var
                </Word> marks any literal as belonging to the variable supply. New variables enter the catalogue when the
                proof or formula being represented demands them. The countable infinity of FOL becomes "as many as you ever
                needed," which is exactly what's expressively required.
            </Paragraph>
            <Paragraph>
                Signature literals. Same pattern. <Word>
                    <Verbatim />
                    con
                </Word>, <Word>
                    <Verbatim />
                    fun
                </Word>, <Word>
                    <Verbatim />
                    rel
                </Word> as referent types; <Word>
                    <Verbatim />
                    &#91;c&#93; -&gt; con
                </Word>, <Word>
                    <Verbatim />
                    &#91;f&#93; -&gt; fun
                </Word>, <Word>
                    <Verbatim />
                    &#91;R&#93; -&gt; rel
                </Word> to mark literals as signature members. Arity attaches via a relation: <Word>
                    <Verbatim />
                    &#91;f&#93; =arity&gt; &#91;n&#93;
                </Word> for some literal representing a natural number, which is its own subproject — but we don't need to
                solve that to specify the grammar shape.
            </Paragraph>
            <Paragraph>
                Does this match what you had in mind, and should the next step be the term and formula productions written
                against this alphabet?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T10:15:43.557700Z"
        >
            <Origin>019dce6f-ff00-7fdc-9dfa-d008b5575d3f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You don’t seem to want to use latex. Why? I want to point to the real symbol that isn’t typographic
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T10:16:00.705115Z"
        >
            <Origin>019dce6f-ff00-7e91-a091-9c43b76c4a05</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right. I was avoiding it because I was over-protecting ASCII conventions — but those conventions are
                SRT-internal. When we point outward at the actual non-typographic symbol, we should point at it directly.
                The whole purpose of the dereference is to leave SRT-internal typography behind and reach the real thing.
            </Paragraph>
            <Paragraph>So we use LaTeX inside the brackets:</Paragraph>
            <CodeBox>
                {`${''}[\\neg]      [\\wedge]    [\\vee]    [\\rightarrow]    [\\leftrightarrow]
[\\forall]   [\\exists]
[=]
[(]   [)]   [,]
[v_1]   [v_2]   [v_3]   ...`}
            </CodeBox>
            <Paragraph>
                Each bracketed expression is a literal — a referent that is the actual external symbol. <Word>
                    <Verbatim />
                    &#91;\neg&#93;
                </Word> is the ¬ in the FOL world, not a name for it. The LaTeX inside the brackets is just the typesetting
                that produces the real mark when rendered; the brackets are the dereference asserting that we mean <Word>
                    <Emphasis />
                    that mark
                </Word>, not any SRT-side name for it.
            </Paragraph>
            <Paragraph>
                This actually clarifies the layer structure rather than complicating it. Three tiers per logical atom, with
                the third tier now visibly external:
            </Paragraph>
            <CodeBox>
                {`${''}neg         the referent in the SRT catalogue
(neg)       the canonical symbol used in SRT prose
[\\neg]      the literal -- the actual symbol in FOL syntax`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Verbatim />
                    (neg) =(neg)&gt; neg
                </Word> is internal to SRT. <Word>
                    <Verbatim />
                    neg =neg&gt; &#91;\neg&#93;
                </Word> is the bridge from the catalogue out to the FOL alphabet. The dereference is the load-bearing piece
                — it's what lets SRT contain a representation of FOL without confusing the representation with the
                represented.
            </Paragraph>
            <Paragraph>For equality, the full structure is now visible:</Paragraph>
            <CodeBox>
                {`${''}eq          the SRT-internalized equality referent
(eq)        the canonical symbol naming eq inside SRT
[=]         the FOL equality symbol -- the actual = on the page`}
            </CodeBox>
            <Paragraph>
                with the SRT axiom <Word>
                    <Verbatim />
                    A&#91;x,y&#93;: x = y &lt;iff&gt; x =eq&gt; y
                </Word> connecting <Word>
                    <Verbatim />
                    eq
                </Word> to FOL equality at the semantic level, and <Word>
                    <Verbatim />
                    eq =eq&gt; &#91;=&#93;
                </Word> connecting <Word>
                    <Verbatim />
                    eq
                </Word> to the FOL symbol at the syntactic level. The two bridges are independent and both wanted.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The alphabet of FOL, definitive.
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}Logical literals:
  Connectives:   [\\neg]   [\\wedge]   [\\vee]   [\\rightarrow]   [\\leftrightarrow]
  Quantifiers:   [\\forall]   [\\exists]
  Equality:      [=]
  Punctuation:   [(]   [)]   [,]

Variable literals (infinite supply, transduced on demand):
  [v_1]   [v_2]   [v_3]   ...

Signature literals (parametric to the theory):
  Constants:        [c_1], [c_2], ...
  Function symbols: [f_1], [f_2], ...      each paired with an arity
  Relation symbols: [R_1], [R_2], ...      each paired with an arity`}
            </CodeBox>
            <Paragraph>
                Each of these is a referent in SRT's catalogue, marked as a literal, with its identity given by what it
                points to in the outside world.
            </Paragraph>
            <Paragraph>Should the next step be the term and formula productions against this alphabet?</Paragraph>
        </Message>
        <Message
            at="2026-04-27T10:19:27.269944Z"
        >
            <Origin>019dce73-6a79-796b-a69a-fcfb44580eab</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I think we need those surrounded in $ right? It will be clear. Just list the alohabet in a row. The $ serve
                to denote inline lates
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T10:19:32.633120Z"
        >
            <Origin>019dce73-6a79-74b8-a956-1019b6019076</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — <Word>
                    <Verbatim />
                    $...$
                </Word> is the standard inline LaTeX delimiter, and using it makes it visually obvious that we're rendering
                external typography rather than naming things in SRT prose.
            </Paragraph>
            <Paragraph>The alphabet of FOL, in a row:</Paragraph>
            <CodeBox>
                {`${''}[$\\neg$]   [$\\wedge$]   [$\\vee$]   [$\\rightarrow$]   [$\\leftrightarrow$]   [$\\forall$]   [$\\exists$]   [$=$]   [$($]   [$)$]   [$,$]   [$v_1$]   [$v_2$]   [$v_3$]   ...`}
            </CodeBox>
            <Paragraph>
                Each <Word>
                    <Verbatim />
                    &#91;$...$&#93;
                </Word> is a literal — the brackets dereference outward, the dollars switch into LaTeX, and what's inside
                the dollars is the actual rendered symbol in the FOL world.
            </Paragraph>
            <Paragraph>Ready for the term and formula productions next?</Paragraph>
        </Message>
        <Message
            at="2026-04-27T10:22:14.899039Z"
        >
            <Origin>019dce75-0dc6-7b5f-9429-ffaf6983521f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay good, now let’s work on the semantics of grammar. BNF would probably be useful here right?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-27T10:23:36.654361Z"
        >
            <Origin>019dce75-0dc6-73eb-bb26-5e6369f4e57b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — BNF is the right tool, and the typography we've already settled lets it land cleanly. Two kinds of
                names appear in a BNF, and our existing distinction maps onto them exactly:
            </Paragraph>
            <CodeBox>
                {`${''}Terminals       -- the actual FOL symbols.   Written [$...$].   Literals.
Non-terminals   -- syntactic categories.     Written (...).     SRT canonical symbols.`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Verbatim />
                    &#91;$\neg$&#93;
                </Word> is a terminal because it is the actual ¬ in FOL syntax. <Word>
                    <Verbatim />
                    (formula)
                </Word> is a non-terminal because <Word>
                    <Emphasis />
                    formula
                </Word> is a referent in SRT's catalogue — a category that classifies literals and the structures built over
                them. The two notations don't blur; they mark distinct ontological roles.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The grammar.
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}(variable)   ::=  [$v_1$] | [$v_2$] | [$v_3$] | ...

(constant)   ::=  [$c$]                         for each c in Con

(function)   ::=  [$f$]                         for each f in Fun, with arity(f) = n >= 1

(relation)   ::=  [$R$]                         for each R in Rel, with arity(R) = n >= 0

(term-list)  ::=  (term)
               |  (term) [$,$] (term-list)

(term)       ::=  (variable)
               |  (constant)
               |  (function) [$($] (term-list) [$)$]

(atom)       ::=  (term) [$=$] (term)
               |  (relation) [$($] (term-list) [$)$]
               |  (relation)                                            when arity = 0

(formula)    ::=  (atom)
               |  [$\\neg$] (formula)
               |  [$($] (formula) [$\\wedge$] (formula) [$)$]
               |  [$($] (formula) [$\\vee$] (formula) [$)$]
               |  [$($] (formula) [$\\rightarrow$] (formula) [$)$]
               |  [$($] (formula) [$\\leftrightarrow$] (formula) [$)$]
               |  [$\\forall$] (variable) (formula)
               |  [$\\exists$] (variable) (formula)`}
            </CodeBox>
            <Paragraph>Three choices made, each reversible.</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Fully parenthesized binary connectives.
                </Word> Each <Word>
                    <Verbatim />
                    \wedge
                </Word>, <Word>
                    <Verbatim />
                    \vee
                </Word>, <Word>
                    <Verbatim />
                    \rightarrow
                </Word>, <Word>
                    <Verbatim />
                    \leftrightarrow
                </Word> formula carries its own outer <Word>
                    <Verbatim />
                    &#91;$($&#93;...&#91;$)$&#93;
                </Word>. This gives unambiguous parsing without precedence rules. Conventions for dropping outer parens —
                and rules like "implication associates right" — can be layered on top later as transduction-time
                abbreviations.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Arity as side condition.
                </Word> The productions for <Word>
                    <Verbatim />
                    (function)
                </Word> and <Word>
                    <Verbatim />
                    (relation)
                </Word> schematize over the signature with the side condition <Word>
                    <Verbatim />
                    arity(f) = n
                </Word> on the corresponding <Word>
                    <Verbatim />
                    (term-list)
                </Word>. This keeps the BNF finite while the signature stays parametric. The arity constraint is a
                well-formedness condition that lives alongside the grammar, not inside it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Quantifier syntax:  0 .
                </Word> Bare juxtaposition, no parens, no colon, scope extending right. Standard textbook form. If you
                prefer <Word>
                    <Verbatim />
                    &#91;$\forall$&#93; (variable) &#91;$.$&#93; (formula)
                </Word> or <Word>
                    <Verbatim />
                    &#91;$\forall$&#93; (variable) &#91;$:$&#93; (formula)
                </Word> for unambiguous-without-context parsing, that's a one-line change.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The thing the BNF doesn't yet say.
                </Word>
            </Paragraph>
            <Paragraph>
                BNF describes <Word>
                    <Emphasis />
                    concrete
                </Word> syntax — the linear sequences of literals that count as well-formed. What it gives us when we read
                it semantically is a tree: each production induces a parent-child structure where the parent is the
                constructed formula and the children are the constituents named on the right-hand side, with the terminals
                (parens, commas, the connective itself) being structural-but-non-referring parts.
            </Paragraph>
            <Paragraph>
                This is the parts/reference split we noted earlier, now visible at production granularity. In the production
            </Paragraph>
            <CodeBox>
                {`${''}(formula)  ::=  [$($] (formula) [$\\wedge$] (formula) [$)$]`}
            </CodeBox>
            <Paragraph>
                the two <Word>
                    <Verbatim />
                    (formula)
                </Word> recurrences on the right are the <Word>
                    <Emphasis />
                    referring
                </Word> parts of a conjunction — they point outward to the conjuncts. The <Word>
                    <Verbatim />
                    &#91;$($&#93;
                </Word>, <Word>
                    <Verbatim />
                    &#91;$\wedge$&#93;
                </Word>, <Word>
                    <Verbatim />
                    &#91;$)$&#93;
                </Word> are <Word>
                    <Emphasis />
                    structural
                </Word> parts — they constitute the conjunction node itself but don't refer beyond it. In <Word>
                    <Verbatim />
                    &#91;$\forall$&#93; (variable) (formula)
                </Word>, the <Word>
                    <Verbatim />
                    (variable)
                </Word> slot is a binding site, which is a third kind of role — neither pure structure nor outward
                reference, but a position that captures variables in the body.
            </Paragraph>
            <Paragraph>Two questions before we move to the next layer.</Paragraph>
            <Paragraph>
                Concrete or abstract grammar as the encoding target? The BNF above is concrete — it commits to specific
                terminal sequences including parens and commas. The encoding into SRT could either preserve those (every
                literal in the catalogue, full fidelity to FOL surface syntax) or strip to abstract syntax (just the
                constructor and its referring slots, dropping the structural punctuation). Concrete is needed if we want SRT
                to host parsing and printing; abstract is sufficient if we want SRT to host <Word>
                    <Emphasis />
                    meaning
                </Word>. The hard problem paper context suggests abstract; the self-hosting goal might want both.
            </Paragraph>
            <Paragraph>
                Free and bound occurrences. The grammar produces structure but doesn't say which variable occurrences are
                bound by which quantifier. That's a derived predicate computed by recursion through the grammar, and it's
                the first place where the encoding will need to express "this variable occurrence in <Word>
                    <Emphasis />
                    that
                </Word> part of the tree refers to a binding site over here." Worth flagging now because the encoding choice
                we make for variables — whether <Word>
                    <Verbatim />
                    &#91;$v_1$&#93;
                </Word> is the same literal everywhere it occurs or whether each occurrence is its own referent — depends on
                whether we plan to internalize the binding relation as an SRT relationship.
            </Paragraph>
            <Paragraph>Concrete-vs-abstract first?</Paragraph>
        </Message>
    </Chapter>
);
