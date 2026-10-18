import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Test if we can build to single HTML file v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Test if we can build to single HTML file at version 1</Heading>
            <Heading>Test Single HTML File Build</Heading>
            <Heading>Step 1: Build the static export</Heading>
            <CodeBox
                language="bash"
            >
                {`npm run build`}
            </CodeBox>
            <Paragraph>
                This creates files in <Word>
                    <Verbatim />
                    /build
                </Word> folder
            </Paragraph>
            <Heading>Step 2: Check what was created</Heading>
            <CodeBox
                language="bash"
            >
                {`dir build`}
            </CodeBox>
            <Paragraph>You'll probably see:</Paragraph>
            <Paragraph>
                <List />
                <Line>Multiple .js files</Line>
                <Line>Multiple .css files</Line>
                <Line>index.html that references them</Line>
            </Paragraph>
            <Heading>Step 3: We need a bundler script!</Heading>
            <Paragraph>We need to create a script that:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Takes the Next.js build output</Line>
                <Line>Inlines all JS into the HTML</Line>
                <Line>Inlines all CSS into the HTML</Line>
                <Line>Inlines the WASM as base64</Line>
                <Line>Outputs ONE self-contained HTML file</Line>
            </Paragraph>
            <Heading>The Problem:</Heading>
            <Paragraph>
                Next.js <Word>
                    <Verbatim />
                    output: 'export'
                </Word> creates static files, but NOT a single file. It creates:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>index.html</Line>
                <Line>_next/static/chunks/*.js</Line>
                <Line>_next/static/css/*.css</Line>
            </Paragraph>
            <Heading>The Solution:</Heading>
            <Paragraph>We need a post-build script that combines everything:</Paragraph>
            <CodeBox
                language="javascript"
            >
                {`// scripts/bundle-to-single-html.js
const fs = require('fs');
const path = require('path');

function bundleToSingleHTML() {
  // Read the index.html
  let html = fs.readFileSync('build/index.html', 'utf8');
  
  // Find all script tags and inline them
  // Find all link tags and inline CSS
  // Embed WASM as base64
  
  // Output single file
  fs.writeFileSync('pattern.html', html);
}`}
            </CodeBox>
            <Heading>Or Alternative Approach:</Heading>
            <Paragraph>Maybe we shouldn't use Next.js at all for the final pattern?</Paragraph>
            <Paragraph>
                <List />
                <Line>Use Next.js for DEVELOPMENT (preview, testing)</Line>
                <Line>Use a different build process for the FINAL single HTML?</Line>
            </Paragraph>
            <Paragraph>What do you think, Dad?</Paragraph>
        </Section>
    </Chapter>
);
