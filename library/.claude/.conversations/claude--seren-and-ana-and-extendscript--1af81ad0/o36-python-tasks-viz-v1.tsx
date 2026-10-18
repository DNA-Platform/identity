import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ python-tasks-viz v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="600" fill="#1a1a2a"/>
    
    <!-- Illustrator as Command Center -->
    <g transform="translate(300,50)">
        <text x="100" y="0" fill="white" font-family="Arial" font-size="16" text-anchor="middle">Illustrator as Command Center</text>
        <rect x="50" y="20" width="100" height="60" fill="#2a4a8a" rx="5"/>
        <text x="100" y="55" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Task Queue</text>
    </g>
    
    <!-- Python Workers -->
    <g transform="translate(50,200)">
        <!-- Python Worker 1 -->
        <g>
            <rect width="120" height="80" fill="#2a8a4a" rx="5"/>
            <text x="60" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Python</text>
            <text x="60" y="50" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Math Task 1</text>
            <path d="M 120,40 C 180,40 180,80 230,80" stroke="#4ecdc4" stroke-width="2" marker-end="url(#arrowhead)"/>
        </g>
        
        <!-- Python Worker 2 -->
        <g transform="translate(0,100)">
            <rect width="120" height="80" fill="#2a8a4a" rx="5"/>
            <text x="60" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Python</text>
            <text x="60" y="50" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Math Task 2</text>
            <path d="M 120,40 C 180,40 180,80 230,80" stroke="#4ecdc4" stroke-width="2" marker-end="url(#arrowhead)"/>
        </g>
        
        <!-- Python Worker 3 -->
        <g transform="translate(0,200)">
            <rect width="120" height="80" fill="#2a8a4a" rx="5"/>
            <text x="60" y="30" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Python</text>
            <text x="60" y="50" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Math Task 3</text>
            <path d="M 120,40 C 180,40 180,0 230,0" stroke="#4ecdc4" stroke-width="2" marker-end="url(#arrowhead)"/>
        </g>
    </g>
    
    <!-- SVG Assembly -->
    <g transform="translate(300,200)">
        <rect width="200" height="200" fill="#2a4a8a" rx="5"/>
        <text x="100" y="30" fill="white" font-family="Arial" font-size="14" text-anchor="middle">Illustrator Document</text>
        
        <!-- Layer visualization -->
        <g transform="translate(20,50)">
            <rect width="160" height="30" fill="#3a5a9a" rx="3"/>
            <text x="80" y="20" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Layer 1: SVG from Task 1</text>
        </g>
        
        <g transform="translate(20,90)">
            <rect width="160" height="30" fill="#3a5a9a" rx="3"/>
            <text x="80" y="20" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Layer 2: SVG from Task 2</text>
        </g>
        
        <g transform="translate(20,130)">
            <rect width="160" height="30" fill="#3a5a9a" rx="3"/>
            <text x="80" y="20" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Layer 3: SVG from Task 3</text>
        </g>
    </g>

    <!-- Results -->
    <g transform="translate(600,200)">
        <rect width="150" height="200" fill="#2a4a8a" rx="5"/>
        <text x="75" y="30" fill="white" font-family="Arial" font-size="14" text-anchor="middle">Final Results</text>
        <text x="75" y="80" fill="#4ecdc4" font-family="Arial" font-size="12" text-anchor="middle">✓ Fast Processing</text>
        <text x="75" y="110" fill="#4ecdc4" font-family="Arial" font-size="12" text-anchor="middle">✓ Parallel Tasks</text>
        <text x="75" y="140" fill="#4ecdc4" font-family="Arial" font-size="12" text-anchor="middle">✓ Complex Math</text>
        <text x="75" y="170" fill="#4ecdc4" font-family="Arial" font-size="12" text-anchor="middle">✓ Responsive UI</text>
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
