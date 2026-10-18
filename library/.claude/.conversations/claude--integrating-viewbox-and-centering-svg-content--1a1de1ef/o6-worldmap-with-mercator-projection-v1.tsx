import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ WorldMap with Mercator Projection v1 ]]</Title>
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

// Style the ComposableMap to fill its container while maintaining aspect ratio
const StyledMap = styled(ComposableMap)\`
  width: 100%;
  height: 100%;
\`;

// Define map dimensions and aspect ratio for a rectangular mercator view
// Using a wider width relative to height for a more rectangular appearance
const MAP_WIDTH = 1200;
const MAP_HEIGHT = 600;
const MAP_VIEWBOX = \`0 0 \${MAP_WIDTH} \${MAP_HEIGHT}\`;

const WorldMap: React.FC = () => {
  return (
    <MapContainer 
      filename="world-map.svg"
      width="90vw"
      height="70vh"
    >
      <StyledMap
        viewBox={MAP_VIEWBOX}
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        preserveAspectRatio="xMidYMid meet"
        projection="geoMercator" // Using Mercator projection for a flat rectangular map
      >
        {/* 
          ZoomableGroup helps to center and properly scale the map.
          The center prop is set to [0,0] which represents the equator and prime meridian.
          The zoom level is set to 1 to show the entire world map.
        */}
        <ZoomableGroup center={[0, 0]} zoom={1}>
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
