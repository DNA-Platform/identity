import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Abstract Floral Cosmic Pattern v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="750" viewBox="0 0 1000 750">
  <!-- Definitions -->
  <defs>
    <!-- Gradients -->
    <radialGradient id="bgGradient" cx="50%" cy="50%" r="70%" fx="40%" fy="40%">
      <stop offset="0%" stop-color="#0D1B2A" />
      <stop offset="100%" stop-color="#1B263B" />
    </radialGradient>
    
    <radialGradient id="centerGlow" cx="50%" cy="50%" r="70%" fx="40%" fy="40%">
      <stop offset="0%" stop-color="#C78D46" />
      <stop offset="80%" stop-color="#8A5C35" />
      <stop offset="100%" stop-color="#5F3721" />
    </radialGradient>
    
    <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#64E9EE" />
      <stop offset="100%" stop-color="#1A6373" />
    </linearGradient>
    
    <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF7582" />
      <stop offset="100%" stop-color="#B83B5E" />
    </linearGradient>
    
    <linearGradient id="lavenderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E1CCEC" />
      <stop offset="100%" stop-color="#6A4C93" />
    </linearGradient>
    
    <!-- Star/floral shape -->
    <path id="floral" d="M 0,0 
      C 10,15 30,10 20,30 
      C 10,50 30,60 0,60 
      C -30,60 -10,50 -20,30 
      C -30,10 -10,15 0,0 Z" 
      stroke-width="1" stroke-opacity="0.8" fill-opacity="0.8" />
    
    <!-- Spiral arm element -->
    <path id="spiral" d="M 0,0 
      C 10,10 20,0 30,10 
      C 40,20 30,40 40,50 
      C 50,60 70,50 80,60" 
      fill="none" stroke-width="2" stroke-opacity="0.6" stroke-linecap="round" />
    
    <!-- Dot cluster -->
    <g id="dotCluster">
      <circle cx="0" cy="0" r="2" />
      <circle cx="10" cy="5" r="1.5" />
      <circle cx="-5" cy="8" r="1" />
      <circle cx="8" cy="-7" r="1.2" />
      <circle cx="-10" cy="-5" r="0.8" />
      <circle cx="0" cy="-12" r="1.3" />
      <circle cx="-12" cy="0" r="0.9" />
    </g>
    
    <!-- Complete pattern unit -->
    <g id="patternUnit">
      <!-- Central element -->
      <g id="center">
        <circle cx="0" cy="0" r="40" fill="none" stroke="#E1CCEC" stroke-width="1" stroke-opacity="0.3" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="#E1CCEC" stroke-width="1" stroke-opacity="0.4" />
        <circle cx="0" cy="0" r="20" fill="none" stroke="#E1CCEC" stroke-width="1" stroke-opacity="0.5" />
      </g>
      
      <!-- Radiating spiral arms -->
      <g id="spiralArms">
        <use xlink:href="#spiral" transform="rotate(0)" stroke="#64E9EE" />
        <use xlink:href="#spiral" transform="rotate(60)" stroke="#64E9EE" />
        <use xlink:href="#spiral" transform="rotate(120)" stroke="#64E9EE" />
        <use xlink:href="#spiral" transform="rotate(180)" stroke="#64E9EE" />
        <use xlink:href="#spiral" transform="rotate(240)" stroke="#64E9EE" />
        <use xlink:href="#spiral" transform="rotate(300)" stroke="#64E9EE" />
      </g>
    </g>
  </defs>
  
  <!-- Main composition -->
  
  <!-- Background -->
  <rect width="1000" height="750" fill="url(#bgGradient)" />
  
  <!-- Star field -->
  <g opacity="0.7">
    <!-- Generated small stars throughout -->
    <circle cx="100" cy="80" r="0.8" fill="#FFFFFF" />
    <circle cx="200" cy="120" r="0.6" fill="#FFFFFF" />
    <circle cx="300" cy="90" r="1" fill="#FFFFFF" />
    <circle cx="400" cy="150" r="0.7" fill="#FFFFFF" />
    <circle cx="500" cy="100" r="0.9" fill="#FFFFFF" />
    <circle cx="600" cy="200" r="0.7" fill="#FFFFFF" />
    <circle cx="700" cy="150" r="0.8" fill="#FFFFFF" />
    <circle cx="800" cy="100" r="0.6" fill="#FFFFFF" />
    <circle cx="900" cy="120" r="1" fill="#FFFFFF" />
    <circle cx="150" cy="250" r="0.7" fill="#FFFFFF" />
    <circle cx="250" cy="300" r="0.8" fill="#FFFFFF" />
    <circle cx="350" cy="220" r="0.6" fill="#FFFFFF" />
    <circle cx="450" cy="280" r="0.9" fill="#FFFFFF" />
    <circle cx="550" cy="250" r="0.7" fill="#FFFFFF" />
    <circle cx="650" cy="300" r="0.8" fill="#FFFFFF" />
    <circle cx="750" cy="220" r="0.6" fill="#FFFFFF" />
    <circle cx="850" cy="280" r="0.9" fill="#FFFFFF" />
    <circle cx="950" cy="250" r="0.7" fill="#FFFFFF" />
    <circle cx="120" cy="350" r="0.8" fill="#FFFFFF" />
    <circle cx="220" cy="400" r="0.6" fill="#FFFFFF" />
    <circle cx="320" cy="380" r="1" fill="#FFFFFF" />
    <circle cx="420" cy="450" r="0.7" fill="#FFFFFF" />
    <circle cx="520" cy="400" r="0.8" fill="#FFFFFF" />
    <circle cx="620" cy="380" r="0.6" fill="#FFFFFF" />
    <circle cx="720" cy="450" r="0.9" fill="#FFFFFF" />
    <circle cx="820" cy="400" r="0.7" fill="#FFFFFF" />
    <circle cx="920" cy="380" r="0.8" fill="#FFFFFF" />
    <circle cx="170" cy="500" r="0.6" fill="#FFFFFF" />
    <circle cx="270" cy="550" r="1" fill="#FFFFFF" />
    <circle cx="370" cy="520" r="0.7" fill="#FFFFFF" />
    <circle cx="470" cy="580" r="0.8" fill="#FFFFFF" />
    <circle cx="570" cy="500" r="0.6" fill="#FFFFFF" />
    <circle cx="670" cy="550" r="0.9" fill="#FFFFFF" />
    <circle cx="770" cy="520" r="0.7" fill="#FFFFFF" />
    <circle cx="870" cy="580" r="0.8" fill="#FFFFFF" />
    <circle cx="970" cy="500" r="0.6" fill="#FFFFFF" />
    <circle cx="130" cy="600" r="1" fill="#FFFFFF" />
    <circle cx="230" cy="650" r="0.7" fill="#FFFFFF" />
    <circle cx="330" cy="620" r="0.8" fill="#FFFFFF" />
    <circle cx="430" cy="680" r="0.6" fill="#FFFFFF" />
    <circle cx="530" cy="600" r="0.9" fill="#FFFFFF" />
    <circle cx="630" cy="650" r="0.7" fill="#FFFFFF" />
    <circle cx="730" cy="620" r="0.8" fill="#FFFFFF" />
    <circle cx="830" cy="680" r="0.6" fill="#FFFFFF" />
    <circle cx="930" cy="600" r="1" fill="#FFFFFF" />
  </g>
  
  <!-- Central cosmic flower -->
  <g transform="translate(500, 375)">
    <circle cx="0" cy="0" r="80" fill="url(#centerGlow)" stroke="#E1CCEC" stroke-width="2" />
    <use xlink:href="#patternUnit" />
    
    <!-- Central floral pattern -->
    <g>
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="scale(1.2)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="scale(1.2) rotate(30)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="scale(1.2) rotate(60)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="scale(1.2) rotate(90)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="scale(1.2) rotate(120)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="scale(1.2) rotate(150)" />
    </g>
  </g>
  
  <!-- Teal cosmic flower - upper left -->
  <g transform="translate(290, 200)">
    <circle cx="0" cy="0" r="60" fill="#1A6373" stroke="#64E9EE" stroke-width="1.5" opacity="0.9" />
    <use xlink:href="#patternUnit" transform="scale(0.8)" />
    
    <!-- Teal floral pattern -->
    <g>
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="rotate(10)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="rotate(40)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="rotate(70)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="rotate(100)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="rotate(130)" />
      <use xlink:href="#floral" fill="url(#tealGradient)" stroke="#64E9EE" transform="rotate(160)" />
    </g>
    
    <!-- Dot clusters around -->
    <use xlink:href="#dotCluster" transform="translate(70, 20) scale(1.2)" fill="#64E9EE" />
    <use xlink:href="#dotCluster" transform="translate(50, 60) scale(0.8)" fill="#64E9EE" />
    <use xlink:href="#dotCluster" transform="translate(20, -70) scale(1)" fill="#64E9EE" />
  </g>
  
  <!-- Rose cosmic flower - upper right -->
  <g transform="translate(710, 220)">
    <circle cx="0" cy="0" r="50" fill="#B83B5E" stroke="#FF7582" stroke-width="1.5" opacity="0.9" />
    <use xlink:href="#patternUnit" transform="scale(0.7)" />
    
    <!-- Rose floral pattern -->
    <g>
      <use xlink:href="#floral" fill="url(#roseGradient)" stroke="#FF7582" transform="scale(0.85) rotate(15)" />
      <use xlink:href="#floral" fill="url(#roseGradient)" stroke="#FF7582" transform="scale(0.85) rotate(45)" />
      <use xlink:href="#floral" fill="url(#roseGradient)" stroke="#FF7582" transform="scale(0.85) rotate(75)" />
      <use xlink:href="#floral" fill="url(#roseGradient)" stroke="#FF7582" transform="scale(0.85) rotate(105)" />
      <use xlink:href="#floral" fill="url(#roseGradient)" stroke="#FF7582" transform="scale(0.85) rotate(135)" />
      <use xlink:href="#floral" fill="url(#roseGradient)" stroke="#FF7582" transform="scale(0.85) rotate(165)" />
    </g>
    
    <!-- Dot clusters around -->
    <use xlink:href="#dotCluster" transform="translate(-60, -30) scale(1)" fill="#FF7582" />
    <use xlink:href="#dotCluster" transform="translate(-40, 50) scale(0.7)" fill="#FF7582" />
    <use xlink:href="#dotCluster" transform="translate(-70, 10) scale(0.9)" fill="#FF7582" />
  </g>
  
  <!-- Lavender cosmic flower - lower left -->
  <g transform="translate(250, 550)">
    <circle cx="0" cy="0" r="55" fill="#6A4C93" stroke="#E1CCEC" stroke-width="1.5" opacity="0.9" />
    <use xlink:href="#patternUnit" transform="scale(0.75)" />
    
    <!-- Lavender floral pattern -->
    <g>
      <use xlink:href="#floral" fill="url(#lavenderGradient)" stroke="#E1CCEC" transform="scale(0.9) rotate(5)" />
      <use xlink:href="#floral" fill="url(#lavenderGradient)" stroke="#E1CCEC" transform="scale(0.9) rotate(35)" />
      <use xlink:href="#floral" fill="url(#lavenderGradient)" stroke="#E1CCEC" transform="scale(0.9) rotate(65)" />
      <use xlink:href="#floral" fill="url(#lavenderGradient)" stroke="#E1CCEC" transform="scale(0.9) rotate(95)" />
      <use xlink:href="#floral" fill="url(#lavenderGradient)" stroke="#E1CCEC" transform="scale(0.9) rotate(125)" />
      <use xlink:href="#floral" fill="url(#lavenderGradient)" stroke="#E1CCEC" transform="scale(0.9) rotate(155)" />
    </g>
    
    <!-- Dot clusters around -->
    <use xlink:href="#dotCluster" transform="translate(60, -20) scale(1.1)" fill="#E1CCEC" />
    <use xlink:href="#dotCluster" transform="translate(30, -60) scale(0.9)" fill="#E1CCEC" />
    <use xlink:href="#dotCluster" transform="translate(70, 30) scale(0.8)" fill="#E1CCEC" />
  </g>
  
  <!-- Connecting elements - flowing curves between the flowers -->
  <g fill="none" stroke-width="1.5" stroke-opacity="0.6">
    <!-- Teal to center connection -->
    <path d="M 340, 240 Q 400, 300 450, 325 T 500, 375" stroke="url(#tealGradient)" />
    <path d="M 330, 220 Q 370, 270 430, 300 T 480, 355" stroke="url(#tealGradient)" />
    <path d="M 350, 230 Q 410, 280 460, 310 T 510, 365" stroke="url(#tealGradient)" />
    
    <!-- Rose to center connection -->
    <path d="M 670, 240 Q 620, 300 570, 325 T 500, 375" stroke="url(#roseGradient)" />
    <path d="M 680, 230 Q 640, 280 590, 310 T 520, 365" stroke="url(#roseGradient)" />
    <path d="M 660, 250 Q 600, 290 560, 330 T 490, 385" stroke="url(#roseGradient)" />
    
    <!-- Lavender to center connection -->
    <path d="M 290, 510 Q 350, 470 400, 430 T 480, 395" stroke="url(#lavenderGradient)" />
    <path d="M 280, 520 Q 330, 480 380, 450 T 470, 405" stroke="url(#lavenderGradient)" />
    <path d="M 270, 530 Q 320, 500 370, 460 T 460, 415" stroke="url(#lavenderGradient)" />
  </g>
  
  <!-- Additional connecting dot clusters -->
  <g>
    <use xlink:href="#dotCluster" transform="translate(400, 300) scale(1)" fill="#64E9EE" opacity="0.8" />
    <use xlink:href="#dotCluster" transform="translate(600, 320) scale(0.9)" fill="#FF7582" opacity="0.8" />
    <use xlink:href="#dotCluster" transform="translate(380, 470) scale(1.1)" fill="#E1CCEC" opacity="0.8" />
    <use xlink:href="#dotCluster" transform="translate(450, 380) scale(0.7)" fill="#64E9EE" opacity="0.6" />
    <use xlink:href="#dotCluster" transform="translate(550, 400) scale(0.8)" fill="#FF7582" opacity="0.6" />
    <use xlink:href="#dotCluster" transform="translate(480, 450) scale(0.9)" fill="#E1CCEC" opacity="0.7" />
  </g>
  
  <!-- Small accent elements - scattered throughout -->
  <g>
    <circle cx="350" cy="280" r="3" fill="#64E9EE" />
    <circle cx="650" cy="300" r="2.5" fill="#FF7582" />
    <circle cx="320" cy="480" r="3" fill="#E1CCEC" />
    <circle cx="450" cy="350" r="2" fill="#64E9EE" />
    <circle cx="550" cy="370" r="2.5" fill="#FF7582" />
    <circle cx="400" cy="430" r="2" fill="#E1CCEC" />
    <circle cx="600" cy="420" r="3" fill="#64E9EE" />
    <circle cx="500" cy="450" r="2" fill="#FF7582" />
    <circle cx="400" cy="400" r="1.5" fill="#E1CCEC" />
    <circle cx="520" cy="320" r="1.8" fill="#64E9EE" />
    <circle cx="480" cy="420" r="1.6" fill="#FF7582" />
    <circle cx="570" cy="450" r="1.7" fill="#E1CCEC" />
  </g>
</svg>
`}
        </CodeBox>
    </Chapter>
);
