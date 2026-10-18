import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ WorldMap..tsx v1 ]]</Title>
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
  // Using a standard projection with extended width to ensure all territories are visible
  const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 160,
        center: [0, 0], // Centered at prime meridian
        // Using standard EqualEarth projection which preserves area proportions
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
      
      {/* World map with extended rotation to ensure everything is visible */}
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
