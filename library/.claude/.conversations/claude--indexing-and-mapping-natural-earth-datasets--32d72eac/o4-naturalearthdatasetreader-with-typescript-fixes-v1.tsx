import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ NaturalEarthDatasetReader with TypeScript Fixes v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}import { NaturalEarthDataset, naturalEarthDatasetUrls } from './NaturalEarthDatasets';

// Interface for a feature in a specific dataset
export interface NaturalEarthDatasetFeature {
  datasetKey: NaturalEarthDataset;
  id: string;  // Original ID from dataset
  bbox: [number, number, number, number]; // [west, south, east, north]
  properties: Record<string, any>; // All original properties
}

// Interface for a consolidated feature that might exist in multiple datasets
export interface NaturalEarthFeature {
  id: string;  // Generated unique ID
  name: string;  // Primary name
  alternateNames: string[];  // Other names/spellings if available
  datasetFeatures: NaturalEarthDatasetFeature[];  // Occurrences across datasets
}

// Type for TopoJSON object structure
interface TopoJSONObject {
  type: string;
  geometries?: any[];
}

export class NaturalEarthDatasetReader {
  constructor() {
    // Empty constructor for future configurability
  }

  /**
   * Extracts features from all Natural Earth datasets
   * @returns Promise<NaturalEarthFeature[]> Array of consolidated features
   */
  async extractFeatures(): Promise<NaturalEarthFeature[]> {
    // Map to store features by normalized name to help with deduplication
    const featureMap = new Map<string, NaturalEarthFeature>();
    
    // Process each dataset
    for (const [datasetKey, url] of naturalEarthDatasetUrls.entries()) {
      try {
        console.log(\`Loading dataset: \${datasetKey}\`);
        const response = await fetch(url);
        
        if (!response.ok) {
          console.error(\`Failed to fetch \${datasetKey}: \${response.status}\`);
          continue;
        }
        
        const data = await response.json();
        
        // Process based on data format
        if (data.type === 'FeatureCollection') {
          this.processGeoJSONFeatures(data, datasetKey, featureMap);
        } else if (data.type === 'Topology') {
          this.processTopoJSONFeatures(data, datasetKey, featureMap);
        }
        
      } catch (error) {
        console.error(\`Error processing \${datasetKey}:\`, error);
      }
    }
    
    // Convert map to array
    return Array.from(featureMap.values());
  }

  /**
   * Process features from a GeoJSON dataset
   */
  private processGeoJSONFeatures(
    data: any, 
    datasetKey: NaturalEarthDataset, 
    featureMap: Map<string, NaturalEarthFeature>
  ): void {
    if (!Array.isArray(data.features)) return;
    
    for (const feature of data.features) {
      if (!feature.properties || !feature.properties.name) continue;
      
      const name = feature.properties.name;
      const normalizedName = this.normalizeName(name);
      
      // Create dataset feature
      const datasetFeature: NaturalEarthDatasetFeature = {
        datasetKey,
        id: feature.id || String(feature.properties.id || ''),
        bbox: this.calculateBoundingBox(feature.geometry),
        properties: feature.properties
      };
      
      // Get or create the consolidated feature
      let naturalFeature = featureMap.get(normalizedName);
      
      if (!naturalFeature) {
        naturalFeature = {
          id: this.generateFeatureId(name, datasetKey),
          name,
          alternateNames: [],
          datasetFeatures: []
        };
        featureMap.set(normalizedName, naturalFeature);
      }
      
      // Add this dataset occurrence
      naturalFeature.datasetFeatures.push(datasetFeature);
    }
  }

  /**
   * Process features from a TopoJSON dataset
   */
  private processTopoJSONFeatures(
    data: any, 
    datasetKey: NaturalEarthDataset, 
    featureMap: Map<string, NaturalEarthFeature>
  ): void {
    if (!data.objects) return;
    
    // Process each object in the topology
    Object.entries(data.objects).forEach(([objectKey, objectValue]) => {
      // Type assertion for object
      const object = objectValue as TopoJSONObject;
      
      if (object.type !== 'GeometryCollection' || !Array.isArray(object.geometries)) return;
      
      for (const geometry of object.geometries) {
        const properties = geometry.properties || {};
        if (!properties.name) continue;
        
        const name = properties.name;
        const normalizedName = this.normalizeName(name);
        
        // For TopoJSON, we might not have direct access to coordinates for proper bbox
        // In a real implementation, you would convert to GeoJSON first
        let bbox: [number, number, number, number] = [0, 0, 0, 0];
        
        const datasetFeature: NaturalEarthDatasetFeature = {
          datasetKey,
          id: geometry.id || String(properties.id || ''),
          bbox,
          properties
        };
        
        // Get or create the consolidated feature
        let naturalFeature = featureMap.get(normalizedName);
        
        if (!naturalFeature) {
          naturalFeature = {
            id: this.generateFeatureId(name, datasetKey),
            name,
            alternateNames: [],
            datasetFeatures: []
          };
          featureMap.set(normalizedName, naturalFeature);
        }
        
        // Add this dataset occurrence
        naturalFeature.datasetFeatures.push(datasetFeature);
      }
    });
  }

  /**
   * Generate a unique ID for a feature
   */
  private generateFeatureId(name: string, datasetKey: NaturalEarthDataset): string {
    // Use a combination of name and first dataset to create a unique ID
    return \`\${this.normalizeName(name)}_\${datasetKey}\`;
  }

  /**
   * Normalize a name for comparison (lowercase, trim whitespace)
   */
  private normalizeName(name: string): string {
    return name.toLowerCase().trim();
  }

  /**
   * Calculate bounding box from geometry
   */
  private calculateBoundingBox(geometry: any): [number, number, number, number] {
    // If the geometry already has a bbox property, use it
    if (geometry.bbox && Array.isArray(geometry.bbox) && geometry.bbox.length === 4) {
      return geometry.bbox as [number, number, number, number];
    }
    
    // Initialize with extreme values
    let west = 180;
    let south = 90;
    let east = -180;
    let north = -90;
    
    const processPoint = (coords: number[]) => {
      if (coords.length < 2) return;
      const lon = coords[0];
      const lat = coords[1];
      
      if (typeof lon === 'number' && typeof lat === 'number') {
        west = Math.min(west, lon);
        south = Math.min(south, lat);
        east = Math.max(east, lon);
        north = Math.max(north, lat);
      }
    };
    
    const processPoints = (coords: any[]) => {
      if (!Array.isArray(coords) || coords.length === 0) return;
      
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
        const bbox = this.calculateBoundingBox(g);
        west = Math.min(west, bbox[0]);
        south = Math.min(south, bbox[1]);
        east = Math.max(east, bbox[2]);
        north = Math.max(north, bbox[3]);
      });
    }
    
    return [west, south, east, north];
  }
}`}
        </CodeBox>
    </Chapter>
);
