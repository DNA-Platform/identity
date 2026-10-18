// First, install these packages to solve the TypeScript definition issues:
// npm i --save-dev @types/d3-scale @types/d3-geo-projection @types/topojson-client @types/d3-scale-chromatic @types/d3-geo @types/geojson

// Alternatively, if you want to quickly bypass these errors without installing types, add this
// to a file called declarations.d.ts in your project root:

// declarations.d.ts
declare module 'd3-scale';
declare module 'd3-geo-projection';
declare module 'topojson-client';
declare module 'd3-scale-chromatic';

// For the HistoricalInsetFrame component, update the interface to include the children prop:
interface InsetFrameProps {
  x: number;
  y: number;
  width: number;
  height: number;
  title?: string;
  children?: React.ReactNode; // Add this line
}

// For the inline styles warning, you can either:
// 1. Ignore this warning since it's common to use inline styles in SVG components
// 2. Or move the styles to a CSS file and reference them with className

// If you want to keep using inline styles (which is common for SVG):
// Add this to your eslint config to disable the no-inline-styles warning:
/*
  "rules": {
    "no-inline-styles": "off"
  }
*/

// For the TopographicContours component, use proper GeoJSON types:
import { Feature, FeatureCollection, LineString } from 'geojson';

interface TopographicContoursProps {
  geoData: FeatureCollection;
  elevationAccessor: (feature: Feature) => number;
  contourLevels: number[];
  contourColors?: string[];
  strokeWidth?: number;
  projection: (coordinates: [number, number]) => [number, number];
}
