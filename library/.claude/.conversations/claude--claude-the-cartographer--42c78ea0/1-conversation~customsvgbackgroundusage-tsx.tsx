// Example of using the CustomSVGBackground component
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import MapContainer from '../../shared/MapContainer';
import CustomSVGBackground from '../map-backgrounds/CustomSVGBackground';
import FourColorMapColoring from '../map-colorings/FourColorMapColoring';

// URL for US states data
const statesUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const USAMapWithCustomBackground: React.FC = () => {
  // Example SVG content - a simple wave pattern
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <!-- Wave pattern -->
      <defs>
        <pattern id="wave-pattern" width="200" height="100" patternUnits="userSpaceOnUse">
          <path d="M0,50 Q50,0 100,50 Q150,100 200,50" fill="none" stroke="#56ACBA" stroke-width="2" />
          <path d="M0,100 Q50,50 100,100 Q150,150 200,100" fill="none" stroke="#56ACBA" stroke-width="2" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="#6DCFF6" />
      <rect width="800" height="600" fill="url(#wave-pattern)" />
    </svg>
  `;

  return (
    <MapContainer filename="usa-custom-background.svg">
      <ComposableMap 
        projection="geoAlbers"
        projectionConfig={{
          scale: 1000,
          center: [0, 38]
        }}
      >
        {/* Custom SVG Background */}
        <CustomSVGBackground 
          svgContent={svgContent}
          backgroundColor="#6DCFF6"
        />
        
        {/* US states */}
        <Geographies geography={statesUrl}>
          {({ geographies }) => (
            <FourColorMapColoring geographies={geographies}/>
          )}
        </Geographies>
      </ComposableMap>
    </MapContainer>
  );
};

export default USAMapWithCustomBackground;

// Alternative usage if you have an SVG file stored as a string in a separate file
/*
import { ReactComponent as MySVG } from './path-to-svg.svg';
import { renderToString } from 'react-dom/server';

const USAMapWithCustomBackground: React.FC = () => {
  // Convert the SVG component to a string
  const svgString = renderToString(<MySVG />);
  
  return (
    <MapContainer filename="usa-custom-background.svg">
      <ComposableMap projection="geoAlbers">
        <CustomSVGBackground 
          svgContent={svgString}
          backgroundColor="#6DCFF6"
        />
        
        {