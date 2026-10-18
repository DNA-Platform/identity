import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ state-saving-viz v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`${''}<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="600" fill="#1a1a2a"/>
    
    <!-- Original Document State -->
    <g transform="translate(50,50)">
        <text x="150" y="-20" fill="white" font-family="Arial" font-size="16" text-anchor="middle">Исходный документ</text>
        <rect width="300" height="200" fill="#2a4a8a" rx="5"/>
        
        <!-- Example Pattern -->
        <g transform="translate(25,25)">
            <!-- Grid -->
            <rect width="250" height="150" fill="#FFD700"/>
            <g stroke="#fff8e0" stroke-width="2">
                <path d="M 0,0 L 250,0 M 0,50 L 250,50 M 0,100 L 250,100 M 0,150 L 250,150"/>
                <path d="M 0,0 L 0,150 M 83,0 L 83,150 M 166,0 L 166,150 M 250,0 L 250,150"/>
            </g>
            
            <!-- Selected Elements (highlighted) -->
            <g stroke="#ff6b6b" stroke-width="3" fill="none">
                <circle cx="83" cy="50" r="20"/>
                <circle cx="166" cy="100" r="20"/>
            </g>
        </g>
    </g>
    
    <!-- Save State Action -->
    <g transform="translate(400,100)">
        <rect width="150" height="40" fill="#2a8a4a" rx="5"/>
        <text x="75" y="25" fill="white" font-family="Arial" font-size="14" text-anchor="middle">Сохранить ⤵</text>
    </g>
    
    <!-- Stored Metadata -->
    <g transform="translate(600,50)">
        <text x="100" y="-20" fill="white" font-family="Arial" font-size="16" text-anchor="middle">Метаданные XMP</text>
        <rect width="200" height="200" fill="#2a4a8a" rx="5"/>
        <g transform="translate(20,20)">
            <text x="0" y="20" fill="#4ecdc4" font-family="monospace" font-size="10">{"savedState": {</text>
            <text x="0" y="40" fill="#4ecdc4" font-family="monospace" font-size="10">  "circles": [</text>
            <text x="0" y="60" fill="#4ecdc4" font-family="monospace" font-size="10">    {x: 83, y: 50},</text>
            <text x="0" y="80" fill="#4ecdc4" font-family="monospace" font-size="10">    {x: 166, y: 100}</text>
            <text x="0" y="100" fill="#4ecdc4" font-family="monospace" font-size="10">  ],</text>
            <text x="0" y="120" fill="#4ecdc4" font-family="monospace" font-size="10">  "properties": {</text>
            <text x="0" y="140" fill="#4ecdc4" font-family="monospace" font-size="10">    "radius": 20,</text>
            <text x="0" y="160" fill="#4ecdc4" font-family="monospace" font-size="10">    "stroke": 3</text>
            <text x="0" y="180" fill="#4ecdc4" font-family="monospace" font-size="10">  }}</text>
        </g>
    </g>
    
    <!-- Modified Document -->
    <g transform="translate(50,300)">
        <text x="150" y="-20" fill="white" font-family="Arial" font-size="16" text-anchor="middle">Изменённый документ</text>
        <rect width="300" height="200" fill="#2a4a8a" rx="5"/>
        
        <!-- Example Pattern -->
        <g transform="translate(25,25)">
            <!-- Grid -->
            <rect width="250" height="150" fill="#FFD700"/>
            <g stroke="#fff8e0" stroke-width="2">
                <path d="M 0,0 L 250,0 M 0,50 L 250,50 M 0,100 L 250,100 M 0,150 L 250,150"/>
                <path d="M 0,0 L 0,150 M 83,0 L 83,150 M 166,0 L 166,150 M 250,0 L 250,150"/>
            </g>
            
            <!-- Modified Elements -->
            <g stroke="#fff8e0" stroke-width="5" fill="none">
                <circle cx="83" cy="50" r="30"/>
                <circle cx="166" cy="100" r="15"/>
            </g>
        </g>
    </g>
    
    <!-- Restore Action -->
    <g transform="translate(400,350)">
        <rect width="150" height="40" fill="#8a2a2a" rx="5"/>
        <text x="75" y="25" fill="white" font-family="Arial" font-size="14" text-anchor="middle">⤴ Восстановить</text>
    </g>
    
    <!-- Results Preview -->
    <g transform="translate(600,300)">
        <text x="100" y="-20" fill="white" font-family="Arial" font-size="16" text-anchor="middle">Результат</text>
        <rect width="200" height="200" fill="#2a4a8a" rx="5"/>
        
        <!-- Example Pattern -->
        <g transform="translate(25,25)">
            <!-- Grid -->
            <rect width="150" height="150" fill="#FFD700"/>
            <g stroke="#fff8e0" stroke-width="2">
                <path d="M 0,0 L 150,0 M 0,50 L 150,50 M 0,100 L 150,100 M 0,150 L 150,150"/>
                <path d="M 0,0 L 0,150 M 50,0 L 50,150 M 100,0 L 100,150 M 150,0 L 150,150"/>
            </g>
            
            <!-- Restored Elements -->
            <g stroke="#ff6b6b" stroke-width="3" fill="none">
                <circle cx="50" cy="50" r="20"/>
                <circle cx="100" cy="100" r="20"/>
            </g>
            
            <!-- Only Selected Elements Restored -->
            <text x="75" y="180" fill="#4ecdc4" font-family="Arial" font-size="12" text-anchor="middle">Только выделенные</text>
            <text x="75" y="195" fill="#4ecdc4" font-family="Arial" font-size="12" text-anchor="middle">элементы</text>
        </g>
    </g>

    <!-- Signature -->
    <text x="20" y="580" fill="white" font-family="Arial" font-size="12" opacity="0.6">Seren</text>
</svg>`}
        </CodeBox>
    </Chapter>
);
