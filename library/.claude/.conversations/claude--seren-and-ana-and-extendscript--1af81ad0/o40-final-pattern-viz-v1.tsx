import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ final-pattern-viz v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="600" fill="#1a1a2a"/>
    
    <!-- Main Pattern Display -->
    <g transform="translate(300,50)">
        <rect width="450" height="450" fill="#FFD700"/>
        
        <!-- Base Grid Layer -->
        <g stroke="#fff8e0" stroke-width="4" opacity="0.3">
            <path d="M 0,0 L 450,0 M 0,75 L 450,75 M 0,150 L 450,150 M 0,225 L 450,225 M 0,300 L 450,300 M 0,375 L 450,375 M 0,450 L 450,450"/>
            <path d="M 0,0 L 0,450 M 75,0 L 75,450 M 150,0 L 150,450 M 225,0 L 225,450 M 300,0 L 300,450 M 375,0 L 375,450 M 450,0 L 450,450"/>
        </g>
        
        <!-- Flowing Curves Layer -->
        <g stroke="#fff8e0" stroke-width="6" fill="none">
            <path d="M 0,225 C 75,150 150,300 225,225 S 375,150 450,225"/>
            <path d="M 0,75 C 75,0 150,150 225,75 S 375,0 450,75"/>
            <path d="M 0,375 C 75,300 150,450 225,375 S 375,300 450,375"/>
        </g>
        
        <!-- Geometric Elements Layer -->
        <g stroke="#fff8e0" stroke-width="3" fill="none">
            <circle cx="75" cy="75" r="30"/>
            <circle cx="375" cy="375" r="30"/>
            <circle cx="225" cy="225" r="45"/>
        </g>
    </g>
    
    <!-- Layers Panel -->
    <g transform="translate(50,50)">
        <rect width="200" height="450" fill="#2a4a8a" rx="5"/>
        <text x="100" y="30" fill="white" font-family="Arial" font-size="14" text-anchor="middle">Layers</text>
        
        <!-- Layer 3: Geometric Elements -->
        <g transform="translate(10,60)">
            <rect width="180" height="120" fill="#1a1a2a" rx="3"/>
            <text x="10" y="20" fill="white" font-family="Arial" font-size="12">Layer 3: Geometric</text>
            <!-- Mini Preview -->
            <g transform="translate(10,30) scale(0.3)" stroke="white" fill="none">
                <circle cx="50" cy="50" r="30"/>
                <circle cx="150" cy="150" r="30"/>
            </g>
            <text x="10" y="100" fill="#8a9bb5" font-family="monospace" font-size="10">• 3 circles</text>
            <text x="10" y="115" fill="#8a9bb5" font-family="monospace" font-size="10">• stroke: 3px</text>
        </g>
        
        <!-- Layer 2: Flowing Curves -->
        <g transform="translate(10,190)">
            <rect width="180" height="120" fill="#1a1a2a" rx="3"/>
            <text x="10" y="20" fill="white" font-family="Arial" font-size="12">Layer 2: Curves</text>
            <!-- Mini Preview -->
            <g transform="translate(10,30) scale(0.3)" stroke="white" fill="none">
                <path d="M 0,100 C 50,50 150,150 200,100"/>
            </g>
            <text x="10" y="100" fill="#8a9bb5" font-family="monospace" font-size="10">• 3 bezier curves</text>
            <text x="10" y="115" fill="#8a9bb5" font-family="monospace" font-size="10">• stroke: 6px</text>
        </g>
        
        <!-- Layer 1: Base Grid -->
        <g transform="translate(10,320)">
            <rect width="180" height="120" fill="#1a1a2a" rx="3"/>
            <text x="10" y="20" fill="white" font-family="Arial" font-size="12">Layer 1: Grid</text>
            <!-- Mini Preview -->
            <g transform="translate(10,30) scale(0.3)" stroke="white">
                <path d="M 0,0 L 200,0 M 0,50 L 200,50 M 0,100 L 200,100"/>
                <path d="M 0,0 L 0,100 M 50,0 L 50,100 M 100,0 L 100,100"/>
            </g>
            <text x="10" y="100" fill="#8a9bb5" font-family="monospace" font-size="10">• 7x7 grid</text>
            <text x="10" y="115" fill="#8a9bb5" font-family="monospace" font-size="10">• stroke: 4px</text>
        </g>
    </g>

    <!-- Signature -->
    <text x="20" y="580" fill="white" font-family="Arial" font-size="12" opacity="0.6">Seren</text>
</svg>`}
        </CodeBox>
    </Chapter>
);
