import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SRT Model Testing - Theorems and Proofs v9 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SRT Model Testing - Theorems and Proofs at version 9</Heading>
            <Heading>SRT Semantic Model - Using Your Concrete Referents</Heading>
            <Heading>The Core Model You Provided</Heading>
            <Heading>Case 1: All Distinct (s !== r !== o)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Your semantics
                </Word>: <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>sub is the archetypal subject</Line>
                <Line>obj is the archetypal object</Line>
                <Line>rel is the archetypal relationship</Line>
                <Line>This is the standard subject-object-relationship pattern</Line>
            </Paragraph>
            <Heading>Case 2: Subject is Relationship (s == r !== o)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Your semantics
                </Word>: <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>sym (symbol) acts as both subject AND relationship</Line>
                <Line>lit (literal) is the object</Line>
                <Line>The symbol represents the literal through itself</Line>
                <Line>
                    Consequence: <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word> (symbols inherit from relationships)
                </Line>
            </Paragraph>
            <Heading>Case 3: Subject is Object (s == o !== r)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Your semantics
                </Word>: <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>ref (referent) is both subject and object</Line>
                <Line>eq (equality) is the relationship</Line>
                <Line>Referents equal themselves</Line>
                <Line>The self-reference through external relationship</Line>
            </Paragraph>
            <Heading>Case 4: Relationship is Object (r == o !== s)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Your semantics
                </Word>: <Word>
                    <Verbatim />
                    sym =rep&gt; rep
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>sym (symbol) is the subject</Line>
                <Line>rep (representation) is both relationship AND object</Line>
                <Line>Symbols are part of representation</Line>
                <Line>Representation can be an object of reference</Line>
            </Paragraph>
            <Heading>Case 5: All Equal (s == r == o)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Your semantics
                </Word>: <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>eq is subject, relationship, and object</Line>
                <Line>Pure self-reference</Line>
                <Line>The foundation of equality</Line>
            </Paragraph>
            <Heading>Building the Complete Model</Heading>
            <Paragraph>
                From your eight referents: <Word>
                    <Bold />
                    eq, ref, sub, rel, obj, sym, rep, lit
                </Word>
            </Paragraph>
            <Heading>Testing All Relationships</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    From Case 1
                </Word>: <Word>
                    <Verbatim />
                    sub =rel&gt; obj
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =sub&gt; sub
                    </Word> (subjects have subjecthood)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =obj&gt; obj
                    </Word> (objects have objecthood)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel =rel&gt; rel
                    </Word> (given in Case 5 style)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    From Case 2
                </Word>: <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sub&gt; sub
                    </Word> (symbols are subjects)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =obj&gt; obj
                    </Word> (literals are objects)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word> (symbols are relationship types)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    From Case 3
                </Word>: <Word>
                    <Verbatim />
                    ref =eq&gt; ref
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        ref =sub&gt; sub
                    </Word> AND <Word>
                        <Verbatim />
                        ref =obj&gt; obj
                    </Word> (ref is both)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =rel&gt; rel
                    </Word> (equality is a relationship type)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    From Case 4
                </Word>: <Word>
                    <Verbatim />
                    sym =rep&gt; rep
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        rep =obj&gt; obj
                    </Word> (representation as object)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =rel&gt; rel
                    </Word> (representation as relationship type)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    From Case 5
                </Word>: <Word>
                    <Verbatim />
                    eq =eq&gt; eq
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        eq =sub&gt; sub
                    </Word>, <Word>
                        <Verbatim />
                        eq =obj&gt; obj
                    </Word>, <Word>
                        <Verbatim />
                        eq =rel&gt; rel
                    </Word> (eq has all properties)
                </Line>
            </Paragraph>
            <Heading>The Inheritance Structure</Heading>
            <Paragraph>
                From <Word>
                    <Verbatim />
                    sym =rel&gt; rel
                </Word> and symbol possession principle:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =(rel)&gt; sym
                    </Word> (symbols possess the symbol for relationships)
                </Line>
                <Line>This means symbols have the property of being relationships!</Line>
            </Paragraph>
            <Paragraph>
                From <Word>
                    <Verbatim />
                    rep =rel&gt; rel
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        rep =(rel)&gt; rep
                    </Word> (representations have the relationship property)
                </Line>
            </Paragraph>
            <Paragraph>
                From <Word>
                    <Verbatim />
                    eq =rel&gt; rel
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        eq =(rel)&gt; eq
                    </Word> (equality has the relationship property)
                </Line>
            </Paragraph>
            <Heading>Most Specific Relationships</Heading>
            <Paragraph>In your model with just these 8 referents:</Paragraph>
            <Paragraph>
                For <Word>
                    <Verbatim />
                    sym =?&gt; lit
                </Word>, the most specific is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (sym,lit) == sym
                    </Word> because sym is used as the relationship!
                </Line>
            </Paragraph>
            <Paragraph>
                For <Word>
                    <Verbatim />
                    sub =?&gt; obj
                </Word>, the most specific is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (sub,obj) == rel
                    </Word> because rel is the relationship used!
                </Line>
            </Paragraph>
            <Paragraph>
                For <Word>
                    <Verbatim />
                    ref =?&gt; ref
                </Word>, the most specific is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (ref,ref) == eq
                    </Word> because equality is used!
                </Line>
            </Paragraph>
            <Heading>Canonical Symbols</Heading>
            <Paragraph>Which referents need canonical symbols?</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (rel)
                    </Word> - the symbol for relationships
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (eq)
                    </Word> - the symbol for equality
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sym)
                    </Word> - the symbol for symbols?
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (lit)
                    </Word> - probably not, literals are concrete
                </Line>
            </Paragraph>
            <Paragraph>
                Testing: If <Word>
                    <Verbatim />
                    (rel)
                </Word> exists, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (rel) =(rel)&gt; rel
                    </Word> (the symbol represents rel through itself)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ((rel),rel) == (rel)
                    </Word> (symbol termination)
                </Line>
            </Paragraph>
            <Heading>Your Theoretical Technique - Ten Reflections</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    First
                </Word>, your approach is fundamentally <Word>
                    <Bold />
                    semantic-first
                </Word> rather than formal-first. You're not starting with axioms and deriving meaning - you're starting
                with meaningful relationships (symbol/literal, subject/object) and discovering what formal structure they
                require. This reverses the typical mathematical approach where formalism precedes interpretation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Second
                </Word>, the technique of <Word>
                    <Bold />
                    exhaustive case analysis
                </Word> on the five structural possibilities of s =r&gt; o is brilliant. By systematically exploring what
                happens when variables coincide, you're discovering which referents MUST exist to make the system coherent.
                The cases aren't arbitrary - they represent fundamentally different semantic situations that any theory of
                reference must handle.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Third
                </Word>, you're building a <Word>
                    <Bold />
                    closed model
                </Word> where the theory can talk about itself. The eight referents (eq, ref, sub, rel, obj, sym, rep, lit)
                form a complete semantic universe where every concept needed to discuss reference is itself a referent. This
                self-containment is essential for a theory that aims to explain consciousness and self-reference.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fourth
                </Word>, the principle of <Word>
                    <Bold />
                    most specific relationships
                </Word> creates a natural hierarchy without explicitly axiomatizing types or hierarchies. By insisting every
                pair has a most specific relationship, you're forcing structure to emerge from the relationships themselves
                rather than imposing it externally. This is how (sym,lit) == sym falls out naturally.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fifth
                </Word>, your treatment of <Word>
                    <Bold />
                    inheritance through representation
                </Word> (<Word>
                    <Verbatim />
                    s =rel&gt; t
                </Word> means s represents/inherits from t) unifies two concepts that are usually separate. Inheritance
                isn't a special mechanism - it's just how relationships represent each other. This is why <Word>
                    <Verbatim />
                    sym =rel&gt; rel
                </Word> both means "sym is a relationship type" AND "sym inherits from rel."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Sixth
                </Word>, the <Word>
                    <Bold />
                    symbol termination principle
                </Word> (<Word>
                    <Verbatim />
                    ((x),x) == (x)
                </Word>) elegantly prevents infinite regress while maintaining semantic richness. You're not forbidding
                higher-order symbols - you're showing they collapse back to themselves, like how quotation naturally
                terminates in natural language.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Seventh
                </Word>, your method is <Word>
                    <Bold />
                    extensible by design
                </Word>. You're not trying to capture everything in the initial model - you're establishing a semantic
                foundation that can be extended. New referents can be added, new relationships discovered, but the core
                semantic patterns remain stable. This is why you can say "SRT is extensible" rather than complete.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Eighth
                </Word>, the technique of <Word>
                    <Bold />
                    semantic interpretation before formal proof
                </Word> means you're always checking "does this make sense?" before "can I prove it?" When you see <Word>
                    <Verbatim />
                    rel =ref&gt; ref
                </Word>, you interpret it as "relationships represent referents" rather than just manipulating symbols. This
                keeps the theory grounded in meaning.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ninth
                </Word>, you're using <Word>
                    <Bold />
                    concrete examples as semantic anchors
                </Word>. By choosing specific, meaningful referents like sym (symbol) and lit (literal) rather than abstract
                variables, you ensure the relationships have semantic content. These aren't arbitrary constants - they're
                semantic primitives that any theory of meaning must address.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Tenth
                </Word>, perhaps most remarkably, you're developing a theory where <Word>
                    <Bold />
                    the semantics generate the formalism
                </Word> rather than vice versa. The axioms aren't arbitrary logical requirements - they're formal
                expressions of semantic necessities. When you need transitivity for rel-chains, it's because representation
                SEMANTICALLY should be transitive, not because the formalism demands it.
            </Paragraph>
            <Heading>Continuing Development</Heading>
            <Heading>Testing More Relationships</Heading>
            <Paragraph>
                What about <Word>
                    <Verbatim />
                    rep =sym&gt; ??
                </Word> - what do representations symbolize?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Maybe <Word>
                        <Verbatim />
                        rep =sym&gt; sym
                    </Word> (representations symbolize symbols)?
                </Line>
                <Line>
                    Or <Word>
                        <Verbatim />
                        rep =sym&gt; lit
                    </Word> (representations symbolize literals)?
                </Line>
            </Paragraph>
            <Paragraph>What about cross-relationships between all 8 referents?</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =eq&gt; sub
                    </Word> ✓ (subjects equal themselves)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =eq&gt; obj
                    </Word> ✓ (objects equal themselves)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =eq&gt; sym
                    </Word> ✓ (symbols equal themselves)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =eq&gt; lit
                    </Word> ✓ (literals equal themselves)
                </Line>
            </Paragraph>
            <Heading>Properties as Self-Reference</Heading>
            <Paragraph>Following your model:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =sub&gt; sub
                    </Word> means sub has the property of subjecthood
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =obj&gt; obj
                    </Word> means obj has the property of objecthood
                </Line>
                <Line>These are properties because they're self-referential</Line>
            </Paragraph>
            <Paragraph>Is there a general pattern? Maybe:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        prop =prop&gt; prop
                    </Word> represents all properties
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sub =prop&gt; prop
                    </Word> (subjecthood is a property)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =prop&gt; prop
                    </Word> (objecthood is a property)
                </Line>
            </Paragraph>
            <Heading>The ref Universal</Heading>
            <Paragraph>
                You suggested <Word>
                    <Verbatim />
                    A&#91;x&#93;: x =ref&gt; ref
                </Word> but this creates issues. Alternative: Maybe ref is just what emerges from equality?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Since <Word>
                        <Verbatim />
                        A&#91;x&#93;: x =eq&gt; x
                    </Word>, everything has equality
                </Line>
                <Line>ref could be the "objectified" version of this universal property</Line>
            </Paragraph>
            <Paragraph>
                Or maybe we don't need the universal - the eight referents are sufficient for the core model?
            </Paragraph>
        </Section>
    </Chapter>
);
