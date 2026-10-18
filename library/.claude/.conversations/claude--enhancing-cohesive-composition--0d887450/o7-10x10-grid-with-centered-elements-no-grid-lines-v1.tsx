import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ 10x10 Grid with Centered Elements ❨No Grid Lines❩ v1 ]]</Title>
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
  
  <!-- 10x10 Grid with precisely centered elements -->
  <g id="centered-grid">
    <!-- Row 1 -->
    <use href="#tiny-cell" x="31" y="31" transform="scale(1.5)" />
    <use href="#base-cell" x="110" y="10" transform="scale(0.9) rotate(15)" />
    <use href="#small-cell" x="182" y="22" transform="scale(1.1)" />
    <use href="#bridge-element" x="250" y="20" transform="scale(0.8)" />
    <use href="#base-cell" x="340" y="10" transform="scale(1)" />
    <use href="#tiny-cell" x="431" y="31" transform="scale(1.4)" />
    <use href="#small-cell" x="502" y="22" transform="scale(1.2)" />
    <use href="#bridge-element" x="570" y="20" transform="scale(0.7) rotate(10)" />
    <use href="#tiny-cell" x="671" y="31" transform="scale(1.6)" />
    <use href="#base-cell" x="740" y="10" transform="scale(0.8) rotate(-10)" />
    
    <!-- Row 2 -->
    <use href="#small-cell" x="22" y="112" transform="scale(1.2)" />
    <use href="#tiny-cell" x="111" y="111" transform="scale(1.3)" />
    <use href="#merged-island-1" x="160" y="80" transform="scale(0.4)" />
    <use href="#base-cell" x="270" y="90" transform="scale(0.9) rotate(5)" />
    <use href="#small-cell" x="342" y="112" transform="scale(1.1)" />
    <use href="#bridge-element" x="410" y="110" transform="scale(0.8) rotate(15)" />
    <use href="#tiny-cell" x="511" y="111" transform="scale(1.5)" />
    <use href="#base-cell" x="580" y="90" transform="scale(1)" />
    <use href="#merged-island-2" x="640" y="80" transform="scale(0.4)" />
    <use href="#small-cell" x="742" y="112" transform="scale(1)" />
    
    <!-- Row 3 -->
    <use href="#bridge-element" x="10" y="190" transform="scale(0.7)" />
    <use href="#base-cell" x="100" y="170" transform="scale(1)" />
    <use href="#tiny-cell" x="191" y="191" transform="scale(1.4)" />
    <use href="#small-cell" x="262" y="192" transform="scale(1.1)" />
    <use href="#merged-island-2" x="320" y="160" transform="scale(0.4)" />
    <use href="#base-cell" x="420" y="170" transform="scale(0.9) rotate(-10)" />
    <use href="#bridge-element" x="490" y="190" transform="scale(0.8) rotate(20)" />
    <use href="#tiny-cell" x="591" y="191" transform="scale(1.3)" />
    <use href="#small-cell" x="662" y="192" transform="scale(1.2)" />
    <use href="#base-cell" x="740" y="170" transform="scale(1)" />
    
    <!-- Row 4 -->
    <use href="#tiny-cell" x="31" y="271" transform="scale(1.5)" />
    <use href="#merged-island-1" x="80" y="240" transform="scale(0.4)" />
    <use href="#small-cell" x="182" y="272" transform="scale(1.1)" />
    <use href="#base-cell" x="260" y="250" transform="scale(1)" />
    <use href="#tiny-cell" x="351" y="271" transform="scale(1.4)" />
    <use href="#bridge-element" x="410" y="270" transform="scale(0.7) rotate(-15)" />
    <use href="#merged-island-2" x="480" y="240" transform="scale(0.4)" />
    <use href="#small-cell" x="582" y="272" transform="scale(1.2)" />
    <use href="#tiny-cell" x="671" y="271" transform="scale(1.3)" />
    <use href="#base-cell" x="740" y="250" transform="scale(0.9) rotate(15)" />
    
    <!-- Row 5 -->
    <use href="#base-cell" x="20" y="330" transform="scale(1)" />
    <use href="#bridge-element" x="90" y="350" transform="scale(0.8)" />
    <use href="#tiny-cell" x="191" y="351" transform="scale(1.5)" />
    <use href="#small-cell" x="262" y="352" transform="scale(1.1)" />
    <use href="#base-cell" x="340" y="330" transform="scale(0.9) rotate(10)" />
    <use href="#merged-island-1" x="400" y="320" transform="scale(0.4)" />
    <use href="#tiny-cell" x="511" y="351" transform="scale(1.4)" />
    <use href="#bridge-element" x="570" y="350" transform="scale(0.7) rotate(5)" />
    <use href="#small-cell" x="662" y="352" transform="scale(1.2)" />
    <use href="#base-cell" x="740" y="330" transform="scale(1)" />
    
    <!-- Row 6 -->
    <use href="#small-cell" x="22" y="432" transform="scale(1.2)" />
    <use href="#tiny-cell" x="111" y="431" transform="scale(1.3)" />
    <use href="#base-cell" x="180" y="410" transform="scale(1)" />
    <use href="#merged-island-2" x="240" y="400" transform="scale(0.4)" />
    <use href="#bridge-element" x="330" y="430" transform="scale(0.8) rotate(-10)" />
    <use href="#tiny-cell" x="431" y="431" transform="scale(1.5)" />
    <use href="#small-cell" x="502" y="432" transform="scale(1.1)" />
    <use href="#base-cell" x="580" y="410" transform="scale(0.9) rotate(15)" />
    <use href="#bridge-element" x="650" y="430" transform="scale(0.7)" />
    <use href="#merged-island-1" x="720" y="400" transform="scale(0.4)" />
    
    <!-- Row 7 -->
    <use href="#bridge-element" x="10" y="510" transform="scale(0.7) rotate(10)" />
    <use href="#merged-island-1" x="80" y="480" transform="scale(0.4)" />
    <use href="#small-cell" x="182" y="512" transform="scale(1.1)" />
    <use href="#tiny-cell" x="271" y="511" transform="scale(1.4)" />
    <use href="#base-cell" x="340" y="490" transform="scale(1)" />
    <use href="#small-cell" x="422" y="512" transform="scale(1.2)" />
    <use href="#bridge-element" x="490" y="510" transform="scale(0.8) rotate(15)" />
    <use href="#tiny-cell" x="591" y="511" transform="scale(1.3)" />
    <use href="#merged-island-2" x="640" y="480" transform="scale(0.4)" />
    <use href="#base-cell" x="740" y="490" transform="scale(0.9) rotate(-5)" />
    
    <!-- Row 8 -->
    <use href="#tiny-cell" x="31" y="591" transform="scale(1.5)" />
    <use href="#base-cell" x="100" y="570" transform="scale(0.9) rotate(10)" />
    <use href="#bridge-element" x="170" y="590" transform="scale(0.8)" />
    <use href="#small-cell" x="262" y="592" transform="scale(1.1)" />
    <use href="#tiny-cell" x="351" y="591" transform="scale(1.4)" />
    <use href="#merged-island-1" x="400" y="560" transform="scale(0.4)" />
    <use href="#base-cell" x="500" y="570" transform="scale(1)" />
    <use href="#small-cell" x="582" y="592" transform="scale(1.2)" />
    <use href="#bridge-element" x="650" y="590" transform="scale(0.7) rotate(5)" />
    <use href="#tiny-cell" x="751" y="591" transform="scale(1.3)" />
    
    <!-- Row 9 -->
    <use href="#base-cell" x="20" y="650" transform="scale(1)" />
    <use href="#small-cell" x="102" y="672" transform="scale(1.2)" />
    <use href="#tiny-cell" x="191" y="671" transform="scale(1.3)" />
    <use href="#merged-island-2" x="240" y="640" transform="scale(0.4)" />
    <use href="#bridge-element" x="330" y="670" transform="scale(0.8) rotate(15)" />
    <use href="#base-cell" x="420" y="650" transform="scale(0.9) rotate(-5)" />
    <use href="#tiny-cell" x="511" y="671" transform="scale(1.5)" />
    <use href="#small-cell" x="582" y="672" transform="scale(1.1)" />
    <use href="#merged-island-1" x="640" y="640" transform="scale(0.4)" />
    <use href="#bridge-element" x="730" y="670" transform="scale(0.7)" />
    
    <!-- Row 10 -->
    <use href="#merged-island-2" x="0" y="720" transform="scale(0.4)" />
    <use href="#tiny-cell" x="111" y="751" transform="scale(1.4)" />
    <use href="#base-cell" x="180" y="730" transform="scale(1)" />
    <use href="#small-cell" x="262" y="752" transform="scale(1.1)" />
    <use href="#bridge-element" x="330" y="750" transform="scale(0.7) rotate(-10)" />
    <use href="#tiny-cell" x="431" y="751" transform="scale(1.5)" />
    <use href="#merged-island-1" x="480" y="720" transform="scale(0.4)" />
    <use href="#small-cell" x="582" y="752" transform="scale(1.2)" />
    <use href="#base-cell" x="660" y="730" transform="scale(0.9) rotate(15)" />
    <use href="#tiny-cell" x="751" y="751" transform="scale(1.3)" />
  </g>
  
  <!-- Sparkles at grid intersections (maintained) -->
  <g>
    <use href="#sparkle" x="80" y="80" />
    <use href="#sparkle" x="160" y="80" />
    <use href="#sparkle" x="240" y="80" />
    <use href="#sparkle" x="320" y="80" />
    <use href="#sparkle" x="400" y="80" />
    <use href="#sparkle" x="480" y="80" />
    <use href="#sparkle" x="560" y="80" />
    <use href="#sparkle" x="640" y="80" />
    <use href="#sparkle" x="720" y="80" />
    
    <use href="#sparkle" x="80" y="160" />
    <use href="#sparkle" x="160" y="160" />
    <use href="#sparkle" x="240" y="160" />
    <use href="#sparkle" x="320" y="160" />
    <use href="#sparkle" x="400" y="160" />
    <use href="#sparkle" x="480" y="160" />
    <use href="#sparkle" x="560" y="160" />
    <use href="#sparkle" x="640" y="160" />
    <use href="#sparkle" x="720" y="160" />
    
    <use href="#sparkle" x="80" y="240" />
    <use href="#sparkle" x="160" y="240" />
    <use href="#sparkle" x="240" y="240" />
    <use href="#sparkle" x="320" y="240" />
    <use href="#sparkle" x="400" y="240" />
    <use href="#sparkle" x="480" y="240" />
    <use href="#sparkle" x="560" y="240" />
    <use href="#sparkle" x="640" y="240" />
    <use href="#sparkle" x="720" y="240" />
    
    <use href="#sparkle" x="80" y="320" />
    <use href="#sparkle" x="160" y="320" />
    <use href="#sparkle" x="240" y="320" />
    <use href="#sparkle" x="320" y="320" />
    <use href="#sparkle" x="400" y="320" />
    <use href="#sparkle" x="480" y="320" />
    <use href="#sparkle" x="560" y="320" />
    <use href="#sparkle" x="640" y="320" />
    <use href="#sparkle" x="720" y="320" />
    
    <use href="#sparkle" x="80" y="400" />
    <use href="#sparkle" x="160" y="400" />
    <use href="#sparkle" x="240" y="400" />
    <use href="#sparkle" x="320" y="400" />
    <use href="#sparkle" x="400" y="400" />
    <use href="#sparkle" x="480" y="400" />
    <use href="#sparkle" x="560" y="400" />
    <use href="#sparkle" x="640" y="400" />
    <use href="#sparkle" x="720" y="400" />
    
    <use href="#sparkle" x="80" y="480" />
    <use href="#sparkle" x="160" y="480" />
    <use href="#sparkle" x="240" y="480" />
    <use href="#sparkle" x="320" y="480" />
    <use href="#sparkle" x="400" y="480" />
    <use href="#sparkle" x="480" y="480" />
    <use href="#sparkle" x="560" y="480" />
    <use href="#sparkle" x="640" y="480" />
    <use href="#sparkle" x="720" y="480" />
    
    <use href="#sparkle" x="80" y="560" />
    <use href="#sparkle" x="160" y="560" />
    <use href="#sparkle" x="240" y="560" />
    <use href="#sparkle" x="320" y="560" />
    <use href="#sparkle" x="400" y="560" />
    <use href="#sparkle" x="480" y="560" />
    <use href="#sparkle" x="560" y="560" />
    <use href="#sparkle" x="640" y="560" />
    <use href="#sparkle" x="720" y="560" />
    
    <use href="#sparkle" x="80" y="640" />
    <use href="#sparkle" x="160" y="640" />
    <use href="#sparkle" x="240" y="640" />
    <use href="#sparkle" x="320" y="640" />
    <use href="#sparkle" x="400" y="640" />
    <use href="#sparkle" x="480" y="640" />
    <use href="#sparkle" x="560" y="640" />
    <use href="#sparkle" x="640" y="640" />
    <use href="#sparkle" x="720" y="640" />
    
    <use href="#sparkle" x="80" y="720" />
    <use href="#sparkle" x="160" y="720" />
    <use href="#sparkle" x="240" y="720" />
    <use href="#sparkle" x="320" y="720" />
    <use href="#sparkle" x="400" y="720" />
    <use href="#sparkle" x="480" y="720" />
    <use href="#sparkle" x="560" y="720" />
    <use href="#sparkle" x="640" y="720" />
    <use href="#sparkle" x="720" y="720" />
  </g>
</svg>`}
        </CodeBox>
    </Chapter>
);
