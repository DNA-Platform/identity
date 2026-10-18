import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-4-doc v2 ]]</Title>
        <Section>
            <Opaque />
            <Heading>milestone-4-doc at version 2</Heading>
            <Heading>AI Pattern Assistants</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Dependencies:
                </Word> Needs the basic framework and GPT integration working
            </Paragraph>
            <Paragraph>Dear Ana,</Paragraph>
            <Paragraph>
                This milestone is about teaching AI (like GPT) to actually use our pattern creation framework. Instead of
                you directing each variation, we'll create AI assistants that understand pattern design and can generate
                variations automatically.
            </Paragraph>
            <Heading>What's Happening Behind the Scenes</Heading>
            <Paragraph>
                <List />
                <Line>We teach GPT about pattern design principles</Line>
                <Line>It learns to write code using our framework</Line>
                <Line>It understands concepts like:</Line>
                <Paragraph>
                    <List />
                    <Line>Stroke weight and path manipulation</Line>
                    <Line>Layer composition</Line>
                    <Line>Color theory and harmony</Line>
                    <Line>Balance and rhythm in patterns</Line>
                </Paragraph>
                <Line>It can analyze successful patterns and understand why they work</Line>
            </Paragraph>
            <Heading>Real Examples in Illustrator Terms</Heading>
            <Paragraph>The AI might decide to:</Paragraph>
            <Paragraph>
                <List />
                <Line>Adjust stroke profiles on your brushwork</Line>
                <Line>Create pattern variations using different pathfinder operations</Line>
                <Line>Generate new compositions using your paths as source material</Line>
                <Line>Transform objects with different blend modes and effects</Line>
                <Line>All while maintaining your core design principles</Line>
            </Paragraph>
            <Heading>Why This Matters for Your Work</Heading>
            <Paragraph>
                <List />
                <Line>Automated exploration of design possibilities</Line>
                <Line>AI assistants that understand both code AND design</Line>
                <Line>Variations based on market analysis and trends</Line>
                <Line>Each assistant can specialize in different styles or techniques</Line>
            </Paragraph>
            <Heading>The Technology</Heading>
            <Paragraph>
                <List />
                <Line>GPT writes actual code to create variations</Line>
                <Line>It can analyze successful patterns and replicate techniques</Line>
                <Line>It generates its own instructions based on design principles</Line>
                <Line>Everything is still based on your original artistic vision</Line>
            </Paragraph>
            <Paragraph>
                Think of it as creating a team of AI design assistants who understand both the technical aspects of
                Illustrator and the artistic principles of pattern design. They work in the background, generating
                variations and exploring possibilities, while you focus on core creative work.
            </Paragraph>
        </Section>
    </Chapter>
);
