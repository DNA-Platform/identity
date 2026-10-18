import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Cosmic Grid Pattern ❨Illustrator Compatible❩ v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="1000" viewBox="0 0 1000 1000">
  <!-- Definitions -->
  <defs>
    <!-- Color gradients -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D1B2A" />
      <stop offset="100%" stop-color="#1B263B" />
    </linearGradient>
    
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
    
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD770" />
      <stop offset="100%" stop-color="#BF8D30" />
    </linearGradient>
    
    <!-- Basic shapes -->
    
    <!-- Floral Element -->
    <g id="floralElement">
      <path d="M 0,0 C 5,15 15,20 0,30 C -15,20 -5,15 0,0 Z" />
      <path d="M 0,0 C 5,15 15,20 0,30 C -15,20 -5,15 0,0 Z" transform="rotate(60)" />
      <path d="M 0,0 C 5,15 15,20 0,30 C -15,20 -5,15 0,0 Z" transform="rotate(120)" />
      <path d="M 0,0 C 5,15 15,20 0,30 C -15,20 -5,15 0,0 Z" transform="rotate(180)" />
      <path d="M 0,0 C 5,15 15,20 0,30 C -15,20 -5,15 0,0 Z" transform="rotate(240)" />
      <path d="M 0,0 C 5,15 15,20 0,30 C -15,20 -5,15 0,0 Z" transform="rotate(300)" />
    </g>
    
    <!-- Spiral Element -->
    <path id="spiralElement" d="M 0,0 C 5,5 10,5 15,0 C 20,-5 25,0 30,5" fill="none" stroke-width="1" />
    
    <!-- Star Element -->
    <path id="starElement" d="M 0,-15 L 3,-3 L 15,0 L 3,3 L 0,15 L -3,3 L -15,0 L -3,-3 Z" />
    
    <!-- Dot Cluster -->
    <g id="dotCluster">
      <circle cx="0" cy="0" r="1.2" />
      <circle cx="5" cy="2" r="0.8" />
      <circle cx="-3" cy="4" r="0.6" />
      <circle cx="4" cy="-3" r="0.9" />
      <circle cx="-5" cy="-2" r="0.7" />
    </g>
    
    <!-- Grid Cell A: Floral Focus -->
    <g id="cellA">
      <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#E1CCEC" stroke-width="0.5" stroke-opacity="0.3" />
      <circle cx="0" cy="0" r="35" fill-opacity="0.2" stroke-width="0.5" stroke-opacity="0.8" />
      <use xlink:href="#floralElement" transform="scale(1)" fill="url(#tealGradient)" stroke="#64E9EE" stroke-width="0.5" fill-opacity="0.7" />
      <use xlink:href="#spiralElement" transform="rotate(0) scale(0.8)" stroke="#64E9EE" stroke-opacity="0.6" />
      <use xlink:href="#spiralElement" transform="rotate(120) scale(0.8)" stroke="#64E9EE" stroke-opacity="0.6" />
      <use xlink:href="#spiralElement" transform="rotate(240) scale(0.8)" stroke="#64E9EE" stroke-opacity="0.6" />
      <use xlink:href="#dotCluster" transform="translate(25, 25) scale(1.2)" fill="#64E9EE" fill-opacity="0.7" />
    </g>
    
    <!-- Grid Cell B: Spiral Focus -->
    <g id="cellB">
      <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#FF7582" stroke-width="0.5" stroke-opacity="0.3" />
      <use xlink:href="#spiralElement" transform="rotate(0) scale(1.2)" stroke="#FF7582" stroke-width="1.2" stroke-opacity="0.8" />
      <use xlink:href="#spiralElement" transform="rotate(72) scale(1.2)" stroke="#FF7582" stroke-width="1.2" stroke-opacity="0.8" />
      <use xlink:href="#spiralElement" transform="rotate(144) scale(1.2)" stroke="#FF7582" stroke-width="1.2" stroke-opacity="0.8" />
      <use xlink:href="#spiralElement" transform="rotate(216) scale(1.2)" stroke="#FF7582" stroke-width="1.2" stroke-opacity="0.8" />
      <use xlink:href="#spiralElement" transform="rotate(288) scale(1.2)" stroke="#FF7582" stroke-width="1.2" stroke-opacity="0.8" />
      <use xlink:href="#floralElement" transform="scale(0.5)" fill="url(#roseGradient)" stroke="#FF7582" stroke-width="0.5" fill-opacity="0.7" />
      <use xlink:href="#dotCluster" transform="translate(-25, -25) scale(1.2)" fill="#FF7582" fill-opacity="0.7" />
    </g>
    
    <!-- Grid Cell C: Star Focus -->
    <g id="cellC">
      <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#E1CCEC" stroke-width="0.5" stroke-opacity="0.3" />
      <use xlink:href="#starElement" transform="scale(1.5)" fill="url(#lavenderGradient)" stroke="#E1CCEC" stroke-width="0.5" fill-opacity="0.8" />
      <use xlink:href="#floralElement" transform="scale(0.4)" fill="url(#lavenderGradient)" stroke="#E1CCEC" stroke-width="0.3" fill-opacity="0.6" />
      <use xlink:href="#dotCluster" transform="translate(15, 30) scale(1.2)" fill="#E1CCEC" fill-opacity="0.7" />
      <use xlink:href="#dotCluster" transform="translate(-30, 15) scale(1.2)" fill="#E1CCEC" fill-opacity="0.7" />
    </g>
    
    <!-- Grid Cell D: Multi-Element -->
    <g id="cellD">
      <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#FFD770" stroke-width="0.5" stroke-opacity="0.3" />
      <use xlink:href="#floralElement" transform="scale(0.7)" fill="url(#goldGradient)" stroke="#FFD770" stroke-width="0.5" fill-opacity="0.6" />
      <use xlink:href="#starElement" transform="scale(1)" fill="url(#goldGradient)" stroke="#FFD770" stroke-width="0.5" fill-opacity="0.6" />
      <use xlink:href="#dotCluster" transform="translate(0, 30) scale(1.2)" fill="#FFD770" fill-opacity="0.8" />
      <use xlink:href="#spiralElement" transform="rotate(45) scale(0.8)" stroke="#FFD770" stroke-opacity="0.7" />
      <use xlink:href="#spiralElement" transform="rotate(225) scale(0.8)" stroke="#FFD770" stroke-opacity="0.7" />
    </g>
    
    <!-- Grid Cell E: Minimal -->
    <g id="cellE">
      <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#64E9EE" stroke-width="0.5" stroke-opacity="0.3" />
      <use xlink:href="#dotCluster" transform="translate(0, 0) scale(2)" fill="#64E9EE" fill-opacity="0.7" />
      <use xlink:href="#dotCluster" transform="translate(25, 25) scale(1.5)" fill="#64E9EE" fill-opacity="0.6" />
      <use xlink:href="#dotCluster" transform="translate(-25, -25) scale(1.5)" fill="#64E9EE" fill-opacity="0.6" />
      <use xlink:href="#dotCluster" transform="translate(-25, 25) scale(1.5)" fill="#64E9EE" fill-opacity="0.6" />
      <use xlink:href="#dotCluster" transform="translate(25, -25) scale(1.5)" fill="#64E9EE" fill-opacity="0.6" />
    </g>
    
    <!-- Grid Cell F: Spiral Star Hybrid -->
    <g id="cellF">
      <rect x="-50" y="-50" width="100" height="100" fill="none" stroke="#E1CCEC" stroke-width="0.5" stroke-opacity="0.3" />
      <use xlink:href="#starElement" transform="scale(1.2)" fill="url(#lavenderGradient)" stroke="#E1CCEC" stroke-width="0.5" fill-opacity="0.7" />
      <use xlink:href="#spiralElement" transform="rotate(0) scale(1)" stroke="#E1CCEC" stroke-opacity="0.7" />
      <use xlink:href="#spiralElement" transform="rotate(90) scale(1)" stroke="#E1CCEC" stroke-opacity="0.7" />
      <use xlink:href="#spiralElement" transform="rotate(180) scale(1)" stroke="#E1CCEC" stroke-opacity="0.7" />
      <use xlink:href="#spiralElement" transform="rotate(270) scale(1)" stroke="#E1CCEC" stroke-opacity="0.7" />
    </g>
    
    <!-- Star field background pattern -->
    <pattern id="starField" patternUnits="userSpaceOnUse" width="200" height="200">
      <rect width="200" height="200" fill="none" />
      <circle cx="10" cy="10" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="30" cy="20" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="50" cy="10" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="70" cy="30" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="90" cy="15" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="120" cy="40" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="140" cy="25" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="160" cy="15" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="180" cy="30" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="20" cy="50" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="50" cy="60" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="75" cy="45" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="100" cy="55" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="125" cy="70" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="150" cy="60" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="170" cy="50" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="15" cy="80" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="40" cy="95" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="65" cy="85" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="90" cy="90" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="115" cy="100" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="135" cy="90" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="160" cy="85" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="185" cy="95" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="25" cy="120" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="50" cy="130" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="75" cy="115" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="105" cy="125" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="130" cy="115" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="155" cy="130" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="175" cy="120" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="20" cy="150" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="45" cy="165" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="65" cy="150" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="85" cy="170" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="110" cy="155" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="135" cy="170" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="155" cy="150" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="180" cy="165" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="30" cy="190" r="0.7" fill="#FFFFFF" opacity="0.5" />
      <circle cx="60" cy="180" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="90" cy="195" r="0.6" fill="#FFFFFF" opacity="0.5" />
      <circle cx="120" cy="185" r="0.8" fill="#FFFFFF" opacity="0.5" />
      <circle cx="150" cy="195" r="0.5" fill="#FFFFFF" opacity="0.5" />
      <circle cx="175" cy="185" r="0.7" fill="#FFFFFF" opacity="0.5" />
    </pattern>
  </defs>
  
  <!-- Main composition -->
  
  <!-- Background -->
  <rect width="1000" height="1000" fill="url(#bgGradient)" />
  <rect width="1000" height="1000" fill="url(#starField)" opacity="0.7" />
  
  <!-- Main Grid - 8x8 setup with varying cell types -->
  <g transform="translate(100, 100)">
    <!-- Row 1 -->
    <use xlink:href="#cellA" transform="translate(50, 50)" />
    <use xlink:href="#cellB" transform="translate(150, 50)" />
    <use xlink:href="#cellC" transform="translate(250, 50)" />
    <use xlink:href="#cellD" transform="translate(350, 50)" />
    <use xlink:href="#cellE" transform="translate(450, 50)" />
    <use xlink:href="#cellB" transform="translate(550, 50)" />
    <use xlink:href="#cellF" transform="translate(650, 50)" />
    <use xlink:href="#cellA" transform="translate(750, 50)" />
    
    <!-- Row 2 -->
    <use xlink:href="#cellF" transform="translate(50, 150)" />
    <use xlink:href="#cellD" transform="translate(150, 150)" />
    <use xlink:href="#cellA" transform="translate(250, 150)" />
    <use xlink:href="#cellE" transform="translate(350, 150)" />
    <use xlink:href="#cellC" transform="translate(450, 150)" />
    <use xlink:href="#cellA" transform="translate(550, 150)" />
    <use xlink:href="#cellB" transform="translate(650, 150)" />
    <use xlink:href="#cellD" transform="translate(750, 150)" />
    
    <!-- Row 3 -->
    <use xlink:href="#cellB" transform="translate(50, 250)" />
    <use xlink:href="#cellE" transform="translate(150, 250)" />
    <use xlink:href="#cellF" transform="translate(250, 250)" />
    <use xlink:href="#cellB" transform="translate(350, 250)" />
    <use xlink:href="#cellA" transform="translate(450, 250)" />
    <use xlink:href="#cellD" transform="translate(550, 250)" />
    <use xlink:href="#cellE" transform="translate(650, 250)" />
    <use xlink:href="#cellC" transform="translate(750, 250)" />
    
    <!-- Row 4 -->
    <use xlink:href="#cellD" transform="translate(50, 350)" />
    <use xlink:href="#cellA" transform="translate(150, 350)" />
    <use xlink:href="#cellC" transform="translate(250, 350)" />
    <use xlink:href="#cellF" transform="translate(350, 350)" />
    <use xlink:href="#cellB" transform="translate(450, 350)" />
    <use xlink:href="#cellE" transform="translate(550, 350)" />
    <use xlink:href="#cellA" transform="translate(650, 350)" />
    <use xlink:href="#cellB" transform="translate(750, 350)" />
    
    <!-- Row 5 -->
    <use xlink:href="#cellC" transform="translate(50, 450)" />
    <use xlink:href="#cellF" transform="translate(150, 450)" />
    <use xlink:href="#cellB" transform="translate(250, 450)" />
    <use xlink:href="#cellA" transform="translate(350, 450)" />
    <use xlink:href="#cellD" transform="translate(450, 450)" />
    <use xlink:href="#cellC" transform="translate(550, 450)" />
    <use xlink:href="#cellF" transform="translate(650, 450)" />
    <use xlink:href="#cellE" transform="translate(750, 450)" />
    
    <!-- Row 6 -->
    <use xlink:href="#cellE" transform="translate(50, 550)" />
    <use xlink:href="#cellC" transform="translate(150, 550)" />
    <use xlink:href="#cellD" transform="translate(250, 550)" />
    <use xlink:href="#cellB" transform="translate(350, 550)" />
    <use xlink:href="#cellF" transform="translate(450, 550)" />
    <use xlink:href="#cellA" transform="translate(550, 550)" />
    <use xlink:href="#cellC" transform="translate(650, 550)" />
    <use xlink:href="#cellD" transform="translate(750, 550)" />
    
    <!-- Row 7 -->
    <use xlink:href="#cellA" transform="translate(50, 650)" />
    <use xlink:href="#cellB" transform="translate(150, 650)" />
    <use xlink:href="#cellE" transform="translate(250, 650)" />
    <use xlink:href="#cellC" transform="translate(350, 650)" />
    <use xlink:href="#cellA" transform="translate(450, 650)" />
    <use xlink:href="#cellF" transform="translate(550, 650)" />
    <use xlink:href="#cellD" transform="translate(650, 650)" />
    <use xlink:href="#cellB" transform="translate(750, 650)" />
    
    <!-- Row 8 -->
    <use xlink:href="#cellF" transform="translate(50, 750)" />
    <use xlink:href="#cellD" transform="translate(150, 750)" />
    <use xlink:href="#cellA" transform="translate(250, 750)" />
    <use xlink:href="#cellE" transform="translate(350, 750)" />
    <use xlink:href="#cellC" transform="translate(450, 750)" />
    <use xlink:href="#cellB" transform="translate(550, 750)" />
    <use xlink:href="#cellE" transform="translate(650, 750)" />
    <use xlink:href="#cellA" transform="translate(750, 750)" />
  </g>
  
  <!-- Highlight overlays for cells of interest -->
  <g opacity="0.4">
    <circle cx="200" cy="200" r="60" fill="none" stroke="#64E9EE" stroke-width="1" />
    <circle cx="400" cy="400" r="60" fill="none" stroke="#FF7582" stroke-width="1" />
    <circle cx="600" cy="600" r="60" fill="none" stroke="#E1CCEC" stroke-width="1" />
    <circle cx="800" cy="200" r="60" fill="none" stroke="#FFD770" stroke-width="1" />
    <circle cx="200" cy="800" r="60" fill="none" stroke="#64E9EE" stroke-width="1" />
  </g>
</svg>
`}
        </CodeBox>
    </Chapter>
);
