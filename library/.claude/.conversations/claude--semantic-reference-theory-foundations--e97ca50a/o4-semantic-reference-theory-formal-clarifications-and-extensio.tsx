import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Semantic Reference Theory: Formal Clarifications and Extensions v4 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Semantic Reference Theory: Formal Clarifications and Extensions at version 4</Heading>
            <Heading>Semantic Reference Theory: Formal Clarifications and Extensions</Heading>
            <Heading>Introduction</Heading>
            <Paragraph>
                This document builds upon the foundational work established in three key documents: the foundations of
                Semantic Reference Theory¹, the systematic analysis of the subject-object relationship², and the detailed
                clarification of the nine fundamental referents³. While these documents established the conceptual framework
                and discovered the essential semantic structures, this work advances the formal specification by addressing
                critical questions about inheritance, self-reference, and the theory's capacity for canonical specification.
            </Paragraph>
            <Paragraph>
                The central insight developed here is that SRT achieves something unprecedented in formal systems: it
                provides its own canonical specification through internal mechanisms rather than external interpretation.
                This specification functions as SRT's own intended model in the model-theoretic sense, making the theory
                both a formal system and its own canonical interpretation.
            </Paragraph>
            <Heading>The Inheritance Relation: A Non-Recursive Foundation</Heading>
            <Heading>Simplified Inheritance Definition</Heading>
            <Paragraph>
                Building on the established axioms from the formal foundation document⁴, inheritance reduces to a simpler
                form. Given that:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}r =(r)> r :&: 
s => t =||> A[q].E[x,y: x =q> y]: s =(q)> s`}
            </CodeBox>
            <Paragraph>The inheritance relation becomes shorthand:</Paragraph>
            <CodeBox>
                {`s -> t := s =(t)> s & t =(r)> r`}
            </CodeBox>
            <Paragraph>
                This definition states that <Word>
                    <Verbatim />
                    s
                </Word> inherits from <Word>
                    <Verbatim />
                    t
                </Word> when:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        s
                    </Word> possesses the <Word>
                        <Verbatim />
                        t
                    </Word> property: <Word>
                        <Verbatim />
                        s =(t)&gt; s
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        t
                    </Word> is a relationship type: <Word>
                        <Verbatim />
                        t =(r)&gt; r
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Semantic Interpretation of Inheritance</Heading>
            <Paragraph>Crucially, inheritance in SRT is not merely structural but semantic:</Paragraph>
            <CodeBox>
                {`s -> t ≡ s is part of what (t) represents`}
            </CodeBox>
            <Paragraph>
                This means that inheritance expresses membership in the representation associated with the canonical symbol
                <Word>
                    <Verbatim />
                    (t)
                </Word>. The inheritance chain becomes:
            </Paragraph>
            <CodeBox>
                {`s -> t ⇒ s =(t)> s ⇒ (t) =(t)> s`}
            </CodeBox>
            <Paragraph>Where:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        s -&gt; t
                    </Word>: s inherits from t (representation membership)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        s =(t)&gt; s
                    </Word>: s has the t-property
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (t) =(t)&gt; s
                    </Word>: the canonical symbol for t represents s
                </Line>
            </Paragraph>
            <Heading>Symbol Uniqueness Through Tighter Binding</Heading>
            <Heading>Revised Symbol Definition</Heading>
            <Paragraph>
                The earlier formulation from the formal foundation document⁴ required refinement to ensure symbol
                uniqueness. Instead of the looser condition:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =x> y & (x,y) == x  // outdated`}
            </CodeBox>
            <Paragraph>We now employ tighter binding:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =x> y & A[z: (x,z) == x]: z == y`}
            </CodeBox>
            <Paragraph>
                This constraint ensures that if <Word>
                    <Verbatim />
                    x
                </Word> symbolizes <Word>
                    <Verbatim />
                    y
                </Word>, and <Word>
                    <Verbatim />
                    x
                </Word> equals all its most-specific relationships, then all such relationships must be with the same
                referent <Word>
                    <Verbatim />
                    y
                </Word>. This eliminates ambiguity in symbolic reference.
            </Paragraph>
            <Heading>Type Classification Through Inheritance</Heading>
            <Paragraph>With the inheritance relation defined, we can cleanly classify referents:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x -> sym := E[y]: x =x> y & A[z: (x,z) == x]: z == y`}
            </CodeBox>
            <Paragraph>
                This provides an elegant way to express "x is a symbol" through the inheritance framework.
            </Paragraph>
            <Heading>The Fundamental Theorem of Relationship Expression</Heading>
            <Heading>Universal Expressibility Through r</Heading>
            <Paragraph>
                A key theoretical breakthrough emerges from recognizing that all relationships can be expressed through the
                fundamental relationship type <Word>
                    <Verbatim />
                    r
                </Word>:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Theorem
                </Word>: Universal relationship expression
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}A[x,y,t]: x =t> y <iff> x =r> y & r =r> x & r =r> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Interpretation
                </Word>: Any typed relationship <Word>
                    <Verbatim />
                    x =t&gt; y
                </Word> is equivalent to an <Word>
                    <Verbatim />
                    r
                </Word>-relationship where <Word>
                    <Verbatim />
                    r
                </Word> relates to both <Word>
                    <Verbatim />
                    x
                </Word> and <Word>
                    <Verbatim />
                    y
                </Word> through <Word>
                    <Verbatim />
                    r
                </Word>-relationships.
            </Paragraph>
            <Heading>Consequences for Finite Expressibility</Heading>
            <Paragraph>This theorem has profound implications:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Unification
                    </Word>: All relationships reduce to the fundamental relation <Word>
                        <Verbatim />
                        r
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Self-representation
                    </Word>: The relationship type <Word>
                        <Verbatim />
                        r
                    </Word> can express its own relationships
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Finite bounds
                    </Word>: Since every relationship must be expressible through <Word>
                        <Verbatim />
                        r
                    </Word>, and <Word>
                        <Verbatim />
                        r
                    </Word> has finite ways of relating to participants, the total catalogue is bounded
                </Line>
            </Paragraph>
            <Heading>The Crossing of Symbolism: Self-Reference Without Circularity</Heading>
            <Heading>The Three-Level Structure</Heading>
            <Paragraph>SRT achieves genuine self-reference through a sophisticated crossing of symbolic levels:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Syntactic level
                    </Word>: <Word>
                        <Verbatim />
                        R
                    </Word> is the first-order logic predicate
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Semantic level
                    </Word>: <Word>
                        <Verbatim />
                        r
                    </Word> is a parameter/referent within SRT
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Representational level
                    </Word>: <Word>
                        <Verbatim />
                        (r)
                    </Word> is the canonical symbol for <Word>
                        <Verbatim />
                        r
                    </Word>
                </Line>
            </Paragraph>
            <Heading>The Self-Referential Loop</Heading>
            <Paragraph>
                The remarkable feature is that <Word>
                    <Verbatim />
                    (r)
                </Word> serves a dual role:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    As the canonical symbol representing parameter <Word>
                        <Verbatim />
                        r
                    </Word>
                </Line>
                <Line>
                    As the name for the predicate <Word>
                        <Verbatim />
                        R
                    </Word> within the theory
                </Line>
            </Paragraph>
            <Paragraph>
                This creates the structure: <Word>
                    <Verbatim />
                    R((sub), (obj), r)
                </Word> where:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (r)
                    </Word> names the relation <Word>
                        <Verbatim />
                        R
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sub)
                    </Word>, <Word>
                        <Verbatim />
                        (obj)
                    </Word>, <Word>
                        <Verbatim />
                        r
                    </Word> are the canonical symbols for the three argument positions
                </Line>
                <Line>
                    The predicate <Word>
                        <Verbatim />
                        R
                    </Word> contains parameter <Word>
                        <Verbatim />
                        r
                    </Word>, whose canonical <Word>
                        <Verbatim />
                        (r)
                    </Word> names <Word>
                        <Verbatim />
                        R
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                This is not vicious circularity but <Word>
                    <Bold />
                    canonical specification
                </Word> - the theory bootstraps its own representational capacity.
            </Paragraph>
            <Heading>Canonical Specification as Internal Model Construction</Heading>
            <Heading>Beyond Traditional Model Theory</Heading>
            <Paragraph>
                Standard model theory operates through the pattern: axioms + external interpretation = model. SRT innovates
                by constructing its own canonical model internally:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    SRT Pattern
                </Word>: axioms + self-specification = canonical model
            </Paragraph>
            <Heading>The Semantic Container</Heading>
            <Paragraph>
                The predicate <Word>
                    <Verbatim />
                    R
                </Word> functions as a semantic container:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        R
                    </Word> contains all semantic relations expressible with relationship type <Word>
                        <Verbatim />
                        r
                    </Word>
                </Line>
                <Line>This determines SRT's ontology completely</Line>
                <Line>
                    Everything expressible with <Word>
                        <Verbatim />
                        r
                    </Word>-relationships characterizes SRT's essence
                </Line>
                <Line>
                    Other uses of <Word>
                        <Verbatim />
                        R
                    </Word> fall outside SRT's core semantics
                </Line>
            </Paragraph>
            <Heading>Parameter Expression Structure</Heading>
            <Paragraph>
                The three parameters of <Word>
                    <Verbatim />
                    R
                </Word> have distinct semantic roles:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub
                    </Word> expresses the first parameter (subject position)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj
                    </Word> expresses the second parameter (object position)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rel =can&gt; can
                    </Word> expresses the third parameter (relationship type)
                </Line>
            </Paragraph>
            <Paragraph>
                This creates the canonical relationship structure: <Word>
                    <Verbatim />
                    R((sub), (obj), r)
                </Word> where each position has its canonical filler.
            </Paragraph>
            <Heading>Finite Domain Specification Within FOL</Heading>
            <Heading>Internal Finiteness</Heading>
            <Paragraph>
                Rather than imposing finiteness as an external domain constraint, SRT will prove its own finiteness through
                internal mechanisms:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The "most specific relationship" provides a lower bound</Line>
                <Line>The "parent relationship type" provides an upper bound</Line>
                <Line>These create finite inheritance chains in both directions</Line>
            </Paragraph>
            <Heading>Self-Proved Completeness</Heading>
            <Paragraph>The process follows this pattern:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>SRT's axioms determine which referents must exist</Line>
                <Line>SRT proves the catalogue is finite through its semantic constraints</Line>
                <Line>The resulting structure becomes SRT's canonical model</Line>
                <Line>This model is what SRT "means" - its intended interpretation</Line>
            </Paragraph>
            <Heading>Type Hierarchy and Property Inheritance</Heading>
            <Heading>Hierarchical Structure</Heading>
            <Paragraph>Types themselves have types, creating a natural stratification:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Ground level
                    </Word>: Individual referents
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Type level
                    </Word>: <Word>
                        <Verbatim />
                        sym
                    </Word>, <Word>
                        <Verbatim />
                        rel
                    </Word>, <Word>
                        <Verbatim />
                        obj
                    </Word>, etc.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Meta-type level
                    </Word>: Types of types
                </Line>
            </Paragraph>
            <Heading>Property Propagation</Heading>
            <Paragraph>The inheritance system ensures property propagation:</Paragraph>
            <CodeBox>
                {`child -> type & type -> ancestor ⇒ child =(ancestor)> child`}
            </CodeBox>
            <Paragraph>
                For example: <Word>
                    <Verbatim />
                    rose -&gt; flower &amp; flower -&gt; plant ⇒ rose =(plant)&gt; rose
                </Word>
            </Paragraph>
            <Heading>Infinite Regress Prevention</Heading>
            <Paragraph>The system avoids infinite regress through:</Paragraph>
            <Paragraph>
                <List />
                <Line>Upper bounds via parent relationship types</Line>
                <Line>Lower bounds via most specific relationships</Line>
                <Line>Finite inheritance chains guaranteed by the semantic constraints</Line>
            </Paragraph>
            <Heading>Future Directions and Open Questions</Heading>
            <Heading>Implementation Considerations</Heading>
            <Paragraph>
                The formal specification developed here provides a foundation for computational implementation, with clear
                rules for:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Inheritance checking (<Word>
                        <Verbatim />
                        s -&gt; t
                    </Word>)
                </Line>
                <Line>Symbol uniqueness verification</Line>
                <Line>
                    Relationship expression through <Word>
                        <Verbatim />
                        r
                    </Word>
                </Line>
                <Line>Canonical model construction</Line>
            </Paragraph>
            <Heading>Remaining Uncertainties</Heading>
            <Paragraph>Several areas require further development:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Exact mechanisms for transduction operators</Line>
                <Line>Formal criteria for domain language mappings</Line>
                <Line>Computational verification procedures</Line>
                <Line>Integration with perspective algebra (future work)</Line>
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                This document advances the formal specification of Semantic Reference Theory by providing precise
                definitions for inheritance, symbol uniqueness, and canonical specification. The key insight is that SRT
                achieves semantic self-containment through internal model construction rather than external interpretation.
                The theory demonstrates how meaning can bootstrap its own formal foundation through the sophisticated
                interplay between syntax, semantics, and representation.
            </Paragraph>
            <Paragraph>
                The crossing of symbolism - where <Word>
                    <Verbatim />
                    (r)
                </Word> serves as both parameter representation and predicate name - enables SRT to be genuinely
                self-referential without falling into circularity. This makes SRT both a formal theory and its own canonical
                interpretation, representing a novel approach to the foundations of meaning.
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>
                <List ordered />
                <Line>Foundations document (project reference needed)</Line>
                <Line>The Semantics of the Subject-Object Relationship</Line>
                <Line>Clarifying the Subject-Object Relationship</Line>
                <Line>Semantic Reference Theory: A Formal Foundation</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
