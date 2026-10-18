import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-1-doc v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>milestone-1-doc at version 1</Heading>
            <Heading>Pattern Speedup</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Dependencies:
                </Word> None - this is a foundation we can start with!
            </Paragraph>
            <Paragraph>Dear Ana,</Paragraph>
            <Paragraph>
                This milestone is about making your pattern creation process much faster. Here's what you'll be able to do:
            </Paragraph>
            <Heading>Your Experience</Heading>
            <Paragraph>
                <List />
                <Line>Draw one of your grid patterns</Line>
                <Line>Click a button to generate variations</Line>
                <Line>Watch as 20 different versions appear within minutes (not 20 minutes each!)</Line>
                <Line>Choose your favorites to refine further</Line>
            </Paragraph>
            <Heading>Real Examples</Heading>
            <Paragraph>Imagine you create a grid pattern with repeating geometric shapes. You'll be able to:</Paragraph>
            <Paragraph>
                <List />
                <Line>Adjust the spacing automatically</Line>
                <Line>Rotate elements in different ways</Line>
                <Line>Change the size relationships</Line>
                <Line>All while maintaining your original artistic vision</Line>
            </Paragraph>
            <Heading>Why This Matters</Heading>
            <Paragraph>
                Right now, each variation takes 20 minutes to generate. That's too slow for exploring creative
                possibilities! This upgrade will let you experiment freely and discover unexpected variations that you might
                love.
            </Paragraph>
            <Heading>What You'll See</Heading>
            <Paragraph>
                <List />
                <Line>A simple interface where you can load your pattern</Line>
                <Line>A folder that automatically fills with variations</Line>
                <Line>Each variation clearly named and organized</Line>
                <Line>The ability to quickly say "more like this one" for variations you like</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
