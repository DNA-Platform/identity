import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-17T10:10:53.195955Z"
        >
            <Origin>019ed50f-ec88-798b-b339-d195607de3e5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How do graph databases model recursive hierarchies where nodes define rules for their own organization?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-17T10:14:37.637623Z"
        >
            <Origin>019ed50f-ec88-7203-8e17-0efa94740d01</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Recursive hierarchies are the case graph databases are built for, so it's worth separating the easy half of
                your question from the interesting half.
            </Paragraph>
            <Paragraph>
                The easy half: a hierarchy is just nodes joined by directed edges of one relationship type — <Word>
                    <Verbatim />
                    (child)-&#91;:CHILD_OF&#93;-&gt;(parent)
                </Word>. What makes it <Word>
                    <Emphasis />
                    recursive
                </Word> is that the same edge type chains to arbitrary depth and the engine traverses that chain without you
                specifying how deep. <Word>
                    <Verbatim />
                    MATCH (n)-&#91;:CHILD_OF*&#93;-&gt;(ancestor)
                </Word> walks the entire ancestor path regardless of length — the thing SQL does awkwardly with recursive
                CTEs and graph engines do natively. A node with several parents turns the tree into a DAG; if edges can
                cycle you've left "hierarchy" behind and need bounded depth (<Word>
                    <Verbatim />
                    *..n
                </Word>) or explicit cycle detection to keep traversal well-defined.
            </Paragraph>
            <Paragraph>
                The interesting half is "nodes define rules for their own organization" — reflexive structure, where part of
                the graph describes how the rest is arranged. There's a ladder here, increasing in power and in how much the
                <Word>
                    <Emphasis />
                    database itself
                </Word> understands the rules rather than your application code.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Rules as properties.
                </Word> The crude version: a node carries <Word>
                    <Verbatim />
                    orderingRule: "date_desc"
                </Word> or <Word>
                    <Verbatim />
                    inheritancePolicy: "override"
                </Word>. Cheap, but the rule is opaque to the engine — only your code interprets it, and traversal can't
                reason about it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Rules as nodes (reification).
                </Word> Promote the rule to a first-class node and point at it: <Word>
                    <Verbatim />
                    (Category)-&#91;:GOVERNED_BY&#93;-&gt;(Rule)
                </Word>. Now rules are queryable, shareable across many nodes, and versionable — and a rule node can itself
                sit in a hierarchy, giving you a meta-hierarchy traversable by the same queries as the data. This is the
                move that makes the reflexivity real rather than cosmetic.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Inheritance / resolution.
                </Word> Once a node can define a rule, the question is whether descendants inherit it, and that's resolved
                at query time by walking up the ancestor chain to the nearest node that defines the relevant rule —
                most-specific-wins, the same pattern as the CSS cascade, prototypal inheritance, or lexical scope:
            </Paragraph>
            <CodeBox
                language="cypher"
            >
                {`${''}MATCH path = (n)-[:CHILD_OF*0..]->(a)
WHERE a.orderingRule IS NOT NULL
RETURN a.orderingRule ORDER BY length(path) LIMIT 1`}
            </CodeBox>
            <Paragraph>
                The hard part isn't the walk; it's the conflict policy when two ancestors disagree. You need a deterministic
                rule — nearest wins, explicit precedence, or monotonic union — and you have to pick, because the graph won't
                pick for you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Metacircularity.
                </Word> The deepest version is where the rules and the data they govern are the <Word>
                    <Emphasis />
                    same kind of thing
                </Word> — same node space, same relationship types — so the graph describes itself:
            </Paragraph>
            <Action>Used visualize:read me</Action>
            <Paragraph>
                The deepest version is where the rules and the data they govern are the <Word>
                    <Emphasis />
                    same kind of thing
                </Word> — same node space, same relationship types — so the graph describes itself:
            </Paragraph>
            <Action>Used visualize:show widget</Action>
            <Paragraph>
                RDF/OWL is the canonical realization. <Word>
                    <Verbatim />
                    rdfs:subClassOf
                </Word> and <Word>
                    <Verbatim />
                    rdf:type
                </Word> are themselves resources, the ontology — the rules — lives in the same triple store as the
                instances, and SPARQL queries both levels uniformly. An OWL reasoner gives you actual inheritance: define a
                property on a class and it's entailed for every subclass and instance below it. SHACL pushes further, making
                the "shapes" that constrain a graph into graphs themselves. TypeDB builds a type system with inheritance
                directly into the data model and runs inference rules as part of the schema — about as literal a realization
                of "nodes defining the rules for their own organization" as exists in a shipping product.
            </Paragraph>
            <Paragraph>Three conceptual hazards become unavoidable once rules can reference rules:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Levels stop being structural.
                    </Word> Data versus metadata is no longer about how anything is stored — it's just which relationship
                    you're following. Powerful, but without discipline (named graphs, explicit typing) you lose track of
                    which level you're on.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Termination and well-definedness.
                    </Word> A rule that governs its own organization can land you evaluating the rule in a context that
                    contains the rule. That's a fixpoint problem, and it's why Datalog uses least-fixpoint semantics with
                    stratified negation — to keep the meaning well-defined. Without something equivalent, self-reference
                    gives you the database version of "this sentence is false."
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Materialize or evaluate.
                    </Word> Forward-chain (run the rules and store the derived edges) or backward-chain (resolve at query
                    time)? Storage and staleness against query cost. OWL reasoners tend to materialize; Datalog and Datomic
                    can do either.
                </Line>
            </Paragraph>
            <Paragraph>
                So the real spectrum runs from "rules are inert strings the application reads" to "rules are nodes the
                engine reasons over" to "the graph is its own schema." The further right you go, the more the database does
                the organizing instead of your code — and the more you inherit the obligations of any self-describing
                system: a deterministic resolution order when rules conflict, and a guarantee that self-reference
                terminates.
            </Paragraph>
        </Message>
    </Chapter>
);
