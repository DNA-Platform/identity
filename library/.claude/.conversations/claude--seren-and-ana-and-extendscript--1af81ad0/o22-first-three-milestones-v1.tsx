import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ first-three-milestones v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>first-three-milestones at version 1</Heading>
            <Heading>Milestone 1: Multi-Process Pattern Generation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Dependencies:
                </Word> None - this is foundational
            </Paragraph>
            <Paragraph>
                Using BridgeTalk and Python integration to speed up pattern generation from 20 minutes to nearly instant:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Break down complex Illustrator operations into smaller tasks</Line>
                <Line>Run operations across multiple processes to prevent UI freezing</Line>
                <Line>Generate SVG files rapidly using Python's math capabilities</Line>
                <Line>Seamlessly import generated SVGs into Illustrator as paths</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For Your Workflow:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Create complex patterns without Illustrator becoming unresponsive</Line>
                <Line>Generate infinite variations of your patterns at high speed</Line>
                <Line>Maintain full Illustrator path control and editability</Line>
                <Line>Export directly to SVG for platforms that prefer that format</Line>
            </Paragraph>
            <Heading>Milestone 2: Pattern Integration Framework</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Dependencies:
                </Word> Needs Multi-Process Generation
            </Paragraph>
            <Paragraph>A system that understands and can manipulate your existing Illustrator patterns:</Paragraph>
            <Paragraph>
                <List />
                <Line>Extract paths and analyze their properties</Line>
                <Line>Understand layer structure and relationships</Line>
                <Line>Preserve your artboard setup and pattern tile definitions</Line>
                <Line>Maintain pattern settings and transform properties</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Technical Capabilities:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Work with compound paths and complex shapes</Line>
                <Line>Handle different blend modes and opacity settings</Line>
                <Line>Preserve pattern tile definitions and spacing</Line>
                <Line>Maintain clipping masks and nested patterns</Line>
                <Line>Auto-export to your preferred storage (Google Drive/local)</Line>
            </Paragraph>
            <Heading>Milestone 3: Automated Metadata Generation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Dependencies:
                </Word> None
            </Paragraph>
            <Paragraph>Integrating GPT for professional pattern descriptions and keywords:</Paragraph>
            <Paragraph>
                <List />
                <Line>Generate platform-specific metadata formats</Line>
                <Line>Create SEO-optimized descriptions</Line>
                <Line>Auto-generate keywords based on pattern structure</Line>
                <Line>Understand technical pattern attributes (seamless, vector, etc.)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Technical Details:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Analyze pattern complexity and structure</Line>
                <Line>Identify key design elements and techniques used</Line>
                <Line>Generate accurate technical specifications</Line>
                <Line>Create platform-specific tags and categories</Line>
                <Line>Maintain consistent metadata across variations</Line>
            </Paragraph>
            <Paragraph>
                Each milestone builds on your professional Illustrator workflow while automating the time-consuming parts.
                The goal is to enhance your creative process, not replace it.
            </Paragraph>
        </Section>
    </Chapter>
);
