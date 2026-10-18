import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ milestone-3-svg v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="600" fill="#0a0a2a"/>
    
    <!-- Title -->
    <text x="400" y="60" fill="white" font-family="Arial" font-size="24" text-anchor="middle">Magic Words</text>
    <text x="400" y="90" fill="#8a9bb5" font-family="Arial" font-size="16" text-anchor="middle">Your patterns, perfectly described</text>

    <!-- Pattern Example -->
    <g transform="translate(100,200)">
        <!-- Grid pattern -->
        <rect width="120" height="120" fill="none" stroke="#4a6a9a" stroke-width="2"/>
        <g>
            <line x1="30" y1="0" x2="30" y2="120" stroke="#4a6a9a"/>
            <line x1="60" y1="0" x2="60" y2="120" stroke="#4a6a9a"/>
            <line x1="90" y1="0" x2="90" y2="120" stroke="#4a6a9a"/>
            <line x1="0" y1="30" x2="120" y2="30" stroke="#4a6a9a"/>
            <line x1="0" y1="60" x2="120" y2="60" stroke="#4a6a9a"/>
            <line x1="0" y1="90" x2="120" y2="90" stroke="#4a6a9a"/>
        </g>
    </g>

    <!-- Magic Sparkles -->
    <g transform="translate(250,260)">
        <path d="M 0,0 L 80,0" stroke="white" stroke-width="2" stroke-dasharray="5,5"/>
        <!-- Sparkles -->
        <circle cx="20" cy="-10" r="2" fill="yellow"/>
        <circle cx="40" cy="10" r="2" fill="yellow"/>
        <circle cx="60" cy="-5" r="2" fill="yellow"/>
    </g>

    <!-- Description Card -->
    <g transform="translate(400,150)">
        <rect width="300" height="200" rx="10" fill="#1e3c72"/>
        
        <!-- Description Text -->
        <text x="20" y="30" fill="white" font-family="Arial" font-size="14">Modern geometric pattern</text>
        <text x="20" y="60" fill="#8a9bb5" font-family="Arial" font-size="12">Perfect for contemporary design</text>
        
        <!-- Keywords -->
        <g transform="translate(20,100)">
            <rect width="80" height="25" rx="12" fill="#4a6a9a"/>
            <text x="40" y="17" fill="white" font-family="Arial" font-size="12" text-anchor="middle">geometric</text>
        </g>
        
        <g transform="translate(110,100)">
            <rect width="70" height="25" rx="12" fill="#4a6a9a"/>
            <text x="35" y="17" fill="white" font-family="Arial" font-size="12" text-anchor="middle">modern</text>
        </g>
        
        <g transform="translate(190,100)">
            <rect width="90" height="25" rx="12" fill="#4a6a9a"/>
            <text x="45" y="17" fill="white" font-family="Arial" font-size="12" text-anchor="middle">minimalist</text>
        </g>
        
        <!-- Edit Button -->
        <g transform="translate(20,150)">
            <rect width="100" height="30" rx="15" fill="#2a4a8a"/>
            <text x="50" y="20" fill="white" font-family="Arial" font-size="14" text-anchor="middle">Edit</text>
        </g>
        
        <!-- Approve Button -->
        <g transform="translate(180,150)">
            <rect width="100" height="30" rx="15" fill="#2a8a4a"/>
            <text x="50" y="20" fill="white" font-family="Arial" font-size="14" text-anchor="middle">Approve</text>
        </g>
    </g>
</svg>`}
        </CodeBox>
    </Chapter>
);
