import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ blocked-ui-viz v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="400" fill="#1a1a2a"/>
    
    <!-- Traditional Script Timeline -->
    <g transform="translate(50,50)">
        <text x="0" y="-20" fill="white" font-family="Arial" font-size="16">Traditional Script: UI Blocked</text>
        
        <!-- Timeline -->
        <rect width="700" height="60" fill="#4a1515" rx="5"/>
        
        <!-- Script Execution Block -->
        <rect x="10" y="10" width="680" height="40" fill="#8b1919"/>
        <text x="350" y="35" fill="white" font-family="Arial" font-size="14" text-anchor="middle">One Long Script (20 minutes)</text>
        
        <!-- Frozen UI Indicator -->
        <g transform="translate(10,80)">
            <text x="0" y="0" fill="#ff6b6b" font-family="Arial" font-size="12">⚠️ UI Frozen</text>
            <line x1="0" x2="680" y1="10" y2="10" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="4 4"/>
        </g>
    </g>
    
    <!-- New Architecture Timeline -->
    <g transform="translate(50,250)">
        <text x="0" y="-20" fill="white" font-family="Arial" font-size="16">New Architecture: UI Responsive</text>
        
        <!-- Timeline -->
        <rect width="700" height="60" fill="#153d15" rx="5"/>
        
        <!-- Task Blocks -->
        <g>
            <rect x="10" y="10" width="40" height="40" fill="#2a8a2a"/>
            <rect x="60" y="10" width="40" height="40" fill="#2a8a2a"/>
            <rect x="110" y="10" width="40" height="40" fill="#2a8a2a"/>
            <rect x="160" y="10" width="40" height="40" fill="#2a8a2a"/>
            <rect x="210" y="10" width="40" height="40" fill="#2a8a2a"/>
            <!-- More task blocks -->
            <rect x="260" y="10" width="40" height="40" fill="#2a8a2a"/>
            <rect x="310" y="10" width="40" height="40" fill="#2a8a2a"/>
            <rect x="360" y="10" width="40" height="40" fill="#2a8a2a"/>
            <rect x="410" y="10" width="40" height="40" fill="#2a8a2a"/>
            <rect x="460" y="10" width="40" height="40" fill="#2a8a2a"/>
        </g>
        
        <!-- UI Updates -->
        <g transform="translate(10,80)">
            <text x="0" y="0" fill="#4ecdc4" font-family="Arial" font-size="12">✓ UI Updates Between Tasks</text>
            <path d="M 0,10 L 680,10" stroke="#4ecdc4" stroke-width="2"/>
            <!-- UI update indicators -->
            <g fill="#4ecdc4">
                <circle cx="50" cy="10" r="3"/>
                <circle cx="100" cy="10" r="3"/>
                <circle cx="150" cy="10" r="3"/>
                <circle cx="200" cy="10" r="3"/>
                <circle cx="250" cy="10" r="3"/>
                <circle cx="300" cy="10" r="3"/>
                <circle cx="350" cy="10" r="3"/>
                <circle cx="400" cy="10" r="3"/>
                <circle cx="450" cy="10" r="3"/>
            </g>
        </g>
    </g>

    <!-- Signature -->
    <text x="20" y="380" fill="white" font-family="Arial" font-size="12" opacity="0.6">Seren</text>
</svg>`}
        </CodeBox>
    </Chapter>
);
