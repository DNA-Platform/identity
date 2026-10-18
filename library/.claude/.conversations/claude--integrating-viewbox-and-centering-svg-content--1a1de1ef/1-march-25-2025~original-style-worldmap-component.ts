// src/components/maps/WorldMap.tsx
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import styled from 'styled-components';
import MapContainer from '../shared/MapContainer';
import { ViewBox } from '../../utils/ViewBox';

const geoUrl = '/countries-110m.json';

const StyledMap = styled(ComposableMap)`
  width: 100%;
  height: 100%;
`;

const WorldMap: React.FC = () => {
  const viewBox = new ViewBox(800, 600);

  return (
    <MapContainer 
      filename="world-map.svg"
      viewBox={viewBox}
      maxSize="90%"
    >
      <StyledMap
        projection="geoMercator"
        projectionConfig={{
          scale: 150
        }}
      >
        <ZoomableGroup 
          center={[0, 20]} 
          zoom={1}
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

export default WorldMap;