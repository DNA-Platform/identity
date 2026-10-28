import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/33-the-code-box~code.tsx';
import { Version } from '../../.manual/2-the-artifact-and-the-attachment~code.tsx';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ WorldMap..tsx v1-2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/maps/WorldMap.tsx
import React from 'react';
import { 
  ComposableMap, 
  Geographies, 
  ZoomableGroup 
} from 'react-simple-maps';
import FourColorMapColoring from '../map-colorings/FourColorMapColoring';
import DiagonalPatternBackground from '../map-backgrounds/DiagonalPatternBackground';

// World map with all countries visible, including New Zealand and Russia's easternmost parts
const WorldMap: React.FC = () => {
  // Using the standard world geometry file
  const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  
  return (
    <ComposableMap
      projection="geoEqualEarth" // Using Equal Earth instead of Mercator for better area representation
      projectionConfig={{
        // The key fix is to adjust rotation to -10 to ensure all of Russia and New Zealand are visible
        rotate: [-10, 0, 0], // Shift slightly west to keep New Zealand and eastern Russia visible
        scale: 160
      }}
    >
      {/* Background pattern */}
      <DiagonalPatternBackground 
        backgroundColor="#f8f9fa"
        lineColor="#e9ecef"
        lineSpacing={12}
        direction="left"
      />
      
      {/* World map */}
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <FourColorMapColoring 
              geographies={geographies}
              borderColor="#FFFFFF"
              borderWidth={0.5}
            />
          )}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default WorldMap;
`}
        </CodeBox>
    </Chapter>
);
