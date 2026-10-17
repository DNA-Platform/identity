import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantic Model of Reference: Building from Subject-Object Relationships v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantic Model of Reference: Building from Subject-Object Relationships at version 1</Heading>
            <Heading>The Semantic Model of Reference: Building from Subject-Object Relationships</Heading>
            <Heading>I. The Primitive and Its Interpretation</Heading>
            <Paragraph>
                Semantic Reference Theory begins with a single primitive relation R(x,y,t), interpreted as "x refers to y
                through t" and notationally expressed as:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y`}
            </CodeBox>
            <Paragraph>
                This serves as the semantic equivalent of what the Turing machine provides for computation—a minimal
                structure from which all semantic relationships emerge.
            </Paragraph>
            <Heading>Fundamental Equality</Heading>
            <Paragraph>
                Since equality exists in first-order logic, we must capture it within our reference structure:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x = y <iff> x =eq> y`}
            </CodeBox>
            <Paragraph>This allows us to define:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x == y
                    </Word> as shorthand for <Word>
                        <Verbatim />
                        x =eq&gt; y
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x !== y
                    </Word> as shorthand for <Word>
                        <Verbatim />
                        !(x =eq&gt; y)
                    </Word>
                </Line>
            </Paragraph>
            <Heading>II. The Five Structural Cases</Heading>
            <Paragraph>
                The complete space of how three variables can relate through equality partitions into exactly five cases.
                This exhaustive analysis reveals what referents must exist to make reference semantically coherent.
            </Paragraph>
            <Heading>The Cyclical Notation</Heading>
            <Paragraph>
                The notation <Word>
                    <Verbatim />
                    s != r != o != s
                </Word> captures the complete triangular relationship among three variables by cycling back to check the
                final inequality. This ensures all three pairwise relationships are specified.
            </Paragraph>
            <Heading>Case 1: All Distinct</Heading>
            <CodeBox>
                {`s != r != o != s`}
            </CodeBox>
            <Paragraph>
                When subject, relationship, and object are all distinct, we have the archetypal pattern. To capture this, we
                introduce:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj`}
            </CodeBox>
            <Paragraph>
                Where <Word>
                    <Verbatim />
                    sub
                </Word>, <Word>
                    <Verbatim />
                    rel
                </Word>, and <Word>
                    <Verbatim />
                    obj
                </Word> are distinct referents representing the types of subjects, relationships, and objects respectively.
                This establishes that <Word>
                    <Verbatim />
                    (sub,obj) == rel
                </Word>—the most specific relationship between subject and object types is the relationship type itself.
            </Paragraph>
            <Heading>Case 2: Subject Is Relationship</Heading>
            <CodeBox>
                {`s == r != o != s`}
            </CodeBox>
            <Paragraph>
                Here the subject IS the relationship through which it relates to the object. We capture this with:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =sym> lit`}
            </CodeBox>
            <Paragraph>
                The referent <Word>
                    <Verbatim />
                    sym
                </Word> (symbol) serves dual roles—both subject and relationship—while <Word>
                    <Verbatim />
                    lit
                </Word> (literal) serves as object. This means symbols symbolize literals through the act of symbolization
                itself.
            </Paragraph>
            <Paragraph>From this we can derive:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sub&gt; sym
                    </Word> (symbols have subjecthood)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =obj&gt; lit
                    </Word> (literals have objecthood)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word> (symbols inherit from relationships)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sym,lit) == sym
                    </Word> (symbolization is most specific)
                </Line>
            </Paragraph>
            <Heading>Case 3: Subject Is Object</Heading>
            <CodeBox>
                {`s != r != o == s`}
            </CodeBox>
            <Paragraph>When subject and object coincide but the relationship remains external:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`ref =eq> ref`}
            </CodeBox>
            <Paragraph>
                Here <Word>
                    <Verbatim />
                    ref
                </Word> (referent) serves as both subject and object, related through <Word>
                    <Verbatim />
                    eq
                </Word> (equality). This captures self-reference through an external relationship, establishing <Word>
                    <Verbatim />
                    (ref,ref) == eq
                </Word>.
            </Paragraph>
            <Heading>Case 4: Relationship Is Object</Heading>
            <CodeBox>
                {`s != r == o != s`}
            </CodeBox>
            <Paragraph>The relationship itself becomes the object of reference:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =rep> rep`}
            </CodeBox>
            <Paragraph>
                Here <Word>
                    <Verbatim />
                    sym
                </Word> relates to <Word>
                    <Verbatim />
                    rep
                </Word> (representation), but <Word>
                    <Verbatim />
                    rep
                </Word> serves as both relationship type and object. This captures how symbols are "part of"
                representations, like elements in a collection.
            </Paragraph>
            <Paragraph>From this:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        rep =rel&gt; rel
                    </Word> (representations are relationships)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =obj&gt; obj
                    </Word> (representations are objects)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sym,rep) == rep
                    </Word> (representation is most specific)
                </Line>
            </Paragraph>
            <Heading>Case 5: All Equal</Heading>
            <CodeBox>
                {`s == r == o == s`}
            </CodeBox>
            <Paragraph>Complete self-reference where an entity relates to itself through itself:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`eq =eq> eq`}
            </CodeBox>
            <Paragraph>Also satisfied by:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`rel =rel> rel`}
            </CodeBox>
            <Paragraph>
                These are self-grounding relationships—semantic bedrock where reference needs no external support.
            </Paragraph>
            <Heading>III. Properties and Self-Reference</Heading>
            <Heading>Properties as Self-Referential Relationships</Heading>
            <Paragraph>
                When a referent relates to itself through a relationship type, it has that type as a property:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =p> x means "x has property p"`}
            </CodeBox>
            <Paragraph>From our cases:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =sub&gt; sub
                    </Word> (subject has subjecthood property)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =obj&gt; obj
                    </Word> (object has objecthood property)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word> (equality has equality property)
                </Line>
            </Paragraph>
            <Heading>The sub == (rel) Hypothesis</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    sub
                </Word> is actually the canonical symbol for <Word>
                    <Verbatim />
                    rel
                </Word>, then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =sub&gt; rel
                    </Word> would mean subjecthood represents relationships
                </Line>
                <Line>Being a subject fundamentally means being in a relationship</Line>
                <Line>
                    This would explain why <Word>
                        <Verbatim />
                        sub =sub&gt; sub
                    </Word> holds (symbols self-refer)
                </Line>
            </Paragraph>
            <Heading>IV. Reference and Representation</Heading>
            <Heading>Definition of Reference</Heading>
            <Paragraph>A relationship is referential when it connects a representation to what it represents:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`If rep =t> obj and t -> rep, then t is referential
If t == (rep,obj), then rep refers to obj`}
            </CodeBox>
            <Paragraph>Thus:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word> is referential (symbols refer to literals)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =eq&gt; x
                    </Word> is NOT referential (equality isn't representation)
                </Line>
            </Paragraph>
            <Heading>Inheritance Without Recursion</Heading>
            <Paragraph>For relationship types, inheritance is defined through reference chains:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`s -> t := s =rel> t || s == t`}
            </CodeBox>
            <Paragraph>
                This avoids recursion while achieving the necessary structure. If types possess canonical symbols of what
                they inherit from:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`s =rel> t =|> s =(t)> s`}
            </CodeBox>
            <Paragraph>Then inheritance becomes symbol possession rather than recursive definition.</Paragraph>
            <Heading>V. The Eight-Referent Model</Heading>
            <Paragraph>From the five cases emerge exactly eight fundamental referents:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        eq
                    </Word> - equality (self-grounding)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ref
                    </Word> - referent (universal type)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        sub
                    </Word> - subject (archetypal subject)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        rel
                    </Word> - relationship (archetypal relationship)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        obj
                    </Word> - object (archetypal object)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        sym
                    </Word> - symbol (dual subject/relationship)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        rep
                    </Word> - representation (dual relationship/object)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        lit
                    </Word> - literal (pure object)
                </Line>
            </Paragraph>
            <Heading>Core Relationships</Heading>
            <Paragraph>The fundamental relationships established:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sub =rel> obj          // archetypal trinity
sym =sym> lit          // symbolization
ref =eq> ref           // self-equality
sym =rep> rep          // symbol in representation
rel =rel> rel          // relationships relate
eq =eq> eq             // equality equals`}
            </CodeBox>
            <Heading>Derived Structure</Heading>
            <Paragraph>From these fundamentals:</Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =rel> rel          // symbols are relationships
rep =rel> rel          // representations are relationships
eq =rel> rel           // equality is a relationship
sym =sub> sym          // symbols are subjects
lit =obj> lit          // literals are objects`}
            </CodeBox>
            <Heading>VI. Theoretical Significance</Heading>
            <Heading>Semantic Discovery vs. Formal Stipulation</Heading>
            <Paragraph>
                The five cases aren't chosen—they're mathematically exhaustive. The eight referents aren't invented—they're
                discovered as necessary for each structural pattern to be semantically coherent. This suggests meaning has a
                determinate foundational structure.
            </Paragraph>
            <Heading>Types vs. Instances</Heading>
            <Paragraph>
                The referents represent types, not instances. Just as the type "Number" doesn't have numeric operations, the
                type <Word>
                    <Verbatim />
                    sub
                </Word> doesn't automatically have subjecthood. This distinction is crucial for understanding the model's
                semantics.
            </Paragraph>
            <Heading>Extensibility</Heading>
            <Paragraph>
                The model provides a framework rather than a closed system. Canonical symbols can be added when needed:
                <Word>
                    <Verbatim />
                    (obj)
                </Word>, <Word>
                    <Verbatim />
                    (sub)
                </Word>, etc. This extensibility allows richer semantic structures while maintaining the foundational
                architecture.
            </Paragraph>
            <Heading>VII. Consistency and Completeness</Heading>
            <Heading>What the Model Achieves</Heading>
            <Paragraph>With just eight referents and their relationships, we capture:</Paragraph>
            <Paragraph>
                <List />
                <Line>The subject-object-relationship structure</Line>
                <Line>Symbol-literal distinction</Line>
                <Line>Representation and membership</Line>
                <Line>Properties and types</Line>
                <Line>Self-reference and grounding</Line>
            </Paragraph>
            <Heading>Sparse Relationships</Heading>
            <Paragraph>
                Not every pair of referents has a defined relationship beyond equality. This sparsity is semantically
                meaningful—not everything relates to everything else. The model includes only necessary semantic
                relationships.
            </Paragraph>
            <Heading>The Bootstrap Principle</Heading>
            <Paragraph>
                SRT aims for axioms that are vacuously true in an empty catalogue but become substantive when relationships
                are added:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[x,y,t]: x =t> y =|> E[eq]: A[a,b]: a = b <iff> a =eq> b`}
            </CodeBox>
            <Paragraph>From a single relationship, the entire semantic structure emerges.</Paragraph>
            <Heading>VIII. Conclusion</Heading>
            <Paragraph>
                This systematic exploration of the five structural cases reveals that reference has a determinate
                foundational structure. The eight referents and their relationships form a minimal complete model for
                semantic reference—discovered through systematic analysis rather than stipulated through arbitrary
                axiomatization.
            </Paragraph>
            <Paragraph>
                The model demonstrates that meaning can be built from within, using reference to construct the very concepts
                needed to understand reference. This reflexive construction, rather than being circular, reveals the
                foundational architecture of meaning itself.
            </Paragraph>
        </Section>
    </Chapter>
);
