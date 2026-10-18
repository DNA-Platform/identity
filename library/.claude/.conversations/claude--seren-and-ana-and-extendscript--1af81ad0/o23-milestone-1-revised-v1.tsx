import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-1-revised v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>milestone-1-revised at version 1</Heading>
            <Heading>Fast Pattern Creation</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    What's Frustrating Now:
                </Word> Illustrator freezes for 20 minutes when creating pattern variations
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What We'll Fix:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>No more waiting for Illustrator to respond</Line>
                <Line>Create many variations instantly</Line>
                <Line>Keep full control of your artwork</Line>
                <Line>Export ready-to-use files for any platform</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    In Your Illustrator Terms:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Work with paths and shapes at full speed</Line>
                <Line>Keep your layers organized while creating variations</Line>
                <Line>Use all your favorite Illustrator tools without freezing</Line>
                <Line>Export perfect SVG files for websites</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What You'll See in Action:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Open your pattern design in Illustrator</Line>
                <Line>Click to create variations</Line>
                <Line>Watch as new files appear instantly</Line>
                <Line>Each file is a complete Illustrator document</Line>
                <Line>All paths and layers exactly as you set them up</Line>
            </Paragraph>
            <Paragraph>
                Think of it like having Illustrator work at super-speed, but with all the control and quality you're used
                to. No more coffee breaks while waiting for patterns to generate!
            </Paragraph>
        </Section>
    </Chapter>
);
