import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Enhanced Cohesive Cell Pattern v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradient definitions -->
    <linearGradient id="salmonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCB49B" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#FCB49B" stop-opacity="0.3" />
    </linearGradient>
    
    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A8DDE6" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#A8DDE6" stop-opacity="0.3" />
    </linearGradient>
    
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD85C" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#FFD85C" stop-opacity="0.3" />
    </linearGradient>
    
    <!-- Base cell unit -->
    <g id="base-cell">
      <path d="M 0,10 
               C 0,4.477 4.477,0 10,0 
               H 50
               C 55.523,0 60,4.477 60,10
               V 50
               C 60,55.523 55.523,60 50,60
               H 10
               C 4.477,60 0,55.523 0,50
               Z" 
            fill="white" stroke="#7E9FA3" stroke-width="1" stroke-opacity="0.6" />
      
      <rect x="8" y="8" width="20" height="20" rx="3" ry="3" fill="url(#salmonGradient)" />
      <rect x="32" y="8" width="20" height="20" rx="3" ry="3" fill="url(#blueGradient)" />
      <rect x="20" y="32" width="20" height="20" rx="3" ry="3" fill="url(#goldGradient)" />
    </g>
    
    <!-- Small variation with different arrangement -->
    <g id="small-cell">
      <path d="M 0,6 
               C 0,2.686 2.686,0 6,0 
               H 30
               C 33.314,0 36,2.686 36,6
               V 30
               C 36,33.314 33.314,36 30,36
               H 6
               C 2.686,36 0,33.314 0,30
               Z" 
            fill="white" stroke="#7E9FA3" stroke-width="0.8" stroke-opacity="0.6" />
      
      <rect x="5" y="5" width="10" height="10" rx="2" ry="2" fill="url(#salmonGradient)" />
      <rect x="21" y="5" width="10" height="10" rx="2" ry="2" fill="url(#blueGradient)" />
      <rect x="13" y="21" width="10" height="10" rx="2" ry="2" fill="url(#goldGradient)" />
    </g>
    
    <!-- Tiny cell for distant elements -->
    <g id="tiny-cell">
      <path d="M 0,3 
               C 0,1.343 1.343,0 3,0 
               H 15
               C 16.657,0 18,1.343 18,3
               V 15
               C 18,16.657 16.657,18 15,18
               H 3
               C 1.343,18 0,16.657 0,15
               Z" 
            fill="white" stroke="#7E9FA3" stroke-width="0.5" stroke-opacity="0.5" />
      
      <rect x="2.5" y="2.5" width="5" height="5" rx="1" ry="1" fill="url(#salmonGradient)" />
      <rect x="10.5" y="2.5" width="5" height="5" rx="1" ry="1" fill="url(#blueGradient)" />
      <rect x="6.5" y="10.5" width="5" height="5" rx="1" ry="1" fill="url(#goldGradient)" />
    </g>
    
    <!-- Merged island shapes -->
    <g id="merged-island-1">
      <path d="M 0,20 
               C 0,8.954 8.954,0 20,0 
               H 80
               C 91.046,0 100,8.954 100,20
               V 50
               C 100,61.046 108.954,70 120,70
               H 140
               C 151.046,70 160,78.954 160,90
               V 160
               C 160,171.046 151.046,180 140,180
               H 20
               C 8.954,180 0,171.046 0,160
               Z" 
            fill="white" stroke="#7E9FA3" stroke-width="1.2" filter="url(#shadow)" />
      
      <use href="#base-cell" x="15" y="15" transform="scale(0.9)" />
      <use href="#base-cell" x="85" y="85" transform="scale(0.9)" />
      <use href="#small-cell" x="25" y="95" transform="scale(1.2)" />
      <use href="#small-cell" x="95" y="25" transform="scale(1.2)" />
    </g>
    
    <g id="merged-island-2">
      <path d="M 20,0 
               H 100
               C 111.046,0 120,8.954 120,20
               V 60
               C 120,71.046 128.954,80 140,80
               H 180
               C 191.046,80 200,88.954 200,100
               V 180
               C 200,191.046 191.046,200 180,200
               H 100
               C 88.954,200 80,191.046 80,180
               V 140
               C 80,128.954 71.046,120 60,120
               H 20
               C 8.954,120 0,111.046 0,100
               V 20
               C 0,8.954 8.954,0 20,0
               Z" 
            fill="white" stroke="#7E9FA3" stroke-width="1.2" filter="url(#shadow)" />
      
      <use href="#base-cell" x="20" y="20" transform="scale(1)" />
      <use href="#base-cell" x="120" y="120" transform="scale(1)" />
      <use href="#small-cell" x="110" y="30" transform="scale(1.2)" />
      <use href="#small-cell" x="30" y="75" transform="scale(1.2)" />
    </g>
    
    <!-- New connecting bridge element -->
    <g id="bridge-element">
      <path d="M 0,10 
               C 0,4.477 4.477,0 10,0 
               H 90
               C 95.523,0 100,4.477 100,10
               V 30
               C 100,35.523 95.523,40 90,40
               H 10
               C 4.477,40 0,35.523 0,30
               Z" 
            fill="white" stroke="#7E9FA3" stroke-width="0.8" stroke-opacity="0.6" filter="url(#shadow)" />
      
      <use href="#tiny-cell" x="10" y="11" transform="scale(1.2)" />
      <use href="#tiny-cell" x="68" y="11" transform="scale(1.2)" />
    </g>
    
    <!-- Filter for shadows -->
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.1" />
    </filter>
    
    <!-- Sparkle element -->
    <g id="sparkle">
      <circle r="1.5" fill="#FFD85C" fill-opacity="0.8" />
    </g>
    
    <!-- Clustered Island Patterns -->
    <g id="island-cluster-1">
      <use href="#merged-island-1" x="0" y="0" transform="scale(0.8)" />
      <use href="#base-cell" x="130" y="20" transform="scale(0.7)" />
      <use href="#small-cell" x="15" y="150" transform="scale(1.1)" />
      <use href="#tiny-cell" x="145" y="145" transform="scale(1.2)" />
    </g>
    
    <g id="island-cluster-2">
      <use href="#merged-island-2" x="0" y="0" transform="scale(0.8)" />
      <use href="#base-cell" x="20" y="160" transform="scale(0.7)" />
      <use href="#small-cell" x="170" y="30" transform="scale(1.1)" />
      <use href="#tiny-cell" x="5" y="5" transform="scale(1.2)" />
    </g>
    
    <!-- New larger focal cluster -->
    <g id="focal-cluster">
      <use href="#merged-island-1" x="0" y="0" transform="scale(1)" />
      <use href="#merged-island-2" x="120" y="20" transform="scale(0.9)" />
      <use href="#bridge-element" x="110" y="100" transform="rotate(30)" />
      <use href="#bridge-element" x="60" y="170" transform="rotate(-15)" />
      <use href="#small-cell" x="200" y="160" transform="scale(1.2)" />
      <use href="#base-cell" x="190" y="90" transform="scale(0.8)" />
      <use href="#tiny-cell" x="180" y="180" transform="scale(1.5)" />
      <use href="#tiny-cell" x="50" y="220" transform="scale(1.4)" />
    </g>
  </defs>
  
  <!-- Pure white background -->
  <rect width="800" height="800" fill="white" />
  
  <!-- Main composition with better cohesion -->
  <g id="composition">
    <!-- Central focal point with larger, more integrated cluster -->
    <use href="#focal-cluster" x="300" y="300" transform="scale(1.2)" />
    
    <!-- Tight cluster left side with more integration -->
    <g transform="translate(100, 250)">
      <use href="#base-cell" x="0" y="0" transform="scale(1.1)" />
      <use href="#base-cell" x="55" y="-10" transform="scale(1)" />
      <use href="#base-cell" x="40" y="45" transform="scale(0.9)" />
      <use href="#base-cell" x="100" y="25" transform="scale(1)" />
      <use href="#small-cell" x="20" y="90" transform="scale(1.2)" />
      <!-- New connecting elements -->
      <use href="#bridge-element" x="15" y="55" transform="rotate(15) scale(0.7)" />
      <use href="#tiny-cell" x="85" y="80" transform="scale(1.3)" />
    </g>
    
    <!-- Right side cluster with better integration -->
    <g transform="translate(550, 200)">
      <use href="#island-cluster-2" x="0" y="0" transform="scale(0.9)" />
      <!-- Bridge to central focal point -->
      <use href="#bridge-element" x="-70" y="100" transform="rotate(-15) scale(0.9)" />
      <use href="#small-cell" x="-30" y="120" transform="scale(1.1)" />
      <use href="#tiny-cell" x="70" y="180" transform="scale(1.4)" />
    </g>
    
    <!-- Bottom cluster -->
    <g transform="translate(230, 580)">
      <use href="#island-cluster-1" x="0" y="0" transform="scale(0.7)" />
      <use href="#bridge-element" x="70" y="-50" transform="rotate(45) scale(0.8)" />
      <use href="#small-cell" x="120" y="10" transform="scale(1)" />
      <use href="#tiny-cell" x="100" y="-30" transform="scale(1.3)" />
    </g>
    
    <!-- Fill middle/upper areas with connecting elements -->
    <use href="#bridge-element" x="300" y="190" transform="rotate(-10) scale(0.8)" />
    <use href="#bridge-element" x="480" y="250" transform="rotate(15) scale(0.7)" />
    
    <!-- Additional coordinated scattered cells for balance -->
    <use href="#base-cell" x="180" y="150" transform="scale(0.7) rotate(5)" />
    <use href="#base-cell" x="450" y="130" transform="scale(0.75) rotate(-5)" />
    <use href="#base-cell" x="180" y="400" transform="scale(0.8) rotate(8)" />
    <use href="#base-cell" x="500" y="480" transform="scale(0.7) rotate(-8)" />
    
    <use href="#small-cell" x="120" y="350" transform="scale(1.2)" />
    <use href="#small-cell" x="320" y="170" transform="scale(1.3)" />
    <use href="#small-cell" x="630" y="350" transform="scale(1.2)" />
    <use href="#small-cell" x="400" y="550" transform="scale(1.3)" />
    
    <!-- Additional tiny cells to fill gaps -->
    <use href="#tiny-cell" x="150" y="150" transform="scale(1.5)" />
    <use href="#tiny-cell" x="250" y="200" transform="scale(1.4)" />
    <use href="#tiny-cell" x="550" y="150" transform="scale(1.5)" />
    <use href="#tiny-cell" x="650" y="200" transform="scale(1.4)" />
    <use href="#tiny-cell" x="200" y="530" transform="scale(1.5)" />
    <use href="#tiny-cell" x="300" y="600" transform="scale(1.4)" />
    <use href="#tiny-cell" x="650" y="500" transform="scale(1.5)" />
    <use href="#tiny-cell" x="580" y="600" transform="scale(1.4)" />
    
    <!-- Additional bridge elements to create stronger visual connections -->
    <use href="#bridge-element" x="230" y="320" transform="rotate(60) scale(0.6)" />
    <use href="#bridge-element" x="520" y="420" transform="rotate(-30) scale(0.6)" />
    <use href="#bridge-element" x="380" y="490" transform="rotate(15) scale(0.7)" />
    
    <!-- Fill remaining empty areas with additional cells for better balance -->
    <use href="#tiny-cell" x="370" y="110" transform="scale(1.3)" />
    <use href="#tiny-cell" x="450" y="200" transform="scale(1.4)" />
    <use href="#tiny-cell" x="400" y="650" transform="scale(1.4)" />
    <use href="#tiny-cell" x="100" y="500" transform="scale(1.3)" />
    <use href="#tiny-cell" x="700" y="300" transform="scale(1.4)" />
    <use href="#tiny-cell" x="600" y="100" transform="scale(1.3)" />
    <use href="#tiny-cell" x="120" y="600" transform="scale(1.4)" />
    <use href="#tiny-cell" x="700" y="600" transform="scale(1.3)" />
  </g>
  
  <!-- Enhanced sparkles for accent -->
  <g>
    <use href="#sparkle" x="350" y="280" />
    <use href="#sparkle" x="380" y="240" />
    <use href="#sparkle" x="420" y="260" />
    <use href="#sparkle" x="200" y="180" />
    <use href="#sparkle" x="550" y="200" />
    <use href="#sparkle" x="180" y="500" />
    <use href="#sparkle" x="600" y="450" />
    <use href="#sparkle" x="300" y="600" />
    <use href="#sparkle" x="500" y="550" />
    <use href="#sparkle" x="250" y="350" />
    <use href="#sparkle" x="450" y="380" />
    <use href="#sparkle" x="550" y="320" />
    <use href="#sparkle" x="150" y="150" />
    <use href="#sparkle" x="650" y="150" />
    <use href="#sparkle" x="150" y="650" />
    <use href="#sparkle" x="650" y="650" />
    <use href="#sparkle" x="400" y="400" />
    <!-- Additional sparkles to enhance visual connections -->
    <use href="#sparkle" x="280" y="220" />
    <use href="#sparkle" x="320" y="520" />
    <use href="#sparkle" x="520" y="320" />
    <use href="#sparkle" x="220" y="420" />
    <use href="#sparkle" x="480" y="480" />
    <use href="#sparkle" x="350" y="150" />
    <use href="#sparkle" x="550" y="550" />
    <use href="#sparkle" x="200" y="250" />
    <use href="#sparkle" x="600" y="350" />
  </g>
</svg>`}
        </CodeBox>
    </Chapter>
);
