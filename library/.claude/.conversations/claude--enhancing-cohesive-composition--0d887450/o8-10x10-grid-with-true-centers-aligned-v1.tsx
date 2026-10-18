import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ 10x10 Grid with True Centers Aligned v1 ]]</Title>
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
    
    <!-- Base cell unit with center at (30,30) -->
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
      
      <!-- Center point marker (for debugging) -->
      <circle cx="30" cy="30" r="1" fill="red" opacity="0.5" />
    </g>
    
    <!-- Small variation with center at (18,18) -->
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
      
      <!-- Center point marker (for debugging) -->
      <circle cx="18" cy="18" r="1" fill="red" opacity="0.5" />
    </g>
    
    <!-- Tiny cell with center at (9,9) -->
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
      
      <!-- Center point marker (for debugging) -->
      <circle cx="9" cy="9" r="1" fill="red" opacity="0.5" />
    </g>
    
    <!-- Merged island 1 with center at (80,90) -->
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
      
      <!-- Center point marker (for debugging) -->
      <circle cx="80" cy="90" r="2" fill="red" opacity="0.5" />
    </g>
    
    <!-- Merged island 2 with center at (100,100) -->
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
      
      <!-- Center point marker (for debugging) -->
      <circle cx="100" cy="100" r="2" fill="red" opacity="0.5" />
    </g>
    
    <!-- Bridge connecting element with center at (50,20) -->
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
      
      <!-- Center point marker (for debugging) -->
      <circle cx="50" cy="20" r="1" fill="red" opacity="0.5" />
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
  
  <!-- Debugging grid (will be removed in final version) -->
  <g id="grid-debug" opacity="0.1">
    <!-- Vertical lines -->
    <line x1="80" y1="0" x2="80" y2="800" stroke="#333" />
    <line x1="160" y1="0" x2="160" y2="800" stroke="#333" />
    <line x1="240" y1="0" x2="240" y2="800" stroke="#333" />
    <line x1="320" y1="0" x2="320" y2="800" stroke="#333" />
    <line x1="400" y1="0" x2="400" y2="800" stroke="#333" />
    <line x1="480" y1="0" x2="480" y2="800" stroke="#333" />
    <line x1="560" y1="0" x2="560" y2="800" stroke="#333" />
    <line x1="640" y1="0" x2="640" y2="800" stroke="#333" />
    <line x1="720" y1="0" x2="720" y2="800" stroke="#333" />
    
    <!-- Horizontal lines -->
    <line x1="0" y1="80" x2="800" y2="80" stroke="#333" />
    <line x1="0" y1="160" x2="800" y2="160" stroke="#333" />
    <line x1="0" y1="240" x2="800" y2="240" stroke="#333" />
    <line x1="0" y1="320" x2="800" y2="320" stroke="#333" />
    <line x1="0" y1="400" x2="800" y2="400" stroke="#333" />
    <line x1="0" y1="480" x2="800" y2="480" stroke="#333" />
    <line x1="0" y1="560" x2="800" y2="560" stroke="#333" />
    <line x1="0" y1="640" x2="800" y2="640" stroke="#333" />
    <line x1="0" y1="720" x2="800" y2="720" stroke="#333" />
    
    <!-- Cell centers -->
    <circle cx="40" cy="40" r="2" fill="blue" opacity="0.5" />
    <circle cx="120" cy="40" r="2" fill="blue" opacity="0.5" />
    <circle cx="200" cy="40" r="2" fill="blue" opacity="0.5" />
    <circle cx="280" cy="40" r="2" fill="blue" opacity="0.5" />
    <circle cx="360" cy="40" r="2" fill="blue" opacity="0.5" />
    <circle cx="440" cy="40" r="2" fill="blue" opacity="0.5" />
    <circle cx="520" cy="40" r="2" fill="blue" opacity="0.5" />
    <circle cx="600" cy="40" r="2" fill="blue" opacity="0.5" />
    <circle cx="680" cy="40" r="2" fill="blue" opacity="0.5" />
    <circle cx="760" cy="40" r="2" fill="blue" opacity="0.5" />
  </g>
  
  <!-- 10x10 Grid with perfectly centered elements -->
  <g id="centered-grid">
    <!-- Row 1: Cell centers at y=40 -->
    <use href="#tiny-cell" x="31" y="31" transform="translate(0, 0) scale(1.5)" /> <!-- Center at (40,40) -->
    <use href="#base-cell" x="90" y="10" transform="translate(0, 0) scale(0.9) rotate(15)" /> <!-- Center at (120,40) -->
    <use href="#small-cell" x="182" y="22" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (200,40) -->
    <use href="#bridge-element" x="230" y="20" transform="translate(0, 0) scale(0.8)" /> <!-- Center at (280,40) -->
    <use href="#base-cell" x="330" y="10" transform="translate(0, 0) scale(1)" /> <!-- Center at (360,40) -->
    <use href="#tiny-cell" x="431" y="31" transform="translate(0, 0) scale(1.4)" /> <!-- Center at (440,40) -->
    <use href="#small-cell" x="502" y="22" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (520,40) -->
    <use href="#bridge-element" x="550" y="20" transform="translate(0, 0) scale(0.7) rotate(10)" /> <!-- Center at (600,40) -->
    <use href="#tiny-cell" x="671" y="31" transform="translate(0, 0) scale(1.6)" /> <!-- Center at (680,40) -->
    <use href="#base-cell" x="730" y="10" transform="translate(0, 0) scale(0.8) rotate(-10)" /> <!-- Center at (760,40) -->
    
    <!-- Row 2: Cell centers at y=120 -->
    <use href="#small-cell" x="22" y="102" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (40,120) -->
    <use href="#tiny-cell" x="111" y="111" transform="translate(0, 0) scale(1.3)" /> <!-- Center at (120,120) -->
    <use href="#merged-island-1" x="120" y="30" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (200,120) -->
    <use href="#base-cell" x="250" y="90" transform="translate(0, 0) scale(0.9) rotate(5)" /> <!-- Center at (280,120) -->
    <use href="#small-cell" x="342" y="102" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (360,120) -->
    <use href="#bridge-element" x="390" y="100" transform="translate(0, 0) scale(0.8) rotate(15)" /> <!-- Center at (440,120) -->
    <use href="#tiny-cell" x="511" y="111" transform="translate(0, 0) scale(1.5)" /> <!-- Center at (520,120) -->
    <use href="#base-cell" x="570" y="90" transform="translate(0, 0) scale(1)" /> <!-- Center at (600,120) -->
    <use href="#merged-island-2" x="600" y="20" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (680,120) -->
    <use href="#small-cell" x="742" y="102" transform="translate(0, 0) scale(1)" /> <!-- Center at (760,120) -->
    
    <!-- Row 3: Cell centers at y=200 -->
    <use href="#bridge-element" x="-10" y="180" transform="translate(0, 0) scale(0.7)" /> <!-- Center at (40,200) -->
    <use href="#base-cell" x="90" y="170" transform="translate(0, 0) scale(1)" /> <!-- Center at (120,200) -->
    <use href="#tiny-cell" x="191" y="191" transform="translate(0, 0) scale(1.4)" /> <!-- Center at (200,200) -->
    <use href="#small-cell" x="262" y="182" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (280,200) -->
    <use href="#merged-island-2" x="280" y="100" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (360,200) -->
    <use href="#base-cell" x="410" y="170" transform="translate(0, 0) scale(0.9) rotate(-10)" /> <!-- Center at (440,200) -->
    <use href="#bridge-element" x="470" y="180" transform="translate(0, 0) scale(0.8) rotate(20)" /> <!-- Center at (520,200) -->
    <use href="#tiny-cell" x="591" y="191" transform="translate(0, 0) scale(1.3)" /> <!-- Center at (600,200) -->
    <use href="#small-cell" x="662" y="182" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (680,200) -->
    <use href="#base-cell" x="730" y="170" transform="translate(0, 0) scale(1)" /> <!-- Center at (760,200) -->
    
    <!-- Row 4: Cell centers at y=280 -->
    <use href="#tiny-cell" x="31" y="271" transform="translate(0, 0) scale(1.5)" /> <!-- Center at (40,280) -->
    <use href="#merged-island-1" x="40" y="190" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (120,280) -->
    <use href="#small-cell" x="182" y="262" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (200,280) -->
    <use href="#base-cell" x="250" y="250" transform="translate(0, 0) scale(1)" /> <!-- Center at (280,280) -->
    <use href="#tiny-cell" x="351" y="271" transform="translate(0, 0) scale(1.4)" /> <!-- Center at (360,280) -->
    <use href="#bridge-element" x="390" y="260" transform="translate(0, 0) scale(0.7) rotate(-15)" /> <!-- Center at (440,280) -->
    <use href="#merged-island-2" x="440" y="190" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (520,280) -->
    <use href="#small-cell" x="582" y="262" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (600,280) -->
    <use href="#tiny-cell" x="671" y="271" transform="translate(0, 0) scale(1.3)" /> <!-- Center at (680,280) -->
    <use href="#base-cell" x="730" y="250" transform="translate(0, 0) scale(0.9) rotate(15)" /> <!-- Center at (760,280) -->
    
    <!-- Row 5: Cell centers at y=360 -->
    <use href="#base-cell" x="10" y="330" transform="translate(0, 0) scale(1)" /> <!-- Center at (40,360) -->
    <use href="#bridge-element" x="70" y="340" transform="translate(0, 0) scale(0.8)" /> <!-- Center at (120,360) -->
    <use href="#tiny-cell" x="191" y="351" transform="translate(0, 0) scale(1.5)" /> <!-- Center at (200,360) -->
    <use href="#small-cell" x="262" y="342" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (280,360) -->
    <use href="#base-cell" x="330" y="330" transform="translate(0, 0) scale(0.9) rotate(10)" /> <!-- Center at (360,360) -->
    <use href="#merged-island-1" x="360" y="270" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (440,360) -->
    <use href="#tiny-cell" x="511" y="351" transform="translate(0, 0) scale(1.4)" /> <!-- Center at (520,360) -->
    <use href="#bridge-element" x="550" y="340" transform="translate(0, 0) scale(0.7) rotate(5)" /> <!-- Center at (600,360) -->
    <use href="#small-cell" x="662" y="342" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (680,360) -->
    <use href="#base-cell" x="730" y="330" transform="translate(0, 0) scale(1)" /> <!-- Center at (760,360) -->
    
    <!-- Row 6: Cell centers at y=440 -->
    <use href="#small-cell" x="22" y="422" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (40,440) -->
    <use href="#tiny-cell" x="111" y="431" transform="translate(0, 0) scale(1.3)" /> <!-- Center at (120,440) -->
    <use href="#base-cell" x="170" y="410" transform="translate(0, 0) scale(1)" /> <!-- Center at (200,440) -->
    <use href="#merged-island-2" x="200" y="350" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (280,440) -->
    <use href="#bridge-element" x="310" y="420" transform="translate(0, 0) scale(0.8) rotate(-10)" /> <!-- Center at (360,440) -->
    <use href="#tiny-cell" x="431" y="431" transform="translate(0, 0) scale(1.5)" /> <!-- Center at (440,440) -->
    <use href="#small-cell" x="502" y="422" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (520,440) -->
    <use href="#base-cell" x="570" y="410" transform="translate(0, 0) scale(0.9) rotate(15)" /> <!-- Center at (600,440) -->
    <use href="#bridge-element" x="630" y="420" transform="translate(0, 0) scale(0.7)" /> <!-- Center at (680,440) -->
    <use href="#merged-island-1" x="680" y="350" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (760,440) -->
    
    <!-- Row 7: Cell centers at y=520 -->
    <use href="#bridge-element" x="-10" y="500" transform="translate(0, 0) scale(0.7) rotate(10)" /> <!-- Center at (40,520) -->
    <use href="#merged-island-1" x="40" y="430" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (120,520) -->
    <use href="#small-cell" x="182" y="502" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (200,520) -->
    <use href="#tiny-cell" x="271" y="511" transform="translate(0, 0) scale(1.4)" /> <!-- Center at (280,520) -->
    <use href="#base-cell" x="330" y="490" transform="translate(0, 0) scale(1)" /> <!-- Center at (360,520) -->
    <use href="#small-cell" x="422" y="502" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (440,520) -->
    <use href="#bridge-element" x="470" y="500" transform="translate(0, 0) scale(0.8) rotate(15)" /> <!-- Center at (520,520) -->
    <use href="#tiny-cell" x="591" y="511" transform="translate(0, 0) scale(1.3)" /> <!-- Center at (600,520) -->
    <use href="#merged-island-2" x="600" y="430" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (680,520) -->
    <use href="#base-cell" x="730" y="490" transform="translate(0, 0) scale(0.9) rotate(-5)" /> <!-- Center at (760,520) -->
    
    <!-- Row 8: Cell centers at y=600 -->
    <use href="#tiny-cell" x="31" y="591" transform="translate(0, 0) scale(1.5)" /> <!-- Center at (40,600) -->
    <use href="#base-cell" x="90" y="570" transform="translate(0, 0) scale(0.9) rotate(10)" /> <!-- Center at (120,600) -->
    <use href="#bridge-element" x="150" y="580" transform="translate(0, 0) scale(0.8)" /> <!-- Center at (200,600) -->
    <use href="#small-cell" x="262" y="582" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (280,600) -->
    <use href="#tiny-cell" x="351" y="591" transform="translate(0, 0) scale(1.4)" /> <!-- Center at (360,600) -->
    <use href="#merged-island-1" x="360" y="510" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (440,600) -->
    <use href="#base-cell" x="490" y="570" transform="translate(0, 0) scale(1)" /> <!-- Center at (520,600) -->
    <use href="#small-cell" x="582" y="582" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (600,600) -->
    <use href="#bridge-element" x="630" y="580" transform="translate(0, 0) scale(0.7) rotate(5)" /> <!-- Center at (680,600) -->
    <use href="#tiny-cell" x="751" y="591" transform="translate(0, 0) scale(1.3)" /> <!-- Center at (760,600) -->
    
    <!-- Row 9: Cell centers at y=680 -->
    <use href="#base-cell" x="10" y="650" transform="translate(0, 0) scale(1)" /> <!-- Center at (40,680) -->
    <use href="#small-cell" x="102" y="662" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (120,680) -->
    <use href="#tiny-cell" x="191" y="671" transform="translate(0, 0) scale(1.3)" /> <!-- Center at (200,680) -->
    <use href="#merged-island-2" x="200" y="590" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (280,680) -->
    <use href="#bridge-element" x="310" y="660" transform="translate(0, 0) scale(0.8) rotate(15)" /> <!-- Center at (360,680) -->
    <use href="#base-cell" x="410" y="650" transform="translate(0, 0) scale(0.9) rotate(-5)" /> <!-- Center at (440,680) -->
    <use href="#tiny-cell" x="511" y="671" transform="translate(0, 0) scale(1.5)" /> <!-- Center at (520,680) -->
    <use href="#small-cell" x="582" y="662" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (600,680) -->
    <use href="#merged-island-1" x="600" y="590" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (680,680) -->
    <use href="#bridge-element" x="710" y="660" transform="translate(0, 0) scale(0.7)" /> <!-- Center at (760,680) -->
    
    <!-- Row 10: Cell centers at y=760 -->
    <use href="#merged-island-2" x="-40" y="670" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (40,760) -->
    <use href="#tiny-cell" x="111" y="751" transform="translate(0, 0) scale(1.4)" /> <!-- Center at (120,760) -->
    <use href="#base-cell" x="170" y="730" transform="translate(0, 0) scale(1)" /> <!-- Center at (200,760) -->
    <use href="#small-cell" x="262" y="742" transform="translate(0, 0) scale(1.1)" /> <!-- Center at (280,760) -->
    <use href="#bridge-element" x="310" y="740" transform="translate(0, 0) scale(0.7) rotate(-10)" /> <!-- Center at (360,760) -->
    <use href="#tiny-cell" x="431" y="751" transform="translate(0, 0) scale(1.5)" /> <!-- Center at (440,760) -->
    <use href="#merged-island-1" x="440" y="670" transform="translate(0, 0) scale(0.4)" /> <!-- Center at (520,760) -->
    <use href="#small-cell" x="582" y="742" transform="translate(0, 0) scale(1.2)" /> <!-- Center at (600,760) -->
    <use href="#base-cell" x="650" y="730" transform="translate(0, 0) scale(0.9) rotate(15)" /> <!-- Center at (680,760) -->
    <use href="#tiny-cell" x="751" y="751" transform="translate(0, 0) scale(1.3)" /> <!-- Center at (760,760) -->
  </g>
  
  <!-- Sparkles at grid intersections -->
  <g>
    <use href`}
        </CodeBox>
    </Chapter>
);
