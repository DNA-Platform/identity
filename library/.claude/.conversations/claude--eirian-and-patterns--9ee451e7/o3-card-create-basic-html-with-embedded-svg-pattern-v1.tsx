import { Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Card: Create Basic HTML with Embedded SVG Pattern v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Card: Create Basic HTML with Embedded SVG Pattern at version 1</Heading>
            <Heading>Card: Create Basic HTML with Embedded SVG Pattern</Heading>
            <Heading>Goal</Heading>
            <Paragraph>Create a single HTML file that displays a tiled pattern using inline JavaScript and SVG.</Paragraph>
            <Heading>Implementation</Heading>
            <Paragraph>
                Create <Word>
                    <Verbatim />
                    pattern.html
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Embed a simple SVG motif (triangle) directly in the HTML</Line>
                <Line>Use vanilla JavaScript to tile it 3x3</Line>
                <Line>Display on a canvas element</Line>
                <Line>
                    Must work with <Word>
                        <Verbatim />
                        file://
                    </Word> protocol (no server)
                </Line>
            </Paragraph>
            <Heading>Structure</Heading>
            <CodeBox
                language="html"
            >
                {`<!DOCTYPE html>
<html>
<head>
    <style>
        /* Inline CSS */
    </style>
</head>
<body>
    <div id="pattern-canvas"></div>
    <script>
        // Motif embedded as string
        const motif = '<path d="M 0,10 L 5,0 L 10,10 Z"/>';
        
        // Tiling logic
        function createPattern(motif, gridSize) {
            // Generate SVG with tiled motif
        }
        
        // Render pattern
        document.getElementById('pattern-canvas').innerHTML = 
            createPattern(motif, 3);
    </script>
</body>
</html>`}
            </CodeBox>
            <Heading>Test</Heading>
            <Paragraph>
                <List />
                <Line>Open pattern.html in browser directly</Line>
                <Line>Should see 3x3 grid of triangles</Line>
                <Line>No console errors</Line>
                <Line>Works offline</Line>
            </Paragraph>
            <Heading>Result</Heading>
            <Paragraph>We have a working pattern viewer in a single HTML file!</Paragraph>
        </Section>
    </Chapter>
);
