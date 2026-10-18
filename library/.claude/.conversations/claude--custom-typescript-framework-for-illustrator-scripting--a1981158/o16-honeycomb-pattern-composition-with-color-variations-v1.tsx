import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Honeycomb Pattern Composition with Color Variations v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <!-- Definitions for all elements -->
  <defs>
    <!-- Base honeycomb pattern -->
    <g id="honeycombBase">
      <!-- Basic honeycomb cell -->
      <polygon id="honeycomb" points="0,0 15,-26 45,-26 60,0 45,26 15,26" fill="#F4D7A8" stroke="#3F2E23" stroke-width="1.5" />
      
      <!-- Small pattern element for background texture -->
      <pattern id="microPattern" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(30)">
        <rect width="10" height="10" fill="#BFC7C4" />
        <circle cx="5" cy="5" r="0.5" fill="#A8B3B0" />
      </pattern>
      
      <!-- Simplified bee silhouette -->
      <g id="bee">
        <ellipse cx="0" cy="0" rx="4" ry="7" fill="#3F2E23" />
        <line x1="-3" y1="-2" x2="3" y2="-2" stroke="#F4D7A8" stroke-width="1.2" />
        <line x1="-3" y1="0" x2="3" y2="0" stroke="#F4D7A8" stroke-width="1.2" />
        <line x1="-3" y1="2" x2="3" y2="2" stroke="#F4D7A8" stroke-width="1.2" />
      </g>
      
      <!-- Ray/beam element -->
      <line id="ray" x1="0" y1="0" x2="80" y2="0" stroke="#6D91B0" stroke-width="3" stroke-opacity="0.6" />
      
      <!-- Pollen dot -->
      <circle id="pollen" cx="0" cy="0" r="1.5" fill="#E9C06D" fill-opacity="0.7" />
    </g>

    <!-- Complete pattern as a reusable unit -->
    <g id="patternUnit">
      <!-- Background -->
      <rect width="500" height="500" fill="url(#microPattern)" />
      
      <!-- Central element -->
      <circle id="centralCircle" cx="250" cy="250" r="80" fill="#E9C06D" stroke="#3F2E23" stroke-width="3" />
      
      <!-- Radiating beams using <use> -->
      <g id="rays">
        <use href="#ray" transform="translate(250, 250) rotate(0)" />
        <use href="#ray" transform="translate(250, 250) rotate(45)" />
        <use href="#ray" transform="translate(250, 250) rotate(90)" />
        <use href="#ray" transform="translate(250, 250) rotate(135)" />
        <use href="#ray" transform="translate(250, 250) rotate(180)" />
        <use href="#ray" transform="translate(250, 250) rotate(225)" />
        <use href="#ray" transform="translate(250, 250) rotate(270)" />
        <use href="#ray" transform="translate(250, 250) rotate(315)" />
      </g>
      
      <!-- Honeycomb pattern - first layer (outer) -->
      <g id="outerHoneycombs">
        <!-- Top section -->
        <use href="#honeycomb" transform="translate(250, 90)" />
        <use href="#honeycomb" transform="translate(205, 116)" />
        <use href="#honeycomb" transform="translate(295, 116)" />
        
        <!-- Right section -->
        <use href="#honeycomb" transform="translate(365, 195)" />
        <use href="#honeycomb" transform="translate(365, 247)" />
        <use href="#honeycomb" transform="translate(410, 221)" />
        
        <!-- Bottom section -->
        <use href="#honeycomb" transform="translate(250, 410)" />
        <use href="#honeycomb" transform="translate(205, 384)" />
        <use href="#honeycomb" transform="translate(295, 384)" />
        
        <!-- Left section -->
        <use href="#honeycomb" transform="translate(135, 195)" />
        <use href="#honeycomb" transform="translate(135, 247)" />
        <use href="#honeycomb" transform="translate(90, 221)" />
      </g>
      
      <!-- Honeycomb pattern - second layer (inner) -->
      <g id="innerHoneycombs">
        <use href="#honeycomb" transform="translate(250, 170)" />
        <use href="#honeycomb" transform="translate(250, 330)" />
        <use href="#honeycomb" transform="translate(190, 195)" />
        <use href="#honeycomb" transform="translate(190, 247)" />
        <use href="#honeycomb" transform="translate(310, 195)" />
        <use href="#honeycomb" transform="translate(310, 247)" />
      </g>
      
      <!-- Honeycomb pattern - partial cells for semi-seamless effect -->
      <g id="edgeHoneycombs">
        <!-- Partial cells at edges -->
        <use href="#honeycomb" transform="translate(455, 145) scale(0.7)" />
        <use href="#honeycomb" transform="translate(455, 300) scale(0.7)" />
        <use href="#honeycomb" transform="translate(45, 145) scale(0.7)" />
        <use href="#honeycomb" transform="translate(45, 300) scale(0.7)" />
        <use href="#honeycomb" transform="translate(145, 45) scale(0.7)" />
        <use href="#honeycomb" transform="translate(300, 45) scale(0.7)" />
        <use href="#honeycomb" transform="translate(145, 455) scale(0.7)" />
        <use href="#honeycomb" transform="translate(300, 455) scale(0.7)" />
      </g>
      
      <!-- Bees - more subtle and professional looking -->
      <g id="bees">
        <use href="#bee" transform="translate(165, 135) rotate(30) scale(1.2)" />
        <use href="#bee" transform="translate(360, 340) rotate(-40) scale(1.2)" />
        <use href="#bee" transform="translate(280, 120) rotate(15)" />
        <use href="#bee" transform="translate(120, 280) rotate(-15)" />
        <use href="#bee" transform="translate(330, 220) rotate(60)" />
      </g>
      
      <!-- Scattered pollen -->
      <g id="pollenDots">
        <use href="#pollen" transform="translate(180, 180)" />
        <use href="#pollen" transform="translate(320, 180)" />
        <use href="#pollen" transform="translate(180, 320)" />
        <use href="#pollen" transform="translate(320, 320)" />
        <use href="#pollen" transform="translate(250, 200)" />
        <use href="#pollen" transform="translate(200, 250)" />
        <use href="#pollen" transform="translate(300, 250)" />
        <use href="#pollen" transform="translate(250, 300)" />
        <use href="#pollen" transform="translate(220, 220)" />
        <use href="#pollen" transform="translate(280, 220)" />
        <use href="#pollen" transform="translate(220, 280)" />
        <use href="#pollen" transform="translate(280, 280)" />
      </g>
    </g>
    
    <!-- Color schemes -->
    <filter id="blueScheme" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0.6 0 0 0 0
        0 0.7 0 0 0.1
        0 0 1.2 0 0.2
        0 0 0 1 0
      "/>
    </filter>
    
    <filter id="springScheme" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0.7 0 0 0 0.1
        0 1.1 0 0 0.1
        0 0 0.6 0 0
        0 0 0 1 0
      "/>
    </filter>
    
    <filter id="autumnScheme" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        1.2 0 0 0 0.1
        0 0.8 0 0 0
        0 0 0.5 0 0
        0 0 0 1 0
      "/>
    </filter>
    
    <filter id="purpleScheme" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0.8 0 0 0 0.1
        0 0.5 0 0 0
        0 0 1.0 0 0.2
        0 0 0 1 0
      "/>
    </filter>
    
    <!-- Background gradient -->
    <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E9F0F5" />
      <stop offset="100%" stop-color="#C2D0DD" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="800" fill="url(#backgroundGradient)" />
  
  <!-- Original color scheme - center -->
  <use href="#patternUnit" transform="translate(350, 150) scale(0.7)" />
  
  <!-- Blue variation - top left -->
  <use href="#patternUnit" transform="translate(50, 20) scale(0.45)" filter="url(#blueScheme)" opacity="0.9" />
  
  <!-- Spring (green) variation - top right -->
  <use href="#patternUnit" transform="translate(750, 20) scale(0.45)" filter="url(#springScheme)" opacity="0.9" />
  
  <!-- Autumn variation - bottom left -->
  <use href="#patternUnit" transform="translate(50, 420) scale(0.45)" filter="url(#autumnScheme)" opacity="0.9" />
  
  <!-- Purple variation - bottom right -->
  <use href="#patternUnit" transform="translate(750, 420) scale(0.45)" filter="url(#purpleScheme)" opacity="0.9" />
  
  <!-- Smaller accent patterns -->
  <use href="#patternUnit" transform="translate(290, 440) scale(0.25) rotate(15)" opacity="0.6" />
  <use href="#patternUnit" transform="translate(830, 290) scale(0.25) rotate(-15)" filter="url(#blueScheme)" opacity="0.6" />
  <use href="#patternUnit" transform="translate(150, 290) scale(0.2) rotate(30)" filter="url(#springScheme)" opacity="0.6" />
  <use href="#patternUnit" transform="translate(630, 100) scale(0.2) rotate(-30)" filter="url(#autumnScheme)" opacity="0.6" />
  <use href="#patternUnit" transform="translate(930, 610) scale(0.2)" filter="url(#purpleScheme)" opacity="0.6" />
</svg>
`}
        </CodeBox>
    </Chapter>
);
