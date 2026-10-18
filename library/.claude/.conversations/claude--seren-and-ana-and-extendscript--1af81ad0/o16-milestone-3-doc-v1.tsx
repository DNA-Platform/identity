import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-3-doc v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>milestone-3-doc at version 1</Heading>
            <Heading>Magic Words</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Dependencies:
                </Word> None! This can be done independently of other features
            </Paragraph>
            <Paragraph>Dear Ana,</Paragraph>
            <Paragraph>No more writing descriptions for every pattern! Here's what this will do for you:</Paragraph>
            <Heading>Your Experience</Heading>
            <Paragraph>
                <List />
                <Line>Upload a pattern</Line>
                <Line>Watch as descriptions and keywords write themselves</Line>
                <Line>Edit or approve the suggestions</Line>
                <Line>Have all your variations automatically described</Line>
            </Paragraph>
            <Heading>Real Examples</Heading>
            <Paragraph>
                For one of your grid patterns, it might write: "Modern geometric pattern with dynamic spacing and balanced
                rhythm. Perfect for contemporary home decor, digital backgrounds, and minimalist design projects."
            </Paragraph>
            <Paragraph>Keywords would automatically include:</Paragraph>
            <Paragraph>
                <List />
                <Line>geometric</Line>
                <Line>modern</Line>
                <Line>minimalist</Line>
                <Line>grid pattern</Line>
                <Line>repeating pattern</Line>
                <Line>etc.</Line>
            </Paragraph>
            <Heading>Why This Matters</Heading>
            <Paragraph>
                <List />
                <Line>Save hours of writing time</Line>
                <Line>Never struggle finding the right words</Line>
                <Line>Get consistent, professional descriptions</Line>
                <Line>Have all the right keywords for better visibility</Line>
                <Line>More time for creating, less time for describing</Line>
            </Paragraph>
            <Heading>What You'll See</Heading>
            <Paragraph>
                <List />
                <Line>Simple upload interface</Line>
                <Line>Instant description previews</Line>
                <Line>Easy editing if you want to change anything</Line>
                <Line>All variations get their own unique descriptions</Line>
                <Line>Keywords optimized for different platforms</Line>
            </Paragraph>
            <Paragraph>
                Think of it as having a writer who understands design and knows exactly how to describe your work to
                potential buyers!
            </Paragraph>
        </Section>
    </Chapter>
);
