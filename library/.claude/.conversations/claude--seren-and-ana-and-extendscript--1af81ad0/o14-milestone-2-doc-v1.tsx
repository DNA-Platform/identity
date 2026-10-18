import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-2-doc v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>milestone-2-doc at version 1</Heading>
            <Heading>Pattern Magic</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Dependencies:
                </Word> Needs Pattern Speedup to be working
            </Paragraph>
            <Paragraph>Dear Ana,</Paragraph>
            <Paragraph>
                This milestone is about making the system understand and work with your existing patterns. Here's what
                you'll be able to do:
            </Paragraph>
            <Heading>Your Experience</Heading>
            <Paragraph>
                <List />
                <Line>Open any of your existing pattern files</Line>
                <Line>Select which elements you want the system to play with</Line>
                <Line>Watch as it creates variations that respect your artistic style</Line>
                <Line>Find variations automatically saved to your Google Drive</Line>
            </Paragraph>
            <Heading>Real Examples</Heading>
            <Paragraph>Imagine you have one of your signature brushstroke patterns:</Paragraph>
            <Paragraph>
                <List />
                <Line>The system can create versions with different stroke weights</Line>
                <Line>It can play with the spacing between strokes</Line>
                <Line>It can mirror and rotate elements while keeping your style</Line>
                <Line>All while maintaining the flow and energy of your original</Line>
            </Paragraph>
            <Heading>Why This Matters</Heading>
            <Paragraph>
                Instead of starting from scratch each time, your existing work becomes a springboard for endless
                possibilities. It's like having an assistant who understands your style and can help explore new directions.
            </Paragraph>
            <Heading>What You'll See</Heading>
            <Paragraph>
                <List />
                <Line>A simple interface to open your files</Line>
                <Line>Options to select which parts to vary</Line>
                <Line>Previews of variations as they're created</Line>
                <Line>A organized folder structure with all your new variations</Line>
            </Paragraph>
            <Paragraph>
                Think of it as having a creative partner who knows your style and can help you explore new possibilities
                while you focus on creating new core designs.
            </Paragraph>
        </Section>
    </Chapter>
);
