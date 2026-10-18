import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Contracted and Tiled Cell Pattern v1 ]]</Title>
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
    
    <!-- Contracted pattern unit for tiling -->
    <g id="pattern-unit">
      <!-- Primary row -->
      <use href="#base-cell" x="0" y="0" transform="scale(1) rotate(0)" />
      <use href="#small-cell" x="65" y="0" transform="scale(1.2) rotate(0)" />
      <use href="#base-cell" x="130" y="0" transform="scale(0.9) rotate(15)" />
      <use href="#tiny-cell" x="190" y="5" transform="scale(1.5) rotate(0)" />
      <use href="#bridge-element" x="45" y="0" transform="scale(0.6) rotate(0)" />
      <use href="#bridge-element" x="105" y="5" transform="scale(0.6) rotate(10)" />
      <use href="#bridge-element" x="170" y="0" transform="scale(0.6) rotate(-10)" />
      
      <!-- Secondary row -->
      <use href="#merged-island-1" x="0" y="60" transform="scale(0.5) rotate(0)" />
      <use href="#tiny-cell" x="75" y="65" transform="scale(1.3) rotate(0)" />
      <use href="#bridge-element" x="110" y="65" transform="scale(0.6) rotate(30)" />
      <use href="#merged-island-2" x="150" y="60" transform="scale(0.5) rotate(-5)" />
      
      <!-- Third row -->
      <use href="#tiny-cell" x="0" y="120" transform="scale(1.4) rotate(0)" />
      <use href="#bridge-element" x="30" y="120" transform="scale(0.5) rotate(15)" />
      <use href="#base-cell" x="70" y="120" transform="scale(0.9) rotate(0)" />
      <use href="#bridge-element" x="120" y="125" transform="scale(0.6) rotate(-15)" />
      <use href="#merged-island-1" x="160" y="110" transform="scale(0.5) rotate(0)" />
      
      <!-- Core elements -->
      <use href="#tiny-cell" x="30" y="30" transform="scale(1.3) rotate(0)" />
      <use href="#tiny-cell" x="100" y="30" transform="scale(1.2) rotate(0)" />
      <use href="#tiny-cell" x="160" y="30" transform="scale(1.4) rotate(0)" />
      
      <use href="#tiny-cell" x="35" y="90" transform="scale(1.2) rotate(0)" />
      <use href="#tiny-cell" x="120" y="90" transform="scale(1.4) rotate(0)" />
      <use href="#tiny-cell" x="185" y="90" transform="scale(1.3) rotate(0)" />
      
      <use href="#tiny-cell" x="30" y="150" transform="scale(1.4) rotate(0)" />
      <use href="#tiny-cell" x="100" y="150" transform="scale(1.3) rotate(0)" />
      <use href="#tiny-cell" x="170" y="150" transform="scale(1.2) rotate(0)" />
      
      <!-- Sparkles -->
      <use href="#sparkle" x="0" y="0" />
      <use href="#sparkle" x="65" y="0" />
      <use href="#sparkle" x="130" y="0" />
      <use href="#sparkle" x="190" y="0" />
      
      <use href="#sparkle" x="0" y="60" />
      <use href="#sparkle" x="75" y="60" />
      <use href="#sparkle" x="150" y="60" />
      
      <use href="#sparkle" x="0" y="120" />
      <use href="#sparkle" x="70" y="120" />
      <use href="#sparkle" x="160" y="120" />
    </g>
  </defs>
  
  <!-- Pure white background -->
  <rect width="800" height="800" fill="white" />
  
  <!-- Tiled contracted composition -->
  <g id="composition">
    <!-- Central focal area with merged islands at 75% of original size -->
    <use href="#merged-island-1" x="260" y="260" transform="scale(0.75) rotate(0)" />
    <use href="#merged-island-2" x="380" y="260" transform="scale(0.7) rotate(-15)" />
    <use href="#bridge-element" x="370" y="320" transform="scale(0.8) rotate(30)" />
    <use href="#bridge-element" x="330" y="350" transform="scale(0.8) rotate(-20)" />
    
    <!-- Tiling the pattern-unit - 4x4 grid -->
    <!-- Row 1 -->
    <use href="#pattern-unit" x="10" y="10" transform="scale(0.95)" />
    <use href="#pattern-unit" x="210" y="10" transform="scale(0.95)" />
    <use href="#pattern-unit" x="410" y="10" transform="scale(0.95)" />
    <use href="#pattern-unit" x="610" y="10" transform="scale(0.95)" />
    
    <!-- Row 2 -->
    <use href="#pattern-unit" x="10" y="160" transform="scale(0.95)" />
    <!-- Omitted middle tiles for central focal area -->
    <use href="#pattern-unit" x="610" y="160" transform="scale(0.95)" />
    
    <!-- Row 3 -->
    <use href="#pattern-unit" x="10" y="400" transform="scale(0.95)" />
    <!-- Omitted middle tiles for central focal area -->
    <use href="#pattern-unit" x="610" y="400" transform="scale(0.95)" />
    
    <!-- Row 4 -->
    <use href="#pattern-unit" x="10" y="550" transform="scale(0.95)" />
    <use href="#pattern-unit" x="210" y="550" transform="scale(0.95)" />
    <use href="#pattern-unit" x="410" y="550" transform="scale(0.95)" />
    <use href="#pattern-unit" x="610" y="550" transform="scale(0.95)" />
    
    <!-- Additional connecting elements to maintain visual flow -->
    <use href="#bridge-element" x="200" y="90" transform="scale(0.7) rotate(0)" />
    <use href="#bridge-element" x="400" y="90" transform="scale(0.7) rotate(0)" />
    <use href="#bridge-element" x="600" y="90" transform="scale(0.7) rotate(0)" />
    
    <use href="#bridge-element" x="90" y="150" transform="rotate(90) scale(0.7)" />
    <use href="#bridge-element" x="490" y="150" transform="rotate(90) scale(0.7)" />
    <use href="#bridge-element" x="690" y="150" transform="rotate(90) scale(0.7)" />
    
    <use href="#bridge-element" x="200" y="490" transform="scale(0.7) rotate(0)" />
    <use href="#bridge-element" x="400" y="490" transform="scale(0.7) rotate(0)" />
    <use href="#bridge-element" x="600" y="490" transform="scale(0.7) rotate(0)" />
    
    <use href="#bridge-element" x="90" y="490" transform="rotate(90) scale(0.7)" />
    <use href="#bridge-element" x="490" y="490" transform="rotate(90) scale(0.7)" />
    <use href="#bridge-element" x="690" y="490" transform="rotate(90) scale(0.7)" />
    
    <!-- Additional connecting elements around central focal area -->
    <use href="#bridge-element" x="220" y="220" transform="rotate(45) scale(0.7)" />
    <use href="#bridge-element" x="520" y="220" transform="rotate(-45) scale(0.7)" />
    <use href="#bridge-element" x="220" y="520" transform="rotate(-45) scale(0.7)" />
    <use href="#bridge-element" x="520" y="520" transform="rotate(45) scale(0.7)" />
    
    <!-- Balance with small cells at corners -->
    <use href="#small-cell" x="10" y="700" transform="scale(1.1)" />
    <use href="#small-cell" x="700" y="10" transform="scale(1.1)" />
    <use href="#small-cell" x="700" y="700" transform="scale(1.1)" />
    <use href="#small-cell" x="10" y="10" transform="scale(1.1)" />
    
    <!-- Additional connecting elements for visual flow -->
    <use href="#tiny-cell" x="180" y="180" transform="scale(1.5)" />
    <use href="#tiny-cell" x="580" y="180" transform="scale(1.5)" />
    <use href="#tiny-cell" x="180" y="580" transform="scale(1.5)" />
    <use href="#tiny-cell" x="580" y="580" transform="scale(1.5)" />
  </g>
  
  <!-- Grid of sparkles for visual accent -->
  <g>
    <!-- Diagonal sparkle lines -->
    <use href="#sparkle" x="50" y="50" />
    <use href="#sparkle" x="100" y="100" />
    <use href="#sparkle" x="150" y="150" />
    <use href="#sparkle" x="200" y="200" />
    <use href="#sparkle" x="550" y="550" />
    <use href="#sparkle" x="600" y="600" />
    <use href="#sparkle" x="650" y="650" />
    <use href="#sparkle" x="700" y="700" />
    
    <use href="#sparkle" x="50" y="700" />
    <use href="#sparkle" x="100" y="650" />
    <use href="#sparkle" x="150" y="600" />
    <use href="#sparkle" x="200" y="550" />
    <use href="#sparkle" x="550" y="200" />
    <use href="#sparkle" x="600" y="150" />
    <use href="#sparkle" x="650" y="100" />
    <use href="#sparkle" x="700" y="50" />
    
    <!-- Central area sparkles -->
    <use href="#sparkle" x="300" y="300" />
    <use href="#sparkle" x="350" y="350" />
    <use href="#sparkle" x="400" y="400" />
    <use href="#sparkle" x="450" y="450" />
    <use href="#sparkle" x="300" y="450" />
    <use href="#sparkle" x="350" y="400" />
    <use href="#sparkle" x="400" y="350" />
    <use href="#sparkle" x="450" y="300" />
  </g>
</svg>`}
        </CodeBox>
    </Chapter>
);
