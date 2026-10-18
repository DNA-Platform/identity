import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-2-svg v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="600" fill="#0a0a2a"/>
    
    <!-- Title -->
    <text x="400" y="60" fill="white" font-family="Arial" font-size="24" text-anchor="middle">Pattern Magic</text>
    <text x="400" y="90" fill="#8a9bb5" font-family="Arial" font-size="16" text-anchor="middle">Your style, infinite possibilities</text>

    <!-- Original Pattern -->
    <g transform="translate(100,200)">
        <text x="60" y="-20" fill="white" font-family="Arial" font-size="16" text-anchor="middle">Your Pattern</text>
        <!-- Brushstroke pattern -->
        <path d="M 10,60 C 30,30 90,90 110,60" 
              stroke="#4a6a9a" 
              stroke-width="12" 
              stroke-linecap="round" 
              fill="none"/>
    </g>

    <!-- Transformation Arrows -->
    <g transform="translate(250,260)">
        <path d="M 0,-20 L 80,-20" stroke="white" stroke-width="2" marker-end="url(#arrowhead)"/>
        <path d="M 0,0 L 80,0" stroke="white" stroke-width="2" marker-end="url(#arrowhead)"/>
        <path d="M 0,20 L 80,20" stroke="white" stroke-width="2" marker-end="url(#arrowhead)"/>
    </g>

    <!-- Variations -->
    <g transform="translate(400,150)">
        <text x="100" y="-20" fill="white" font-family="Arial" font-size="16" text-anchor="middle">Magical Variations</text>
        
        <!-- Thicker stroke -->
        <path d="M 10,60 C 30,30 90,90 110,60" 
              stroke="#4a6a9a" 
              stroke-width="20" 
              stroke-linecap="round" 
              fill="none"/>
              
        <!-- Rotated -->
        <g transform="translate(0,100)">
            <path d="M 10,60 C 30,30 90,90 110,60" 
                  stroke="#4a6a9a" 
                  stroke-width="12" 
                  stroke-linecap="round" 
                  fill="none"
                  transform="rotate(-15,60,60)"/>
        </g>
        
        <!-- Different curve -->
        <g transform="translate(0,200)">
            <path d="M 10,60 C 50,20 70,100 110,60" 
                  stroke="#4a6a9a" 
                  stroke-width="12" 
                  stroke-linecap="round" 
                  fill="none"/>
        </g>
    </g>

    <!-- Google Drive Icon -->
    <g transform="translate(650,200)">
        <rect width="80" height="60" rx="5" fill="#4285f4"/>
        <polygon points="650,230 690,230 670,250" fill="#0f9d58"/>
        <text x="40" y="90" fill="white" font-family="Arial" font-size="12" text-anchor="middle">Saved to Drive</text>
    </g>

    <!-- Arrow definitions -->
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="white"/>
        </marker>
    </defs>
</svg>`}
        </CodeBox>
    </Chapter>
);
