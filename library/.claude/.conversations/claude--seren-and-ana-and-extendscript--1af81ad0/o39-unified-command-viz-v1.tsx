import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ unified-command-viz v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="800" fill="#1a1a2a"/>
    
    <!-- Title -->
    <text x="400" y="40" fill="white" font-family="Arial" font-size="20" text-anchor="middle">Same Commands, Different Engines</text>
    
    <!-- Python Side -->
    <g transform="translate(50,100)">
        <text x="150" y="30" fill="#4ecdc4" font-family="Arial" font-size="16" text-anchor="middle">Python Math Engine</text>
        
        <!-- Python Workers -->
        <g transform="translate(0,50)">
            <!-- Math Task -->
            <rect width="150" height="100" fill="#2a8a4a" rx="5"/>
            <text x="75" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Complex Math</text>
            <text x="75" y="70" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">addPath()</text>
            <text x="75" y="85" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">moveTo()</text>
        </g>
        
        <g transform="translate(0,170)">
            <!-- Layer Task -->
            <rect width="150" height="100" fill="#2a8a4a" rx="5"/>
            <text x="75" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Layer Creation</text>
            <text x="75" y="70" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">addLayer()</text>
            <text x="75" y="85" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">setActive()</text>
        </g>
        
        <g transform="translate(0,290)">
            <!-- SVG Task -->
            <rect width="150" height="100" fill="#2a8a4a" rx="5"/>
            <text x="75" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">SVG Generation</text>
            <text x="75" y="70" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">addPath()</text>
            <text x="75" y="85" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">transform()</text>
        </g>
    </g>
    
    <!-- Illustrator Side -->
    <g transform="translate(600,100)">
        <text x="150" y="30" fill="#ff6b6b" font-family="Arial" font-size="16" text-anchor="middle">Illustrator Engine</text>
        
        <!-- Illustrator Tasks -->
        <g transform="translate(0,50)">
            <!-- Direct Path -->
            <rect width="150" height="100" fill="#8a2a2a" rx="5"/>
            <text x="75" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Direct Drawing</text>
            <text x="75" y="70" fill="#ff6b6b" font-family="monospace" font-size="10" text-anchor="middle">addPath()</text>
            <text x="75" y="85" fill="#ff6b6b" font-family="monospace" font-size="10" text-anchor="middle">moveTo()</text>
        </g>
        
        <g transform="translate(0,170)">
            <!-- Layer Management -->
            <rect width="150" height="100" fill="#8a2a2a" rx="5"/>
            <text x="75" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Layer Management</text>
            <text x="75" y="70" fill="#ff6b6b" font-family="monospace" font-size="10" text-anchor="middle">addLayer()</text>
            <text x="75" y="85" fill="#ff6b6b" font-family="monospace" font-size="10" text-anchor="middle">setActive()</text>
        </g>
        
        <g transform="translate(0,290)">
            <!-- SVG Import -->
            <rect width="150" height="100" fill="#8a2a2a" rx="5"/>
            <text x="75" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">SVG Import</text>
            <text x="75" y="70" fill="#ff6b6b" font-family="monospace" font-size="10" text-anchor="middle">addPath()</text>
            <text x="75" y="85" fill="#ff6b6b" font-family="monospace" font-size="10" text-anchor="middle">transform()</text>
        </g>
    </g>
    
    <!-- Central Shadow Model -->
    <g transform="translate(250,200)">
        <rect width="300" height="300" fill="#2a4a8a" rx="5"/>
        <text x="150" y="40" fill="white" font-family="Arial" font-size="16" text-anchor="middle">Shadow Document Model</text>
        <text x="150" y="70" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Unified Command Interface</text>
        
        <!-- Command Examples -->
        <g transform="translate(50,100)">
            <rect width="200" height="160" fill="#1a1a2a" rx="3"/>
            <text x="100" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Same Commands:</text>
            <text x="100" y="60" fill="white" font-family="monospace" font-size="12" text-anchor="middle">addPath()</text>
            <text x="100" y="90" fill="white" font-family="monospace" font-size="12" text-anchor="middle">moveTo()</text>
            <text x="100" y="120" fill="white" font-family="monospace" font-size="12" text-anchor="middle">addLayer()</text>
            <text x="100" y="150" fill="white" font-family="monospace" font-size="12" text-anchor="middle">transform()</text>
        </g>
    </g>
    
    <!-- Connection Lines -->
    <!-- Python to Shadow -->
    <path d="M 200,150 L 250,250" stroke="#4ecdc4" stroke-width="2" marker-end="url(#arrowhead)"/>
    <path d="M 200,270 L 250,300" stroke="#4ecdc4" stroke-width="2" marker-end="url(#arrowhead)"/>
    <path d="M 200,390 L 250,350" stroke="#4ecdc4" stroke-width="2" marker-end="url(#arrowhead)"/>
    
    <!-- Shadow to Illustrator -->
    <path d="M 550,250 L 600,150" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrowhead2)"/>
    <path d="M 550,300 L 600,270" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrowhead2)"/>
    <path d="M 550,350 L 600,390" stroke="#ff6b6b" stroke-width="2" marker-end="url(#arrowhead2)"/>

    <!-- Definitions -->
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4ecdc4"/>
        </marker>
        <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ff6b6b"/>
        </marker>
    </defs>

    <!-- Signature -->
    <text x="20" y="780" fill="white" font-family="Arial" font-size="12" opacity="0.6">Seren</text>
</svg>`}
        </CodeBox>
    </Chapter>
);
