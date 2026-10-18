import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Fixed WorldMap Component v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/maps/WorldMap.tsx
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import styled from 'styled-components';
import MapContainer from '../shared/MapContainer';

// URL to your GeoJSON data
const geoUrl = '/countries-110m.json';

// Enhanced styling for better centering and positioning
const StyledMap = styled(ComposableMap)\`
  width: 100%;
  height: 100%;
  margin: 0 auto; // Center horizontally
\`;

// Define map dimensions for a proper rectangular mercator view
const MAP_WIDTH = 1200;
const MAP_HEIGHT = 600;
const MAP_VIEWBOX = \`0 0 \${MAP_WIDTH} \${MAP_HEIGHT}\`;

const WorldMap: React.FC = () => {
  return (
    <MapContainer 
      filename="world-map.svg"
      width="90%" // Changed from 90vw to 90% for better responsiveness
      height="70vh"
    >
      <StyledMap
        viewBox={MAP_VIEWBOX}
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        preserveAspectRatio="xMidYMid meet" // This is key for centering
        projection="geoMercator"
      >
        {/* 
          Adjusted ZoomableGroup settings for better centering:
          - Slightly adjusted center coordinates
          - Reduced zoom slightly to ensure the entire map is visible
        */}
        <ZoomableGroup center={[0, 20]} zoom={0.95}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography 
                  key={geo.rsmKey} 
                  geography={geo} 
                  fill="#D6D6DA"
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#F53', outline: 'none' },
                    pressed: { fill: '#E42', outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </StyledMap>
    </MapContainer>
  );
};

export default WorldMap;`}
        </CodeBox>
    </Chapter>
);
