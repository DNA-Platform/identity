import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ USMap..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`// src/components/maps/USMap.tsx
import React from 'react';
import { 
  ComposableMap, 
  Geographies, 
  ZoomableGroup 
} from 'react-simple-maps';
import FourColorMapColoring from '../map-colorings/FourColorMapColoring';
import DiagonalPatternBackground from '../map-backgrounds/DiagonalPatternBackground';

// US map focused on the continental United States
const USMap: React.FC = () => {
  // Using US counties TopoJSON
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
  
  return (
    <ComposableMap
      projection="geoAlbersUsa" // Specialized projection for US
      width={800}
      height={450}
    >
      {/* Background pattern */}
      <DiagonalPatternBackground 
        backgroundColor="#f8f9fa"
        lineColor="#e9ecef"
        lineSpacing={10} // Slightly denser pattern for more detailed map
        direction="left"
      />
      
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <FourColorMapColoring 
              geographies={geographies}
              // Slightly different color scheme for US map
              color1="#D6D6DA"
              color2="#E0E0E8"  
              color3="#CFCFD4"
              color4="#DBDBDF"
              borderColor="#FFFFFF"
              borderWidth={0.5}
            />
          )}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default USMap;
`}
        </CodeBox>
    </Chapter>
);
