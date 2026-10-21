// src/components/maps/NewYorkMap.tsx
import React from 'react';
import { 
  ComposableMap, 
  Geographies, 
  ZoomableGroup 
} from 'react-simple-maps';
import FourColorMapColoring from '../map-colorings/FourColorMapColoring';
import DiagonalPatternBackground from '../map-backgrounds/DiagonalPatternBackground';

// New York map focused on the state or city depending on desired detail level
const NewYorkMap: React.FC = () => {
  // Using counties TopoJSON for more detailed New York view
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
  
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        // Coordinates for New York State
        center: [-75.5, 43], // Central NY state coordinates
        scale: 5000
      }}
      width={800}
      height={450}
    >
      {/* Background pattern */}
      <DiagonalPatternBackground 
        backgroundColor="#f8f9fa"
        lineColor="#e9ecef"
        lineSpacing={8} // Denser pattern for detailed map
        direction="left"
      />
      
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) => {
            // Filter to only show NY counties
            const nyCounties = geographies.filter(geo => 
              geo.properties.state === "36" // NY FIPS code
            );
            
            return (
              <FourColorMapColoring 
                geographies={nyCounties}
                // Urban color scheme 
                color1="#D6D6DA"
                color2="#E0E0E4"
                color3="#CFCFD4"
                color4="#DBDBDF"
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

export default NewYorkMap;
