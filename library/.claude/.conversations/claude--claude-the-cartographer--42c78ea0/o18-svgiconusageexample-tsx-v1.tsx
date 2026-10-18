import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ SVGIconUsageExample..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/maps/MapWithIcons.tsx
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography
} from 'react-simple-maps';
import MapContainer from '../../shared/MapContainer';
import DiagonalPatternBackground from '../map-backgrounds/DiagonalPatternBackground';
import FourColorMapColoring from '../map-colorings/FourColorMapColoring';
import SVGIcon from '../map-elements/SVGIcon';

// URL for US states data
const statesUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapWithIcons: React.FC = () => {
  // Example SVG content - a simple star icon
  // You can replace this with any SVG content
  const starIconSVG = \`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="gold" stroke="black" stroke-width="0.5"/>
    </svg>
  \`;
  
  // Example SVG content - a simple compass icon
  // You can replace this with any SVG content
  const compassIconSVG = \`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" fill="white" stroke="black" />
      <path d="M12 2v4m0 12v4m10-10h-4m-12 0h-4" stroke="black" />
      <path d="M12 8l-2 8 2-1 2 1z" fill="red" />
    </svg>
  \`;

  return (
    <MapContainer filename="usa-with-icons.svg">
      <ComposableMap 
        projection="geoAlbers"
        projectionConfig={{
          scale: 1000,
          center: [0, 38]
        }}
      >
        <DiagonalPatternBackground 
          backgroundColor="#f8f9fa" 
          lineColor="#e9ecef" 
          lineWidth={2}
          lineSpacing={6}
          direction="left"
        />
        
        {/* US states */}
        <Geographies geography={statesUrl}>
          {({ geographies }) => (
            <FourColorMapColoring geographies={geographies}/>
          )}
        </Geographies>
        
        {/* Place SVG icons at specific coordinates */}
        {/* Washington DC */}
        <SVGIcon 
          svgContent={starIconSVG}
          x={-77.0369}
          y={38.9072}
          width={30}
          height={30}
        />
        
        {/* San Francisco */}
        <SVGIcon 
          svgContent={starIconSVG}
          x={-122.4194}
          y={37.7749}
          width={30}
          height={30}
        />
        
        {/* Chicago */}
        <SVGIcon 
          svgContent={starIconSVG}
          x={-87.6298}
          y={41.8781}
          width={30}
          height={30}
        />
        
        {/* Compass in corner of map */}
        <SVGIcon 
          svgContent={compassIconSVG}
          x={-65}
          y={25}
          width={50}
          height={50}
        />
      </ComposableMap>
    </MapContainer>
  );
};

export default MapWithIcons;
`}
        </CodeBox>
    </Chapter>
);
