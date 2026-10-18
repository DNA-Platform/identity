import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Cosmic Grid Pattern Visualization v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="1000" viewBox="0 0 1000 1000">
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
      <use xlink:href="#spiralElement" transform="rotate(144) scale`}
        </CodeBox>
    </Chapter>
);
