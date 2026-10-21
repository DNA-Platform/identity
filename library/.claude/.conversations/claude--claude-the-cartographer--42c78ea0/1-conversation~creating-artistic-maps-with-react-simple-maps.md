# Creating Artistic Maps with React Simple Maps

This comprehensive tutorial will guide you through creating stunning, print-worthy maps using React Simple Maps and its companion libraries. We'll cover everything from basic setup to advanced styling techniques that will help you create maps that people would want to purchase as art.

## Setting Up Your Environment

First, let's ensure we have all the necessary packages:

```bash
npm install react-simple-maps d3-geo d3-geo-projection d3-scale d3-scale-chromatic styled-components
```

## Basic Map Setup

Let's start with a basic world map:

```jsx
import React from "react";
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

export default MapComponent;
```

## Specifying Locations

### Focusing on a Specific Region

To focus on a specific region, adjust the `center` and `scale` in the `projectionConfig`:

```jsx
<ComposableMap
  projection="geoMercator"
  projectionConfig={{
    scale: 1000, // Zoom level
    center: [-74.0060, 40.7128] // Manhattan coordinates
  }}
  width={800}
  height={600}
>
```

### Adding Markers for Cities

```jsx
import { Marker } from "react-simple-maps";

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
))}
```

## Getting Data for Different Regions

For different regions, you'll need appropriate TopoJSON or GeoJSON files:

1. **Countries**: Use world country datasets
   ```javascript
   const worldMap = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
   ```

2. **US States**:
   ```javascript
   const usStates = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-states.json";
   ```

3. **Cities/Urban Areas**: For detailed city maps like Manhattan, you'll typically need to download from local government GIS portals:
   - NYC Open Data: https://opendata.cityofnewyork.us/
   - US Census Bureau: https://www.census.gov/geographies/mapping-files.html
   - Natural Earth Data: https://www.naturalearthdata.com/

4. **Custom Regions**: Convert Shapefiles to TopoJSON using tools like:
   ```bash
   npm install -g shapefile topojson-server
   shp2json input.shp > output.json
   geo2topo output.json > output.topo.json
   ```

## Styling Maps with Color

### Using d3-scale-chromatic for Beautiful Color Schemes

```jsx
import { scaleQuantile } from "d3-scale";
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
})}
```

### Creating Gradient Maps

```jsx
import styled from "styled-components";

const StyledGeography = styled(Geography)`
  fill: ${props => props.fill};
  stroke: #ffffff;
  stroke-width: 0.5;
  outline: none;
  
  &:hover {
    fill: #F53;
  }
`;

// Using a function to generate colors based on latitude/longitude
const generateColor = (geo) => {
  const lat = geo.properties.lat || 0;
  const lng = geo.properties.lng || 0;
  
  // Create a gradient effect based on position
  const r = Math.floor(255 * (90 + lat) / 180);
  const g = Math.floor(255 * (180 + lng) / 360);
  const b = 200;
  
  return `rgb(${r}, ${g}, ${b})`;
};

// In your component
{geographies.map(geo => (
  <StyledGeography
    key={geo.rsmKey}
    geography={geo}
    fill={generateColor(geo)}
  />
))}
```

## Using Different Projections with d3-geo-projection

```jsx
import { geoOrthographic, geoEqualEarth, geoAzimuthalEqualArea } from "d3-geo-projection";

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
>
```

## Adding Labels and Annotations

While you mentioned not installing react-annotation yet, you can still add labels to your map with basic SVG:

```jsx
// Inside your component, after Geographies
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
</g>
```

## Adding Map Features

```jsx
// For graticules (longitude/latitude lines)
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
</g>
```

## Creating Artistic Map Features

Here are 20 amazing features for creating artistic maps that people might want to print and purchase:

1. **Antique Map Styling**: Use sepia tones and vintage textures for a timeless look.
   ```jsx
   <defs>
     <filter id="vintage">
       <feColorMatrix type="matrix" values="0.34 0.33 0.33 0 0 0.33 0.34 0.33 0 0 0.33 0.33 0.34 0 0 0 0 0 1 0" />
     </filter>
   </defs>
   // Apply to your map with: filter="url(#vintage)"
   ```

2. **Topographic Relief**: Use elevation data to create shaded relief for mountain ranges.
   ```jsx
   // Using elevation data to create shading effects
   const elevationColor = height => `rgba(0, 0, 0, ${height / 8000})`;
   ```

3. **Hand-Drawn Effect**: Apply SVG filters for a sketched, hand-drawn appearance.
   ```jsx
   <filter id="pencil">
     <feTurbulence baseFrequency="0.05" numOctaves="2" result="noise" />
     <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
   </filter>
   ```

4. **Paper Texture Background**: Add subtle textures resembling handmade paper.
   ```jsx
   <defs>
     <pattern id="paper" patternUnits="userSpaceOnUse" width="100" height="100">
       <image href="/paper-texture.png" x="0" y="0" width="100" height="100" />
     </pattern>
   </defs>
   // Use as background with: fill="url(#paper)"
   ```

5. **Illuminated Borders**: Create ornate borders inspired by medieval manuscripts.
   ```jsx
   // Add decorative frames around your map
   <path d="M10,10 L790,10 L790,590 L10,590 Z" 
         fill="none" 
         stroke="gold" 
         strokeWidth={8} 
         strokeLinejoin="round" />
   ```

6. **Bathymetric Depth Shading**: Color oceans with graduated blues to show depth.
   ```jsx
   // Ocean layer with depth coloring
   const oceanColorScale = scaleLinear()
     .domain([-10000, -5000, -1000, -200, 0])
     .range(["#000080", "#000099", "#0000B8", "#0000D8", "#0000F8"]);
   ```

7. **City Lights at Night**: Create a night-mode map showing city lights as glowing dots.
   ```jsx
   <circle cx={x} cy={y} r={population / 100000}
           fill="yellow" 
           opacity={0.6} 
           filter="blur(1px)" />
   ```

8. **Isoline Contours**: Add contour lines for elevation, temperature, or other data.
   ```jsx
   // Generate contour paths using d3-contour
   import { contours } from "d3-contour";
   ```

9. **Art Deco Styling**: Use geometric patterns and bold colors from the Art Deco period.
   ```css
   /* Art Deco inspired color scheme */
   .art-deco-map {
     --primary: #FFD700;
     --accent: #000000;
     --background: #F5F5F5;
   }
   ```

10. **Custom Illustrated Icons**: Replace standard markers with illustrated landmarks.
    ```jsx
    // For a landmark like the Eiffel Tower
    <path d="M10,30 L15,10 L20,30 L25,5 L15,0 L5,5 L10,30" 
          transform={`translate(${x}, ${y}) scale(0.5)`} 
          fill="#888" />
    ```

11. **Celestial Elements**: Add star patterns, constellation lines, or zodiac symbols.
    ```jsx
    // Random star field
    {[...Array(100)].map((_, i) => (
      <circle 
        key={i}
        cx={Math.random() * 800}
        cy={Math.random() * 600}
        r={Math.random() * 1.5}
        fill="white"
      />
    ))}
    ```

12. **Historical Route Overlays**: Show famous exploration routes, trade paths, or migrations.
    ```jsx
    // Silk Road example
    <path
      d="M300,200 Q400,150 500,180 T700,220"
      fill="none"
      stroke="#8B4513"
      strokeWidth={2}
      strokeDasharray="5,5"
    />
    ```

13. **Theatrical Lighting Effects**: Use gradients and shadows to create dramatic lighting.
    ```jsx
    <defs>
      <radialGradient id="sunlight" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="rgba(255,255,200,0.3)" />
        <stop offset="100%" stopColor="rgba(255,255,200,0)" />
      </radialGradient>
    </defs>
    <rect width="800" height="600" fill="url(#sunlight)" />
    ```

14. **Wind and Weather Patterns**: Add flow lines showing prevailing winds or ocean