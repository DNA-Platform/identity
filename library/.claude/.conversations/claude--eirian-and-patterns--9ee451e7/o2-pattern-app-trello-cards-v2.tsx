import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Pattern App Trello Cards v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Pattern App Trello Cards at version 2</Heading>
            <Heading>Pattern App Trello Cards</Heading>
            <Heading>Project Setup &amp; Structure</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create Next.js project with clean folder structure
                </Word>
            </Paragraph>
            <CodeBox>
                {`/pattern-app
  /assembly         # WASM source
  /lib             # Core logic
  /components      # React components
  /resources       # SVG files (build-time)
  /docs            # Documentation
  /pages           # Next.js pages`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Setup AssemblyScript and verify WASM works
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Install AssemblyScript</Line>
                <Line>Create assembly/index.ts</Line>
                <Line>Simple add(a,b) function</Line>
                <Line>Load in React and test</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create docs/PROJECT_STRUCTURE.md
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Document what each folder contains</Line>
                <Line>Explain build vs runtime resources</Line>
                <Line>Define module boundaries</Line>
            </Paragraph>
            <Heading>Core Pattern Logic</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Hardcode simple SVG motif in resources/motif.svg
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Create simple shape (star or triangle)</Line>
                <Line>Must tile seamlessly</Line>
                <Line>Check in to git</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create lib/pattern-engine.ts with basic tiling
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>TypeScript version first (not WASM)</Line>
                <Line>Function: createTiledPattern(motif, gridSize)</Line>
                <Line>Returns SVG string with 3x3 grid</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Display tiled pattern on canvas
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Load motif at BUILD time</Line>
                <Line>Pass to pattern-engine</Line>
                <Line>Show 3x3 grid in browser</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Port tiling logic to WASM
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>assembly/pattern-engine.ts</Line>
                <Line>Same interface as TypeScript version</Line>
                <Line>Replace TS with WASM module</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Implement seamless tiling math
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Handle edge alignment</Line>
                <Line>No gaps between tiles</Line>
                <Line>Test visually with zoom</Line>
            </Paragraph>
            <Heading>Controls &amp; Interaction</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Add grid size slider (3x3 to 10x10)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Update pattern on change</Line>
                <Line>WASM recalculates tiling</Line>
                <Line>Smooth performance</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Add zoom/pan to canvas
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>See up to 100x100 grid</Line>
                <Line>Maintain performance</Line>
                <Line>Mouse wheel zoom</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Add scale control for motif size
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Make motifs larger/smaller</Line>
                <Line>Maintain seamless tiling</Line>
                <Line>Useful for different densities</Line>
            </Paragraph>
            <Heading>Export Functionality</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Export visible canvas as SVG
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>What you see is what you get</Line>
                <Line>Download current view</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Export single tile as SVG
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Extract one seamless unit</Line>
                <Line>This is what goes to Illustrator</Line>
                <Line>Clean SVG output</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Document Illustrator compatibility
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Create docs/ILLUSTRATOR_SVG.md</Line>
                <Line>List supported features</Line>
                <Line>List what to avoid</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Restrict SVG output to Illustrator-safe subset
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>No filters, gradients, clipPaths</Line>
                <Line>Only basic shapes and paths</Line>
                <Line>Test manually in Illustrator</Line>
            </Paragraph>
            <Heading>Build System</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Embed SVG resources at build time
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Read from /resources during build</Line>
                <Line>Embed in JavaScript/WASM</Line>
                <Line>No runtime file access needed</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Setup build to use external config
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`PATTERN_CONFIG=./configs/roses.json npm run build`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>Config specifies which SVG to use</Line>
                <Line>Config specifies default parameters</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create single HTML export script
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>next export</Line>
                <Line>Inline all JS/CSS</Line>
                <Line>Embed WASM as base64</Line>
                <Line>Single file output</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Add minification and obfuscation
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Terser for JavaScript</Line>
                <Line>Maintain WASM protection</Line>
                <Line>Reduce file size</Line>
            </Paragraph>
            <Heading>Configuration System</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Define pattern config schema
                </Word>
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`interface PatternConfig {
  name: string
  motif: string  // Path to SVG file
  defaultGrid: number
  minGrid: number
  maxGrid: number
  scale: number
}`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create example configs
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>configs/default.json</Line>
                <Line>configs/roses.json</Line>
                <Line>configs/geometric.json</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Load config at build time
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Read specified config</Line>
                <Line>Embed in compiled output</Line>
                <Line>No runtime config loading</Line>
            </Paragraph>
            <Heading>Testing</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create test SVG motifs
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Simple shapes that tile well</Line>
                <Line>Complex patterns for edge cases</Line>
                <Line>Document in resources/README.md</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Unit tests for tiling math
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Test seamless calculations</Line>
                <Line>Test grid boundaries</Line>
                <Line>Test scale conversions</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Manual test checklist
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Create docs/TESTING.md</Line>
                <Line>Browser compatibility</Line>
                <Line>Illustrator import</Line>
                <Line>Performance limits</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Visual tests for seamless tiling
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Zoom in on edges</Line>
                <Line>Check alignment</Line>
                <Line>No visible seams</Line>
            </Paragraph>
            <Heading>Documentation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create docs/PATTERN_SPEC.md
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>What is a seamless pattern?</Line>
                <Line>How tiling works</Line>
                <Line>Mathematical requirements</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create docs/BUILD_PROCESS.md
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>How to build for development</Line>
                <Line>How to build for client</Line>
                <Line>How configs work</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create docs/WASM_INTERFACE.md
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>What goes in WASM vs JavaScript</Line>
                <Line>Function signatures</Line>
                <Line>Security boundaries</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Add JSDoc comments to all modules
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Document parameters</Line>
                <Line>Document return values</Line>
                <Line>Example usage</Line>
            </Paragraph>
            <Heading>Architecture Decisions</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Document why SVGs are embedded not uploaded
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Security: browsers can't access filesystem</Line>
                <Line>Simplicity: no file handling UI</Line>
                <Line>Build-time optimization</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Document WASM vs JavaScript split
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>WASM: tiling math (protected)</Line>
                <Line>WASM: license validation</Line>
                <Line>JS: UI and controls</Line>
                <Line>JS: Export functions</Line>
            </Paragraph>
            <Heading>MVP Checklist</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Must Have for Working Pattern:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Hardcoded SVG motif that tiles</Line>
                <Line>WASM tiling engine (3x3 to 10x10)</Line>
                <Line>Zoom to see large grids</Line>
                <Line>Export single tile for Illustrator</Line>
                <Line>Bundle as single HTML file</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Build Command for Client:
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`PATTERN_CONFIG=./configs/client-name.json npm run build:client
# Outputs: client-name-pattern.html`}
            </CodeBox>
        </Section>
    </Chapter>
);
