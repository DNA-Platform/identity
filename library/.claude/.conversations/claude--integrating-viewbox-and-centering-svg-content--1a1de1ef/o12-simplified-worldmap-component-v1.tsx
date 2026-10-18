import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Simplified WorldMap Component v1 ]]</Title>
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
import MapContainer from '../shared/MapContainer';

// URL to your GeoJSON data
const geoUrl = '/countries-110m.json';

const WorldMap: React.FC = () => {
  return (
    <MapContainer filename="world-map.svg">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150
        }}
      >
        <ZoomableGroup center={[0, 20]} zoom={1}>
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
      </ComposableMap>
    </MapContainer>
  );
};

export default WorldMap;`}
        </CodeBox>
    </Chapter>
);
