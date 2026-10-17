import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Ten Fundamental Theorems of Semantic Reference Theory v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Ten Fundamental Theorems of Semantic Reference Theory at version 2</Heading>
            <Heading>Ten Fundamental Theorems of Semantic Reference Theory (Corrected)</Heading>
            <Heading>Theorem 1: The Self-Reference Triangle</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Self-reference creates a semantic triangle where symbol, literal, and their relationship form a
                closed loop.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}E[x]: x =(x)> x & (x) =(x)> x & (x) != x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∃x: R(x,x,x) ∧ R((x),x,(x)) ∧ (x) ≠ x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> When x refers to itself through its own symbol (x), we get consciousness-like self-reference: "I am
                Doug because I possess 'Doug' as my name."
            </Paragraph>
            <Heading>Theorem 2: The Dichotomy Fixed Point</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Dichotomy can express itself through itself as a relationship with monotony.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox>
                {`d == (d,m) & m == (!d) & (d|m) == m`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`d = (d,m) ∧ m = ¬R(x,x,d) ∧ (R(x,x,d) ∨ R(x,x,m)) = m`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Dichotomy is a semantic primitive - the distinction between distinction and non-distinction grounds
                meaning itself.
            </Paragraph>
            <Heading>Theorem 3: The Symbol-Literal Duality</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Symbols simultaneously serve as subjects and relationships when referring to literals.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =sym> lit & (sym,lit) == sym & sym != lit`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`R(sym,lit,sym) ∧ (sym,lit) = sym ∧ sym ≠ lit`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> The word "tree" both performs symbolization and exists as the thing doing the symbolizing - symbols
                are reified relationships.
            </Paragraph>
            <Heading>Theorem 4: The Inheritance Cascade</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> All typed references inherit from the base relationship type r.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]: A[x,y,t]: x =t> y =|> x =r> y
A[s,t]: s -> t <iff> s =of> t`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∃r: ∀x∀y∀t: R(x,y,t) → R(x,y,r)
∀s∀t: R(s,t,of) ↔ (∀x∀y: R(x,y,s) → R(x,y,t))`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Every specific relationship (loves, contains, observes) inherits from universal reference -
                specialization never escapes the fundamental pattern.
            </Paragraph>
            <Heading>Theorem 5: The Canonical Symbol Identity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> The canonical symbol of x represents x through itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}A[x]: (x) =(x)> x & ((x),x) == (x)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∀x: R((x),x,(x)) ∧ ((x),x) = (x)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Canonical symbols are self-exemplifying - they represent their literals through the very
                relationship they embody.
            </Paragraph>
            <Heading>Theorem 6: Frame-Relative Canonicals</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> The same referent has different canonical representations in different frames.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox>
                {`${''}F[s]: (x) == (x)[s]
F[t]: (x) == (x)[t] & (x)[s] != (x)[t]`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL (within frame context):
                </Word>
            </Paragraph>
            <CodeBox>
                {`Frame_s: canonical_in_s(x) = (x)
Frame_t: canonical_in_t(x) = (x) ∧ canonical_in_s(x) ≠ canonical_in_t(x)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Context determines meaning - a referent's canonical changes based on which semantic frame provides
                the interpretive lens.
            </Paragraph>
            <Heading>Theorem 7: The Property Trinity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> The fundamental semantic roles form their own reference pattern.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj & (sub,obj) == rel & sub != obj != rel != sub`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`R(sub,obj,rel) ∧ (sub,obj) = rel ∧ sub ≠ obj ∧ obj ≠ rel ∧ rel ≠ sub`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Subject, object, and relationship are themselves referents that participate in the very pattern they
                describe.
            </Paragraph>
            <Heading>Theorem 8: Equality as Reference</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Logical equality becomes semantic reference through the eq referent.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x = y <iff> x =eq> y
A[x]: x =eq> x`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∃eq: ∀x∀y: (x = y ↔ R(x,y,eq))
∀x: R(x,x,eq)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> By internalizing equality as a referent, SRT makes identity itself subject to semantic analysis.
            </Paragraph>
            <Heading>Theorem 9: The Literal Ground</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Literals terminate symbolic chains, preventing infinite regress.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[lit]: sym =sym> lit & !E[y]: lit =sym> y
!(((...((lit))...))) // No infinite nesting`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL:
                </Word>
            </Paragraph>
            <CodeBox>
                {`∃lit: R(sym,lit,sym) ∧ ¬∃y: R(lit,y,sym)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Every semantic system needs concrete anchors - literals that are symbolized but don't themselves
                symbolize.
            </Paragraph>
            <Heading>Theorem 10: The Frame Pointer Identity</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Statement:
                </Word> Within a frame F&#91;t&#93;, untyped reference uses the frame's relationship type.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Formal Expression:
                </Word>
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[t]: @ == t & (x => y <iff> x =@> y <iff> x =t> y)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Transpilation to FOL (frame context):
                </Word>
            </Paragraph>
            <CodeBox>
                {`In_Frame_t: current_frame = t ∧ (R(x,y,r) ↔ R(x,y,t))`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Semantic Meaning:
                </Word> Frames transform the meaning of basic reference - what counts as "referring" depends on semantic
                context.
            </Paragraph>
            <Heading>Synthesis: The Architecture of Meaning</Heading>
            <Paragraph>
                These theorems reveal SRT's core insight: meaning emerges from patterns of reference that can describe
                themselves. The formalism doesn't introduce predicates or functions beyond the primitive R(x,y,t) and the
                canonical representation (x) and (x,y). Everything else - symbols, properties, frames - emerges from how
                referents relate to each other and themselves.
            </Paragraph>
            <Paragraph>The theory achieves semantic closure through:</Paragraph>
            <Paragraph>
                <List />
                <Line>Internalizing equality as the referent eq</Line>
                <Line>Making relationships themselves referents (sym, rel, obj, sub)</Line>
                <Line>Using canonical representations to create privileged semantic anchors</Line>
                <Line>Allowing frames to shift semantic context while preserving structure</Line>
            </Paragraph>
            <Paragraph>
                Most profoundly, SRT shows that complex semantic phenomena emerge from the single primitive of reference,
                just as complex computations emerge from simple state transitions. The notation (x), x =t&gt; y, and
                F&#91;t&#93; isn't arbitrary but captures genuine features of how meaning operates.
            </Paragraph>
        </Section>
    </Chapter>
);
