import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Professional Cartographic Components for React Simple Maps v1 ]]</Title>
        <CodeBox
            language="javascript"
        >
            {`${''}// Artistic Map Components for Professional Cartography with React Simple Maps
// These components create SVG elements that work seamlessly with Adobe Illustrator

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { scaleQuantile, scaleLinear } from "d3-scale";
import { geoPath, geoGraticule } from "d3-geo";
import { geoSinusoidal, geoOrthographic, geoAzimuthalEqualArea } from "d3-geo-projection";
import { feature } from "topojson-client";
import { schemeBlues, schemeYlOrBr } from "d3-scale-chromatic";

// ============================================================================
// 1. Vintage Style Cartographic Border
// Recreates ornate borders from golden age Dutch cartography
// ============================================================================
const CartographicBorder = ({ width, height, strokeWidth = 2 }) => {
  // Create ornate border pattern inspired by historical maps
  const cornerSize = Math.min(width, height) * 0.15;
  
  return (
    <g className="cartographic-border">
      {/* Main rectangular border */}
      <rect 
        x={strokeWidth/2} 
        y={strokeWidth/2} 
        width={width - strokeWidth} 
        height={height - strokeWidth} 
        fill="none" 
        stroke="#8B4513" 
        strokeWidth={strokeWidth} 
      />
      
      {/* Ornate corners - these will be properly grouped in Illustrator */}
      {/* Top Left */}
      <path 
        d={\`M \${strokeWidth} \${cornerSize} 
           Q \${cornerSize/2} \${strokeWidth}, \${cornerSize} \${strokeWidth}\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth={strokeWidth}
      />
      
      {/* Top Right */}
      <path 
        d={\`M \${width - cornerSize} \${strokeWidth} 
           Q \${width - cornerSize/2} \${strokeWidth}, \${width - strokeWidth} \${cornerSize}\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth={strokeWidth}
      />
      
      {/* Bottom Right */}
      <path 
        d={\`M \${width - strokeWidth} \${height - cornerSize} 
           Q \${width - cornerSize/2} \${height - strokeWidth}, \${width - cornerSize} \${height - strokeWidth}\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth={strokeWidth}
      />
      
      {/* Bottom Left */}
      <path 
        d={\`M \${cornerSize} \${height - strokeWidth} 
           Q \${cornerSize/2} \${height - strokeWidth}, \${strokeWidth} \${height - cornerSize}\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth={strokeWidth}
      />
      
      {/* Decorative flourishes at midpoints */}
      <path
        d={\`M \${width/2 - 20} \${strokeWidth} Q \${width/2} \${-10}, \${width/2 + 20} \${strokeWidth}\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth={strokeWidth}
      />
      
      <path
        d={\`M \${width/2 - 20} \${height - strokeWidth} Q \${width/2} \${height + 10}, \${width/2 + 20} \${height - strokeWidth}\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth={strokeWidth}
      />
    </g>
  );
};

// ============================================================================
// 2. Renaissance-Inspired Cartouche Component
// Creates a decorative frame for map titles or legends
// ============================================================================
const Cartouche = ({ x, y, width, height, title, subtitle }) => {
  return (
    <g className="cartouche" transform={\`translate(\${x}, \${y})\`}>
      {/* Background shape with decorative border */}
      <path
        d={\`
          M 0,\${height * 0.2}
          Q \${width * 0.1},0 \${width * 0.3},0
          L \${width * 0.7},0
          Q \${width * 0.9},0 \${width},\${height * 0.2}
          L \${width},\${height * 0.8}
          Q \${width * 0.9},\${height} \${width * 0.7},\${height}
          L \${width * 0.3},\${height}
          Q \${width * 0.1},\${height} 0,\${height * 0.8}
          Z
        \`}
        fill="#F5F0DC" // Parchment color
        stroke="#8B4513" // Sepia brown
        strokeWidth="1.5"
      />
      
      {/* Decorative scrolls on corners */}
      <path
        d={\`M 0,\${height * 0.2} Q \${-width * 0.1},\${height * 0.1} 0,0\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth="1"
      />
      
      <path
        d={\`M \${width},\${height * 0.2} Q \${width * 1.1},\${height * 0.1} \${width},0\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth="1"
      />
      
      <path
        d={\`M 0,\${height * 0.8} Q \${-width * 0.1},\${height * 0.9} 0,\${height}\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth="1"
      />
      
      <path
        d={\`M \${width},\${height * 0.8} Q \${width * 1.1},\${height * 0.9} \${width},\${height}\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth="1"
      />
      
      {/* Title text */}
      <text
        x={width / 2}
        y={height * 0.4}
        fontFamily="Garamond, serif"
        fontSize={height * 0.18}
        textAnchor="middle"
        fill="#59260B" // Dark brown
      >
        {title}
      </text>
      
      {/* Subtitle text */}
      <text
        x={width / 2}
        y={height * 0.7}
        fontFamily="Garamond, serif"
        fontSize={height * 0.12}
        textAnchor="middle"
        fill="#59260B" // Dark brown
      >
        {subtitle}
      </text>
    </g>
  );
};

// ============================================================================
// 3. Historical Compass Rose
// Creates an ornate compass rose in vintage style
// ============================================================================
const CompassRose = ({ x, y, size }) => {
  // Create points for main star shape
  const createStarPoints = (count, outerRadius, innerRadius) => {
    let points = [];
    for (let i = 0; i < count * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI * i) / count;
      const px = x + radius * Math.sin(angle);
      const py = y - radius * Math.cos(angle);
      points.push([px, py]);
    }
    return points;
  };
  
  const mainPoints = createStarPoints(16, size / 2, size / 5);
  const secondaryPoints = createStarPoints(16, size / 3, size / 7);
  
  return (
    <g className="compass-rose">
      {/* Outer decorative circle */}
      <circle
        cx={x}
        cy={y}
        r={size / 1.8}
        fill="none"
        stroke="#8B4513"
        strokeWidth="1.5"
      />
      
      {/* Main star shape */}
      <path
        d={\`M \${mainPoints.map(p => p.join(',')).join(' L ')} Z\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth="1.5"
      />
      
      {/* Secondary star shape */}
      <path
        d={\`M \${secondaryPoints.map(p => p.join(',')).join(' L ')} Z\`}
        fill="none"
        stroke="#8B4513"
        strokeWidth="1"
      />
      
      {/* Cardinal directions */}
      <text x={x} y={y - size / 2 - 10} textAnchor="middle" fontFamily="Garamond, serif" fontSize={size / 10} fill="#59260B">N</text>
      <text x={x + size / 2 + 10} y={y} textAnchor="middle" fontFamily="Garamond, serif" fontSize={size / 10} fill="#59260B">E</text>
      <text x={x} y={y + size / 2 + 15} textAnchor="middle" fontFamily="Garamond, serif" fontSize={size / 10} fill="#59260B">S</text>
      <text x={x - size / 2 - 10} y={y} textAnchor="middle" fontFamily="Garamond, serif" fontSize={size / 10} fill="#59260B">W</text>
      
      {/* Center decoration */}
      <circle cx={x} cy={y} r={size / 15} fill="#8B4513" />
    </g>
  );
};

// ============================================================================
// 4. Terrain Patterns for Land Features
// Creates SVG patterns that Illustrator can use
// ============================================================================
const TerrainPatterns = () => {
  return (
    <defs>
      {/* Forest Pattern */}
      <pattern id="forest-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
        <circle cx="5" cy="5" r="1.5" fill="#2D6D4B" />
        <circle cx="15" cy="5" r="1.5" fill="#2D6D4B" />
        <circle cx="10" cy="10" r="1.5" fill="#2D6D4B" />
        <circle cx="5" cy="15" r="1.5" fill="#2D6D4B" />
        <circle cx="15" cy="15" r="1.5" fill="#2D6D4B" />
      </pattern>
      
      {/* Mountain Pattern */}
      <pattern id="mountain-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
        <path d="M0,20 L10,5 L20,20 Z" fill="#B5B5B5" stroke="#8A8A8A" strokeWidth="0.5" />
      </pattern>
      
      {/* Desert Pattern */}
      <pattern id="desert-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
        <path d="M5,5 L7,3 L9,5 L11,3 L13,5" fill="none" stroke="#D2B48C" strokeWidth="0.5" />
        <path d="M5,10 L7,8 L9,10 L11,8 L13,10" fill="none" stroke="#D2B48C" strokeWidth="0.5" />
        <path d="M5,15 L7,13 L9,15 L11,13 L13,15" fill="none" stroke="#D2B48C" strokeWidth="0.5" />
      </pattern>
      
      {/* Agricultural Pattern */}
      <pattern id="agriculture-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
        <path d="M0,0 L20,20" stroke="#CDC6A5" strokeWidth="0.5" />
        <path d="M20,0 L0,20" stroke="#CDC6A5" strokeWidth="0.5" />
      </pattern>
      
      {/* Wetland Pattern */}
      <pattern id="wetland-pattern" patternUnits="userSpaceOnUse" width="20" height="10">
        <path d="M0,5 Q5,0 10,5 Q15,10 20,5" fill="none" stroke="#6BAED6" strokeWidth="0.5" />
      </pattern>
      
      {/* Paper Texture */}
      <pattern id="paper-texture" patternUnits="userSpaceOnUse" width="100" height="100">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.95 0 0 0 0 0.95 0 0 0 0 0.9 0 0 0 0.5 0" />
        </filter>
        <rect width="100" height="100" filter="url(#noise)" />
      </pattern>
    </defs>
  );
};

// ============================================================================
// 5. Hand-Drawn Effect Filters
// Creates filters that give maps a vintage, hand-drawn feel
// ============================================================================
const HandDrawnEffects = () => {
  return (
    <defs>
      {/* Subtle paper grain effect */}
      <filter id="paper-grain" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" stitchTiles="stitch" result="noise" />
        <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0" result="coloredNoise" />
        <feComposite operator="in" in="SourceGraphic" in2="coloredNoise" result="noisyImage" />
        <feBlend mode="multiply" in="noisyImage" in2="SourceGraphic" />
      </filter>
      
      {/* Hand-drawn line effect */}
      <filter id="hand-drawn" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" seed="1" />
        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      
      {/* Vintage color effect */}
      <filter id="vintage-color">
        <feColorMatrix type="matrix" values="0.9 0.1 0.1 0 0 0.1 0.8 0.1 0 0 0.1 0.1 0.7 0 0 0 0 0 1 0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.`}
        </CodeBox>
    </Chapter>
);
