import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ The Semantics of Representation v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>The Semantics of Representation at version 2</Heading>
            <Heading>The Semantics of Representation</Heading>
            <Heading>Prelude</Heading>
            <Paragraph>
                A representation is not a pointer but a universe. When we create L to represent something, we birth three
                semantic realms: what is represented, how it is structured, and why it functions. These realms—frames in our
                formal language—interweave to create meaning from reference.
            </Paragraph>
            <Heading>The Architecture</Heading>
            <Paragraph>Given representation L, three frames emerge:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    F&#91;&#91;L&#93;&#93;
                </Word> where &#91;L&#93; is the subject—what L represents <Word>
                    <Bold />
                    F&#91;L&#93;
                </Word> where L is the structure—the representation itself <Word>
                    <Bold />
                    F&#91;(L)&#93;
                </Word> where (L) is the canonical symbol—L's name or handle
            </Paragraph>
            <Paragraph>
                By the nature of frames, relationships inherit from the frame's subject. This inheritance creates semantic
                unity within each realm while maintaining their distinction.
            </Paragraph>
            <Heading>I. The Subject Frame F&#91;&#91;L&#93;&#93;</Heading>
            <Paragraph>
                In F&#91;&#91;L&#93;&#93;, we encounter the world that exists before representation—the literals that simply
                are:
            </Paragraph>
            <CodeBox>
                {`        rose
       /    \\
      is     has
     /        \\
   red      petals
    |         |
   is       curved
    |         |
  color    geometric`}
            </CodeBox>
            <Paragraph>
                Here live the facts: rose, red, petals, their relationships. By frame definition, all relationship types
                inherit from &#91;L&#93;. But F&#91;&#91;L&#93;&#93; demands more:
            </Paragraph>
            <CodeBox
                language="srt"
            >
                {`${''}F[[L]]: x =t> y & y != x =|> x -> [L]`}
            </CodeBox>
            <Paragraph>
                Not just relationships but active subjects join the subject domain. This double inheritance—of relationships
                and their subjects—captures the complete territory our representation will map.
            </Paragraph>
            <Heading>II. The Representation Frame F&#91;L&#93;</Heading>
            <Paragraph>In F&#91;L&#93;, L reveals itself as a structured cosmos:</Paragraph>
            <CodeBox>
                {`                    L
        ╱───────────┼───────────╲
       ╱            │            ╲
Literature    Catalogue    Composition
     |            |              |
  {rose,       {(rose),      characters
   red,         (red),       that interact:
   petals}      (petals)}    c₁ ═ c₂ ═ c₃`}
            </CodeBox>
            <Paragraph>
                But here's the profound truth: Literature(L) transpiles to ((L), Literature)—it is L's canonical
                relationship to the concept of literature itself. Similarly for Catalogue(L), Composition(L), and
                Specification(L). The representation doesn't merely contain these components; it embodies its relationships
                to these semantic concepts.
            </Paragraph>
            <Heading>The Literature Paradox</Heading>
            <CodeBox
                language="srt"
            >
                {`x =|in> Literature(L) =|> x !-> L`}
            </CodeBox>
            <Paragraph>
                Elements in Literature don't inherit from L—they remain literal, untouched by representation. They are what
                is represented, not the representing machinery. Like books in a library that speak of distant lands without
                those lands being present.
            </Paragraph>
            <Heading>The Catalogue Symphony</Heading>
            <CodeBox
                language="srt"
            >
                {`x =|in> Catalogue(L) =|> ∃y ∈ Literature(L): x =(x)> y`}
            </CodeBox>
            <Paragraph>
                Every symbol in the Catalogue references something in Literature. The symbol (rose) refers to rose through
                (rose) =(rose)&gt; rose, yet they remain distinct—one in the realm of representation, one in the realm of
                the represented.
            </Paragraph>
            <Heading>The Composition Dance</Heading>
            <CodeBox
                language="srt"
            >
                {`character₁ =interacts> character₂
character₂ =interacts> character₃`}
            </CodeBox>
            <Paragraph>
                Characters exist only in interaction. They touch, combine, flow into each other to birth symbols. In text,
                letters interact sequentially. In images, pixels interact spatially. In concepts, primitives interact
                structurally. No character stands alone.
            </Paragraph>
            <Heading>III. The Specification Frame F&#91;(L)&#93;</Heading>
            <Paragraph>In F&#91;(L)&#93;, we ascend to meta-representation—the specification of how L operates:</Paragraph>
            <CodeBox>
                {`(Catalogue(L), Literature(L)) == Catalogue(L)`}
            </CodeBox>
            <Paragraph>
                This equation is not description but identity. The Catalogue IS the most specific relationship between
                itself and Literature. It doesn't represent Literature; it embodies the act of representation.
            </Paragraph>
            <Paragraph>Here we specify:</Paragraph>
            <Paragraph>
                <List />
                <Line>How symbols reference (denotation, metaphor, structure)</Line>
                <Line>How characters interact (sequential, spatial, hierarchical)</Line>
                <Line>How meaning emerges from pattern</Line>
            </Paragraph>
            <Heading>IV. The Rose Representation</Heading>
            <Paragraph>Let us represent a rose across all three frames:</Paragraph>
            <Heading>In F&#91;&#91;L&#93;&#93;: The Rose Itself</Heading>
            <CodeBox>
                {`rose ─has─> petals ─are─> curved
  │                         │
  is                     geometric
  │                         │
  v                         v
red ─────is────> color ←──is── green
  │                              │
  └──────contrast────────────────┘`}
            </CodeBox>
            <Paragraph>The literals and their relationships exist independent of any representation.</Paragraph>
            <Heading>In F&#91;L&#93;: The Rose Represented</Heading>
            <CodeBox>
                {`Literature(L) = {rose, red, petals, curved, green}

Catalogue(L):
    (rose) ══> rose
    (red) ══> red
    (petals) ══> petals
    
Composition(L):
    (rose) contains:
        r₁ —interacts→ r₂ —interacts→ r₃
                ↓
        (forms outline of flower)
        
    (red) contains:
        c₁ —interacts→ c₂
        (wavelength: 700nm)
        
    (green) contains:
        (blue) —similar→ (yellow)
        (mixed within)`}
            </CodeBox>
            <Paragraph>
                The representation builds symbols from interacting characters, each symbol referencing its literal through
                its own canonical relationship.
            </Paragraph>
            <Heading>In F&#91;(L)&#93;: The Rose Specification</Heading>
            <CodeBox
                language="srt"
            >
                {`Reference(L) =specifies> "visual resemblance"
Pattern(L) =specifies> "spatial composition"
Interaction(L) =specifies> "color mixing through containment"

Symbol(L):
    (rose) composed of outline characters
    (red) composed of wavelength characters
    (green) composed of (blue) and (yellow)`}
            </CodeBox>
            <Paragraph>
                The specification defines how this particular representation achieves reference through visual similarity
                and spatial organization.
            </Paragraph>
            <Heading>V. The Connectivity Principle</Heading>
            <Paragraph>In F&#91;L&#93;, all elements connect:</Paragraph>
            <CodeBox>
                {`        L
        │
    ┌───┼───┐
    │   │   │
  (red)(rose)(green)
    │  ╱│╲   │
    │ ╱ │ ╲  │
    shared characters
    forming unified
    representation`}
            </CodeBox>
            <Paragraph>
                Disconnected elements cannot coexist in one representation—they form separate representations. When (green)
                contains (blue) and (yellow), and these interact through similarity, the web of connection spreads through
                the entire structure.
            </Paragraph>
            <Heading>VI. The Separation Theorem</Heading>
            <Paragraph>Across frames, absolute distinction:</Paragraph>
            <CodeBox>
                {`${''}red ≠ (red) ≠ specification of red
[L] ≠ L ≠ (L)`}
            </CodeBox>
            <Paragraph>
                The literal red exists in F&#91;&#91;L&#93;&#93;. The symbol (red) exists in F&#91;L&#93;. The specification
                of how (red) works exists in F&#91;(L)&#93;. They are three faces of meaning, forever distinct yet forever
                connected through reference.
            </Paragraph>
            <Heading>VII. Representational Variations</Heading>
            <Paragraph>Same Literature, different expressions:</Paragraph>
            <CodeBox>
                {`L₁ (painting):          L₂ (haiku):           L₃ (equation):
Catalogue: colors       Catalogue: words      Catalogue: variables
Composition: pixels     Composition: syllables Composition: operators
Reference: visual       Reference: metaphoric  Reference: structural`}
            </CodeBox>
            <Paragraph>
                The rose remains rose. The representations dance different dances, each true to its own nature while
                maintaining fidelity to what they represent.
            </Paragraph>
            <Heading>VIII. The Beauty of the Architecture</Heading>
            <Paragraph>
                This three-frame structure achieves something remarkable: it separates what must be distinct while
                connecting what must be unified. The subject exists independent of representation (F&#91;&#91;L&#93;&#93;).
                The representation has internal structure (F&#91;L&#93;). The specification governs operation
                (F&#91;(L)&#93;). Yet through the inheritance patterns of frames and the reference relationships between
                symbols and literals, meaning emerges.
            </Paragraph>
            <Paragraph>A representation is thus revealed as more than a sign pointing at a signified. It is:</Paragraph>
            <Paragraph>
                <List />
                <Line>A structured collection (L as container)</Line>
                <Line>A reference system (Catalogue as symbol for Literature)</Line>
                <Line>A composition (characters interacting)</Line>
                <Line>A specification (how reference is achieved)</Line>
            </Paragraph>
            <Paragraph>
                All existing simultaneously across three semantic realms, each complete in itself yet incomplete without the
                others.
            </Paragraph>
            <Heading>IX. Formal Properties</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Well-formedness
                </Word>: L is well-formed iff it contains Literature, Catalogue, Composition, and Specification, with all
                elements connected.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Completeness
                </Word>: Every element in Literature has a corresponding symbol in Catalogue.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Coherence
                </Word>: All relationship types within each frame inherit from that frame's subject.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Separation
                </Word>: Elements in different frames remain distinct despite reference relationships.
            </Paragraph>
            <Heading>Coda</Heading>
            <Paragraph>
                The semantics of representation reveals representation as an act of creation, not mere pointing. To
                represent is to establish three worlds and weave them into meaning. The literal world of what is. The
                symbolic world of what represents. The specifying world of how representation occurs. Together, they form
                the complete semantic architecture through which meaning moves from world to mind to expression and back
                again.
            </Paragraph>
            <Paragraph>
                In this architecture, the library metaphor finds its deepest truth. Literature exists. Catalogues organize
                access. Composition builds the symbols. Specification defines the rules. And through it all, meaning
                flows—not as something added to structure but as what emerges when structure, subject, and specification
                dance together in the three-frame symphony of representation.
            </Paragraph>
        </Section>
    </Chapter>
);
