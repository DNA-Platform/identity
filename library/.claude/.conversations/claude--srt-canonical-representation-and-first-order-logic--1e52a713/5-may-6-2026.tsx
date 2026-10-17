import { Bold, Chapter, Date, Emphasis, Math, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 May 2026](2026-05-06)</Date>
        </Dated>
        <Title>[[ 6 May 2026 ]]</Title>
        <Message
            at="2026-05-06T02:16:36.177781Z"
        >
            <Origin>019dfb12-ad45-7d14-9d5d-238d0b7f70ee</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so we elegantly have (w&gt;o&gt;r&gt;d) == (word) as a canonical transport action if you need more
                symbols. That’s great. What else do we need for first order logic? Let’s start programming it. What’s our
                alphabet? Surely those should be referents. Ah but here’s where we can be clever. Remember our referenced
                latex? We can say (&amp;) == &#91;$…&#93;. That works right? The latex is a symbol compilation language and
                we don’t need it here. Just add the latex expressions we need as referents in the alphabet
            </Paragraph>
        </Message>
        <Message
            at="2026-05-06T02:18:26.662467Z"
        >
            <Origin>019dfb12-ad45-793b-8a8f-718477c9f8be</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, that works, and it's the right level-collapse. For atomic alphabet symbols there's nothing <Word>
                    <Emphasis />
                    behind
                </Word> them to symbolize separately — the symbol is its own referent. So the canonical-symbol layer and the
                literal layer merge. The conjunction symbol <Math>{"\\wedge"}</Math> doesn't refer to a deeper
                conjunction-concept; in the FOL alphabet it's just a mark. So <Word>
                    <Verbatim />
                    (\wedge)
                </Word> and <Word>
                    <Verbatim />
                    &#91;$\wedge$&#93;
                </Word> collapse to the same referent. The canonical-transport axiom
            </Paragraph>
            <CodeBox>
                {`${''}(\\wedge) == [$\\wedge$]`}
            </CodeBox>
            <Paragraph>
                is doing the same work as <Word>
                    <Verbatim />
                    (word) == (w&gt;o&gt;r&gt;d)
                </Word> — just at the bottom of the symbolic stack rather than the typographic-composition level. LaTeX is
                the symbol-compilation language, the bracket dereferences, and the parens identify it as a canonical symbol
                referent in the catalogue. Same thing, named one way.
            </Paragraph>
            <Paragraph>
                This collapse only works for the alphabet. As soon as we get to compound expressions, the canonical symbol
                and the literal diverge again, because the canonical symbol <Word>
                    <Emphasis />
                    names a structure
                </Word> that has parts. <Word>
                    <Verbatim />
                    (word)
                </Word> is a referent in the catalogue with internal compositional structure (<Word>
                    <Verbatim />
                    w&gt;o&gt;r&gt;d
                </Word>); <Word>
                    <Verbatim />
                    &#91;word&#93;
                </Word> would be the typographic literal d-o-g sitting on the page. They aren't the same referent. But
                <Word>
                    <Verbatim />
                    (\wedge)
                </Word> has no internal structure — it's an atom — so the collapse goes through.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The alphabet of FOL as referents.
                </Word>
            </Paragraph>
            <Paragraph>Logical symbols (canonical transport axioms, one per atom):</Paragraph>
            <CodeBox>
                {`${''}(\\neg)              == [$\\neg$]
(\\wedge)            == [$\\wedge$]
(\\vee)              == [$\\vee$]
(\\rightarrow)       == [$\\rightarrow$]
(\\leftrightarrow)   == [$\\leftrightarrow$]
(\\forall)           == [$\\forall$]
(\\exists)           == [$\\exists$]
(=)                 == [$=$]
(\\bot)              == [$\\bot$]
(\\top)              == [$\\top$]`}
            </CodeBox>
            <Paragraph>
                Punctuation (these I'd flag — <Word>
                    <Verbatim />
                    (
                </Word> and <Word>
                    <Verbatim />
                    )
                </Word> collide with SRT's own canonical-symbol notation, so we may want LaTeX names for them):
            </Paragraph>
            <CodeBox>
                {`${''}(\\lparen)           == [$($]
(\\rparen)           == [$)$]
(,)                 == [$,$]`}
            </CodeBox>
            <Paragraph>Variables (transduced on demand from a countably infinite supply):</Paragraph>
            <CodeBox>
                {`${''}(v_0)               == [$v_0$]
(v_1)               == [$v_1$]
(v_2)               == [$v_2$]
...`}
            </CodeBox>
            <Paragraph>
                Signature symbols (parametric to the theory; following the OLP indexing where arity is built into the symbol
                name):
            </Paragraph>
            <CodeBox>
                {`For each n >= 0:
  (A^n_0), (A^n_1), (A^n_2), ...    n-place predicate symbols
For each n >= 1:
  (f^n_0), (f^n_1), (f^n_2), ...    n-place function symbols
(c_0), (c_1), (c_2), ...            constant symbols`}
            </CodeBox>
            <Paragraph>
                Each of these is a referent in the catalogue, identified with the literal it names. The signature ones come
                into the catalogue via transduction when a particular FOL theory is being represented.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What we still need for FOL.
                </Word>
            </Paragraph>
            <Paragraph>Three things beyond the alphabet:</Paragraph>
            <Paragraph>
                The grammar — the productions that say how to compose terms and formulas from the alphabet. We sketched the
                BNF earlier; we now need to write each production as a canonical-transport axiom of the form <Word>
                    <Verbatim />
                    (non-terminal) == (right-hand-side-expression)
                </Word>.
            </Paragraph>
            <Paragraph>
                Identification of what's referable from the FOL frame — the part you raised about reference frames licensing
                reference. The FOL-frame admits the alphabet members and the structures built from them as referents; it
                doesn't admit unrelated SRT referents. We may need an explicit frame-membership axiom per alphabet member.
            </Paragraph>
            <Paragraph>
                A separation between <Word>
                    <Emphasis />
                    FOL-as-syntax
                </Word> and <Word>
                    <Emphasis />
                    FOL-as-interpreted
                </Word>. The grammar gives us syntactic well-formedness; we'll eventually want a layer where the alphabet
                symbols pick up semantic correlates (like <Word>
                    <Verbatim />
                    (=) =(=)&gt; eq
                </Word>). But not yet.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing to settle before grammar productions.
                </Word>
            </Paragraph>
            <Paragraph>
                The productions look like <Word>
                    <Verbatim />
                    (term) == ...
                </Word> and <Word>
                    <Verbatim />
                    (formula) == ...
                </Word>. The non-terminal names — <Word>
                    <Verbatim />
                    term
                </Word>, <Word>
                    <Verbatim />
                    formula
                </Word>, <Word>
                    <Verbatim />
                    atom
                </Word>, <Word>
                    <Verbatim />
                    term-list
                </Word> — are themselves referents. They're SRT-side category names; FOL doesn't have them in its alphabet.
                So:
            </Paragraph>
            <CodeBox>
                {`(term)              -- canonical symbol of the FOL category "term"
(formula)           -- canonical symbol of the FOL category "formula"
(atom)              -- canonical symbol of "atomic formula"
(term-list)         -- canonical symbol of "term list"`}
            </CodeBox>
            <Paragraph>
                These are not collapsible the way alphabet-atoms are. They have internal structure — what <Word>
                    <Verbatim />
                    (term)
                </Word> symbolizes is a whole class of compositional possibilities. So they're like <Word>
                    <Verbatim />
                    (word)
                </Word> rather than like <Word>
                    <Verbatim />
                    (\wedge)
                </Word>.
            </Paragraph>
            <Paragraph>
                Are you happy with <Word>
                    <Verbatim />
                    term
                </Word>, <Word>
                    <Verbatim />
                    formula
                </Word>, <Word>
                    <Verbatim />
                    atom
                </Word>, <Word>
                    <Verbatim />
                    term-list
                </Word> as the SRT-side category names, or do you want them named differently? Once that's settled, the
                grammar productions are ready to write.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-06T09:19:01.383627Z"
        >
            <Origin>019dfc95-4cd5-74f4-9e5b-91f41e68dc08</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, (&amp;) == &#91;<Math>{"\\wedge"}</Math>&#93;
            </Paragraph>
            <Paragraph>
                Maybe I am wrong, but that is saying the symbol for and is the wedge. And this is not sensible: (\wedge) ==
                &#91;<Math>{"\\wedge"}</Math>&#93;
            </Paragraph>
            <Paragraph>
                The point is that &amp; does not need to be symbolized by “&amp;”… it might now work but we shall see.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-06T09:19:25.102231Z"
        >
            <Origin>019dfc95-4cd5-7b37-b586-f1ebf027f552</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Got it. The correction is sharper than I had it.</Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    (&amp;) == &#91;$\wedge$&#93;
                </Word> says: the canonical symbol for the conjunction referent is the LaTeX-rendered ∧. We're using <Word>
                    <Verbatim />
                    &amp;
                </Word> as the SRT-side name for the referent, and stating that this referent's canonical symbol IS the
                typeset ∧. The <Word>
                    <Verbatim />
                    &amp;
                </Word> and the <Word>
                    <Verbatim />
                    \wedge
                </Word> aren't two names for the same thing — they're at different positions in the structure. <Word>
                    <Verbatim />
                    &amp;
                </Word> names the referent; <Word>
                    <Verbatim />
                    &#91;$\wedge$&#93;
                </Word> is what you point at to dereference the symbol, the actual typographic mark.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    (\wedge) == &#91;$\wedge$&#93;
                </Word> is wrong because the LHS and RHS would be the same notation in different brackets — the canonical
                symbol named <Word>
                    <Verbatim />
                    \wedge
                </Word> paired with the literal <Word>
                    <Verbatim />
                    \wedge
                </Word>. That doesn't say anything; it just notates the same thing twice.
            </Paragraph>
            <Paragraph>
                So the catalogue has referents <Word>
                    <Verbatim />
                    &amp;
                </Word>, <Word>
                    <Verbatim />
                    |
                </Word>, <Word>
                    <Verbatim />
                    !
                </Word>, <Word>
                    <Verbatim />
                    =|&gt;
                </Word>, <Word>
                    <Verbatim />
                    &lt;|=|&gt;
                </Word>, etc. — using SRT-typographical or any chosen names — and the canonical-transport axioms identify
                each with its rendered LaTeX literal:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}(&)        == [$\\wedge$]
(|)        == [$\\vee$]            (might collide with =or>; see below)
(!)        == [$\\neg$]
(=|>)      == [$\\rightarrow$]
(<|=|>)    == [$\\leftrightarrow$]
(forall)   == [$\\forall$]
(exists)   == [$\\exists$]
(eq)       == [$=$]
(bot)      == [$\\bot$]
(top)      == [$\\top$]`}
            </CodeBox>
            <Paragraph>
                The names on the left (<Word>
                    <Verbatim />
                    &amp;
                </Word>, <Word>
                    <Verbatim />
                    |
                </Word>, <Word>
                    <Verbatim />
                    forall
                </Word>, <Word>
                    <Verbatim />
                    eq
                </Word>) are SRT-side referent names — what you call the referent inside the catalogue. The brackets on the
                right point outward to the actual rendered FOL alphabet symbol. The axiom identifies the canonical symbol of
                the referent with the rendered mark.
            </Paragraph>
            <Paragraph>
                This is much cleaner. It also clarifies what your earlier correction was about: <Word>
                    <Verbatim />
                    &amp;
                </Word> does not need to be symbolized by <Word>
                    <Verbatim />
                    &amp;
                </Word>. The referent named <Word>
                    <Verbatim />
                    &amp;
                </Word> in the catalogue has its canonical symbol set to the typeset <Word>
                    <Verbatim />
                    ∧
                </Word> by axiom — not because <Word>
                    <Verbatim />
                    &amp;
                </Word> looks like <Word>
                    <Verbatim />
                    ∧
                </Word> but because we <Word>
                    <Emphasis />
                    choose
                </Word> that mapping. Different communities could choose different mappings; the axiom records the choice.
            </Paragraph>
            <Paragraph>Two flags before continuing.</Paragraph>
            <Paragraph>
                The name <Word>
                    <Verbatim />
                    |
                </Word> for OR may collide with <Word>
                    <Verbatim />
                    =or&gt;
                </Word> (which transpiles to <Word>
                    <Verbatim />
                    |
                </Word>). If <Word>
                    <Verbatim />
                    |
                </Word> is already in use as a connective in SRT-typography, we'd want a different name for the FOL-side OR
                referent. Maybe <Word>
                    <Verbatim />
                    or
                </Word>. Or accept the collision and disambiguate by context.
            </Paragraph>
            <Paragraph>
                The name <Word>
                    <Verbatim />
                    eq
                </Word> collides with SRT's internalized equality referent. Earlier we noted this was actually a feature —
                <Word>
                    <Verbatim />
                    (eq) == &#91;$=$&#93;
                </Word> is the meta-representational axiom on the typographic side, and the semantic bridge from <Word>
                    <Verbatim />
                    eq
                </Word>-as-FOL-equality to <Word>
                    <Verbatim />
                    eq
                </Word>-as-SRT-internalized-equality is the load-bearing connection that makes hosting semantic rather than
                just syntactic. So this collision is intentional. Worth confirming you still want it that way.
            </Paragraph>
            <Paragraph>Updated alphabet, with cleaner names:</Paragraph>
            <CodeBox>
                {`${''}Connectives:
  (and)       == [$\\wedge$]
  (or)        == [$\\vee$]
  (not)       == [$\\neg$]
  (implies)   == [$\\rightarrow$]
  (iff)       == [$\\leftrightarrow$]

Quantifiers:
  (forall)    == [$\\forall$]
  (exists)    == [$\\exists$]

Equality and propositional constants:
  (eq)        == [$=$]
  (bot)       == [$\\bot$]
  (top)       == [$\\top$]

Punctuation:
  (lparen)    == [$($]
  (rparen)    == [$)$]
  (comma)     == [$,$]

Variables (transduced):
  (v_0)       == [$v_0$]
  (v_1)       == [$v_1$]
  ...

Signature (transduced per theory):
  (A^n_i)     == [$A^n_i$]      n-place predicate symbols
  (f^n_i)     == [$f^n_i$]      n-place function symbols
  (c_i)       == [$c_i$]        constants`}
            </CodeBox>
            <Paragraph>
                Are these the names you want for the SRT-side referents? Once these are fixed, the grammar productions can
                be written.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-06T09:32:26.655986Z"
        >
            <Origin>019dfca1-a2aa-70b0-b666-2ef76147575a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well that’s not quite SRT notation. A is forall, E is there exists and you use square brackets. But prior to
                transpilation, (A) is fine for forall. Do check project docs at least to ask if we want to keep past work
            </Paragraph>
        </Message>
        <Message
            at="2026-05-06T09:33:54.948802Z"
        >
            <Origin>019dfca1-a2aa-7ead-99ec-ab09eb537194</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Right. Let me actually check.</Paragraph>
            <Action>
                Searched the project's knowledge for “A&#91;x&#93; E&#91;x&#93; forall exists quantifier notation
                transpilation”
            </Action>
            <Paragraph>
                Confirmed against the corpus. The "Formal Syntax under Transpilation" document is the authority on SRT
                typographical conventions:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}!P         := ¬P
P & Q      := P ∧ Q
P | Q      := P ∨ Q
P !! Q     := P ⊕ Q          (XOR is !!, not |)
P =|> Q    := P → Q
P <|=|> Q  := P ↔ Q
A[x]: P    := ∀x: P
E[x]: P    := ∃x: P`}
            </CodeBox>
            <Paragraph>
                So the SRT-side names for the alphabet referents should follow these conventions. I had <Word>
                    <Verbatim />
                    or
                </Word> and <Word>
                    <Verbatim />
                    forall
                </Word> instead of <Word>
                    <Verbatim />
                    |
                </Word> and <Word>
                    <Verbatim />
                    A
                </Word>, which would have introduced new vocabulary unnecessarily. Updated alphabet:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}// Connectives
(&)        == [$\\wedge$]
(|)        == [$\\vee$]
(!)        == [$\\neg$]
(=|>)      == [$\\rightarrow$]
(<|=|>)    == [$\\leftrightarrow$]
(!!)       == [$\\oplus$]              // include if XOR is in the FOL alphabet

// Quantifiers
(A)        == [$\\forall$]
(E)        == [$\\exists$]

// Propositional constants
(bot)      == [$\\bot$]
(top)      == [$\\top$]

// Punctuation
(lparen)   == [$($]
(rparen)   == [$)$]
(,)        == [$,$]`}
            </CodeBox>
            <Paragraph>
                For equality, there's a question I want to flag rather than decide. Earlier you said <Word>
                    <Verbatim />
                    (=)
                </Word> is the canonical symbol for equals, and that it should map to <Word>
                    <Verbatim />
                    eq
                </Word> eventually. Two ways to write it:
            </Paragraph>
            <CodeBox>
                {`${''}Option A:  (=)   == [$=$]       // using = as the SRT-side referent name
Option B:  (eq)  == [$=$]       // using eq as the name; matches internalized referent`}
            </CodeBox>
            <Paragraph>
                Option A is clean because the axiom is a single character on each side, and <Word>
                    <Verbatim />
                    =
                </Word> is what a programmer would type. Option B makes the connection to SRT's internalized equality
                referent explicit at the naming level — the same name <Word>
                    <Verbatim />
                    eq
                </Word> is on both sides of the bridge.
            </Paragraph>
            <Paragraph>
                Option B has a hazard you'd want to weigh: the FOL referent <Word>
                    <Verbatim />
                    eq
                </Word> (the <Word>
                    <Emphasis />
                    symbol
                </Word>) and SRT's internalized referent <Word>
                    <Verbatim />
                    eq
                </Word> (the equality <Word>
                    <Emphasis />
                    concept
                </Word>) would be the same name for two different things at first, intentionally collapsed later when the
                semantic bridge is established. Whether that pre-collapse identity is helpful or confusing depends on how
                you want to think about the bridge. Your earlier instinct was that the collision is a feature.
            </Paragraph>
            <Paragraph>
                I'd lean on what you've said before and write it as Option B, with a flag that the bridge from <Word>
                    <Verbatim />
                    eq
                </Word>-as-symbol to <Word>
                    <Verbatim />
                    eq
                </Word>-as-internalized-referent is a separate axiom yet to be written.
            </Paragraph>
            <Paragraph>Two notes on the alphabet otherwise:</Paragraph>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    |
                </Word> collision is real — same character for FOL OR (alphabet member) and SRT BNF alternation (in our
                grammar productions). Per your earlier comment ("we admit that all of the keys on the keyboard are at least
                referents in SRT... that causes some parsing issues. We can find creative ways of handling that later"), we
                let it ride for now and disambiguate by context.
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    (,)
                </Word> axiom looks odd because <Word>
                    <Verbatim />
                    ,
                </Word> is also SRT structural punctuation in things like <Word>
                    <Verbatim />
                    (x,y)
                </Word>. Same kind of collision as <Word>
                    <Verbatim />
                    |
                </Word>. Roll with it for now.
            </Paragraph>
            <Paragraph>
                If this alphabet is right, the next step is the grammar productions — written as canonical-transport axioms
                <Word>
                    <Verbatim />
                    (non-terminal) == (RHS-expression)
                </Word> using the alphabet referents above plus the <Word>
                    <Verbatim />
                    =then&gt;
                </Word> (typographically <Word>
                    <Verbatim />
                    &gt;
                </Word>) and BNF-<Word>
                    <Verbatim />
                    |
                </Word> for alternation. Want me to draft those?
            </Paragraph>
        </Message>
    </Chapter>
);
