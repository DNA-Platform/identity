import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ RussiaMap..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/maps/RussiaMap.tsx
import React from 'react';
import { 
  ComposableMap, 
  Geographies, 
  ZoomableGroup 
} from 'react-simple-maps';
import FourColorMapColoring from '../map-colorings/FourColorMapColoring';
import DiagonalPatternBackground from '../map-backgrounds/DiagonalPatternBackground';

// Russia map focused on the entire country including easternmost territories
const RussiaMap: React.FC = () => {
  // Using world countries TopoJSON and filtering for Russia and neighbors
  const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea" // Good for polar regions
      projectionConfig={{
        rotate: [-105, -65, 0], // Center on Russia
        scale: 400,
        center: [0, 0]
      }}
      width={800}
      height={450}
    >
      {/* Background pattern */}
      <DiagonalPatternBackground 
        backgroundColor="#f8f9fa"
        lineColor="#e9ecef"
        lineSpacing={12}
        direction="left"
      />
      
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) => {
            // Filter to show Russia and neighboring countries
            const filteredGeographies = geographies.filter(geo => {
              const { NAME } = geo.properties;
              return (
                NAME === "Russia" || 
                NAME === "Kazakhstan" || 
                NAME === "Mongolia" || 
                NAME === "China" || 
                NAME === "Finland" || 
                NAME === "Norway" || 
                NAME === "Belarus" || 
                NAME === "Ukraine" || 
                NAME === "Georgia" || 
                NAME === "Azerbaijan" || 
                NAME === "Japan" || 
                NAME === "United States of America"
              );
            });
            
            return (
              <FourColorMapColoring 
                geographies={filteredGeographies}
                // Cool color scheme fitting for northern region
                color1="#D6D6DA"
                color2="#DBE4EC" 
                color3="#CFD4D9"
                color4="#E0E5EA"
                borderColor="#FFFFFF"
                borderWidth={0.5}
              />
            );
          }}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default RussiaMap;
`}
        </CodeBox>
    </Chapter>
);
