import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-4-svg v2 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="600" fill="#0a0a2a"/>
    
    <!-- Title -->
    <text x="400" y="60" fill="white" font-family="Arial" font-size="24" text-anchor="middle">AI Pattern Assistants</text>
    <text x="400" y="90" fill="#8a9bb5" font-family="Arial" font-size="16" text-anchor="middle">Automated design exploration</text>

    <!-- Code Generation Section -->
    <g transform="translate(100,150)">
        <rect width="200" height="120" rx="5" fill="#1e3c72"/>
        <text x="100" y="30" fill="white" font-family="Arial" font-size="14" text-anchor="middle">GPT Generating Code</text>
        <!-- Code-like text -->
        <text x="20" y="60" fill="#4ecdc4" font-family="monospace" font-size="12">createPath();</text>
        <text x="20" y="80" fill="#4ecdc4" font-family="monospace" font-size="12">adjustStroke();</text>
        <text x="20" y="100" fill="#4ecdc4" font-family="monospace" font-size="12">applyEffect();</text>
    </g>

    <!-- Process Arrows -->
    <g transform="translate(320,210)">
        <path d="M 0,0 L 60,0" stroke="white" stroke-width="2" marker-end="url(#arrowhead)"/>
    </g>

    <!-- Pattern Generation -->
    <g transform="translate(400,150)">
        <!-- Original brushstroke -->
        <g transform="translate(0,0)">
            <text x="50" y="-10" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Original</text>
            <path d="M 0,30 C 25,0 75,60 100,30" 
                  stroke="#4a6a9a" 
                  stroke-width="8" 
                  stroke-linecap="round" 
                  fill="none"/>
        </g>

        <!-- AI Variations -->
        <g transform="translate(150,0)">
            <text x="100" y="-10" fill="white" font-family="Arial" font-size="12" text-anchor="middle">AI Generated Variations</text>
            
            <!-- Variation 1 - Different stroke profile -->
            <path d="M 0,30 C 25,0 75,60 100,30" 
                  stroke="#4a6a9a" 
                  stroke-width="12" 
                  stroke-linecap="square" 
                  fill="none"/>
                  
            <!-- Variation 2 - Path manipulation -->
            <path d="M 0,80 C 25,50 75,110 100,80" 
                  stroke="#4a6a9a" 
                  stroke-width="8" 
                  stroke-linecap="round" 
                  stroke-dasharray="4 4"
                  fill="none"/>
                  
            <!-- Variation 3 - Complex effect -->
            <path d="M 0,130 C 25,100 75,160 100,130" 
                  stroke="#4a6a9a" 
                  stroke-width="8" 
                  stroke-linecap="round"
                  filter="url(#shadow)"
                  fill="none"/>
        </g>
    </g>

    <!-- Technical Details -->
    <g transform="translate(100,350)">
        <rect width="600" height="100" rx="5" fill="#1e3c72" opacity="0.7"/>
        <text x="20" y="30" fill="white" font-family="Arial" font-size="14">AI Understanding:</text>
        <text x="40" y="55" fill="#8a9bb5" font-family="Arial" font-size="12">• Stroke Weight Management</text>
        <text x="40" y="75" fill="#8a9bb5" font-family="Arial" font-size="12">• Path Manipulation</text>
        <text x="240" y="55" fill="#8a9bb5" font-family="Arial" font-size="12">• Effect Application</text>
        <text x="240" y="75" fill="#8a9bb5" font-family="Arial" font-size="12">• Pattern Analysis</text>
        <text x="440" y="55" fill="#8a9bb5" font-family="Arial" font-size="12">• Market Trends</text>
        <text x="440" y="75" fill="#8a9bb5" font-family="Arial" font-size="12">• Design Principles</text>
    </g>

    <!-- Definitions -->
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="white"/>
        </marker>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
</svg>`}
        </CodeBox>
    </Chapter>
);
