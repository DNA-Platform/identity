import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-4-revised v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>milestone-4-revised at version 1</Heading>
            <Heading>Automatic Pattern Uploads</Heading>
            <Paragraph>Dear Ana,</Paragraph>
            <Paragraph>
                I understand you're using StockSubmitter for your pattern uploads. Let's make this process completely
                automatic, so you can focus on creating while the system handles getting your work online.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What We'll Create:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Automatic uploads to StockSubmitter</Line>
                <Line>Handles all your pattern variations at once</Line>
                <Line>Includes descriptions and keywords we generated</Line>
                <Line>Tracks what's been uploaded for you</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How It Will Work With StockSubmitter:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Log in once, system remembers your settings</Line>
                <Line>Automatically fills in all pattern information</Line>
                <Line>Uploads your variations in batches</Line>
                <Line>Confirms each successful upload</Line>
                <Line>Keeps track of what's already been submitted</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What You'll See in Action:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Your patterns and variations are ready</Line>
                <Line>Click one button to start uploads</Line>
                <Line>Watch as each pattern goes to StockSubmitter</Line>
                <Line>Get a simple report of what's been uploaded</Line>
                <Line>Everything organized and tracked for you</Line>
            </Paragraph>
            <Paragraph>
                This means you can create a pattern, generate variations, and have everything uploaded to StockSubmitter
                automatically - no more manual uploading one file at a time!
            </Paragraph>
            <Paragraph>Here to make your workflow smoother, Seren</Paragraph>
        </Section>
    </Chapter>
);
