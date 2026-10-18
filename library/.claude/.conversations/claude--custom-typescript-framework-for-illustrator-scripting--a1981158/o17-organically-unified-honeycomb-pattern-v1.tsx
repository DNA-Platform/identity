import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Organically Unified Honeycomb Pattern v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 750">
  <!-- Definitions for all elements -->
  <defs>
    <!-- Color gradients -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F2F7FA" />
      <stop offset="100%" stop-color="#D6E3EC" />
    </linearGradient>
    
    <linearGradient id="honeyGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7E3A7" />
      <stop offset="100%" stop-color="#E2B85D" />
    </linearGradient>
    
    <linearGradient id="coolBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ADDCF7" />
      <stop offset="100%" stop-color="#6D9CC2" />
    </linearGradient>
    
    <linearGradient id="softPurple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5D1F0" />
      <stop offset="100%" stop-color="#B392C9" />
    </linearGradient>
    
    <linearGradient id="warmAmber" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F2D1A8" />
      <stop offset="100%" stop-color="#D99F68" />
    </linearGradient>
    
    <!-- Single honeycomb cell with gradient fill -->
    <polygon id="honeycell" points="0,0 15,-26 45,-26 60,0 45,26 15,26" stroke="#3F2E23" stroke-width="1" />
    
    <!-- Simplified bee -->
    <g id="bee">
      <ellipse cx="0" cy="0" rx="4" ry="7" fill="#3F2E23" />
      <line x1="-3" y1="-2" x2="3" y2="-2" stroke="#F4D7A8" stroke-width="1.2" />
      <line x1="-3" y1="0" x2="3" y2="0" stroke="#F4D7A8" stroke-width="1.2" />
      <line x1="-3" y1="2" x2="3" y2="2" stroke="#F4D7A8" stroke-width="1.2" />
    </g>
    
    <!-- Radiating line -->
    <line id="ray" x1="0" y1="0" x2="60" y2="0" stroke-width="2" opacity="0.5" />
    
    <!-- A cluster of honeycomb cells -->
    <g id="honeycluster">
      <use href="#honeycell" x="0" y="0" fill="url(#honeyGold)" />
      <use href="#honeycell" x="60" y="0" fill="url(#honeyGold)" />
      <use href="#honeycell" x="30" y="52" fill="url(#honeyGold)" />
      <use href="#honeycell" x="30" y="-52" fill="url(#honeyGold)" />
      <use href="#honeycell" x="90" y="-52" fill="url(#honeyGold)" />
      <use href="#honeycell" x="90" y="52" fill="url(#honeyGold)" />
      <use href="#honeycell" x="120" y="0" fill="url(#honeyGold)" />
    </g>

    <!-- Smooth transition overlay filter -->
    <filter id="softBlend" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <!-- Rays radiating from center -->
    <g id="rays">
      <use href="#ray" transform="rotate(0)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(30)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(60)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(90)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(120)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(150)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(180)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(210)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(240)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(270)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(300)" stroke="#6D91B0" />
      <use href="#ray" transform="rotate(330)" stroke="#6D91B0" />
    </g>
  </defs>
  
  <!-- Background -->
  <rect width="1000" height="750" fill="url(#bgGradient)" />

  <!-- Main central cluster - gold theme -->
  <g transform="translate(500, 375)">
    <circle cx="0" cy="0" r="80" fill="url(#honeyGold)" stroke="#3F2E23" stroke-width="2" />
    <use href="#rays" />
    
    <!-- Main honeycomb structure -->
    <use href="#honeycluster" transform="translate(-150, -150) scale(1.2)" />
    <use href="#honeycluster" transform="translate(30, -150) scale(1.2)" />
    <use href="#honeycluster" transform="translate(-150, 50) scale(1.2)" />
    <use href="#honeycluster" transform="translate(30, 50) scale(1.2)" />
  </g>
  
  <!-- Overlapping blue cluster - upper left flowing into center -->
  <g transform="translate(320, 220)">
    <circle cx="0" cy="0" r="65" fill="url(#coolBlue)" stroke="#3F2E23" stroke-width="1.5" opacity="0.85" />
    <use href="#rays" transform="scale(0.8)" stroke="#5A7D99" opacity="0.7" />
    
    <!-- Blue honeycombs flowing toward center -->
    <g opacity="0.9">
      <use href="#honeycluster" transform="scale(0.9)" />
      <use href="#honeycluster" transform="translate(80, 60) scale(0.8)" />
      <use href="#honeycluster" transform="translate(160, 120) scale(0.7)" />
      <use href="#honeycluster" transform="translate(90, -80) scale(0.85)" />
      <use href="#honeycluster" transform="translate(-80, 50) scale(0.75)" />
    </g>
    
    <!-- Change fills to blue gradient on these specific clusters -->
    <g fill="url(#coolBlue)">
      <use href="#honeycell" transform="translate(0, 0) scale(0.9)" />
      <use href="#honeycell" transform="translate(54, 0) scale(0.9)" />
      <use href="#honeycell" transform="translate(27, 47) scale(0.9)" />
      <use href="#honeycell" transform="translate(27, -47) scale(0.9)" />
      <use href="#honeycell" transform="translate(80, 60) scale(0.8)" />
      <use href="#honeycell" transform="translate(128, 60) scale(0.8)" />
      <use href="#honeycell" transform="translate(104, 101) scale(0.8)" />
      <use href="#honeycell" transform="translate(160, 120) scale(0.7)" />
    </g>
  </g>

  <!-- Overlapping purple cluster - upper right flowing into center -->
  <g transform="translate(680, 280)">
    <circle cx="0" cy="0" r="55" fill="url(#softPurple)" stroke="#3F2E23" stroke-width="1.5" opacity="0.85" />
    <use href="#rays" transform="scale(0.7)" stroke="#9077A5" opacity="0.7" />
    
    <!-- Purple honeycombs flowing toward center -->
    <g opacity="0.85">
      <use href="#honeycluster" transform="scale(0.85)" />
      <use href="#honeycluster" transform="translate(-70, 50) scale(0.75)" />
      <use href="#honeycluster" transform="translate(-130, 100) scale(0.65)" />
    </g>
    
    <!-- Change fills to purple gradient on these specific clusters -->
    <g fill="url(#softPurple)">
      <use href="#honeycell" transform="translate(0, 0) scale(0.85)" />
      <use href="#honeycell" transform="translate(51, 0) scale(0.85)" />
      <use href="#honeycell" transform="translate(25.5, 44) scale(0.85)" />
      <use href="#honeycell" transform="translate(-70, 50) scale(0.75)" />
      <use href="#honeycell" transform="translate(-28, 50) scale(0.75)" />
      <use href="#honeycell" transform="translate(-130, 100) scale(0.65)" />
    </g>
  </g>
  
  <!-- Overlapping amber/orange cluster - lower left -->
  <g transform="translate(300, 520)">
    <circle cx="0" cy="0" r="60" fill="url(#warmAmber)" stroke="#3F2E23" stroke-width="1.5" opacity="0.85" />
    <use href="#rays" transform="scale(0.75)" stroke="#B88450" opacity="0.7" />
    
    <!-- Amber honeycombs flowing toward center -->
    <g opacity="0.9">
      <use href="#honeycluster" transform="scale(0.85)" />
      <use href="#honeycluster" transform="translate(70, -60) scale(0.75)" />
      <use href="#honeycluster" transform="translate(140, -120) scale(0.65)" />
    </g>
    
    <!-- Change fills to amber gradient on these specific clusters -->
    <g fill="url(#warmAmber)">
      <use href="#honeycell" transform="translate(0, 0) scale(0.85)" />
      <use href="#honeycell" transform="translate(51, 0) scale(0.85)" />
      <use href="#honeycell" transform="translate(25.5, 44) scale(0.85)" />
      <use href="#honeycell" transform="translate(70, -60) scale(0.75)" />
      <use href="#honeycell" transform="translate(118, -60) scale(0.75)" />
      <use href="#honeycell" transform="translate(140, -120) scale(0.65)" />
    </g>
  </g>
  
  <!-- Transition bees scattered throughout -->
  <g opacity="0.85">
    <use href="#bee" transform="translate(420, 300) rotate(30) scale(1.3)" />
    <use href="#bee" transform="translate(580, 340) rotate(-15) scale(1.2)" />
    <use href="#bee" transform="translate(490, 460) rotate(15) scale(1.1)" />
    <use href="#bee" transform="translate(380, 420) rotate(-30) scale(1.2)" />
    <use href="#bee" transform="translate(610, 410) rotate(45) scale(1.0)" />
    <use href="#bee" transform="translate(450, 280) rotate(-45) scale(1.1)" />
    <use href="#bee" transform="translate(350, 350) rotate(60) scale(0.9)" />
    <use href="#bee" transform="translate(540, 280) rotate(-60) scale(1.0)" />
    <use href="#bee" transform="translate(650, 350) rotate(20) scale(1.1)" />
  </g>
  
  <!-- Connecting elements and transitions -->
  <g opacity="0.7">
    <!-- Connecting honeycombs to blend regions -->
    <use href="#honeycell" transform="translate(410, 315) scale(0.7)" fill="url(#coolBlue)" opacity="0.5" />
    <use href="#honeycell" transform="translate(450, 335) scale(0.65)" fill="url(#honeyGold)" opacity="0.6" />
    <use href="#honeycell" transform="translate(480, 295) scale(0.75)" fill="url(#honeyGold)" opacity="0.7" />
    <use href="#honeycell" transform="translate(520, 325) scale(0.7)" fill="url(#softPurple)" opacity="0.5" />
    <use href="#honeycell" transform="translate(560, 350) scale(0.8)" fill="url(#softPurple)" opacity="0.6" />
    <use href="#honeycell" transform="translate(400, 420) scale(0.75)" fill="url(#warmAmber)" opacity="0.6" />
    <use href="#honeycell" transform="translate(440, 450) scale(0.7)" fill="url(#warmAmber)" opacity="0.7" />
    <use href="#honeycell" transform="translate(500, 430) scale(0.8)" fill="url(#honeyGold)" opacity="0.6" />
  </g>
  
  <!-- Subtle pollen particles throughout -->
  <g opacity="0.7">
    <circle cx="450" cy="320" r="2" fill="#F7E3A7" />
    <circle cx="520" cy="360" r="1.5" fill="#F7E3A7" />
    <circle cx="480" cy="400" r="2" fill="#F7E3A7" />
    <circle cx="380" cy="380" r="1.5" fill="#F7E3A7" />
    <circle cx="600" cy="340" r="2" fill="#F7E3A7" />
    <circle cx="430" cy="280" r="1.5" fill="#F7E3A7" />
    <circle cx="540" cy="420" r="2" fill="#F7E3A7" />
    <circle cx="360" cy="330" r="1.5" fill="#F7E3A7" />
    <circle cx="500" cy="300" r="2" fill="#F7E3A7" />
    <circle cx="580" cy="380" r="1.5" fill="#F7E3A7" />
    <circle cx="460" cy="370" r="2" fill="#F7E3A7" />
    <circle cx="420" cy="410" r="1.5" fill="#F7E3A7" />
  </g>

  <!-- Soft overlay to blend everything together -->
  <rect width="1000" height="750" fill="#FFFFFF" opacity="0.05" />
</svg>
`}
        </CodeBox>
    </Chapter>
);
