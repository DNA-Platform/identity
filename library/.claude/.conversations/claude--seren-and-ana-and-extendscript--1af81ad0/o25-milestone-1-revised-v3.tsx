import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-1-revised v3 ]]</Title>
        <Section>
            <Opaque />
            <Heading>milestone-1-revised at version 3</Heading>
            <Heading>Fast Pattern Creation</Heading>
            <Paragraph>Dear Ana,</Paragraph>
            <Paragraph>
                We want to make pattern creation and variation lightning fast in Illustrator. Right now, creating variations
                of patterns can be slow and interrupt your creative flow. We're going to change that.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What We'll Create:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A system that generates variations instantly</Line>
                <Line>No waiting for Illustrator to catch up</Line>
                <Line>No interruptions to your creative process</Line>
                <Line>Everything stays organized in your files</Line>
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
                <Line>Use all your favorite Illustrator tools smoothly</Line>
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
                Think of it like having an assistant who can take your pattern and create all the variations you need,
                instantly, while you focus on designing.
            </Paragraph>
            <Paragraph>Best wishes, The Pattern Automation Team</Paragraph>
        </Section>
    </Chapter>
);
