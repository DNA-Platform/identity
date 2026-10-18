import { Bold, Chapter, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Creating Artistic Maps with React Simple Maps v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Creating Artistic Maps with React Simple Maps at version 1</Heading>
            <Heading>Creating Artistic Maps with React Simple Maps</Heading>
            <Paragraph>
                This comprehensive tutorial will guide you through creating stunning, print-worthy maps using React Simple
                Maps and its companion libraries. We'll cover everything from basic setup to advanced styling techniques
                that will help you create maps that people would want to purchase as art.
            </Paragraph>
            <Heading>Setting Up Your Environment</Heading>
            <Paragraph>First, let's ensure we have all the necessary packages:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install react-simple-maps d3-geo d3-geo-projection d3-scale d3-scale-chromatic styled-components`}
            </CodeBox>
            <Heading>Basic Map Setup</Heading>
            <Paragraph>Let's start with a basic world map:</Paragraph>
            <CodeBox
                language="jsx"
            >
                {`${''}import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

// TopoJSON data for the world map
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapComponent = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 150,
        center: [0, 0]
      }}
      width={800}
      height={600}
    >
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
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
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapComponent;`}
            </CodeBox>
            <Heading>Specifying Locations</Heading>
            <Heading>Focusing on a Specific Region</Heading>
            <Paragraph>
                To focus on a specific region, adjust the <Word>
                    <Verbatim />
                    center
                </Word> and <Word>
                    <Verbatim />
                    scale
                </Word> in the <Word>
                    <Verbatim />
                    projectionConfig
                </Word>:
            </Paragraph>
            <CodeBox
                language="jsx"
            >
                {`${''}<ComposableMap
  projection="geoMercator"
  projectionConfig={{
    scale: 1000, // Zoom level
    center: [-74.0060, 40.7128] // Manhattan coordinates
  }}
  width={800}
  height={600}
>`}
            </CodeBox>
            <Heading>Adding Markers for Cities</Heading>
            <CodeBox
                language="jsx"
            >
                {`${''}import { Marker } from "react-simple-maps";

// Inside your component
const cities = [
  { name: "New York", coordinates: [-74.0060, 40.7128] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] }
];

// Inside the ZoomableGroup, after Geographies
{cities.map(({ name, coordinates }) => (
  <Marker key={name} coordinates={coordinates}>
    <circle r={4} fill="#F53" />
    <text
      textAnchor="middle"
      y={-10}
      style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
    >
      {name}
    </text>
  </Marker>
))}`}
            </CodeBox>
            <Heading>Getting Data for Different Regions</Heading>
            <Paragraph>For different regions, you'll need appropriate TopoJSON or GeoJSON files:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Countries
                    </Word>: Use world country datasets ``<Word>
                        <Verbatim />
                        javascript const worldMap = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        US States
                    </Word>: ``<Word>
                        <Verbatim />
                        javascript const usStates = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-states.json"; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Cities/Urban Areas
                    </Word>: For detailed city maps like Manhattan, you'll typically need to download from local government
                    GIS portals:
                </Line>
                <Paragraph>
                    <List />
                    <Line>NYC Open Data: https://opendata.cityofnewyork.us/</Line>
                    <Line>US Census Bureau: https://www.census.gov/geographies/mapping-files.html</Line>
                    <Line>Natural Earth Data: https://www.naturalearthdata.com/</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Custom Regions
                    </Word>: Convert Shapefiles to TopoJSON using tools like: ``<Word>
                        <Verbatim />
                        bash npm install -g shapefile topojson-server shp2json input.shp &gt; output.json geo2topo output.json &gt; output.topo.json 
                    </Word>``
                </Line>
            </Paragraph>
            <Heading>Styling Maps with Color</Heading>
            <Heading>Using d3-scale-chromatic for Beautiful Color Schemes</Heading>
            <CodeBox
                language="jsx"
            >
                {`${''}import { scaleQuantile } from "d3-scale";
import { schemeYlOrRd } from "d3-scale-chromatic";

// Example data for countries
const countryData = [
  { id: "USA", value: 84.3 },
  { id: "GBR", value: 67.8 },
  // More countries...
];

// Inside your component
const colorScale = scaleQuantile()
  .domain(countryData.map(d => d.value))
  .range(schemeYlOrRd[9]);

// Then in your Geography component
{geographies.map(geo => {
  const current = countryData.find(s => s.id === geo.properties.ISO_A3);
  return (
    <Geography
      key={geo.rsmKey}
      geography={geo}
      fill={current ? colorScale(current.value) : "#EEE"}
      stroke="#FFFFFF"
      strokeWidth={0.5}
    />
  );
})}`}
            </CodeBox>
            <Heading>Creating Gradient Maps</Heading>
            <CodeBox
                language="jsx"
            >
                {`import styled from "styled-components";

const StyledGeography = styled(Geography)\`
  fill: \${props => props.fill};
  stroke: #ffffff;
  stroke-width: 0.5;
  outline: none;
  
  &:hover {
    fill: #F53;
  }
\`;

// Using a function to generate colors based on latitude/longitude
const generateColor = (geo) => {
  const lat = geo.properties.lat || 0;
  const lng = geo.properties.lng || 0;
  
  // Create a gradient effect based on position
  const r = Math.floor(255 * (90 + lat) / 180);
  const g = Math.floor(255 * (180 + lng) / 360);
  const b = 200;
  
  return \`rgb(\${r}, \${g}, \${b})\`;
};

// In your component
{geographies.map(geo => (
  <StyledGeography
    key={geo.rsmKey}
    geography={geo}
    fill={generateColor(geo)}
  />
))}`}
            </CodeBox>
            <Heading>Using Different Projections with d3-geo-projection</Heading>
            <CodeBox
                language="jsx"
            >
                {`${''}import { geoOrthographic, geoEqualEarth, geoAzimuthalEqualArea } from "d3-geo-projection";

// For a globe-like view
<ComposableMap
  projection={geoOrthographic()}
  projectionConfig={{
    rotate: [-10, -40, 0],
    scale: 300
  }}
>

// For a flat equal-area map
<ComposableMap
  projection={geoEqualEarth()}
  projectionConfig={{
    scale: 200
  }}
>

// For a polar projection
<ComposableMap
  projection={geoAzimuthalEqualArea()}
  projectionConfig={{
    rotate: [0, -90, 0],
    scale: 300
  }}
>`}
            </CodeBox>
            <Heading>Adding Labels and Annotations</Heading>
            <Paragraph>
                While you mentioned not installing react-annotation yet, you can still add labels to your map with basic
                SVG:
            </Paragraph>
            <CodeBox
                language="jsx"
            >
                {`// Inside your component, after Geographies
<g>
  {geographies.map(geo => {
    const centroid = geoCentroid(geo);
    const { NAME } = geo.properties;
    
    // Only label larger countries
    if (geo.properties.AREA_KM > 1000000) {
      return (
        <g key={geo.rsmKey + "-name"}>
          <Marker coordinates={centroid}>
            <text
              y={2}
              fontSize={8}
              textAnchor="middle"
              style={{
                fontFamily: "Arial",
                fill: "#5D5A6D",
                pointerEvents: "none"
              }}
            >
              {NAME}
            </text>
          </Marker>
        </g>
      );
    }
    return null;
  })}
</g>`}
            </CodeBox>
            <Heading>Adding Map Features</Heading>
            <CodeBox
                language="jsx"
            >
                {`// For graticules (longitude/latitude lines)
import { Graticule } from "react-simple-maps";

// Inside ComposableMap
<Graticule stroke="#DDD" strokeWidth={0.5} />

// For adding a stylish compass rose
<g transform="translate(50, 50) scale(0.3)">
  <circle r={20} fill="none" stroke="#000" strokeWidth={1} />
  <polygon 
    points="0,-20 5,-5 0,-10 -5,-5" 
    fill="#000" 
    transform="rotate(0)" 
  />
  <polygon 
    points="0,-20 5,-5 0,-10 -5,-5" 
    fill="#000" 
    transform="rotate(90)" 
  />
  <polygon 
    points="0,-20 5,-5 0,-10 -5,-5" 
    fill="#000" 
    transform="rotate(180)" 
  />
  <polygon 
    points="0,-20 5,-5 0,-10 -5,-5" 
    fill="#000" 
    transform="rotate(270)" 
  />
  <text y={-25} textAnchor="middle" style={{ fontSize: 10 }}>N</text>
  <text x={25} textAnchor="middle" style={{ fontSize: 10 }}>E</text>
  <text y={30} textAnchor="middle" style={{ fontSize: 10 }}>S</text>
  <text x={-25} textAnchor="middle" style={{ fontSize: 10 }}>W</text>
</g>

// Adding a scale bar
<g transform="translate(50, 550)">
  <rect x={0} y={0} width={100} height={4} fill="#000" />
  <text y={15} x={0} style={{ fontSize: 10 }}>0</text>
  <text y={15} x={100} style={{ fontSize: 10 }}>100 km</text>
</g>`}
            </CodeBox>
            <Heading>Creating Artistic Map Features</Heading>
            <Paragraph>
                Here are 20 amazing features for creating artistic maps that people might want to print and purchase:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Antique Map Styling
                    </Word>: Use sepia tones and vintage textures for a timeless look. ``<Word>
                        <Verbatim />
                        jsx &lt;defs&gt; &lt;filter id="vintage"&gt; &lt;feColorMatrix type="matrix" values="0.34 0.33 0.33 0 0 0.33 0.34 0.33 0 0 0.33 0.33 0.34 0 0 0 0 0 1 0" /&gt; &lt;/filter&gt; &lt;/defs&gt; // Apply to your map with: filter="url(#vintage)" 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Topographic Relief
                    </Word>: Use elevation data to create shaded relief for mountain ranges. ``<Word>
                        <Verbatim />
                        jsx // Using elevation data to create shading effects const elevationColor = height =&gt; 
                    </Word>rgba(0, 0, 0, $&#123;height / 8000&#125;)<Word>
                        <Verbatim />
                        ; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Hand-Drawn Effect
                    </Word>: Apply SVG filters for a sketched, hand-drawn appearance. ``<Word>
                        <Verbatim />
                        jsx &lt;filter id="pencil"&gt; &lt;feTurbulence baseFrequency="0.05" numOctaves="2" result="noise" /&gt; &lt;feDisplacementMap in="SourceGraphic" in2="noise" scale="5" /&gt; &lt;/filter&gt; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Paper Texture Background
                    </Word>: Add subtle textures resembling handmade paper. ``<Word>
                        <Verbatim />
                        jsx &lt;defs&gt; &lt;pattern id="paper" patternUnits="userSpaceOnUse" width="100" height="100"&gt; &lt;image href="/paper-texture.png" x="0" y="0" width="100" height="100" /&gt; &lt;/pattern&gt; &lt;/defs&gt; // Use as background with: fill="url(#paper)" 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Illuminated Borders
                    </Word>: Create ornate borders inspired by medieval manuscripts. ``<Word>
                        <Verbatim />
                        jsx // Add decorative frames around your map &lt;path d="M10,10 L790,10 L790,590 L10,590 Z" fill="none" stroke="gold" strokeWidth=&#123;8&#125; strokeLinejoin="round" /&gt; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bathymetric Depth Shading
                    </Word>: Color oceans with graduated blues to show depth. ``<Word>
                        <Verbatim />
                        jsx // Ocean layer with depth coloring const oceanColorScale = scaleLinear() .domain(&#91;-10000, -5000, -1000, -200, 0&#93;) .range(&#91;"#000080", "#000099", "#0000B8", "#0000D8", "#0000F8"&#93;); 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        City Lights at Night
                    </Word>: Create a night-mode map showing city lights as glowing dots. ``<Word>
                        <Verbatim />
                        jsx &lt;circle cx=&#123;x&#125; cy=&#123;y&#125; r=&#123;population / 100000&#125; fill="yellow" opacity=&#123;0.6&#125; filter="blur(1px)" /&gt; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Isoline Contours
                    </Word>: Add contour lines for elevation, temperature, or other data. ``<Word>
                        <Verbatim />
                        jsx // Generate contour paths using d3-contour import &#123; contours &#125; from "d3-contour"; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Art Deco Styling
                    </Word>: Use geometric patterns and bold colors from the Art Deco period. ``<Word>
                        <Verbatim />
                        css /* Art Deco inspired color scheme */ .art-deco-map &#123; --primary: #FFD700; --accent: #000000; --background: #F5F5F5; &#125; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Custom Illustrated Icons
                    </Word>: Replace standard markers with illustrated landmarks. ``<Word>
                        <Verbatim />
                        jsx // For a landmark like the Eiffel Tower &lt;path d="M10,30 L15,10 L20,30 L25,5 L15,0 L5,5 L10,30" transform=&#123;
                    </Word>translate($&#123;x&#125;, $&#123;y&#125;) scale(0.5)<Word>
                        <Verbatim />
                        &#125; fill="#888" /&gt; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Celestial Elements
                    </Word>: Add star patterns, constellation lines, or zodiac symbols. ``<Word>
                        <Verbatim />
                        jsx // Random star field &#123;&#91;...Array(100)&#93;.map((_, i) =&gt; ( &lt;circle key=&#123;i&#125; cx=&#123;Math.random() * 800&#125; cy=&#123;Math.random() * 600&#125; r=&#123;Math.random() * 1.5&#125; fill="white" /&gt; ))&#125; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Historical Route Overlays
                    </Word>: Show famous exploration routes, trade paths, or migrations. ``<Word>
                        <Verbatim />
                        jsx // Silk Road example &lt;path d="M300,200 Q400,150 500,180 T700,220" fill="none" stroke="#8B4513" strokeWidth=&#123;2&#125; strokeDasharray="5,5" /&gt; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Theatrical Lighting Effects
                    </Word>: Use gradients and shadows to create dramatic lighting. ``<Word>
                        <Verbatim />
                        jsx &lt;defs&gt; &lt;radialGradient id="sunlight" cx="30%" cy="30%" r="70%"&gt; &lt;stop offset="0%" stopColor="rgba(255,255,200,0.3)" /&gt; &lt;stop offset="100%" stopColor="rgba(255,255,200,0)" /&gt; &lt;/radialGradient&gt; &lt;/defs&gt; &lt;rect width="800" height="600" fill="url(#sunlight)" /&gt; 
                    </Word>``
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wind and Weather Patterns
                    </Word>: Add flow lines showing prevailing winds or ocean
                </Line>
            </Paragraph>
        </Section>
    </Chapter>
);
