import { NaturalEarthDataset, naturalEarthDatasetUrls } from './NaturalEarthDatasets';

// Basic interface for indexed features
export interface IndexedFeature {
  name: string;
  featureId: string;
  datasetKey: NaturalEarthDataset;
  bbox: [number, number, number, number]; // [west, south, east, north]
  properties: Record<string, any>; // Original properties from the dataset
}

// Calculate bounding box from GeoJSON geometry
function calculateBoundingBox(geometry: any): [number, number, number, number] {
  // If the geometry already has a bbox property, use it
  if (geometry.bbox) {
    return geometry.bbox as [number, number, number, number];
  }
  
  // Initialize with extreme values
  let west = 180;
  let south = 90;
  let east = -180;
  let north = -90;
  
  const processPoint = (coords: number[]) => {
    const [lon, lat] = coords;
    west = Math.min(west, lon);
    south = Math.min(south, lat);
    east = Math.max(east, lon);
    north = Math.max(north, lat);
  };
  
  const processPoints = (coords: any[]) => {
    if (coords.length === 0) return;
    
    if (typeof coords[0] === 'number') {
      processPoint(coords);
    } else {
      coords.forEach(processPoints);
    }
  };
  
  // Process the geometry based on its type
  if (geometry.type === 'Point') {
    processPoint(geometry.coordinates);
  } else if (geometry.coordinates) {
    processPoints(geometry.coordinates);
  } else if (geometry.geometries) {
    geometry.geometries.forEach((g: any) => {
      const [w, s, e, n] = calculateBoundingBox(g);
      west = Math.min(west, w);
      south = Math.min(south, s);
      east = Math.max(east, e);
      north = Math.max(north, n);
    });
  }
  
  return [west, south, east, north];
}

// Extract features from a GeoJSON dataset
function extractGeoJSONFeatures(data: any, datasetKey: NaturalEarthDataset): IndexedFeature[] {
  if (data.type !== 'FeatureCollection' || !Array.isArray(data.features)) {
    return [];
  }
  
  return data.features
    .filter((feature: any) => 
      feature.properties && 
      feature.properties.name && 
      feature.geometry
    )
    .map((feature: any): IndexedFeature => {
      const name = feature.properties.name;
      let featureType = '';
      
      // Try to determine feature type from properties
      if (feature.properties.featureclass) {
        featureType = feature.properties.featureclass;
      } else if (feature.properties.type) {
        featureType = feature.properties.type;
      }
      
      // Generate a unique feature ID
      const featureId = `${name}:${featureType || datasetKey}`;
      
      // Calculate bounding box
      const bbox = calculateBoundingBox(feature.geometry);
      
      return {
        name,
        featureId,
        datasetKey,
        bbox,
        properties: feature.properties
      };
    });
}

// Extract features from a TopoJSON dataset
function extractTopoJSONFeatures(data: any, datasetKey: NaturalEarthDataset): IndexedFeature[] {
  if (data.type !== 'Topology' || !data.objects) {
    return [];
  }
  
  const features: IndexedFeature[] = [];
  
  // Process each object in the topology
  Object.entries(data.objects).forEach(([objectKey, object]: [string, any]) => {
    if (object.type === 'GeometryCollection' && Array.isArray(object.geometries)) {
      // Extract object type from the key name if possible
      let objectType = objectKey.toLowerCase();
      
      // Process each geometry in the collection
      object.geometries.forEach((geometry: any) => {
        const properties = geometry.properties || {};
        const name = properties.name;
        
        // Skip features without names
        if (!name) return;
        
        // Try to determine feature type
        let featureType = '';
        if (properties.featureclass) {
          featureType = properties.featureclass;
        } else if (properties.type) {
          featureType = properties.type;
        } else {
          featureType = objectType;
        }
        
        // Generate a unique feature ID
        const featureId = `${name}:${featureType || datasetKey}`;
        
        // For TopoJSON, we don't have direct access to coordinates for bounding box
        // Use properties.bbox if available, otherwise use a placeholder
        let bbox: [number, number, number, number];
        if (properties.bbox && Array.isArray(properties.bbox) && properties.bbox.length === 4) {
          bbox = properties.bbox as [number, number, number, number];
        } else {
          // Placeholder - in a real implementation, you'd convert TopoJSON to GeoJSON
          // to calculate the actual bounding box
          bbox = [0, 0, 0, 0];
        }
        
        features.push({
          name,
          featureId,
          datasetKey,
          bbox,
          properties
        });
      });
    }
  });
  
  return features;
}

// Combine multiple bounding boxes into one that encompasses all
export function combineBoundingBoxes(
  boxes: [number, number, number, number][]
): [number, number, number, number] {
  if (boxes.length === 0) return [0, 0, 0, 0];
  
  let [west, south, east, north] = boxes[0];
  
  for (let i = 1; i < boxes.length; i++) {
    const [w, s, e, n] = boxes[i];
    west = Math.min(west, w);
    south = Math.min(south, s);
    east = Math.max(east, e);
    north = Math.max(north, n);
  }
  
  return [west, south, east, north];
}

// Main function to build the feature index from multiple datasets
export async function buildFeatureIndex(
  includeDatasets: NaturalEarthDataset[] = Array.from(naturalEarthDatasetUrls.keys())
): Promise<IndexedFeature[]> {
  const allFeatures: IndexedFeature[] = [];
  
  for (const datasetKey of includeDatasets) {
    try {
      const url = naturalEarthDatasetUrls.get(datasetKey);
      if (!url) continue;
      
      console.log(`Loading dataset: ${datasetKey}`);
      const response = await fetch(url);
      
      if (!response.ok) {
        console.error(`Failed to fetch ${datasetKey}: ${response.status}`);
        continue;
      }
      
      const data = await response.json();
      let features: IndexedFeature[] = [];
      
      // Extract features based on data format
      if (data.type === 'FeatureCollection') {