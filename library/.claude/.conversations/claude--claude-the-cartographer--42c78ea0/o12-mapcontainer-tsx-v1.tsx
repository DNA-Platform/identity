import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ MapContainer..tsx v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// src/components/MapContainer.tsx
import React, { useState } from 'react';
import WorldMap from './maps/WorldMap';
import USMap from './maps/USMap';
import RussiaMap from './maps/RussiaMap';
import NewYorkMap from './maps/NewYorkMap';

// Map selection type
type MapType = 'world' | 'us' | 'russia' | 'newyork';

// Component to display different maps with a selector
const MapContainer: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState<MapType>('world');
  
  // Map selection handler
  const handleMapChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMap(event.target.value as MapType);
  };
  
  // Render the selected map
  const renderMap = () => {
    switch(selectedMap) {
      case 'world':
        return <WorldMap />;
      case 'us':
        return <USMap />;
      case 'russia':
        return <RussiaMap />;
      case 'newyork':
        return <NewYorkMap />;
      default:
        return <WorldMap />;
    }
  };
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="map-selector" style={{ marginRight: '10px' }}>
          Select Map:
        </label>
        <select 
          id="map-selector"
          value={selectedMap}
          onChange={handleMapChange}
          style={{ 
            padding: '8px', 
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        >
          <option value="world">World Map</option>
          <option value="us">United States</option>
          <option value="russia">Russia</option>
          <option value="newyork">New York</option>
        </select>
      </div>
      
      <div style={{ 
        border: '1px solid #e0e0e0', 
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {renderMap()}
      </div>
    </div>
  );
};

export default MapContainer;
`}
        </CodeBox>
    </Chapter>
);
