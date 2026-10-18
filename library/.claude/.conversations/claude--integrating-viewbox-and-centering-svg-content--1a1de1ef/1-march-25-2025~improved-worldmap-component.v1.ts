// src/components/maps/WorldMap.tsx
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import styled from 'styled-components';
import MapContainer from '../shared/MapContainer';

// URL to your GeoJSON data
const geoUrl = '/countries-110m.json';

// Style the ComposableMap to fill its container while maintaining aspect ratio
const StyledMap = styled(ComposableMap)`
  width: 100%;
  height: 100%;
`;

// Define map dimensions and aspect ratio
const MAP_WIDTH = 800;
const MAP_HEIGHT = 600;
const MAP_VIEWBOX = `0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`;

const WorldMap: React.FC = () => {
  return (
    <MapContainer 
      filename="world-map.svg"
      width="90vw"  // Container width - can be adjusted
      height="70vh" // Container height - can be adjusted
    >
      <StyledMap
        viewBox={MAP_VIEWBOX}
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        // The following props help ensure proper SVG rendering
        preserveAspectRatio="xMidYMid meet"
        projection="geoEqualEarth" // Choose appropriate projection for world map
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography 
                key={geo.rsmKey} 
                geography={geo} 
                fill="#D6D6DA"
                stroke="#FFFFFF"
                strokeWidth={0.5}
                // Add hover and pressed styles for interactivity
                style={{
                  default: { outline: 'none' },
                  hover: { fill: '#F53', outline: 'none' },
                  pressed: { fill: '#E42', outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
      </StyledMap>
    </MapContainer>
  );
};

export default WorldMap;