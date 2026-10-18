// src/components/maps/USMap.tsx
import React from 'react';
import { 
  ComposableMap, 
  Geographies, 
  ZoomableGroup 
} from 'react-simple-maps';
import FourColorMapColoring from '../map-colorings/FourColorMapColoring';
import DiagonalPatternBackground from '../map-backgrounds/DiagonalPatternBackground';

// US map focused on the United States
const USMap: React.FC = () => {
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
  
  return (
    <ComposableMap
      projection="geoAlbersUsa" // Specialized projection for US that includes Alaska and Hawaii
    >
      {/* Background pattern */}
      <DiagonalPatternBackground 
        backgroundColor="#f8f9fa"
        lineColor="#e9ecef"
        lineSpacing={12}
        direction="left"
      />
      
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <FourColorMapColoring 
            geographies={geographies}
            borderColor="#FFFFFF"
            borderWidth={0.5}
          />
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default USMap;
