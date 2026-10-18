import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ world-basic..tsx Map Page v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { 
  ComposableMap, 
  Geographies, 
  Geography 
} from 'react-simple-maps';

export default function WorldBasic() {
  const [mapData, setMapData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load the TopoJSON data
    fetch('/world-countries.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load map data');
        }
        return response.json();
      })
      .then(data => {
        setMapData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading map data:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="map-container">
      <Head>
        <title>World Basic Map - SVG Maps</title>
        <meta name="description" content="A simple world map available for download as SVG" />
      </Head>

      <div className="content">
        <h1>World Basic Map</h1>
        <p>A simple world map showing country boundaries. Perfect for presentations, reports, and infographics.</p>
        
        <div className="map-wrapper">
          {loading && <div className="loading">Loading map...</div>}
          {error && <div className="error">Error: {error}</div>}
          
          {mapData && (
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{
                scale: 200
              }}
            >
              <Geographies geography={mapData}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#EAEAEC"
                      stroke="#D6D6DA"
                      strokeWidth={0.5}
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>
          )}
        </div>

        <div className="download-section">
          <h2>Download Options</h2>
          <button className="download-btn">Download SVG</button>
          <button className="download-btn">Download PNG</button>
          <p className="note">Free for personal and commercial use with attribution.</p>
        </div>
      </div>

      <style jsx>{\`
        .map-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        h1 {
          color: #333;
          margin-bottom: 10px;
        }

        p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .map-wrapper {
          height: 500px;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          background-color: #f9f9f9;
          margin-bottom: 30px;
        }

        .loading, .error {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.8);
          color: #666;
          font-size: 18px;
        }

        .error {
          color: #e53e3e;
        }

        .download-section {
          margin-top: 30px;
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 8px;
        }

        h2 {
          color: #444;
          margin-bottom: 15px;
        }

        .download-btn {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          margin-right: 10px;
          cursor: pointer;
          font-size: 16px;
        }

        .download-btn:hover {
          background-color: #0051bb;
        }

        .note {
          font-size: 14px;
          color: #777;
          margin-top: 15px;
        }
      \`}</style>
    </div>
  );
}
`}
        </CodeBox>
    </Chapter>
);
