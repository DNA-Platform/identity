import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Fixed World Map Component v1 ]]</Title>
        <CodeBox
            language="javascript"
        >
            {`${''}
import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

// Create a component that handles map data loading properly
export default function WorldMap() {
  const [geoData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load the TopoJSON data from your public directory
  useEffect(() => {
    fetch("/world-countries.json") // This assumes you'll save the file to your public directory
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setGeoData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading map data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading map data...</div>;
  if (error) return <div>Error loading map: {error}</div>;
  if (!geoData) return null;

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ComposableMap projection="geoEqualEarth">
        <ZoomableGroup>
          {geoData && (
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#EAEAEC"
                    stroke="#D6D6DA"
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none"
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          )}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
`}
        </CodeBox>
    </Chapter>
);
