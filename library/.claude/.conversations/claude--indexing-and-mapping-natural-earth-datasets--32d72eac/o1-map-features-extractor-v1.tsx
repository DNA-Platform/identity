import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Map Features Extractor v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}import { NaturalEarthDataset, naturalEarthDatasetUrls } from './NaturalEarthDatasets';

// Define the core interface for our map features
export interface MapFeature {
  featureId: string;            // Unique identifier (combination of name, type, etc.)
  name: string;                 // Human-readable name
  featureType: string;          // Category (country, river, city, etc.)
  normalizedName: string;       // Lowercase, trimmed name for search
  datasets: {                   // Which datasets this feature appears in
    [datasetKey: string]: {
      id: string;               // Original ID in that dataset
      resolution: string;       // "10m", "50m", or "110m"
      bbox: [number, number, number, number]; // [west, south, east, north]
      geometryRef: any;         // Reference to the geometry in the dataset
    }
  };
}

// Helper interface for feature extraction from datasets
interface FeatureExtractor {
  datasetKey: NaturalEarthDataset;
  featureType: string;
  extractName: (feature: any) => string;
  extractId: (feature: any) => string;
}

// Map dataset keys to standardized feature types
const datasetFeatureTypeMap: Record<string, string> = {
  // Countries
  COUNTRIES_10M: 'country',
  COUNTRIES_50M: 'country',
  COUNTRIES_110M: 'country',
  
  // Administrative divisions
  ADMIN1_STATES_10M: 'state',
  ADMIN1_STATES_50M: 'state',
  ADMIN1_STATES_110M: 'state',
  
  // Water features
  LAKES_10M: 'lake',
  LAKES_50M: 'lake',
  LAKES_110M: 'lake',
  RIVERS_10M: 'river',
  RIVERS_50M: 'river',
  RIVERS_110M: 'river',
  OCEAN_10M: 'ocean',
  OCEAN_50M: 'ocean',
  OCEAN_110M: 'ocean',
  
  // Populated places
  POPULATED_PLACES_10M: 'city',
  POPULATED_PLACES_50M: 'city',
  POPULATED_PLACES_110M: 'city',
  URBAN_AREAS_10M: 'urban_area',
  URBAN_AREAS_50M: 'urban_area',
  
  // Other features
  ROADS_50M: 'road',
  RAILROADS_50M: 'railroad',
  AIRPORTS_50M: 'airport',
  PORTS_50M: 'port',
  PARKS_PROTECTED_LANDS_10M: 'park',
  MINOR_ISLANDS_10M: 'island',
  GLACIERS_50M: 'glacier',
  REEFS_10M: 'reef',
  PLAYAS_10M: 'playa',
  TIME_ZONES_10M: 'timezone',
  
  // Lines and boundaries
  BOUNDARY_LINES_LAND_50M: 'boundary',
  BOUNDARY_LINES_MARITIME_50M: 'boundary',
  COASTLINE_10M: 'coastline',
  COASTLINE_50M: 'coastline',
  COASTLINE_110M: 'coastline',
  GEOGRAPHIC_LINES_50M: 'line',
  GEOGRAPHIC_LINES_110M: 'line',
  GRATICULES_50M: 'graticule',
  
  // Special regions
  ANTARCTIC_ICE_SHELVES_10M: 'ice_shelf',
  DISPUTED_AREAS_10M: 'disputed_area',
  SOVEREIGNTY_10M: 'sovereignty',
  
  // Land areas
  LAND_10M: 'land',
  LAND_50M: 'land',
  LAND_110M: 'land',
};

// Extract resolution from dataset key
function getResolutionFromKey(key: NaturalEarthDataset): string {
  if (key.includes('10M')) return '10m';
  if (key.includes('50M')) return '50m';
  if (key.includes('110M')) return '110m';
  return 'unknown';
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
  
  // Process different geometry types
  const processCoordinates = (coords: number[]) => {
    const [lon, lat] = coords;
    west = Math.min(west, lon);
    south = Math.min(south, lat);
    east = Math.max(east, lon);
    north = Math.max(north, lat);
  };
  
  const processCoordinateArray = (coords: any[]) => {
    if (coords.length === 0) return;
    
    // Check if this is a coordinate pair or a nested array
    if (typeof coords[0] === 'number') {
      processCoordinates(coords);
    } else {
      coords.forEach(processCoordinateArray);
    }
  };
  
  // Process the geometry based on its type
  if (geometry.type === 'Point') {
    processCoordinates(geometry.coordinates);
  } else if (geometry.type === 'LineString' || geometry.type === 'MultiPoint') {
    geometry.coordinates.forEach(processCoordinates);
  } else if (geometry.type === 'Polygon' || geometry.type === 'MultiLineString') {
    geometry.coordinates.forEach(coords => coords.forEach(processCoordinates));
  } else if (geometry.type === 'MultiPolygon') {
    geometry.coordinates.forEach(poly => 
      poly.forEach(ring => ring.forEach(processCoordinates))
    );
  } else if (geometry.type === 'GeometryCollection') {
    geometry.geometries.forEach(geom => {
      const geomBbox = calculateBoundingBox(geom);
      west = Math.min(west, geomBbox[0]);
      south = Math.min(south, geomBbox[1]);
      east = Math.max(east, geomBbox[2]);
      north = Math.max(north, geomBbox[3]);
    });
  }
  
  return [west, south, east, north];
}

// GeoJSON and TopoJSON parsing logic for different dataset formats
// TopoJSON needs additional processing as its structure differs from GeoJSON
async function parseDataset(datasetKey: NaturalEarthDataset, response: Response): Promise<any[]> {
  const data = await response.json();
  const resolution = getResolutionFromKey(datasetKey);
  const featureType = datasetFeatureTypeMap[datasetKey] || 'unknown';
  
  // Handle TopoJSON format (mostly from world-atlas)
  if (data.type === 'Topology' && data.objects) {
    const features: any[] = [];
    
    // Process each object in the topology
    Object.entries(data.objects).forEach(([objectKey, object]: [string, any]) => {
      if (object.type === 'GeometryCollection') {
        // Each feature in the collection
        object.geometries.forEach((geometry: any) => {
          // Extract feature properties
          const properties = geometry.properties || {};
          const id = geometry.id || properties.id || '';
          const name = properties.name || '';
          
          // Add to features array
          features.push({
            // Simplified for now - we're not converting TopoJSON arcs to full geometry
            // In a real implementation, you'd use topojson-client to convert to GeoJSON
            id,
            properties,
            geometry: {
              type: geometry.type,
              arcs: geometry.arcs,
              bbox: properties.bbox // Some datasets include bbox in properties
            },
            type: 'Feature',
            datasetKey,
            resolution,
            featureType
          });
        });
      }
    });
    
    return features;
  }
  
  // Handle GeoJSON format
  if (data.type === 'FeatureCollection') {
    return data.features.map((feature: any) => ({
      ...feature,
      datasetKey,
      resolution,
      featureType
    }));
  }
  
  return [];
}

// Main function to load datasets and build the feature index
export async function buildMapFeatureIndex(
  includeDatasets: NaturalEarthDataset[] = Array.from(naturalEarthDatasetUrls.keys())
): Promise<MapFeature[]> {
  const featureMap = new Map<string, MapFeature>();
  const errors: string[] = [];
  
  // Process each dataset
  for (const datasetKey of includeDatasets) {
    try {
      const url = naturalEarthDatasetUrls.get(datasetKey);
      if (!url) continue;
      
      console.log(\`Fetching dataset: \${datasetKey}\`);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(\`Failed to fetch \${datasetKey}: \${response.status} \${response.statusText}\`);
      }
      
      const features = await parseDataset(datasetKey, response);
      const resolution = getResolutionFromKey(datasetKey);
      const featureType = datasetFeatureTypeMap[datasetKey] || 'unknown';
      
      // Process each feature from this dataset
      for (const feature of features) {
        // Extract feature information
        const properties = feature.properties || {};
        const id = feature.id || properties.id || '';
        const name = properties.name || '';
        
        if (!name) continue; // Skip features without names
        
        // Create a normalized identifier
        const normalizedName = name.toLowerCase().trim();
        // Create a unique feature ID combining name and type
        const featureId = \`\${normalizedName}:\${featureType}\`;
        
        // Calculate bounding box
        const bbox = calculateBoundingBox(feature.geometry);
        
        // Update or create feature entry
        let mapFeature = featureMap.get(featureId);
        if (!mapFeature) {
          mapFeature = {
            featureId,
            name,
            featureType,
            normalizedName,
            datasets: {}
          };
          featureMap.set(featureId, mapFeature);
        }
        
        // Add this dataset instance to the feature
        mapFeature.datasets[datasetKey] = {
          id,
          resolution,
          bbox,
          geometryRef: feature.geometry
        };
      }
      
      console.log(\`Processed \${features.length} features from \${datasetKey}\`);
    } catch (error) {
      const errorMessage = \`Error processing \${datasetKey}: \${error instanceof Error ? error.message : String(error)}\`;
      console.error(errorMessage);
      errors.push(errorMessage);
    }
  }
  
  // Log any errors
  if (errors.length > 0) {
    console.warn(\`Encountered \${errors.length} errors while building map feature index\`);
  }
  
  // Convert map to array
  return Array.from(featureMap.values());
}

// Function to load the index in the background
export function loadMapFeaturesInBackground(
  callback: (features: MapFeature[]) => void,
  datasets?: NaturalEarthDataset[]
): void {
  // Use a small timeout to ensure this doesn't block the main thread during page load
  setTimeout(async () => {
    try {
      const features = await buildMapFeatureIndex(datasets);
      callback(features);
    } catch (error) {
      console.error('Failed to load map features in background:', error);
    }
  }, 100);
}

// Select an appropriate dataset based on zoom level
export function selectDatasetForFeatureType(
  featureType: string, 
  zoomLevel: number
): NaturalEarthDataset | null {
  // Define zoom level thresholds
  const HIGH_ZOOM = 7;  // For 10m resolution
  const MED_ZOOM = 3;   // For 50m resolution
  // Below MED_ZOOM use 110m resolution
  
  // Map of feature types to dataset keys at different resolutions
  const datasetMap: Record<string, Record<string, NaturalEarthDataset>> = {
    'country': {
      'high': 'COUNTRIES_10M',
      'medium': 'COUNTRIES_50M',
      'low': 'COUNTRIES_110M'
    },
    'state': {
      'high': 'ADMIN1_STATES_10M',
      'medium': 'ADMIN1_STATES_50M',
      'low': 'ADMIN1_STATES_110M'
    },
    'city': {
      'high': 'POPULATED_PLACES_10M',
      'medium': 'POPULATED_PLACES_50M',
      'low': 'POPULATED_PLACES_110M'
    },
    'river': {
      'high': 'RIVERS_10M',
      'medium': 'RIVERS_50M',
      'low': 'RIVERS_110M'
    },
    'lake': {
      'high': 'LAKES_10M',
      'medium': 'LAKES_50M',
      'low': 'LAKES_110M'
    },
    // Add mappings for other feature types as needed
  };
  
  // Determine resolution based on zoom level
  const resolution = zoomLevel >= HIGH_ZOOM ? 'high' : 
                     zoomLevel >= MED_ZOOM ? 'medium' : 'low';
  
  // Return appropriate dataset if available, or fall back to lower resolution
  const datasetOptions = datasetMap[featureType];
  if (!datasetOptions) return null;
  
  return datasetOptions[resolution] || 
         datasetOptions['medium'] || 
         datasetOptions['low'];
}

// Calculate combined bounding box for multiple features
export function calculateCombinedBoundingBox(
  features: MapFeature[], 
  preferredResolution: string = '50m'
): [number, number, number, number] {
  if (features.length === 0) {
    return [0, 0, 0, 0]; // Default empty bounding box
  }
  
  let west = 180;
  let south = 90;
  let east = -180;
  let north = -90;
  
  features.forEach(feature => {
    // Find the best dataset to use for this feature
    let datasetToUse: string | null = null;
    
    // First try to find the preferred resolution
    const preferredDatasets = Object.keys(feature.datasets)
      .filter(key => key.includes(preferredResolution.toUpperCase()));
    
    if (preferredDatasets.length > 0) {
      datasetToUse = preferredDatasets[0];
    } else {
      // Fall back to any available dataset
      const availableDatasets = Object.keys(feature.datasets);
      if (availableDatasets.length > 0) {
        datasetToUse = availableDatasets[0];
      }
    }
    
    if (datasetToUse) {
      const bbox = feature.datasets[datasetToUse].bbox;
      west = Math.min(west, bbox[0]);
      south = Math.min(south, bbox[1]);
      east = Math.max(east, bbox[2]);
      north = Math.max(north, bbox[3]);
    }
  });
  
  return [west, south, east, north];
}

// Filter features by text search
export function searchFeatures(
  features: MapFeature[],
  searchText: string,
  featureTypes: string[] = []
): MapFeature[] {
  if (!searchText && featureTypes.length === 0) {
    return features;
  }
  
  const normalizedSearch = searchText.toLowerCase().trim();
  
  return features.filter(feature => {
    // Filter by feature type if specified
    if (featureTypes.length > 0 && !featureTypes.includes(feature.featureType)) {
      return false;
    }
    
    // If no search text, return all features of the specified types
    if (!normalizedSearch) {
      return true;
    }
    
    // Text search in name
    return feature.normalizedName.includes(normalizedSearch);
  });
}

// Find features within a bounding box
export function findFeaturesInBoundingBox(
  features: MapFeature[],
  bbox: [number, number, number, number],
  featureTypes: string[] = []
): MapFeature[] {
  const [west, south, east, north] = bbox;
  
  return features.filter(feature => {
    // Filter by feature type if specified
    if (featureTypes.length > 0 && !featureTypes.includes(feature.featureType)) {
      return false;
    }
    
    // Check if any dataset of this feature intersects with the bounding box
    return Object.values(feature.datasets).some(dataset => {
      const [featureWest, featureSouth, featureEast, featureNorth] = dataset.bbox;
      
      // Check for intersection
      return !(
        featureEast < west ||
        featureWest > east ||
        featureNorth < south ||
        featureSouth > north
      );
    });
  });
}
`}
        </CodeBox>
    </Chapter>
);
