/// <reference path="./lib/types.ts" />
/// <reference path="./lib/utils.ts" />
/// <reference path="./lib/reflection.ts" />
/// <reference path="./lib/math.ts" />
/// <reference path="./lib/space.ts" />
/// <reference path="./lib/tasks.ts" />
/// <reference path="./lib/ref.ts" />
/// <reference path="./lib/query.ts" />
/// <reference path="./lib/position.ts" />
/// <reference path="./lib/properties.ts" />
/// <reference path="./lib/paths.ts" />

run(() => {
    // Configuration settings
    const config = {
        colorMixAmount: 0.1, // 10% color variation
        debugMode: true
    };

    // Get next filename with incrementing bracketed index
    function getNextFilename(name: string): string {
        const match = name.match(/^(.*)\[(\d+)\]$/);
        
        if (match) {
            const baseName = match[1];
            const index = parseInt(match[2], 10);
            return `${baseName}[${index + 1}]`;
        } 
        return `${name}[1]`;
    }

    // Simple color variation maker
    class SimpleColorVariationMaker {
        private modified: boolean = false;
        
        constructor() {
            this.log("Initializing SimpleColorVariationMaker");
        }
        
        private log(message: string): void {
            if (config.debugMode) {
                console.log(message);
            }
        }

        createAndSave(): void {
            // Check if document exists
            if (app.documents.length === 0) {
                alert("Please open a document before running this script.");
                return;
            }
            
            const doc = app.activeDocument;
            
            // Check if document is saved
            if (!doc.saved) {
                alert("Please save your document before creating variations.");
                return;
            }
            
            // Prepare for saving
            const originalPath = doc.fullName.parent;
            const baseName = doc.name.split('.')[0];
            const newName = getNextFilename(baseName);
            
            // Apply random color variation
            this.applyRandomColorVariation();
            
            if (this.modified) {
                // Save with new name
                const newFileName = newName + ".ai";
                const saveFile = new File(originalPath + "/" + newFileName);
                const saveOpts = new IllustratorSaveOptions();
                doc.saveAs(saveFile, saveOpts);
                
                alert(`Created variation "${newName}" with color modification.`);
            } else {
                alert("Couldn't find any suitable paths to modify.");
            }
        }

        applyRandomColorVariation(): void {
            try {
                const doc = api.activeDocument();
                const layers = doc.layers();
                
                // Exit if no layers
                if (layers.length() === 0) {
                    this.log("No layers found");
                    return;
                }
                
                // Choose random layer
                const randomLayerIndex = Math.floor(Math.random() * layers.length());
                const randomLayer = layers.at(randomLayerIndex);
                this.log(`Selected random layer: ${randomLayer.name()}`);
                
                // Find a random path to modify
                this.modified = this.findAndModifyRandomPath(randomLayer);
            } catch (e) {
                this.log(`Error in applyRandomColorVariation: ${e}`);
            }
        }
        
        findAndModifyRandomPath(container: LayerQuery | GroupItemQuery, depth: number = 0): boolean {
            try {
                // First try to get paths directly from container
                let paths = container.pathItems ? container.pathItems() : null;
                
                // If container is a layer, use the pageItems collection instead
                if (!paths && container.pageItems) {
                    paths = container.pageItems().where(item => item.itemType === "PathItem");
                }
                
                // If we have paths, choose a random one to modify
                if (paths && paths.length() > 0) {
                    const randomPathIndex = Math.floor(Math.random() * paths.length());
                    const randomPath = paths.at(randomPathIndex);
                    this.log(`Selected random path: ${randomPath.name()}`);
                    
                    return this.modifyPathColor(randomPath);
                }
                
                // If we have no paths but we have groups and we're not too deep, try a random group
                const groups = container.groupItems ? container.groupItems() : null;
                
                if (groups && groups.length() > 0 && depth < 3) {
                    const randomGroupIndex = Math.floor(Math.random() * groups.length());
                    const randomGroup = groups.at(randomGroupIndex);
                    this.log(`No paths found, trying random group: ${randomGroup.name()}`);
                    
                    return this.findAndModifyRandomPath(randomGroup, depth + 1);
                }
                
                this.log("No suitable paths found in this container");
                return false;
            } catch (e) {
                this.log(`Error in findAndModifyRandomPath: ${e}`);
                return false;
            }
        }
        
        modifyPathColor(path) {
            try {
                // Try fill first, then stroke if no fill
                if (path.filled()) {
                    const fillColor = path.fillColor();
                    const newColor = this.generateVariedColor(fillColor);
                    path.fillColor(newColor);
                    this.log("Modified fill color");
                    return true;
                } else if (path.stroked()) {
                    const strokeColor = path.strokeColor();
                    const newColor = this.generateVariedColor(strokeColor);
                    path.strokeColor(newColor);
                    this.log("Modified stroke color");
                    return true;
                }
                
                this.log("Path has neither fill nor stroke");
                return false;
            } catch (e) {
                this.log(`Error in modifyPathColor: ${e}`);
                return false;
            }
        }
        
        generateVariedColor(color) {
            try {
                // Convert to HSL for easier modification
                const hsl = color.toHSL();
                
                // Vary the hue slightly
                const hueVariation = (Math.random() * 20) - 10; // +/- 10 degrees
                let newHue = (hsl.h + hueVariation + 360) % 360;
                
                // Vary saturation slightly
                const satVariation = (Math.random() * 10) - 5; // +/- 5%
                let newSat = Math.max(0, Math.min(100, hsl.s + satVariation));
                
                // Create and return new color
                return DynamicColor.fromHSL(newHue, newSat, hsl.l);
            } catch (e) {
                this.log(`Error generating varied color: ${e}`);
                // Return original color if there's an error
                return color;
            }
        }
    }

    // Execute the script
    new SimpleColorVariationMaker().createAndSave();
});
