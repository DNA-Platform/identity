import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-4-doc v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>milestone-4-doc at version 1</Heading>
            <Heading>Smart Variations</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Dependencies:
                </Word> Needs Pattern Magic and Magic Words working first
            </Paragraph>
            <Paragraph>Dear Ana,</Paragraph>
            <Paragraph>
                This is where things get really exciting - the system will learn to create variations that understand your
                style and what sells well. Here's what you'll experience:
            </Paragraph>
            <Heading>Your Experience</Heading>
            <Paragraph>
                <List />
                <Line>Tell the system what kind of variation you want</Line>
                <Line>Example: "Make it more flowing" or "More geometric"</Line>
                <Line>Watch as it creates variations that understand your request</Line>
                <Line>Get variations that know what customers like</Line>
            </Paragraph>
            <Heading>Real Examples</Heading>
            <Paragraph>With your grid pattern:</Paragraph>
            <Paragraph>
                <List />
                <Line>Ask for "more organic" - it adds gentle curves to the grid lines</Line>
                <Line>Request "more minimal" - it removes some lines while keeping balance</Line>
                <Line>Say "make it bolder" - it adjusts spacing and line weights</Line>
                <Line>Each variation comes with its own perfect description</Line>
            </Paragraph>
            <Heading>Why This Matters</Heading>
            <Paragraph>
                <List />
                <Line>Create variations with purpose, not just random changes</Line>
                <Line>Explore new directions you might not have considered</Line>
                <Line>Let the system learn what sells well</Line>
                <Line>Save time by targeting successful styles</Line>
            </Paragraph>
            <Heading>What You'll See</Heading>
            <Paragraph>
                <List />
                <Line>Simple interface for describing what you want</Line>
                <Line>Smart variations that understand your requests</Line>
                <Line>Each variation already tagged and described</Line>
                <Line>Suggestions based on what customers like</Line>
            </Paragraph>
            <Paragraph>
                Think of it as having a design assistant who understands both your style and what the market wants!
            </Paragraph>
        </Section>
    </Chapter>
);
