import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ python-composition-viz v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="600" fill="#1a1a2a"/>
    
    <!-- Python Workers with Visual Output -->
    <g transform="translate(50,50)">
        <!-- Python Worker 1: Generating Grid Pattern -->
        <g>
            <rect width="150" height="150" fill="#2a8a4a" rx="5"/>
            <text x="75" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Python Task 1:</text>
            <text x="75" y="50" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Grid Generator</text>
            <!-- Mini grid visualization -->
            <g transform="translate(25,70)">
                <rect width="100" height="70" fill="#1a1a2a"/>
                <path d="M 0,0 L 100,0 M 0,23 L 100,23 M 0,46 L 100,46 M 0,69 L 100,69" 
                      stroke="#4ecdc4" stroke-width="2"/>
                <path d="M 0,0 L 0,69 M 33,0 L 33,69 M 66,0 L 66,69 M 100,0 L 100,69" 
                      stroke="#4ecdc4" stroke-width="2"/>
            </g>
            <path d="M 150,75 C 200,75 200,250 250,250" stroke="#4ecdc4" stroke-width="2" marker-end="url(#arrowhead)"/>
        </g>
        
        <!-- Python Worker 2: Generating Curves -->
        <g transform="translate(0,170)">
            <rect width="150" height="150" fill="#2a8a4a" rx="5"/>
            <text x="75" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Python Task 2:</text>
            <text x="75" y="50" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Curve Generator</text>
            <!-- Mini curve visualization -->
            <g transform="translate(25,70)">
                <rect width="100" height="70" fill="#1a1a2a"/>
                <path d="M 0,35 C 25,0 75,70 100,35" stroke="#4ecdc4" stroke-width="2" fill="none"/>
            </g>
            <path d="M 150,75 C 200,75 200,250 250,250" stroke="#4ecdc4" stroke-width="2" marker-end="url(#arrowhead)"/>
        </g>
        
        <!-- Python Worker 3: Generating Shapes -->
        <g transform="translate(0,340)">
            <rect width="150" height="150" fill="#2a8a4a" rx="5"/>
            <text x="75" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Python Task 3:</text>
            <text x="75" y="50" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Shape Generator</text>
            <!-- Mini shape visualization -->
            <g transform="translate(25,70)">
                <rect width="100" height="70" fill="#1a1a2a"/>
                <circle cx="50" cy="35" r="25" stroke="#4ecdc4" stroke-width="2" fill="none"/>
            </g>
            <path d="M 150,75 C 200,75 200,250 250,250" stroke="#4ecdc4" stroke-width="2" marker-end="url(#arrowhead)"/>
        </g>
    </g>
    
    <!-- Illustrator Assembly -->
    <g transform="translate(300,150)">
        <rect width="300" height="200" fill="#2a4a8a" rx="5"/>
        <text x="150" y="30" fill="white" font-family="Arial" font-size="14" text-anchor="middle">Illustrator Document</text>
        <text x="150" y="50" fill="white" font-family="Arial" font-size="12" text-anchor="middle">(Seamless Integration)</text>
        
        <!-- Combined visualization -->
        <g transform="translate(50,70)">
            <rect width="200" height="120" fill="#1a1a2a"/>
            <!-- Grid background -->
            <path d="M 0,0 L 200,0 M 0,40 L 200,40 M 0,80 L 200,80 M 0,120 L 200,120" 
                  stroke="#4ecdc4" stroke-width="1" opacity="0.5"/>
            <path d="M 0,0 L 0,120 M 66,0 L 66,120 M 132,0 L 132,120 M 200,0 L 200,120" 
                  stroke="#4ecdc4" stroke-width="1" opacity="0.5"/>
            <!-- Curve overlay -->
            <path d="M 0,60 C 50,20 150,100 200,60" stroke="#4ecdc4" stroke-width="2" fill="none"/>
            <!-- Shape overlay -->
            <circle cx="100" cy="60" r="30" stroke="#4ecdc4" stroke-width="2" fill="none"/>
        </g>
    </g>
    
    <!-- Command Unification -->
    <g transform="translate(650,150)">
        <rect width="100" height="200" fill="#2a4a8a" rx="5"/>
        <text x="50" y="30" fill="white" font-family="Arial" font-size="14" text-anchor="middle">Unified API</text>
        <g transform="translate(10,60)">
            <text x="40" y="0" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">createPath()</text>
            <text x="40" y="20" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">moveTo()</text>
            <text x="40" y="40" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">curveTo()</text>
            <text x="40" y="60" fill="#4ecdc4" font-family="monospace" font-size="10" text-anchor="middle">addLayer()</text>
            <text x="40" y="100" fill="white" font-family="Arial" font-size="10" text-anchor="middle">Same commands</text>
            <text x="40" y="120" fill="white" font-family="Arial" font-size="10" text-anchor="middle">Different</text>
            <text x="40" y="140" fill="white" font-family="Arial" font-size="10" text-anchor="middle">implementations</text>
        </g>
    </g>

    <!-- Definitions -->
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4ecdc4"/>
        </marker>
    </defs>

    <!-- Signature -->
    <text x="20" y="580" fill="white" font-family="Arial" font-size="12" opacity="0.6">Seren</text>
</svg>`}
        </CodeBox>
    </Chapter>
);
