import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Evenly Distributed Cell Pattern with Continuous Rotation v1 ]]</Title>
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
    
    <!-- Bridge connecting element -->
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
  </defs>
  
  <!-- Pure white background -->
  <rect width="800" height="800" fill="white" />
  
  <!-- Evenly distributed composition with rotational continuity -->
  <g id="composition">
    <!-- Top quadrant pattern with rotation flow -->
    <g id="top-left">
      <use href="#base-cell" x="100" y="100" transform="scale(1.1) rotate(0)" />
      <use href="#small-cell" x="180" y="100" transform="scale(1.3) rotate(5)" />
      <use href="#base-cell" x="245" y="100" transform="scale(0.9) rotate(10)" />
      <use href="#small-cell" x="100" y="170" transform="scale(1.2) rotate(5)" />
      <use href="#bridge-element" x="150" y="100" transform="scale(0.7) rotate(0)" />
      <use href="#bridge-element" x="215" y="105" transform="scale(0.6) rotate(5)" />
      <use href="#tiny-cell" x="150" y="150" transform="scale(1.5) rotate(0)" />
      <use href="#tiny-cell" x="200" y="150" transform="scale(1.4) rotate(5)" />
      <use href="#tiny-cell" x="250" y="150" transform="scale(1.6) rotate(10)" />
    </g>
    
    <g id="top-right" transform="translate(400, 0)">
      <use href="#base-cell" x="100" y="100" transform="scale(1.1) rotate(15)" />
      <use href="#small-cell" x="180" y="100" transform="scale(1.3) rotate(20)" />
      <use href="#base-cell" x="245" y="100" transform="scale(0.9) rotate(25)" />
      <use href="#small-cell" x="100" y="170" transform="scale(1.2) rotate(20)" />
      <use href="#bridge-element" x="150" y="100" transform="scale(0.7) rotate(15)" />
      <use href="#bridge-element" x="215" y="105" transform="scale(0.6) rotate(20)" />
      <use href="#tiny-cell" x="150" y="150" transform="scale(1.5) rotate(15)" />
      <use href="#tiny-cell" x="200" y="150" transform="scale(1.4) rotate(20)" />
      <use href="#tiny-cell" x="250" y="150" transform="scale(1.6) rotate(25)" />
    </g>
    
    <!-- Middle section - previously empty area -->
    <g id="middle-section">
      <!-- Central merged islands with rotational flow -->
      <use href="#merged-island-1" x="220" y="300" transform="scale(0.7) rotate(0)" />
      <use href="#merged-island-2" x="380" y="300" transform="scale(0.65) rotate(15)" />
      <use href="#merged-island-1" x="540" y="300" transform="scale(0.7) rotate(30)" />
      
      <!-- Bridge elements connecting the islands with continuous rotation -->
      <use href="#bridge-element" x="335" y="330" transform="scale(0.7) rotate(7)" />
      <use href="#bridge-element" x="495" y="330" transform="scale(0.7) rotate(22)" />
      
      <!-- Central cluster of cells forming a directional flow -->
      <use href="#base-cell" x="300" y="400" transform="scale(1) rotate(5)" />
      <use href="#small-cell" x="370" y="400" transform="scale(1.1) rotate(10)" />
      <use href="#base-cell" x="440" y="400" transform="scale(0.9) rotate(15)" />
      <use href="#small-cell" x="500" y="400" transform="scale(1.2) rotate(20)" />
      
      <!-- Bridge elements creating continuity -->
      <use href="#bridge-element" x="350" y="400" transform="scale(0.6) rotate(7)" />
      <use href="#bridge-element" x="420" y="400" transform="scale(0.6) rotate(12)" />
      <use href="#bridge-element" x="480" y="400" transform="scale(0.6) rotate(17)" />
      
      <!-- Additional cells filling the middle vertical space -->
      <use href="#base-cell" x="250" y="480" transform="scale(0.9) rotate(0)" />
      <use href="#small-cell" x="320" y="480" transform="scale(1) rotate(5)" />
      <use href="#base-cell" x="400" y="480" transform="scale(0.95) rotate(10)" />
      <use href="#small-cell" x="480" y="480" transform="scale(1.1) rotate(15)" />
      <use href="#base-cell" x="550" y="480" transform="scale(0.9) rotate(20)" />
      
      <!-- Tiny cells filling gaps with rotational continuity -->
      <use href="#tiny-cell" x="300" y="350" transform="scale(1.4) rotate(0)" />
      <use href="#tiny-cell" x="350" y="350" transform="scale(1.5) rotate(5)" />
      <use href="#tiny-cell" x="400" y="350" transform="scale(1.6) rotate(10)" />
      <use href="#tiny-cell" x="450" y="350" transform="scale(1.5) rotate(15)" />
      <use href="#tiny-cell" x="500" y="350" transform="scale(1.4) rotate(20)" />
      
      <use href="#tiny-cell" x="280" y="440" transform="scale(1.5) rotate(0)" />
      <use href="#tiny-cell" x="340" y="440" transform="scale(1.4) rotate(5)" />
      <use href="#tiny-cell" x="400" y="440" transform="scale(1.6) rotate(10)" />
      <use href="#tiny-cell" x="460" y="440" transform="scale(1.5) rotate(15)" />
      <use href="#tiny-cell" x="520" y="440" transform="scale(1.4) rotate(20)" />
      
      <!-- Additional bridge elements to connect vertical sections -->
      <use href="#bridge-element" x="280" y="370" transform="rotate(90) scale(0.7)" />
      <use href="#bridge-element" x="400" y="370" transform="rotate(90) scale(0.7)" />
      <use href="#bridge-element" x="520" y="370" transform="rotate(90) scale(0.7)" />
    </g>
    
    <!-- Bottom quadrant pattern with rotation flow -->
    <g id="bottom-left">
      <use href="#base-cell" x="100" y="600" transform="scale(1.1) rotate(25)" />
      <use href="#small-cell" x="180" y="600" transform="scale(1.3) rotate(20)" />
      <use href="#base-cell" x="245" y="600" transform="scale(0.9) rotate(15)" />
      <use href="#small-cell" x="100" y="670" transform="scale(1.2) rotate(20)" />
      <use href="#bridge-element" x="150" y="600" transform="scale(0.7) rotate(25)" />
      <use href="#bridge-element" x="215" y="605" transform="scale(0.6) rotate(20)" />
      <use href="#tiny-cell" x="150" y="650" transform="scale(1.5) rotate(25)" />
      <use href="#tiny-cell" x="200" y="650" transform="scale(1.4) rotate(20)" />
      <use href="#tiny-cell" x="250" y="650" transform="scale(1.6) rotate(15)" />
    </g>
    
    <g id="bottom-right" transform="translate(400, 0)">
      <use href="#base-cell" x="100" y="600" transform="scale(1.1) rotate(10)" />
      <use href="#small-cell" x="180" y="600" transform="scale(1.3) rotate(5)" />
      <use href="#base-cell" x="245" y="600" transform="scale(0.9) rotate(0)" />
      <use href="#small-cell" x="100" y="670" transform="scale(1.2) rotate(5)" />
      <use href="#bridge-element" x="150" y="600" transform="scale(0.7) rotate(10)" />
      <use href="#bridge-element" x="215" y="605" transform="scale(0.6) rotate(5)" />
      <use href="#tiny-cell" x="150" y="650" transform="scale(1.5) rotate(10)" />
      <use href="#tiny-cell" x="200" y="650" transform="scale(1.4) rotate(5)" />
      <use href="#tiny-cell" x="250" y="650" transform="scale(1.6) rotate(0)" />
    </g>
    
    <!-- Left and right edges with rotational continuity -->
    <g id="left-edge">
      <use href="#merged-island-1" x="80" y="300" transform="scale(0.6) rotate(345)" />
      <use href="#base-cell" x="30" y="400" transform="scale(0.9) rotate(350)" />
      <use href="#small-cell" x="100" y="400" transform="scale(1) rotate(355)" />
      <use href="#bridge-element" x="70" y="400" transform="scale(0.6) rotate(352)" />
      <use href="#tiny-cell" x="50" y="350" transform="scale(1.4) rotate(345)" />
      <use href="#tiny-cell" x="80" y="350" transform="scale(1.5) rotate(350)" />
      <use href="#tiny-cell" x="110" y="350" transform="scale(1.6) rotate(355)" />
    </g>
    
    <g id="right-edge">
      <use href="#merged-island-1" x="680" y="300" transform="scale(0.6) rotate(35)" />
      <use href="#base-cell" x="630" y="400" transform="scale(0.9) rotate(30)" />
      <use href="#small-cell" x="700" y="400" transform="scale(1) rotate(25)" />
      <use href="#bridge-element" x="670" y="400" transform="scale(0.6) rotate(28)" />
      <use href="#tiny-cell" x="650" y="350" transform="scale(1.4) rotate(35)" />
      <use href="#tiny-cell" x="680" y="350" transform="scale(1.5) rotate(30)" />
      <use href="#tiny-cell" x="710" y="350" transform="scale(1.6) rotate(25)" />
    </g>
    
    <!-- Evenly distributed tiny cells across the canvas -->
    <g id="distributed-tiny-cells">
      <!-- Top area -->
      <use href="#tiny-cell" x="50" y="50" transform="scale(1.4) rotate(0)" />
      <use href="#tiny-cell" x="150" y="50" transform="scale(1.3) rotate(5)" />
      <use href="#tiny-cell" x="250" y="50" transform="scale(1.5) rotate(10)" />
      <use href="#tiny-cell" x="350" y="50" transform="scale(1.4) rotate(15)" />
      <use href="#tiny-cell" x="450" y="50" transform="scale(1.3) rotate(20)" />
      <use href="#tiny-cell" x="550" y="50" transform="scale(1.5) rotate(25)" />
      <use href="#tiny-cell" x="650" y="50" transform="scale(1.4) rotate(30)" />
      <use href="#tiny-cell" x="750" y="50" transform="scale(1.3) rotate(35)" />
      
      <!-- Middle area -->
      <use href="#tiny-cell" x="150" y="250" transform="scale(1.3) rotate(355)" />
      <use href="#tiny-cell" x="200" y="250" transform="scale(1.4) rotate(0)" />
      <use href="#tiny-cell" x="600" y="250" transform="scale(1.3) rotate(25)" />
      <use href="#tiny-cell" x="650" y="250" transform="scale(1.4) rotate(30)" />
      
      <use href="#tiny-cell" x="150" y="540" transform="scale(1.3) rotate(25)" />
      <use href="#tiny-cell" x="200" y="540" transform="scale(1.4) rotate(20)" />
      <use href="#tiny-cell" x="600" y="540" transform="scale(1.3) rotate(5)" />
      <use href="#tiny-cell" x="650" y="540" transform="scale(1.4) rotate(0)" />
      
      <!-- Bottom area -->
      <use href="#tiny-cell" x="50" y="750" transform="scale(1.4) rotate(30)" />
      <use href="#tiny-cell" x="150" y="750" transform="scale(1.3) rotate(25)" />
      <use href="#tiny-cell" x="250" y="750" transform="scale(1.5) rotate(20)" />
      <use href="#tiny-cell" x="350" y="750" transform="scale(1.4) rotate(15)" />
      <use href="#tiny-cell" x="450" y="750" transform="scale(1.3) rotate(10)" />
      <use href="#tiny-cell" x="550" y="750" transform="scale(1.5) rotate(5)" />
      <use href="#tiny-cell" x="650" y="750" transform="scale(1.4) rotate(0)" />
      <use href="#tiny-cell" x="750" y="750" transform="scale(1.3) rotate(355)" />
    </g>
  </g>
  
  <!-- Sparkles distributed to highlight key intersections -->
  <g>
    <!-- Sparkles aligned with rotation patterns -->
    <use href="#sparkle" x="100" y="100" />
    <use href="#sparkle" x="180" y="100" />
    <use href="#sparkle" x="245" y="100" />
    
    <use href="#sparkle" x="500" y="100" />
    <use href="#sparkle" x="580" y="100" />
    <use href="#sparkle" x="645" y="100" />
    
    <!-- Central area sparkles -->
    <use href="#sparkle" x="220" y="300" />
    <use href="#sparkle" x="380" y="300" />
    <use href="#sparkle" x="540" y="300" />
    
    <use href="#sparkle" x="300" y="400" />
    <use href="#sparkle" x="370" y="400" />
    <use href="#sparkle" x="440" y="400" />
    <use href="#sparkle" x="500" y="400" />
    
    <use href="#sparkle" x="250" y="480" />
    <use href="#sparkle" x="320" y="480" />
    <use href="#sparkle" x="400" y="480" />
    <use href="#sparkle" x="480" y="480" />
    <use href="#sparkle" x="550" y="480" />
    
    <!-- Bottom area sparkles -->
    <use href="#sparkle" x="100" y="600" />
    <use href="#sparkle" x="180" y="600" />
    <use href="#sparkle" x="245" y="600" />
    
    <use href="#sparkle" x="500" y="600" />
    <use href="#sparkle" x="580" y="600" />
    <use href="#sparkle" x="645" y="600" />
    
    <!-- Edge sparkles -->
    <use href="#sparkle" x="80" y="300" />
    <use href="#sparkle" x="30" y="400" />
    <use href="#sparkle" x="100" y="400" />
    
    <use href="#sparkle" x="680" y="300" />
    <use href="#sparkle" x="630" y="400" />
    <use href="#sparkle" x="700" y="400" />
    
    <!-- Diagonal flow sparkles -->
    <use href="#sparkle" x="200" y="200" />
    <use href="#sparkle" x="300" y="300" />
    <use href="#sparkle" x="400" y="400" />
    <use href="#sparkle" x="500" y="500" />
    <use href="#sparkle" x="600" y="600" />
    
    <use href="#sparkle" x="600" y="200" />
    <use href="#sparkle" x="500" y="300" />
    <use href="#sparkle" x="400" y="400" />
    <use href="#sparkle" x="300" y="500" />
    <use href="#sparkle" x="200" y="600" />
  </g>
</svg>`}
        </CodeBox>
    </Chapter>
);
