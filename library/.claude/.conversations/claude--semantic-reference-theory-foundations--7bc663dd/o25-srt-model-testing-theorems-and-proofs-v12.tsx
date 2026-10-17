import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SRT Model Testing - Theorems and Proofs v12 ]]</Title>
        <Section>
            <Opaque />
            <Heading>SRT Model Testing - Theorems and Proofs at version 12</Heading>
            <Heading>SRT Theory Building - Closing the Gaps</Heading>
            <Heading>The Core Challenge</Heading>
            <Paragraph>
                With 8 referents and ternary relation R(x,y,t), we have 8³ = 512 possible relationships. But not all are
                semantically valid! As you showed with !=rel&gt;, some "relationships" lead to contradictions.
            </Paragraph>
            <Heading>Iteration 11: Systematic Gap Analysis</Heading>
            <Heading>Testing Subject/Object Assignment</Heading>
            <Paragraph>
                For <Word>
                    <Verbatim />
                    sym =sym&gt; lit
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    sym must have subjecthood: <Word>
                        <Verbatim />
                        sym =sub&gt; sym
                    </Word>
                </Line>
                <Line>
                    lit must have objecthood: <Word>
                        <Verbatim />
                        lit =obj&gt; lit
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>But what determines these assignments? Let me test an axiom:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Proposed
                </Word>: <Word>
                    <Verbatim />
                    A(&#91;x,y,r&#93;: x =r&gt; y &amp; x !== y): x =sub&gt; x &amp; y =obj&gt; y
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Problem
                </Word>: This is universal quantification over ALL relationships!
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Resolution
                </Word>: Maybe we only need it for our 8 referents:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`sym =sub> sym & lit =obj> obj & sub =sub> sub & obj =obj> obj`}
            </CodeBox>
            <Heading>Gap 1: What relates sub to sub?</Heading>
            <Paragraph>
                We have <Word>
                    <Verbatim />
                    sub =sub&gt; sub
                </Word> but what does this mean semantically?
            </Paragraph>
            <Paragraph>
                <List />
                <Line>"Subject has the property of subjecthood"</Line>
                <Line>This is self-referential but not contradictory</Line>
                <Line>
                    It's like <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word> - foundational self-reference
                </Line>
            </Paragraph>
            <Heading>Gap 2: Missing cross-relationships</Heading>
            <Paragraph>What about:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        lit =?&gt; sym
                    </Word> - Do literals relate to symbols?
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        obj =?&gt; sub
                    </Word> - Do objects relate to subjects?
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =?&gt; lit
                    </Word> - Do representations relate to literals?
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Hypothesis
                </Word>: Not all pairs need relationships!
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Some pairs might have NO semantic relationship</Line>
                <Line>
                    The absence of <Word>
                        <Verbatim />
                        x =t&gt; y
                    </Word> for any t is meaningful
                </Line>
            </Paragraph>
            <Heading>Iteration 12: Testing Completeness</Heading>
            <Heading>Can everything have a canonical symbol?</Heading>
            <Paragraph>
                Testing <Word>
                    <Verbatim />
                    (obj)
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Should satisfy: <Word>
                        <Verbatim />
                        (obj) =(obj)&gt; obj
                    </Word>
                </Line>
                <Line>Must be one of our 8 referents</Line>
                <Line>
                    Could <Word>
                        <Verbatim />
                        (obj) == lit
                    </Word>?
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Then <Word>
                            <Verbatim />
                            lit =lit&gt; obj
                        </Word>
                    </Line>
                    <Line>"The literal represents objecthood literally"</Line>
                    <Line>This makes semantic sense!</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                Testing <Word>
                    <Verbatim />
                    (sub)
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Should satisfy: <Word>
                        <Verbatim />
                        (sub) =(sub)&gt; sub
                    </Word>
                </Line>
                <Line>
                    Could <Word>
                        <Verbatim />
                        (sub) == sym
                    </Word>?
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Then <Word>
                            <Verbatim />
                            sym =sym&gt; sub
                        </Word>
                    </Line>
                    <Line>"The symbol symbolizes subjecthood"</Line>
                    <Line>
                        But we already have <Word>
                            <Verbatim />
                            sym =sym&gt; lit
                        </Word>
                    </Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Problem
                </Word>: sym can't symbolize everything!
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Resolution
                </Word>: Maybe canonical symbols are extensional
            </Paragraph>
            <Paragraph>
                <List />
                <Line>We can ADD (obj) when needed</Line>
                <Line>Core 8 referents sufficient for base semantics</Line>
            </Paragraph>
            <Heading>Iteration 13: Inheritance Structure</Heading>
            <Heading>Testing rel-chains</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    sym =rel&gt; rel
                </Word> and <Word>
                    <Verbatim />
                    rel =rel&gt; rel
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Does <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word> (redundant but true)
                </Line>
            </Paragraph>
            <Paragraph>
                If we had <Word>
                    <Verbatim />
                    crimson =rel&gt; red
                </Word> and <Word>
                    <Verbatim />
                    red =rel&gt; color
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    By transitivity: <Word>
                        <Verbatim />
                        crimson =rel&gt; color
                    </Word>
                </Line>
                <Line>
                    Need axiom: <Word>
                        <Verbatim />
                        A&#91;x,y,z&#93;: x =rel&gt; y &amp; y =rel&gt; z =|&gt; x =rel&gt; z
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Testing symbol possession</Heading>
            <Paragraph>
                If <Word>
                    <Verbatim />
                    sym =rel&gt; rel
                </Word>, then by principle:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =(rel)&gt; sym
                    </Word>
                </Line>
                <Line>sym possesses the symbol for relationships</Line>
            </Paragraph>
            <Paragraph>But what IS (rel)?</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Hypothesis
                </Word>: Maybe (rel) == sub
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sub =sub&gt; rel
                    </Word> would mean "subjecthood represents relationships"
                </Line>
                <Line>Semantically: being a subject IS being in a relationship!</Line>
            </Paragraph>
            <Heading>Iteration 14: Refined Model</Heading>
            <Heading>Core Semantic Facts</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Equality
                    </Word>: <Word>
                        <Verbatim />
                        eq =eq&gt; eq
                    </Word> (self-founding)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Reference
                    </Word>: <Word>
                        <Verbatim />
                        ref =eq&gt; ref
                    </Word> (referents equal themselves)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Structure
                    </Word>: <Word>
                        <Verbatim />
                        sub =rel&gt; obj
                    </Word> (archetypal relationship)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Symbolism
                    </Word>: <Word>
                        <Verbatim />
                        sym =sym&gt; lit
                    </Word> (symbols symbolize literals)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Representation
                    </Word>: <Word>
                        <Verbatim />
                        sym =rep&gt; rep
                    </Word> (symbols are representations)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Relations
                    </Word>: <Word>
                        <Verbatim />
                        rel =rel&gt; rel
                    </Word> (relationships relate)
                </Line>
            </Paragraph>
            <Heading>Derived Facts</Heading>
            <Paragraph>From relationship type principle:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =rel&gt; rel
                    </Word> (symbols are relationships)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =rel&gt; rel
                    </Word> (representations are relationships)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        eq =rel&gt; rel
                    </Word> (equality is a relationship)
                </Line>
            </Paragraph>
            <Paragraph>From subject/object properties:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        sym =sub&gt; sym
                    </Word> (symbols are subjects)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        lit =obj&gt; lit
                    </Word> (literals are objects)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        rep =obj&gt; obj
                    </Word> (representations are objects)
                </Line>
            </Paragraph>
            <Heading>Most Specific Relationships</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        (sub,obj) == rel
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (sym,lit) == sym
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (ref,ref) == eq
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (rel,rel) == rel
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (eq,eq) == eq
                    </Word>
                </Line>
            </Paragraph>
            <Heading>Iteration 15: Toward Empty Catalogue</Heading>
            <Paragraph>You said we want to eliminate constants from the language:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        ==
                    </Word> and <Word>
                        <Verbatim />
                        !==
                    </Word> replace eq (as operators)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        x =&gt; y
                    </Word> replaces need for rel constant
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (x)
                    </Word> replaces need for explicit symbols
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        (x,y)
                    </Word> replaces need for most-specific
                </Line>
            </Paragraph>
            <Paragraph>But we still need to axiomatize their behavior!</Paragraph>
            <Heading>Proposed Axioms (No Constants)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    A1 (Equality Exists)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq]: A[x,y]: x = y <iff> x =eq> y`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    A2 (Relationships Exist)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[r]:E[x,y]: x =r> y =|> r =r> r`}
            </CodeBox>
            <Paragraph>"If any relationship exists, there's an r that self-relates"</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A3 (Subjects and Objects)
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[x,y,r]: x =r> y & x !== y =|> 
  E[s,o]: x =s> x & y =o> o & s =s> s & o =o> o`}
            </CodeBox>
            <Paragraph>"Distinct relationships create subject/object properties"</Paragraph>
            <Heading>Problem: Too Abstract!</Heading>
            <Paragraph>Without concrete referents, how do we ensure:</Paragraph>
            <Paragraph>
                <List />
                <Line>Symbols exist?</Line>
                <Line>Literals exist?</Line>
                <Line>The symbol-literal relationship?</Line>
            </Paragraph>
            <Heading>Iteration 16: The Bootstrap Problem</Heading>
            <Paragraph>We need SOME relationships to exist to bootstrap the system:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Minimal Bootstrap
                </Word>:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}E[x,y,r]: x =r> y & x !== y & r !== eq`}
            </CodeBox>
            <Paragraph>"At least one non-equality relationship exists"</Paragraph>
            <Paragraph>This forces:</Paragraph>
            <Paragraph>
                <List />
                <Line>Subject property exists</Line>
                <Line>Object property exists</Line>
                <Line>Relationship types exist</Line>
                <Line>Most specific relationships exist</Line>
            </Paragraph>
            <Paragraph>But it doesn't specify WHICH relationships!</Paragraph>
            <Heading>Gap Analysis</Heading>
            <Heading>Identified Gaps</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Symbol-Literal
                    </Word>: Without specifying sym and lit, we lose the concrete semantics
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Canonical Symbols
                    </Word>: Can't prove they exist without more structure
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cross-relationships
                    </Word>: Many pairs have no defined relationship
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Extensibility
                    </Word>: How do new referents get added?
                </Line>
            </Paragraph>
            <Heading>Semantic Interpretations</Heading>
            <Paragraph>
                Gap 1 suggests: We need at least one "symbolizing" relationship Gap 2 suggests: Canonical symbols might be
                extensional, not foundational Gap 3 suggests: Not all pairs need relationships (sparse model) Gap 4
                suggests: SRT is a framework, not a closed system
            </Paragraph>
            <Heading>Iteration 17: Minimal Complete Model?</Heading>
            <Heading>What's absolutely necessary?</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Equality
                    </Word>: Without it, no identity
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        At least one relationship
                    </Word>: Without it, no structure
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Subject/object distinction
                    </Word>: Without it, no directionality
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Some form of representation
                    </Word>: Without it, no meaning
                </Line>
            </Paragraph>
            <Heading>Proposed Minimal Set</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[eq,s,r,o]: 
  A[x,y]: x = y <iff> x =eq> y &
  s =r> o & s !== r & r !== o & o !== s &
  s =s> s & o =o> o & r =r> r`}
            </CodeBox>
            <Paragraph>This gives:</Paragraph>
            <Paragraph>
                <List />
                <Line>Equality (eq)</Line>
                <Line>One relationship (r between s and o)</Line>
                <Line>Subject property (s)</Line>
                <Line>Object property (o)</Line>
                <Line>Self-reference patterns</Line>
            </Paragraph>
            <Paragraph>But no symbols or literals yet!</Paragraph>
            <Heading>Adding Symbolism</Heading>
            <CodeBox
                language="srt"
            >
                {`${''}E[sym,lit]: 
  sym =sym> lit & sym !== lit &
  sym =s> s & lit =o> o & sym =r> r`}
            </CodeBox>
            <Paragraph>Now we have symbol-literal relationship!</Paragraph>
            <Heading>Current Status</Heading>
            <Paragraph>The model is getting cleaner but we still have tensions:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Want empty catalogue but need bootstrap relationships</Line>
                <Line>Want everything to have potential symbols but can't prove they exist</Line>
                <Line>Want closed model but need extensibility</Line>
            </Paragraph>
            <Paragraph>These might not be bugs but features - SRT as framework rather than fixed system!</Paragraph>
        </Section>
    </Chapter>
);
