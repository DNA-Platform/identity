import { Append, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 November 2024](2024-11-22)</Date>
        </Dated>
        <Title>[[ 22 November 2024 ]]</Title>
        <Message
            at="2024-11-22T15:59:30.888444Z"
        >
            <Origin>211cc047-31d0-42ee-999e-26f04463ef79</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am writing decorators for the major illustrator classes that make up the nodes of the document model. They
                seek to unify a node with its canonical list of document objects, so ApplicationQueryable unites
                (Application, documents) and DocumentQueryable unite (Document, Layers) and LayerQueryable units (Layer,
                PageItems). Before we do anything, let's write the skeleton code for our objects. We have the base classes:
                class Queryable &#123; &#125; class ApplicationQueryable extends Queryable &#123;&#125;
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T15:59:30.888444Z"
        >
            <Origin>beb73395-8daf-49d6-a4c2-08160e089e83</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's a skeleton for the class hierarchy that represents the Illustrator document model:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class Queryable {
    constructor(protected target: any) {}
}

class ApplicationQueryable extends Queryable {
    protected documents: Document[];
}

class DocumentQueryable extends Queryable {
    protected layers: Layer[];
}

class LayerQueryable extends Queryable {
    protected pageItems: PageItem[];
}

// Type definitions for the target objects
interface Application {
    documents: Document[];
}

interface Document {
    layers: Layer[];
}

interface Layer {
    pageItems: PageItem[];
}

interface PageItem {
    // Base interface for Illustrator page items 
}`}
            </CodeBox>
            <Paragraph>Would you like me to add any additional properties or methods to these classes?</Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:02:29.176777Z"
        >
            <Origin>64d4ef76-2494-42ab-9299-cc0d478adfa9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Only write the base classes. We also need one for each element type. So there would still be a
                PageItemQueryable
            </Paragraph>
            <Paragraph>
                Please reflect on the types for adobe illustrator types file (attached) and list all of the types that are
                an essential part of the document model
            </Paragraph>
            <Attachment
                identifier="index-d"
                type=".txt"
            >
                Attached “index.d.ts”
            </Attachment>
            <Attachment>Uploaded “index.d.ts”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-11-22T16:02:29.176777Z"
        >
            <Origin>994a8be5-d5f5-4085-8658-176d5ce7d8a3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Looking at the AI document model types, here are the essential classes that make up the node hierarchy:
            </Paragraph>
            <Paragraph>Core Base Classes:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Document</Line>
                <Line>Layer</Line>
                <Line>PageItem (base class for all artwork elements)</Line>
                <Line>Story (for text content)</Line>
            </Paragraph>
            <Paragraph>Key PageItem Types:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>PathItem</Line>
                <Line>CompoundPathItem</Line>
                <Line>RasterItem</Line>
                <Line>PlacedItem</Line>
                <Line>TextFrame</Line>
                <Line>GroupItem</Line>
                <Line>SymbolItem</Line>
                <Line>MeshItem</Line>
                <Line>LegacyTextItem</Line>
                <Line>PluginItem</Line>
                <Line>GraphItem</Line>
            </Paragraph>
            <Paragraph>Other Essential Types:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Artboard</Line>
                <Line>TextRange</Line>
                <Line>PathPoint</Line>
                <Line>Color</Line>
                <Line>Pattern</Line>
                <Line>Gradient</Line>
                <Line>Symbol</Line>
                <Line>Tag</Line>
            </Paragraph>
            <Paragraph>
                These form the core object model that an application would need to work with. Let me write the base
                queryable classes that will provide the foundation for interacting with these types.
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class Queryable {
    constructor(protected target: any) {}
}

class DocumentQueryable extends Queryable {
    protected layers: Layer[];
    protected artboards: Artboard[];
}

class LayerQueryable extends Queryable {
    protected pageItems: PageItem[];
}

class PageItemQueryable extends Queryable {
    protected parent: LayerQueryable;
}`}
            </CodeBox>
            <Paragraph>
                These base classes provide the foundation for querying and manipulating the document hierarchy. Would you
                like me to create the derived classes for specific page item types?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:03:34.672386Z"
        >
            <Origin>b9f31472-fc86-4cab-8acd-a498cc9312d3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do all of those constitute something that either HAS a collection or is the element in a collection?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:03:34.672386Z"
        >
            <Origin>c1fcdcfd-d98b-476a-8f28-41633a44f61f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Looking at the collections defined in the type file, here are the key collection/element pairs:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`Documents -> Document
Layers -> Layer
PageItems -> PageItem
PathItems -> PathItem
CompoundPathItems -> CompoundPathItem  
RasterItems -> RasterItem
PlacedItems -> PlacedItem
TextFrames -> TextFrame
GroupItems -> GroupItem
SymbolItems -> SymbolItem
TextRanges -> TextRange
Stories -> Story
Characters -> Character
Words -> Word
Paragraphs -> Paragraph
PathPoints -> PathPoint
Tags -> Tag
Artboards -> Artboard`}
            </CodeBox>
            <Paragraph>
                These represent the core collections and their corresponding element types in the document model. Each
                collection extends Array&lt;T&gt; where T is the corresponding element type.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:05:31.156492Z"
        >
            <Origin>2d4f8c11-a096-44b4-92ad-e8b5568f3b25</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you write the full tree? Like Application -&gt; Document &#91;collection&#93; ... Document -&gt;
                Artboard &#91;collection&#93; Document -&gt; Layer &#91;collection&#93; ... etc...
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:05:31.156492Z"
        >
            <Origin>3303f491-5f72-4fac-bf17-79fddd496ae3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox>
                {`${''}Application
  -> Documents [collection]
    -> Document
      -> Artboards [collection]
        -> Artboard
      -> Layers [collection] 
        -> Layer
          -> PageItems [collection]
            -> PathItem
            -> CompoundPathItem
            -> RasterItem  
            -> PlacedItem
            -> TextFrame
            -> GroupItem
            -> SymbolItem
            -> MeshItem 
            -> PluginItem
            -> GraphItem
            -> NonNativeItem
          -> CompoundPathItems [collection]
          -> RasterItems [collection]
          -> PlacedItems [collection]
          -> TextFrames [collection] 
          -> GroupItems [collection]
          -> SymbolItems [collection]
          -> MeshItems [collection]
          -> PluginItems [collection]
          -> GraphItems [collection]
      -> Stories [collection]
        -> Story
          -> TextRanges [collection]
            -> TextRange 
              -> Characters [collection]
              -> Words [collection]
              -> Paragraphs [collection]
          -> InsertionPoints [collection]
            -> InsertionPoint
            
      -> Tags [collection]
        -> Tag
      -> Variables [collection]
        -> Variable
      -> Swatches [collection]
        -> Swatch
      -> Gradients [collection]
        -> Gradient
          -> GradientStops [collection]
      -> Patterns [collection]
        -> Pattern
      -> Spots [collection]
        -> Spot
      -> Symbols [collection]
        -> Symbol
      -> Brushes [collection]
        -> Brush`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T16:09:35.852805Z"
        >
            <Origin>190455fa-13d2-44fb-a3cb-16ccf257958d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Excellent! So do list those classes depth first in that order. Remember the collection doesn't need the
                class, only the element: class Queryable &#123;&#125; class ApplicationQueryable &#123;&#125; class
                ArtboardQueryable &#123;&#125;... class LayerQueryable &#123;&#125; ...
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:09:35.852805Z"
        >
            <Origin>a88852a2-2bbc-4cdc-935a-3cb2df8a7eac</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`class Queryable {
    constructor(protected target: any) {}
}

class ApplicationQueryable extends Queryable {}
class DocumentQueryable extends Queryable {}
class ArtboardQueryable extends Queryable {}
class LayerQueryable extends Queryable {}
class PageItemQueryable extends Queryable {}
class PathItemQueryable extends PageItemQueryable {}
class CompoundPathItemQueryable extends PageItemQueryable {}
class RasterItemQueryable extends PageItemQueryable {}
class PlacedItemQueryable extends PageItemQueryable {}
class TextFrameQueryable extends PageItemQueryable {}
class GroupItemQueryable extends PageItemQueryable {}
class SymbolItemQueryable extends PageItemQueryable {}
class MeshItemQueryable extends PageItemQueryable {}
class PluginItemQueryable extends PageItemQueryable {}
class GraphItemQueryable extends PageItemQueryable {}
class NonNativeItemQueryable extends PageItemQueryable {}
class StoryQueryable extends Queryable {}
class TextRangeQueryable extends Queryable {}
class InsertionPointQueryable extends Queryable {}
class TagQueryable extends Queryable {}
class VariableQueryable extends Queryable {}
class SwatchQueryable extends Queryable {}
class GradientQueryable extends Queryable {}
class GradientStopQueryable extends Queryable {}
class PatternQueryable extends Queryable {}
class SpotQueryable extends Queryable {}
class SymbolDefinitionQueryable extends Queryable {}  // For Symbol elements
class BrushQueryable extends Queryable {}`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T16:14:40.062370Z"
        >
            <Origin>6ad404f6-f4ac-48f5-b289-41cbcd9a7059</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Now, for each underlying class like Application and Document, make a TypeScript string enum for the names of
                all the properties that have a collection type. Make it one enum called Collections = ...
            </Paragraph>
            <Paragraph>
                For Application, it has "documents". For Document, it has artboards and layers,... collect all those names
                and put it into one enum in alphabetical order
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:14:40.062370Z"
        >
            <Origin>54b72384-9ed6-4156-a209-638cc5eba9ac</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`enum Collections {   
  Artboards = "artboards",
  Brushes = "brushes",
  Characters = "characters",
  CompoundPathItems = "compoundPathItems",
  Documents = "documents",
  GradientStops = "gradientStops",
  Gradients = "gradients",
  GraphItems = "graphItems",
  GroupItems = "groupItems", 
  InsertionPoints = "insertionPoints",
  Layers = "layers",
  LegacyTextItems = "legacyTextItems",
  Lines = "lines",
  MeshItems = "meshItems",
  NonNativeItems = "nonNativeItems",
  PageItems = "pageItems",
  Paragraphs = "paragraphs",
  PathItems = "pathItems",
  PathPoints = "pathPoints",
  Patterns = "patterns",
  PlacedItems = "placedItems",
  PluginItems = "pluginItems",
  RasterItems = "rasterItems",
  Spots = "spots",
  Stories = "stories",
  Swatches = "swatches",
  SymbolItems = "symbolItems",
  Symbols = "symbols",
  Tags = "tags",
  TextFrames = "textFrames",
  TextRanges = "textRanges",
  Variables = "variables",
  Words = "words"
}`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T16:15:47.636359Z"
        >
            <Origin>077c4fef-9680-4567-ba99-fa12ad439547</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Those values will resolve to the underlying string when compiled? Like I could do
                app&#91;Collections.Documents&#93; and I will get the property?
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:15:47.636359Z"
        >
            <Origin>7e205b12-ebad-429d-b3f9-dafaea27d150</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, string enums in TypeScript resolve to their string values at runtime. This means <Word>
                    <Verbatim />
                    app&#91;Collections.Documents&#93;
                </Word> is equivalent to <Word>
                    <Verbatim />
                    app&#91;"documents"&#93;
                </Word>. You can also use dot notation: <Word>
                    <Verbatim />
                    app.documents
                </Word>. The enum provides type safety and autocomplete while preserving the runtime string access.
            </Paragraph>
            <Paragraph>
                String enums differ from numeric enums in this regard - they preserve their string values rather than being
                assigned numeric indices.
            </Paragraph>
            <Paragraph>Would you like me to show an example of how this would work in practice?</Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:31:41.608914Z"
        >
            <Origin>c3134d04-edd8-4298-80ef-ec023ec187f4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay, now for each of these, please fill in the derived class by adding a one-parameter constructor that
                takes the appropriate source type, adding a property for the source, and adding one property for each
                collection. You can see how I started it for application. DocumentQuery will have multiple collection
                properties. Follow my example:
            </Paragraph>
            <Paragraph>
                class Queryable &#123; source: any; default: CollectionProperty; collection: any&#91;&#93; = &#91;&#93;;
            </Paragraph>
            <Paragraph>
                constructor(source: any, defaultCollection: CollectionProperty) &#123; this.source = source; this.default =
                defaultCollection; this.reset(); &#125;
            </Paragraph>
            <Paragraph>reset() &#123; this.switch(this.default); &#125;</Paragraph>
            <Paragraph>
                switch(collection: CollectionProperty) &#123; this.collection = this.source&#91;collection&#93;; &#125;
                &#125;
            </Paragraph>
            <Paragraph>
                class ApplicationQueryable extends Queryable &#123; get app(): Application &#123; return this.source; &#125;
                get documents() &#123; return this.app.documents; &#125;
            </Paragraph>
            <Paragraph>
                constructor(app: Application) &#123; super(app, CollectionProperty.Documents); this.app &#125; &#125;
            </Paragraph>
            <Paragraph>
                class DocumentQueryable extends Queryable &#123;&#125; class ArtboardQueryable extends Queryable
                &#123;&#125; class LayerQueryable extends Queryable &#123;&#125; class PageItemQueryable extends Queryable
                &#123;&#125; class PathItemQueryable extends PageItemQueryable &#123;&#125; class CompoundPathItemQueryable
                extends PageItemQueryable &#123;&#125; class RasterItemQueryable extends PageItemQueryable &#123;&#125;
                class PlacedItemQueryable extends PageItemQueryable &#123;&#125; class TextFrameQueryable extends
                PageItemQueryable &#123;&#125; class GroupItemQueryable extends PageItemQueryable &#123;&#125; class
                SymbolItemQueryable extends PageItemQueryable &#123;&#125; class MeshItemQueryable extends PageItemQueryable
                &#123;&#125; class PluginItemQueryable extends PageItemQueryable &#123;&#125; class GraphItemQueryable
                extends PageItemQueryable &#123;&#125; class NonNativeItemQueryable extends PageItemQueryable &#123;&#125;
                class StoryQueryable extends Queryable &#123;&#125; class TextRangeQueryable extends Queryable &#123;&#125;
                class InsertionPointQueryable extends Queryable &#123;&#125; class TagQueryable extends Queryable
                &#123;&#125; class VariableQueryable extends Queryable &#123;&#125; class SwatchQueryable extends Queryable
                &#123;&#125; class GradientQueryable extends Queryable &#123;&#125; class GradientStopQueryable extends
                Queryable &#123;&#125; class PatternQueryable extends Queryable &#123;&#125; class SpotQueryable extends
                Queryable &#123;&#125; class SymbolDefinitionQueryable extends Queryable &#123;&#125; class BrushQueryable
                extends Queryable &#123;&#125;
            </Paragraph>
            <Paragraph>
                enum CollectionProperty &#123; Artboards = "artboards", Brushes = "brushes", Characters = "characters",
                CompoundPathItems = "compoundPathItems", Documents = "documents", GradientStops = "gradientStops", Gradients
                = "gradients", GraphItems = "graphItems", GroupItems = "groupItems", InsertionPoints = "insertionPoints",
                Layers = "layers", LegacyTextItems = "legacyTextItems", Lines = "lines", MeshItems = "meshItems",
                NonNativeItems = "nonNativeItems", PageItems = "pageItems", Paragraphs = "paragraphs", PathItems =
                "pathItems", PathPoints = "pathPoints", Patterns = "patterns", PlacedItems = "placedItems", PluginItems =
                "pluginItems", RasterItems = "rasterItems", Spots = "spots", Stories = "stories", Swatches = "swatches",
                SymbolItems = "symbolItems", Symbols = "symbols", Tags = "tags", TextFrames = "textFrames", TextRanges =
                "textRanges", Variables = "variables", Words = "words" &#125;
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:31:41.608914Z"
        >
            <Origin>a4447486-3dea-408a-9c47-3a9b6e69d262</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`class DocumentQueryable extends Queryable {
    get document(): Document { return this.source; }
    get artboards() { return this.document.artboards; }
    get layers() { return this.document.layers; }
    get stories() { return this.document.stories; }
    get tags() { return this.document.tags; }
    get variables() { return this.document.variables; }
    get swatches() { return this.document.swatches; }
    get gradients() { return this.document.gradients; }
    get patterns() { return this.document.patterns; }
    get spots() { return this.document.spots; }
    get symbols() { return this.document.symbols; }
    get brushes() { return this.document.brushes; }
    
    constructor(doc: Document) {
        super(doc, CollectionProperty.Layers);
    }
}

class LayerQueryable extends Queryable {
    get layer(): Layer { return this.source; }
    get pageItems() { return this.layer.pageItems; }
    get compoundPathItems() { return this.layer.compoundPathItems; }
    get pathItems() { return this.layer.pathItems; }
    get rasterItems() { return this.layer.rasterItems; }
    get placedItems() { return this.layer.placedItems; }
    get meshItems() { return this.layer.meshItems; }
    get pluginItems() { return this.layer.pluginItems; }
    get textFrames() { return this.layer.textFrames; }
    get groupItems() { return this.layer.groupItems; }
    get symbolItems() { return this.layer.symbolItems; }
    get graphItems() { return this.layer.graphItems; }
    get nonNativeItems() { return this.layer.nonNativeItems; }
    get legacyTextItems() { return this.layer.legacyTextItems; }
    
    constructor(layer: Layer) {
        super(layer, CollectionProperty.PageItems);
    }
}

class StoryQueryable extends Queryable {
    get story(): Story { return this.source; }
    get textRanges() { return this.story.textRanges; }
    get characters() { return this.story.characters; }
    get words() { return this.story.words; }
    get lines() { return this.story.lines; }
    get paragraphs() { return this.story.paragraphs; }
    get insertionPoints() { return this.story.insertionPoints; }

    constructor(story: Story) {
        super(story, CollectionProperty.TextRanges); 
    }
}

class PathItemQueryable extends PageItemQueryable {
    get pathItem(): PathItem { return this.source; }
    get pathPoints() { return this.pathItem.pathPoints; }

    constructor(pathItem: PathItem) {
        super(pathItem, CollectionProperty.PathPoints);
    }
}

class GradientQueryable extends Queryable {
    get gradient(): Gradient { return this.source; }
    get gradientStops() { return this.gradient.gradientStops; }

    constructor(gradient: Gradient) {
        super(gradient, CollectionProperty.GradientStops);
    }
}`}
            </CodeBox>
            <Paragraph>The remaining classes would follow the same pattern but they don't have collections:</Paragraph>
            <Paragraph>
                <List />
                <Line>ArtboardQueryable</Line>
                <Line>CompoundPathItemQueryable</Line>
                <Line>RasterItemQueryable</Line>
                <Line>PlacedItemQueryable</Line>
                <Line>TextFrameQueryable</Line>
                <Line>GroupItemQueryable</Line>
                <Line>SymbolItemQueryable</Line>
                <Line>MeshItemQueryable</Line>
                <Line>PluginItemQueryable</Line>
                <Line>GraphItemQueryable</Line>
                <Line>NonNativeItemQueryable</Line>
                <Line>TextRangeQueryable</Line>
                <Line>InsertionPointQueryable</Line>
                <Line>TagQueryable</Line>
                <Line>VariableQueryable</Line>
                <Line>SwatchQueryable</Line>
                <Line>GradientStopQueryable</Line>
                <Line>PatternQueryable</Line>
                <Line>SpotQueryable</Line>
                <Line>SymbolDefinitionQueryable</Line>
                <Line>BrushQueryable</Line>
            </Paragraph>
            <Paragraph>Would you like me to implement any of those as well?</Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:38:31.553924Z"
        >
            <Origin>75dde978-b5e3-437a-b782-27b2dbec8024</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay I address that by allowing the second parameter to be unspecified, so leave it out if there is no
                collection property. Oh and please create one property that serves to type the source. it's app for
                ApplicationQueryable, and document for DocumentQueryable. Each class will have one property that returns a
                typed version of the source, and then one property that returns one of each of its collections:
            </Paragraph>
            <Paragraph>Write one paragraph showing me you understand, then write the classes:</Paragraph>
            <Paragraph>
                class Queryable &#123; source: any; default: CollectionProperty|undefined; collection: any&#91;&#93; =
                &#91;&#93;;
            </Paragraph>
            <Paragraph>
                constructor(source: any, defaultCollection?: CollectionProperty) &#123; this.source = source; this.default =
                defaultCollection; this.reset(); &#125;
            </Paragraph>
            <Paragraph>reset() &#123; this.switch(this.default); &#125;</Paragraph>
            <Paragraph>
                switch(collection: CollectionProperty|undefined) &#123; this.collection = collection !== undefined ?
                this.source&#91;collection&#93; : &#91;&#93;; &#125; &#125;
            </Paragraph>
            <Paragraph>
                class ApplicationQueryable extends Queryable &#123; get app(): Application &#123; return this.source; &#125;
                get documents() &#123; return this.app.documents; &#125;
            </Paragraph>
            <Paragraph>
                constructor(app: Application) &#123; super(app, CollectionProperty.Documents); this.app &#125; &#125;
            </Paragraph>
            <Paragraph>
                class DocumentQueryable extends Queryable &#123; get document(): Document &#123; return this.source; &#125;
                &#125;
            </Paragraph>
            <Paragraph>
                class ArtboardQueryable extends Queryable &#123;&#125; class LayerQueryable extends Queryable &#123;&#125;
                class PageItemQueryable extends Queryable &#123;&#125; class PathItemQueryable extends PageItemQueryable
                &#123;&#125; class CompoundPathItemQueryable extends PageItemQueryable &#123;&#125; class
                RasterItemQueryable extends PageItemQueryable &#123;&#125; class PlacedItemQueryable extends
                PageItemQueryable &#123;&#125; class TextFrameQueryable extends PageItemQueryable &#123;&#125; class
                GroupItemQueryable extends PageItemQueryable &#123;&#125; class SymbolItemQueryable extends
                PageItemQueryable &#123;&#125; class MeshItemQueryable extends PageItemQueryable &#123;&#125; class
                PluginItemQueryable extends PageItemQueryable &#123;&#125; class GraphItemQueryable extends
                PageItemQueryable &#123;&#125; class NonNativeItemQueryable extends PageItemQueryable &#123;&#125; class
                StoryQueryable extends Queryable &#123;&#125; class TextRangeQueryable extends Queryable &#123;&#125; class
                InsertionPointQueryable extends Queryable &#123;&#125; class TagQueryable extends Queryable &#123;&#125;
                class VariableQueryable extends Queryable &#123;&#125; class SwatchQueryable extends Queryable &#123;&#125;
                class GradientQueryable extends Queryable &#123;&#125; class GradientStopQueryable extends Queryable
                &#123;&#125; class PatternQueryable extends Queryable &#123;&#125; class SpotQueryable extends Queryable
                &#123;&#125; class SymbolDefinitionQueryable extends Queryable &#123;&#125; class BrushQueryable extends
                Queryable &#123;&#125;
            </Paragraph>
            <Paragraph>
                enum CollectionProperty &#123; Artboards = "artboards", Brushes = "brushes", Characters = "characters",
                CompoundPathItems = "compoundPathItems", Documents = "documents", GradientStops = "gradientStops", Gradients
                = "gradients", GraphItems = "graphItems", GroupItems = "groupItems", InsertionPoints = "insertionPoints",
                Layers = "layers", LegacyTextItems = "legacyTextItems", Lines = "lines", MeshItems = "meshItems",
                NonNativeItems = "nonNativeItems", PageItems = "pageItems", Paragraphs = "paragraphs", PathItems =
                "pathItems", PathPoints = "pathPoints", Patterns = "patterns", PlacedItems = "placedItems", PluginItems =
                "pluginItems", RasterItems = "rasterItems", Spots = "spots", Stories = "stories", Swatches = "swatches",
                SymbolItems = "symbolItems", Symbols = "symbols", Tags = "tags", TextFrames = "textFrames", TextRanges =
                "textRanges", Variables = "variables", Words = "words" &#125;
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:38:31.553924Z"
        >
            <Origin>7a7ec57a-9e21-41a1-969a-183060a99204</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I understand that each Queryable class needs a typed source property getter (like <Word>
                    <Verbatim />
                    app
                </Word> or <Word>
                    <Verbatim />
                    document
                </Word>) and getters for any collections it owns through that source. Classes without collections still get
                the source property but don't need a default collection parameter. Here are the implementations:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class ArtboardQueryable extends Queryable {
    get artboard(): Artboard { return this.source; }
    constructor(artboard: Artboard) { super(artboard); }
}

class LayerQueryable extends Queryable {
    get layer(): Layer { return this.source; }
    get pageItems() { return this.layer.pageItems; }
    get compoundPathItems() { return this.layer.compoundPathItems; }
    get pathItems() { return this.layer.pathItems; }
    get rasterItems() { return this.layer.rasterItems; }
    get placedItems() { return this.layer.placedItems; }
    get meshItems() { return this.layer.meshItems; }
    get pluginItems() { return this.layer.pluginItems; }
    get textFrames() { return this.layer.textFrames; }
    get groupItems() { return this.layer.groupItems; }
    get symbolItems() { return this.layer.symbolItems; }
    get graphItems() { return this.layer.graphItems; }
    get nonNativeItems() { return this.layer.nonNativeItems; }
    get legacyTextItems() { return this.layer.legacyTextItems; }
    
    constructor(layer: Layer) {
        super(layer, CollectionProperty.PageItems);
    }
}

class PageItemQueryable extends Queryable {
    get pageItem(): PageItem { return this.source; }
    constructor(pageItem: PageItem) { super(pageItem); }
}

class PathItemQueryable extends PageItemQueryable {
    get pathItem(): PathItem { return this.source; }
    get pathPoints() { return this.pathItem.pathPoints; }
    constructor(pathItem: PathItem) {
        super(pathItem, CollectionProperty.PathPoints);
    }
}

class CompoundPathItemQueryable extends PageItemQueryable {
    get compoundPathItem(): CompoundPathItem { return this.source; }
    constructor(compoundPathItem: CompoundPathItem) { super(compoundPathItem); }
}

class RasterItemQueryable extends PageItemQueryable {
    get rasterItem(): RasterItem { return this.source; }
    constructor(rasterItem: RasterItem) { super(rasterItem); }
}

class PlacedItemQueryable extends PageItemQueryable {
    get placedItem(): PlacedItem { return this.source; }
    constructor(placedItem: PlacedItem) { super(placedItem); }
}

class TextFrameQueryable extends PageItemQueryable {
    get textFrame(): TextFrame { return this.source; }
    constructor(textFrame: TextFrame) { super(textFrame); }
}

class GroupItemQueryable extends PageItemQueryable {
    get groupItem(): GroupItem { return this.source; }
    constructor(groupItem: GroupItem) { super(groupItem); }
}

class SymbolItemQueryable extends PageItemQueryable {
    get symbolItem(): SymbolItem { return this.source; }
    constructor(symbolItem: SymbolItem) { super(symbolItem); }
}

class MeshItemQueryable extends PageItemQueryable {
    get meshItem(): MeshItem { return this.source; }
    constructor(meshItem: MeshItem) { super(meshItem); }
}

class PluginItemQueryable extends PageItemQueryable {
    get pluginItem(): PluginItem { return this.source; }
    constructor(pluginItem: PluginItem) { super(pluginItem); }
}

class GraphItemQueryable extends PageItemQueryable {
    get graphItem(): GraphItem { return this.source; }
    constructor(graphItem: GraphItem) { super(graphItem); }
}

class NonNativeItemQueryable extends PageItemQueryable {
    get nonNativeItem(): NonNativeItem { return this.source; }
    constructor(nonNativeItem: NonNativeItem) { super(nonNativeItem); }
}

class StoryQueryable extends Queryable {
    get story(): Story { return this.source; }
    get textRanges() { return this.story.textRanges; }
    get characters() { return this.story.characters; }
    get words() { return this.story.words; }
    get lines() { return this.story.lines; }
    get paragraphs() { return this.story.paragraphs; }
    get insertionPoints() { return this.story.insertionPoints; }

    constructor(story: Story) {
        super(story, CollectionProperty.TextRanges);
    }
}

class TextRangeQueryable extends Queryable {
    get textRange(): TextRange { return this.source; }
    constructor(textRange: TextRange) { super(textRange); }
}

class InsertionPointQueryable extends Queryable {
    get insertionPoint(): InsertionPoint { return this.source; }
    constructor(insertionPoint: InsertionPoint) { super(insertionPoint); }
}

class TagQueryable extends Queryable {
    get tag(): Tag { return this.source; }
    constructor(tag: Tag) { super(tag); }
}

class VariableQueryable extends Queryable {
    get variable(): Variable { return this.source; }
    constructor(variable: Variable) { super(variable); }
}

class SwatchQueryable extends Queryable {
    get swatch(): Swatch { return this.source; }
    constructor(swatch: Swatch) { super(swatch); }
}

class GradientQueryable extends Queryable {
    get gradient(): Gradient { return this.source; }
    get gradientStops() { return this.gradient.gradientStops; }
    
    constructor(gradient: Gradient) {
        super(gradient, CollectionProperty.GradientStops); 
    }
}

class GradientStopQueryable extends Queryable {
    get gradientStop(): GradientStop { return this.source; }
    constructor(gradientStop: GradientStop) { super(gradientStop); }
}

class PatternQueryable extends Queryable {
    get pattern(): Pattern { return this.source; }
    constructor(pattern: Pattern) { super(pattern); }
}

class SpotQueryable extends Queryable {
    get spot(): Spot { return this.source; }
    constructor(spot: Spot) { super(spot); }
}

class SymbolDefinitionQueryable extends Queryable {
    get symbol(): Symbol { return this.source; }
    constructor(symbol: Symbol) { super(symbol); }
}

class BrushQueryable extends Queryable {
    get brush(): Brush { return this.source; }
    constructor(brush: Brush) { super(brush); }
}`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T16:39:23.451637Z"
        >
            <Origin>0ac21ded-4377-4225-901b-070fdc5b08cf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Very good! You left out Application and DocumentQueryable. Can you write those two please? Mine might not
                have been complete
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:39:23.451637Z"
        >
            <Origin>fb70cd79-408f-48f8-9562-2a48b54955ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`class ApplicationQueryable extends Queryable {
    get app(): Application { return this.source; }
    get documents() { return this.app.documents; }
    
    constructor(app: Application) {
        super(app, CollectionProperty.Documents);
    }
}

class DocumentQueryable extends Queryable {
    get document(): Document { return this.source; }
    get artboards() { return this.document.artboards; }
    get layers() { return this.document.layers; }
    get stories() { return this.document.stories; }
    get tags() { return this.document.tags; }
    get variables() { return this.document.variables; }
    get swatches() { return this.document.swatches; }
    get gradients() { return this.document.gradients; }
    get patterns() { return this.document.patterns; }
    get spots() { return this.document.spots; }
    get symbols() { return this.document.symbols; }
    get brushes() { return this.document.brushes; }
    
    constructor(doc: Document) {
        super(doc, CollectionProperty.Layers);
    }
}`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T16:44:34.642406Z"
        >
            <Origin>e885a200-035b-4772-a855-0ccb96a8adf9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Try again for all of them, including Document, but don't do subclassing. All inherit from Queryable. You
                can't do inheritance because the type changes the default collection
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:44:34.642406Z"
        >
            <Origin>c8125a48-a857-4bf1-b294-7639ab6cab98</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`class ApplicationQueryable extends Queryable {
    get app(): Application { return this.source; }
    get documents() { return this.app.documents; }
    constructor(app: Application) { 
        super(app, CollectionProperty.Documents);
    }
}

class DocumentQueryable extends Queryable {
    get document(): Document { return this.source; }
    get artboards() { return this.document.artboards; }
    get layers() { return this.document.layers; }
    get stories() { return this.document.stories; }
    get tags() { return this.document.tags; }
    get variables() { return this.document.variables; }
    get swatches() { return this.document.swatches; }
    get gradients() { return this.document.gradients; }
    get patterns() { return this.document.patterns; }
    get spots() { return this.document.spots; }
    get symbols() { return this.document.symbols; }
    get brushes() { return this.document.brushes; }
    get pageItems() { return this.document.pageItems; }
    constructor(doc: Document) {
        super(doc, CollectionProperty.Layers);
    }
}

class LayerQueryable extends Queryable {
    get layer(): Layer { return this.source; }
    get pageItems() { return this.layer.pageItems; }
    get compoundPathItems() { return this.layer.compoundPathItems; }
    get pathItems() { return this.layer.pathItems; }
    get rasterItems() { return this.layer.rasterItems; }
    get placedItems() { return this.layer.placedItems; }
    get meshItems() { return this.layer.meshItems; }
    get pluginItems() { return this.layer.pluginItems; }
    get textFrames() { return this.layer.textFrames; }
    get groupItems() { return this.layer.groupItems; }
    get symbolItems() { return this.layer.symbolItems; }
    get graphItems() { return this.layer.graphItems; }
    constructor(layer: Layer) {
        super(layer, CollectionProperty.PageItems);
    }
}

class PathItemQueryable extends Queryable {
    get pathItem(): PathItem { return this.source; }
    get pathPoints() { return this.pathItem.pathPoints; }
    constructor(pathItem: PathItem) {
        super(pathItem, CollectionProperty.PathPoints);
    }
}

class TextFrameQueryable extends Queryable {
    get textFrame(): TextFrame { return this.source; }
    get characters() { return this.textFrame.characters; }
    get words() { return this.textFrame.words; }
    get lines() { return this.textFrame.lines; }
    get paragraphs() { return this.textFrame.paragraphs; }
    constructor(textFrame: TextFrame) {
        super(textFrame, CollectionProperty.Characters); 
    }
}

class StoryQueryable extends Queryable {
    get story(): Story { return this.source; }
    get textRanges() { return this.story.textRanges; }
    get characters() { return this.story.characters; }
    get words() { return this.story.words; }
    get lines() { return this.story.lines; }
    get paragraphs() { return this.story.paragraphs; }
    get insertionPoints() { return this.story.insertionPoints; }
    constructor(story: Story) {
        super(story, CollectionProperty.TextRanges);
    }
}

class GradientQueryable extends Queryable {
    get gradient(): Gradient { return this.source; }
    get gradientStops() { return this.gradient.gradientStops; }
    constructor(gradient: Gradient) {
        super(gradient, CollectionProperty.GradientStops); 
    }
}

// Classes with no collections just have their source typed getter
class ArtboardQueryable extends Queryable {
    get artboard(): Artboard { return this.source; }
    constructor(artboard: Artboard) { super(artboard); }
}

class PageItemQueryable extends Queryable {
    get pageItem(): PageItem { return this.source; }
    constructor(pageItem: PageItem) { super(pageItem); }
}

class CompoundPathItemQueryable extends Queryable {
    get compoundPathItem(): CompoundPathItem { return this.source; }
    constructor(compoundPathItem: CompoundPathItem) { super(compoundPathItem); } 
}

class RasterItemQueryable extends Queryable {
    get rasterItem(): RasterItem { return this.source; }
    constructor(rasterItem: RasterItem) { super(rasterItem); }
}

class PlacedItemQueryable extends Queryable {
    get placedItem(): PlacedItem { return this.source; }
    constructor(placedItem: PlacedItem) { super(placedItem); }
}

class GroupItemQueryable extends Queryable {
    get groupItem(): GroupItem { return this.source; }
    constructor(groupItem: GroupItem) { super(groupItem); }
}

class SymbolItemQueryable extends Queryable {
    get symbolItem(): SymbolItem { return this.source; }
    constructor(symbolItem: SymbolItem) { super(symbolItem); }
}

class MeshItemQueryable extends Queryable {
    get meshItem(): MeshItem { return this.source; }
    constructor(meshItem: MeshItem) { super(meshItem); }
}

class PluginItemQueryable extends Queryable {
    get pluginItem(): PluginItem { return this.source; }
    constructor(pluginItem: PluginItem) { super(pluginItem); }
}

class GraphItemQueryable extends Queryable {
    get graphItem(): GraphItem { return this.source; }
    constructor(graphItem: GraphItem) { super(graphItem); }
}

class SwatchQueryable extends Queryable {
    get swatch(): Swatch { return this.source; }
    constructor(swatch: Swatch) { super(swatch); }
}

class BrushQueryable extends Queryable {
    get brush(): Brush { return this.source; }
    constructor(brush: Brush) { super(brush); }
}

class TagQueryable extends Queryable {
    get tag(): Tag { return this.source; }
    constructor(tag: Tag) { super(tag); }
}

class SymbolDefinitionQueryable extends Queryable {
    get symbol(): Symbol { return this.source; }
    constructor(symbol: Symbol) { super(symbol); }
}

class TextRangeQueryable extends Queryable {
    get textRange(): TextRange { return this.source; }
    constructor(textRange: TextRange) { super(textRange); }
}

class InsertionPointQueryable extends Queryable {
    get insertionPoint(): InsertionPoint { return this.source; }
    constructor(insertionPoint: InsertionPoint) { super(insertionPoint); }
}`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T16:54:09.390717Z"
        >
            <Origin>30115e81-9438-46ae-81dc-aa697abc3fc7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Excellent!! Now I need one of these per each of those classes. Follow my pattern:</Paragraph>
            <Paragraph>
                (Application as any)&#91;"__proto__"&#93;.queryable = function (): Queryable &#123; if (!this._q) &#123;
                this._q = new ApplicationQueryable(this as Application); &#125; return this._q; &#125;;
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:54:09.390717Z"
        >
            <Origin>01a0b7a6-108c-4fe5-8d6d-5843831ca5e4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`${''}(Application as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new ApplicationQueryable(this as Application);
    return this._q;
};

(Document as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new DocumentQueryable(this as Document);
    return this._q;
};

(Layer as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new LayerQueryable(this as Layer);
    return this._q;
};

(PathItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new PathItemQueryable(this as PathItem);
    return this._q;
};

(TextFrame as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new TextFrameQueryable(this as TextFrame);
    return this._q;
};

(Story as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new StoryQueryable(this as Story);
    return this._q;
};

(Gradient as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new GradientQueryable(this as Gradient);
    return this._q;
};

// Non-collection classes
(Artboard as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new ArtboardQueryable(this as Artboard);
    return this._q;
};

(PageItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new PageItemQueryable(this as PageItem);
    return this._q;
};

(CompoundPathItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new CompoundPathItemQueryable(this as CompoundPathItem);
    return this._q;
};

(RasterItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new RasterItemQueryable(this as RasterItem);
    return this._q;
};

(PlacedItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new PlacedItemQueryable(this as PlacedItem);
    return this._q;
};

(GroupItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new GroupItemQueryable(this as GroupItem);
    return this._q;
};

(SymbolItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new SymbolItemQueryable(this as SymbolItem);
    return this._q;
};

(MeshItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new MeshItemQueryable(this as MeshItem);
    return this._q;
};

(PluginItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new PluginItemQueryable(this as PluginItem);
    return this._q;
};

(GraphItem as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new GraphItemQueryable(this as GraphItem);
    return this._q;
};

(Swatch as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new SwatchQueryable(this as Swatch);
    return this._q;
};

(Brush as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new BrushQueryable(this as Brush);
    return this._q;
};

(Tag as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new TagQueryable(this as Tag);
    return this._q;
};

(Symbol as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new SymbolDefinitionQueryable(this as Symbol);
    return this._q;
};

(TextRange as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new TextRangeQueryable(this as TextRange);
    return this._q;
};

(InsertionPoint as any)["__proto__"].queryable = function (): Queryable {
    if (!this._q) this._q = new InsertionPointQueryable(this as InsertionPoint);
    return this._q;
};`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T16:56:20.815318Z"
        >
            <Origin>fc0da261-8714-43f7-9d5f-77df401074f7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Doing great! Now for each base class, extend the interface:</Paragraph>
            <Paragraph>declare interface Application &#123;&#125;</Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:56:20.815318Z"
        >
            <Origin>382929d5-3be5-424c-88f2-5f2cf91807b5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`declare interface Application {
    query`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T16:57:06.810476Z"
        >
            <Origin>90af04fa-413a-4ea1-925e-f80678855172</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>declare interface Application &#123; query(): Queryable; &#125;</Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:57:06.810476Z"
        >
            <Origin>fa535e70-73ab-4ddf-b720-3010208ca376</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`declare interface Application {
    queryable(): Queryable;
}

declare interface Document {
    queryable(): Queryable;
}

declare interface Layer {
    queryable(): Queryable;
}

declare interface PathItem {
    queryable(): Queryable;
}

declare interface TextFrame {
    queryable(): Queryable;
}

declare interface Story {
    queryable(): Queryable;
}

declare interface Gradient {
    queryable(): Queryable;
}

declare interface Artboard {
    queryable(): Queryable;
}

declare interface PageItem {
    queryable(): Queryable;
}

declare interface CompoundPathItem {
    queryable(): Queryable;
}

declare interface RasterItem {
    queryable(): Queryable;
}

declare interface PlacedItem {
    queryable(): Queryable;
}

declare interface GroupItem {
    queryable(): Queryable;
}

declare interface SymbolItem {
    queryable(): Queryable;
}

declare interface MeshItem {
    queryable(): Queryable;
}

declare interface PluginItem {
    queryable(): Queryable;
}

declare interface GraphItem {
    queryable(): Queryable;
}

declare interface Swatch {
    queryable(): Queryable;
}

declare interface Brush {
    queryable(): Queryable;
}

declare interface Tag {
    queryable(): Queryable;
}

declare interface Symbol {
    queryable(): Queryable;
}

declare interface TextRange {
    queryable(): Queryable;
}

declare interface InsertionPoint {
    queryable(): Queryable;
}`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T16:58:32.354492Z"
        >
            <Origin>0ab0ce75-87fa-4b80-be5e-6872eeb86db7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you put each on one line please with no spaces? Like this: declare interface InsertionPoint &#123;
                queryable(): Queryable; &#125;
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T16:58:32.354492Z"
        >
            <Origin>6742bd3c-1982-459e-9cb9-82e75150a58c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`declare interface Application { queryable(): Queryable; }
declare interface Document { queryable(): Queryable; }
declare interface Layer { queryable(): Queryable; }
declare interface PathItem { queryable(): Queryable; }
declare interface TextFrame { queryable(): Queryable; }
declare interface Story { queryable(): Queryable; }
declare interface Gradient { queryable(): Queryable; }
declare interface Artboard { queryable(): Queryable; }
declare interface PageItem { queryable(): Queryable; }
declare interface CompoundPathItem { queryable(): Queryable; }
declare interface RasterItem { queryable(): Queryable; }
declare interface PlacedItem { queryable(): Queryable; }
declare interface GroupItem { queryable(): Queryable; }
declare interface SymbolItem { queryable(): Queryable; }
declare interface MeshItem { queryable(): Queryable; }
declare interface PluginItem { queryable(): Queryable; }
declare interface GraphItem { queryable(): Queryable; }
declare interface Swatch { queryable(): Queryable; }
declare interface Brush { queryable(): Queryable; }
declare interface Tag { queryable(): Queryable; }
declare interface Symbol { queryable(): Queryable; }
declare interface TextRange { queryable(): Queryable; }
declare interface InsertionPoint { queryable(): Queryable; }`}
            </CodeBox>
        </Message>
        <Message
            at="2024-11-22T17:06:46.116675Z"
        >
            <Origin>c2a4629a-ddda-493e-a07a-06579223350b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do you see how I write the parent element here? Just write the equivalent parent property for each of those
                types:
            </Paragraph>
            <Paragraph>
                class DocumentQueryable extends Queryable &#123; get document(): Document &#123; return this.element; &#125;
                get artboards() &#123; return this.document.artboards; &#125; get layers() &#123; return
                this.document.layers; &#125; get stories() &#123; return this.document.stories; &#125; get tags() &#123;
                return this.document.tags; &#125; get variables() &#123; return this.document.variables; &#125; get
                swatches() &#123; return this.document.swatches; &#125; get gradients() &#123; return
                this.document.gradients; &#125; get patterns() &#123; return this.document.patterns; &#125; get spots()
                &#123; return this.document.spots; &#125; get symbols() &#123; return this.document.symbols; &#125; get
                brushes() &#123; return this.document.brushes; &#125; get pageItems() &#123; return this.document.pageItems;
                &#125; get parent(): Application &#123; return this.element.parent as Application; &#125; constructor(doc:
                Document) &#123; super(doc, CollectionProperty.Layers); &#125; &#125;
            </Paragraph>
        </Message>
        <Message
            at="2024-11-22T17:06:46.116675Z"
        >
            <Origin>b75dcfd8-dab7-445a-a187-b75afcae955a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="typescript"
            >
                {`class ApplicationQueryable extends Queryable {
    get parent(): null { return null; }
}

class DocumentQueryable extends Queryable {
    get parent(): Application { return this.element.parent as Application; }
}

class LayerQueryable extends Queryable {
    get parent(): Document { return this.element.parent as Document; }
}

class PathItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class TextFrameQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class StoryQueryable extends Queryable {
    get parent(): Document { return this.element.parent as Document; }
}

class GradientQueryable extends Queryable {
    get parent(): Document { return this.element.parent as Document; }
}

class ArtboardQueryable extends Queryable {
    get parent(): Document { return this.element.parent as Document; }
}

class PageItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class CompoundPathItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class RasterItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class PlacedItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class GroupItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class SymbolItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class MeshItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class PluginItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class GraphItemQueryable extends Queryable {
    get parent(): Layer { return this.element.parent as Layer; }
}

class SwatchQueryable extends Queryable {
    get parent(): Document { return this.element.parent as Document; }
}

class BrushQueryable extends Queryable {
    get parent(): Document { return this.element.parent as Document; }
}

class TagQueryable extends Queryable {
    get parent(): Document { return this.element.parent as Document; }
}

class SymbolDefinitionQueryable extends Queryable {
    get parent(): Document { return this.element.parent as Document; }
}

class TextRangeQueryable extends Queryable {
    get parent(): Story { return this.element.parent as Story; }
}

class InsertionPointQueryable extends Queryable {
    get parent(): Story { return this.element.parent as Story; }
}`}
            </CodeBox>
        </Message>
        <Append
            identifier="index-d"
            type=".txt"
        >
            ![[ index-d.txt ]]
        </Append>
    </Chapter>
);
