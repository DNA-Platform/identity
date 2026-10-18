import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Add Layer and Add Path Scripts v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// add-layer.ts
type MetadataValue = string | number | boolean;

interface DocumentMetadata {
    getProperty(ns: string, key: string): MetadataValue;
    setProperty(ns: string, key: string, value: MetadataValue): void;
}

interface Document {
    metadata: DocumentMetadata;
    layers: Layers;
}

interface Layer {
    name: string;
}

interface Layers {
    add(): Layer;
}

interface Application {
    activeDocument: Document;
}

declare var app: Application;

// The actual script
function addLayer(): void {
    var doc = app.activeDocument;
    var docName = doc.metadata.getProperty("http://ns.adobe.com/xap/1.0/", "docName");
    
    if (typeof docName !== 'string') {
        throw new Error("Document name not found in metadata");
    }
    
    var newLayer = doc.layers.add();
    newLayer.name = "Layer for " + docName;
    
    // Store the layer name for the next script
    doc.metadata.setProperty("http://ns.adobe.com/xap/1.0/", "lastLayerName", newLayer.name);
}

// -----------------------------

// add-path.ts
interface PathItem {
    closed: boolean;
    fillColor: any;  // You might want to define a proper color type
    strokeColor: any;
}

interface PathItems {
    add(): PathItem;
}

interface Layer {
    pathItems: PathItems;
}

function addPath(): void {
    var doc = app.activeDocument;
    var docName = doc.metadata.getProperty("http://ns.adobe.com/xap/1.0/", "docName");
    var layerName = doc.metadata.getProperty("http://ns.adobe.com/xap/1.0/", "lastLayerName");
    
    if (typeof docName !== 'string' || typeof layerName !== 'string') {
        throw new Error("Required metadata not found");
    }
    
    // Find the layer we created
    var targetLayer: Layer | null = null;
    for (var i = 0; i < doc.layers.length; i++) {
        if (doc.layers[i].name === layerName) {
            targetLayer = doc.layers[i];
            break;
        }
    }
    
    if (!targetLayer) {
        throw new Error("Target layer not found: " + layerName);
    }
    
    // Add a simple path
    var newPath = targetLayer.pathItems.add();
    newPath.closed = true;
    // Set other path properties as needed
}
`}
        </CodeBox>
    </Chapter>
);
