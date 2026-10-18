import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Pattern Architecture Decisions v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Pattern Architecture Decisions at version 1</Heading>
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
            <Heading>Questions to Resolve</Heading>
            <Paragraph>
                <List />
                <Line>How does the lattice transform elements?</Line>
                <Line>What's the minimal viable lattice system?</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
