import { Append, Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 November 2024](2024-11-12)</Date>
        </Dated>
        <Title>[[ 12 November 2024 ]]</Title>
        <Message
            at="2024-11-12T06:22:55.968492Z"
        >
            <Origin>f4933ae5-57cf-44ff-a010-4c3231ae5563</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: Okay! Now, I have an svg resource that I can open. I can create or open a document. Now, in a series
                of atomic and composable functions, I want o be able to create and select layers, and then copy a layer from
                one document to another. How would copying a layer work in an innulatrator plugin between documents? Is it
                an atomic operation? Do I get the layer object and copy? What if I want to create a new layer based on the
                size of an object?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-12T06:22:55.968492Z"
        >
            <Origin>1a428916-158c-4a6e-84ae-7973249e1ef1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Claude: Let me help break this down. In Illustrator's object model:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    For copying between documents, there isn't a direct "copy layer" operation. Instead, you typically:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Select all items in the source layer</Line>
                    <Line>Copy them</Line>
                    <Line>Create new layer in destination</Line>
                    <Line>Paste</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>Here's how we might start building these utilities:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}/**
 * Creates a new layer in the specified document
 * @param doc - The document to create the layer in
 * @param name - Name for the new layer
 * @returns The created Layer object
 */
function createLayer(doc: Document, name: string): Layer {
    return doc.layers.add();
}

/**
 * Selects all PageItems in a layer
 * @param layer - The layer containing items to select
 */
function selectAllInLayer(layer: Layer): void {
    for (let i = 0; i < layer.pageItems.length; i++) {
        layer.pageItems[i].selected = true;
    }
}

/**
 * Copies a layer from one document to another
 * @param sourceLayer - The layer to copy from
 * @param targetDoc - The document to copy to
 * @param newLayerName - Optional name for the new layer
 * @returns The newly created layer with copied content
 */
function copyLayerToDocument(sourceLayer: Layer, targetDoc: Document, newLayerName?: string): Layer {
    // Select all items in source layer
    selectAllInLayer(sourceLayer);
    
    // Copy to clipboard
    app.copy();
    
    // Create new layer in target document
    const targetLayer = targetDoc.layers.add();
    if (newLayerName) {
        targetLayer.name = newLayerName;
    }
    
    // Make target layer active and paste
    targetLayer.hasSelectedArtwork = true;
    app.paste();
    
    return targetLayer;
}

/**
 * Gets the bounding box of all items in a layer
 * @param layer - The layer to measure
 * @returns Rectangle describing the bounds
 */
function getLayerBounds(layer: Layer): Rectangle {
    if (layer.pageItems.length === 0) {
        throw new Error("Layer is empty");
    }
    
    // Start with first item's bounds
    let bounds = layer.pageItems[0].geometricBounds;
    let left = bounds[0];
    let top = bounds[1];
    let right = bounds[2];
    let bottom = bounds[3];
    
    // Expand to include all other items
    for (let i = 1; i < layer.pageItems.length; i++) {
        bounds = layer.pageItems[i].geometricBounds;
        left = Math.min(left, bounds[0]);
        top = Math.max(top, bounds[1]);
        right = Math.max(right, bounds[2]);
        bottom = Math.min(bottom, bounds[3]);
    }
    
    return [left, top, right, bottom];
}`}
            </CodeBox>
            <Paragraph>Would you like me to:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Add more utility functions for layer manipulation?</Line>
                <Line>Show how to use these functions together?</Line>
                <Line>Add error handling for common cases?</Line>
            </Paragraph>
            <Paragraph>
                Also, I should note that the clipboard approach might not be ideal for all cases. There are other approaches
                we could explore, like:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Direct item duplication</Line>
                <Line>Working with layer.pageItems directly</Line>
                <Line>Using PlacedItems for certain content types</Line>
            </Paragraph>
            <Paragraph>What aspects would you like me to elaborate on?</Paragraph>
        </Message>
        <Message
            at="2024-11-12T06:25:49.027441Z"
        >
            <Origin>72d94a79-1a27-43ea-909e-52b5e0391f1f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so here's the code so far so you can see conventions. Note that its ES5 so I have utils in core.ts for
                string manipulation
            </Paragraph>
            <Paragraph>
                I need a createLayer(doc: Document, name?: string) It should just add the layer if no name specified, and
                then should either rename or just create
            </Paragraph>
            <Attachment
                identifier="documents"
                type=".txt"
            >
                Attached “documents.ts”
            </Attachment>
            <Attachment>Uploaded “documents.ts”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-12T06:25:49.027441Z"
        >
            <Origin>a7d6b0f0-93bd-4a9d-8a0e-65f92726ead4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: Based on your existing code style and conventions, here's how I would write createLayer:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}/**
 * Creates a new layer in the specified document.
 * If name is specified, either renames an existing layer or creates a new named layer.
 * 
 * @param doc - The document to create the layer in
 * @param name - Optional name for the layer
 * @returns The created or found Layer object
 * 
 * @example
 * // Create a new unnamed layer
 * const layer = createLayer(doc);
 * 
 * @example
 * // Create or get a named layer
 * const namedLayer = createLayer(doc, "MyLayer");
 */
function createLayer(doc: Document, name?: string): Layer {
    if (!name) {
        return doc.layers.add();
    }

    // Check if layer with name exists
    for (let i = 0; i < doc.layers.length; i++) {
        if (doc.layers[i].name === name) {
            return doc.layers[i];
        }
    }

    // Create new named layer
    const layer = doc.layers.add();
    layer.name = name;
    return layer;
}`}
            </CodeBox>
            <Paragraph>This follows your patterns by:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Using similar documentation style</Line>
                <Line>Following the same error handling approach</Line>
                <Line>Using ES5-compatible loops</Line>
                <Line>Having both a simple and named usage pattern</Line>
                <Line>Returning the Layer object like your other functions</Line>
            </Paragraph>
            <Paragraph>Would you like me to:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Add more error handling cases?</Line>
                <Line>Add more functionality (like layer positioning)?</Line>
                <Line>Show some example usage with your other functions?</Line>
            </Paragraph>
        </Message>
        <Append
            identifier="documents"
            type=".txt"
        >
            ![[ documents.txt ]]
        </Append>
    </Chapter>
);
