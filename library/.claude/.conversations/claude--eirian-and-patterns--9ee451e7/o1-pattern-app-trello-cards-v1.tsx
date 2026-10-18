import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Pattern App Trello Cards v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Pattern App Trello Cards at version 1</Heading>
            <Heading>Pattern App Trello Cards</Heading>
            <Heading>Foundation Cards</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Setup Next.js with TypeScript and WASM
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Create Next.js app</Line>
                <Line>Configure AssemblyScript</Line>
                <Line>Simple WASM function that returns "hello"</Line>
                <Line>Test: WASM loads and executes</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create SVG canvas with hardcoded motif
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Load a simple SVG shape (star or circle)</Line>
                <Line>Display on canvas</Line>
                <Line>Just one copy for now</Line>
                <Line>Time: 30 min</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Implement 3x3 grid tiling in WASM
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>AssemblyScript function: tilePattern(motif, gridSize)</Line>
                <Line>Takes SVG path, returns tiled SVG</Line>
                <Line>Display 3x3 grid of the motif</Line>
                <Line>Test: Pattern fills canvas</Line>
                <Line>Time: 2 hours</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Make tiling seamless
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Edges of tiles align perfectly</Line>
                <Line>No gaps or overlaps</Line>
                <Line>Test manually: zoom in on edges</Line>
                <Line>Time: 2 hours</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Add grid size control
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Slider: 1x1 to 10x10</Line>
                <Line>WASM recalculates on change</Line>
                <Line>Smooth performance</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Add zoom control
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Scale the entire canvas</Line>
                <Line>Maintain seamless tiling</Line>
                <Line>Can zoom out to see 50x50+ grid</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Heading>Export Cards</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Export single tile as SVG
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Button: "Export Tile"</Line>
                <Line>Extracts one seamless tile</Line>
                <Line>Downloads as .svg file</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Test Adobe Illustrator compatibility
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Manual test: Open in Illustrator</Line>
                <Line>Document which SVG features work</Line>
                <Line>Create ILLUSTRATOR_COMPAT.md</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Restrict to Illustrator-safe SVG
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>No gradients, filters, or clipPaths</Line>
                <Line>Use only path, rect, circle, polygon</Line>
                <Line>Clean XML structure</Line>
                <Line>Test: Opens perfectly in Illustrator</Line>
                <Line>Time: 2 hours</Line>
            </Paragraph>
            <Heading>Resource Loading Cards</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Load external SVG file
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>File input for SVG</Line>
                <Line>Parse and extract paths</Line>
                <Line>Display in pattern</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Support multiple motifs
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Load multiple SVG files</Line>
                <Line>Combine in pattern</Line>
                <Line>Configure which goes where</Line>
                <Line>Time: 2 hours</Line>
            </Paragraph>
            <Heading>Build System Cards</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Configure static export
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>next export works</Line>
                <Line>All assets inline</Line>
                <Line>No server dependencies</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Bundle to single HTML
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Script to combine everything</Line>
                <Line>WASM embedded as base64</Line>
                <Line>Works from file://</Line>
                <Line>Test: Email file, still works</Line>
                <Line>Time: 2 hours</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Add obfuscation
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Minify JavaScript</Line>
                <Line>Obfuscate variable names</Line>
                <Line>WASM already compiled</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Heading>Configuration Cards</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Create pattern config structure
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>JSON schema for patterns</Line>
                <Line>Grid size, motifs, scale</Line>
                <Line>Load at build time</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Build with external config
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>PATTERN_CONFIG_PATH environment variable</Line>
                <Line>Different patterns from same codebase</Line>
                <Line>Test: Build two different patterns</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Heading>Testing Cards</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Unit tests for tiling math
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Test seamless calculations</Line>
                <Line>Test grid positioning</Line>
                <Line>Test scale transformations</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Visual regression tests
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Screenshot comparisons</Line>
                <Line>Catch unexpected changes</Line>
                <Line>Test different grid sizes</Line>
                <Line>Time: 2 hours</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Manual test checklist
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Browser compatibility</Line>
                <Line>Illustrator compatibility</Line>
                <Line>Performance with large grids</Line>
                <Line>File size limits</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Heading>Documentation Cards</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Document pattern specification
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>What makes a valid motif</Line>
                <Line>Tiling mathematics</Line>
                <Line>Supported parameters</Line>
                <Line>Location: /docs/PATTERN_SPEC.md</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Card: Document module architecture
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>File structure</Line>
                <Line>WASM interface</Line>
                <Line>Build process</Line>
                <Line>Location: /docs/ARCHITECTURE.md</Line>
                <Line>Time: 1 hour</Line>
            </Paragraph>
            <Heading>MVP Definition</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Minimum Viable Pattern:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Load SVG motif</Line>
                <Line>Tile in seamless grid (via WASM)</Line>
                <Line>Adjust grid size (3x3 to 10x10)</Line>
                <Line>Zoom in/out to see more tiles</Line>
                <Line>Export single tile as Illustrator-compatible SVG</Line>
                <Line>Bundle as single HTML file</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Critical Path (Must Have for MVP):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Setup Next.js with WASM ✓</Line>
                <Line>Implement 3x3 grid tiling in WASM ✓</Line>
                <Line>Make tiling seamless ✓</Line>
                <Line>Add grid size control ✓</Line>
                <Line>Export single tile as SVG ✓</Line>
                <Line>Bundle to single HTML ✓</Line>
            </Paragraph>
            <Paragraph>Total MVP: ~8 hours</Paragraph>
        </Section>
    </Chapter>
);
