import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Pattern Architecture Decisions v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Pattern Architecture Decisions at version 3</Heading>
            <Heading>Pattern Architecture Decisions</Heading>
            <Heading>Core Concepts</Heading>
            <Heading>What is a Pattern?</Heading>
            <Paragraph>
                <List />
                <Line>A pattern is a unique compilation of elements + lattice + parameters</Line>
                <Line>Each build creates a new pattern (no versioning, no IDs)</Line>
                <Line>Adding/removing features means compiling a new pattern</Line>
            </Paragraph>
            <Heading>Elements (not motifs)</Heading>
            <Paragraph>
                <List />
                <Line>Raw SVG shapes that get transformed</Line>
                <Line>The lattice determines how elements are placed/transformed</Line>
                <Line>Elements are embedded at compile time</Line>
            </Paragraph>
            <Heading>Parameters</Heading>
            <Paragraph>
                <List />
                <Line>Discovered during design, not predetermined</Line>
                <Line>Each pattern has unique parameters (could be anything)</Line>
                <Line>Parameters are compiled in - if not selected, code doesn't exist</Line>
            </Paragraph>
            <Heading>Next Steps</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Define lattice types
                    </Word> - What transformation rules do we support?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Create parameter compiler
                    </Word> - How do we selectively include code?
                </Line>
            </Paragraph>
            <Heading>Lattice System</Heading>
            <Heading>Core Concept</Heading>
            <Paragraph>
                <List />
                <Line>Every lattice generates tiles (closed regions)</Line>
                <Line>Every tile has a center point</Line>
                <Line>Elements map to tiles based on lattice symmetry</Line>
            </Paragraph>
            <Heading>Bootstrap Approach - Start Simple</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Phase 1: Square Grid
                </Word>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`interface SquareLattice {
  tileSize: number      // Size of each square
  repeats: number       // How many tiles to show (NxN)
}`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Phase 2: Add Symmetry Operations
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Rotation at tile centers (0, 90, 180, 270 for square)</Line>
                <Line>Reflection across tile axes</Line>
                <Line>Element follows tile's transformation</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phase 3: Composable Lattices
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Lattice can contain sub-lattices</Line>
                <Line>Enables fractal patterns</Line>
                <Line>Parent lattice transforms child lattice</Line>
            </Paragraph>
            <Heading>SVG Structure for Illustrator</Heading>
            <Heading>Approach: Symbol + Use</Heading>
            <CodeBox
                language="svg"
            >
                {`<svg>
  <defs>
    <symbol id="element" viewBox="0 0 100 100">
      <!-- Element definition goes here -->
    </symbol>
  </defs>
  
  <!-- Instance for each tile -->
  <use href="#element" x="0" y="0" transform="rotate(0)"/>
  <use href="#element" x="100" y="0" transform="rotate(90)"/>
  <!-- Only generate what's needed for one seamless tile -->
</svg>`}
            </CodeBox>
            <Heading>Why This Works</Heading>
            <Paragraph>
                <List />
                <Line>
                    Illustrator preserves <Word>
                        <Verbatim />
                        &lt;use&gt;
                    </Word> as instances (smaller file)
                </Line>
                <Line>We only define the element once</Line>
                <Line>
                    Each <Word>
                        <Verbatim />
                        &lt;use&gt;
                    </Word> can have its own transform
                </Line>
                <Line>Export one tile = seamless pattern ready</Line>
            </Paragraph>
            <Heading>For Display vs Export</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Display
                    </Word>: Generate many tiles for viewport
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Export
                    </Word>: Generate ONE perfect seamless tile
                </Line>
                <Line>Let Illustrator's pattern tool handle the infinite repeat</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
