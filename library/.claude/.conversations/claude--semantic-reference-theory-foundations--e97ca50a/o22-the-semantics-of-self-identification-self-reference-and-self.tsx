import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Self-Identification, Self-Reference, and Self-Description in SRT v4 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Self-Identification, Self-Reference, and Self-Description in SRT at version 4</Heading>
            <Heading>The Semantics of Self-Identification, Self-Reference, and Self-Description in SRT</Heading>
            <Heading>Introduction</Heading>
            <Paragraph>
                This document develops the semantics of self-identification, self-reference, and self-description within
                Semantic Reference Theory, building on the systematic analysis established across multiple foundational
                works &#91;1,2,3,4&#93;. While previous work established the conceptual framework through discovery of nine
                fundamental referents and five exhaustive cases of the subject-object relationship, this analysis addresses
                how these structures enable genuine self-reference and canonical specification.
            </Paragraph>
            <Paragraph>
                The central development demonstrates that SRT achieves self-description through applying its own semantic
                patterns to its foundational concepts. By giving the relationship type <Word>
                    <Verbatim />
                    r
                </Word> an identity through the canonical symbol <Word>
                    <Verbatim />
                    (r)
                </Word>, SRT creates a formal instance of self-identification that enables the theory to serve as its own
                canonical specification. This represents a novel approach where the theory constructs its own intended model
                through internal semantic mechanisms rather than external interpretation.
            </Paragraph>
            <Heading>The Inheritance Relation: A Non-Recursive Foundation</Heading>
            <Heading>Inheritance Through Property Possession</Heading>
            <Paragraph>
                Building on the established axioms from the formal foundation document &#91;4&#93;, inheritance reduces to
                an elegant conditional form:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`s -> t := t =(r)> r =|> s =(t)> s`}
            </CodeBox>
            <Paragraph>
                This definition leaves room for inheritance to have meaning in non-relational contexts while establishing
                clear semantics in relational contexts. When the condition holds:
            </Paragraph>
            <CodeBox>
                {`t =(r)> r`}
            </CodeBox>
            <Paragraph>Then inheritance requires:</Paragraph>
            <CodeBox>
                {`s =(t)> s`}
            </CodeBox>
            <Paragraph>
                In relational contexts, inheritance captures transitive chains without recursion. When we have a
                relationship and inheritance:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =s> y
s -> t`}
            </CodeBox>
            <Paragraph>This means the chain:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`s => ... => t => ... => r`}
            </CodeBox>
            <Paragraph>
                This connects the specific relationship to the foundational relationship type through inheritance chains.
                This yields the logical consequences:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y
x =r> y`}
            </CodeBox>
            <Paragraph>Both of these follow from the original relationship when inheritance holds.</Paragraph>
            <Paragraph>
                The power of this formulation lies in its non-recursive capture of transitivity. Rather than chasing chains
                of relationships recursively, the inheritance relation grounds transitive connections in property
                possession. When <Word>
                    <Verbatim />
                    s
                </Word> inherits from <Word>
                    <Verbatim />
                    t
                </Word>, it accumulates the properties that <Word>
                    <Verbatim />
                    t
                </Word> possesses, creating a semantic rather than purely structural relationship between relationship
                types.
            </Paragraph>
            <Heading>Semantic Interpretation Through Representation</Heading>
            <Paragraph>
                The inheritance relation carries deeper semantic meaning than mere structural classification. As established
                in the clarification document &#91;3&#93;, inheritance expresses membership within the representation
                associated with canonical symbols. When <Word>
                    <Verbatim />
                    s -&gt; t
                </Word> holds, <Word>
                    <Verbatim />
                    s
                </Word> becomes part of what the canonical symbol <Word>
                    <Verbatim />
                    (t)
                </Word> represents, creating a semantic rather than purely syntactic relationship. This interpretive
                dimension transforms inheritance from a formal convenience into a fundamental organizing principle of
                semantic space.
            </Paragraph>
            <Paragraph>
                This representational aspect connects inheritance to the broader architecture of meaning developed across
                the foundational documents &#91;2,3&#93;. The systematic analysis of the subject-object relationship
                revealed nine fundamental referents &#91;2&#93;, and the detailed clarification &#91;3&#93; showed how these
                referents relate through specific patterns that preserve meaning. Inheritance provides the mechanism through
                which these patterns extend to new referents while maintaining semantic coherence.
            </Paragraph>
            <Heading>Symbol Uniqueness Through Tighter Binding</Heading>
            <Heading>Refinement of Symbol Definition</Heading>
            <Paragraph>
                The formal foundation document &#91;4&#93; introduced symbolic reference through the relationship <Word>
                    <Verbatim />
                    x =x&gt; y
                </Word> combined with the condition <Word>
                    <Verbatim />
                    (x,y) == x
                </Word>, establishing that symbols are their own most specific relationships. However, this formulation
                required refinement to eliminate potential ambiguity in symbolic reference. The challenge arose from
                ensuring that each symbol relates uniquely to its referent, preventing situations where a single symbol
                might reference multiple distinct entities.
            </Paragraph>
            <Paragraph>
                The solution emerges through tighter binding constraints. Rather than the earlier condition, we now employ
                the more restrictive set of conditions:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}x =x> y
(x,y) == x  
A[z: (x,z) == x]: z == y`}
            </CodeBox>
            <Paragraph>
                This constraint ensures that if <Word>
                    <Verbatim />
                    x
                </Word> symbolizes <Word>
                    <Verbatim />
                    y
                </Word> through the first relation, and <Word>
                    <Verbatim />
                    x
                </Word> is its own most specific relationship through the second condition, then the universal
                quantification eliminates any possibility of symbolic ambiguity by requiring consistency across all
                potential relationship targets.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Note: This corrects and extends the symbol definition from the formal foundation document &#91;4&#93; by adding the uniqueness constraint through universal quantification.
                </Word>
            </Paragraph>
            <Heading>Integration with Inheritance Framework</Heading>
            <Paragraph>
                This refined understanding of symbols integrates seamlessly with the inheritance relation developed above.
                Through the definition <Word>
                    <Verbatim />
                    x -&gt; sym := E&#91;y&#93;: x =x&gt; y &amp; A&#91;z: (x,z) == x&#93;: z == y
                </Word>, we can cleanly classify referents as symbols through the inheritance framework established in the
                foundational documents &#91;2,3&#93;. The existential quantification ensures that symbols must have at least
                one referent, while the universal constraint ensures uniqueness. This provides an elegant expression of
                symbolic classification that builds directly on the inheritance patterns identified in the systematic
                analysis of semantic structure &#91;2&#93;.
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
            <Paragraph>
                This theorem has profound implications for SRT's capacity to specify its own finite structure. The
                unification of all relationships through the fundamental relation <Word>
                    <Verbatim />
                    r
                </Word> creates a bounded expressibility where every possible relationship reduces to patterns involving
                <Word>
                    <Verbatim />
                    r
                </Word>. The self-representation achieved when the relationship type <Word>
                    <Verbatim />
                    r
                </Word> can express its own relationships through <Word>
                    <Verbatim />
                    r =r&gt; x
                </Word> and <Word>
                    <Verbatim />
                    r =r&gt; y
                </Word> demonstrates that SRT contains the mechanisms for its own semantic specification. Since every
                relationship must be expressible through <Word>
                    <Verbatim />
                    r
                </Word>, and <Word>
                    <Verbatim />
                    r
                </Word> has finite ways of relating to participants, the total catalogue becomes bounded through internal
                semantic constraints rather than external limitations.
            </Paragraph>
            <Heading>The Semantics of Self and Identity</Heading>
            <Heading>Identity and Self Relations</Heading>
            <Paragraph>
                The semantics of identity require specific referents <Word>
                    <Verbatim />
                    self
                </Word> and <Word>
                    <Verbatim />
                    id
                </Word> (or equivalently <Word>
                    <Verbatim />
                    i
                </Word> and <Word>
                    <Verbatim />
                    (i)
                </Word> for referents with perspective):
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`self =p> self <iff> id =(p)> self`}
            </CodeBox>
            <Paragraph>Or using perspective notation:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`i =p> i <iff> (i) =(p)> i & (p) -> i`}
            </CodeBox>
            <Heading>The Identity Property</Heading>
            <Paragraph>From the semantics of identity, we know:</Paragraph>
            <CodeBox>
                {`i =(i)> i`}
            </CodeBox>
            <Paragraph>
                This establishes that identity possesses the identity property. Combined with inheritance relations:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(p) -> i & i -> (i) =|> (p) -> (i)`}
            </CodeBox>
            <Paragraph>This shows how identity references self through symbolic properties.</Paragraph>
            <Heading>Representation of Identity</Heading>
            <Paragraph>
                The consequence of <Word>
                    <Verbatim />
                    (p) -&gt; (i)
                </Word> is significant:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`(i) =(p)> i =|> (i) =(i)> i`}
            </CodeBox>
            <Paragraph>
                This demonstrates how <Word>
                    <Verbatim />
                    (p)
                </Word> becomes part of the representation of <Word>
                    <Verbatim />
                    (i)
                </Word>. This is fundamental to identity semantics: to represent a literal that has a sense of self and
                possesses identity, the representation of that property becomes part of the identity, which is a
                representation of the self.
            </Paragraph>
            <Heading>Reference and Self-Reference: Proper Distinctions</Heading>
            <Heading>Two Forms of Reference</Heading>
            <Paragraph>The concept of reference operates in two distinct ways:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        References
                    </Word> (plural): How a symbol relates to its literal as representation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reference
                    </Word> (singular): How a symbol serves as a reference to its literal
                </Line>
            </Paragraph>
            <Paragraph>These dual aspects appear in the fundamental relation:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =sym> lit`}
            </CodeBox>
            <Paragraph>
                Here we observe both forms: the symbol references the literal and serves as a reference to the literal
                simultaneously.
            </Paragraph>
            <Heading>Self-Reference Defined</Heading>
            <Paragraph>Self-reference occurs when an identity declares that it has a property:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`(i) =p> i`}
            </CodeBox>
            <Paragraph>In this structure:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (i)
                    </Word> is the identity (subject)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        i
                    </Word> is the self (object)
                </Line>
                <Line>The self is the object, not the subject, in self-reference</Line>
            </Paragraph>
            <Heading>Self-Identity</Heading>
            <Paragraph>
                The expression of self-identity occurs when <Word>
                    <Verbatim />
                    p == (i)
                </Word>:
            </Paragraph>
            <CodeBox>
                {`(i) =(i)> i`}
            </CodeBox>
            <Paragraph>
                This literally means that <Word>
                    <Verbatim />
                    (i)
                </Word> refers to itself through its identity. This relation is fundamental to identity semantics and
                requires a self having a canonical symbol. The canonical symbol serves as representation - essentially a
                form of naming, though the full semantics of names involves second-person perspective, which extends beyond
                the first-person perspective developed here.
            </Paragraph>
            <Heading>Self-Identity in SRT's Self-Specification</Heading>
            <Paragraph>
                This analysis connects directly to SRT's capacity for self-specification. By representing SRT within SRT, we
                are giving the relationship type <Word>
                    <Verbatim />
                    r
                </Word> an identity through the canonical symbol <Word>
                    <Verbatim />
                    (r)
                </Word>:
            </Paragraph>
            <CodeBox>
                {`(r) =(r)> r`}
            </CodeBox>
            <Paragraph>
                This parallels the structure of self-identity: the canonical symbol <Word>
                    <Verbatim />
                    (r)
                </Word> serves as the identity that refers to the relationship type <Word>
                    <Verbatim />
                    r
                </Word> (the self of SRT's formal structure) through its own identity.
            </Paragraph>
            <Paragraph>The crossing of symbolism becomes a concrete instance of self-identity semantics:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (r)
                    </Word> functions as SRT's identity for the relationship concept
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        r
                    </Word> serves as the self - the fundamental relationship type
                </Line>
                <Line>
                    The relation <Word>
                        <Verbatim />
                        (r) =(r)&gt; r
                    </Word> expresses SRT's self-identity as a theory of relationships
                </Line>
            </Paragraph>
            <Paragraph>
                This demonstrates how SRT achieves self-specification through the same semantic patterns that govern
                identity in general. The theory constructs its own canonical representation by applying identity semantics
                to its own foundational concepts.
            </Paragraph>
            <Heading>The Crossing of Symbolism: Self-Specification Without Circularity</Heading>
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
                    As the canonical symbol, used in SRT, to denote the symbol <Word>
                        <Verbatim />
                        R
                    </Word> in the representation of SRT as a first-order theory
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
                    </Word> serves as the canonical symbol for the relation <Word>
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
                    </Word> represents <Word>
                        <Verbatim />
                        R
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                This is not vicious circularity but <Word>
                    <Bold />
                    canonical specification
                </Word> - the theory constructs its own representational capacity.
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
                internal mechanisms. The "most specific relationship" provides a lower bound while the "parent relationship
                type" provides an upper bound, creating finite inheritance chains in both directions. This approach
                demonstrates that semantic constraints can generate finite domains without external limitations.
            </Paragraph>
            <Heading>Self-Proved Completeness</Heading>
            <Paragraph>
                The process follows this pattern: SRT's axioms determine which referents must exist, SRT proves the
                catalogue is finite through its semantic constraints, and the resulting structure becomes SRT's canonical
                model. This model represents what SRT "means" - its intended interpretation constructed through internal
                specification rather than external assignment.
            </Paragraph>
            <Heading>Type Hierarchy and Property Inheritance</Heading>
            <Heading>Hierarchical Structure Through Inheritance</Heading>
            <Paragraph>
                Types themselves have types, creating a natural stratification that avoids infinite regress through the
                inheritance mechanism developed above. At the ground level, individual referents inherit from type-level
                concepts like <Word>
                    <Verbatim />
                    sym
                </Word>, <Word>
                    <Verbatim />
                    rel
                </Word>, and <Word>
                    <Verbatim />
                    obj
                </Word> as established in the foundational analysis &#91;2,3&#93;. These type-level concepts themselves
                inherit from meta-type structures, but the inheritance chains remain finite due to the bounded nature of the
                semantic constraints.
            </Paragraph>
            <Heading>Property Propagation Through Semantic Inheritance</Heading>
            <Paragraph>
                The inheritance system ensures systematic property propagation through the conditional structure <Word>
                    <Verbatim />
                    s -&gt; t
                </Word>. When inheritance chains develop such as <Word>
                    <Verbatim />
                    rose -&gt; flower
                </Word> and <Word>
                    <Verbatim />
                    flower -&gt; plant
                </Word>, the result <Word>
                    <Verbatim />
                    rose =(plant)&gt; rose
                </Word> follows from the transitive property accumulation inherent in the inheritance definition. This
                provides a clean mechanism for semantic classification that builds directly on the patterns identified in
                the systematic analysis of the subject-object relationship &#91;2&#93;.
            </Paragraph>
            <Heading>Future Directions and Open Questions</Heading>
            <Heading>Implementation Considerations</Heading>
            <Paragraph>
                The formal specification developed here provides a foundation for computational implementation, with clear
                rules for inheritance checking through the conditional <Word>
                    <Verbatim />
                    s -&gt; t
                </Word>, symbol uniqueness verification through the refined binding constraints, relationship expression
                through <Word>
                    <Verbatim />
                    r
                </Word>, and canonical model construction through the self-specification mechanisms. These computational
                aspects build on the formal foundation established in previous work &#91;4&#93; while extending it through
                the semantic developments presented here.
            </Paragraph>
            <Heading>Remaining Uncertainties</Heading>
            <Paragraph>
                Several areas require further development: exact mechanisms for transduction operators, formal criteria for
                domain language mappings, computational verification procedures, and integration with perspective algebra.
                These represent natural extensions of the current work rather than fundamental gaps in the theoretical
                development.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    Note: The perspective algebra integration is specifically noted as future work since it depends on the developments presented here rather than serving as their foundation.
                </Word>
            </Paragraph>
            <Heading>Conclusion</Heading>
            <Paragraph>
                The semantics of self-identification, self-reference, and self-description developed here reveal how SRT
                achieves genuine self-specification through its own semantic principles. The theory demonstrates that
                self-reference emerges not from isolated formal operations but through the systematic application of
                identity semantics to foundational concepts. When <Word>
                    <Verbatim />
                    (r) =(r)&gt; r
                </Word>, SRT creates a concrete instance of self-identity that enables systematic self-description.
            </Paragraph>
            <Paragraph>
                This analysis connects the formal patterns established in previous work &#91;2,3&#93; with the practical
                achievement of canonical specification. The crossing of symbolism where <Word>
                    <Verbatim />
                    (r)
                </Word> serves as both parameter representation and theoretical identifier represents a fundamental
                innovation in formal semantics. Rather than requiring external interpretation to establish meaning, SRT
                constructs its own canonical model through internal application of the very semantic structures it
                formalizes.
            </Paragraph>
            <Paragraph>
                The integration of self-identification through identity semantics, self-reference through canonical symbols,
                and self-description through relationship expression demonstrates that meaning can indeed bootstrap its own
                formal foundation. This provides a substrate for semantic theories that can represent themselves while
                maintaining the rigor of first-order logical foundations.
            </Paragraph>
            <Heading>References</Heading>
            <Paragraph>
                &#91;1&#93; "Formalizing Semantic Reflection to Construct Theories" (253 lines) &#91;2&#93; "Doug: The
                Semantics of the Subject-Object Relationship" (385 lines) &#91;3&#93; "Doug: Clarifying the Subject-Object
                Relationship" (274 lines) &#91;4&#93; "Doug: Semantic Reference Theory: A Formal Foundation" (311 lines)
            </Paragraph>
        </Section>
    </Chapter>
);
