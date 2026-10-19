var x=Object.defineProperty;var m=(A,w)=>x(A,"name",{value:w,configurable:!0});import{jsxs as t,jsx as r}from"react/jsx-runtime";import{$ as C}from"@dna-platform/chemistry";import{$ as R,B as E,V as P,S as O,a as L,b as D,W as N,P as k,c as S,d as F,M as G,A as M,O as o,I as j,f as Q,D as g,g as n,h as i,k as d,C as h,j as c}from"./.cover-BDz1UtO8.js";import{Chapter as y,Title as b,Author as B,Subject as q,Paragraph as e,Svg as U,Synopsis as _,Parenthetical as T,TableOfContents as H,Section as W,Heading as V,Content as p,Word as l,Date as f,List as s,Line as a,Emphasis as z,Append as u}from"@dna-platform/public";import"styled-components";const I=class I extends R{};m(I,"$ClaudeTypescriptTypesForAdobeIllustratorScripting07f0");let v=I;const Y=m(()=>t(y,{children:[r(E,{}),r(P,{children:O()}),r(P,{children:L()}),r(D,{ground:"#f3f0f8",band:"#c9bfe3",bandInk:"#3a2d63",foot:"#8f7fc0",footInk:"#2e2350",ink:"#3a2d63"}),r(N,{x:"-32",y:"-26"}),t(k,{children:[r(S,{children:"[Doug](/dougs-story/)"}),r(S,{children:"[Claude](/dougs-claude/)"})]}),r(F,{from:"2024-12-12T22:00:27.766899Z",to:"2024-12-15T22:45:11.580712Z"}),r(G,{shown:"64",all:"64"}),r(b,{children:"[TypeScript Types for Adobe Illustrator Scripting](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/)"}),r(B,{children:"[Doug](/dougs-story/)"}),r(q,{children:"[Conversations](/our-conversations/)"}),r(M,{children:"[DNA](/dougs-claude/#dna)"}),r(o,{children:"07f0404b-a90d-4f5a-b30c-54d57bf53bd0"}),t(e,{children:[r(j,{}),r(U,{children:`<svg viewBox="0 0 64 64" class="pd-illustration"><path class="light" d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M6 9h34v20H18l-6 6v-6H6z"/><path d="M11 15h24M11 21h16"/><path class="fill" d="M24 31h34v20H52v6l-6-6H24z"/><path d="M24 31h34v20H52v6l-6-6H24z"/><path class="light" d="M29 37h24M29 43h16"/></svg>
`})]})]}),"Cover"),J=m(()=>t(y,{children:[r(_,{}),t(b,{children:[r(T,{}),"[Synopsis](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/)"]}),r(e,{children:"I need some help creating a series of TypeScript types for Adobe Illustrator scripting based on the types for adobe npm package. I will specify what I need and the types for adobe file so you can help me create them. Ready?"})]}),"Synopsis"),X=m(()=>t(y,{children:[r(H,{}),r(Q,{}),t(b,{children:[r(T,{}),"[Table of Contents](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#table-of-contents)"]}),t(W,{children:[r(V,{children:"December 2024"}),r(e,{children:r(p,{children:"[12 December 2024](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#12-december-2024)"})}),r(e,{children:r(p,{children:"[13 December 2024](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#13-december-2024)"})}),r(e,{children:r(p,{children:"[14 December 2024](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#14-december-2024)"})}),r(e,{children:r(p,{children:"[15 December 2024](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#15-december-2024)"})}),t(e,{children:[r(T,{}),r(l,{children:r(p,{children:"[TypeScript Types for Adobe Illustrator Scripting](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/)"})}),r(l,{children:r(p,{children:"[Synopsis](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#synopsis)"})}),r(l,{children:r(p,{children:"[Table of Contents](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#table-of-contents)"})})]})]})]}),"Table"),K=m(()=>t(y,{children:[r(g,{children:r(f,{children:"[12 December 2024](2024-12-12)"})}),r(b,{children:"[12 December 2024](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#12-december-2024)"}),t(n,{at:"2024-12-12T22:00:27.766899Z",children:[r(o,{children:"f6588430-5433-45cc-bc20-b12f78828d43"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"I need some help creating a series of TypeScript types for Adobe Illustrator scripting based on the types for adobe npm package. I will specify what I need and the types for adobe file so you can help me create them. Ready?"})]}),t(n,{at:"2024-12-12T22:00:33.665552Z",children:[r(o,{children:"6496692d-c2f5-49a6-955c-4807785f2152"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'm ready to help you create TypeScript types for Adobe Illustrator scripting. I have experience with TypeScript type definitions and can help ensure they're properly structured based on the adobe npm package types you'll provide. Please share the specific types you need and the relevant adobe package types, and I'll assist you in creating them."})]}),t(n,{at:"2024-12-12T22:45:00.943996Z",children:[r(o,{children:"b0fc7cb3-e2c7-469c-9ab5-eacd8c873e7f"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"I attached the types file as the first file."}),r(e,{children:'Look at the class in the second file. See that I have one "createLayer" methods on DocumentQuery. And there are many collections - the one associated with that method is layers(). They call off to this method on the QueryItem base class:'}),r(e,{children:"protected _create<TCollection extends ItemCollection, TQuery extends QueryItem>( select: (item: this) => TCollection, create: (colletion: TCollection) => TQuery ): TQuery { var collection = select(this); var queryItem = create(collection); var item: Item = queryItem._item; item?.move?.(collection, ElementPlacement.PLACEATEND); return queryItem; }"}),r(e,{children:"Here's createLayer: createLayer(): LayerQuery { return this._create(i => i.item().layers, layers => q(layers.add())); }"}),r(e,{children:'Most of the collections like "Layers" in the index.d.ts file have an empty add method, and I need you to create me the methods for each of the collections in the file. But some take an object. like createArtboard(artboardRect: Rect) would be the interface for artboard.'}),r(e,{children:"Can you write me all the create metods, referencing index.d.ts to figure out if the add method requires an argument?"}),r(d,{identifier:"index-d",type:".txt",children:"Attached “index.d.ts”"}),r(d,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),r(d,{children:"Uploaded “index.d.ts”, whose content the export does not carry"}),r(d,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),t(n,{at:"2024-12-12T22:45:18.389168Z",children:[r(o,{children:"da2cf1bb-01aa-4156-b43b-9a0212730e79"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll analyze the collections from the DocumentQuery class and create corresponding create methods based on the add() method signatures in index.d.ts."}),r(e,{children:"<antThinking>This is a good case for an artifact as it's a substantial piece of code that will need to be referenced and potentially modified. The code will be over 20 lines and includes multiple method definitions.</antThinking>"}),r(e,{children:'<antArtifact identifier="document-query-create-methods" type="application/vnd.ant.code" language="typescript" title="DocumentQuery Create Methods"> // Existing method createLayer(): LayerQuery { return this._create(i => i.item().layers, layers => q(layers.add())); }'}),r(e,{children:"createArtboard(artboardRect: Rect): ArtboardQuery { return this._create(i => i.item().artboards, artboards => q(artboards.add(artboardRect))); }"}),r(e,{children:`createStory(): StoryQuery { // Stories collection doesn't have an add method, so we can't create directly throw new Error("Stories cannot be created directly"); }`}),r(e,{children:"createVariable(): VariableQuery { return this._create(i => i.item().variables, variables => q(variables.add())); }"}),r(e,{children:"createSwatch(): SwatchQuery { return this._create(i => i.item().swatches, swatches => q(swatches.add())); }"}),r(e,{children:"createBrush(brushDefinition: File, brushName?: string): BrushQuery { return this._create(i => i.item().brushes, brushes => q(brushes.add(brushDefinition, brushName))); }"}),r(e,{children:"createSymbol(sourceArt: PageItem, registrationPoint?: SymbolRegistrationPoint): SymbolQuery { return this._create(i => i.item().symbols, symbols => q(symbols.add(sourceArt, registrationPoint))); }"}),r(e,{children:"createPattern(): PatternQuery { return this._create(i => i.item().patterns, patterns => q(patterns.add())); }"}),r(e,{children:"createSpot(): SpotQuery { return this._create(i => i.item().spots, spots => q(spots.add())); }"}),r(e,{children:"createGradient(): GradientQuery { return this._create(i => i.item().gradients, gradients => q(gradients.add())); }"}),r(e,{children:"createTag(): TagQuery { return this._create(i => i.item().tags, tags => q(tags.add())); } </antArtifact>"}),r(e,{children:"I've created methods for each collection based on the add() method signatures in index.d.ts. Here are some notes about each:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Artboards: Requires a Rect parameter for positioning and sizing"}),r(a,{children:"Stories: Cannot be created directly as there's no add() method"}),r(a,{children:"Most collections (Variables, Swatches, Patterns, Spots, Gradients, Tags) have parameter-less add() methods"}),r(a,{children:"Brushes: Requires a File for brush definition and optional name"}),r(a,{children:"Symbols: Requires source artwork and optional registration point"})]}),r(e,{children:"Each method follows the pattern of using _create() with appropriate item selection and creation functions. Let me know if you need any modifications or have questions about specific implementations."})]}),t(n,{at:"2024-12-12T22:48:40.545365Z",children:[r(o,{children:"a356c0f2-804a-45fa-afc3-3014767c93e6"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Same task but for LayerQuery, Can you write the create methods for me please?"}),r(d,{identifier:"paste-2",type:".txt",children:"Attached “paste.txt”"}),r(d,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),t(n,{at:"2024-12-12T22:48:58.923333Z",children:[r(o,{children:"ae07437e-5af1-4f15-b727-ea8fbbefb9d0"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll analyze the Layer collections and create corresponding create methods based on the add() method signatures in index.d.ts."}),r(e,{children:"<antThinking>This is a good case for an artifact as it's a substantial piece of code that will need to be referenced and potentially modified. The code will be over 20 lines and includes multiple method definitions.</antThinking>"}),r(e,{children:`<antArtifact identifier="layer-query-create-methods" type="application/vnd.ant.code" language="typescript" title="LayerQuery Create Methods"> createPageItem(): PageItemQuery { // PageItems collection doesn't have an add method throw new Error("PageItems cannot be created directly"); }`}),r(e,{children:"createCompoundPathItem(): CompoundPathItemQuery { return this._create(i => i.item().compoundPathItems, items => q(items.add())); }"}),r(e,{children:"createPathItem(): PathItemQuery { return this._create(i => i.item().pathItems, items => q(items.add())); }"}),r(e,{children:'createRasterItem(): RasterItemQuery { // RasterItems cannot be created directly - they are created through other operations throw new Error("RasterItems cannot be created directly"); }'}),r(e,{children:"createPlacedItem(): PlacedItemQuery { return this._create(i => i.item().placedItems, items => q(items.add())); }"}),r(e,{children:'createMeshItem(): MeshItemQuery { // MeshItems cannot be created directly - they are created through other operations throw new Error("MeshItems cannot be created directly"); }'}),r(e,{children:'createPluginItem(): PluginItemQuery { // PluginItems cannot be created directly - they are created by plugins throw new Error("PluginItems cannot be created directly"); }'}),r(e,{children:"createTextFrame(): TextFrameQuery { return this._create(i => i.item().textFrames, items => q(items.add())); }"}),r(e,{children:"createGroupItem(): GroupItemQuery { return this._create(i => i.item().groupItems, items => q(items.add())); }"}),r(e,{children:"createSymbolItem(symbol: Symbol): SymbolItemQuery { return this._create(i => i.item().symbolItems, items => q(items.add(symbol))); }"}),r(e,{children:'createGraphItem(): GraphItemQuery { // GraphItems cannot be created directly - they are created through other operations throw new Error("GraphItems cannot be created directly"); } </antArtifact>'}),r(e,{children:"I've created methods for each collection in LayerQuery. Here are some notes about the implementations:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Some items cannot be created directly as they don't have add() methods or are created through other operations:"}),t(e,{children:[r(s,{}),r(a,{children:"PageItems"}),r(a,{children:"RasterItems"}),r(a,{children:"MeshItems"}),r(a,{children:"PluginItems"}),r(a,{children:"GraphItems"})]}),r(a,{children:"Items that can be created with simple add():"}),t(e,{children:[r(s,{}),r(a,{children:"CompoundPathItems"}),r(a,{children:"PathItems"}),r(a,{children:"PlacedItems"}),r(a,{children:"TextFrames"}),r(a,{children:"GroupItems"})]}),r(a,{children:"SymbolItems requires a Symbol parameter when creating"})]}),r(e,{children:"All methods follow the pattern of using _create() with appropriate item selection and creation functions. Let me know if you need any clarification or modifications."})]}),t(n,{at:"2024-12-12T22:50:04.473095Z",children:[r(o,{children:"08a43fe5-ab43-4351-9838-50bf83b3dd1c"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Great!! Same task. Write the create methods:"}),r(e,{children:"class StoryQuery<T extends QueryItem = TextRangeQuery> extends Queryable<Story, T> { private _textRanges: StoryQuery<TextRangeQuery> | undefined; private _characters: StoryQuery<TextRangeQuery> | undefined; private _words: StoryQuery<TextRangeQuery> | undefined; private _lines: StoryQuery<TextRangeQuery> | undefined; private _paragraphs: StoryQuery<TextRangeQuery> | undefined; private _insertionPoints: StoryQuery<InsertionPointQuery> | undefined;"}),r(e,{children:'constructor(story: Story, collectionType: CollectionType = "textRanges") { super(story, collectionType); }'}),r(e,{children:'textRanges() { if (this.collectionType === "textRanges") return this; if (this._textRanges) return this._textRanges; this._textRanges = new StoryQuery<TextRangeQuery>(this._item, "textRanges"); return this._textRanges; }'}),r(e,{children:'characters() { if (this.collectionType === "characters") return this; if (this._characters) return this._characters; this._characters = new StoryQuery<TextRangeQuery>(this._item, "characters"); return this._characters; }'}),r(e,{children:'words() { if (this.collectionType === "words") return this; if (this._words) return this._words; this._words = new StoryQuery<TextRangeQuery>(this._item, "words"); return this._words; }'}),r(e,{children:'lines() { if (this.collectionType === "lines") return this; if (this._lines) return this._lines; this._lines = new StoryQuery<TextRangeQuery>(this._item, "lines"); return this._lines; }'}),r(e,{children:'paragraphs() { if (this.collectionType === "paragraphs") return this; if (this._paragraphs) return this._paragraphs; this._paragraphs = new StoryQuery<TextRangeQuery>(this._item, "paragraphs"); return this._paragraphs; }'}),r(e,{children:'insertionPoints() { if (this.collectionType === "insertionPoints") return this; if (this._insertionPoints) return this._insertionPoints; this._insertionPoints = new StoryQuery<InsertionPointQuery>(this._item, "insertionPoints"); return this._insertionPoints; } }'})]}),t(n,{at:"2024-12-12T22:50:16.638305Z",children:[r(o,{children:"19edabe2-bc11-41c8-a16c-ac29d2a636e7"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll analyze the Story collections and create the corresponding create methods based on the add() method signatures in index.d.ts."}),r(e,{children:"<antThinking>This needs an artifact as it's a coherent set of methods that will need to be referenced together and may need modification. The implementation patterns will be based on the add() methods in the text-related collections.</antThinking>"}),r(e,{children:`<antArtifact identifier="story-query-create-methods" type="application/vnd.ant.code" language="typescript" title="StoryQuery Create Methods"> createTextRange(): TextRangeQuery { // TextRanges collection doesn't have an add method throw new Error("TextRanges cannot be created directly"); }`}),r(e,{children:"createCharacter(contents: string): TextRangeQuery { return this._create(i => i.item().characters, chars => q(chars.add(contents))); }"}),r(e,{children:"createWord(contents: string): TextRangeQuery { return this._create(i => i.item().words, words => q(words.add(contents))); }"}),r(e,{children:`createLine(): TextRangeQuery { // Lines collection doesn't have an add method throw new Error("Lines cannot be created directly"); }`}),r(e,{children:"createParagraph(contents: string): TextRangeQuery { return this._create(i => i.item().paragraphs, paragraphs => q(paragraphs.add(contents))); }"}),r(e,{children:`createInsertionPoint(): InsertionPointQuery { // InsertionPoints collection doesn't have an add method throw new Error("InsertionPoints cannot be created directly"); } </antArtifact>`}),r(e,{children:"Here are notes about the implementations:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Some items cannot be created directly as they don't have add() methods:"}),t(e,{children:[r(s,{}),r(a,{children:"TextRanges"}),r(a,{children:"Lines"}),r(a,{children:"InsertionPoints"})]}),r(a,{children:"Items that can be created with add():"}),t(e,{children:[r(s,{}),r(a,{children:"Characters (requires contents string)"}),r(a,{children:"Words (requires contents string)"}),r(a,{children:"Paragraphs (requires contents string)"})]})]}),r(e,{children:"The methods that accept text content use the string parameter to create the text elements. All methods follow the pattern of using _create() with appropriate item selection and creation functions. Let me know if you need any modifications or clarification."})]}),t(n,{at:"2024-12-12T22:51:08.200916Z",children:[r(o,{children:"cd359b39-7cdc-4d7f-b435-e19dd5b93e2f"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Same task!"}),r(d,{identifier:"paste-3",type:".txt",children:"Attached “paste.txt”"}),r(d,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),t(n,{at:"2024-12-12T22:51:22.102071Z",children:[r(o,{children:"39135bca-03f9-4760-bcf2-bb84edfdee50"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll create the corresponding create methods for GroupItemQuery based on the add() method signatures in index.d.ts. Since GroupItemQuery has the same collection types as LayerQuery, the implementations will be similar."}),r(e,{children:"<antThinking>This needs an artifact as it's a set of related methods that mirror the LayerQuery create methods, with identical collection types and creation patterns.</antThinking>"}),r(e,{children:`<antArtifact identifier="group-item-query-create-methods" type="application/vnd.ant.code" language="typescript" title="GroupItemQuery Create Methods"> createPageItem(): PageItemQuery { // PageItems collection doesn't have an add method throw new Error("PageItems cannot be created directly"); }`}),r(e,{children:"createCompoundPathItem(): CompoundPathItemQuery { return this._create(i => i.item().compoundPathItems, items => q(items.add())); }"}),r(e,{children:"createPathItem(): PathItemQuery { return this._create(i => i.item().pathItems, items => q(items.add())); }"}),r(e,{children:'createRasterItem(): RasterItemQuery { // RasterItems cannot be created directly - they are created through other operations throw new Error("RasterItems cannot be created directly"); }'}),r(e,{children:"createPlacedItem(): PlacedItemQuery { return this._create(i => i.item().placedItems, items => q(items.add())); }"}),r(e,{children:'createMeshItem(): MeshItemQuery { // MeshItems cannot be created directly - they are created through other operations throw new Error("MeshItems cannot be created directly"); }'}),r(e,{children:'createPluginItem(): PluginItemQuery { // PluginItems cannot be created directly - they are created by plugins throw new Error("PluginItems cannot be created directly"); }'}),r(e,{children:"createTextFrame(): TextFrameQuery { return this._create(i => i.item().textFrames, items => q(items.add())); }"}),r(e,{children:"createGroupItem(): GroupItemQuery { return this._create(i => i.item().groupItems, items => q(items.add())); }"}),r(e,{children:"createSymbolItem(symbol: Symbol): SymbolItemQuery { return this._create(i => i.item().symbolItems, items => q(items.add(symbol))); }"}),r(e,{children:'createGraphItem(): GraphItemQuery { // GraphItems cannot be created directly - they are created through other operations throw new Error("GraphItems cannot be created directly"); } </antArtifact>'}),r(e,{children:"The implementations are identical to LayerQuery since they operate on the same collection types. Here are the key points:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Items that cannot be created directly:"}),t(e,{children:[r(s,{}),r(a,{children:"PageItems"}),r(a,{children:"RasterItems"}),r(a,{children:"MeshItems"}),r(a,{children:"PluginItems"}),r(a,{children:"GraphItems"})]}),r(a,{children:"Items that can be created with simple add():"}),t(e,{children:[r(s,{}),r(a,{children:"CompoundPathItems"}),r(a,{children:"PathItems"}),r(a,{children:"PlacedItems"}),r(a,{children:"TextFrames"}),r(a,{children:"GroupItems"})]}),r(a,{children:"SymbolItems requires a Symbol parameter when creating"})]}),r(e,{children:"All methods use the _create() pattern with appropriate item selection and creation functions. Let me know if you need any modifications or have questions."})]}),t(n,{at:"2024-12-12T22:52:04.828127Z",children:[r(o,{children:"6487ea74-c109-4a4d-ab98-7ca9f314f418"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Same task"}),r(e,{children:"class TextFrameQuery<T extends QueryItem = TextRangeQuery> extends Queryable<TextFrame, T> { private _characters: TextFrameQuery<TextRangeQuery> | undefined; private _words: TextFrameQuery<TextRangeQuery> | undefined; private _lines: TextFrameQuery<TextRangeQuery> | undefined; private _paragraphs: TextFrameQuery<TextRangeQuery> | undefined;"}),r(e,{children:'constructor(textFrame: TextFrame, collectionType: CollectionType = "characters") { super(textFrame, collectionType); }'}),r(e,{children:'characters() { if (this.collectionType === "characters") return this; if (this._characters) return this._characters; this._characters = new TextFrameQuery<TextRangeQuery>(this._item, "characters"); return this._characters; }'}),r(e,{children:'words() { if (this.collectionType === "words") return this; if (this._words) return this._words; this._words = new TextFrameQuery<TextRangeQuery>(this._item, "words"); return this._words; }'}),r(e,{children:'lines() { if (this.collectionType === "lines") return this; if (this._lines) return this._lines; this._lines = new TextFrameQuery<TextRangeQuery>(this._item, "lines"); return this._lines; }'}),r(e,{children:'paragraphs() { if (this.collectionType === "paragraphs") return this; if (this._paragraphs) return this._paragraphs; this._paragraphs = new TextFrameQuery<TextRangeQuery>(this._item, "paragraphs"); return this._paragraphs; } }'})]}),t(n,{at:"2024-12-12T22:52:16.254868Z",children:[r(o,{children:"a3970bbc-f499-45e4-a0b0-2db29e1578ea"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll create the corresponding create methods for TextFrameQuery based on the add() method signatures in index.d.ts. These will be similar to the text-related methods from StoryQuery."}),r(e,{children:"<antThinking>This needs an artifact as it's a cohesive set of methods dealing with text creation in a text frame, with patterns similar to StoryQuery's text methods.</antThinking>"}),r(e,{children:'<antArtifact identifier="text-frame-query-create-methods" type="application/vnd.ant.code" language="typescript" title="TextFrameQuery Create Methods"> createCharacter(contents: string): TextRangeQuery { return this._create(i => i.item().characters, chars => q(chars.add(contents))); }'}),r(e,{children:"createWord(contents: string): TextRangeQuery { return this._create(i => i.item().words, words => q(words.add(contents))); }"}),r(e,{children:`createLine(): TextRangeQuery { // Lines collection doesn't have an add method throw new Error("Lines cannot be created directly"); }`}),r(e,{children:"createParagraph(contents: string): TextRangeQuery { return this._create(i => i.item().paragraphs, paragraphs => q(paragraphs.add(contents))); } </antArtifact>"}),r(e,{children:"Here are the key points about these implementations:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Items that can be created with add():"}),t(e,{children:[r(s,{}),r(a,{children:"Characters (requires contents string)"}),r(a,{children:"Words (requires contents string)"}),r(a,{children:"Paragraphs (requires contents string)"})]}),r(a,{children:"Items that cannot be created directly:"}),t(e,{children:[r(s,{}),r(a,{children:"Lines (they are created automatically when text is added)"})]})]}),r(e,{children:"All creation methods that accept text require a string parameter for the content. Let me know if you need any modifications or clarification."})]}),t(n,{at:"2024-12-12T23:27:33.187660Z",children:[r(o,{children:"0c8e1fa4-5282-4948-85c7-451d8f773fd0"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Excellent! Next task is a bit different. Now, I am creating builders for setting properties. Here's the base class. Notice that it sets properties and then returns"}),r(e,{children:"class SetProperties<TQueryItem extends QueryItem> { protected _queryItem: any; protected item(): Item { return this.query()._item; } query(): TQueryItem { return this._queryItem; }"}),r(e,{children:'constructor(queryItem: TQueryItem) { if (queryItem === undefined) throw "queryItem undefined"; this._queryItem = queryItem; }'}),r(e,{children:"name(name: string): this { this.query().name(name); return this; } location(index: number): this { this.query().moveTo(index); return this; } locationToFront(): this { this.query().moveTo(0); return this; } locationToBack(): this { this.query().moveTo(-1); return this; } locationBefore(referenceItem: QueryItem) { this.query().move(referenceItem, ElementPlacement.PLACEBEFORE); } locationAfter(referenceItem: QueryItem) { this.query().move(referenceItem, ElementPlacement.PLACEAFTER); } }"}),r(e,{children:"It would be used like this:"}),r(e,{children:'query.set().name("Item Name").location(0).property1(value).property2(value)...'}),r(e,{children:"But I need to subclass that one based on each other the settable properties in the index.d.ts file."}),r(e,{children:"So I need a class called ApplicationBuilder which allows the settable properties of Application to be set. Here's the query: class ApplicationQuery extends Queryable<Application, DocumentQuery<LayerQuery<PageItemQuery>>>"}),r(e,{children:"Can you find the settable properties of Application and create the SetApplicationProperties class? It extends SetProperties<ApplicationQuery>"})]}),t(n,{at:"2024-12-12T23:27:49.178108Z",children:[r(o,{children:"463c06f4-9b71-472f-89ba-76aa336ec0cb"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll analyze the Application interface in index.d.ts to find all settable properties (those that aren't readonly) and create the SetApplicationProperties class."}),r(e,{children:"<antThinking>This needs an artifact as it's a complete class definition that implements a standard pattern for property setting, and will likely be referenced and modified.</antThinking>"}),r(e,{children:'<antArtifact identifier="set-application-properties" type="application/vnd.ant.code" language="typescript" title="SetApplicationProperties Class"> class SetApplicationProperties extends SetProperties<ApplicationQuery> { // Whether to include reminder text with Save, Save As, and Print dialogs pasteRemembersLayers(value: boolean): this { this.item().pasteRemembersLayers = value; return this; }'}),r(e,{children:"// Coordinate system to use coordinateSystem(value: CoordinateSystem): this { this.item().coordinateSystem = value; return this; }"}),r(e,{children:"// How to handle script commands during execution userInteractionLevel(value: UserInteractionLevel): this { this.item().userInteractionLevel = value; return this; } } </antArtifact>"}),r(e,{children:"Looking at the Application interface in the index.d.ts file, there are only three properties that are settable (not marked as readonly):"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"pasteRemembersLayers: boolean"}),r(a,{children:"coordinateSystem: CoordinateSystem"}),r(a,{children:"userInteractionLevel: UserInteractionLevel"})]}),r(e,{children:"All other properties are marked as readonly and therefore can't be set."}),r(e,{children:"Each method:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Takes the appropriate value type as parameter"}),r(a,{children:"Sets the corresponding property on the item"}),r(a,{children:"Returns this for method chaining"})]}),r(e,{children:"The builder can be used like:"}),r(h,{language:"typescript",children:`query.set()
    .pasteRemembersLayers(true)
    .coordinateSystem(CoordinateSystem.ARTBOARDCOORDINATESYSTEM)
    .userInteractionLevel(UserInteractionLevel.DISPLAYALERTS)`}),r(e,{children:"Let me know if you need any modifications or have questions about the implementation."})]}),t(n,{at:"2024-12-12T23:29:07.278450Z",children:[r(o,{children:"00894660-6d1b-424f-bc59-106ef0d1beb6"}),r(i,{children:"[Doug](/dougs-story/)"}),t(e,{children:["Here's the base class. Notice that it sets properties and then returns class SetProperties<TQueryItem extends QueryItem> { protected ",t(l,{children:[r(z,{}),"queryItem: any; protected item(): Item { return this.query()."]}),`item; } query(): TQueryItem { return this._queryItem; } constructor(queryItem: TQueryItem) { if (queryItem === undefined) throw "queryItem undefined"; this._queryItem = queryItem; } name(name: string): this { this.query().name(name); return this; } location(index: number): this { this.query().moveTo(index); return this; } locationToFront(): this { this.query().moveTo(0); return this; } locationToBack(): this { this.query().moveTo(-1); return this; } locationBefore(referenceItem: QueryItem) { this.query().move(referenceItem, ElementPlacement.PLACEBEFORE); } locationAfter(referenceItem: QueryItem) { this.query().move(referenceItem, ElementPlacement.PLACEAFTER); } } It would be used like this: query.set().name("Item Name").location(0).property1(value).property2(value)... But I need to subclass that one based on each other the settable properties in the index.d.ts file. So I need a class called ApplicationBuilder which allows the settable properties of Application to be set. Here's the query: class ApplicationQuery extends Queryable<Application, DocumentQuery<LayerQuery<PageItemQuery>>> Can you find the settable properties of Application and create the SetApplicationProperties class? It extends SetProperties<ApplicationQuery>`]}),r(e,{children:"Can you write each set method on one line and stack them to conserve space? I attached index.d.ts so you can find the Application class. It has a bunch of settable properties"}),r(d,{identifier:"index-d-2",type:".txt",children:"Attached “index.d.ts”"}),r(d,{children:"Uploaded “index.d.ts”, whose content the export does not carry"})]}),t(n,{at:"2024-12-12T23:29:21.578571Z",children:[r(o,{children:"90ffb33c-bd09-4276-a6c5-5579a2a4f605"}),r(i,{children:"[Claude](/dougs-claude/)"}),t(e,{children:["Looking at the ",t(l,{children:[r(c,{}),"Application"]})," interface in index.d.ts, there are only three settable (non-readonly) properties. Here's the concise implementation:"]}),r(e,{children:"<antThinking>This needs an artifact as it's a class definition implementing a consistent pattern for property setting, with clear method implementations based on documented settable Application properties.</antThinking>"}),r(e,{children:'<antArtifact identifier="set-application-properties" type="application/vnd.ant.code" language="typescript" title="SetApplicationProperties Class"> class SetApplicationProperties extends SetProperties<ApplicationQuery> { pasteRemembersLayers(value: boolean): this { this.item().pasteRemembersLayers = value; return this; } coordinateSystem(value: CoordinateSystem): this { this.item().coordinateSystem = value; return this; } userInteractionLevel(value: UserInteractionLevel): this { this.item().userInteractionLevel = value; return this; } } </antArtifact>'}),r(e,{children:"These are all the settable properties found in the Application interface, allowing for method chaining like:"}),r(h,{language:"typescript",children:`query.set()
    .pasteRemembersLayers(true)
    .coordinateSystem(CoordinateSystem.ARTBOARDCOORDINATESYSTEM)
    .userInteractionLevel(UserInteractionLevel.DISPLAYALERTS)
    .name("Some Name");`})]}),t(n,{at:"2024-12-12T23:31:20.164257Z",children:[r(o,{children:"015f6f4a-f0af-4603-bb61-c805f5ce0913"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Great! Now can you write the version of this class for DocumentQuery which wraps Document?"})]}),t(n,{at:"2024-12-12T23:31:36.654522Z",children:[r(o,{children:"c244c9b5-923b-4468-990c-ab3b791a16b7"}),r(i,{children:"[Claude](/dougs-claude/)"}),t(e,{children:["I'll analyze the ",t(l,{children:[r(c,{}),"Document"]})," interface in index.d.ts for settable properties."]}),r(e,{children:"<antThinking>This needs an artifact as it's a class implementing property setters for all settable Document properties, following the same property setting pattern established previously.</antThinking>"}),r(e,{children:'<antArtifact identifier="set-document-properties" type="application/vnd.ant.code" language="typescript" title="SetDocumentProperties Class"> class SetDocumentProperties extends SetProperties<DocumentQuery> { XMPString(value: string): this { this.item().XMPString = value; return this; } activeDataSet(value: DataSet): this { this.item().activeDataSet = value; return this; } activeLayer(value: Layer): this { this.item().activeLayer = value; return this; } cropBox(value: Rect): this { this.item().cropBox = value; return this; } cropStyle(value: CropOptions): this { this.item().cropStyle = value; return this; } defaultFillColor(value: Color): this { this.item().defaultFillColor = value; return this; } defaultFillOverprint(value: boolean): this { this.item().defaultFillOverprint = value; return this; } defaultFilled(value: boolean): this { this.item().defaultFilled = value; return this; } defaultStrokeCap(value: StrokeCap): this { this.item().defaultStrokeCap = value; return this; } defaultStrokeColor(value: Color): this { this.item().defaultStrokeColor = value; return this; } defaultStrokeDashOffset(value: number): this { this.item().defaultStrokeDashOffset = value; return this; } defaultStrokeDashes(value: number[]): this { this.item().defaultStrokeDashes = value; return this; } defaultStrokeJoin(value: StrokeJoin): this { this.item().defaultStrokeJoin = value; return this; } defaultStrokeMiterLimit(value: number): this { this.item().defaultStrokeMiterLimit = value; return this; } defaultStrokeOverprint(value: boolean): this { this.item().defaultStrokeOverprint = value; return this; } defaultStrokeWidth(value: number): this { this.item().defaultStrokeWidth = value; return this; } defaultStroked(value: boolean): this { this.item().defaultStroked = value; return this; } pageOrigin(value: Point | [number, number]): this { this.item().pageOrigin = value; return this; } rasterEffectSettings(value: RasterEffectOptions): this { this.item().rasterEffectSettings = value; return this; } rulerOrigin(value: Point | [number, number]): this { this.item().rulerOrigin = value; return this; } saved(value: boolean): this { this.item().saved = value; return this; } selection(value: any): this { this.item().selection = value; return this; } variablesLocked(value: boolean): this { this.item().variablesLocked = value; return this; } } </antArtifact>'}),t(e,{children:["I found all settable (non-readonly) properties from the Document interface. Each method follows the pattern of setting the property and returning ",t(l,{children:[r(c,{}),"this"]})," for chaining. You can use it like:"]}),r(h,{language:"typescript",children:`query.set()
    .defaultFillColor(new RGBColor())
    .defaultStrokeWidth(2)
    .cropStyle(CropOptions.Standard)
    .pageOrigin([0, 0])
    .name("Document Name");`}),r(e,{children:"All properties that didn't have readonly flag in index.d.ts are included as settable properties. Let me know if you need any clarification about any of the properties included."})]}),t(n,{at:"2024-12-12T23:35:21.270596Z",children:[r(o,{children:"5fa5cfd1-6ee5-4a1c-8a28-33443960ba0a"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Small change. You don't need redo, just observe and confirm. I get the item through query now so its strongly types:"}),r(e,{children:"class SetProperties<TQueryItem extends QueryItem> { protected _queryItem: any; query(): TQueryItem { return this._queryItem; }"}),r(e,{children:'constructor(queryItem: TQueryItem) { if (queryItem === undefined) throw "queryItem undefined"; this._queryItem = queryItem; }'}),r(e,{children:"name(name: string): this { this.query().name(name); return this; } location(index: number): this { this.query().moveTo(index); return this; } locationToFront(): this { this.query().moveTo(0); return this; } locationToBack(): this { this.query().moveTo(-1); return this; } locationBefore(referenceItem: QueryItem) { this.query().move(referenceItem, ElementPlacement.PLACEBEFORE); } locationAfter(referenceItem: QueryItem) { this.query().move(referenceItem, ElementPlacement.PLACEAFTER); } }"}),r(e,{children:"class SetApplicationProperties extends SetProperties<ApplicationQuery> { pasteRemembersLayers(value: boolean): this { this.query().item().pasteRemembersLayers = value; return this; } coordinateSystem(value: CoordinateSystem): this { this.query().item().coordinateSystem = value; return this; } userInteractionLevel(value: UserInteractionLevel): this { this.query().item().userInteractionLevel = value; return this; } }"}),r(e,{children:"Okay, now that you understand the pattern for that, can you write the subclass for: ArtboardQuery which wraps Artboard"})]}),t(n,{at:"2024-12-12T23:35:32.412631Z",children:[r(o,{children:"bd7277f2-f7f3-4f69-b06e-c8bb37768c13"}),r(i,{children:"[Claude](/dougs-claude/)"}),t(e,{children:["I'll analyze the ",t(l,{children:[r(c,{}),"Artboard"]})," interface in index.d.ts for settable properties and create the builder class using the pattern you've shown."]}),r(e,{children:"<antThinking>This needs an artifact as it's a class implementing property setters for settable Artboard properties following the established pattern of accessing via query().item()</antThinking>"}),r(e,{children:'<antArtifact identifier="set-artboard-properties" type="application/vnd.ant.code" language="typescript" title="SetArtboardProperties Class"> class SetArtboardProperties extends SetProperties<ArtboardQuery> { artboardRect(value: Rect): this { this.query().item().artboardRect = value; return this; } rulerOrigin(value: Point | [number, number]): this { this.query().item().rulerOrigin = value; return this; } rulerPAR(value: number): this { this.query().item().rulerPAR = value; return this; } showCenter(value: boolean): this { this.query().item().showCenter = value; return this; } showCrossHairs(value: boolean): this { this.query().item().showCrossHairs = value; return this; } showSafeAreas(value: boolean): this { this.query().item().showSafeAreas = value; return this; } } </antArtifact>'}),r(e,{children:"These are all the settable properties from the Artboard interface. It can be used like:"}),r(h,{language:"typescript",children:`query.set()
    .artboardRect([0, 0, 800, 600])
    .rulerOrigin([0, 0])
    .showCenter(true)
    .name("Artboard Name");`})]}),t(n,{at:"2024-12-12T23:36:32.050566Z",children:[r(o,{children:"8377a1d4-463a-4311-a4c5-6c56633aa765"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Great! Love it. New write it for LayerQuery please"})]}),t(n,{at:"2024-12-12T23:36:41.117993Z",children:[r(o,{children:"7bc597cb-b72d-41e2-9df9-2841466b7d29"}),r(i,{children:"[Claude](/dougs-claude/)"}),t(e,{children:["I'll analyze the ",t(l,{children:[r(c,{}),"Layer"]})," interface in index.d.ts for settable properties and create the builder class."]}),r(e,{children:"<antThinking>This needs an artifact as it's a class implementing property setters for all settable Layer properties following the established pattern of accessing via query().item()</antThinking>"}),r(e,{children:'<antArtifact identifier="set-layer-properties" type="application/vnd.ant.code" language="typescript" title="SetLayerProperties Class"> class SetLayerProperties extends SetProperties<LayerQuery> { artworkKnockout(value: KnockoutState): this { this.query().item().artworkKnockout = value; return this; } blendingMode(value: BlendModes): this { this.query().item().blendingMode = value; return this; } color(value: RGBColor): this { this.query().item().color = value; return this; } dimPlacedImages(value: boolean): this { this.query().item().dimPlacedImages = value; return this; } hasSelectedArtwork(value: boolean): this { this.query().item().hasSelectedArtwork = value; return this; } isIsolated(value: boolean): this { this.query().item().isIsolated = value; return this; } locked(value: boolean): this { this.query().item().locked = value; return this; } opacity(value: number): this { this.query().item().opacity = value; return this; } preview(value: boolean): this { this.query().item().preview = value; return this; } printable(value: boolean): this { this.query().item().printable = value; return this; } sliced(value: boolean): this { this.query().item().sliced = value; return this; } visible(value: boolean): this { this.query().item().visible = value; return this; } } </antArtifact>'}),r(e,{children:"The class can be used like:"}),r(h,{language:"typescript",children:`query.set()
    .opacity(80)
    .blendingMode(BlendModes.MULTIPLY)
    .visible(true)
    .locked(false)
    .name("Layer Name");`})]}),t(n,{at:"2024-12-12T23:37:23.806139Z",children:[r(o,{children:"e11dabed-0706-4d4f-8850-4b79d58fa345"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Now can you do StoryQuery and GroupItemQuery?"})]}),t(n,{at:"2024-12-12T23:37:38.087936Z",children:[r(o,{children:"10e0bb8b-15ad-4c6a-88e4-f6b051ca91d3"}),r(i,{children:"[Claude](/dougs-claude/)"}),t(e,{children:["I'll create both classes analyzing the ",t(l,{children:[r(c,{}),"Story"]})," and ",t(l,{children:[r(c,{}),"GroupItem"]})," interfaces in index.d.ts."]}),r(e,{children:"<antThinking>This needs an artifact for both StoryQuery and GroupItemQuery property setters following the established pattern. GroupItem inherits from PageItem so needs those properties too.</antThinking>"}),r(e,{children:'<antArtifact identifier="set-story-and-group-properties" type="application/vnd.ant.code" language="typescript" title="SetStoryProperties and SetGroupItemProperties Classes"> class SetStoryProperties extends SetProperties<StoryQuery> { // Story has no directly settable properties besides those inherited from SetProperties }'}),r(e,{children:"class SetGroupItemProperties extends SetProperties<GroupItemQuery> { // From PageItem URL(value: string): this { this.query().item().URL = value; return this; } artworkKnockout(value: KnockoutState): this { this.query().item().artworkKnockout = value; return this; } blendingMode(value: BlendModes): this { this.query().item().blendingMode = value; return this; } height(value: number): this { this.query().item().height = value; return this; } hidden(value: boolean): this { this.query().item().hidden = value; return this; } isIsolated(value: boolean): this { this.query().item().isIsolated = value; return this; } left(value: number): this { this.query().item().left = value; return this; } locked(value: boolean): this { this.query().item().locked = value; return this; } note(value: string): this { this.query().item().note = value; return this; } opacity(value: number): this { this.query().item().opacity = value; return this; } pixelAligned(value: boolean): this { this.query().item().pixelAligned = value; return this; } position(value: Point | [number, number]): this { this.query().item().position = value; return this; } selected(value: boolean): this { this.query().item().selected = value; return this; } sliced(value: boolean): this { this.query().item().sliced = value; return this; } top(value: number): this { this.query().item().top = value; return this; } width(value: number): this { this.query().item().width = value; return this; } wrapInside(value: boolean): this { this.query().item().wrapInside = value; return this; } wrapOffset(value: number): this { this.query().item().wrapOffset = value; return this; } wrapped(value: boolean): this { this.query().item().wrapped = value; return this; }"}),r(e,{children:"// From GroupItem clipped(value: boolean): this { this.query().item().clipped = value; return this; } } </antArtifact>"}),r(e,{children:"The Story class has no settable properties of its own besides those inherited from SetProperties."}),r(e,{children:"GroupItem inherits all settable properties from PageItem and adds one more property (clipped). They can be used like:"}),r(h,{language:"typescript",children:`// Story (only base properties)
storyQuery.set()
    .name("Story Name")
    .location(0);

// GroupItem (all PageItem properties plus clipped)
groupQuery.set()
    .opacity(80)
    .position([100, 100])
    .locked(false)
    .clipped(true)
    .name("Group Name");`})]}),t(n,{at:"2024-12-12T23:43:13.368845Z",children:[r(o,{children:"cc13dab6-ae2e-4d4c-a8f4-080ab2f14ddd"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Can you PathItemQuery, TextFrameQuery, GradientQuery"})]}),t(n,{at:"2024-12-12T23:43:40.795616Z",children:[r(o,{children:"c96135f9-961f-468e-b099-9e68793fb38e"}),r(i,{children:"[Claude](/dougs-claude/)"}),t(e,{children:["I'll analyze the ",t(l,{children:[r(c,{}),"PathItem"]}),", ",t(l,{children:[r(c,{}),"TextFrame"]})," and ",t(l,{children:[r(c,{}),"Gradient"]})," interfaces in index.d.ts for settable properties."]}),r(e,{children:"<antThinking>This needs an artifact for three classes - PathItem inherits from PageItem, TextFrame also inherits from PageItem, and Gradient has its own properties. Need to implement all inherited properties plus their own settable properties.</antThinking>"}),r(e,{children:'<antArtifact identifier="set-multiple-properties" type="application/vnd.ant.code" language="typescript" title="SetPathItemProperties, SetTextFrameProperties, and SetGradientProperties Classes"> class SetPathItemProperties extends SetProperties<PathItemQuery> { // From PageItem URL(value: string): this { this.query().item().URL = value; return this; } artworkKnockout(value: KnockoutState): this { this.query().item().artworkKnockout = value; return this; } blendingMode(value: BlendModes): this { this.query().item().blendingMode = value; return this; } height(value: number): this { this.query().item().height = value; return this; } hidden(value: boolean): this { this.query().item().hidden = value; return this; } isIsolated(value: boolean): this { this.query().item().isIsolated = value; return this; } left(value: number): this { this.query().item().left = value; return this; } locked(value: boolean): this { this.query().item().locked = value; return this; } note(value: string): this { this.query().item().note = value; return this; } opacity(value: number): this { this.query().item().opacity = value; return this; } pixelAligned(value: boolean): this { this.query().item().pixelAligned = value; return this; } position(value: Point | [number, number]): this { this.query().item().position = value; return this; } selected(value: boolean): this { this.query().item().selected = value; return this; } sliced(value: boolean): this { this.query().item().sliced = value; return this; } top(value: number): this { this.query().item().top = value; return this; } width(value: number): this { this.query().item().width = value; return this; } wrapInside(value: boolean): this { this.query().item().wrapInside = value; return this; } wrapOffset(value: number): this { this.query().item().wrapOffset = value; return this; } wrapped(value: boolean): this { this.query().item().wrapped = value; return this; }'}),r(e,{children:"// From PathItem clipping(value: boolean): this { this.query().item().clipping = value; return this; } closed(value: boolean): this { this.query().item().closed = value; return this; } evenodd(value: boolean): this { this.query().item().evenodd = value; return this; } fillColor(value: Color): this { this.query().item().fillColor = value; return this; } fillOverprint(value: boolean): this { this.query().item().fillOverprint = value; return this; } filled(value: boolean): this { this.query().item().filled = value; return this; } guides(value: boolean): this { this.query().item().guides = value; return this; } polarity(value: PolarityValues): this { this.query().item().polarity = value; return this; } resolution(value: number): this { this.query().item().resolution = value; return this; } strokeCap(value: StrokeCap): this { this.query().item().strokeCap = value; return this; } strokeColor(value: Color): this { this.query().item().strokeColor = value; return this; } strokeDashOffset(value: number): this { this.query().item().strokeDashOffset = value; return this; } strokeDashes(value: number[]): this { this.query().item().strokeDashes = value; return this; } strokeJoin(value: StrokeJoin): this { this.query().item().strokeJoin = value; return this; } strokeMiterLimit(value: number): this { this.query().item().strokeMiterLimit = value; return this; } strokeOverprint(value: boolean): this { this.query().item().strokeOverprint = value; return this; } strokeWidth(value: number): this { this.query().item().strokeWidth = value; return this; } stroked(value: boolean): this { this.query().item().stroked = value; return this; } }"}),r(e,{children:"class SetTextFrameProperties extends SetProperties<TextFrameQuery> { // From PageItem URL(value: string): this { this.query().item().URL = value; return this; } artworkKnockout(value: KnockoutState): this { this.query().item().artworkKnockout = value; return this; } blendingMode(value: BlendModes): this { this.query().item().blendingMode = value; return this; } height(value: number): this { this.query().item().height = value; return this; } hidden(value: boolean): this { this.query().item().hidden = value; return this; } isIsolated(value: boolean): this { this.query().item().isIsolated = value; return this; } left(value: number): this { this.query().item().left = value; return this; } locked(value: boolean): this { this.query().item().locked = value; return this; } note(value: string): this { this.query().item().note = value; return this; } opacity(value: number): this { this.query().item().opacity = value; return this; } pixelAligned(value: boolean): this { this.query().item().pixelAligned = value; return this; } position(value: Point | [number, number]): this { this.query().item().position = value; return this; } selected(value: boolean): this { this.query().item().selected = value; return this; } sliced(value: boolean): this { this.query().item().sliced = value; return this; } top(value: number): this { this.query().item().top = value; return this; } width(value: number): this { this.query().item().width = value; return this; } wrapInside(value: boolean): this { this.query().item().wrapInside = value; return this; } wrapOffset(value: number): this { this.query().item().wrapOffset = value; return this; } wrapped(value: boolean): this { this.query().item().wrapped = value; return this; }"}),r(e,{children:"// From TextFrame anchor(value: Point | [number, number]): this { this.query().item().anchor = value; return this; } antialias(value: TextAntialias): this { this.query().item().antialias = value; return this; } columnCount(value: number): this { this.query().item().columnCount = value; return this; } columnGutter(value: number): this { this.query().item().columnGutter = value; return this; } contents(value: string): this { this.query().item().contents = value; return this; } endTValue(value: number): this { this.query().item().endTValue = value; return this; } firstBaseline(value: FirstBaselineType): this { this.query().item().firstBaseline = value; return this; } firstBaselineMin(value: number): this { this.query().item().firstBaselineMin = value; return this; } flowLinksHorizontally(value: boolean): this { this.query().item().flowLinksHorizontally = value; return this; } orientation(value: TextOrientation): this { this.query().item().orientation = value; return this; } rowCount(value: number): this { this.query().item().rowCount = value; return this; } rowGutter(value: number): this { this.query().item().rowGutter = value; return this; } spacing(value: number): this { this.query().item().spacing = value; return this; } startTValue(value: number): this { this.query().item().startTValue = value; return this; } }"}),r(e,{children:"class SetGradientProperties extends SetProperties<GradientQuery> { name(value: string): this { this.query().item().name = value; return this; } type(value: GradientType): this { this.query().item().type = value; return this; } } </antArtifact>"}),r(e,{children:"These can be used like:"}),r(h,{language:"typescript",children:`// PathItem
pathQuery.set()
    .fillColor(new RGBColor())
    .strokeWidth(2)
    .closed(true)
    .opacity(80);

// TextFrame
textFrameQuery.set()
    .contents("Hello World")
    .columnCount(2)
    .orientation(TextOrientation.HORIZONTAL)
    .antialias(TextAntialias.SHARP);

// Gradient
gradientQuery.set()
    .name("My Gradient")
    .type(GradientType.LINEAR);`})]}),t(n,{at:"2024-12-12T23:59:24.719313Z",children:[r(o,{children:"7eef81cd-87a8-40dc-9fd0-d3c6843dd236"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Can you do these ones? Just sending the classes to show you the query name. You can ignore the rest"}),r(e,{children:"class PageItemQuery extends Queryable<PageItem, QueryItem> { constructor(pageItem: PageItem) { super(pageItem); } }"}),r(e,{children:"class CompoundPathItemQuery extends Queryable<CompoundPathItem, QueryItem> { constructor(compoundPathItem: CompoundPathItem) { super(compoundPathItem); } }"}),r(e,{children:"class RasterItemQuery extends Queryable<RasterItem, QueryItem> { constructor(rasterItem: RasterItem) { super(rasterItem); } }"}),r(e,{children:"class PlacedItemQuery extends Queryable<PlacedItem, QueryItem> { constructor(placedItem: PlacedItem) { super(placedItem); } }"}),r(e,{children:"class SymbolItemQuery extends Queryable<SymbolItem, QueryItem> { constructor(symbolItem: SymbolItem) { super(symbolItem); } }"}),r(e,{children:"class MeshItemQuery extends Queryable<MeshItem, QueryItem> { constructor(meshItem: MeshItem) { super(meshItem); } }"})]}),t(n,{at:"2024-12-12T23:59:56.023352Z",children:[r(o,{children:"12b8e321-4065-41a7-b199-b9b6a1d47480"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll create the property setter classes for these queries based on their respective interfaces in index.d.ts."}),r(e,{children:"<antThinking>This needs an artifact for multiple query classes. Most of these inherit from PageItem, so they need those properties plus their own settable properties.</antThinking>"}),r(e,{children:'<antArtifact identifier="set-item-properties" type="application/vnd.ant.code" language="typescript" title="Property Setter Classes for Various Item Types"> // Base PageItem properties that most will inherit class SetPageItemProperties extends SetProperties<PageItemQuery> { URL(value: string): this { this.query().item().URL = value; return this; } artworkKnockout(value: KnockoutState): this { this.query().item().artworkKnockout = value; return this; } blendingMode(value: BlendModes): this { this.query().item().blendingMode = value; return this; } height(value: number): this { this.query().item().height = value; return this; } hidden(value: boolean): this { this.query().item().hidden = value; return this; } isIsolated(value: boolean): this { this.query().item().isIsolated = value; return this; } left(value: number): this { this.query().item().left = value; return this; } locked(value: boolean): this { this.query().item().locked = value; return this; } note(value: string): this { this.query().item().note = value; return this; } opacity(value: number): this { this.query().item().opacity = value; return this; } pixelAligned(value: boolean): this { this.query().item().pixelAligned = value; return this; } position(value: Point | [number, number]): this { this.query().item().position = value; return this; } selected(value: boolean): this { this.query().item().selected = value; return this; } sliced(value: boolean): this { this.query().item().sliced = value; return this; } top(value: number): this { this.query().item().top = value; return this; } width(value: number): this { this.query().item().width = value; return this; } wrapInside(value: boolean): this { this.query().item().wrapInside = value; return this; } wrapOffset(value: number): this { this.query().item().wrapOffset = value; return this; } wrapped(value: boolean): this { this.query().item().wrapped = value; return this; } }'}),r(e,{children:"class SetCompoundPathItemProperties extends SetPageItemProperties { // CompoundPathItem has no additional settable properties beyond PageItem }"}),r(e,{children:"class SetRasterItemProperties extends SetPageItemProperties { boundingBox(value: Rect): this { this.query().item().boundingBox = value; return this; } embedded(value: boolean): this { this.query().item().embedded = value; return this; } matrix(value: Matrix): this { this.query().item().matrix = value; return this; } overprint(value: boolean): this { this.query().item().overprint = value; return this; } }"}),r(e,{children:"class SetPlacedItemProperties extends SetPageItemProperties { file(value: File): this { this.query().item().file = value; return this; } matrix(value: Matrix): this { this.query().item().matrix = value; return this; } }"}),r(e,{children:"class SetSymbolItemProperties extends SetPageItemProperties { symbol(value: Symbol): this { this.query().item().symbol = value; return this; } }"}),r(e,{children:"class SetMeshItemProperties extends SetPageItemProperties { // MeshItem has no additional settable properties beyond PageItem } </antArtifact>"}),r(e,{children:"Usage examples:"}),r(h,{language:"typescript",children:`// CompoundPath (only PageItem properties)
compoundPathQuery.set()
    .opacity(80)
    .position([100, 100]);

// RasterItem
rasterQuery.set()
    .matrix(new Matrix())
    .embedded(true)
    .overprint(false);

// PlacedItem
placedQuery.set()
    .file(new File("path/to/file"))
    .matrix(new Matrix());

// SymbolItem
symbolQuery.set()
    .symbol(someSymbol)
    .opacity(80);

// MeshItem (only PageItem properties)
meshQuery.set()
    .locked(true)
    .position([50, 50]);`}),r(e,{children:"Each class includes the base PageItem properties and any additional settable properties specific to that item type."})]}),r(u,{identifier:"index-d",type:".txt",children:`/// <reference path="../../shared/global.d.ts" />\r
/// <reference path="../../shared/ScriptUI.d.ts" />\r
\r
/**\r
 * The screen mode.\r
 */\r
declare enum ScreenMode {\r
  /**\r
   * Full screen with menu bar.\r
   */\r
  DESKTOP = 2,\r
\r
  /**\r
   * Full screen without menu bar.\r
   */\r
  FULLSCREEN = 3,\r
\r
  /**\r
   * Display multiple windows.\r
   */\r
  MULTIWINDOW = 1,\r
}\r
\r
/**\r
 * The color model.\r
 */\r
declare enum ColorType {\r
  /**\r
   *\r
   */\r
  CMYK = 1,\r
\r
  /**\r
   *\r
   */\r
  GRADIENT = 4,\r
\r
  /**\r
   *\r
   */\r
  GRAY = 0,\r
\r
  /**\r
   *\r
   */\r
  None = 6,\r
\r
  /**\r
   *\r
   */\r
  PATTERN = 2,\r
\r
  /**\r
   *\r
   */\r
  RGB = 5,\r
\r
  /**\r
   *\r
   */\r
  SPOT = 3,\r
}\r
\r
/**\r
 * The color spaces available for documents.\r
 */\r
declare enum DocumentColorSpace {\r
  /**\r
   * CMYK document color space.\r
   */\r
  CMYK = 2,\r
\r
  /**\r
   * RGB document color space.\r
   */\r
  RGB = 1,\r
}\r
\r
/**\r
 * The preset types available for new documents.\r
 */\r
declare enum DocumentPresetType {\r
  /**\r
   * The default CMYK document preset.\r
   */\r
  BasicCMYK = 5,\r
\r
  /**\r
   * The default RGB document preset.\r
   */\r
  BasicRGB = 6,\r
\r
  /**\r
   * The default Mobile document preset.\r
   */\r
  Mobile = 3,\r
\r
  /**\r
   * The default Print document preset.\r
   */\r
  Print = 1,\r
\r
  /**\r
   * The default Video and Film document preset.\r
   */\r
  Video = 4,\r
\r
  /**\r
   * The default Web document preset.\r
   */\r
  Web = 2,\r
}\r
\r
/**\r
 * The raster resolutions available when creating a new document.\r
 */\r
declare enum DocumentRasterResolution {\r
  /**\r
   * High raster resolution, 300 PPI.\r
   */\r
  HighResolution = 3,\r
\r
  /**\r
   * Medium raster resolution, 150 PPI.\r
   */\r
  MediumResolution = 2,\r
\r
  /**\r
   * Low raster resolution, 72 PPI.\r
   */\r
  ScreenResolution = 1,\r
}\r
\r
/**\r
 * The transparency grid for the new document, in video presets.\r
 */\r
declare enum DocumentTransparencyGrid {\r
  /**\r
   * Blue grids.\r
   */\r
  TransparencyGridBlue = 7,\r
\r
  /**\r
   * Dark color grids.\r
   */\r
  TransparencyGridDark = 3,\r
\r
  /**\r
   * Green grids.\r
   */\r
  TransparencyGridGreen = 6,\r
\r
  /**\r
   * Light grid colors.\r
   */\r
  TransparencyGridLight = 1,\r
\r
  /**\r
   * Medium grid colors.\r
   */\r
  TransparencyGridMedium = 2,\r
\r
  /**\r
   * No grids.\r
   */\r
  TransparencyGridNone = 0,\r
\r
  /**\r
   * Orange grids.\r
   */\r
  TransparencyGridOrange = 5,\r
\r
  /**\r
   * Purple grids.\r
   */\r
  TransparencyGridPurple = 8,\r
\r
  /**\r
   * Red grids.\r
   */\r
  TransparencyGridRed = 4,\r
}\r
\r
/**\r
 * The preview modes available when creating a new document.\r
 */\r
declare enum DocumentPreviewMode {\r
  /**\r
   * Default Preview mode.\r
   */\r
  DefaultPreview = 1,\r
\r
  /**\r
   * Overprint Preview Mode.\r
   */\r
  OverprintPreview = 3,\r
\r
  /**\r
   * Pixel Preview mode.\r
   */\r
  PixelPreview = 2,\r
}\r
\r
/**\r
 * The layout of artboards in document.\r
 */\r
declare enum DocumentArtboardLayout {\r
  /**\r
   * Arrange artboards in a single column.\r
   */\r
  Column = 4,\r
\r
  /**\r
   * Arrange artboards in Grid by Column pattern.\r
   */\r
  GridByCol = 2,\r
\r
  /**\r
   * Arrange artboards in Grid by Row pattern.\r
   */\r
  GridByRow = 1,\r
\r
  /**\r
   * Arrange artboards in Grid by Column pattern from right-to-left.\r
   */\r
  RLGridByCol = 6,\r
\r
  /**\r
   * Arrange artboards in Grid by Row pattern from right-to-left.\r
   */\r
  RLGridByRow = 5,\r
\r
  /**\r
   * Arrange artboards in a single row from right-to-left.\r
   */\r
  RLRow = 7,\r
\r
  /**\r
   * Arrange artboards in a single row.\r
   */\r
  Row = 3,\r
}\r
\r
/**\r
 * The color space.\r
 */\r
declare enum ImageColorSpace {\r
  /**\r
   * CMYK color space.\r
   */\r
  CMYK = 3,\r
\r
  /**\r
   * DeviceN color space.\r
   */\r
  DeviceN = 6,\r
\r
  /**\r
   * Gray color space.\r
   */\r
  GrayScale = 1,\r
\r
  /**\r
   * Indexed color space.\r
   */\r
  Indexed = 7,\r
\r
  /**\r
   * LAB color space.\r
   */\r
  LAB = 4,\r
\r
  /**\r
   * RGB color space.\r
   */\r
  RGB = 2,\r
\r
  /**\r
   * Separation color space.\r
   */\r
  Separation = 5,\r
}\r
\r
/**\r
 * The stroke cap.\r
 */\r
declare enum StrokeCap {\r
  /**\r
   * Butted cap.\r
   */\r
  BUTTENDCAP = 1,\r
\r
  /**\r
   * Projecting cap.\r
   */\r
  PROJECTINGENDCAP = 3,\r
\r
  /**\r
   * Rounded cap.\r
   */\r
  ROUNDENDCAP = 2,\r
}\r
\r
/**\r
 * The stroke joint.\r
 */\r
declare enum StrokeJoin {\r
  /**\r
   * Beveled joints.\r
   */\r
  BEVELENDJOIN = 3,\r
\r
  /**\r
   * Mitered joints.\r
   */\r
  MITERENDJOIN = 1,\r
\r
  /**\r
   * Rounded joints.\r
   */\r
  ROUNDENDJOIN = 2,\r
}\r
\r
/**\r
 * The path point selection state.\r
 */\r
declare enum PathPointSelection {\r
  /**\r
   * Anchor point selected.\r
   */\r
  ANCHORPOINT = 2,\r
\r
  /**\r
   * Left direction point selected.\r
   */\r
  LEFTDIRECTION = 3,\r
\r
  /**\r
   * Left and right direction points selected.\r
   */\r
  LEFTRIGHTPOINT = 5,\r
\r
  /**\r
   * Path point not selected.\r
   */\r
  NOSELECTION = 1,\r
\r
  /**\r
   * Right direction point selected.\r
   */\r
  RIGHTDIRECTION = 4,\r
}\r
\r
/**\r
 * The path point type: smooth/corner.\r
 */\r
declare enum PointType {\r
  /**\r
   * Corner point.\r
   */\r
  CORNER = 2,\r
\r
  /**\r
   * Smooth path point.\r
   */\r
  SMOOTH = 1,\r
}\r
\r
/**\r
 * The type of text art.\r
 */\r
declare enum TextType {\r
  /**\r
   * Text within an area.\r
   */\r
  AREATEXT = 1,\r
\r
  /**\r
   * Text on a path.\r
   */\r
  PATHTEXT = 2,\r
\r
  /**\r
   * Text from a point.\r
   */\r
  POINTTEXT = 0,\r
}\r
\r
/**\r
 * The type of text antialiasing.\r
 */\r
declare enum TextAntialias {\r
  /**\r
   * Text on a path.\r
   */\r
  CRISP = 3,\r
\r
  /**\r
   * Text from a point.\r
   */\r
  NONE = 1,\r
\r
  /**\r
   * Text within an area.\r
   */\r
  SHARP = 2,\r
\r
  /**\r
   * Text on a path.\r
   */\r
  STRONG = 4,\r
}\r
\r
/**\r
 * The gradient type.\r
 */\r
declare enum GradientType {\r
  /**\r
   * Linear gradient.\r
   */\r
  LINEAR = 1,\r
\r
  /**\r
   *\r
   */\r
  RADIAL = 2,\r
}\r
\r
/**\r
 * The orientation.\r
 */\r
declare enum TextOrientation {\r
  /**\r
   * Horizontal orientation.\r
   */\r
  HORIZONTAL = 0,\r
\r
  /**\r
   * Vertical orientation.\r
   */\r
  VERTICAL = 1,\r
}\r
\r
/**\r
 * The crop style.\r
 */\r
declare enum CropOptions {\r
  /**\r
   * Japanese crop style.\r
   */\r
  Japanese = 2,\r
\r
  /**\r
   * Standard crop style.\r
   */\r
  Standard = 1,\r
}\r
\r
/**\r
 * The raster link state.\r
 */\r
declare enum RasterLinkState {\r
  /**\r
   * Image data is from the linked file.\r
   */\r
  DATAFROMFILE = 2,\r
\r
  /**\r
   * Image data has been modified.\r
   */\r
  DATAMODIFIED = 3,\r
\r
  /**\r
   * Image data is not set.\r
   */\r
  NODATA = 1,\r
}\r
\r
/**\r
 * The tab alignment.\r
 */\r
declare enum TabStopAlignment {\r
  /**\r
   *\r
   */\r
  Center = 1,\r
\r
  /**\r
   *\r
   */\r
  Decimal = 3,\r
\r
  /**\r
   *\r
   */\r
  Left = 0,\r
\r
  /**\r
   *\r
   */\r
  Right = 2,\r
}\r
\r
/**\r
 * The paragraph alignment.\r
 */\r
declare enum Justification {\r
  /**\r
   *\r
   */\r
  CENTER = 2,\r
\r
  /**\r
   *\r
   */\r
  FULLJUSTIFY = 6,\r
\r
  /**\r
   *\r
   */\r
  FULLJUSTIFYLASTLINECENTER = 5,\r
\r
  /**\r
   *\r
   */\r
  FULLJUSTIFYLASTLINELEFT = 3,\r
\r
  /**\r
   *\r
   */\r
  FULLJUSTIFYLASTLINERIGHT = 4,\r
\r
  /**\r
   *\r
   */\r
  LEFT = 0,\r
\r
  /**\r
   *\r
   */\r
  RIGHT = 1,\r
}\r
\r
/**\r
 * The transformation type.\r
 */\r
declare enum Transformation {\r
  /**\r
   * Transform relative to the object's bottom edge.\r
   */\r
  BOTTOM = 7,\r
\r
  /**\r
   * Transform relative to the object's bottom left corner.\r
   */\r
  BOTTOMLEFT = 4,\r
\r
  /**\r
   * Transform relative to the object's bottom right corner.\r
   */\r
  BOTTOMRIGHT = 10,\r
\r
  /**\r
   * Transform relative to the object's center.\r
   */\r
  CENTER = 6,\r
\r
  /**\r
   * Transform relative to the illustration's page origin.\r
   */\r
  DOCUMENTORIGIN = 1,\r
\r
  /**\r
   * Transform relative to the object's left edge.\r
   */\r
  LEFT = 3,\r
\r
  /**\r
   * Transform relative to the object's right edge.\r
   */\r
  RIGHT = 9,\r
\r
  /**\r
   * Transform relative to the object's top edge.\r
   */\r
  TOP = 5,\r
\r
  /**\r
   * Transform relative to the object's top left corner.\r
   */\r
  TOPLEFT = 2,\r
\r
  /**\r
   * Transform relative to the object's top right corner.\r
   */\r
  TOPRIGHT = 8,\r
}\r
\r
/**\r
 * Illustrator library types.\r
 */\r
declare enum LibraryType {\r
  /**\r
   * Illustrator brushes library.\r
   */\r
  BRUSHES = 3,\r
\r
  /**\r
   * Illustrator graphic styles library.\r
   */\r
  GRAPHICSTYLES = 4,\r
\r
  /**\r
   * Illustrator artwork.\r
   */\r
  ILLUSTRATORARTWORK = 1,\r
\r
  /**\r
   * Illustrator swatches library.\r
   */\r
  SWATCHES = 2,\r
\r
  /**\r
   * Illustrator symbols library.\r
   */\r
  SYMBOLS = 5,\r
}\r
\r
/**\r
 * Savable document types.\r
 */\r
declare enum DocumentType {\r
  /**\r
   * EPS file format.\r
   */\r
  EPS = 2,\r
\r
  /**\r
   * FXG file format.\r
   */\r
  FXG = 4,\r
\r
  /**\r
   * Illustrator file format.\r
   */\r
  ILLUSTRATOR = 1,\r
\r
  /**\r
   * Acrobat PDF file format.\r
   */\r
  PDF = 3,\r
}\r
\r
/**\r
 * Export file types.\r
 */\r
declare enum ExportType {\r
  /**\r
   * AutoCAD export file format.\r
   */\r
  AUTOCAD = 8,\r
\r
  /**\r
   * Flash export file format.\r
   */\r
  FLASH = 7,\r
\r
  /**\r
   * GIF export file format.\r
   */\r
  GIF = 6,\r
\r
  /**\r
   * JPEG export file format.\r
   */\r
  JPEG = 1,\r
\r
  /**\r
   * Photoshop export file format.\r
   */\r
  PHOTOSHOP = 2,\r
\r
  /**\r
   * PNG 24-bit export file format.\r
   */\r
  PNG24 = 5,\r
\r
  /**\r
   * PNG 8-bit export file format.\r
   */\r
  PNG8 = 4,\r
\r
  /**\r
   * SVG export file format.\r
   */\r
  SVG = 3,\r
\r
  /**\r
   * TIFF export file format.\r
   */\r
  TIFF = 9,\r
\r
  /**\r
   * Web Optimized SVG export file format.\r
   */\r
  WOSVG = 10,\r
}\r
\r
/**\r
 * Method used to reduce color for PNG8 and GIF export formats.\r
 */\r
declare enum ColorReductionMethod {\r
  /**\r
   *\r
   */\r
  ADAPTIVE = 0x41647074,\r
\r
  /**\r
   *\r
   */\r
  PERCEPTUAL = 0x50726370,\r
\r
  /**\r
   *\r
   */\r
  SELECTIVE = 0x536c7476,\r
\r
  /**\r
   *\r
   */\r
  WEB = 0x57656220,\r
}\r
\r
/**\r
 * Method used to dither colors for PNG8 and GIF export formats.\r
 */\r
declare enum ColorDitherMethod {\r
  /**\r
   *\r
   */\r
  DIFFUSION = 0x4466736e,\r
\r
  /**\r
   *\r
   */\r
  NOISE = 0x424e6f69,\r
\r
  /**\r
   * No dithering.\r
   */\r
  NOREDUCTION = 0x4e6f6e65,\r
\r
  /**\r
   *\r
   */\r
  PATTERNDITHER = 0x5074726e,\r
}\r
\r
/**\r
 * The compatibility type.\r
 */\r
declare enum Compatibility {\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR10 = 10,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR11 = 11,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR12 = 12,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR13 = 13,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR14 = 14,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR15 = 15,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR16 = 16,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR17 = 17,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR3 = 3,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR8 = 8,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR9 = 9,\r
\r
  /**\r
   *\r
   */\r
  JAPANESEVERSION3 = 3,\r
}\r
\r
/**\r
 * This provides a means for matching the color characteristics of a PDF document.\r
 */\r
declare enum PDFXStandard {\r
  /**\r
   * Supports only a CMYK and spot color workflow, targeted to a specific output device.\r
   */\r
  PDFX1A2001 = 2,\r
\r
  /**\r
   * Supports only a CMYK and spot color workflow, targeted to a specific output device.\r
   */\r
  PDFX1A2003 = 3,\r
\r
  /**\r
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.\r
   */\r
  PDFX32001 = 4,\r
\r
  /**\r
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.\r
   */\r
  PDFX32002 = 4,\r
\r
  /**\r
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.\r
   */\r
  PDFX32003 = 5,\r
\r
  /**\r
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.\r
   */\r
  PDFX42007 = 6,\r
\r
  /**\r
   * The user isn't complying with any PDF standard.\r
   */\r
  PDFXNONE = 1,\r
}\r
\r
/**\r
 * The PDF compatibility type.\r
 */\r
declare enum PDFCompatibility {\r
  /**\r
   * Acrobat version 4.\r
   */\r
  ACROBAT4 = 4,\r
\r
  /**\r
   * Acrobat version 5.\r
   */\r
  ACROBAT5 = 5,\r
\r
  /**\r
   * Acrobat version 6.\r
   */\r
  ACROBAT6 = 6,\r
\r
  /**\r
   * Acrobat version 7.\r
   */\r
  ACROBAT7 = 7,\r
\r
  /**\r
   * Acrobat version 8.\r
   */\r
  ACROBAT8 = 8,\r
}\r
\r
/**\r
 * The Photoshop compatibility type.\r
 */\r
declare enum PhotoshopCompatibility {\r
  /**\r
   * Photoshop version 6.\r
   */\r
  PHOTOSHOP6 = 2,\r
\r
  /**\r
   * Photoshop version 8.\r
   */\r
  PHOTOSHOP8 = 1,\r
}\r
\r
/**\r
 * The compression type.\r
 */\r
declare enum CompressionQuality {\r
  /**\r
   * Automatic JPEG2000 compression high.\r
   */\r
  AUTOMATICJPEG2000HIGH = 18,\r
\r
  /**\r
   * Automatic JPEG2000 compression lossless.\r
   */\r
  AUTOMATICJPEG2000LOSSLESS = 20,\r
\r
  /**\r
   * Automatic JPEG2000 compression low.\r
   */\r
  AUTOMATICJPEG2000LOW = 16,\r
\r
  /**\r
   * Automatic JPEG2000 compression maximum.\r
   */\r
  AUTOMATICJPEG2000MAXIMUM = 19,\r
\r
  /**\r
   * Automatic JPEG2000 compression medium.\r
   */\r
  AUTOMATICJPEG2000MEDIUM = 17,\r
\r
  /**\r
   * Automatic JPEG2000 compression minimum.\r
   */\r
  AUTOMATICJPEG2000MINIMUM = 15,\r
\r
  /**\r
   * Automatic JPEG compression high.\r
   */\r
  AUTOMATICJPEGHIGH = 13,\r
\r
  /**\r
   * Automatic JPEG compression low.\r
   */\r
  AUTOMATICJPEGLOW = 11,\r
\r
  /**\r
   * Automatic JPEG compression maximum.\r
   */\r
  AUTOMATICJPEGMAXIMUM = 14,\r
\r
  /**\r
   * Automatic JPEG compression medium.\r
   */\r
  AUTOMATICJPEGMEDIUM = 12,\r
\r
  /**\r
   * Automatically choose between JPEG and ZIP performing minimum compression depending on images.\r
   */\r
  AUTOMATICJPEGMINIMUM = 10,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000HIGH = 24,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000LOSSLESS = 26,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000LOW = 22,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000MAXIMUM = 25,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000MEDIUM = 23,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000MINIMUM = 21,\r
\r
  /**\r
   *\r
   */\r
  JPEGHIGH = 6,\r
\r
  /**\r
   *\r
   */\r
  JPEGLOW = 4,\r
\r
  /**\r
   *\r
   */\r
  JPEGMAXIMUM = 7,\r
\r
  /**\r
   *\r
   */\r
  JPEGMEDIUM = 5,\r
\r
  /**\r
   *\r
   */\r
  JPEGMINIMUM = 3,\r
\r
  /**\r
   * Automatic compression.\r
   */\r
  None = 1,\r
\r
  /**\r
   *\r
   */\r
  ZIP4BIT = 8,\r
\r
  /**\r
   *\r
   */\r
  ZIP8BIT = 9,\r
}\r
\r
/**\r
 * PDF color conversion policy.\r
 */\r
declare enum ColorConversion {\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORCONVERSIONREPURPOSE = 2,\r
\r
  /**\r
   * Converts all colors to the profile selected for Destination.\r
   */\r
  COLORCONVERSIONTODEST = 1,\r
\r
  /**\r
   * Preserves color data as is.\r
   */\r
  None = 0,\r
}\r
\r
/**\r
 * PDF destination profile.\r
 */\r
declare enum ColorDestination {\r
  /**\r
   * Converts all colors to the profile selected for Destination.\r
   */\r
  COLORDESTINATIONDOCCMYK = 1,\r
\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORDESTINATIONDOCRGB = 3,\r
\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORDESTINATIONPROFILE = 5,\r
\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORDESTINATIONWORKINGCMYK = 2,\r
\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORDESTINATIONWORKINGRGB = 4,\r
\r
  /**\r
   * N/A.\r
   */\r
  None = 0,\r
}\r
\r
/**\r
 * PDF ICC profile inclusion.\r
 */\r
declare enum ColorProfile {\r
  /**\r
   * Everything gets tagged (embedProfile == true)\r
   */\r
  INCLUDEALLPROFILE = 1,\r
\r
  /**\r
   * Everything ends up tagged with the destination profile.\r
   */\r
  INCLUDEDESTPROFILE = 4,\r
\r
  /**\r
   * Tag all RGB, leave CMYK unchanged.\r
   */\r
  INCLUDERGBPROFILE = 3,\r
\r
  /**\r
   * Leave tagged items tagged, untagged items untagged.\r
   */\r
  LEAVEPROFILEUNCHANGED = 2,\r
\r
  /**\r
   * All profiles removed (embedProfile == false)\r
   */\r
  None = 0,\r
}\r
\r
/**\r
 * The monochrome compression type.\r
 */\r
declare enum MonochromeCompression {\r
  /**\r
   * CCITT Group 3 compression.\r
   */\r
  CCIT3 = 1,\r
\r
  /**\r
   * CCITT Group 4 compression.\r
   */\r
  CCIT4 = 2,\r
\r
  /**\r
   * ZIP compression.\r
   */\r
  MONOZIP = 3,\r
\r
  /**\r
   * Automatic compression.\r
   */\r
  None = 0,\r
\r
  /**\r
   * RLE compression.\r
   */\r
  RUNLENGTH = 4,\r
}\r
\r
/**\r
 * Pdf trim mark weight options.\r
 */\r
declare enum PDFTrimMarkWeight {\r
  /**\r
   *\r
   */\r
  TRIMMARKWEIGHT0125 = 1,\r
\r
  /**\r
   *\r
   */\r
  TRIMMARKWEIGHT025 = 2,\r
\r
  /**\r
   *\r
   */\r
  TRIMMARKWEIGHT05 = 3,\r
}\r
\r
/**\r
 * Pdf overprint options.\r
 */\r
declare enum PDFOverprint {\r
  /**\r
   * Discard overprint.\r
   */\r
  DISCARDPDFOVERPRINT = 2,\r
\r
  /**\r
   * Preserve overprint.\r
   */\r
  PRESERVEPDFOVERPRINT = 1,\r
}\r
\r
/**\r
 * Pdf print permissions.\r
 */\r
declare enum PDFPrintAllowedEnum {\r
  /**\r
   * Print high resolution allowed - 128bit.\r
   */\r
  PRINT128HIGHRESOLUTION = 3,\r
\r
  /**\r
   * Print allowed only in low resolution - 128bit.\r
   */\r
  PRINT128LOWRESOLUTION = 2,\r
\r
  /**\r
   * Printing allowed none - 128bit.\r
   */\r
  PRINT128NONE = 1,\r
\r
  /**\r
   * Print high resolution allowed - 40bit.\r
   */\r
  PRINT40HIGHRESOLUTION = 5,\r
\r
  /**\r
   * Printing allowed none - 40bit.\r
   */\r
  PRINT40NONE = 4,\r
}\r
\r
/**\r
 * Options available for making changes to a pdf document.\r
 */\r
declare enum PDFChangesAllowedEnum {\r
  /**\r
   * Any changes allowed except extracting of pages- 128bit.\r
   */\r
  CHANGE128ANYCHANGES = 5,\r
\r
  /**\r
   * Comment allowed - 128bit.\r
   */\r
  CHANGE128COMMENTING = 4,\r
\r
  /**\r
   * Editing page allowed - 128bit.\r
   */\r
  CHANGE128EDITPAGE = 2,\r
\r
  /**\r
   * Filling in of form field and signing allowed - 128bit.\r
   */\r
  CHANGE128FILLFORM = 3,\r
\r
  /**\r
   * No changes allowed - 128bit.\r
   */\r
  CHANGE128NONE = 1,\r
\r
  /**\r
   * Any changes allowed except extracting of pages- 40bit.\r
   */\r
  CHANGE40ANYCHANGES = 9,\r
\r
  /**\r
   * Comment allowed - 40bit.\r
   */\r
  CHANGE40COMMENTING = 7,\r
\r
  /**\r
   * No changes allowed - 40bit.\r
   */\r
  CHANGE40NONE = 6,\r
\r
  /**\r
   * Page layout allowed - 40bit.\r
   */\r
  CHANGE40PAGELAYOUT = 8,\r
}\r
\r
/**\r
 * The resample type.\r
 */\r
declare enum DownsampleMethod {\r
  /**\r
   * Average Downsampling.\r
   */\r
  AVERAGEDOWNSAMPLE = 1,\r
\r
  /**\r
   * Bicubic Downsampling.\r
   */\r
  BICUBICDOWNSAMPLE = 3,\r
\r
  /**\r
   * Downsampling.\r
   */\r
  NODOWNSAMPLE = 0,\r
\r
  /**\r
   * Subsampling.\r
   */\r
  SUBSAMPLE = 2,\r
}\r
\r
/**\r
 * The preview type.\r
 */\r
declare enum EPSPreview {\r
  /**\r
   * Black and white Macintosh preview.\r
   */\r
  BWMACINTOSH = 2,\r
\r
  /**\r
   * Black and white PC preview.\r
   */\r
  BWTIFF = 4,\r
\r
  /**\r
   * Color Macintosh preview.\r
   */\r
  COLORMACINTOSH = 3,\r
\r
  /**\r
   * Color PC preview.\r
   */\r
  COLORTIFF = 6,\r
\r
  /**\r
   * No preview.\r
   */\r
  None = 1,\r
\r
  /**\r
   * Transparent color PC preview (8 or later)\r
   */\r
  TRANSPARENTCOLORTIFF = 5,\r
}\r
\r
/**\r
 * The PostScript levels available when saving EPS files.\r
 */\r
declare enum EPSPostScriptLevelEnum {\r
  /**\r
   * PostScript Level 2.\r
   */\r
  LEVEL2 = 2,\r
\r
  /**\r
   * PostScript Level 3.\r
   */\r
  LEVEL3 = 3,\r
}\r
\r
/**\r
 * The PostScript levels supported by various printers.\r
 */\r
declare enum PrinterPostScriptLevelEnum {\r
  /**\r
   * PostScript Level 1.\r
   */\r
  PSLEVEL1 = 1,\r
\r
  /**\r
   * PostScript Level 2.\r
   */\r
  PSLEVEL2 = 2,\r
\r
  /**\r
   * PostScript Level 3.\r
   */\r
  PSLEVEL3 = 3,\r
}\r
\r
/**\r
 * The options that may be applied when saving a file.\r
 */\r
declare enum SaveOptions {\r
  /**\r
   * Do not save changes.\r
   */\r
  DONOTSAVECHANGES = 2,\r
\r
  /**\r
   * Ask the user whether to save.\r
   */\r
  PROMPTTOSAVECHANGES = 3,\r
\r
  /**\r
   * Save changes.\r
   */\r
  SAVECHANGES = 1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum RulerUnits {\r
  /**\r
   * Ruler units are measured in centimeters.\r
   */\r
  Centimeters = 3,\r
\r
  /**\r
   * Ruler units are unknown.\r
   */\r
  Inches = 2,\r
\r
  /**\r
   * Ruler units are measured in millimeters.\r
   */\r
  Millimeters = 6,\r
\r
  /**\r
   * Ruler units are measured in picas.\r
   */\r
  Picas = 5,\r
\r
  /**\r
   * Ruler units are measured in pixels.\r
   */\r
  Pixels = 8,\r
\r
  /**\r
   * Ruler units are measured in points.\r
   */\r
  Points = 4,\r
\r
  /**\r
   * Ruler units are measured in Qs.\r
   */\r
  Qs = 7,\r
\r
  /**\r
   * Ruler units are unknown.\r
   */\r
  Unknown = 1,\r
}\r
\r
/**\r
 * Blend modes used when compositing an object.\r
 */\r
declare enum BlendModes {\r
  /**\r
   *\r
   */\r
  COLORBLEND = 14,\r
\r
  /**\r
   *\r
   */\r
  COLORBURN = 7,\r
\r
  /**\r
   *\r
   */\r
  COLORDODGE = 6,\r
\r
  /**\r
   *\r
   */\r
  DARKEN = 8,\r
\r
  /**\r
   *\r
   */\r
  DIFFERENCE = 10,\r
\r
  /**\r
   *\r
   */\r
  EXCLUSION = 11,\r
\r
  /**\r
   *\r
   */\r
  HARDLIGHT = 5,\r
\r
  /**\r
   *\r
   */\r
  HUE = 12,\r
\r
  /**\r
   *\r
   */\r
  LIGHTEN = 9,\r
\r
  /**\r
   *\r
   */\r
  LUMINOSITY = 15,\r
\r
  /**\r
   *\r
   */\r
  MULTIPLY = 1,\r
\r
  /**\r
   *\r
   */\r
  NORMAL = 0,\r
\r
  /**\r
   *\r
   */\r
  OVERLAY = 3,\r
\r
  /**\r
   *\r
   */\r
  SATURATIONBLEND = 13,\r
\r
  /**\r
   *\r
   */\r
  SCREEN = 2,\r
\r
  /**\r
   *\r
   */\r
  SOFTLIGHT = 4,\r
}\r
\r
/**\r
 * Knockout state of a page item.\r
 */\r
declare enum KnockoutState {\r
  /**\r
   * Knockout off.\r
   */\r
  DISABLED = 0,\r
\r
  /**\r
   * Knockout off.\r
   */\r
  ENABLED = 1,\r
\r
  /**\r
   * Knockout state inherited from group?\r
   */\r
  INHERITED = 2,\r
\r
  /**\r
   * Unknown/uninitialized knockout state.\r
   */\r
  Unknown = -1,\r
}\r
\r
/**\r
 * How to re-arrange the art item.\r
 */\r
declare enum ZOrderMethod {\r
  /**\r
   * Move art one step forward in it's group or layer.\r
   */\r
  BRINGFORWARD = 2,\r
\r
  /**\r
   * Move art to front of it's group or layer.\r
   */\r
  BRINGTOFRONT = 1,\r
\r
  /**\r
   * Move art one step backwards in it's group or layer.\r
   */\r
  SENDBACKWARD = 3,\r
\r
  /**\r
   * Move art to back of it's group or layer.\r
   */\r
  SENDTOBACK = 4,\r
}\r
\r
/**\r
 * The version of the SVG DTD.\r
 */\r
declare enum SVGDTDVersion {\r
  /**\r
   * SVG 1.0.\r
   */\r
  SVG1_0 = 1,\r
\r
  /**\r
   * SVG 1.1.\r
   */\r
  SVG1_1 = 2,\r
\r
  /**\r
   * SVG Basic 1.1.\r
   */\r
  SVGBASIC1_1 = 5,\r
\r
  /**\r
   * SVG Tiny 1.1.\r
   */\r
  SVGTINY1_1 = 3,\r
\r
  /**\r
   * SVG Tiny 1.1 Plus.\r
   */\r
  SVGTINY1_1PLUS = 4,\r
\r
  /**\r
   * SVG Tiny 1.2.\r
   */\r
  SVGTINY1_2 = 6,\r
}\r
\r
/**\r
 * What font type to include with the file?\r
 */\r
declare enum SVGFontType {\r
  /**\r
   *\r
   */\r
  OUTLINEFONT = 3,\r
\r
  /**\r
   *\r
   */\r
  SVGFONT = 2,\r
}\r
\r
/**\r
 * What fonts to include with the file?\r
 */\r
declare enum SVGFontSubsetting {\r
  /**\r
   *\r
   */\r
  ALLGLYPHS = 7,\r
\r
  /**\r
   *\r
   */\r
  COMMONENGLISH = 3,\r
\r
  /**\r
   *\r
   */\r
  COMMONROMAN = 5,\r
\r
  /**\r
   *\r
   */\r
  GLYPHSUSED = 2,\r
\r
  /**\r
   *\r
   */\r
  GLYPHSUSEDPLUSENGLISH = 4,\r
\r
  /**\r
   *\r
   */\r
  GLYPHSUSEDPLUSROMAN = 6,\r
\r
  /**\r
   * Use system fonts.\r
   */\r
  None = 1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum SVGDocumentEncoding {\r
  /**\r
   * ISO 8859-1.\r
   */\r
  ASCII = 1,\r
\r
  /**\r
   *\r
   */\r
  UTF16 = 3,\r
\r
  /**\r
   *\r
   */\r
  UTF8 = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum SVGCSSPropertyLocation {\r
  /**\r
   * Style attributes with entity reference.\r
   */\r
  ENTITIES = 2,\r
\r
  /**\r
   *\r
   */\r
  PRESENTATIONATTRIBUTES = 4,\r
\r
  /**\r
   *\r
   */\r
  STYLEATTRIBUTES = 1,\r
\r
  /**\r
   *\r
   */\r
  STYLEELEMENTS = 3,\r
}\r
\r
/**\r
 * Type of SVG Id.\r
 */\r
declare enum SVGIdType {\r
  /**\r
   * Style attributes with entity reference.\r
   */\r
  SVGIDMINIMAL = 0,\r
\r
  /**\r
   *\r
   */\r
  SVGIDREGULAR = 1,\r
\r
  /**\r
   *\r
   */\r
  SVGIDUNIQUE = 2,\r
}\r
\r
/**\r
 * Decide where the raster images will be stored.\r
 */\r
declare enum RasterImageLocation {\r
  /**\r
   * Embed the raster images in the svg file.\r
   */\r
  EMBED = 0,\r
\r
  /**\r
   *\r
   */\r
  LINK = 1,\r
\r
  /**\r
   *\r
   */\r
  PRESERVE = 2,\r
}\r
\r
/**\r
 * How should transparency be flattened for pre-AI9 file formats.\r
 */\r
declare enum OutputFlattening {\r
  /**\r
   *\r
   */\r
  PRESERVEAPPEARANCE = 1,\r
\r
  /**\r
   * Discard transparency.\r
   */\r
  PRESERVEPATHS = 0,\r
}\r
\r
/**\r
 * Color model of the custom color.\r
 */\r
declare enum ColorModel {\r
  /**\r
   * Process color (mixed ink)\r
   */\r
  PROCESS = 1,\r
\r
  /**\r
   * Registration color (prints on in all separations)\r
   */\r
  REGISTRATION = 0,\r
\r
  /**\r
   * Spot color (separate ink)\r
   */\r
  SPOT = 2,\r
}\r
\r
/**\r
 * Custom color kind of the spot color.\r
 */\r
declare enum SpotColorKind {\r
  /**\r
   * Solid ink, expressed in four CMYK values.\r
   */\r
  SPOTCMYK = 0,\r
\r
  /**\r
   * Lab color. Only valid for spot colors.\r
   */\r
  SPOTLAB = 2,\r
\r
  /**\r
   * Solid color, expressed as three RGB values.\r
   */\r
  SPOTRGB = 1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum FlashExportStyle {\r
  /**\r
   * Illustrator Artboards to Flash Files.\r
   */\r
  ARTBOARDSTOFILES = 5,\r
\r
  /**\r
   * Illustrator file to Flash file.\r
   */\r
  ASFLASHFILE = 1,\r
\r
  /**\r
   * Illustrator layers to Flash files.\r
   */\r
  LAYERSASFILES = 3,\r
\r
  /**\r
   * Illustrator layers to Flash frames.\r
   */\r
  LAYERSASFRAMES = 2,\r
\r
  /**\r
   * Illustrator layers to Flash Symbols.\r
   */\r
  LAYERSASSYMBOLS = 4,\r
}\r
\r
/**\r
 * How the arts should be clipped.\r
 */\r
declare enum ArtClippingOption {\r
  /**\r
   * Output size is the size of the artboard.\r
   */\r
  OUTPUTARTBOARDBOUNDS = 2,\r
\r
  /**\r
   * Output size is the size of the artwork.\r
   */\r
  OUTPUTARTBOUNDS = 1,\r
\r
  /**\r
   * Output size is the size of the crop area.\r
   */\r
  OUTPUTCROPRECTBOUNDS = 3,\r
}\r
\r
/**\r
 * Version of the SWF File to be exported.\r
 */\r
declare enum FlashExportVersion {\r
  /**\r
   * SWF Version 1.\r
   */\r
  FLASHVERSION1 = 1,\r
\r
  /**\r
   * SWF Version 2.\r
   */\r
  FLASHVERSION2 = 2,\r
\r
  /**\r
   * SWF Version 3.\r
   */\r
  FLASHVERSION3 = 3,\r
\r
  /**\r
   * SWF Version 4.\r
   */\r
  FLASHVERSION4 = 4,\r
\r
  /**\r
   * SWF Version 5.\r
   */\r
  FLASHVERSION5 = 5,\r
\r
  /**\r
   * SWF Version 6.\r
   */\r
  FLASHVERSION6 = 6,\r
\r
  /**\r
   * SWF Version 7.\r
   */\r
  FLASHVERSION7 = 7,\r
\r
  /**\r
   * SWF Version 8.\r
   */\r
  FLASHVERSION8 = 8,\r
\r
  /**\r
   * SWF Version 9.\r
   */\r
  FLASHVERSION9 = 9,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum FlashImageFormat {\r
  /**\r
   *\r
   */\r
  LOSSLESS = 1,\r
\r
  /**\r
   *\r
   */\r
  LOSSY = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum LayerOrderType {\r
  /**\r
   *\r
   */\r
  BOTTOMUP = 1,\r
\r
  /**\r
   *\r
   */\r
  TOPDOWN = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum BlendAnimationType {\r
  /**\r
   *\r
   */\r
  INBUILD = 2,\r
\r
  /**\r
   *\r
   */\r
  INSEQUENCE = 1,\r
\r
  /**\r
   * No blend animation.\r
   */\r
  NOBLENDANIMATION = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum FlashJPEGMethod {\r
  /**\r
   *\r
   */\r
  Optimized = 2,\r
\r
  /**\r
   *\r
   */\r
  Standard = 1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum FlashPlaybackSecurity {\r
  /**\r
   *\r
   */\r
  PlaybackLocal = 1,\r
\r
  /**\r
   *\r
   */\r
  PlaybackNetwork = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum VariableKind {\r
  /**\r
   *\r
   */\r
  GRAPH = 5,\r
\r
  /**\r
   *\r
   */\r
  IMAGE = 4,\r
\r
  /**\r
   *\r
   */\r
  TEXTUAL = 3,\r
\r
  /**\r
   *\r
   */\r
  Unknown = 1,\r
\r
  /**\r
   *\r
   */\r
  VISIBILITY = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADExportFileFormat {\r
  /**\r
   *\r
   */\r
  DWG = 1,\r
\r
  /**\r
   *\r
   */\r
  DXF = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADCompatibility {\r
  /**\r
   *\r
   */\r
  AutoCADRelease13 = 0,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease14 = 1,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease15 = 2,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease18 = 3,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease21 = 4,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease24 = 5,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADUnit {\r
  /**\r
   *\r
   */\r
  Centimeters = 4,\r
\r
  /**\r
   *\r
   */\r
  Inches = 2,\r
\r
  /**\r
   *\r
   */\r
  Millimeters = 3,\r
\r
  /**\r
   *\r
   */\r
  Picas = 1,\r
\r
  /**\r
   *\r
   */\r
  Pixels = 5,\r
\r
  /**\r
   *\r
   */\r
  Points = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADColors {\r
  /**\r
   *\r
   */\r
  Max16Colors = 1,\r
\r
  /**\r
   *\r
   */\r
  Max256Colors = 2,\r
\r
  /**\r
   *\r
   */\r
  Max8Colors = 0,\r
\r
  /**\r
   *\r
   */\r
  TrueColors = 3,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADRasterFormat {\r
  /**\r
   *\r
   */\r
  JPEG = 1,\r
\r
  /**\r
   *\r
   */\r
  PNG = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADExportOption {\r
  /**\r
   *\r
   */\r
  MaximumEditability = 1,\r
\r
  /**\r
   *\r
   */\r
  PreserveAppearance = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADGlobalScaleOption {\r
  /**\r
   *\r
   */\r
  FitArtboard = 1,\r
\r
  /**\r
   *\r
   */\r
  OriginalSize = 0,\r
\r
  /**\r
   *\r
   */\r
  ScaleByValue = 2,\r
}\r
\r
/**\r
 * Byte Order of TIFF file.\r
 */\r
declare enum TIFFByteOrder {\r
  /**\r
   *\r
   */\r
  IBMPC = 0,\r
\r
  /**\r
   *\r
   */\r
  MACINTOSH = 1,\r
}\r
\r
/**\r
 * COM user interaction enumeration.\r
 */\r
declare enum UserInteractionLevel {\r
  /**\r
   *\r
   */\r
  DISPLAYALERTS = 2,\r
\r
  /**\r
   *\r
   */\r
  DONTDISPLAYALERTS = -1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum PolarityValues {\r
  /**\r
   *\r
   */\r
  NEGATIVE = -1,\r
\r
  /**\r
   *\r
   */\r
  POSITIVE = 1,\r
}\r
\r
/**\r
 * When should a JavaScript debugger be shown.\r
 */\r
declare enum JavaScriptExecutionMode {\r
  /**\r
   * Show the JavaScript debugger at the first line of the JavaScript.\r
   */\r
  BeforeRunning = 3,\r
\r
  /**\r
   * Show the JavaScript debugger is a runtime error occurs.\r
   */\r
  OnRuntimeError = 2,\r
\r
  /**\r
   * Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.\r
   */\r
  never = 1,\r
}\r
\r
/**\r
 * The artwork layers/objects to be printed.\r
 */\r
declare enum PrintArtworkDesignation {\r
  /**\r
   * Print all layers.\r
   */\r
  ALLLAYERS = 2,\r
\r
  /**\r
   * Print visible layers.\r
   */\r
  VISIBLELAYERS = 1,\r
\r
  /**\r
   * Print visible printable layers.\r
   */\r
  VISIBLEPRINTABLELAYERS = 0,\r
}\r
\r
/**\r
 * The printing bounds type.\r
 */\r
declare enum PrintingBounds {\r
  /**\r
   * Use artboard bounds.\r
   */\r
  ARTBOARDBOUNDS = 0,\r
\r
  /**\r
   * Use artwork bounds.\r
   */\r
  ARTWORKBOUNDS = 1,\r
\r
  /**\r
   * Use crop bounds.\r
   */\r
  CROPBOUNDS = 2,\r
}\r
\r
/**\r
 * The color separation mode.\r
 */\r
declare enum PrintColorSeparationMode {\r
  /**\r
   * The composite mode.\r
   */\r
  COMPOSITE = 0,\r
\r
  /**\r
   * The host based color separation mode.\r
   */\r
  HOSTBASEDSEPARATION = 1,\r
\r
  /**\r
   * The InRIP color separation mode.\r
   */\r
  INRIPSEPARATION = 2,\r
}\r
\r
/**\r
 * The artwork printing orientation.\r
 */\r
declare enum PrintOrientation {\r
  /**\r
   * Auto Rotate.\r
   */\r
  AUTOROTATE = 4,\r
\r
  /**\r
   * Landscape.\r
   */\r
  LANDSCAPE = 1,\r
\r
  /**\r
   * Portrait.\r
   */\r
  PORTRAIT = 0,\r
\r
  /**\r
   * Reverse landscape.\r
   */\r
  REVERSELANDSCAPE = 3,\r
\r
  /**\r
   * Reverse portrait.\r
   */\r
  REVERSEPORTRAIT = 2,\r
}\r
\r
/**\r
 * The artwork printing position on media.\r
 */\r
declare enum PrintPosition {\r
  /**\r
   * Translate to the bottom center of media.\r
   */\r
  TRANSLATEBOTTOM = 8,\r
\r
  /**\r
   * Translate to the bottom left of media.\r
   */\r
  TRANSLATEBOTTOMLEFT = 7,\r
\r
  /**\r
   * Translate to the bottom right of media.\r
   */\r
  TRANSLATEBOTTOMRIGHT = 9,\r
\r
  /**\r
   * Translate to the center of media.\r
   */\r
  TRANSLATECENTER = 5,\r
\r
  /**\r
   * Translate to the left center of media.\r
   */\r
  TRANSLATELEFT = 4,\r
\r
  /**\r
   * Translate to the right center of media.\r
   */\r
  TRANSLATERIGHT = 6,\r
\r
  /**\r
   * Translate to the top center of media.\r
   */\r
  TRANSLATETOP = 2,\r
\r
  /**\r
   * Translate to the top left of media.\r
   */\r
  TRANSLATETOPLEFT = 1,\r
\r
  /**\r
   * Translate to the top right of media.\r
   */\r
  TRANSLATETOPRIGHT = 3,\r
}\r
\r
/**\r
 * The page tiling type.\r
 */\r
declare enum PrintTiling {\r
  /**\r
   * Tile full pages.\r
   */\r
  TILEFULLPAGES = 1,\r
\r
  /**\r
   * Tile imageable areas.\r
   */\r
  TILEIMAGEABLEAREAS = 2,\r
\r
  /**\r
   * Tile single full page.\r
   */\r
  TILESINGLEFULLPAGE = 0,\r
}\r
\r
/**\r
 * The page marks style type.\r
 */\r
declare enum PageMarksTypes {\r
  /**\r
   * Japanese page marks style.\r
   */\r
  Japanese = 1,\r
\r
  /**\r
   * Roman page marks style.\r
   */\r
  Roman = 0,\r
}\r
\r
/**\r
 * The printer font download mode.\r
 */\r
declare enum PrintFontDownloadMode {\r
  /**\r
   * Download complete.\r
   */\r
  DOWNLOADCOMPLETE = 2,\r
\r
  /**\r
   * Download none.\r
   */\r
  DOWNLOADNONE = 0,\r
\r
  /**\r
   * Download subset.\r
   */\r
  DOWNLOADSUBSET = 1,\r
}\r
\r
/**\r
 * The font substitution policy.\r
 */\r
declare enum FontSubstitutionPolicy {\r
  /**\r
   * Substitute device font.\r
   */\r
  SUBSTITUTEDEVICE = 2,\r
\r
  /**\r
   * Substitute oblique font.\r
   */\r
  SUBSTITUTEOBLIQUE = 0,\r
\r
  /**\r
   * Substitute tint font.\r
   */\r
  SUBSTITUTETINT = 1,\r
}\r
\r
/**\r
 * The PostScript image compression type.\r
 */\r
declare enum PostScriptImageCompressionType {\r
  /**\r
   * No image compression.\r
   */\r
  IMAGECOMPRESSIONNONE = 0,\r
\r
  /**\r
   * JPEG image compression.\r
   */\r
  JPEG = 2,\r
\r
  /**\r
   * RLE image compression.\r
   */\r
  RLE = 1,\r
}\r
\r
/**\r
 * The color profile type.\r
 */\r
declare enum PrintColorProfile {\r
  /**\r
   * Use custom color profile.\r
   */\r
  CUSTOMPROFILE = 3,\r
\r
  /**\r
   * Use old style AI color profile.\r
   */\r
  OLDSTYLEPROFILE = 0,\r
\r
  /**\r
   * Same as printer color profile.\r
   */\r
  PRINTERPROFILE = 2,\r
\r
  /**\r
   * Same as source color profile.\r
   */\r
  SOURCEPROFILE = 1,\r
}\r
\r
/**\r
 * The color intent type.\r
 */\r
declare enum PrintColorIntent {\r
  /**\r
   * Absolute colorimetric.\r
   */\r
  ABSOLUTECOLORIMETRIC = 3,\r
\r
  /**\r
   * Perceptual color intent.\r
   */\r
  PERCEPTUALINTENT = 0,\r
\r
  /**\r
   * Relative colorimetric.\r
   */\r
  RELATIVECOLORIMETRIC = 2,\r
\r
  /**\r
   * Saturation color intent.\r
   */\r
  SATURATIONINTENT = 1,\r
}\r
\r
/**\r
 * The printer type.\r
 */\r
declare enum PrinterTypeEnum {\r
  /**\r
   * Non PostScript printer.\r
   */\r
  NONPOSTSCRIPTPRINTER = 2,\r
\r
  /**\r
   * PostScript printer.\r
   */\r
  POSTSCRIPTPRINTER = 1,\r
\r
  /**\r
   * Unknown printer type.\r
   */\r
  Unknown = 0,\r
}\r
\r
/**\r
 * The printer color mode.\r
 */\r
declare enum PrinterColorMode {\r
  /**\r
   * Black and white printer.\r
   */\r
  BLACKANDWHITEPRINTER = 2,\r
\r
  /**\r
   * Color printer.\r
   */\r
  COLORPRINTER = 0,\r
\r
  /**\r
   * Grayscale printer.\r
   */\r
  GRAYSCALEPRINTER = 1,\r
}\r
\r
/**\r
 * The ink printing status.\r
 */\r
declare enum InkPrintStatus {\r
  /**\r
   * Convert to process color during print.\r
   */\r
  CONVERTINK = 2,\r
\r
  /**\r
   * Disable the ink during print.\r
   */\r
  DISABLEINK = 0,\r
\r
  /**\r
   * Enable the ink during print.\r
   */\r
  ENABLEINK = 1,\r
}\r
\r
/**\r
 * The ink type.\r
 */\r
declare enum InkType {\r
  /**\r
   * Black color ink.\r
   */\r
  BLACKINK = 3,\r
\r
  /**\r
   * Custom color ink.\r
   */\r
  CUSTOMINK = 4,\r
\r
  /**\r
   * Cyan color ink.\r
   */\r
  CYANINK = 0,\r
\r
  /**\r
   * Magenta color ink.\r
   */\r
  MAGENTAINK = 1,\r
\r
  /**\r
   * Yellow color ink.\r
   */\r
  YELLOWINK = 2,\r
}\r
\r
/**\r
 * The trapping type.\r
 */\r
declare enum TrappingType {\r
  /**\r
   * Ignore opaque trapping type.\r
   */\r
  IGNOREOPAQUE = 3,\r
\r
  /**\r
   * Normal trapping type.\r
   */\r
  NORMALTRAPPING = 0,\r
\r
  /**\r
   * Opaque trapping type.\r
   */\r
  OPAQUE = 2,\r
\r
  /**\r
   * Transparent trapping type.\r
   */\r
  TRANSPARENT = 1,\r
}\r
\r
/**\r
 * The auto kern type.\r
 */\r
declare enum AutoKernType {\r
  /**\r
   * Auto kerning.\r
   */\r
  AUTO = 1,\r
\r
  /**\r
   * Metrics roman only.\r
   */\r
  METRICSROMANONLY = 3,\r
\r
  /**\r
   * No auto kerning.\r
   */\r
  NOAUTOKERN = 0,\r
\r
  /**\r
   * Optical kerning.\r
   */\r
  OPTICAL = 2,\r
}\r
\r
/**\r
 * The auto leading type.\r
 */\r
declare enum AutoLeadingType {\r
  /**\r
   * Roman leading type.\r
   */\r
  BOTTOMTOBOTTOM = 0,\r
\r
  /**\r
   * Japanese leading type.\r
   */\r
  TOPTOTOP = 1,\r
}\r
\r
/**\r
 * The case change type.\r
 */\r
declare enum CaseChangeType {\r
  /**\r
   * Change to lower case.\r
   */\r
  LOWERCASE = 1,\r
\r
  /**\r
   * Change to sentence case.\r
   */\r
  SENTENCECASE = 3,\r
\r
  /**\r
   * Change to title case.\r
   */\r
  TITLECASE = 2,\r
\r
  /**\r
   * Change to upper case.\r
   */\r
  UPPERCASE = 0,\r
}\r
\r
/**\r
 * The font capitalization option.\r
 */\r
declare enum FontCapsOption {\r
  /**\r
   * All caps.\r
   */\r
  ALLCAPS = 2,\r
\r
  /**\r
   * All small caps.\r
   */\r
  ALLSMALLCAPS = 3,\r
\r
  /**\r
   * Normal caps.\r
   */\r
  NORMALCAPS = 0,\r
\r
  /**\r
   * Small caps.\r
   */\r
  SMALLCAPS = 1,\r
}\r
\r
/**\r
 * The font baseline option.\r
 */\r
declare enum FontBaselineOption {\r
  /**\r
   * Normal baseline.\r
   */\r
  NORMALBASELINE = 0,\r
\r
  /**\r
   * Fauxed subscript baseline.\r
   */\r
  SUBSCRIPT = 2,\r
\r
  /**\r
   * Fauxed superscript baseline.\r
   */\r
  SUPERSCRIPT = 1,\r
}\r
\r
/**\r
 * The OpenType font position option.\r
 */\r
declare enum FontOpenTypePositionOption {\r
  /**\r
   * OpenType denominator position.\r
   */\r
  DENOMINATOR = 4,\r
\r
  /**\r
   * OpenType numerator position.\r
   */\r
  NUMERATOR = 3,\r
\r
  /**\r
   * Default position.\r
   */\r
  OPENTYPEDEFAULT = 0,\r
\r
  /**\r
   * OpenType subscript position.\r
   */\r
  OPENTYPESUBSCRIPT = 2,\r
\r
  /**\r
   * OpenType superscript position.\r
   */\r
  OPENTYPESUPERSCRIPT = 1,\r
}\r
\r
/**\r
 * The figure style type.\r
 */\r
declare enum FigureStyleType {\r
  /**\r
   * Default figure style.\r
   */\r
  DEFAULTFIGURESTYLE = 0,\r
\r
  /**\r
   * Proportional lining style.\r
   */\r
  PROPORTIONAL = 3,\r
\r
  /**\r
   * Proportional oldstyle.\r
   */\r
  PROPORTIONALOLDSTYLE = 2,\r
\r
  /**\r
   * Tabular lining style.\r
   */\r
  TABULAR = 1,\r
\r
  /**\r
   * Tabular oldstyle.\r
   */\r
  TABULAROLDSTYLE = 4,\r
}\r
\r
/**\r
 * The baseline direction type.\r
 */\r
declare enum BaselineDirectionType {\r
  /**\r
   *\r
   */\r
  Standard = 1,\r
\r
  /**\r
   *\r
   */\r
  TateChuYoko = 3,\r
\r
  /**\r
   *\r
   */\r
  VerticalRotated = 2,\r
}\r
\r
/**\r
 * The language of text.\r
 */\r
declare enum LanguageType {\r
  /**\r
   *\r
   */\r
  ARABIC = 39,\r
\r
  /**\r
   *\r
   */\r
  BENGALIINDIA = 51,\r
\r
  /**\r
   *\r
   */\r
  BOKMALNORWEGIAN = 8,\r
\r
  /**\r
   *\r
   */\r
  BRAZILLIANPORTUGUESE = 11,\r
\r
  /**\r
   *\r
   */\r
  BULGARIAN = 20,\r
\r
  /**\r
   *\r
   */\r
  CANADIANFRENCH = 3,\r
\r
  /**\r
   *\r
   */\r
  CATALAN = 17,\r
\r
  /**\r
   *\r
   */\r
  CHINESE = 29,\r
\r
  /**\r
   *\r
   */\r
  CZECH = 22,\r
\r
  /**\r
   *\r
   */\r
  DANISH = 16,\r
\r
  /**\r
   *\r
   */\r
  DUTCH = 15,\r
\r
  /**\r
   *\r
   */\r
  DUTCH2005REFORM = 43,\r
\r
  /**\r
   *\r
   */\r
  ENGLISH = 0,\r
\r
  /**\r
   *\r
   */\r
  FARSI = 41,\r
\r
  /**\r
   *\r
   */\r
  FINNISH = 1,\r
\r
  /**\r
   *\r
   */\r
  GERMAN2006REFORM = 42,\r
\r
  /**\r
   *\r
   */\r
  GREEK = 25,\r
\r
  /**\r
   *\r
   */\r
  GUJARATI = 53,\r
\r
  /**\r
   *\r
   */\r
  HINDI = 49,\r
\r
  /**\r
   *\r
   */\r
  HUNGARIAN = 28,\r
\r
  /**\r
   *\r
   */\r
  ICELANDIC = 27,\r
\r
  /**\r
   *\r
   */\r
  ITALIAN = 7,\r
\r
  /**\r
   *\r
   */\r
  JAPANESE = 30,\r
\r
  /**\r
   *\r
   */\r
  KANNADA = 57,\r
\r
  /**\r
   *\r
   */\r
  MALAYALAM = 58,\r
\r
  /**\r
   *\r
   */\r
  MARATHI = 50,\r
\r
  /**\r
   * Nynorsk Norwegian.\r
   */\r
  NYNORSKNORWEGIAN = 9,\r
\r
  /**\r
   *\r
   */\r
  OLDGERMAN = 5,\r
\r
  /**\r
   *\r
   */\r
  ORIYA = 54,\r
\r
  /**\r
   *\r
   */\r
  POLISH = 23,\r
\r
  /**\r
   *\r
   */\r
  PUNJABI = 52,\r
\r
  /**\r
   *\r
   */\r
  RUMANIAN = 24,\r
\r
  /**\r
   *\r
   */\r
  RUSSIAN = 18,\r
\r
  /**\r
   *\r
   */\r
  SERBIAN = 21,\r
\r
  /**\r
   *\r
   */\r
  SPANISH = 12,\r
\r
  /**\r
   *\r
   */\r
  STANDARDFRENCH = 2,\r
\r
  /**\r
   *\r
   */\r
  STANDARDGERMAN = 4,\r
\r
  /**\r
   *\r
   */\r
  STANDARDPORTUGUESE = 10,\r
\r
  /**\r
   *\r
   */\r
  SWEDISH = 13,\r
\r
  /**\r
   *\r
   */\r
  SWISSGERMAN = 6,\r
\r
  /**\r
   *\r
   */\r
  SWISSGERMAN2006REFORM = 44,\r
\r
  /**\r
   *\r
   */\r
  TAMIL = 55,\r
\r
  /**\r
   *\r
   */\r
  TELUGU = 56,\r
\r
  /**\r
   *\r
   */\r
  TURKISH = 26,\r
\r
  /**\r
   *\r
   */\r
  UKENGLISH = 14,\r
\r
  /**\r
   *\r
   */\r
  UKRANIAN = 19,\r
}\r
\r
/**\r
 * The alternate glyphs form of text.\r
 */\r
declare enum AlternateGlyphsForm {\r
  /**\r
   *\r
   */\r
  DEFAULTFORM = 0,\r
\r
  /**\r
   *\r
   */\r
  EXPERT = 2,\r
\r
  /**\r
   *\r
   */\r
  FULLWIDTH = 8,\r
\r
  /**\r
   *\r
   */\r
  HALFWIDTH = 5,\r
\r
  /**\r
   *\r
   */\r
  JIS04FORM = 11,\r
\r
  /**\r
   *\r
   */\r
  JIS78FORM = 3,\r
\r
  /**\r
   *\r
   */\r
  JIS83FORM = 4,\r
\r
  /**\r
   *\r
   */\r
  JIS90FORM = 10,\r
\r
  /**\r
   *\r
   */\r
  PROPORTIONALWIDTH = 9,\r
\r
  /**\r
   *\r
   */\r
  QUARTERWIDTH = 7,\r
\r
  /**\r
   *\r
   */\r
  THIRDWIDTH = 6,\r
\r
  /**\r
   *\r
   */\r
  TRADITIONAL = 1,\r
}\r
\r
/**\r
 * The style run alignment.\r
 */\r
declare enum StyleRunAlignmentType {\r
  /**\r
   *\r
   */\r
  ROMANBASELINE = 2,\r
\r
  /**\r
   *\r
   */\r
  bottom = 0,\r
\r
  /**\r
   *\r
   */\r
  center = 3,\r
\r
  /**\r
   *\r
   */\r
  icfBottom = 1,\r
\r
  /**\r
   *\r
   */\r
  icfTop = 4,\r
\r
  /**\r
   *\r
   */\r
  top = 5,\r
}\r
\r
/**\r
 * The Wari-Chu alignment type.\r
 */\r
declare enum WariChuJustificationType {\r
  /**\r
   *\r
   */\r
  Center = 2,\r
\r
  /**\r
   *\r
   */\r
  Left = 0,\r
\r
  /**\r
   *\r
   */\r
  Right = 1,\r
\r
  /**\r
   *\r
   */\r
  WARICHUAUTOJUSTIFY = 7,\r
\r
  /**\r
   *\r
   */\r
  WARICHUFULLJUSTIFY = 6,\r
\r
  /**\r
   *\r
   */\r
  WARICHUFULLJUSTIFYLASTLINECENTER = 5,\r
\r
  /**\r
   *\r
   */\r
  WARICHUFULLJUSTIFYLASTLINELEFT = 3,\r
\r
  /**\r
   *\r
   */\r
  WARICHUFULLJUSTIFYLASTLINERIGHT = 4,\r
}\r
\r
/**\r
 * The Burasagari type.\r
 */\r
declare enum BurasagariTypeEnum {\r
  /**\r
   *\r
   */\r
  Forced = 2,\r
\r
  /**\r
   *\r
   */\r
  None = 0,\r
\r
  /**\r
   *\r
   */\r
  Standard = 1,\r
}\r
\r
/**\r
 * The preferred Kinsoku order.\r
 */\r
declare enum KinsokuOrderEnum {\r
  /**\r
   *\r
   */\r
  PUSHIN = 0,\r
\r
  /**\r
   *\r
   */\r
  PUSHOUTFIRST = 1,\r
\r
  /**\r
   *\r
   */\r
  PUSHOUTONLY = 2,\r
}\r
\r
/**\r
 * Crop box.\r
 */\r
declare enum PDFBoxType {\r
  /**\r
   * Crop to ArtBox. The art box defines the extent of the page's meaningful content (including potential white space) as intended by the page's creator.\r
   */\r
  PDFARTBOX = 0,\r
\r
  /**\r
   * Crop to BleedBox. The bleed box defines the region to which the contents of the page should be clipped when output in a production environment.\r
   */\r
  PDFBLEEDBOX = 3,\r
\r
  /**\r
   * Crop to Bounding Box. The bounding box is the rectangle that encloses all text, graphics, and images on the page.\r
   */\r
  PDFBOUNDINGBOX = 5,\r
\r
  /**\r
   * Crop to CropBox. The crop box is the region of the page to display and to print.\r
   */\r
  PDFCROPBOX = 1,\r
\r
  /**\r
   * Crop to MediaBox. The media box is a natural size of the page. For example, the dimensions of A4 sheet of paper.\r
   */\r
  PDFMEDIABOX = 4,\r
\r
  /**\r
   * Crop to TrimBox. The trim box specifies the positioning of the page's content within the imposition.\r
   */\r
  PDFTRIMBOX = 2,\r
}\r
\r
/**\r
 * The tracing method: abutting and overlapping.\r
 */\r
declare enum TracingMethodType {\r
  /**\r
   * Tracing abutting method.\r
   */\r
  TRACINGMETHODABUTTING = 0,\r
\r
  /**\r
   * Tracing overlapping method.\r
   */\r
  TRACINGMETHODOVERLAPPING = 1,\r
}\r
\r
/**\r
 * The tracing mode: color, grayscale, black and white.\r
 */\r
declare enum TracingModeType {\r
  /**\r
   * Black and white tracing mode.\r
   */\r
  TRACINGMODEBLACKANDWHITE = 2,\r
\r
  /**\r
   * Color tracing mode.\r
   */\r
  TRACINGMODECOLOR = 0,\r
\r
  /**\r
   * Grayscale tracing mode.\r
   */\r
  TRACINGMODEGRAY = 1,\r
}\r
\r
/**\r
 * The input color type Full Color or Limited colors.\r
 */\r
declare enum TracingColorType {\r
  /**\r
   * Use Full colors for Tracing.\r
   */\r
  TRACINGFULLCOLOR = 1,\r
\r
  /**\r
   * Use Limited colors for Tracing.\r
   */\r
  TRACINGLIMITEDCOLOR = 0,\r
}\r
\r
/**\r
 * Controls the type of vector view.\r
 */\r
declare enum ViewType {\r
  /**\r
   * View Source Image.\r
   */\r
  TRACINGVIEWIMAGE = 4,\r
\r
  /**\r
   * View just the paths.\r
   */\r
  TRACINGVIEWVECTOROUTLINES = 2,\r
\r
  /**\r
   * View paths and transparent fills.\r
   */\r
  TRACINGVIEWVECTOROUTLINESWITHTRACING = 1,\r
\r
  /**\r
   * View artwork.\r
   */\r
  TRACINGVIEWVECTORTRACINGRESULT = 0,\r
\r
  /**\r
   * View Outlines with Transparent Image.\r
   */\r
  TRACINGVIEWVECTORWITHTRANSPARENTIMAGE = 3,\r
}\r
\r
/**\r
 * Controls the color model for the rasterization.\r
 */\r
declare enum RasterizationColorModel {\r
  /**\r
   * Rasterize as 1-bit bitmap.\r
   */\r
  BITMAP = 3,\r
\r
  /**\r
   * Rasterize in the default document color space.\r
   */\r
  DEFAULTCOLORMODEL = 1,\r
\r
  /**\r
   * Rasterize as grayscale image.\r
   */\r
  GRAYSCALE = 2,\r
}\r
\r
/**\r
 * Controls the type of antialiasing method used in the rasterization.\r
 */\r
declare enum AntiAliasingMethod {\r
  /**\r
   * Optimize for the art object.\r
   */\r
  ARTOPTIMIZED = 1,\r
\r
  /**\r
   * No anti-aliasing allowed.\r
   */\r
  None = 0,\r
\r
  /**\r
   * Optimize for the type object.\r
   */\r
  TYPEOPTIMIZED = 2,\r
}\r
\r
/**\r
 * Denotes the purpose of color conversion using ConvertSmapleColor method.\r
 */\r
declare enum ColorConvertPurpose {\r
  /**\r
   * Do standard conversion, without black preservation.\r
   */\r
  defaultpurpose = 0,\r
\r
  /**\r
   * Dummy option.\r
   */\r
  dummypurpose = 4,\r
\r
  /**\r
   * Conversion options appropriate to creating an image for print or export.\r
   */\r
  exportpurpose = 2,\r
\r
  /**\r
   * Conversion options appropriate to creating an image for screen display.\r
   */\r
  previewpurpose = 1,\r
}\r
\r
/**\r
 * The FXG file format version.\r
 */\r
declare enum FXGVersion {\r
  /**\r
   * FXG version 1.0.\r
   */\r
  VERSION1PT0 = 1,\r
\r
  /**\r
   * FXG version 2.0.\r
   */\r
  VERSION2PT0 = 2,\r
}\r
\r
/**\r
 * Filters preserve policy used by FXG file format.\r
 */\r
declare enum FiltersPreservePolicy {\r
  /**\r
   * Preserve the appearance of filters by expanding it.\r
   */\r
  EXPANDFILTERS = 1,\r
\r
  /**\r
   * Preserve the editability of filters.\r
   */\r
  KEEPFILTERSEDITABLE = 3,\r
\r
  /**\r
   * Preserve the appearance of filters by rasterizing it.\r
   */\r
  RASTERIZEFILTERS = 2,\r
}\r
\r
/**\r
 * Text preserve policy used by FXG file format.\r
 */\r
declare enum TextPreservePolicy {\r
  /**\r
   * Automatically convert text.\r
   */\r
  AUTOMATICALLYCONVERTTEXT = 4,\r
\r
  /**\r
   * Preserve the editability of text.\r
   */\r
  KEEPTEXTEDITABLE = 3,\r
\r
  /**\r
   * Preserve the appearance of text by outlining it.\r
   */\r
  OUTLINETEXT = 1,\r
\r
  /**\r
   * Preserve the appearance of text by rasterizing it.\r
   */\r
  RASTERIZETEXT = 2,\r
}\r
\r
/**\r
 * Gradients preserve policy used by FXG file format.\r
 */\r
declare enum GradientsPreservePolicy {\r
  /**\r
   * Automatically Convert Gradients.\r
   */\r
  AUTOMATICALLYCONVERTGRADIENTS = 4,\r
\r
  /**\r
   * Preserve the editability of gradients.\r
   */\r
  KEEPGRADIENTSEDITABLE = 3,\r
}\r
\r
/**\r
 * Blends Expand policy used by FXG file format.\r
 */\r
declare enum BlendsExpandPolicy {\r
  /**\r
   * Automatically Convert Blends.\r
   */\r
  AUTOMATICALLYCONVERTBLENDS = 1,\r
\r
  /**\r
   * Expand Blends by Rasterizing.\r
   */\r
  RASTERIZEBLENDS = 2,\r
}\r
\r
/**\r
 * Coordinate system used by Illustrator.\r
 */\r
declare enum CoordinateSystem {\r
  /**\r
   * Artboard coordinate system.\r
   */\r
  ARTBOARDCOORDINATESYSTEM = 1,\r
\r
  /**\r
   * Document coordinate system.\r
   */\r
  DOCUMENTCOORDINATESYSTEM = 0,\r
}\r
\r
/**\r
 * The symbol registration point.\r
 */\r
declare enum SymbolRegistrationPoint {\r
  /**\r
   * Bottom left point of symbol bounding box.\r
   */\r
  SYMBOLBOTTOMLEFTPOINT = 7,\r
\r
  /**\r
   * Bottom middle point of symbol bounding box.\r
   */\r
  SYMBOLBOTTOMMIDDLEPOINT = 8,\r
\r
  /**\r
   * Bottom right point of symbol bounding box.\r
   */\r
  SYMBOLBOTTOMRIGHTPOINT = 9,\r
\r
  /**\r
   * Center point of symbol bounding box.\r
   */\r
  SYMBOLCENTERPOINT = 5,\r
\r
  /**\r
   * Middle left point of symbol bounding box.\r
   */\r
  SYMBOLMIDDLELEFTPOINT = 4,\r
\r
  /**\r
   * Middle right point of symbol bounding box.\r
   */\r
  SYMBOLMIDDLERIGHTPOINT = 6,\r
\r
  /**\r
   * Top left point of symbol bounding box.\r
   */\r
  SYMBOLTOPLEFTPOINT = 1,\r
\r
  /**\r
   * Top middle point of symbol bounding box.\r
   */\r
  SYMBOLTOPMIDDLEPOINT = 2,\r
\r
  /**\r
   * Top right point of symbol bounding box.\r
   */\r
  SYMBOLTOPRIGHTPOINT = 3,\r
}\r
\r
/**\r
 * Perspective grid plane types.\r
 */\r
declare enum PerspectiveGridPlaneType {\r
  /**\r
   * Perspective Grid Floor Plane Type.\r
   */\r
  FLOORPLANE = 3,\r
\r
  /**\r
   * Perspective Grid Left Plane Type.\r
   */\r
  LEFTPLANE = 1,\r
\r
  /**\r
   * Invalid Perspective Grid Plane Type.\r
   */\r
  NOPLANE = 0,\r
\r
  /**\r
   * Perspective Grid Right Plane Type.\r
   */\r
  RIGHTPLANE = 2,\r
}\r
\r
/**\r
 * Text Item First baseline types.\r
 */\r
declare enum FirstBaselineType {\r
  /**\r
   * First Baseline Ascent Type.\r
   */\r
  BASELINEASCENT = 0,\r
\r
  /**\r
   * First baseline Cap Height Type.\r
   */\r
  BASELINECAPHEIGHT = 1,\r
\r
  /**\r
   * First Baseline Em Box Height Type.\r
   */\r
  BASELINEEMBOXHEIGHT = 4,\r
\r
  /**\r
   * First Baseline Fixed Type.\r
   */\r
  BASELINEFIXED = 5,\r
\r
  /**\r
   * First Baseline Leading Type.\r
   */\r
  BASELINELEADING = 2,\r
\r
  /**\r
   * First Baseline Legacy Type.\r
   */\r
  BASELINELEGACY = 6,\r
\r
  /**\r
   * First Baseline x Height Type.\r
   */\r
  BASELINEXHEIGHT = 3,\r
}\r
\r
/**\r
 * Document layout style types.\r
 */\r
declare enum DocumentLayoutStyle {\r
  /**\r
   * Arranges document in cascaded style.\r
   */\r
  CASCADE = 0,\r
\r
  /**\r
   * Consolidates all documents.\r
   */\r
  CONSOLIDATEALL = 4,\r
\r
  /**\r
   * Arranges all documents floating layout.\r
   */\r
  FLOATALL = 3,\r
\r
  /**\r
   * Arranges documents as horizontal tiles.\r
   */\r
  HORIZONTALTILE = 1,\r
\r
  /**\r
   * Arranges documents as vertical tiles.\r
   */\r
  VERTICALTILE = 2,\r
}\r
\r
/**\r
 * A collection of artboards.\r
 */\r
declare class Artboards extends Array<Artboard> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Add artboard object.\r
   * @param artboardRect Size and position of artboard.\r
   */\r
  add(artboardRect: Rect): Artboard\r
\r
  /**\r
   * Retrieves the index position of the active artboard in the document's list.\r
   */\r
  getActiveArtboardIndex(): number\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Artboard\r
\r
  /**\r
   * Get the first Artboard with specified name.\r
   * @param artboardName The name of the artboard.\r
   */\r
  getByName(artboardName: string): Artboard\r
\r
  /**\r
   * Insert an Artboard at specified location.\r
   * @param artboardRect Size and position of artboard.\r
   * @param index Index position where artboard should be inserted.\r
   */\r
  insert(artboardRect: Rect, index: number): void\r
\r
  /**\r
   * Delete artboard object.\r
   * @param index Index of the crop area to be deleted.\r
   */\r
  remove(index: number): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Makes a specific artboard active, and makes it current in the iteration order.\r
   * @param index The 0-based index position of the artboard in the document list.\r
   */\r
  setActiveArtboardIndex(index: number): void\r
}\r
\r
/**\r
 * A collection of documents.\r
 */\r
declare class Documents extends Array<Document> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * A document.\r
   * @param documentColorSpace The color model used for the document.\r
   * @param width Width of the artboard.\r
   * @param height Height of the artboard.\r
   * @param numArtboards Number of artboards for new document.Range (1:100).\r
   * @param artboardLayout Layout of artboards for new document.\r
   * @param artboardSpacing Spacing between artboards for new document.\r
   * @param artboardRowsOrCols Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.\r
   */\r
  add(\r
    documentColorSpace?: DocumentColorSpace,\r
    width?: number,\r
    height?: number,\r
    numArtboards?: number,\r
    artboardLayout?: DocumentArtboardLayout,\r
    artboardSpacing?: number,\r
    artboardRowsOrCols?: number,\r
  ): Document\r
\r
  /**\r
   * Create a new document from a preset.\r
   * @param startupPreset The name of a startup document preset.\r
   * @param presetSettings Custom settings to apply to the preset.\r
   * @param showOptionsDialog If false, do not show Options dialog.\r
   */\r
  static addDocument(\r
    startupPreset: string,\r
    presetSettings?: DocumentPreset,\r
    showOptionsDialog?: boolean,\r
  ): Document\r
\r
  /**\r
   * Create a document from the preset with option to throw dialog to customize present settings.\r
   * @param startupPreset The name of startup document preset.\r
   * @param showOptionsDialog Argument controls if options Dialog is shown or not.\r
   */\r
  static addDocumentWithDialogOption(startupPreset: string, showOptionsDialog?: boolean): Document\r
\r
  /**\r
   * Arranges the documents in the specified style.\r
   * @param layoutStyle The document layout style.\r
   */\r
  arrange(layoutStyle: DocumentLayoutStyle): boolean\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Document\r
}\r
\r
/**\r
 * A collection of layers.\r
 */\r
declare class Layers extends Array<Layer> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a layer.\r
   */\r
  add(): Layer\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Layer\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of group items.\r
 */\r
declare class GroupItems extends Array<GroupItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a group item.\r
   */\r
  add(): GroupItem\r
\r
  /**\r
   * Create a group item from a vector graphics file.\r
   * @param imageFile The vector graphics file to be embedded.\r
   */\r
  static createFromFile(imageFile: File): GroupItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): GroupItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of page items.\r
 */\r
declare class PageItems extends Array<PageItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PageItem\r
}\r
\r
/**\r
 * A collection of path items.\r
 */\r
declare class PathItems extends Array<PathItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a path.\r
   */\r
  add(): PathItem\r
\r
  /**\r
   * Create an elliptical path item.\r
   * @param top The ellipse's bounds.\r
   * @param left The ellipse's bounds.\r
   * @param width The ellipse's bounds.\r
   * @param height The height of the ellipse.\r
   * @param reversed Is the ellipse path reversed?\r
   * @param inscribed Is the ellipse path inscribed?\r
   */\r
  ellipse(\r
    top?: number,\r
    left?: number,\r
    width?: number,\r
    height?: number,\r
    reversed?: boolean,\r
    inscribed?: boolean,\r
  ): PathItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PathItem\r
\r
  /**\r
   * Used to create a regular polygon path item. Not for path item access.\r
   * @param centerX\r
   * @param centerY\r
   * @param radius The radius of the polygon points.\r
   * @param sides The number of sides on the polygon.\r
   * @param reversed Is the polygon path reversed?\r
   */\r
  polygon(\r
    centerX?: number,\r
    centerY?: number,\r
    radius?: number,\r
    sides?: number,\r
    reversed?: boolean,\r
  ): PathItem\r
\r
  /**\r
   * Used to create a rectangular path item. Not for path item access.\r
   * @param top The top coordinate of the rectangle's bounds.\r
   * @param left The left coordinate of the rectangle's bounds.\r
   * @param width The width of the rectangle.\r
   * @param height The height of the rectangle.\r
   * @param reversed Is the rectangle path reversed?\r
   */\r
  rectangle(top: number, left: number, width: number, height: number, reversed?: boolean): PathItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Used to create a rounded-corner rectangular path item. Not for path item access.\r
   * @param top\r
   * @param left\r
   * @param width\r
   * @param height\r
   * @param horizontalRadius Horizontal corner radius.\r
   * @param verticalRadius Vertical corner radius.\r
   * @param reversed Is the rectangle path reversed?\r
   */\r
  roundedRectangle(\r
    top: number,\r
    left: number,\r
    width: number,\r
    height: number,\r
    horizontalRadius?: number,\r
    verticalRadius?: number,\r
    reversed?: boolean,\r
  ): PathItem\r
\r
  /**\r
   * Used to create a star-shaped path item. Not for path item access.\r
   * @param centerX\r
   * @param centerY\r
   * @param radius The outside radius of the star points.\r
   * @param innerRadius The inside radius of the star points.\r
   * @param points The number of points on the star.\r
   * @param reversed Is the star path reversed?\r
   */\r
  star(\r
    centerX?: number,\r
    centerY?: number,\r
    radius?: number,\r
    innerRadius?: number,\r
    points?: number,\r
    reversed?: boolean,\r
  ): PathItem\r
}\r
\r
/**\r
 * A collection of path points.\r
 */\r
declare class PathPoints extends Array<PathPoint> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a path point.\r
   */\r
  add(): PathPoint\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PathPoint\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of compound path items.\r
 */\r
declare class CompoundPathItems extends Array<CompoundPathItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a compound path item.\r
   */\r
  add(): CompoundPathItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): CompoundPathItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of stories.\r
 */\r
declare class Stories extends Array<Story> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Story\r
}\r
\r
/**\r
 * A collection of text frame items.\r
 */\r
declare class TextFrameItems extends Array<TextFrame> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a point text frame item.\r
   */\r
  add(): TextFrame\r
\r
  /**\r
   * Create an area text frame item.\r
   * @param textPath The path item associated with the text frame.\r
   * @param orientation The orientation of the text.\r
   * @param baseFrame The base text frame if it has one.\r
   * @param postFix Whether to postfix/prefix the new text frame to the specified base text frame.\r
   */\r
  static areaText(\r
    textPath: PathItem,\r
    orientation?: TextOrientation,\r
    baseFrame?: TextFrame,\r
    postFix?: boolean,\r
  ): TextFrame\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextFrame\r
\r
  /**\r
   * Create an on-path text frame item.\r
   * @param textPath The path item associated with the text frame.\r
   * @param startTValue The start position of text along a path, as a value relative to the path's segments (path text only)\r
   * @param endTValue The end position of text along a path, as a value relative to the path's segments (path text only)\r
   * @param orientation The orientation of the text.\r
   * @param baseFrame The base text frame if it has one.\r
   * @param postFix Whether to postfix/prefix the new text frame to the specified base text frame.\r
   */\r
  static pathText(\r
    textPath: PathItem,\r
    startTValue?: number,\r
    endTValue?: number,\r
    orientation?: TextOrientation,\r
    baseFrame?: TextFrame,\r
    postFix?: boolean,\r
  ): TextFrame\r
\r
  /**\r
   * Create a point text frame item.\r
   * @param anchor The position (coordinates) of the anchor point.\r
   * @param orientation The orientation of the text.\r
   */\r
  static pointText(anchor: Point | [number, number], orientation?: TextOrientation): TextFrame\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of legacy text items.\r
 */\r
declare class LegacyTextItems extends Array<LegacyTextItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create text frames from all legacy text items. The original legacy text items will be deleted.\r
   */\r
  convertToNative(): boolean\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): LegacyTextItem\r
}\r
\r
/**\r
 * A collection of text range items.\r
 */\r
declare class TextRanges extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
}\r
\r
/**\r
 * A collection of insertion points.\r
 */\r
declare class InsertionPoints extends Array<InsertionPoint> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): InsertionPoint\r
}\r
\r
/**\r
 * A collection of characters.\r
 */\r
declare class Characters extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a character.\r
   * @param contents The text string.\r
   */\r
  add(contents: string): TextRange\r
\r
  /**\r
   *\r
   * @param contents The text string.\r
   */\r
  static addBefore(contents: string): TextRange\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of words.\r
 */\r
declare class Words extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a word.\r
   * @param contents The text string.\r
   */\r
  add(contents: string): TextRange\r
\r
  /**\r
   *\r
   * @param contents The text string.\r
   */\r
  static addBefore(contents: string): TextRange\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of lines.\r
 */\r
declare class Lines extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
}\r
\r
/**\r
 * A collection of Paragraphs.\r
 */\r
declare class Paragraphs extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a text art item.\r
   * @param contents The text string.\r
   */\r
  add(contents: string): TextRange\r
\r
  /**\r
   *\r
   * @param contents The text string.\r
   */\r
  static addBefore(contents: string): TextRange\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of character styles.\r
 */\r
declare class CharacterStyles extends Array<CharacterStyle> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a named character style.\r
   * @param name The character style name.\r
   */\r
  add(name: string): CharacterStyle\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): CharacterStyle\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of paragraph styles.\r
 */\r
declare class ParagraphStyles extends Array<ParagraphStyle> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a named paragraph style.\r
   * @param name The paragraph style name.\r
   */\r
  add(name: string): ParagraphStyle\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): ParagraphStyle\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of custom spot colors.\r
 */\r
declare class Spots extends Array<Spot> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a spot color.\r
   */\r
  add(): Spot\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Spot\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of swatches.\r
 */\r
declare class Swatches extends Array<Swatch> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a swatch.\r
   */\r
  add(): Swatch\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Swatch\r
\r
  /**\r
   * Get selected swatches in the document.\r
   * @param includeSwatchInGroup The selected element should include swatches in group.\r
   */\r
  getSelected(includeSwatchInGroup?: boolean): Swatch[]\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of Swatch groups.\r
 */\r
declare class SwatchGroups extends Array<SwatchGroup> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a Swatch group.\r
   */\r
  add(): SwatchGroup\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): SwatchGroup\r
\r
  /**\r
   * Get selected swatchGroups in the document.\r
   */\r
  getSelected(): SwatchGroup[]\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of gradients.\r
 */\r
declare class Gradients extends Array<Gradient> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a gradient.\r
   */\r
  add(): Gradient\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Gradient\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of gradient stops.\r
 */\r
declare class GradientStops extends Array<GradientStop> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a gradient stop.\r
   */\r
  add(): GradientStop\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): GradientStop\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of patterns.\r
 */\r
declare class Patterns extends Array<Pattern> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a pattern.\r
   */\r
  add(): Pattern\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Pattern\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of symbols.\r
 */\r
declare class Symbols extends Array<Symbol> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a symbol.\r
   * @param sourceArt The art item from which to make this symbol.\r
   * @param registrationPoint The symbol registration point.\r
   */\r
  add(sourceArt: PageItem, registrationPoint?: SymbolRegistrationPoint): Symbol\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Symbol\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of symbol items.\r
 */\r
declare class SymbolItems extends Array<SymbolItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * An instance of a symbol item.\r
   * @param symbol The symbol to make an instance of.\r
   */\r
  add(symbol: Symbol): SymbolItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): SymbolItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of brushes.\r
 */\r
declare class Brushes extends Array<Brush> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a brush.\r
   * @param brushDefinition The brush definition from which the brush would be created.\r
   * @param brushName The name of the brush.\r
   */\r
  add(brushDefinition: File, brushName?: string): Brush\r
\r
  /**\r
   * Create a brush, select the brush tool and load the created brush in the brush tool.\r
   * @param brushDefinition The brush definition from which the brush would be created.\r
   */\r
  static addAndLoad(brushDefinition: File): Brush\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Brush\r
}\r
\r
/**\r
 * A collection of art styles.\r
 */\r
declare class ArtStyles extends Array<ArtStyle> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): ArtStyle\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of fonts.\r
 */\r
declare class TextFonts extends Array<TextFont> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextFont\r
\r
  /**\r
   * Returns the current font name.\r
   */\r
  getCurrentFont(): string\r
\r
  /**\r
   * Get the Text Font with the font name , if not avaiable it will create the substitute font.\r
   * @param fontName The name of the font to find or create substitute.\r
   */\r
  getFontByName(fontName: string): TextFont\r
\r
  /**\r
   * Check if any original font is present with the given name.\r
   * @param fontName The name of the font to find.\r
   */\r
  isFontAvailable(fontName: string): boolean\r
}\r
\r
/**\r
 * The collection of tags associated with a page item.\r
 */\r
declare class Tags extends Array<Tag> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a tag.\r
   */\r
  add(): Tag\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Tag\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of RasterItems.\r
 */\r
declare class RasterItems extends Array<RasterItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): RasterItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of PlacedItems.\r
 */\r
declare class PlacedItems extends Array<PlacedItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a placed item.\r
   */\r
  add(): PlacedItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PlacedItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * EmbeddedItems Collection.\r
 */\r
declare class EmbeddedItems extends Array<EmbedItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create an embedded item.\r
   */\r
  add(): EmbedItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): EmbedItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of MeshItems.\r
 */\r
declare class MeshItems extends Array<MeshItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): MeshItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of GraphItems.\r
 */\r
declare class GraphItems extends Array<GraphItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): GraphItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of PluginItems.\r
 */\r
declare class PluginItems extends Array<PluginItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PluginItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of NonNativeItems.\r
 */\r
declare class NonNativeItems extends Array<NonNativeItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): NonNativeItem\r
}\r
\r
/**\r
 * A collection of views.\r
 */\r
declare class Views extends Array<View> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): View\r
}\r
\r
/**\r
 * A collection of variables.\r
 */\r
declare class Variables extends Array<Variable> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a variable.\r
   */\r
  add(): Variable\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Variable\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of datasets.\r
 */\r
declare class DataSets extends Array<DataSet> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a data set.\r
   */\r
  add(): DataSet\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): DataSet\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Options which may be supplied when opening a file.\r
 */\r
declare class OpenOptions {\r
  /**\r
   * Add this file to the list of recently opened files.\r
   */\r
  static addToRecentFiles: boolean\r
\r
  /**\r
   * Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded.\r
   */\r
  static convertCropAreaToArtboard: boolean\r
\r
  /**\r
   * Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later.\r
   */\r
  static convertTilesToArtboard: boolean\r
\r
  /**\r
   * Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later.\r
   */\r
  static createArtboardWithArtworkBoundingBox: boolean\r
\r
  /**\r
   * Open the file as library.\r
   */\r
  static openAs: LibraryType\r
\r
  /**\r
   * Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later.\r
   */\r
  static preserveLegacyArtboard: boolean\r
\r
  /**\r
   * Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3)\r
   */\r
  static updateLegacyGradientMesh: boolean\r
\r
  /**\r
   * Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11)\r
   */\r
  static updateLegacyText: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when saving a document as an FXG file.\r
 */\r
declare class FXGSaveOptions {\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * The policy used by FXG to expand blends.\r
   */\r
  static blendsPolicy: BlendsExpandPolicy\r
\r
  /**\r
   * Choose to downsample the linked images(72ppi)\r
   */\r
  static downsampleLinkedImages: boolean\r
\r
  /**\r
   * The policy used by FXG to preserve filters.\r
   */\r
  static filtersPolicy: FiltersPreservePolicy\r
\r
  /**\r
   * The policy used by FXG to preserve gradients.\r
   */\r
  static gradientsPolicy: GradientsPreservePolicy\r
\r
  /**\r
   * Choose to include metadata (XMP)\r
   */\r
  static includeMetadata: boolean\r
\r
  /**\r
   * Choose to include unused symbols.\r
   */\r
  static includeUnusedSymbols: boolean\r
\r
  /**\r
   * Choose to preserve the editing capabilities of FXG.\r
   */\r
  static preserveEditingCapabilities: boolean\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
\r
  /**\r
   * The policy used by FXG to preserve text.\r
   */\r
  static textPolicy: TextPreservePolicy\r
\r
  /**\r
   * The version of the FXG file format to create.\r
   */\r
  static version: FXGVersion\r
}\r
\r
/**\r
 * Options which may be supplied when saving a document as an Illustrator EPS file.\r
 */\r
declare class EPSSaveOptions {\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Use CMYK PostScript.\r
   */\r
  static cmykPostScript: boolean\r
\r
  /**\r
   * What Illustrator file format version to create.\r
   */\r
  static compatibility: Compatibility\r
\r
  /**\r
   * Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object.\r
   */\r
  static compatibleGradientPrinting: boolean\r
\r
  /**\r
   * Embed all fonts used by the document in the saved file (version 7 or later)\r
   */\r
  static embedAllFonts: boolean\r
\r
  /**\r
   * Are linked image files to be included in the saved document.\r
   */\r
  static embedLinkedFiles: boolean\r
\r
  /**\r
   * How should transparency be flattened for older file format versions (pre-version 9)\r
   */\r
  static flattenOutput: OutputFlattening\r
\r
  /**\r
   * Include thumbnail image of the EPS artwork.\r
   */\r
  static includeDocumentThumbnails: boolean\r
\r
  /**\r
   *\r
   */\r
  static overprint: PDFOverprint\r
\r
  /**\r
   * PostScript level to use (level 1 valid for file format version 8 or older)\r
   */\r
  static postScript: EPSPostScriptLevelEnum\r
\r
  /**\r
   * EPS preview format.\r
   */\r
  static preview: EPSPreview\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when saving a document as a PDF file.\r
 */\r
declare class PDFSaveOptions {\r
  /**\r
   * Create acrobat layers from top-level layers - acrobat 6 only option.\r
   */\r
  static acrobatLayers: boolean\r
\r
  /**\r
   * Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Link 4 bleed values.\r
   */\r
  static bleedLink: boolean\r
\r
  /**\r
   * The bleed offset rect.\r
   */\r
  static bleedOffsetRect: Rect\r
\r
  /**\r
   * Draw color bars.\r
   */\r
  static colorBars: boolean\r
\r
  /**\r
   * How should color bitmap images be compressed.\r
   */\r
  static colorCompression: CompressionQuality\r
\r
  /**\r
   * PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination.\r
   */\r
  static colorConversionID: ColorConversion\r
\r
  /**\r
   * When NoColorConversion is specified for Color Conversion, NoColorDestination is set.\r
   */\r
  static colorDestinationID: ColorDestination\r
\r
  /**\r
   * If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to.\r
   */\r
  static colorDownsampling: number\r
\r
  /**\r
   * Downsample if the image's resolution is above this value.\r
   */\r
  static colorDownsamplingImageThreshold: number\r
\r
  /**\r
   * How should color bitmap images be resampled.\r
   */\r
  static colorDownsamplingMethod: DownsampleMethod\r
\r
  /**\r
   * If CMS is off, Don't Include Profiles is set.\r
   */\r
  static colorProfileID: ColorProfile\r
\r
  /**\r
   * Tile size when compressing with JPEG2000.\r
   */\r
  static colorTileSize: number\r
\r
  /**\r
   * The version of the Acrobat file format to create.\r
   */\r
  static compatibility: PDFCompatibility\r
\r
  /**\r
   * Should line art and text be compressed?\r
   */\r
  static compressArt: boolean\r
\r
  /**\r
   * A password string to open the document.\r
   */\r
  static documentPassword: string\r
\r
  /**\r
   * Enable accessing 128-bit.\r
   */\r
  static enableAccess: boolean\r
\r
  /**\r
   * Enable copying of text 128-bit.\r
   */\r
  static enableCopy: boolean\r
\r
  /**\r
   * Enable copying and accessing 40-bit.\r
   */\r
  static enableCopyAccess: boolean\r
\r
  /**\r
   * Enable plaintext metadata 128-bit - available only for acrobat 6.\r
   */\r
  static enablePlainText: boolean\r
\r
  /**\r
   * The printing flattener options.\r
   */\r
  static flattenerOptions: PrintFlattenerOptions\r
\r
  /**\r
   * The transparency flattener preset name.\r
   */\r
  static flattenerPreset: string\r
\r
  /**\r
   * Include a subset of fonts when less than this percentage of characters are used.\r
   */\r
  static fontSubsetThreshold: number\r
\r
  /**\r
   * Generate thumbnails for the saved document.\r
   */\r
  static generateThumbnails: boolean\r
\r
  /**\r
   * How should grayscale bitmap images be compressed.\r
   */\r
  static grayscaleCompression: CompressionQuality\r
\r
  /**\r
   * If zero, no downsampling, otherwise, the resolution to downsample grayscale images to.\r
   */\r
  static grayscaleDownsampling: number\r
\r
  /**\r
   * Downsample if the image's resolution is above this value.\r
   */\r
  static grayscaleDownsamplingImageThreshold: number\r
\r
  /**\r
   * How should grayscale bitmap images be resampled.\r
   */\r
  static grayscaleDownsamplingMethod: DownsampleMethod\r
\r
  /**\r
   * Tile size when compressing with JPEG2000.\r
   */\r
  static grayscaleTileSize: number\r
\r
  /**\r
   * How should monochrome bitmap images be compressed.\r
   */\r
  static monochromeCompression: MonochromeCompression\r
\r
  /**\r
   * If zero, no downsampling, otherwise, the resolution to downsample images to.\r
   */\r
  static monochromeDownsampling: number\r
\r
  /**\r
   * Downsample if the image's resolution is above this value.\r
   */\r
  static monochromeDownsamplingImageThreshold: number\r
\r
  /**\r
   * How should monochrome bitmap images be resampled.\r
   */\r
  static monochromeDownsamplingMethod: DownsampleMethod\r
\r
  /**\r
   * Custom offset (in points) for using the custom paper.\r
   */\r
  static offset: number\r
\r
  /**\r
   * Should the PDF document be optimized for fast web viewing.\r
   */\r
  static optimization: boolean\r
\r
  /**\r
   * This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition.\r
   */\r
  static outputCondition: string\r
\r
  /**\r
   * If selected for Output Intent Profile Name, you can set the name of a registered printing condition.\r
   */\r
  static outputConditionID: string\r
\r
  /**\r
   * When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box.\r
   */\r
  static outputIntentProfile: string\r
\r
  /**\r
   * PDF security printing permission.\r
   */\r
  static pDFAllowPrinting: PDFPrintAllowedEnum\r
\r
  /**\r
   * PDF security changes allowed.\r
   */\r
  static pDFChangesAllowed: PDFChangesAllowedEnum\r
\r
  /**\r
   * The max string length is 255 bytes. Name of PDF preset to use.\r
   */\r
  static pDFPreset: string\r
\r
  /**\r
   * This control includes the None option for when the user is not complying with any PDF standard.\r
   */\r
  static pDFXStandard: PDFXStandard\r
\r
  /**\r
   * This displays the description from the selected preset.\r
   */\r
  static pDFXStandardDescription: string\r
\r
  /**\r
   * Draw page information.\r
   */\r
  static pageInformation: boolean\r
\r
  /**\r
   * The page marks style.\r
   */\r
  static pageMarksType: PageMarksTypes\r
\r
  /**\r
   * A password string to restrict editing security settings.\r
   */\r
  static permissionPassword: string\r
\r
  /**\r
   * Preserve Illustrator editing capabilities when saving the document.\r
   */\r
  static preserveEditability: boolean\r
\r
  /**\r
   * Flattening printer resolution.\r
   */\r
  static printerResolution: number\r
\r
  /**\r
   * Draw registration marks.\r
   */\r
  static registrationMarks: boolean\r
\r
  /**\r
   * URL to the site where the specified output condition is registered. No validation is performed on the URL.\r
   */\r
  static registryName: string\r
\r
  /**\r
   * Require a password to open the document.\r
   */\r
  static requireDocumentPassword: boolean\r
\r
  /**\r
   * Use a password to restrict editing security settings.\r
   */\r
  static requirePermissionPassword: boolean\r
\r
  /**\r
   * This indicates if manual trapping has been prepared in the document.\r
   */\r
  static trapped: boolean\r
\r
  /**\r
   * Trim mark weight.\r
   */\r
  static trimMarkWeight: PDFTrimMarkWeight\r
\r
  /**\r
   * Draw trim marks.\r
   */\r
  static trimMarks: boolean\r
\r
  /**\r
   * View PDF after saving.\r
   */\r
  static viewAfterSaving: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when saving a document as an Illustrator file.\r
 */\r
declare class IllustratorSaveOptions {\r
  /**\r
   * If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * What Illustrator file format version to create.\r
   */\r
  static compatibility: Compatibility\r
\r
  /**\r
   * Should the saved file be compressed (version 10 or later)\r
   */\r
  static compressed: boolean\r
\r
  /**\r
   * Embed the document's ICC profile in the saved file (version 9 or later)\r
   */\r
  static embedICCProfile: boolean\r
\r
  /**\r
   * Are linked image files to be included in the saved document (versions 7 or later)\r
   */\r
  static embedLinkedFiles: boolean\r
\r
  /**\r
   * How should transparency be flattened for older file format versions (pre-version 9)\r
   */\r
  static flattenOutput: OutputFlattening\r
\r
  /**\r
   * Include a subset of fonts when less than this percentage of characters are used (version 9 or later)\r
   */\r
  static fontSubsetThreshold: number\r
\r
  /**\r
   * Save as a PDF compatible file (version 10 or later)\r
   */\r
  static pdfCompatible: boolean\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
}\r
\r
/**\r
 *\r
 */\r
declare class Matrix {\r
  /**\r
   *\r
   */\r
  static mValueA: number\r
\r
  /**\r
   *\r
   */\r
  static mValueB: number\r
\r
  /**\r
   *\r
   */\r
  static mValueC: number\r
\r
  /**\r
   *\r
   */\r
  static mValueD: number\r
\r
  /**\r
   *\r
   */\r
  static mValueTX: number\r
\r
  /**\r
   *\r
   */\r
  static mValueTY: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a JPEG file.\r
 */\r
declare class ExportOptionsJPEG {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the resulting image be clipped to the artboard.\r
   */\r
  static artBoardClipping: boolean\r
\r
  /**\r
   * Blur the resulting image this much.\r
   */\r
  static blurAmount: number\r
\r
  /**\r
   * Horizontal scaling factor.\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * Should the image be optimized for web viewing.\r
   */\r
  static optimization: boolean\r
\r
  /**\r
   * Quality of resulting image.\r
   */\r
  static qualitySetting: number\r
\r
  /**\r
   * Should the resulting image be saved as HTML.\r
   */\r
  static saveAsHTML: boolean\r
\r
  /**\r
   * Vertical scaling factor.\r
   */\r
  static verticalScale: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as an 8 bit PNG file.\r
 */\r
declare class ExportOptionsPNG8 {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the resulting image be clipped to the artboard.\r
   */\r
  static artBoardClipping: boolean\r
\r
  /**\r
   * Number of colors in exported color table.\r
   */\r
  static colorCount: number\r
\r
  /**\r
   * Method used to dither colors.\r
   */\r
  static colorDither: ColorDitherMethod\r
\r
  /**\r
   * Method used to reduce the number of colors.\r
   */\r
  static colorReduction: ColorReductionMethod\r
\r
  /**\r
   * How much should the colors be dithered.\r
   */\r
  static ditherPercent: number\r
\r
  /**\r
   * Horizontal scaling factor.\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * Should the resulting image be interlaced.\r
   */\r
  static interlaced: boolean\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * Should the resulting image be saved as HTML.\r
   */\r
  static saveAsHTML: boolean\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
\r
  /**\r
   * Vertical scaling factor.\r
   */\r
  static verticalScale: number\r
\r
  /**\r
   * How much should the color table be changed to match the web palette.\r
   */\r
  static webSnap: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as an 24 bit PNG file.\r
 */\r
declare class ExportOptionsPNG24 {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the resulting image be clipped to the artboard.\r
   */\r
  static artBoardClipping: boolean\r
\r
  /**\r
   * Dimensions in which to contain the resulting raster.\r
   */\r
  static dimensions: Dimensions\r
\r
  /**\r
   * Horizontal scaling factor.\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * Should the resulting image be saved as HTML.\r
   */\r
  static saveAsHTML: boolean\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
\r
  /**\r
   * Vertical scaling factor.\r
   */\r
  static verticalScale: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a GIF file.\r
 */\r
declare class ExportOptionsGIF {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the resulting image be clipped to the artboard.\r
   */\r
  static artBoardClipping: boolean\r
\r
  /**\r
   * Number of colors in exported color table.\r
   */\r
  static colorCount: number\r
\r
  /**\r
   * Method used to dither colors.\r
   */\r
  static colorDither: ColorDitherMethod\r
\r
  /**\r
   * Method used to reduce the number of colors.\r
   */\r
  static colorReduction: ColorReductionMethod\r
\r
  /**\r
   * How much should the colors be dithered.\r
   */\r
  static ditherPercent: number\r
\r
  /**\r
   * Horizontal scaling factor.\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * Level of information loss during compression.\r
   */\r
  static infoLossPercent: number\r
\r
  /**\r
   * Should the resulting image be interlaced.\r
   */\r
  static interlaced: boolean\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * Should the resulting image be saved as HTML.\r
   */\r
  static saveAsHTML: boolean\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
\r
  /**\r
   * Vertical scaling factor.\r
   */\r
  static verticalScale: number\r
\r
  /**\r
   * How much should the color table be changed to match the web pallet.\r
   */\r
  static webSnap: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a Photoshop file.\r
 */\r
declare class ExportOptionsPhotoshop {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Export text objects as editable text layers.\r
   */\r
  static editableText: boolean\r
\r
  /**\r
   * Embed an ICC profile when exporting.\r
   */\r
  static embedICCProfile: boolean\r
\r
  /**\r
   * The color space of the exported file.\r
   */\r
  static imageColorSpace: ImageColorSpace\r
\r
  /**\r
   * Preserve as much of the original document's structure as possible when exporting.\r
   */\r
  static maximumEditability: boolean\r
\r
  /**\r
   * The resolution of the exported file.\r
   */\r
  static resolution: number\r
\r
  /**\r
   * All the artboards or range of the artboards will be exported.\r
   */\r
  static saveMultipleArtboards: boolean\r
\r
  /**\r
   * Should a warning dialog be displayed because of conflicts in the export settings.\r
   */\r
  static warnings: boolean\r
\r
  /**\r
   * Preserve document layers when exporting.\r
   */\r
  static writeLayers: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as an SVG file.\r
 */\r
declare class ExportOptionsSVG {\r
  /**\r
   * The version of DTD that the exported file should be conforming to.\r
   */\r
  static DTD: SVGDTDVersion\r
\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Should the exported file be compressed.\r
   */\r
  static compressed: boolean\r
\r
  /**\r
   * Decimal precision for element coordinate values.\r
   */\r
  static coordinatePrecision: number\r
\r
  /**\r
   * How should the CSS properties of the document be included in the document.\r
   */\r
  static cssProperties: SVGCSSPropertyLocation\r
\r
  /**\r
   * How should the text in the document be encoded.\r
   */\r
  static documentEncoding: SVGDocumentEncoding\r
\r
  /**\r
   * Should the raster images in the exported file be included.\r
   */\r
  static embedRasterImages: boolean\r
\r
  /**\r
   * What font glyphs should be included in the exported file.\r
   */\r
  static fontSubsetting: SVGFontSubsetting\r
\r
  /**\r
   * The type of font that should be included in the exported file.\r
   */\r
  static fontType: SVGFontType\r
\r
  /**\r
   *\r
   */\r
  static includeFileInfo: boolean\r
\r
  /**\r
   *\r
   */\r
  static includeUnusedStyles: boolean\r
\r
  /**\r
   *\r
   */\r
  static includeVariablesAndDatasets: boolean\r
\r
  /**\r
   *\r
   */\r
  static optimizeForSVGViewer: boolean\r
\r
  /**\r
   * Preserve Illustrator editing capabilities when exporting the document.\r
   */\r
  static preserveEditability: boolean\r
\r
  /**\r
   * Is SVG auto kerning allowed?\r
   */\r
  static sVGAutoKerning: boolean\r
\r
  /**\r
   * Is SVG text-on-path construct allowed?\r
   */\r
  static sVGTextOnPath: boolean\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
\r
  /**\r
   * Preserve slice data in exported document.\r
   */\r
  static slices: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a Web optimized SVG file.\r
 */\r
declare class ExportOptionsWebOptimizedSVG {\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Decimal precision for element coordinate values.\r
   */\r
  static coordinatePrecision: number\r
\r
  /**\r
   * How should the CSS properties of the document be included in the document.\r
   */\r
  static cssProperties: SVGCSSPropertyLocation\r
\r
  /**\r
   * The type of font that should be included in the exported file.\r
   */\r
  static fontType: SVGFontType\r
\r
  /**\r
   * Should the raster images in the exported file be included.\r
   */\r
  static rasterImageLocation: RasterImageLocation\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
\r
  /**\r
   * How object names (IDs) are generated in exported SVG.\r
   */\r
  static svgId: SVGIdType\r
\r
  /**\r
   * Reduces the size of the svg.\r
   */\r
  static svgMinify: boolean\r
\r
  /**\r
   * Makes the SVG Responsive.\r
   */\r
  static svgResponsive: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as an Flash (.SWF) file.\r
 */\r
declare class ExportOptionsFlash {\r
  /**\r
   * How should the arts be clipped during the output.\r
   */\r
  static artClipping: ArtClippingOption\r
\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * The background color.\r
   */\r
  static backgroundColor: RGBColor\r
\r
  /**\r
   * A list of layers to be included as the static background in all exported Flash frames.\r
   */\r
  static backgroundLayers: Layer[]\r
\r
  /**\r
   * Controls how the blend art objects are animated when export to Flash frames.\r
   */\r
  static blendAnimation: BlendAnimationType\r
\r
  /**\r
   * Should the exported file be compressed.\r
   */\r
  static compressed: boolean\r
\r
  /**\r
   * Should all text be converted to outlines.\r
   */\r
  static convertTextToOutlines: boolean\r
\r
  /**\r
   * How much curve information should be preserved.\r
   */\r
  static curveQuality: number\r
\r
  /**\r
   * Should all symbol definitions in the palette be exported to the SWF File.\r
   */\r
  static exportAllSymbols: boolean\r
\r
  /**\r
   * How should the Flash file be created.\r
   */\r
  static exportStyle: FlashExportStyle\r
\r
  /**\r
   * Which version of SWF to export.\r
   */\r
  static exportVersion: FlashExportVersion\r
\r
  /**\r
   * When exporting layers to Flash frames.\r
   */\r
  static frameRate: number\r
\r
  /**\r
   * Should the kerning information for text objects be ignored.\r
   */\r
  static ignoreTextKerning: boolean\r
\r
  /**\r
   * How should the images in the exported Flash file be compressed.\r
   */\r
  static imageFormat: FlashImageFormat\r
\r
  /**\r
   * If true, include minimal XMP metadata in the exported file.\r
   */\r
  static includeMetadata: boolean\r
\r
  /**\r
   * What method to use.\r
   */\r
  static jpegMethod: FlashJPEGMethod\r
\r
  /**\r
   * Level of compression.\r
   */\r
  static jpegQuality: number\r
\r
  /**\r
   * The order in which the layers will be exported to Flash frames.\r
   */\r
  static layerOrder: LayerOrderType\r
\r
  /**\r
   * Should the Flash file be set to loop when run.\r
   */\r
  static looping: boolean\r
\r
  /**\r
   * What access should the SWF file have - local or network access.\r
   */\r
  static playbackAccess: FlashPlaybackSecurity\r
\r
  /**\r
   * Choose whether to preserve artwork appearance or editability (default) during export.\r
   */\r
  static preserveAppearance: boolean\r
\r
  /**\r
   * Prevent the exported file from being imported by other applications.\r
   */\r
  static readOnly: boolean\r
\r
  /**\r
   * If a file with the same name already exists, should it be replaced?\r
   */\r
  static replacing: SaveOptions\r
\r
  /**\r
   * Pixels per inch.\r
   */\r
  static resolution: number\r
\r
  /**\r
   * All the artboards or range of the artboards will be exported.\r
   */\r
  static saveMultipleArtboards: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document to AutoCAD formats (.dwg or .dxf)\r
 */\r
declare class ExportOptionsAutoCAD {\r
  /**\r
   * Alter paths for appearance.\r
   */\r
  static alterPathsForAppearance: boolean\r
\r
  /**\r
   * Number of colors to export into the AutoCAD file.\r
   */\r
  static colors: AutoCADColors\r
\r
  /**\r
   * Whether to convert text to outlines.\r
   */\r
  static convertTextToOutlines: boolean\r
\r
  /**\r
   * Which format to export the file as.\r
   */\r
  static exportFileFormat: AutoCADExportFileFormat\r
\r
  /**\r
   * Whether to preserve appearance or editability during export.\r
   */\r
  static exportOption: AutoCADExportOption\r
\r
  /**\r
   * Export selected art only.\r
   */\r
  static exportSelectedArtOnly: boolean\r
\r
  /**\r
   * Raster format in which to export raster art.\r
   */\r
  static rasterFormat: AutoCADRasterFormat\r
\r
  /**\r
   * Whether to scale lineweights by the same amount as rest of the drawing.\r
   */\r
  static scaleLineweights: boolean\r
\r
  /**\r
   * Units from which to map.\r
   */\r
  static unit: AutoCADUnit\r
\r
  /**\r
   * Ratio by which to scale the output.\r
   */\r
  static unitScaleRatio: number\r
\r
  /**\r
   * Release of AutoCAD to export to.\r
   */\r
  static version: AutoCADCompatibility\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a TIFF file.\r
 */\r
declare class ExportOptionsTIFF {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: AntiAliasingMethod\r
\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Mac or PC byte order when exporting.\r
   */\r
  static byteOrder: TIFFByteOrder\r
\r
  /**\r
   * Embed an ICC profile when exporting.\r
   */\r
  static embedICCProfile: boolean\r
\r
  /**\r
   * The color space of the exported file.\r
   */\r
  static imageColorSpace: ImageColorSpace\r
\r
  /**\r
   * Compress TIFF file with LZW Compression when exporting.\r
   */\r
  static lZWCompression: boolean\r
\r
  /**\r
   * The resolution of the exported file.\r
   */\r
  static resolution: number\r
\r
  /**\r
   * All the artboards or range of the artboards will be exported.\r
   */\r
  static saveMultipleArtboards: boolean\r
}\r
\r
/**\r
 * The parent class for all color values used in Illustrator. See the specific color classes for more information.\r
 */\r
declare class Color {}\r
\r
/**\r
 * An Lab color specification.\r
 */\r
declare class LabColor extends Color {\r
  /**\r
   * The a color value (between -128.0 and 127.0)\r
   */\r
  a: number\r
\r
  /**\r
   * The b color value (between -128.0 and 127.0)\r
   */\r
  b: number\r
\r
  /**\r
   * The L color value (between 0.0 and 100.0)\r
   */\r
  l: number\r
}\r
\r
/**\r
 * Dimensions (height and width)\r
 */\r
declare class Dimensions {\r
  /**\r
   * The Height parameter.\r
   */\r
  static height: number\r
\r
  /**\r
   * The Width parameter.\r
   */\r
  static width: number\r
}\r
\r
/**\r
 * An RGB color specification.\r
 */\r
declare class RGBColor extends Color {\r
  /**\r
   * The blue color value (between 0.0 and 255.0)\r
   */\r
  blue: number\r
\r
  /**\r
   * The green color value (between 0.0 and 255.0)\r
   */\r
  green: number\r
\r
  /**\r
   * The red color value (between 0.0 and 255.0)\r
   */\r
  red: number\r
}\r
\r
/**\r
 * A CMYK color specification.\r
 */\r
declare class CMYKColor extends Color {\r
  /**\r
   * The black color value (between 0.0 and 100.0)\r
   */\r
  black: number\r
\r
  /**\r
   * The cyan color value (between 0.0 and 100.0)\r
   */\r
  cyan: number\r
\r
  /**\r
   * The magenta color value (between 0.0 and 100.0)\r
   */\r
  magenta: number\r
\r
  /**\r
   * The yellow color value (between 0.0 and 100.0)\r
   */\r
  yellow: number\r
}\r
\r
/**\r
 * A gray color specification.\r
 */\r
declare class GrayColor extends Color {\r
  /**\r
   * The gray value (between 0.0 and 100.0)\r
   */\r
  gray: number\r
}\r
\r
/**\r
 * Represents the 'none' color.\r
 */\r
declare class NoColor extends Color {}\r
\r
/**\r
 * Information about the spot color.\r
 */\r
declare class SpotColor extends Color {\r
  /**\r
   *\r
   */\r
  spot: Spot\r
\r
  /**\r
   * Percentage level of tint to be applied to the spot color.\r
   */\r
  tint: number\r
}\r
\r
/**\r
 * A Pattern color specification.\r
 */\r
declare class PatternColor extends Color {\r
  /**\r
   * Additional transformation arising from manipulating the path.\r
   */\r
  matrix: Matrix\r
\r
  /**\r
   *\r
   */\r
  pattern: Pattern\r
\r
  /**\r
   * Whether or not the prototype is reflected before filling.\r
   */\r
  reflect: boolean\r
\r
  /**\r
   * The axis around which to reflect.\r
   */\r
  reflectAngle: number\r
\r
  /**\r
   * The angle to rotate the before filling.\r
   */\r
  rotation: number\r
\r
  /**\r
   * The fraction to scale the prototype before filling.\r
   */\r
  scaleFactor: Point | [number, number]\r
\r
  /**\r
   * The angle to slant the shear by.\r
   */\r
  shearAngle: number\r
\r
  /**\r
   * The axis to shear with respect to.\r
   */\r
  shearAxis: number\r
\r
  /**\r
   * The angle to translate the (unscaled) prototype before filling.\r
   */\r
  shiftAngle: number\r
\r
  /**\r
   * The distance to translate the (unscaled) prototype before filling.\r
   */\r
  shiftDistance: number\r
}\r
\r
/**\r
 * A Gradient color specification.\r
 */\r
declare class GradientColor extends Color {\r
  /**\r
   * The gradient vector angle.\r
   */\r
  angle: number\r
\r
  /**\r
   * Reference to the object defining the gradient.\r
   */\r
  gradient: Gradient\r
\r
  /**\r
   * The gradient hilite vector angle.\r
   */\r
  hiliteAngle: number\r
\r
  /**\r
   * The gradient hilite vector length.\r
   */\r
  hiliteLength: number\r
\r
  /**\r
   * The gradient vector length.\r
   */\r
  length: number\r
\r
  /**\r
   * Additional transformation arising from manipulating the path.\r
   */\r
  matrix: Matrix\r
\r
  /**\r
   * The gradient vector origin.\r
   */\r
  origin: Point | [number, number]\r
}\r
\r
/**\r
 * Tab stop information (returned by tab stops from a paragraph object)\r
 */\r
declare class TabStopInfo {\r
  /**\r
   * The alignment of the tab stop.\r
   */\r
  static alignment: TabStopAlignment\r
\r
  /**\r
   * The character used for decimal tab stops.\r
   */\r
  static decimalCharacter: string\r
\r
  /**\r
   * The leader dot.\r
   */\r
  static leader: string\r
\r
  /**\r
   * The position of the tab stop expressed in points.\r
   */\r
  static position: number\r
}\r
\r
/**\r
 * An installed printer.\r
 */\r
declare class Printer {\r
  /**\r
   * The printer name.\r
   */\r
  static name: string\r
\r
  /**\r
   * The printer information.\r
   */\r
  static printerInfo: PrinterInfo\r
}\r
\r
/**\r
 * Printer information.\r
 */\r
declare class PrinterInfo {\r
  /**\r
   * Does the printer support binary printing?\r
   */\r
  static binaryPrintingSupport: boolean\r
\r
  /**\r
   * The printer color capability.\r
   */\r
  static colorSupport: PrinterColorMode\r
\r
  /**\r
   * Does the printer support custom paper size?\r
   */\r
  static customPaperSupport: boolean\r
\r
  /**\r
   * Does the printer support custom paper transverse?\r
   */\r
  static customPaperTransverseSupport: boolean\r
\r
  /**\r
   * The printer default resolution.\r
   */\r
  static deviceResolution: number\r
\r
  /**\r
   * Does the printer support InRIP color separation?\r
   */\r
  static inRIPSeparationSupport: boolean\r
\r
  /**\r
   * The printer maximum device resolution.\r
   */\r
  static maxDeviceResolution: number\r
\r
  /**\r
   * Custom paper's maximum height.\r
   */\r
  static maxPaperHeight: number\r
\r
  /**\r
   * Custom paper's maximum height offset.\r
   */\r
  static maxPaperHeightOffset: number\r
\r
  /**\r
   * Custom paper's maximum width.\r
   */\r
  static maxPaperWidth: number\r
\r
  /**\r
   * Custom paper's maximum width offset.\r
   */\r
  static maxPaperWidthOffset: number\r
\r
  /**\r
   * Custom paper's minimum height.\r
   */\r
  static minPaperHeight: number\r
\r
  /**\r
   * Custom paper's minimum height offset.\r
   */\r
  static minPaperHeightOffset: number\r
\r
  /**\r
   * Custom paper's minimum width.\r
   */\r
  static minPaperWidth: number\r
\r
  /**\r
   * Custom paper's minimum width offset.\r
   */\r
  static minPaperWidthOffset: number\r
\r
  /**\r
   * The list of supported paper sizes.\r
   */\r
  static paperSizes: Paper[]\r
\r
  /**\r
   * The PostScript level.\r
   */\r
  static postScriptLevel: PrinterPostScriptLevelEnum\r
\r
  /**\r
   * The printer type.\r
   */\r
  static printerType: PrinterTypeEnum\r
}\r
\r
/**\r
 * A PPD file.\r
 */\r
declare class PPDFile {\r
  /**\r
   * The PPD file information.\r
   */\r
  static PPDInfo: PPDFileInfo\r
\r
  /**\r
   * The PPD model name.\r
   */\r
  static name: string\r
}\r
\r
/**\r
 * PPD file information.\r
 */\r
declare class PPDFileInfo {\r
  /**\r
   * Path specification for the PPD file.\r
   */\r
  static PPDFilePath: File\r
\r
  /**\r
   * The PostScript language level.\r
   */\r
  static languageLevel: string\r
\r
  /**\r
   * List of color separation screens.\r
   */\r
  static screenList: Screen[]\r
\r
  /**\r
   * List of color separation screen spot functions.\r
   */\r
  static screenSpotFunctionList: ScreenSpotFunction[]\r
}\r
\r
/**\r
 * Paper size.\r
 */\r
declare class Paper {\r
  /**\r
   * The paper name.\r
   */\r
  static name: string\r
\r
  /**\r
   * The paper information.\r
   */\r
  static paperInfo: PaperInfo\r
}\r
\r
/**\r
 * Paper information.\r
 */\r
declare class PaperInfo {\r
  /**\r
   * Is it a custom paper?\r
   */\r
  static customPaper: boolean\r
\r
  /**\r
   * The paper's height (in points)\r
   */\r
  static height: number\r
\r
  /**\r
   * The imageable area.\r
   */\r
  static imageableArea: Rect\r
\r
  /**\r
   * The paper's width (in points)\r
   */\r
  static width: number\r
}\r
\r
/**\r
 * Color separation screen.\r
 */\r
declare class Screen {\r
  /**\r
   * The color separation screen name.\r
   */\r
  static name: string\r
\r
  /**\r
   * The color separation screen information.\r
   */\r
  static screenInfo: ScreenInfo\r
}\r
\r
/**\r
 * Screen information.\r
 */\r
declare class ScreenInfo {\r
  /**\r
   * The screen's angle (in degrees)\r
   */\r
  static angle: number\r
\r
  /**\r
   * Is it the default screen?\r
   */\r
  static defaultScreen: boolean\r
\r
  /**\r
   * The screen's frequency.\r
   */\r
  static frequency: number\r
}\r
\r
/**\r
 * Color separation screen spot function.\r
 */\r
declare class ScreenSpotFunction {\r
  /**\r
   * The color separation screen spot function name.\r
   */\r
  static name: string\r
\r
  /**\r
   * The spot function in terms of the PostScript commands.\r
   */\r
  static spotFunction: string\r
}\r
\r
/**\r
 * Printer's ink.\r
 */\r
declare class Ink {\r
  /**\r
   * The ink information.\r
   */\r
  static inkInfo: InkInfo\r
\r
  /**\r
   * The ink's name.\r
   */\r
  static name: string\r
}\r
\r
/**\r
 * Ink information.\r
 */\r
declare class InkInfo {\r
  /**\r
   * The ink's screen angle (in degrees)\r
   */\r
  static angle: number\r
\r
  /**\r
   * The color of the custom ink.\r
   */\r
  static customColor: Color\r
\r
  /**\r
   * The neutral density.\r
   */\r
  static density: number\r
\r
  /**\r
   * The dot shape name.\r
   */\r
  static dotShape: string\r
\r
  /**\r
   * The ink's frequency.\r
   */\r
  static frequency: number\r
\r
  /**\r
   * The ink type.\r
   */\r
  static kind: InkType\r
\r
  /**\r
   * The ink printing status.\r
   */\r
  static printingStatus: InkPrintStatus\r
\r
  /**\r
   * The trapping type.\r
   */\r
  static trapping: TrappingType\r
\r
  /**\r
   * The order of trapping for the ink.\r
   */\r
  static trappingOrder: number\r
}\r
\r
/**\r
 * The new document preset to use for creating a new document.\r
 */\r
declare class DocumentPreset {\r
  /**\r
   * Layout for artboards.\r
   */\r
  static artboardLayout: DocumentArtboardLayout\r
\r
  /**\r
   * Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.\r
   */\r
  static artboardRowsOrCols: number\r
\r
  /**\r
   * Spacing between artboards.\r
   */\r
  static artboardSpacing: number\r
\r
  /**\r
   * The color mode for the new document.\r
   */\r
  static colorMode: DocumentColorSpace\r
\r
  /**\r
   * The height for the new document.\r
   */\r
  static height: number\r
\r
  /**\r
   * Number of artboards for new document.Range (1:100).\r
   */\r
  static numArtboards: number\r
\r
  /**\r
   * The preview mode for the new document.\r
   */\r
  static previewMode: DocumentPreviewMode\r
\r
  /**\r
   * The raster resolution for the new document.\r
   */\r
  static rasterResolution: DocumentRasterResolution\r
\r
  /**\r
   * The title for the new document.\r
   */\r
  static title: string\r
\r
  /**\r
   * The transparency grid for the new document.\r
   */\r
  static transparencyGrid: DocumentTransparencyGrid\r
\r
  /**\r
   * The units for the new document.\r
   */\r
  static units: RulerUnits\r
\r
  /**\r
   * The width for the new document.\r
   */\r
  static width: number\r
}\r
\r
/**\r
 * The print options.\r
 */\r
declare class PrintOptions {\r
  /**\r
   * The name of the PPD to use.\r
   */\r
  static PPDName: string\r
\r
  /**\r
   * The printing color management options.\r
   */\r
  static colorManagementOptions: PrintColorManagementOptions\r
\r
  /**\r
   * The printing color separation options.\r
   */\r
  static colorSeparationOptions: PrintColorSeparationOptions\r
\r
  /**\r
   * The printing coordinate options.\r
   */\r
  static coordinateOptions: PrintCoordinateOptions\r
\r
  /**\r
   * The printing flattener options.\r
   */\r
  static flattenerOptions: PrintFlattenerOptions\r
\r
  /**\r
   * The transparency flattener preset name.\r
   */\r
  static flattenerPreset: string\r
\r
  /**\r
   * The printing font options.\r
   */\r
  static fontOptions: PrintFontOptions\r
\r
  /**\r
   * The printing job options.\r
   */\r
  static jobOptions: PrintJobOptions\r
\r
  /**\r
   * The printing page marks options.\r
   */\r
  static pageMarksOptions: PrintPageMarksOptions\r
\r
  /**\r
   * The paper options.\r
   */\r
  static paperOptions: PrintPaperOptions\r
\r
  /**\r
   * The printing PostScript options.\r
   */\r
  static postScriptOptions: PrintPostScriptOptions\r
\r
  /**\r
   * The name of a print preset to use.\r
   */\r
  static printPreset: string\r
\r
  /**\r
   * The name of the printer to print to.\r
   */\r
  static printerName: string\r
}\r
\r
/**\r
 * The paper options.\r
 */\r
declare class PrintPaperOptions {\r
  /**\r
   * The custom height (in points) for using the custom paper.\r
   */\r
  static height: number\r
\r
  /**\r
   * The paper's name.\r
   */\r
  static name: string\r
\r
  /**\r
   * Custom offset (in points) for using the custom paper.\r
   */\r
  static offset: number\r
\r
  /**\r
   * Whether to transverse the artwork (rotate 90 degrees) on the custom paper.\r
   */\r
  static transverse: boolean\r
\r
  /**\r
   * The custom width (in points) for using the custom paper.\r
   */\r
  static width: number\r
}\r
\r
/**\r
 * The print job options.\r
 */\r
declare class PrintJobOptions {\r
  /**\r
   * Artboard Range to be printed if PrintAllArtboards is false.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * The bitmap resolution.\r
   */\r
  static bitmapResolution: number\r
\r
  /**\r
   * Whether to collate print pages.\r
   */\r
  static collate: boolean\r
\r
  /**\r
   * The number of copies to print.\r
   */\r
  static copies: number\r
\r
  /**\r
   * The layers/objects to be printed.\r
   */\r
  static designation: PrintArtworkDesignation\r
\r
  /**\r
   * The file to be printed to.\r
   */\r
  static file: File\r
\r
  /**\r
   * The print job name.\r
   */\r
  static name: string\r
\r
  /**\r
   * Whether to print all artboards.\r
   */\r
  static printAllArtboards: boolean\r
\r
  /**\r
   * The printing bounds.\r
   */\r
  static printArea: PrintingBounds\r
\r
  /**\r
   * Whether to print as bitmap.\r
   */\r
  static printAsBitmap: boolean\r
\r
  /**\r
   * Print pages in reverse order.\r
   */\r
  static reversePages: boolean\r
}\r
\r
/**\r
 * Print color separation options.\r
 */\r
declare class PrintColorSeparationOptions {\r
  /**\r
   * The color separation type.\r
   */\r
  static colorSeparationMode: PrintColorSeparationMode\r
\r
  /**\r
   * Whether to convert all spot colors to process colors.\r
   */\r
  static convertSpotColors: boolean\r
\r
  /**\r
   * The list of inks for color separation.\r
   */\r
  static inkList: Ink[]\r
\r
  /**\r
   * Whether to overprint in black.\r
   */\r
  static overPrintBlack: boolean\r
}\r
\r
/**\r
 * The print coordinate options.\r
 */\r
declare class PrintCoordinateOptions {\r
  /**\r
   * Whether to flip artwork horizontally.\r
   */\r
  static emulsion: boolean\r
\r
  /**\r
   * Whether to proportionally scale the artwork to fit on the page.\r
   */\r
  static fitToPage: boolean\r
\r
  /**\r
   * The horizontal scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * The artwork orientation.\r
   */\r
  static orientation: PrintOrientation\r
\r
  /**\r
   * The artwork position on media.\r
   */\r
  static position: PrintPosition\r
\r
  /**\r
   * The page tiling mode.\r
   */\r
  static tiling: PrintTiling\r
\r
  /**\r
   * The vertical scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  static verticalScale: number\r
}\r
\r
/**\r
 * The page marks options.\r
 */\r
declare class PrintPageMarksOptions {\r
  /**\r
   * The bleed offset rect.\r
   */\r
  static bleedOffsetRect: Rect\r
\r
  /**\r
   * Whether to enable color bars printing.\r
   */\r
  static colorBars: boolean\r
\r
  /**\r
   * The page marks offset rect.\r
   */\r
  static marksOffsetRect: Rect\r
\r
  /**\r
   * Whether to enable page info marks printing.\r
   */\r
  static pageInfoMarks: boolean\r
\r
  /**\r
   * The page marks style.\r
   */\r
  static pageMarksType: PageMarksTypes\r
\r
  /**\r
   * Whether to enable registration marks printing.\r
   */\r
  static registrationMarks: boolean\r
\r
  /**\r
   * Whether to enable trim marks printing.\r
   */\r
  static trimMarks: boolean\r
\r
  /**\r
   * Stroke weight of trim marks.\r
   */\r
  static trimMarksWeight: number\r
}\r
\r
/**\r
 * The font options for printing.\r
 */\r
declare class PrintFontOptions {\r
  /**\r
   * The font download mode.\r
   */\r
  static downloadFonts: PrintFontDownloadMode\r
\r
  /**\r
   * The font substitution policy.\r
   */\r
  static fontSubstitution: FontSubstitutionPolicy\r
}\r
\r
/**\r
 * The PostScript options.\r
 */\r
declare class PrintPostScriptOptions {\r
  /**\r
   * Whether to print in binary mode.\r
   */\r
  static binaryPrinting: boolean\r
\r
  /**\r
   * Use PostScript level 1 compatible gradient and gradient mesh printing.\r
   */\r
  static compatibleShading: boolean\r
\r
  /**\r
   * Whether to force continuous tone.\r
   */\r
  static forceContinuousTone: boolean\r
\r
  /**\r
   * The image compression type.\r
   */\r
  static imageCompression: PostScriptImageCompressionType\r
\r
  /**\r
   * Whether to print in negative mode.\r
   */\r
  static negativePrinting: boolean\r
\r
  /**\r
   * The PostScript language level.\r
   */\r
  static postScriptLevel: PrinterPostScriptLevelEnum\r
\r
  /**\r
   * The shading resolution.\r
   */\r
  static shadingResolution: number\r
}\r
\r
/**\r
 * The color management options.\r
 */\r
declare class PrintColorManagementOptions {\r
  /**\r
   * The color management profile mode.\r
   */\r
  static colorProfileMode: PrintColorProfile\r
\r
  /**\r
   * The color management intent type.\r
   */\r
  static intent: PrintColorIntent\r
\r
  /**\r
   * The color management profile name.\r
   */\r
  static name: string\r
}\r
\r
/**\r
 * The transparency flattening options.\r
 */\r
declare class PrintFlattenerOptions {\r
  /**\r
   * Whether to clip complex regions.\r
   */\r
  static clipComplexRegions: boolean\r
\r
  /**\r
   * Whether to convert all strokes to outlines.\r
   */\r
  static convertStrokesToOutlines: boolean\r
\r
  /**\r
   * Whether to convert all text to outlines.\r
   */\r
  static convertTextToOutlines: boolean\r
\r
  /**\r
   * The flattening balance.\r
   */\r
  static flatteningBalance: number\r
\r
  /**\r
   * The gradient resolution.\r
   */\r
  static gradientResolution: number\r
\r
  /**\r
   * Overprint.\r
   */\r
  static overprint: PDFOverprint\r
\r
  /**\r
   * The rasterization resolution.\r
   */\r
  static rasterizationResolution: number\r
}\r
\r
/**\r
 * Options which may be supplied when capturing a portion of the artwork as an 24 bit PNG file.\r
 */\r
declare class ImageCaptureOptions {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * The resolution of the captured image file.\r
   */\r
  static resolution: number\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
}\r
\r
/**\r
 * The document raster effects settings.\r
 */\r
declare class RasterEffectOptions {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should a clipping mask be created for the resulting image.\r
   */\r
  static clippingMask: boolean\r
\r
  /**\r
   * The color model for the rasterization.\r
   */\r
  static colorModel: RasterizationColorModel\r
\r
  /**\r
   * Whether to convert all spot colors to process colors in the resulting image.\r
   */\r
  static convertSpotColors: boolean\r
\r
  /**\r
   * The amount of white space (in points) to be added around the object during rasterization.\r
   */\r
  static padding: number\r
\r
  /**\r
   * The rasterization resolution in dots-per-inch (dpi)\r
   */\r
  static resolution: number\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when rasterizing the artwork.\r
 */\r
declare class RasterizeOptions {\r
  /**\r
   * The type of antialiasing method.\r
   */\r
  static antiAliasingMethod: AntiAliasingMethod\r
\r
  /**\r
   * Should rasterize against a black background instead of white.\r
   */\r
  static backgroundBlack: boolean\r
\r
  /**\r
   * Should a clipping mask be created for the resulting image.\r
   */\r
  static clippingMask: boolean\r
\r
  /**\r
   * The color model for the rasterization.\r
   */\r
  static colorModel: RasterizationColorModel\r
\r
  /**\r
   * Whether to convert all spot colors to process colors in the resulting image.\r
   */\r
  static convertSpotColors: boolean\r
\r
  /**\r
   * Should all text be converted to outlines before rasterization.\r
   */\r
  static convertTextToOutlines: boolean\r
\r
  /**\r
   * Should the resulting image incorporates the layer attributes (such as opacity and blend mode)\r
   */\r
  static includeLayers: boolean\r
\r
  /**\r
   * The amount of white space (in points) to be added around the object during rasterization.\r
   */\r
  static padding: number\r
\r
  /**\r
   * The rasterization resolution in dots-per-inch (dpi)\r
   */\r
  static resolution: number\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
}\r
\r
/**\r
 * The Adobe Illustrator application.\r
 */\r
declare class Application {\r
  /**\r
   * The list of PDF preset names currently available for use.\r
   */\r
  readonly PDFPresetsList: string[]\r
\r
  /**\r
   * The list of PPD files currently available for use. For performance reasons, the PPDFile entry only contains the model name and file spec of each PPD file.\r
   */\r
  readonly PPDFileList: PPDFile[]\r
\r
  /**\r
   * The active document.\r
   */\r
  activeDocument: Document\r
\r
  /**\r
   * Is a web browser available?\r
   */\r
  readonly browserAvailable: boolean\r
\r
  /**\r
   * The build number of the Adobe Illustrator application.\r
   */\r
  readonly buildNumber: string\r
\r
  /**\r
   * The list of color settings files currently available for use.\r
   */\r
  readonly colorSettingsList: File[]\r
\r
  /**\r
   * Coordinate System used by script.\r
   */\r
  coordinateSystem: CoordinateSystem\r
\r
  /**\r
   * The default color settings file for the current application locale.\r
   */\r
  readonly defaultColorSettings: File\r
\r
  /**\r
   * The open documents.\r
   */\r
  readonly documents: Documents\r
\r
  /**\r
   * The list of flattener style names currently available for use.\r
   */\r
  readonly flattenerPresetsList: string[]\r
\r
  /**\r
   * The amount of unused memory within the Adobe Illustrator partition.\r
   */\r
  readonly freeMemory: number\r
\r
  /**\r
   * The Locale of the Adobe Illustrator application.\r
   */\r
  readonly locale: string\r
\r
  /**\r
   * The application's name.\r
   */\r
  readonly name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Does paste operation remember layers structure?\r
   */\r
  pasteRemembersLayers: boolean\r
\r
  /**\r
   * Path specification for the application.\r
   */\r
  readonly path: File\r
\r
  /**\r
   * Preferences for Illustrator.\r
   */\r
  readonly preferences: Preferences\r
\r
  /**\r
   * The list of print preset names currently available for use.\r
   */\r
  readonly printPresetsList: string[]\r
\r
  /**\r
   * The list of installed printers.\r
   */\r
  readonly printerList: Printer[]\r
\r
  /**\r
   * The version of the Scripting plugin.\r
   */\r
  readonly scriptingVersion: string\r
\r
  /**\r
   * The selection visible to the user.\r
   */\r
  selection: any\r
\r
  /**\r
   * The list of presets available for creating a new document.\r
   */\r
  readonly startupPresetsList: string[]\r
\r
  /**\r
   * Installed fonts.\r
   */\r
  readonly textFonts: TextFonts\r
\r
  /**\r
   * The list of tracing preset names currently available for use.\r
   */\r
  readonly tracingPresetsList: string[]\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The current users adobe id.\r
   */\r
  readonly userAdobeID: string\r
\r
  /**\r
   * The current user's GUID.\r
   */\r
  readonly userGUID: string\r
\r
  /**\r
   * What level of interaction with the user should be allowed when handling script commands.\r
   */\r
  userInteractionLevel: UserInteractionLevel\r
\r
  /**\r
   * The version of the Adobe Illustrator application.\r
   */\r
  readonly version: string\r
\r
  /**\r
   * Is the application visible.\r
   */\r
  readonly visible: boolean\r
\r
  /**\r
   * Add the specified to the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param destinationSequenceID The UID for the owning sequence.\r
   * @param destinationIndex The item UID where to insert.\r
   * @param srcItemIDData The item ID of the item to construct.\r
   * @param type The source of the item to construct.\r
   */\r
  aATAddItem(\r
    sessionIndex: number,\r
    destinationSequenceID: number,\r
    destinationIndex: number,\r
    srcItemIDData: string,\r
    type: string,\r
  ): string\r
\r
  /**\r
   * Clear the sequencer.\r
   */\r
  aATClear(): string\r
\r
  /**\r
   * Duplicates the specified item(s) from the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param item The item UID(s)\r
   */\r
  aATDuplicateItem(sessionIndex: number, item: string): string\r
\r
  /**\r
   * Opens the specified item from the sequencer in the item editor.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param item The item UID.\r
   */\r
  aATEditItem(sessionIndex: number, item: string): string\r
\r
  /**\r
   * Retrieves a boolean indicating the presence of errors in the last script to execute.\r
   */\r
  aATErrorsExist(): boolean\r
\r
  /**\r
   * Executes the active session in the sequencer.\r
   */\r
  aATExecuteSession(): void\r
\r
  /**\r
   * Executes the active session in the sequencer.\r
   * @param file Execute a session file.\r
   */\r
  aATExecuteSessionFromFile(file: File): void\r
\r
  /**\r
   * Switches a files relative token and path.\r
   * @param path The path relative to the folder specified by Relative.\r
   * @param relative The current relative path token.\r
   * @param newRelative The new relative path token.\r
   */\r
  aATFileRelativeChanged(path: string, relative: string, newRelative: string): string\r
\r
  /**\r
   * Prompts the user to save a file or choose a file or directory and returns a relative path string to the file.\r
   * @param path The path relative to the folder specified by Relative.\r
   * @param relative The current relative path token.\r
   * @param type The type of dialog to show in string format.\r
   */\r
  aATFileSaveDialog(path: string, relative: string, type: string): string\r
\r
  /**\r
   * Retrieves a file path to the AAT editor swf.\r
   */\r
  aATGetEditorDialogFile(): File\r
\r
  /**\r
   * Retrieves a file path to the AAT error dialog swf.\r
   */\r
  aATGetErrorDialogFile(): File\r
\r
  /**\r
   * Gets an XML string listing the relative paths and the UI strings to display them.\r
   */\r
  aATGetListOfRelativePaths(): string\r
\r
  /**\r
   * Get the active session for the sequncer.\r
   */\r
  aATGetSession(): string\r
\r
  /**\r
   * Loads a session file as an extension to the editor.\r
   */\r
  aATLoadLibExtension(): string\r
\r
  /**\r
   * Loads the aat model to the editor.\r
   */\r
  aATLoadModel(): string\r
\r
  /**\r
   * Loads a session into the sequencer.\r
   */\r
  aATLoadSessionFile(): string\r
\r
  /**\r
   * Loads a UI description as an extension to the editor.\r
   */\r
  aATLoadUIExtension(): string\r
\r
  /**\r
   * Moves the specified in the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to move.\r
   * @param moveThisID The UID of the item to replace.\r
   * @param newSessionIndex The index in the session of the destination top-most sequence.\r
   * @param destinationSequenceID The UID for the owning sequence.\r
   * @param destinationIndex The index where to insert.\r
   */\r
  aATMoveItem(\r
    sessionIndex: number,\r
    moveThisID: string,\r
    newSessionIndex: number,\r
    destinationSequenceID: string,\r
    destinationIndex: number,\r
  ): string\r
\r
  /**\r
   * Removes the specified item from the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param item The item UID.\r
   */\r
  aATRemoveItem(sessionIndex: number, item: string): string\r
\r
  /**\r
   * Replaces the specified to the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param replaceThisID The UID of the item to replace.\r
   * @param srcItemIDData The item ID of the item to construct.\r
   * @param type The source of the item to construct.\r
   */\r
  aATReplaceItem(\r
    sessionIndex: number,\r
    replaceThisID: number,\r
    srcItemIDData: string,\r
    type: string,\r
  ): string\r
\r
  /**\r
   * Saves the active session in the sequencer to a new file.\r
   */\r
  aATSaveAsSession(): string\r
\r
  /**\r
   * Saves the active session in the sequencer to a file.\r
   */\r
  aATSaveSession(): string\r
\r
  /**\r
   * Applies the data used in the item editor to the item.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to edit.\r
   * @param item The item UID.\r
   * @param data The data to apply in XML format.\r
   */\r
  applyDataToItem(sessionIndex: number, item: string, data: string): string\r
\r
  /**\r
   * Applies data to the specified item from the sequencer in the item editor.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param item The item UID.\r
   * @param dataID The data to apply in XML format.\r
   * @param data The data to apply in XML format.\r
   */\r
  applySingleDataPointToItem(\r
    sessionIndex: number,\r
    item: string,\r
    dataID: string,\r
    data: string,\r
  ): boolean\r
\r
  /**\r
   *\r
   */\r
  beep(): void\r
\r
  /**\r
   * Starts the automation tests for the Sync Settings feature.\r
   */\r
  beginSyncSettingsAutomationTest(): boolean\r
\r
  /**\r
   * Starts the automation tests for the Typekit Font feature.\r
   */\r
  beginTypekitFontAutomationTest(): boolean\r
\r
  /**\r
   * Concatenate two transformation matrices.\r
   * @param matrix The matrix that is to be added to.\r
   * @param secondMatrix Second transformation matrix.\r
   */\r
  concatenateMatrix(matrix: Matrix, secondMatrix: Matrix): Matrix\r
\r
  /**\r
   * Concatenate a rotation matrix to a transformation matrix.\r
   * @param matrix The matrix that is to be added to.\r
   * @param angle Angle of rotation (in degrees)\r
   */\r
  concatenateRotationMatrix(matrix: Matrix, angle: number): Matrix\r
\r
  /**\r
   * Concatenate a scale matrix to a transformation matrix.\r
   * @param matrix The matrix that is to be added to.\r
   * @param scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)\r
   * @param scaleY Vertical scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  concatenateScaleMatrix(matrix: Matrix, scaleX?: number, scaleY?: number): Matrix\r
\r
  /**\r
   * Concatenate a translation to a transformation matrix.\r
   * @param matrix The matrix that is to be added to.\r
   * @param deltaX Horizontal transformation.\r
   * @param deltaY Vertical transformation.\r
   */\r
  concatenateTranslationMatrix(matrix: Matrix, deltaX?: number, deltaY?: number): Matrix\r
\r
  /**\r
   * Converts a sample-component color from one color space to another.\r
   * @param sourceColorSpace The source color space.\r
   * @param sourceColor The color to convert, an array of color components. First location of the array should contain alpha if source-has-alpha is true.\r
   * @param destColorSpace The destination color space.\r
   * @param colorConvertPurpose The parameter which passes the purpose of conversion.\r
   * @param sourceHasAlpha True if alpha channel is present in source color.\r
   * @param destHasAlpha True if alpha channel is present in destination color.\r
   */\r
  convertSampleColor(\r
    sourceColorSpace: ImageColorSpace,\r
    sourceColor: number[],\r
    destColorSpace: ImageColorSpace,\r
    colorConvertPurpose: ColorConvertPurpose,\r
    sourceHasAlpha?: boolean,\r
    destHasAlpha?: boolean,\r
  ): number[]\r
\r
  /**\r
   * Copy current selection to the clipboard.\r
   */\r
  copy(): void\r
\r
  /**\r
   * Cut current selection to the clipboard.\r
   */\r
  cut(): void\r
\r
  /**\r
   * Deletes an existing workspace.\r
   * @param workspaceName Workspace Name.\r
   */\r
  deleteWorkspace(workspaceName: string): boolean\r
\r
  /**\r
   * Play an action from the Actions Palette.\r
   * @param action The name of the action to play (note that the case of letters in the Action name is important and must match the case of the name in the Actions palette)\r
   * @param from The name of the action set containing the action being played (note that the case of letters in the Action Set name is important and must match the case of the name in the Actions palette)\r
   * @param dialogs Are dialog boxes associated with the action to be presented?\r
   */\r
  doScript(action: string, from: string, dialogs?: boolean): void\r
\r
  /**\r
   * Dump the PGF portion of ai file to txt file.\r
   * @param file The AI file to be opened.\r
   * @param documentColorSpace Choose color space only for documents saved with multiple color models (pre-Illustrator 9)\r
   * @param pGFFile Folder to save the output PGF file.\r
   */\r
  dumpPGFFile(file: File, documentColorSpace?: DocumentColorSpace, pGFFile?: File): boolean\r
\r
  /**\r
   * Executes a menu command using the menu shortcut string.\r
   * @param menuCommandString Menu command shortcut.\r
   */\r
  executeMenuCommand(menuCommandString: string): void\r
\r
  /**\r
   * Returns the JSON Data required by CCX Welcome.\r
   * @param mode Mode for which the data is to be provided.\r
   */\r
  getCCXUserJSONData(mode?: string): string\r
\r
  /**\r
   * Retrieves a string containing the results of the last script to execute.\r
   */\r
  getExecutionOutput(): string\r
\r
  /**\r
   * Returns the JSON Data required by Hello.\r
   */\r
  getHelloJSONData(): string\r
\r
  /**\r
   * Returns an identity matrix.\r
   */\r
  getIdentityMatrix(): Matrix\r
\r
  /**\r
   * Get detailed info from the specified PPD file.\r
   * @param name The model name of the PPD file.\r
   */\r
  getPPDFileInfo(name: string): PPDFileInfo\r
\r
  /**\r
   * Given a preset type, returns the full path to the application's default document profile for the type.\r
   * @param presetType The preset type.\r
   */\r
  getPresetFileOfType(presetType: DocumentPresetType): File\r
\r
  /**\r
   * Given a preset name, tries and retrieves the settings from the preset template.\r
   * @param preset The name of the preset.\r
   */\r
  getPresetSettings(preset: string): DocumentPreset\r
\r
  /**\r
   * Returns a rotation transformation matrix.\r
   * @param angle Angle of rotation (in degrees)\r
   */\r
  getRotationMatrix(angle?: number): Matrix\r
\r
  /**\r
   * Returns a scale transformation matrix.\r
   * @param scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)\r
   * @param scaleY Vertical scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  getScaleMatrix(scaleX?: number, scaleY?: number): Matrix\r
\r
  /**\r
   * Get the scriptable help group object that represents the search widget in the app bar.\r
   */\r
  getScriptableHelpGroup(): any\r
\r
  /**\r
   * Returns a translation matrix.\r
   * @param deltaX Horizontal transformation.\r
   * @param deltaY Vertical transformation.\r
   */\r
  getTranslationMatrix(deltaX?: number, deltaY?: number): Matrix\r
\r
  /**\r
   * Retrieves a string representing the AAT version.\r
   */\r
  getVersionString(): string\r
\r
  /**\r
   * Invert a matrix.\r
   * @param matrix The matrix to invert.\r
   */\r
  invertMatrix(matrix: Matrix): Matrix\r
\r
  /**\r
   * Compares two matrices for equality.\r
   * @param matrix First transformation matrix to compare.\r
   * @param secondMatrix Second transformation matrix.\r
   */\r
  isEqualMatrix(matrix: Matrix, secondMatrix: Matrix): boolean\r
\r
  /**\r
   * Checks if fill is active or not.\r
   */\r
  isFillActive(): boolean\r
\r
  /**\r
   * Tests if a matrix is singular (cannot be inverted)\r
   * @param matrix The matrix to check.\r
   */\r
  isSingularMatrix(matrix: Matrix): boolean\r
\r
  /**\r
   * Checks if stroke is active or not.\r
   */\r
  isStrokeActive(): boolean\r
\r
  /**\r
   * Is In Touch Workspace.\r
   */\r
  isTouchWorkspace(): boolean\r
\r
  /**\r
   * Is user sharing the application usage data.\r
   */\r
  isUserSharingAppUsageData(): boolean\r
\r
  /**\r
   * Launch cep Extension given its ID.\r
   * @param extensionID Arguments for Launching Extension - ID of extension in manifest.xml of corresponding extension.\r
   */\r
  launchExtension(extensionID: string): number\r
\r
  /**\r
   * Load an action into action palette.\r
   * @param actionFilePath The path on the system of the action file to be loaded.\r
   */\r
  loadAction(actionFilePath: File): void\r
\r
  /**\r
   * Load the color settings from the file. If the file is an empty file spec, the color management will be turned off.\r
   * @param fileSpec File spec for the color settings.\r
   */\r
  loadColorSettings(fileSpec: File): void\r
\r
  /**\r
   * Open the specified document file.\r
   * @param file The file to be opened.\r
   * @param documentColorSpace Choose color space only for documents saved with multiple color models (pre-Illustrator 9)\r
   * @param options Options for opening a particular type of file.\r
   */\r
  open(file: File, documentColorSpace?: DocumentColorSpace, options?: any): Document\r
\r
  /**\r
   * For Internal Use.\r
   * @param assetURL For Internal use.\r
   * @param thumbnailURL For Internal use.\r
   * @param options For internal use.\r
   */\r
  openCloudLibraryAssetForEditing(assetURL: File, thumbnailURL: File, options?: any): Document\r
\r
  /**\r
   * Paste clipboard into the current document.\r
   */\r
  paste(): void\r
\r
  /**\r
   * Quit the application.\r
   */\r
  quit(): void\r
\r
  /**\r
   * Redo the last transaction.\r
   */\r
  redo(): void\r
\r
  /**\r
   * Force Illustrator to redraw its window(s)\r
   */\r
  redraw(): void\r
\r
  /**\r
   * Generate Creative Suite ActionScript Wrappers in specified directory.\r
   * @param outputFolder Location for the output files.\r
   */\r
  reflectCSAW(outputFolder: File): void\r
\r
  /**\r
   * Resets the current workspace.\r
   */\r
  resetWorkspace(): boolean\r
\r
  /**\r
   * Runs API Tests from the TestAPI Plug-in.\r
   * @param testName Arguments for Running Tests - eg. Name of Test/Suite.\r
   */\r
  runAPITest(testName: string): void\r
\r
  /**\r
   * Saves a new workspace.\r
   * @param workspaceName Workspace Name.\r
   */\r
  saveWorkspace(workspaceName: string): boolean\r
\r
  /**\r
   * Sends the script message to the required plugin.\r
   * @param pluginName Plugin to which message needs to be sent.\r
   * @param messageSelector Functionality that is to be executed.\r
   * @param inputString Pass any data encoded in a string.\r
   */\r
  sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string\r
\r
  /**\r
   * For Internal Use.\r
   * @param options Options for the PNG24 export.\r
   */\r
  setThumbnailOptionsForCloudLibrary(options: any): void\r
\r
  /**\r
   * Invokes application's color picker.\r
   * @param color The color to load in the color picker initially.\r
   */\r
  showColorPicker(color: Color): Color\r
\r
  /**\r
   * Get presets from the file.\r
   * @param fileSpec File spec to import from.\r
   */\r
  showPresets(fileSpec: File): string[]\r
\r
  /**\r
   * Switches between workspaces.\r
   * @param workspaceName Workspace Name.\r
   */\r
  switchWorkspace(workspaceName: string): boolean\r
\r
  /**\r
   * Translate the placeholder text to regular text. A method to enter unicode points in hex values.\r
   * @param text The placeholder text to be translated.\r
   */\r
  translatePlaceholderText(text: string): string\r
\r
  /**\r
   * Returns a string translated from the key and source data passed in.\r
   * @param key The string to translate.\r
   * @param source The plugin name from the source of the key.\r
   */\r
  translateString(key: string, source: string): string\r
\r
  /**\r
   * Undo the last transaction.\r
   */\r
  undo(): void\r
\r
  /**\r
   * Unloads an action into action palette.\r
   * @param setName Name of the set to be unloaded.\r
   * @param actionName Name of the action to be unloaded.\r
   */\r
  unloadAction(setName: string, actionName: string): void\r
}\r
\r
/**\r
 * A document.\r
 */\r
declare class Document {\r
  /**\r
   * The XMP packet string associated with the document.\r
   */\r
  XMPString: string\r
\r
  /**\r
   * The active data set.\r
   */\r
  activeDataSet: DataSet\r
\r
  /**\r
   * The active layer.\r
   */\r
  activeLayer: Layer\r
\r
  /**\r
   * The document's current view.\r
   */\r
  readonly activeView: View\r
\r
  /**\r
   * All artboards in the document.\r
   */\r
  readonly artboards: Artboards\r
\r
  /**\r
   * The brushes defined in this document.\r
   */\r
  readonly brushes: Brushes\r
\r
  /**\r
   * The list of character styles in this document.\r
   */\r
  readonly characterStyles: CharacterStyles\r
\r
  /**\r
   * The name of the color profile of the document.\r
   */\r
  readonly colorProfileName: string\r
\r
  /**\r
   * The compound path artwork in this collection.\r
   */\r
  readonly compoundPathItems: CompoundPathItems\r
\r
  /**\r
   *\r
   */\r
  cropBox: Rect\r
\r
  /**\r
   *\r
   */\r
  cropStyle: CropOptions\r
\r
  /**\r
   * The data sets defined in this document.\r
   */\r
  readonly dataSets: DataSets\r
\r
  /**\r
   * Default fill color.\r
   */\r
  defaultFillColor: Color\r
\r
  /**\r
   * Will art beneath a filled object be overprinted by default?\r
   */\r
  defaultFillOverprint: boolean\r
\r
  /**\r
   * Should a new path be filled?\r
   */\r
  defaultFilled: boolean\r
\r
  /**\r
   * Default type of line capping.\r
   */\r
  defaultStrokeCap: StrokeCap\r
\r
  /**\r
   * Default stroke color.\r
   */\r
  defaultStrokeColor: Color\r
\r
  /**\r
   * The default distance into the dash pattern at which the pattern should be started.\r
   */\r
  defaultStrokeDashOffset: number\r
\r
  /**\r
   * Default dash lengths (set to {} for a solid line)\r
   */\r
  defaultStrokeDashes: number[]\r
\r
  /**\r
   * Default type of joints.\r
   */\r
  defaultStrokeJoin: StrokeJoin\r
\r
  /**\r
   * Specifies whether a join is mitered (pointed) or beveled (squared-off) by default.\r
   */\r
  defaultStrokeMiterLimit: number\r
\r
  /**\r
   * Will art beneath a stroked object be overprinted by default?\r
   */\r
  defaultStrokeOverprint: boolean\r
\r
  /**\r
   * Default width of stroke.\r
   */\r
  defaultStrokeWidth: number\r
\r
  /**\r
   * Should a new path be stroked?\r
   */\r
  defaultStroked: boolean\r
\r
  /**\r
   * The color space used for the document.\r
   */\r
  readonly documentColorSpace: DocumentColorSpace\r
\r
  /**\r
   * The embedded art items in this layer.\r
   */\r
  readonly embeddedItems: EmbeddedItems\r
\r
  /**\r
   * The file associated with the document.\r
   */\r
  readonly fullName: File\r
\r
  /**\r
   * The bounds of the illustration excluding stroke width.\r
   */\r
  readonly geometricBounds: Rect\r
\r
  /**\r
   * The gradients available in this document.\r
   */\r
  readonly gradients: Gradients\r
\r
  /**\r
   * The graph art items in this document.\r
   */\r
  readonly graphItems: GraphItems\r
\r
  /**\r
   * The graphic styles defined in this document.\r
   */\r
  readonly graphicStyles: ArtStyles\r
\r
  /**\r
   * The group items in this document.\r
   */\r
  readonly groupItems: GroupItems\r
\r
  /**\r
   *\r
   */\r
  readonly height: number\r
\r
  /**\r
   * The list of inks in this document.\r
   */\r
  readonly inkList: Ink[]\r
\r
  /**\r
   * The Kinsoku set.\r
   */\r
  readonly kinsokuSet: string[]\r
\r
  /**\r
   * The layers in this document.\r
   */\r
  readonly layers: Layers\r
\r
  /**\r
   * The text frame items in this story.\r
   */\r
  readonly legacyTextItems: LegacyTextItems\r
\r
  /**\r
   * The mesh art items in this document.\r
   */\r
  readonly meshItems: MeshItems\r
\r
  /**\r
   * The Mojikumi set.\r
   */\r
  readonly mojikumiSet: string[]\r
\r
  /**\r
   * The document's name.\r
   */\r
  readonly name: string\r
\r
  /**\r
   * The non-native art items in this document.\r
   */\r
  readonly nonNativeItems: NonNativeItems\r
\r
  /**\r
   *\r
   */\r
  readonly outputResolution: number\r
\r
  /**\r
   * All the artwork in this document.\r
   */\r
  readonly pageItems: PageItems\r
\r
  /**\r
   *\r
   */\r
  pageOrigin: Point | [number, number]\r
\r
  /**\r
   * The list of paragraph styles in this document.\r
   */\r
  readonly paragraphStyles: ParagraphStyles\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Path specification for the document.\r
   */\r
  readonly path: File\r
\r
  /**\r
   * The path artwork in this document.\r
   */\r
  readonly pathItems: PathItems\r
\r
  /**\r
   * The patterns available in this document.\r
   */\r
  readonly patterns: Patterns\r
\r
  /**\r
   * The placed art items in this document.\r
   */\r
  readonly placedItems: PlacedItems\r
\r
  /**\r
   * The plugin art items in this document.\r
   */\r
  readonly pluginItems: PluginItems\r
\r
  /**\r
   *\r
   */\r
  readonly printTiles: boolean\r
\r
  /**\r
   * The document raster effects settings.\r
   */\r
  rasterEffectSettings: RasterEffectOptions\r
\r
  /**\r
   * The raster art items in this document.\r
   */\r
  readonly rasterItems: RasterItems\r
\r
  /**\r
   *\r
   */\r
  rulerOrigin: Point | [number, number]\r
\r
  /**\r
   *\r
   */\r
  readonly rulerUnits: RulerUnits\r
\r
  /**\r
   * Has the document been saved?\r
   */\r
  saved: boolean\r
\r
  /**\r
   * The selection within the document.\r
   */\r
  selection: any\r
\r
  /**\r
   *\r
   */\r
  readonly showPlacedImages: boolean\r
\r
  /**\r
   *\r
   */\r
  readonly splitLongPaths: boolean\r
\r
  /**\r
   * The custom spot colors available in this document.\r
   */\r
  readonly spots: Spots\r
\r
  /**\r
   * Is the file a stationery file?\r
   */\r
  readonly stationery: boolean\r
\r
  /**\r
   * The story items in this document.\r
   */\r
  readonly stories: Stories\r
\r
  /**\r
   * The Swatch Groups in this document.\r
   */\r
  readonly swatchGroups: SwatchGroups\r
\r
  /**\r
   * The swatches in this document.\r
   */\r
  readonly swatches: Swatches\r
\r
  /**\r
   * The symbol items in this document.\r
   */\r
  readonly symbolItems: SymbolItems\r
\r
  /**\r
   * The symbols defined in this document.\r
   */\r
  readonly symbols: Symbols\r
\r
  /**\r
   * The tags in this document.\r
   */\r
  readonly tags: Tags\r
\r
  /**\r
   * The text frame items in this document.\r
   */\r
  readonly textFrames: TextFrameItems\r
\r
  /**\r
   *\r
   */\r
  readonly tileFullPages: boolean\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   *\r
   */\r
  readonly useDefaultScreen: boolean\r
\r
  /**\r
   * The variables defined in this document.\r
   */\r
  readonly variables: Variables\r
\r
  /**\r
   * The locked variables.\r
   */\r
  variablesLocked: boolean\r
\r
  /**\r
   * The views in this document.\r
   */\r
  readonly views: Views\r
\r
  /**\r
   * The visible bounds of the illustration including stroke width.\r
   */\r
  readonly visibleBounds: Rect\r
\r
  /**\r
   *\r
   */\r
  readonly width: number\r
\r
  /**\r
   * Activate the first window associated with the document.\r
   */\r
  activate(): void\r
\r
  /**\r
   * Close the specified document(s)\r
   * @param saving Specifies whether changes should be saved before closing.\r
   */\r
  close(saving?: SaveOptions): void\r
\r
  /**\r
   * Converts the coordinate system of a single point from one coordinate system to another.\r
   * @param coordinate The Coordinate to convert.\r
   * @param source The source coordinate system.\r
   * @param destination The destination coordinate system.\r
   */\r
  convertCoordinate(\r
    coordinate: Point | [number, number],\r
    source: CoordinateSystem,\r
    destination: CoordinateSystem,\r
  ): Point | [number, number]\r
\r
  /**\r
   * Export the specified document(s)\r
   * @param exportFile The file to export the document to.\r
   * @param exportFormat The file type to export the document as.\r
   * @param options Options for the file type specified.\r
   */\r
  exportFile(exportFile: File, exportFormat: ExportType, options?: any): void\r
\r
  /**\r
   * Save all PDF presets to a file.\r
   * @param file File to export to.\r
   */\r
  exportPDFPreset(file: File): void\r
\r
  /**\r
   * Saves all perspective grid presets to a file.\r
   * @param file File to export to.\r
   */\r
  exportPerspectiveGridPreset(file: File): void\r
\r
  /**\r
   * Export the current print setting to the preset file.\r
   * @param file File to export to.\r
   */\r
  exportPrintPreset(file: File): void\r
\r
  /**\r
   * Export the selection as Ai file.\r
   * @param exportFile The file to export the selection to.\r
   */\r
  exportSelectionAsAi(exportFile: File): void\r
\r
  /**\r
   * Export the selection as PNG file.\r
   * @param exportFile The file to export the selection to.\r
   * @param options Options for the PNG24 export.\r
   */\r
  exportSelectionAsPNG(exportFile: File, options?: any): void\r
\r
  /**\r
   * Save datasets into an XML library. The datasets contain variables and their associated dynamic data.\r
   * @param file File spec to export to.\r
   */\r
  exportVariables(file: File): void\r
\r
  /**\r
   * Change the artboard to selected art bounds.\r
   * @param index The index of the artboard to update.\r
   */\r
  fitArtboardToSelectedArt(index?: number): boolean\r
\r
  /**\r
   * Gets the active plane of the active perspective grid of the document.\r
   */\r
  getPerspectiveActivePlane(): PerspectiveGridPlaneType\r
\r
  /**\r
   * Hides the current active perspective grid for the document, if there is visible perspective grid.\r
   */\r
  hidePerspectiveGrid(): boolean\r
\r
  /**\r
   * Capture the artwork content inside the clip bound as raster image, and write out the captured image data into the target image file.\r
   * @param imageFile The file to which the captured image should be written.\r
   * @param clipBounds The rectangular region of the artwork for image capture. If the parameter is omitted, the entire artwork bound is captured.\r
   * @param options Describes the image capture options.\r
   */\r
  imageCapture(imageFile: File, clipBounds?: Rect, options?: ImageCaptureOptions): void\r
\r
  /**\r
   * Load the character styles from the Illustrator file.\r
   * @param fileSpec File spec to import from.\r
   */\r
  importCharacterStyles(fileSpec: File): void\r
\r
  /**\r
   * Import the file into current Ai document.\r
   * @param importFile The file to import in the current document.\r
   * @param isLinked Is AssetLiveLinked.\r
   * @param libraryName For Internal Use.\r
   * @param itemName For Internal Use.\r
   * @param elementRef For Internal Use.\r
   * @param modifiedTime For Internal Use.\r
   * @param creationTime For Internal Use.\r
   * @param adobeStockId For Internal Use.\r
   * @param adobeStockLicense For Internal Use.\r
   */\r
  importFile(\r
    importFile: File,\r
    isLinked: boolean,\r
    libraryName?: string,\r
    itemName?: string,\r
    elementRef?: string,\r
    modifiedTime?: number,\r
    creationTime?: number,\r
    adobeStockId?: string,\r
    adobeStockLicense?: string,\r
  ): void\r
\r
  /**\r
   * Load all PDF presets from a file.\r
   * @param fileSpec File to import from.\r
   * @param replacingPreset Should existing editable presets be replaced?\r
   */\r
  importPDFPreset(fileSpec: File, replacingPreset?: boolean): void\r
\r
  /**\r
   * Load the paragraph styles from the Illustrator file.\r
   * @param fileSpec File spec to import from.\r
   */\r
  importParagraphStyles(fileSpec: File): void\r
\r
  /**\r
   * Loads mentioned perspective grid preset, if preset name is specified, else loads all(if no preset name is specified) presets, from the specified file.\r
   * @param fileSpec File to import from.\r
   * @param perspectivePreset Name of perspective grid preset.\r
   */\r
  importPerspectiveGridPreset(fileSpec: File, perspectivePreset?: string): void\r
\r
  /**\r
   * Apply the named print preset from the file to the current print setting.\r
   * @param printPreset The name of a print preset to import.\r
   * @param fileSpec File to import from.\r
   */\r
  importPrintPreset(printPreset: string, fileSpec: File): void\r
\r
  /**\r
   * Import a library containing datasets, variables and their associated dynamic data. Importing variables will overwrite existing variables and datasets.\r
   * @param fileSpec File spec to import from.\r
   */\r
  importVariables(fileSpec: File): void\r
\r
  /**\r
   * Print the document.\r
   * @param options Print options.\r
   */\r
  print(options?: PrintOptions): void\r
\r
  /**\r
   * Process a gesture based on input points.\r
   * @param gesturePointsFile File Path containing points constituting the gesture.\r
   */\r
  processGesture(gesturePointsFile: string): void\r
\r
  /**\r
   * Rasterize the source art(s) within the specified clip bounds. The source art(s) are disposed as a result of the rasterization.\r
   * @param sourceArt The page item(s) to be rasterized.\r
   * @param clipBounds The rectangular region of the artwork for the rasterization. If the parameter is omitted, the bounds of the source art(s) is used instead.\r
   * @param options Describes the rasterization options.\r
   */\r
  rasterize(sourceArt: any, clipBounds?: Rect, options?: RasterizeOptions): RasterItem\r
\r
  /**\r
   * Rearrange Artboards in the document.\r
   * @param artboardLayout Layout of artboards for rearrangement.\r
   * @param artboardRowsOrCols Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.\r
   * @param artboardSpacing Spacing between artboards.\r
   * @param artboardMoveArtwork Whether to move artwork with artboards.\r
   */\r
  rearrangeArtboards(\r
    artboardLayout?: DocumentArtboardLayout,\r
    artboardRowsOrCols?: number,\r
    artboardSpacing?: number,\r
    artboardMoveArtwork?: boolean,\r
  ): boolean\r
\r
  /**\r
   * Save the document.\r
   */\r
  save(): void\r
\r
  /**\r
   * Save the document with specific save options.\r
   * @param saveIn The file to save the document in.\r
   * @param options Options for the file type specified.\r
   */\r
  saveAs(saveIn: File, options?: any): void\r
\r
  /**\r
   * Select art objects in active artboard.\r
   */\r
  selectObjectsOnActiveArtboard(): boolean\r
\r
  /**\r
   * Selects a predefined preset to define grid for the current document.\r
   * @param perspectivePreset Name of perspective grid preset.\r
   */\r
  selectPerspectivePreset(perspectivePreset: string): boolean\r
\r
  /**\r
   * Sets the active perspective plane for the active grid of the document.\r
   * @param perspectiveGridPlane Type of perspective grid plane.\r
   */\r
  setPerspectiveActivePlane(perspectiveGridPlane: PerspectiveGridPlaneType): boolean\r
\r
  /**\r
   * Shows the current active perspective grid for the document, if no active perspective grid then shows the default perspective grid for the document.\r
   */\r
  showPerspectiveGrid(): boolean\r
\r
  /**\r
   * Capture the current document window to the target TIFF image file.\r
   * @param imageFile The TIFF file to which the captured image should be written.\r
   * @param windowSize The size to make the window before capture.\r
   */\r
  windowCapture(imageFile: File, windowSize: Point | [number, number]): void\r
}\r
\r
/**\r
 * A layer.\r
 */\r
declare class Layer {\r
  /**\r
   * The absolute drawing order of the layer.\r
   */\r
  readonly absoluteZOrderPosition: number\r
\r
  /**\r
   * Is the artwork used to create a knockout.\r
   */\r
  artworkKnockout: KnockoutState\r
\r
  /**\r
   * The mode used when compositing an object.\r
   */\r
  blendingMode: BlendModes\r
\r
  /**\r
   * Color used when outlining artwork in this layer.\r
   */\r
  color: RGBColor\r
\r
  /**\r
   * The compound path artwork in this layer.\r
   */\r
  readonly compoundPathItems: CompoundPathItems\r
\r
  /**\r
   * Is rendered as dimmed in this layer?\r
   */\r
  dimPlacedImages: boolean\r
\r
  /**\r
   * The graph art items in this layer.\r
   */\r
  readonly graphItems: GraphItems\r
\r
  /**\r
   * The group items in this layer.\r
   */\r
  readonly groupItems: GroupItems\r
\r
  /**\r
   * Is any artwork in this layer selected? Setting this property to false deselects all artwork in the layer.\r
   */\r
  hasSelectedArtwork: boolean\r
\r
  /**\r
   * Is the artwork isolated.\r
   */\r
  isIsolated: boolean\r
\r
  /**\r
   * Nested layers.\r
   */\r
  readonly layers: Layers\r
\r
  /**\r
   * The text frame items in this story.\r
   */\r
  readonly legacyTextItems: LegacyTextItems\r
\r
  /**\r
   * Is the layer editable?\r
   */\r
  locked: boolean\r
\r
  /**\r
   * The mesh art items in this layer.\r
   */\r
  readonly meshItems: MeshItems\r
\r
  /**\r
   * The layer's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The non-native art items in this layer.\r
   */\r
  readonly nonNativeItems: NonNativeItems\r
\r
  /**\r
   * The layer's opacity (between 0.0 and 100.0)\r
   */\r
  opacity: number\r
\r
  /**\r
   * All the artwork in this layer.\r
   */\r
  readonly pageItems: PageItems\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The path artwork in this layer.\r
   */\r
  readonly pathItems: PathItems\r
\r
  /**\r
   * The placed art items in this layer.\r
   */\r
  readonly placedItems: PlacedItems\r
\r
  /**\r
   * The plugin art items in this layer.\r
   */\r
  readonly pluginItems: PluginItems\r
\r
  /**\r
   * Is the layer rendered in preview mode?\r
   */\r
  preview: boolean\r
\r
  /**\r
   * Is the layer printable?\r
   */\r
  printable: boolean\r
\r
  /**\r
   * The raster art items in this layer.\r
   */\r
  readonly rasterItems: RasterItems\r
\r
  /**\r
   * Is the layer sliced (default: false)\r
   */\r
  sliced: boolean\r
\r
  /**\r
   * The symbol items in this layer.\r
   */\r
  readonly symbolItems: SymbolItems\r
\r
  /**\r
   * The text frame items in this layer.\r
   */\r
  readonly textFrames: TextFrameItems\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Is the layer visible?\r
   */\r
  visible: boolean\r
\r
  /**\r
   * The drawing order of the layer.\r
   */\r
  readonly zOrderPosition: number\r
\r
  /**\r
   * Move the object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  move(relativeObject: object, insertionLocation: any): Layer\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Arranges the layer relative to other layers.\r
   * @param zOrderCmd How to arrange the layer.\r
   */\r
  zOrder(zOrderCmd: ZOrderMethod): void\r
}\r
\r
/**\r
 * A view.\r
 */\r
declare class View {\r
  /**\r
   * The bounding rectangle of this view.\r
   */\r
  readonly bounds: Rect\r
\r
  /**\r
   * The center point of this view.\r
   */\r
  centerPoint: Point | [number, number]\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The mode of display.\r
   */\r
  screenMode: ScreenMode\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The zoom factor of this view.\r
   */\r
  zoom: number\r
}\r
\r
/**\r
 * A gradient.\r
 */\r
declare class Gradient {\r
  /**\r
   * The stops in this gradient.\r
   */\r
  readonly gradientStops: GradientStops\r
\r
  /**\r
   * The gradient's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The gradient type.\r
   */\r
  type: GradientType\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A gradient stop.\r
 */\r
declare class GradientStop {\r
  /**\r
   * The color linked to this gradient stop.\r
   */\r
  color: Color\r
\r
  /**\r
   * Midpoint key value in percent.\r
   */\r
  midPoint: number\r
\r
  /**\r
   * The opacity (between 0.0 and 100.0) value for the gradient stop.\r
   */\r
  opacity: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Location of color in the blend (in percent)\r
   */\r
  rampPoint: number\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Preferences for Illustrator.\r
 */\r
declare class Preferences {\r
  /**\r
   * Options to use when opening or placing a AutoCAD file.\r
   */\r
  readonly AutoCADFileOptions: OpenOptionsAutoCAD\r
\r
  /**\r
   * Options to use when opening or placing a PDF file.\r
   */\r
  readonly PDFFileOptions: OpenOptionsPDF\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Options to use when opening or placing a Photoshop file.\r
   */\r
  readonly photoshopFileOptions: OpenOptionsPhotoshop\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Retrieve the value of the application preference key as boolean.\r
   * @param key The preference key.\r
   */\r
  getBooleanPreference(key: string): boolean\r
\r
  /**\r
   * Retrieve the value of the application preference key as integer.\r
   * @param key The preference key.\r
   */\r
  getIntegerPreference(key: string): number\r
\r
  /**\r
   * Retrieve the value of the application preference key as real number.\r
   * @param key The preference key.\r
   */\r
  getRealPreference(key: string): number\r
\r
  /**\r
   * Retrieve the value of the application preference key as string type.\r
   * @param key The preference key.\r
   */\r
  getStringPreference(key: string): string\r
\r
  /**\r
   * Delete the application preference key.\r
   * @param key The preference key.\r
   */\r
  removePreference(key: string): void\r
\r
  /**\r
   * Set the value of the application preference key as boolean.\r
   * @param key The preference key.\r
   * @param value The boolean value of the preference key.\r
   */\r
  setBooleanPreference(key: string, value: boolean): void\r
\r
  /**\r
   * Set the value of the application preference key as integer.\r
   * @param key The preference key.\r
   * @param value The boolean value of the preference key.\r
   */\r
  setIntegerPreference(key: string, value: number): void\r
\r
  /**\r
   * Set the value of the application preference key as real number.\r
   * @param key The preference key.\r
   * @param value The real value of the preference key.\r
   */\r
  setRealPreference(key: string, value: number): void\r
\r
  /**\r
   * Set the value of the application preference key as string type.\r
   * @param key The preference key.\r
   * @param value The string value of the preference key.\r
   */\r
  setStringPreference(key: string, value: string): void\r
}\r
\r
/**\r
 * A custom color.\r
 */\r
declare class Spot {\r
  /**\r
   *\r
   */\r
  color: Color\r
\r
  /**\r
   * Type of the custom color.\r
   */\r
  colorType: ColorModel\r
\r
  /**\r
   * The custom color's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Kind of the spot color (i.e. RGB, CMYK or LAB), it is the name of color kind contained in spot.\r
   */\r
  readonly spotKind: SpotColorKind\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Gets the internal color of a spot.\r
   */\r
  getInternalColor(): number[]\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Dynamic object used to create data-driven graphics.\r
 */\r
declare class Variable {\r
  /**\r
   * The variable's type.\r
   */\r
  kind: VariableKind\r
\r
  /**\r
   * The name of this variable.\r
   */\r
  name: string\r
\r
  /**\r
   * All the artwork in this document.\r
   */\r
  readonly pageItems: PageItems\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A set of variables and their associated dynamic data which will be used for dynamic publishing.\r
 */\r
declare class DataSet {\r
  /**\r
   * The name of this dataset.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Displays the dynamic data that has been captured in the dataset.\r
   */\r
  display(): void\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Re-apply the dynamic data of the active dataset to the artboard.\r
   */\r
  update(): void\r
}\r
\r
/**\r
 * A color swatch.\r
 */\r
declare class Swatch {\r
  /**\r
   * The color information of the swatch.\r
   */\r
  color: Color\r
\r
  /**\r
   * The swatch's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A Swatch group.\r
 */\r
declare class SwatchGroup {\r
  /**\r
   * Name of the swatch group.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Add a spot swatch to the group.\r
   * @param spot The spot swatch to be added to the group.\r
   */\r
  addSpot(spot: Spot): void\r
\r
  /**\r
   * Add a swatch to the group.\r
   * @param swatch The swatch to be added to the group.\r
   */\r
  addSwatch(swatch: Swatch): void\r
\r
  /**\r
   * Get all swatches in the swatch group.\r
   */\r
  getAllSwatches(): Swatch[]\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A pattern.\r
 */\r
declare class Pattern {\r
  /**\r
   * The pattern's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A symbol.\r
 */\r
declare class Symbol {\r
  /**\r
   * The symbol's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Duplicate this object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  duplicate(relativeObject: object, insertionLocation: any): Symbol\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A brush.\r
 */\r
declare class Brush {\r
  /**\r
   * The brush's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Apply a brush or art style to object(s)\r
   * @param artItem The page item(s) to apply to.\r
   */\r
  applyTo(artItem: any): void\r
}\r
\r
/**\r
 * An art style.\r
 */\r
declare class ArtStyle {\r
  /**\r
   * The art style's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Apply a brush or art style to object(s)\r
   * @param artItem The page item(s) to apply to.\r
   */\r
  applyTo(artItem: any): void\r
\r
  /**\r
   * Merge an art style to object(s) current style(s)\r
   * @param artItem The page item(s) to merge to.\r
   */\r
  mergeTo(artItem: any): void\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * An installed font.\r
 */\r
declare class TextFont {\r
  /**\r
   * The font's family name.\r
   */\r
  readonly family: string\r
\r
  /**\r
   * The font's full name.\r
   */\r
  readonly name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The font's style name.\r
   */\r
  readonly style: string\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
}\r
\r
/**\r
 * A page item object.\r
 */\r
declare class PageItem {\r
  /**\r
   * The value of the Adobe URL tag assigned to this artwork item.\r
   */\r
  URL: string\r
\r
  /**\r
   * The absolute drawing order of the layer.\r
   */\r
  readonly absoluteZOrderPosition: number\r
\r
  /**\r
   * Is the artwork used to create a knockout.\r
   */\r
  artworkKnockout: KnockoutState\r
\r
  /**\r
   * The mode used when compositing an object.\r
   */\r
  blendingMode: BlendModes\r
\r
  /**\r
   * The bounds of the artwork including stroke width and controls.\r
   */\r
  readonly controlBounds: Rect\r
\r
  /**\r
   * Can the art item be modified.\r
   */\r
  readonly editable: boolean\r
\r
  /**\r
   * The bounds of the artwork excluding stroke width.\r
   */\r
  readonly geometricBounds: Rect\r
\r
  /**\r
   * The height of the art item.\r
   */\r
  height: number\r
\r
  /**\r
   * Is this artwork item hidden?\r
   */\r
  hidden: boolean\r
\r
  /**\r
   * Is the artwork isolated.\r
   */\r
  isIsolated: boolean\r
\r
  /**\r
   * The layer to which this artwork belongs.\r
   */\r
  readonly layer: Layer\r
\r
  /**\r
   * The left position of the art item.\r
   */\r
  left: number\r
\r
  /**\r
   * Is this artwork item locked?\r
   */\r
  locked: boolean\r
\r
  /**\r
   * The item's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The note assigned to this artwork item.\r
   */\r
  note: string\r
\r
  /**\r
   * The object's opacity (between 0.0 and 100.0)\r
   */\r
  opacity: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Is this artwork item aligned to Pixel Grid?\r
   */\r
  pixelAligned: boolean\r
\r
  /**\r
   * The position of the top left corner of the art item.\r
   */\r
  position: Point | [number, number]\r
\r
  /**\r
   * Is this artwork item selected?\r
   */\r
  selected: boolean\r
\r
  /**\r
   * Is the art item sliced (default: false)\r
   */\r
  sliced: boolean\r
\r
  /**\r
   * The collection of tags associated with this page item.\r
   */\r
  readonly tags: Tags\r
\r
  /**\r
   * The top position of the art item.\r
   */\r
  top: number\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The visibility variable bound to this page item.\r
   */\r
  visibilityVariable: any\r
\r
  /**\r
   * The visible bounds of the artwork including stroke width.\r
   */\r
  readonly visibleBounds: Rect\r
\r
  /**\r
   * The width of the art item.\r
   */\r
  width: number\r
\r
  /**\r
   * Should the text frame object be wrapped inside this object?\r
   */\r
  wrapInside: boolean\r
\r
  /**\r
   * Use this offset when wrapping text around this object.\r
   */\r
  wrapOffset: number\r
\r
  /**\r
   * Wrap text frame objects around this object (text frame must be above the object)\r
   */\r
  wrapped: boolean\r
\r
  /**\r
   * The drawing order of the art within it's group or layer.\r
   */\r
  readonly zOrderPosition: number\r
\r
  /**\r
   * Apply effect to selected artItem.\r
   * @param liveEffectXML\r
   */\r
  applyEffect(liveEffectXML: string): void\r
\r
  /**\r
   * Place art object(s)in perspective grid at spedified perspective plane and coordinate.\r
   * @param positionX Position towards X direction of specified or active perspective grid plane.\r
   * @param positionY Position towards Y direction of specified or active perspective grid plane.\r
   * @param perspectiveGridPlane Type of perspective grid plane.\r
   */\r
  bringInPerspective(\r
    positionX: number,\r
    positionY: number,\r
    perspectiveGridPlane: PerspectiveGridPlaneType,\r
  ): void\r
\r
  /**\r
   * Duplicate this object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  duplicate(relativeObject: object, insertionLocation: any): PageItem\r
\r
  /**\r
   * Move the object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  move(relativeObject: object, insertionLocation: any): PageItem\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Scale art object(s)\r
   * @param scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)\r
   * @param scaleY Vertical scaling factor expressed as a percentage (100 = 100%)\r
   * @param changePositions Are art object positions and orientations effected?\r
   * @param changeFillPatterns Are the fill patterns assigned to paths to be transformed?\r
   * @param changeFillGradients Are the fill gradients assigned to paths to be transformed?\r
   * @param changeStrokePattern Are the stroke patterns assigned to paths to be transformed?\r
   * @param changeLineWidths The amount line widths are to be scaled (expressed as a percentage)\r
   * @param scaleAbout The point on the art item's bounding box to which the scale is applied.\r
   */\r
  resize(\r
    scaleX: number,\r
    scaleY: number,\r
    changePositions?: boolean,\r
    changeFillPatterns?: boolean,\r
    changeFillGradients?: boolean,\r
    changeStrokePattern?: boolean,\r
    changeLineWidths?: number,\r
    scaleAbout?: Transformation,\r
  ): void\r
\r
  /**\r
   * Rotate art object(s)\r
   * @param angle Angle of rotation (in degrees). Rotation is performed counter-clock wise.\r
   * @param changePositions Are art object positions and orientations effected?\r
   * @param changeFillPatterns Are the fill patterns assigned to paths to be transformed?\r
   * @param changeFillGradients Are the fill gradients assigned to paths to be transformed?\r
   * @param changeStrokePattern Are the stroke patterns assigned to paths to be transformed?\r
   * @param rotateAbout The point on the art item's bounding box to which the rotation is applied.\r
   */\r
  rotate(\r
    angle: number,\r
    changePositions?: boolean,\r
    changeFillPatterns?: boolean,\r
    changeFillGradients?: boolean,\r
    changeStrokePattern?: boolean,\r
    rotateAbout?: Transformation,\r
  ): void\r
\r
  /**\r
   * Sends the script message to the required plugin.\r
   * @param pluginName Plugin to which message needs to be sent.\r
   * @param messageSelector Functionality that is to be executed.\r
   * @param inputString Pass any data encoded in a string.\r
   */\r
  sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string\r
\r
  /**\r
   * Transform art object(s) using a transformation matrix.\r
   * @param transformationMatrix The transformation matrix to be applied to the objects.\r
   * @param changePositions Are art object positions and orientations effected?\r
   * @param changeFillPatterns Are the fill patterns assigned to paths to be transformed?\r
   * @param changeFillGradients Are the fill gradients assigned to paths to be transformed?\r
   * @param changeStrokePattern Are the stroke patterns assigned to paths to be transformed?\r
   * @param changeLineWidths The amount line widths are to be scaled (expressed as a percentage)\r
   * @param transformAbout The point on the art item's bounding box to which scale and rotation operations apply.\r
   */\r
  transform(\r
    transformationMatrix: Matrix,\r
    changePositions?: boolean,\r
    changeFillPatterns?: boolean,\r
    changeFillGradients?: boolean,\r
    changeStrokePattern?: boolean,\r
    changeLineWidths?: number,\r
    transformAbout?: Transformation,\r
  ): void\r
\r
  /**\r
   * Reposition art object(s)\r
   * @param deltaX Horizontal transformation.\r
   * @param deltaY Vertical transformation.\r
   * @param transformObjects Are art object positions and orientations affected?\r
   * @param transformFillPatterns Are the fill patterns assigned to paths to be transformed?\r
   * @param transformFillGradients Are the fill gradients assigned to paths to be transformed?\r
   * @param transformStrokePattern Are the stroke patterns assigned to paths to be transformed?\r
   */\r
  translate(\r
    deltaX?: number,\r
    deltaY?: number,\r
    transformObjects?: boolean,\r
    transformFillPatterns?: boolean,\r
    transformFillGradients?: boolean,\r
    transformStrokePattern?: boolean,\r
  ): void\r
\r
  /**\r
   * Arranges the art relative to other art in the group or layer.\r
   * @param zOrderCmd How to arrange the art.\r
   */\r
  zOrder(zOrderCmd: ZOrderMethod): void\r
}\r
\r
/**\r
 * Compound path artwork item.\r
 */\r
declare class CompoundPathItem extends PageItem {\r
  /**\r
   * The path artwork in this compound path.\r
   */\r
  readonly pathItems: PathItems\r
}\r
\r
/**\r
 * A tag associated with a piece of artwork.\r
 */\r
declare class Tag {\r
  /**\r
   * The tag's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The data stored in this tag.\r
   */\r
  value: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * An artwork path item.\r
 */\r
declare class PathItem extends PageItem {\r
  /**\r
   * The area of this path in square points.\r
   */\r
  readonly area: number\r
\r
  /**\r
   * Should this be used as a clipping path?\r
   */\r
  clipping: boolean\r
\r
  /**\r
   * Is this path closed?\r
   */\r
  closed: boolean\r
\r
  /**\r
   * Should the even-odd rule be used to determine insideness?\r
   */\r
  evenodd: boolean\r
\r
  /**\r
   * Fill color.\r
   */\r
  fillColor: Color\r
\r
  /**\r
   * Will art beneath a filled object be overprinted?\r
   */\r
  fillOverprint: boolean\r
\r
  /**\r
   * Should the path be filled?\r
   */\r
  filled: boolean\r
\r
  /**\r
   * Is this path a guide object?\r
   */\r
  guides: boolean\r
\r
  /**\r
   * The length of this path in points.\r
   */\r
  readonly length: number\r
\r
  /**\r
   *\r
   */\r
  readonly pathPoints: PathPoints\r
\r
  /**\r
   * The polarity the path.\r
   */\r
  polarity: PolarityValues\r
\r
  /**\r
   * The resolution of the path.\r
   */\r
  resolution: number\r
\r
  /**\r
   * All the selected points in the path.\r
   */\r
  readonly selectedPathPoints: PathPoints\r
\r
  /**\r
   * Type of line capping.\r
   */\r
  strokeCap: StrokeCap\r
\r
  /**\r
   * Stroke color.\r
   */\r
  strokeColor: Color\r
\r
  /**\r
   * The default distance into the dash pattern at which the pattern should be started.\r
   */\r
  strokeDashOffset: number\r
\r
  /**\r
   * Dash lengths (set to {} for a solid line)\r
   */\r
  strokeDashes: number[]\r
\r
  /**\r
   * Type of joints.\r
   */\r
  strokeJoin: StrokeJoin\r
\r
  /**\r
   * Whether a join is mitered (pointed) or beveled (squared-off)\r
   */\r
  strokeMiterLimit: number\r
\r
  /**\r
   * Will art beneath a stroked object be overprinted?\r
   */\r
  strokeOverprint: boolean\r
\r
  /**\r
   * Width of stroke.\r
   */\r
  strokeWidth: number\r
\r
  /**\r
   * Should the path be stroked?\r
   */\r
  stroked: boolean\r
\r
  /**\r
   * Set the path using the provided array of path point (x, y) coordinate pairs.\r
   * @param pathPoints Array of (x, y) coordinate pairs for the path points.\r
   */\r
  setEntirePath(pathPoints: [number, number][]): void\r
}\r
\r
/**\r
 * A point on a path.\r
 */\r
declare class PathPoint {\r
  /**\r
   * The position (coordinates) of the anchor point.\r
   */\r
  anchor: Point | [number, number]\r
\r
  /**\r
   * Location of the left direction point (in position)\r
   */\r
  leftDirection: Point | [number, number]\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The type of point: smooth/corner.\r
   */\r
  pointType: PointType\r
\r
  /**\r
   * Location of the right direction point (out position)\r
   */\r
  rightDirection: Point | [number, number]\r
\r
  /**\r
   * The path point selected state.\r
   */\r
  selected: PathPointSelection\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Raster artwork item.\r
 */\r
declare class RasterItem extends PageItem {\r
  /**\r
   * The number of bits per channel.\r
   */\r
  readonly bitsPerChannel: number\r
\r
  /**\r
   * Dimensions of raster art object regardless of transformations.\r
   */\r
  boundingBox: Rect\r
\r
  /**\r
   * The number of image channels.\r
   */\r
  readonly channels: number\r
\r
  /**\r
   * List of colorant names.\r
   */\r
  readonly colorants: string[]\r
\r
  /**\r
   * Is the raster art a colorized grayscale image?\r
   */\r
  readonly colorizedGrayscale: boolean\r
\r
  /**\r
   * The content variable bound to this raster art object.\r
   */\r
  contentVariable: any\r
\r
  /**\r
   * Is the raster art embedded within the illustration?\r
   */\r
  embedded: boolean\r
\r
  /**\r
   * The file containing the raster artwork.\r
   */\r
  readonly file: File\r
\r
  /**\r
   * The color space of the raster image.\r
   */\r
  readonly imageColorSpace: ImageColorSpace\r
\r
  /**\r
   * The transformation matrix of the raster art object.\r
   */\r
  matrix: Matrix\r
\r
  /**\r
   * Is the raster art overprinting?\r
   */\r
  overprint: boolean\r
\r
  /**\r
   * Status of the linked image.\r
   */\r
  readonly status: RasterLinkState\r
\r
  /**\r
   * Is the raster art transparent?\r
   */\r
  readonly transparent: boolean\r
\r
  /**\r
   * Colorize the RasterItem with a CMYK or RGB Color.\r
   * @param rasterColor The color to use for coloring the TIFF image.\r
   */\r
  colorize(rasterColor: Color): void\r
\r
  /**\r
   * Trace this raster object using default options. Reorders this raster to the source art.\r
   */\r
  trace(): PluginItem\r
}\r
\r
/**\r
 * Placed artwork item.\r
 */\r
declare class PlacedItem extends PageItem {\r
  /**\r
   * Dimensions of placed art object, regardless of transformations.\r
   */\r
  readonly boundingBox: Rect\r
\r
  /**\r
   * The content variable bound to this placed art object.\r
   */\r
  contentVariable: any\r
\r
  /**\r
   * The file containing the placed artwork.\r
   */\r
  file: File\r
\r
  /**\r
   * The transformation matrix of the placed art object.\r
   */\r
  matrix: Matrix\r
\r
  /**\r
   * Embed the placed art within the illustration.\r
   */\r
  embed(): void\r
\r
  /**\r
   * Relink the placed art with supplied art from file.\r
   * @param fileSpec File spec to relink from.\r
   */\r
  relink(fileSpec: File): void\r
\r
  /**\r
   * Trace this raster object using default options. Reorders this placed to the source art.\r
   */\r
  trace(): PluginItem\r
}\r
\r
/**\r
 * Embedded artwork item.\r
 */\r
declare class EmbedItem extends PageItem {\r
  /**\r
   * The file containing the placed artwork.\r
   */\r
  file: File\r
}\r
\r
/**\r
 * Graph artwork item.\r
 */\r
declare class GraphItem extends PageItem {\r
  /**\r
   * The content variable bound to this graph.\r
   */\r
  contentVariable: any\r
}\r
\r
/**\r
 * Non-native artwork item.\r
 */\r
declare class NonNativeItem extends PageItem {}\r
\r
/**\r
 * Mesh artwork item.\r
 */\r
declare class MeshItem extends PageItem {}\r
\r
/**\r
 * Plugin artwork item.\r
 */\r
declare class PluginItem extends PageItem {\r
  /**\r
   * Is the plugin group a tracing?\r
   */\r
  readonly isTracing: boolean\r
\r
  /**\r
   * The tracing object associated with this plugin item.\r
   */\r
  readonly tracing: TracingObject\r
}\r
\r
/**\r
 * An artwork group item.\r
 */\r
declare class GroupItem extends PageItem {\r
  /**\r
   * Are the group elements clipped to the clipping path?\r
   */\r
  clipped: boolean\r
\r
  /**\r
   * The compound path artwork in this group.\r
   */\r
  readonly compoundPathItems: CompoundPathItems\r
\r
  /**\r
   * The graph art items in this group.\r
   */\r
  readonly graphItems: GraphItems\r
\r
  /**\r
   * The group items in this group.\r
   */\r
  readonly groupItems: GroupItems\r
\r
  /**\r
   * The text frame items in this story.\r
   */\r
  readonly legacyTextItems: LegacyTextItems\r
\r
  /**\r
   * The mesh art items in this group.\r
   */\r
  readonly meshItems: MeshItems\r
\r
  /**\r
   * The non-native art items in this group.\r
   */\r
  readonly nonNativeItems: NonNativeItems\r
\r
  /**\r
   * All the artwork in this group.\r
   */\r
  readonly pageItems: PageItems\r
\r
  /**\r
   * The path artwork in this group.\r
   */\r
  readonly pathItems: PathItems\r
\r
  /**\r
   * The placed art items in this group.\r
   */\r
  readonly placedItems: PlacedItems\r
\r
  /**\r
   * The plugin art items in this group.\r
   */\r
  readonly pluginItems: PluginItems\r
\r
  /**\r
   * The raster art items in this group.\r
   */\r
  readonly rasterItems: RasterItems\r
\r
  /**\r
   * The symbol items in this group.\r
   */\r
  readonly symbolItems: SymbolItems\r
\r
  /**\r
   * The text frame items in this group.\r
   */\r
  readonly textFrames: TextFrameItems\r
}\r
\r
/**\r
 * An instance of a Symbol.\r
 */\r
declare class SymbolItem extends PageItem {\r
  /**\r
   * The symbol that was used to create this symbol item.\r
   */\r
  symbol: Symbol\r
\r
  /**\r
   * Break link to the symbol.\r
   */\r
  breakLink(): void\r
}\r
\r
/**\r
 * A text path item.\r
 */\r
declare class TextPath {\r
  /**\r
   * The area of this path in square points.\r
   */\r
  readonly area: number\r
\r
  /**\r
   * The mode used when compositing an object.\r
   */\r
  blendingMode: BlendModes\r
\r
  /**\r
   * Should this be used as a clipping path?\r
   */\r
  clipping: boolean\r
\r
  /**\r
   * Is this path closed?\r
   */\r
  closed: boolean\r
\r
  /**\r
   * Can the text path be modified.\r
   */\r
  readonly editable: boolean\r
\r
  /**\r
   * Should the even-odd rule be used to determine insideness?\r
   */\r
  evenodd: boolean\r
\r
  /**\r
   * Fill color.\r
   */\r
  fillColor: Color\r
\r
  /**\r
   * Will art beneath a filled object be overprinted?\r
   */\r
  fillOverprint: boolean\r
\r
  /**\r
   * Should the path be filled?\r
   */\r
  filled: boolean\r
\r
  /**\r
   * Is this path a guide object?\r
   */\r
  guides: boolean\r
\r
  /**\r
   * The height of the text path.\r
   */\r
  height: number\r
\r
  /**\r
   * The left position of the text path.\r
   */\r
  left: number\r
\r
  /**\r
   * Note assigned to the path.\r
   */\r
  note: string\r
\r
  /**\r
   * The object's opacity (between 0.0 and 100.0)\r
   */\r
  opacity: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   *\r
   */\r
  readonly pathPoints: PathPoints\r
\r
  /**\r
   * The polarity the path.\r
   */\r
  polarity: PolarityValues\r
\r
  /**\r
   * The position of the top left corner of the text path.\r
   */\r
  position: Point | [number, number]\r
\r
  /**\r
   * The resolution of the path.\r
   */\r
  resolution: number\r
\r
  /**\r
   * All the selected points in the path.\r
   */\r
  readonly selectedPathPoints: PathPoints\r
\r
  /**\r
   * Type of line capping.\r
   */\r
  strokeCap: StrokeCap\r
\r
  /**\r
   * Stroke color.\r
   */\r
  strokeColor: Color\r
\r
  /**\r
   * The default distance into the dash pattern at which the pattern should be started.\r
   */\r
  strokeDashOffset: number\r
\r
  /**\r
   * Dash lengths (set to {} for a solid line)\r
   */\r
  strokeDashes: number[]\r
\r
  /**\r
   * Type of joints.\r
   */\r
  strokeJoin: StrokeJoin\r
\r
  /**\r
   * Whether a join is mitered (pointed) or beveled (squared-off)\r
   */\r
  strokeMiterLimit: number\r
\r
  /**\r
   * Will art beneath a stroked object be overprinted?\r
   */\r
  strokeOverprint: boolean\r
\r
  /**\r
   * Width of stroke.\r
   */\r
  strokeWidth: number\r
\r
  /**\r
   * Should the path be stroked?\r
   */\r
  stroked: boolean\r
\r
  /**\r
   * The top position of the text path.\r
   */\r
  top: number\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The width of the text path.\r
   */\r
  width: number\r
\r
  /**\r
   * Set the path using the provided array of anchor points.\r
   * @param pathPoints Array of anchor values for the path points.\r
   */\r
  setEntirePath(pathPoints: any[]): void\r
}\r
\r
/**\r
 * A contiguous block of text.\r
 */\r
declare class Story {\r
  /**\r
   * All the characters in this text range.\r
   */\r
  readonly characters: Characters\r
\r
  /**\r
   * All the insertion points in this text range.\r
   */\r
  readonly insertionPoints: InsertionPoints\r
\r
  /**\r
   * The number of characters in the story.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * All the lines in this text range.\r
   */\r
  readonly lines: Lines\r
\r
  /**\r
   * All the paragraphs in this text range.\r
   */\r
  readonly paragraphs: Paragraphs\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The text frame items in this story.\r
   */\r
  readonly textFrames: TextFrameItems\r
\r
  /**\r
   * The text range of the story.\r
   */\r
  readonly textRange: TextRange\r
\r
  /**\r
   * All the text in this text range.\r
   */\r
  readonly textRanges: TextRanges\r
\r
  /**\r
   * The selected text (ranges) in the story.\r
   */\r
  readonly textSelection: TextRange[]\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * All the words in this text range.\r
   */\r
  readonly words: Words\r
}\r
\r
/**\r
 * Text frame item.\r
 */\r
declare class TextFrame extends PageItem {\r
  /**\r
   * The position of the anchor point (start of base line for point text)\r
   */\r
  anchor: Point | [number, number]\r
\r
  /**\r
   * The type of a text anti-aliasing on text frame item.\r
   */\r
  antialias: TextAntialias\r
\r
  /**\r
   * All the characters in this text range.\r
   */\r
  readonly characters: Characters\r
\r
  /**\r
   * The column count in the text frame (area text only)\r
   */\r
  columnCount: number\r
\r
  /**\r
   * The column gutter in the text frame (area text only)\r
   */\r
  columnGutter: number\r
\r
  /**\r
   * The content variable bound to this text art item.\r
   */\r
  contentVariable: any\r
\r
  /**\r
   * The text contents of this text frame.\r
   */\r
  contents: string\r
\r
  /**\r
   * The end position of text along a path, as a value relative to the path's segments (path text only)\r
   */\r
  endTValue: number\r
\r
  /**\r
   * The first baseline offset type for text frame item (for Area Text only)\r
   */\r
  firstBaseline: FirstBaselineType\r
\r
  /**\r
   * The first baseline offset minimum value for text frame item (for Area Text only)\r
   */\r
  firstBaselineMin: number\r
\r
  /**\r
   * Flow text between linked frame horizontally first. (area text only)\r
   */\r
  flowLinksHorizontally: boolean\r
\r
  /**\r
   * All the insertion points in this text range.\r
   */\r
  readonly insertionPoints: InsertionPoints\r
\r
  /**\r
   * The type of a text frame item.\r
   */\r
  readonly kind: TextType\r
\r
  /**\r
   * All the lines in this text range.\r
   */\r
  readonly lines: Lines\r
\r
  /**\r
   * The transformation matrix of the text frame object.\r
   */\r
  readonly matrix: Matrix\r
\r
  /**\r
   * The linked text frame following this one.\r
   */\r
  nextFrame: TextFrame\r
\r
  /**\r
   * Is the optical alignment active?\r
   */\r
  opticalAlignment: boolean\r
\r
  /**\r
   * The orientation of the text in the frame.\r
   */\r
  orientation: TextOrientation\r
\r
  /**\r
   * All the paragraphs in this text range.\r
   */\r
  readonly paragraphs: Paragraphs\r
\r
  /**\r
   * The linked text frame preceding this one.\r
   */\r
  previousFrame: TextFrame\r
\r
  /**\r
   * The row count in the text frame (area text only)\r
   */\r
  rowCount: number\r
\r
  /**\r
   * The row gutter in the text frame (area text only)\r
   */\r
  rowGutter: number\r
\r
  /**\r
   * The amount of spacing (path text only)\r
   */\r
  spacing: number\r
\r
  /**\r
   * The start position of text along a path, as a value relative to the path's segments (path text only)\r
   */\r
  startTValue: number\r
\r
  /**\r
   * The story of the text frame.\r
   */\r
  readonly story: Story\r
\r
  /**\r
   * The path for the text frame (area and path text)\r
   */\r
  readonly textPath: TextPath\r
\r
  /**\r
   * The text range of the text frame.\r
   */\r
  readonly textRange: TextRange\r
\r
  /**\r
   * All the text in this text range.\r
   */\r
  readonly textRanges: TextRanges\r
\r
  /**\r
   * The selected text (ranges) in the story.\r
   */\r
  readonly textSelection: TextRange[]\r
\r
  /**\r
   * All the words in this text range.\r
   */\r
  readonly words: Words\r
\r
  /**\r
   * Convert Area Type Text Object To Point Type Object.\r
   */\r
  convertAreaObjectToPointObject(): TextFrame\r
\r
  /**\r
   * Convert Point Type Text Object To Area Type Object.\r
   */\r
  convertPointObjectToAreaObject(): TextFrame\r
\r
  /**\r
   * Convert text item to path items.\r
   */\r
  createOutline(): GroupItem\r
\r
  /**\r
   * Generates the thumbnail with the properties of first character in the text frame.\r
   * @param textString The text string which is to be used in the thumbnail generation.\r
   * @param fontSize The size in points of the text string.\r
   * @param textColor The color of the text string.\r
   * @param destinationPath The location at which the thumbnail is to be stored.\r
   */\r
  generateThumbnailWithTextFrameProperties(\r
    textString: string,\r
    fontSize: number,\r
    textColor: Color,\r
    destinationPath: File,\r
  ): void\r
}\r
\r
/**\r
 * Unconverted legacy text items from documents in pre-version 11 formats.\r
 */\r
declare class LegacyTextItem extends PageItem {\r
  /**\r
   * Has the legacy text item been updated to a native text frame item?\r
   */\r
  readonly converted: boolean\r
\r
  /**\r
   * Create a native text frame from a legacy text item. The original legacy text item is deleted.\r
   */\r
  convertToNative(): GroupItem\r
}\r
\r
/**\r
 * A range of characters from a text item.\r
 */\r
declare class TextRange {\r
  /**\r
   * The character properties for the text range.\r
   */\r
  readonly characterAttributes: CharacterAttributes\r
\r
  /**\r
   * Offset of the first character of the range from the beginning of the story, in characters.\r
   */\r
  characterOffset: number\r
\r
  /**\r
   * List of referenced character styles in the text range.\r
   */\r
  readonly characterStyles: CharacterStyles\r
\r
  /**\r
   * All the characters in this text range.\r
   */\r
  readonly characters: Characters\r
\r
  /**\r
   * The text string.\r
   */\r
  contents: string\r
\r
  /**\r
   * All the insertion points in this text range.\r
   */\r
  readonly insertionPoints: InsertionPoints\r
\r
  /**\r
   * Controls the spacing between two characters (in milli-ems)\r
   */\r
  kerning: number\r
\r
  /**\r
   * Length of text range.\r
   */\r
  length: number\r
\r
  /**\r
   * All the lines in this text range.\r
   */\r
  readonly lines: Lines\r
\r
  /**\r
   * The paragraph properties for the text range.\r
   */\r
  readonly paragraphAttributes: ParagraphAttributes\r
\r
  /**\r
   * List of referenced paragraph styles in the text range.\r
   */\r
  readonly paragraphStyles: ParagraphStyles\r
\r
  /**\r
   * All the paragraphs in this text range.\r
   */\r
  readonly paragraphs: Paragraphs\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The story of the text range.\r
   */\r
  readonly story: Story\r
\r
  /**\r
   * All the text in this text range.\r
   */\r
  readonly textRanges: TextRanges\r
\r
  /**\r
   * The selected text (ranges) in the text range.\r
   */\r
  readonly textSelection: TextRange[]\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * All the words in this text range.\r
   */\r
  readonly words: Words\r
\r
  /**\r
   * Change the capitalization of text.\r
   * @param type The type of case.\r
   */\r
  changeCaseTo(type: CaseChangeType): void\r
\r
  /**\r
   * Deselect the text range.\r
   */\r
  deSelect(): void\r
\r
  /**\r
   * Duplicate this object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  duplicate(relativeObject: object, insertionLocation: any): TextRange\r
\r
  /**\r
   * Move the object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  move(relativeObject: object, insertionLocation: any): TextRange\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Select the text range.\r
   * @param addToDocument Whether to add the text range to the document text selection.\r
   */\r
  select(addToDocument?: boolean): void\r
}\r
\r
/**\r
 * A location between characters, used to insert new text objects.\r
 */\r
declare class InsertionPoint {\r
  /**\r
   * All the characters in this text range.\r
   */\r
  readonly characters: Characters\r
\r
  /**\r
   * All the lines in this text range.\r
   */\r
  readonly lines: Lines\r
\r
  /**\r
   * All the paragraphs in this text range.\r
   */\r
  readonly paragraphs: Paragraphs\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The story of the text range.\r
   */\r
  readonly story: Story\r
\r
  /**\r
   * All the text in this text range.\r
   */\r
  readonly textRanges: TextRanges\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * All the words in this text range.\r
   */\r
  readonly words: Words\r
}\r
\r
/**\r
 * A named style that remembers character attributes.\r
 */\r
declare class CharacterStyle {\r
  /**\r
   * The character properties for the text range.\r
   */\r
  readonly characterAttributes: CharacterAttributes\r
\r
  /**\r
   * The character style's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Adds an element.\r
   */\r
  add(): CharacterStyle\r
\r
  /**\r
   * Apply the character style to text object(s)\r
   * @param textItem The text object(s) to apply the style to.\r
   * @param clearingOverrides Whether to clear any text attributes before apply the style.\r
   */\r
  applyTo(textItem: any, clearingOverrides?: boolean): void\r
\r
  /**\r
   * Remove all the attributes from this character style.\r
   */\r
  clear(): void\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A named style that remembers paragraph attributes.\r
 */\r
declare class ParagraphStyle {\r
  /**\r
   * The character properties for the text range.\r
   */\r
  readonly characterAttributes: CharacterAttributes\r
\r
  /**\r
   * The paragraph style's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The paragraph properties for the text range.\r
   */\r
  readonly paragraphAttributes: ParagraphAttributes\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Adds an element.\r
   */\r
  add(): ParagraphStyle\r
\r
  /**\r
   * Apply the paragraph style to text object(s)\r
   * @param textItem The text object(s) to apply the style to.\r
   * @param clearingOverrides Whether to clear any text attributes before apply the style.\r
   */\r
  applyTo(textItem: any, clearingOverrides?: boolean): void\r
\r
  /**\r
   * Remove all the attributes from this paragraph style.\r
   */\r
  clear(): void\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Properties of a character.\r
 */\r
declare class CharacterAttributes {\r
  /**\r
   * The percentage of space reduction around a Japanese character (100 = 100%)\r
   */\r
  Tsume: number\r
\r
  /**\r
   * The em amount of left aki.\r
   */\r
  akiLeft: number\r
\r
  /**\r
   * The em amount of right aki amount.\r
   */\r
  akiRight: number\r
\r
  /**\r
   * The character alignment type.\r
   */\r
  alignment: StyleRunAlignmentType\r
\r
  /**\r
   * The alternate glyphs form.\r
   */\r
  alternateGlyphs: AlternateGlyphsForm\r
\r
  /**\r
   * Whether to use automatic leading.\r
   */\r
  autoLeading: boolean\r
\r
  /**\r
   * The Japanese text baseline direction.\r
   */\r
  baselineDirection: BaselineDirectionType\r
\r
  /**\r
   * The baseline position of text.\r
   */\r
  baselinePosition: FontBaselineOption\r
\r
  /**\r
   * The amount of shift (in points) of the text baseline.\r
   */\r
  baselineShift: number\r
\r
  /**\r
   * The case of text.\r
   */\r
  capitalization: FontCapsOption\r
\r
  /**\r
   * Whether the OpenType connection forms should be used.\r
   */\r
  connectionForms: boolean\r
\r
  /**\r
   * Whether the contextual ligature should be used.\r
   */\r
  contextualLigature: boolean\r
\r
  /**\r
   * Whether the discretionary ligature should be used.\r
   */\r
  discretionaryLigature: boolean\r
\r
  /**\r
   * Which figure style to use in OpenType font.\r
   */\r
  figureStyle: FigureStyleType\r
\r
  /**\r
   * The color of the text fill.\r
   */\r
  fillColor: Color\r
\r
  /**\r
   * Whether the OpenType fractions should be used.\r
   */\r
  fractions: boolean\r
\r
  /**\r
   * Character horizontal scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  horizontalScale: number\r
\r
  /**\r
   * Does the Japanese OpenType support italics?\r
   */\r
  italics: boolean\r
\r
  /**\r
   * The automatic kerning method to use.\r
   */\r
  kerningMethod: AutoKernType\r
\r
  /**\r
   * The language of text.\r
   */\r
  language: LanguageType\r
\r
  /**\r
   * The amount of space between two lines of text (in points)\r
   */\r
  leading: number\r
\r
  /**\r
   * Whether the ligature should be used.\r
   */\r
  ligature: boolean\r
\r
  /**\r
   * Whether line breaks are allowed.\r
   */\r
  noBreak: boolean\r
\r
  /**\r
   * The OpenType baseline position.\r
   */\r
  openTypePosition: FontOpenTypePositionOption\r
\r
  /**\r
   * Whether the OpenType ordinals should be used.\r
   */\r
  ordinals: boolean\r
\r
  /**\r
   * Whether the OpenType ornaments should be used.\r
   */\r
  ornaments: boolean\r
\r
  /**\r
   * Whether to overprint the fill of the text.\r
   */\r
  overprintFill: boolean\r
\r
  /**\r
   * Whether to overprint the stroke of the text.\r
   */\r
  overprintStroke: boolean\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Does the Japanese OpenType support proportional font?\r
   */\r
  proportionalMetrics: boolean\r
\r
  /**\r
   * The character rotation angle (in degrees)\r
   */\r
  rotation: number\r
\r
  /**\r
   * Font size in points.\r
   */\r
  size: number\r
\r
  /**\r
   * Whether to draw a strike through line over the text.\r
   */\r
  strikeThrough: boolean\r
\r
  /**\r
   * The color of the text stroke.\r
   */\r
  strokeColor: Color\r
\r
  /**\r
   * Line width of stroke.\r
   */\r
  strokeWeight: number\r
\r
  /**\r
   * Whether the OpenType stylistic alternates should be used.\r
   */\r
  stylisticAlternates: boolean\r
\r
  /**\r
   * Whether the OpenType swash should be used.\r
   */\r
  swash: boolean\r
\r
  /**\r
   * The Tate-Chu-Yoko horizontal adjustment in points.\r
   */\r
  tateChuYokoHorizontal: number\r
\r
  /**\r
   * The Tate-Chu-Yoko vertical adjustment in points.\r
   */\r
  tateChuYokoVertical: number\r
\r
  /**\r
   * The text font.\r
   */\r
  textFont: TextFont\r
\r
  /**\r
   * Whether the OpenType titling alternates should be used.\r
   */\r
  titling: boolean\r
\r
  /**\r
   * The tracking or range kerning amount in thousands of an em.\r
   */\r
  tracking: number\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Whether to underline the text.\r
   */\r
  underline: boolean\r
\r
  /**\r
   * Character vertical scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  verticalScale: number\r
\r
  /**\r
   *\r
   */\r
  wariChuCharactersAfterBreak: number\r
\r
  /**\r
   *\r
   */\r
  wariChuCharactersBeforeBreak: number\r
\r
  /**\r
   * Whether WariChu is enabled.\r
   */\r
  wariChuEnabled: boolean\r
\r
  /**\r
   *\r
   */\r
  wariChuJustification: WariChuJustificationType\r
\r
  /**\r
   * The Wari-Chu line gap.\r
   */\r
  wariChuLineGap: number\r
\r
  /**\r
   * The number of Wari-Chu (multiple text lines fit into a space meant for one) lines.\r
   */\r
  wariChuLines: number\r
\r
  /**\r
   * The Wari-Chu scale.\r
   */\r
  wariChuScale: number\r
}\r
\r
/**\r
 * Properties of a paragraph.\r
 */\r
declare class ParagraphAttributes {\r
  /**\r
   * Auto leading amount (in percentage)\r
   */\r
  autoLeadingAmount: number\r
\r
  /**\r
   * Is BunriKinshi enabled?\r
   */\r
  bunriKinshi: boolean\r
\r
  /**\r
   * The Burasagari type.\r
   */\r
  burasagariType: BurasagariTypeEnum\r
\r
  /**\r
   * Desired glyph scaling expressed as a percentage.\r
   */\r
  desiredGlyphScaling: number\r
\r
  /**\r
   * Desired letter spacing expressed as a percentage.\r
   */\r
  desiredLetterSpacing: number\r
\r
  /**\r
   * Desired word spacing expressed as a percentage.\r
   */\r
  desiredWordSpacing: number\r
\r
  /**\r
   * Whether to enable every line composer (as opposed to single line composer)?\r
   */\r
  everyLineComposer: boolean\r
\r
  /**\r
   * First line left indent expressed in points.\r
   */\r
  firstLineIndent: number\r
\r
  /**\r
   * Is hyphenation enabled for the capitalized words?\r
   */\r
  hyphenateCapitalizedWords: boolean\r
\r
  /**\r
   * Is hyphenation enabled for the paragraph?\r
   */\r
  hyphenation: boolean\r
\r
  /**\r
   * Hyphenation preference scale for better spacing (0) or fewer hyphens (1)\r
   */\r
  hyphenationPreference: number\r
\r
  /**\r
   * Size of the hyphenation zone.\r
   */\r
  hyphenationZone: number\r
\r
  /**\r
   * Paragraph justification.\r
   */\r
  justification: Justification\r
\r
  /**\r
   * The Kinsoku Shori name.\r
   */\r
  kinsoku: string\r
\r
  /**\r
   * The preferred Kinsoku order.\r
   */\r
  kinsokuOrder: KinsokuOrderEnum\r
\r
  /**\r
   * Is KurikaeshiMojiShori enabled?\r
   */\r
  kurikaeshiMojiShori: boolean\r
\r
  /**\r
   * Auto leading type.\r
   */\r
  leadingType: AutoLeadingType\r
\r
  /**\r
   * Left indent of margin expressed in points.\r
   */\r
  leftIndent: number\r
\r
  /**\r
   * Maximum number of consecutive hypenated lines.\r
   */\r
  maximumConsecutiveHyphens: number\r
\r
  /**\r
   * Maximum glyph scaling expressed as a percentage.\r
   */\r
  maximumGlyphScaling: number\r
\r
  /**\r
   * Maximum letter spacing expressed as a percentage.\r
   */\r
  maximumLetterSpacing: number\r
\r
  /**\r
   * Maximum word spacing expressed as a percentage.\r
   */\r
  maximumWordSpacing: number\r
\r
  /**\r
   * Minimum number of characters after a hyphen.\r
   */\r
  minimumAfterHyphen: number\r
\r
  /**\r
   * Minimum number of characters before a hyphen.\r
   */\r
  minimumBeforeHyphen: number\r
\r
  /**\r
   * Minimum glyph scaling expressed as a percentage.\r
   */\r
  minimumGlyphScaling: number\r
\r
  /**\r
   * Minimum hyphenated word size.\r
   */\r
  minimumHyphenatedWordSize: number\r
\r
  /**\r
   * Minimum letter spacing expressed as a percentage.\r
   */\r
  minimumLetterSpacing: number\r
\r
  /**\r
   * Minimum word spacing expressed as a percentage.\r
   */\r
  minimumWordSpacing: number\r
\r
  /**\r
   * The Mojikumi name.\r
   */\r
  mojikumi: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Right indent of margin expressed in points.\r
   */\r
  rightIndent: number\r
\r
  /**\r
   * Is Roman hanging punctuation enabled?\r
   */\r
  romanHanging: boolean\r
\r
  /**\r
   * Single word justification.\r
   */\r
  singleWordJustification: Justification\r
\r
  /**\r
   * Spacing after paragraph in points.\r
   */\r
  spaceAfter: number\r
\r
  /**\r
   * Spacing before paragraph in points.\r
   */\r
  spaceBefore: number\r
\r
  /**\r
   * Tab stop settings.\r
   */\r
  tabStops: TabStopInfo[]\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
}\r
\r
/**\r
 * Options which are applied when opening or placing a Photoshop file.\r
 */\r
declare class OpenOptionsPhotoshop {\r
  /**\r
   * Should use the specified LayerComp.\r
   */\r
  layerComp: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Should hidden layers be preserved when the document is converted (default: false)\r
   */\r
  preserveHiddenLayers: boolean\r
\r
  /**\r
   * Should image maps be preserved when the document is converted (default: true)\r
   */\r
  preserveImageMaps: boolean\r
\r
  /**\r
   * Should layers be Preserve when the document is converted (default: true)\r
   */\r
  preserveLayers: boolean\r
\r
  /**\r
   * Should slices be preserved when the document is converted (default: true)\r
   */\r
  preserveSlices: boolean\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
}\r
\r
/**\r
 * Options which may be supplied when opening a PDF file.\r
 */\r
declare class OpenOptionsPDF {\r
  /**\r
   * What box should be used when placing a multipage document (default: PDF media box)\r
   */\r
  pDFCropToBox: PDFBoxType\r
\r
  /**\r
   * What page should be used when opening a multipage document (default: 1)\r
   */\r
  pageToOpen: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
}\r
\r
/**\r
 * Options which may be supplied when opening a AutoCAD file.\r
 */\r
declare class OpenOptionsAutoCAD {\r
  /**\r
   * To center the created artwork on the artboard (default: true)\r
   */\r
  centerArtwork: boolean\r
\r
  /**\r
   * How to scale the AutoCAD drawing on import (default: Fit Artboard)\r
   */\r
  globalScaleOption: AutoCADGlobalScaleOption\r
\r
  /**\r
   * Percentage scaling to apply globally on the AutoCAD drawing (default: 1.0)\r
   */\r
  globalScalePercent: number\r
\r
  /**\r
   * To merge the layers of the artwork (default: false)\r
   */\r
  mergeLayers: boolean\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * To scale lineweights by the same amount as rest of the drawing (default: false)\r
   */\r
  scaleLineweights: boolean\r
\r
  /**\r
   * Name of layout in the AutoCAD drawing to import.\r
   */\r
  selectedLayoutName: string\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Units to which to map (default: Millimeters)\r
   */\r
  unit: AutoCADUnit\r
\r
  /**\r
   * Ratio by which to scale while mapping the units (default: 1.0)\r
   */\r
  unitScaleRatio: number\r
}\r
\r
/**\r
 * Tracing options that guide the tracing process.\r
 */\r
declare class TracingOptions {\r
  /**\r
   * ColorFidelity when TracingColorTypeValue is TracingFullColor.\r
   */\r
  colorFidelity: number\r
\r
  /**\r
   * The color group name used for tracing. Use 'All' or any color group name available in color Palette (library).\r
   */\r
  colorGroup: string\r
\r
  /**\r
   * Corner fidelity for tracing.\r
   */\r
  cornerFidelity: number\r
\r
  /**\r
   * Tracing with fills. Fills, Strokes or both must be on.\r
   */\r
  fills: boolean\r
\r
  /**\r
   * The gray levels for a grayscale mode tracing..\r
   */\r
  grayLevels: number\r
\r
  /**\r
   * Controls whether to ignore white fill color. Works only if TracingMethod is TracingMethodAbutting and mode is Black and white.\r
   */\r
  ignoreWhite: boolean\r
\r
  /**\r
   * Maximum stroke weight (stroke only).\r
   */\r
  maxStrokeWeight: number\r
\r
  /**\r
   * Specifies minimum area of pixels to be vectorized.\r
   */\r
  noiseFidelity: number\r
\r
  /**\r
   * The color palette (Library) name used for tracing. Use 'Document Library' or any other imported library name.\r
   */\r
  palette: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Path fidelity for tracing.\r
   */\r
  pathFidelity: number\r
\r
  /**\r
   * The name of the preset in use. Read-only.\r
   */\r
  readonly preset: string\r
\r
  /**\r
   * Controls whether to snap curve to lines.\r
   */\r
  snapCurveToLines: boolean\r
\r
  /**\r
   * Tracing with strokes. Fills, Strokes or both must be on.\r
   */\r
  strokes: boolean\r
\r
  /**\r
   * The threshold value for a black and white mode tracing.\r
   */\r
  threshold: number\r
\r
  /**\r
   * Color Type used for tracing, TracingLimitedColor or TracingFullColor .\r
   */\r
  tracingColorTypeValue: TracingColorType\r
\r
  /**\r
   * Maximum number of colors allowed for tracing when TracingColorTypeValue is TracingLimitedColor.\r
   */\r
  tracingColors: number\r
\r
  /**\r
   * Method for tracing, either abutting or adjoining paths.\r
   */\r
  tracingMethod: TracingMethodType\r
\r
  /**\r
   * The tracing mode: color, gray, black and white.\r
   */\r
  tracingMode: TracingModeType\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The visualization mode.\r
   */\r
  viewMode: ViewType\r
\r
  /**\r
   * Load options from preset.\r
   * @param presetName The name of the preset.\r
   */\r
  loadFromPreset(presetName: string): boolean\r
\r
  /**\r
   * Store options to a preset kAiVectorizeSuite. Will overwrite an existing (unlocked) preset if names match.\r
   * @param presetName The name of the preset.\r
   */\r
  storeToPreset(presetName: string): boolean\r
}\r
\r
/**\r
 * A tracing object.\r
 */\r
declare class TracingObject {\r
  /**\r
   * The number of anchors in the tracing result.\r
   */\r
  readonly anchorCount: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The number of paths in the tracing result.\r
   */\r
  readonly pathCount: number\r
\r
  /**\r
   * The source art used when creating a new tracing object.\r
   */\r
  readonly sourceArt: PageItem\r
\r
  /**\r
   * The options used when tracing the artwork.\r
   */\r
  readonly tracingOptions: TracingOptions\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The number of colors used in the tracing result.\r
   */\r
  readonly usedColorCount: number\r
\r
  /**\r
   * Expand the tracing to paths. Deletes this tracing object.\r
   * @param viewed Expand as viewed with the raster and vector view modes.\r
   */\r
  expandTracing(viewed?: boolean): GroupItem\r
\r
  /**\r
   * Release the source artwork for the tracing object. Deletes this tracing object.\r
   */\r
  releaseTracing(): PageItem\r
}\r
\r
/**\r
 * An artboard object.\r
 */\r
declare class Artboard {\r
  /**\r
   * Size and position of artboard.\r
   */\r
  artboardRect: Rect\r
\r
  /**\r
   * The name of the artboard.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Ruler origin of artboard.It is relative to left-bottom corner of the Artboard.\r
   */\r
  rulerOrigin: Point | [number, number]\r
\r
  /**\r
   * Pixel aspect ratio, used in ruler visualization if the units are pixels.\r
   */\r
  rulerPAR: number\r
\r
  /**\r
   * Show center mark.\r
   */\r
  showCenter: boolean\r
\r
  /**\r
   * Show cross hairs.\r
   */\r
  showCrossHairs: boolean\r
\r
  /**\r
   * Show title and action safe areas (for video)\r
   */\r
  showSafeAreas: boolean\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Describes a rectangle. This class is also a four-element collection.\r
 *\r
 * Format: left, top, right, bottom.\r
 * Width and height can be computed using \`[r[2] - r[0], r[1] - r[3]]\`.\r
 *\r
 * **Note:** y axis is flipped. Upper means negative number, lower means positive.\r
 *\r
 */\r
type Rect = [number, number, number, number]\r
`}),r(u,{identifier:"paste",type:".txt",children:`class DocumentQuery<T extends QueryItem = LayerQuery<PageItemQuery>> extends Queryable<Document, T> {\r
    private _layers: DocumentQuery<LayerQuery<PageItemQuery>> | undefined;\r
    private _artboards: DocumentQuery<ArtboardQuery> | undefined;\r
    private _views: DocumentQuery<ViewQuery> | undefined;\r
    private _stories: DocumentQuery<StoryQuery<TextRangeQuery>> | undefined;\r
    private _variables: DocumentQuery<VariableQuery> | undefined;\r
    private _swatches: DocumentQuery<SwatchQuery> | undefined;\r
    private _brushes: DocumentQuery<BrushQuery> | undefined;\r
    private _symbols: DocumentQuery<SymbolQuery> | undefined;\r
    private _patterns: DocumentQuery<PatternQuery> | undefined;\r
    private _spots: DocumentQuery<SpotQuery> | undefined;\r
    private _gradients: DocumentQuery<GradientQuery> | undefined;\r
    private _tags: DocumentQuery<TagQuery> | undefined;\r
\r
    active(): boolean { return this.app().item().activeDocument == this._item; }\r
    activate() { this.app().item().activeDocument = this._item; return this; }\r
    deactivate() { this.app().item().activeDocument = f(this.app().item().documents).at(-1); return this; }\r
    remove() { this._item?.close?.(); this._item = QueryItem.empty(); }\r
    activeArtboard(): ArtboardQuery { return this.artboards().at(this.getActiveArtboardIndex()); }\r
    activeLayer(): LayerQuery { return q(this.item().activeLayer); }\r
    activeView(): ViewQuery { return q(this.item().activeView); }\r
    defaults(): ApplicationDefaults { return this.app().defaults(); }\r
    dpi(): number { return this.app().dpi(); }\r
\r
    // QueryItem overrides\r
    document(): DocumentQuery { return this as any; }\r
    artboard(): ArtboardQuery { return this.activeArtboard(); }\r
    layer(): LayerQuery { return this.activeLayer(); }\r
    region(): Region { return this.activeArtboard().region(); }\r
\r
    constructor(doc: Document, collectionType: CollectionType = "layers") {\r
        super(doc, collectionType);\r
\r
        // Ensures Cartesian coordinates\r
        this.item().rulerOrigin = [0, 0];\r
    }\r
\r
    save(fileName?: string): this {\r
        try {\r
            if (fileName === undefined) {\r
                this._item.save();\r
                return this;\r
            }\r
            const file = new File(combinePaths(DOCUMENTS_PATH, fileName));\r
            this._item.saveAs(file);\r
            return api.documents().first(d => d.name() == fileName) as any;\r
        } catch (error: any) {\r
            throw new Error(\`Failed to save document '\${fileName}': \${error.message}\`);\r
        }\r
    }\r
\r
    close() {\r
        this.remove();\r
    }\r
\r
    reset() {\r
        if (this.artboards().any()) {\r
            this.layers().removeAll();\r
            this.artboards().removeAll();\r
        }\r
    }\r
\r
    create(name?: string): T {\r
        if (this.collectionType !== "artboards")\r
            return super.create(name);\r
\r
        throw "Cannot create an artbaord because it is treated as a singleston";\r
    }\r
\r
    removeAll(): void {\r
        if (this.collectionType == "artboards") {\r
            var activeArtboard = this.activeArtboard();\r
            this.where(a => a._item !== activeArtboard._item).do(a => a.remove());\r
            this.activeArtboard().reset();\r
        } else if (this.collectionType == "layers") {\r
            var defaultLayer = this.layers().length() > 0 ? this.layers().at(0) : this.layers().create();\r
            defaultLayer.name(this.defaults().layerName);\r
            defaultLayer.pageItems().removeAll();\r
            defaultLayer.activate();\r
            this.layers().skip(1).do(layer => layer.remove());\r
        } else {\r
            super.removeAll();\r
        }\r
    }\r
\r
    copyLayer(layer: LayerQuery, index: number = -1): LayerQuery {\r
        var differentDocuments = this.item() !== layer.document().item();\r
        if (differentDocuments) {\r
            // Match the aspect ratio of the source artboard\r
            layer.document().activate();\r
            const sourceAspectRatio = layer.document().activeArtboard().aspectRatio();\r
\r
            this.activate();\r
            this.activeArtboard().reset();\r
            this.activeArtboard().aspectRatio(sourceAspectRatio);\r
            this.rearrangeArtboards();\r
        }\r
\r
        // Activate the source document and get its artboard rect\r
        layer.document().activate();\r
        const sourceRect = layer.document().activeArtboard().rect();\r
\r
        // Pre-calculate relative centers for all items in the source layer\r
        const itemCenters = layer.pageItems().select(p => p.p().position());\r
\r
        // Activate the target document and get its artboard rect\r
        this.activate();\r
        const targetRect = this.activeArtboard().rect();\r
\r
        // Create the new layer in the target document\r
        const layers = this.layers();\r
        const newLayer = layers.create(layer.name());\r
        newLayer.replaceWith(layer);\r
        newLayer.moveTo(index);\r
\r
        if (differentDocuments) {\r
            const sourceWidth = Math.abs(sourceRect[2] - sourceRect[0]);\r
            const sourceHeight = Math.abs(sourceRect[1] - sourceRect[3]);\r
            const targetWidth = Math.abs(targetRect[2] - targetRect[0]);\r
            const targetHeight = Math.abs(targetRect[1] - targetRect[3]);\r
            const scaleFactors = { scaleX: targetWidth / sourceWidth, scaleY: targetHeight / sourceHeight }\r
\r
            // Apply scaling and translation using the pre-stored relative centers\r
            newLayer.pageItems().forEach((item, i) => {\r
                i = i as number;\r
                item.p().scale([scaleFactors.scaleX, scaleFactors.scaleY]);\r
                this.p().position(itemCenters.at(i));\r
            });\r
        }\r
\r
        return newLayer;\r
    }\r
\r
    copyArtboard(artboard: ArtboardQuery) {\r
        artboard.document().activate();\r
        this.activeArtboard().aspectRatio(artboard.aspectRatio());\r
        this.activate();\r
    }\r
\r
    getActiveArtboardIndex(): number {\r
        var artboards: Artboards = this.artboards().collection() as Artboards;\r
        var activeIndex = artboards.getActiveArtboardIndex();\r
        if (activeIndex === undefined || activeIndex === null || activeIndex < 0) {\r
            artboards.setActiveArtboardIndex(0);\r
            return 0;\r
        }\r
        return activeIndex;\r
    }\r
\r
    rearrangeArtboards(artboardLayout?: DocumentArtboardLayout, artboardRowsOrCols?: number, artboardSpacing?: number, artboardMoveArtwork?: boolean): boolean {\r
        return this.item().rearrangeArtboards(artboardLayout, artboardRowsOrCols, artboardSpacing, artboardMoveArtwork);\r
    }\r
\r
    layers() {\r
        if (this.collectionType === "layers") return this;\r
        if (this._layers) return this._layers;\r
        this._layers = new DocumentQuery<LayerQuery<PageItemQuery>>(this._item, "layers");\r
        return this._layers;\r
    }\r
\r
    artboards() {\r
        if (this.collectionType === "artboards") return this;\r
        if (this._artboards) return this._artboards;\r
        this._artboards = new DocumentQuery<ArtboardQuery>(this._item, "artboards");\r
        return this._artboards;\r
    }\r
\r
    createArtboard(): ArtboardQuery {\r
        return this._create("artboards");\r
    }\r
\r
    views() {\r
        if (this.collectionType === "views") return this;\r
        if (this._views) return this._views;\r
        this._views = new DocumentQuery<ViewQuery>(this._item, "views");\r
        return this._views;\r
    }\r
\r
    stories() {\r
        if (this.collectionType === "stories") return this;\r
        if (this._stories) return this._stories;\r
        this._stories = new DocumentQuery<StoryQuery<TextRangeQuery>>(this._item, "stories");\r
        return this._stories;\r
    }\r
\r
    variables() {\r
        if (this.collectionType === "variables") return this;\r
        if (this._variables) return this._variables;\r
        this._variables = new DocumentQuery<VariableQuery>(this._item, "variables");\r
        return this._variables;\r
    }\r
\r
    swatches() {\r
        if (this.collectionType === "swatches") return this;\r
        if (this._swatches) return this._swatches;\r
        this._swatches = new DocumentQuery<SwatchQuery>(this._item, "swatches");\r
        return this._swatches;\r
    }\r
\r
    brushes() {\r
        if (this.collectionType === "brushes") return this;\r
        if (this._brushes) return this._brushes;\r
        this._brushes = new DocumentQuery<BrushQuery>(this._item, "brushes");\r
        return this._brushes;\r
    }\r
\r
    symbols() {\r
        if (this.collectionType === "symbols") return this;\r
        if (this._symbols) return this._symbols;\r
        this._symbols = new DocumentQuery<SymbolQuery>(this._item, "symbols");\r
        return this._symbols;\r
    }\r
\r
    patterns() {\r
        if (this.collectionType === "patterns") return this;\r
        if (this._patterns) return this._patterns;\r
        this._patterns = new DocumentQuery<PatternQuery>(this._item, "patterns");\r
        return this._patterns;\r
    }\r
\r
    spots() {\r
        if (this.collectionType === "spots") return this;\r
        if (this._spots) return this._spots;\r
        this._spots = new DocumentQuery<SpotQuery>(this._item, "spots");\r
        return this._spots;\r
    }\r
\r
    gradients() {\r
        if (this.collectionType === "gradients") return this;\r
        if (this._gradients) return this._gradients;\r
        this._gradients = new DocumentQuery<GradientQuery>(this._item, "gradients");\r
        return this._gradients;\r
    }\r
\r
    tags() {\r
        if (this.collectionType === "tags") return this;\r
        if (this._tags) return this._tags;\r
        this._tags = new DocumentQuery<TagQuery>(this._item, "tags");\r
        return this._tags;\r
    }\r
\r
    createLayer(): LayerQuery {\r
        return this._create(i => i.item().layers, layers => q(layers.add()));\r
    }\r
}`}),r(u,{identifier:"paste-2",type:".txt",children:`class LayerQuery<T extends QueryItem = PageItemQuery> extends Queryable<Layer, T> {\r
    document(): DocumentQuery { return (this.parent() as DocumentQuery).layers(); }\r
    private _pageItems: LayerQuery<PageItemQuery> | undefined;\r
    private _compoundPathItems: LayerQuery<CompoundPathItemQuery> | undefined;\r
    private _pathItems: LayerQuery<PathItemQuery> | undefined;\r
    private _rasterItems: LayerQuery<RasterItemQuery> | undefined;\r
    private _placedItems: LayerQuery<PlacedItemQuery> | undefined;\r
    private _meshItems: LayerQuery<MeshItemQuery> | undefined;\r
    private _pluginItems: LayerQuery<PluginItemQuery> | undefined;\r
    private _textFrames: LayerQuery<TextFrameQuery> | undefined;\r
    private _groupItems: LayerQuery<GroupItemQuery> | undefined;\r
    private _symbolItems: LayerQuery<SymbolItemQuery> | undefined;\r
    private _graphItems: LayerQuery<GraphItemQuery> | undefined;\r
\r
    hide(): QueryItem { this.item().visible = false; return this; }\r
    hidden(): boolean { return this.item().visible === false; }\r
    show(): QueryItem { this.item().visible = true; return this; }\r
    visible(): boolean { return this.item().visible === true; }\r
\r
    constructor(layer: Layer, collectionType: CollectionType = "pageItems") {\r
        super(layer, collectionType);\r
    }\r
\r
    group(groupName?: string, predicate?: (item: T) => boolean): GroupItemQuery {\r
        var items = predicate ? this.where(predicate as any) : this.query();\r
        var group = this.groupItems().create(groupName);\r
        items.do(item => item.move(group, ElementPlacement.PLACEATEND));\r
        return group;\r
    }\r
\r
    replaceWith(layer: LayerQuery<T>): void {\r
        this.name(layer.name());\r
        this.pageItems().removeAll();\r
        layer.pageItems().do(item => {\r
            item.duplicate(item.name(), this, ElementPlacement.PLACEATEND);\r
        });\r
    }\r
\r
    pageItems() {\r
        if (this.collectionType === "pageItems") return this;\r
        if (this._pageItems) return this._pageItems;\r
        this._pageItems = new LayerQuery<PageItemQuery>(this._item, "pageItems");\r
        return this._pageItems;\r
    }\r
\r
    compoundPathItems() {\r
        if (this.collectionType === "compoundPathItems") return this;\r
        if (this._compoundPathItems) return this._compoundPathItems;\r
        this._compoundPathItems = new LayerQuery<CompoundPathItemQuery>(this._item, "compoundPathItems");\r
        return this._compoundPathItems;\r
    }\r
\r
    pathItems() {\r
        if (this.collectionType === "pathItems") return this;\r
        if (this._pathItems) return this._pathItems;\r
        this._pathItems = new LayerQuery<PathItemQuery>(this._item, "pathItems");\r
        return this._pathItems;\r
    }\r
\r
    rasterItems() {\r
        if (this.collectionType === "rasterItems") return this;\r
        if (this._rasterItems) return this._rasterItems;\r
        this._rasterItems = new LayerQuery<RasterItemQuery>(this._item, "rasterItems");\r
        return this._rasterItems;\r
    }\r
\r
    placedItems() {\r
        if (this.collectionType === "placedItems") return this;\r
        if (this._placedItems) return this._placedItems;\r
        this._placedItems = new LayerQuery<PlacedItemQuery>(this._item, "placedItems");\r
        return this._placedItems;\r
    }\r
\r
    meshItems() {\r
        if (this.collectionType === "meshItems") return this;\r
        if (this._meshItems) return this._meshItems;\r
        this._meshItems = new LayerQuery<MeshItemQuery>(this._item, "meshItems");\r
        return this._meshItems;\r
    }\r
\r
    pluginItems() {\r
        if (this.collectionType === "pluginItems") return this;\r
        if (this._pluginItems) return this._pluginItems;\r
        this._pluginItems = new LayerQuery<PluginItemQuery>(this._item, "pluginItems");\r
        return this._pluginItems;\r
    }\r
\r
    textFrames() {\r
        if (this.collectionType === "textFrames") return this;\r
        if (this._textFrames) return this._textFrames;\r
        this._textFrames = new LayerQuery<TextFrameQuery>(this._item, "textFrames");\r
        return this._textFrames;\r
    }\r
\r
    groupItems() {\r
        if (this.collectionType === "groupItems") return this;\r
        if (this._groupItems) return this._groupItems;\r
        this._groupItems = new LayerQuery<GroupItemQuery>(this._item, "groupItems");\r
        return this._groupItems;\r
    }\r
\r
    symbolItems() {\r
        if (this.collectionType === "symbolItems") return this;\r
        if (this._symbolItems) return this._symbolItems;\r
        this._symbolItems = new LayerQuery<SymbolItemQuery>(this._item, "symbolItems");\r
        return this._symbolItems;\r
    }\r
\r
    graphItems() {\r
        if (this.collectionType === "graphItems") return this;\r
        if (this._graphItems) return this._graphItems;\r
        this._graphItems = new LayerQuery<GraphItemQuery>(this._item, "graphItems");\r
        return this._graphItems;\r
    }\r
}`}),r(u,{identifier:"paste-3",type:".txt",children:`class GroupItemQuery<T extends QueryItem = PageItemQuery> extends Queryable<GroupItem, T> {\r
    private _pageItems: GroupItemQuery<PageItemQuery> | undefined;\r
    private _compoundPathItems: GroupItemQuery<CompoundPathItemQuery> | undefined;\r
    private _pathItems: GroupItemQuery<PathItemQuery> | undefined;\r
    private _rasterItems: GroupItemQuery<RasterItemQuery> | undefined;\r
    private _placedItems: GroupItemQuery<PlacedItemQuery> | undefined;\r
    private _meshItems: GroupItemQuery<MeshItemQuery> | undefined;\r
    private _pluginItems: GroupItemQuery<PluginItemQuery> | undefined;\r
    private _textFrames: GroupItemQuery<TextFrameQuery> | undefined;\r
    private _groupItems: GroupItemQuery<GroupItemQuery> | undefined;\r
    private _symbolItems: GroupItemQuery<SymbolItemQuery> | undefined;\r
    private _graphItems: GroupItemQuery<GraphItemQuery> | undefined;\r
\r
    constructor(groupItem: GroupItem, collectionType: CollectionType = "pageItems") {\r
        super(groupItem, collectionType);\r
    }\r
\r
    group(groupName?: string, predicate?: (item: T) => boolean): GroupItemQuery {\r
        var items = predicate ? this.where(predicate as any) : this.query();\r
        var group = this.groupItems().create(groupName);\r
        items.do(item => item.move(group, ElementPlacement.PLACEATEND));\r
        return group;\r
    }\r
\r
    ungroup() {\r
        this.reverse().do(item => item.move(this, ElementPlacement.PLACEAFTER));\r
        this.remove();\r
    }\r
\r
    pageItems() {\r
        if (this.collectionType === "pageItems") return this;\r
        if (this._pageItems) return this._pageItems;\r
        this._pageItems = new GroupItemQuery<PageItemQuery>(this._item, "pageItems");\r
        return this._pageItems;\r
    }\r
\r
    compoundPathItems() {\r
        if (this.collectionType === "compoundPathItems") return this;\r
        if (this._compoundPathItems) return this._compoundPathItems;\r
        this._compoundPathItems = new GroupItemQuery<CompoundPathItemQuery>(this._item, "compoundPathItems");\r
        return this._compoundPathItems;\r
    }\r
\r
    pathItems() {\r
        if (this.collectionType === "pathItems") return this;\r
        if (this._pathItems) return this._pathItems;\r
        this._pathItems = new GroupItemQuery<PathItemQuery>(this._item, "pathItems");\r
        return this._pathItems;\r
    }\r
\r
    rasterItems() {\r
        if (this.collectionType === "rasterItems") return this;\r
        if (this._rasterItems) return this._rasterItems;\r
        this._rasterItems = new GroupItemQuery<RasterItemQuery>(this._item, "rasterItems");\r
        return this._rasterItems;\r
    }\r
\r
    placedItems() {\r
        if (this.collectionType === "placedItems") return this;\r
        if (this._placedItems) return this._placedItems;\r
        this._placedItems = new GroupItemQuery<PlacedItemQuery>(this._item, "placedItems");\r
        return this._placedItems;\r
    }\r
\r
    meshItems() {\r
        if (this.collectionType === "meshItems") return this;\r
        if (this._meshItems) return this._meshItems;\r
        this._meshItems = new GroupItemQuery<MeshItemQuery>(this._item, "meshItems");\r
        return this._meshItems;\r
    }\r
\r
    pluginItems() {\r
        if (this.collectionType === "pluginItems") return this;\r
        if (this._pluginItems) return this._pluginItems;\r
        this._pluginItems = new GroupItemQuery<PluginItemQuery>(this._item, "pluginItems");\r
        return this._pluginItems;\r
    }\r
\r
    textFrames() {\r
        if (this.collectionType === "textFrames") return this;\r
        if (this._textFrames) return this._textFrames;\r
        this._textFrames = new GroupItemQuery<TextFrameQuery>(this._item, "textFrames");\r
        return this._textFrames;\r
    }\r
\r
    groupItems() {\r
        if (this.collectionType === "groupItems") return this;\r
        if (this._groupItems) return this._groupItems;\r
        this._groupItems = new GroupItemQuery<GroupItemQuery>(this._item, "groupItems");\r
        return this._groupItems;\r
    }\r
\r
    symbolItems() {\r
        if (this.collectionType === "symbolItems") return this;\r
        if (this._symbolItems) return this._symbolItems;\r
        this._symbolItems = new GroupItemQuery<SymbolItemQuery>(this._item, "symbolItems");\r
        return this._symbolItems;\r
    }\r
\r
    graphItems() {\r
        if (this.collectionType === "graphItems") return this;\r
        if (this._graphItems) return this._graphItems;\r
        this._graphItems = new GroupItemQuery<GraphItemQuery>(this._item, "graphItems");\r
        return this._graphItems;\r
    }\r
}`}),r(u,{identifier:"index-d-2",type:".txt",children:`/// <reference path="../../shared/global.d.ts" />\r
/// <reference path="../../shared/ScriptUI.d.ts" />\r
\r
/**\r
 * The screen mode.\r
 */\r
declare enum ScreenMode {\r
  /**\r
   * Full screen with menu bar.\r
   */\r
  DESKTOP = 2,\r
\r
  /**\r
   * Full screen without menu bar.\r
   */\r
  FULLSCREEN = 3,\r
\r
  /**\r
   * Display multiple windows.\r
   */\r
  MULTIWINDOW = 1,\r
}\r
\r
/**\r
 * The color model.\r
 */\r
declare enum ColorType {\r
  /**\r
   *\r
   */\r
  CMYK = 1,\r
\r
  /**\r
   *\r
   */\r
  GRADIENT = 4,\r
\r
  /**\r
   *\r
   */\r
  GRAY = 0,\r
\r
  /**\r
   *\r
   */\r
  None = 6,\r
\r
  /**\r
   *\r
   */\r
  PATTERN = 2,\r
\r
  /**\r
   *\r
   */\r
  RGB = 5,\r
\r
  /**\r
   *\r
   */\r
  SPOT = 3,\r
}\r
\r
/**\r
 * The color spaces available for documents.\r
 */\r
declare enum DocumentColorSpace {\r
  /**\r
   * CMYK document color space.\r
   */\r
  CMYK = 2,\r
\r
  /**\r
   * RGB document color space.\r
   */\r
  RGB = 1,\r
}\r
\r
/**\r
 * The preset types available for new documents.\r
 */\r
declare enum DocumentPresetType {\r
  /**\r
   * The default CMYK document preset.\r
   */\r
  BasicCMYK = 5,\r
\r
  /**\r
   * The default RGB document preset.\r
   */\r
  BasicRGB = 6,\r
\r
  /**\r
   * The default Mobile document preset.\r
   */\r
  Mobile = 3,\r
\r
  /**\r
   * The default Print document preset.\r
   */\r
  Print = 1,\r
\r
  /**\r
   * The default Video and Film document preset.\r
   */\r
  Video = 4,\r
\r
  /**\r
   * The default Web document preset.\r
   */\r
  Web = 2,\r
}\r
\r
/**\r
 * The raster resolutions available when creating a new document.\r
 */\r
declare enum DocumentRasterResolution {\r
  /**\r
   * High raster resolution, 300 PPI.\r
   */\r
  HighResolution = 3,\r
\r
  /**\r
   * Medium raster resolution, 150 PPI.\r
   */\r
  MediumResolution = 2,\r
\r
  /**\r
   * Low raster resolution, 72 PPI.\r
   */\r
  ScreenResolution = 1,\r
}\r
\r
/**\r
 * The transparency grid for the new document, in video presets.\r
 */\r
declare enum DocumentTransparencyGrid {\r
  /**\r
   * Blue grids.\r
   */\r
  TransparencyGridBlue = 7,\r
\r
  /**\r
   * Dark color grids.\r
   */\r
  TransparencyGridDark = 3,\r
\r
  /**\r
   * Green grids.\r
   */\r
  TransparencyGridGreen = 6,\r
\r
  /**\r
   * Light grid colors.\r
   */\r
  TransparencyGridLight = 1,\r
\r
  /**\r
   * Medium grid colors.\r
   */\r
  TransparencyGridMedium = 2,\r
\r
  /**\r
   * No grids.\r
   */\r
  TransparencyGridNone = 0,\r
\r
  /**\r
   * Orange grids.\r
   */\r
  TransparencyGridOrange = 5,\r
\r
  /**\r
   * Purple grids.\r
   */\r
  TransparencyGridPurple = 8,\r
\r
  /**\r
   * Red grids.\r
   */\r
  TransparencyGridRed = 4,\r
}\r
\r
/**\r
 * The preview modes available when creating a new document.\r
 */\r
declare enum DocumentPreviewMode {\r
  /**\r
   * Default Preview mode.\r
   */\r
  DefaultPreview = 1,\r
\r
  /**\r
   * Overprint Preview Mode.\r
   */\r
  OverprintPreview = 3,\r
\r
  /**\r
   * Pixel Preview mode.\r
   */\r
  PixelPreview = 2,\r
}\r
\r
/**\r
 * The layout of artboards in document.\r
 */\r
declare enum DocumentArtboardLayout {\r
  /**\r
   * Arrange artboards in a single column.\r
   */\r
  Column = 4,\r
\r
  /**\r
   * Arrange artboards in Grid by Column pattern.\r
   */\r
  GridByCol = 2,\r
\r
  /**\r
   * Arrange artboards in Grid by Row pattern.\r
   */\r
  GridByRow = 1,\r
\r
  /**\r
   * Arrange artboards in Grid by Column pattern from right-to-left.\r
   */\r
  RLGridByCol = 6,\r
\r
  /**\r
   * Arrange artboards in Grid by Row pattern from right-to-left.\r
   */\r
  RLGridByRow = 5,\r
\r
  /**\r
   * Arrange artboards in a single row from right-to-left.\r
   */\r
  RLRow = 7,\r
\r
  /**\r
   * Arrange artboards in a single row.\r
   */\r
  Row = 3,\r
}\r
\r
/**\r
 * The color space.\r
 */\r
declare enum ImageColorSpace {\r
  /**\r
   * CMYK color space.\r
   */\r
  CMYK = 3,\r
\r
  /**\r
   * DeviceN color space.\r
   */\r
  DeviceN = 6,\r
\r
  /**\r
   * Gray color space.\r
   */\r
  GrayScale = 1,\r
\r
  /**\r
   * Indexed color space.\r
   */\r
  Indexed = 7,\r
\r
  /**\r
   * LAB color space.\r
   */\r
  LAB = 4,\r
\r
  /**\r
   * RGB color space.\r
   */\r
  RGB = 2,\r
\r
  /**\r
   * Separation color space.\r
   */\r
  Separation = 5,\r
}\r
\r
/**\r
 * The stroke cap.\r
 */\r
declare enum StrokeCap {\r
  /**\r
   * Butted cap.\r
   */\r
  BUTTENDCAP = 1,\r
\r
  /**\r
   * Projecting cap.\r
   */\r
  PROJECTINGENDCAP = 3,\r
\r
  /**\r
   * Rounded cap.\r
   */\r
  ROUNDENDCAP = 2,\r
}\r
\r
/**\r
 * The stroke joint.\r
 */\r
declare enum StrokeJoin {\r
  /**\r
   * Beveled joints.\r
   */\r
  BEVELENDJOIN = 3,\r
\r
  /**\r
   * Mitered joints.\r
   */\r
  MITERENDJOIN = 1,\r
\r
  /**\r
   * Rounded joints.\r
   */\r
  ROUNDENDJOIN = 2,\r
}\r
\r
/**\r
 * The path point selection state.\r
 */\r
declare enum PathPointSelection {\r
  /**\r
   * Anchor point selected.\r
   */\r
  ANCHORPOINT = 2,\r
\r
  /**\r
   * Left direction point selected.\r
   */\r
  LEFTDIRECTION = 3,\r
\r
  /**\r
   * Left and right direction points selected.\r
   */\r
  LEFTRIGHTPOINT = 5,\r
\r
  /**\r
   * Path point not selected.\r
   */\r
  NOSELECTION = 1,\r
\r
  /**\r
   * Right direction point selected.\r
   */\r
  RIGHTDIRECTION = 4,\r
}\r
\r
/**\r
 * The path point type: smooth/corner.\r
 */\r
declare enum PointType {\r
  /**\r
   * Corner point.\r
   */\r
  CORNER = 2,\r
\r
  /**\r
   * Smooth path point.\r
   */\r
  SMOOTH = 1,\r
}\r
\r
/**\r
 * The type of text art.\r
 */\r
declare enum TextType {\r
  /**\r
   * Text within an area.\r
   */\r
  AREATEXT = 1,\r
\r
  /**\r
   * Text on a path.\r
   */\r
  PATHTEXT = 2,\r
\r
  /**\r
   * Text from a point.\r
   */\r
  POINTTEXT = 0,\r
}\r
\r
/**\r
 * The type of text antialiasing.\r
 */\r
declare enum TextAntialias {\r
  /**\r
   * Text on a path.\r
   */\r
  CRISP = 3,\r
\r
  /**\r
   * Text from a point.\r
   */\r
  NONE = 1,\r
\r
  /**\r
   * Text within an area.\r
   */\r
  SHARP = 2,\r
\r
  /**\r
   * Text on a path.\r
   */\r
  STRONG = 4,\r
}\r
\r
/**\r
 * The gradient type.\r
 */\r
declare enum GradientType {\r
  /**\r
   * Linear gradient.\r
   */\r
  LINEAR = 1,\r
\r
  /**\r
   *\r
   */\r
  RADIAL = 2,\r
}\r
\r
/**\r
 * The orientation.\r
 */\r
declare enum TextOrientation {\r
  /**\r
   * Horizontal orientation.\r
   */\r
  HORIZONTAL = 0,\r
\r
  /**\r
   * Vertical orientation.\r
   */\r
  VERTICAL = 1,\r
}\r
\r
/**\r
 * The crop style.\r
 */\r
declare enum CropOptions {\r
  /**\r
   * Japanese crop style.\r
   */\r
  Japanese = 2,\r
\r
  /**\r
   * Standard crop style.\r
   */\r
  Standard = 1,\r
}\r
\r
/**\r
 * The raster link state.\r
 */\r
declare enum RasterLinkState {\r
  /**\r
   * Image data is from the linked file.\r
   */\r
  DATAFROMFILE = 2,\r
\r
  /**\r
   * Image data has been modified.\r
   */\r
  DATAMODIFIED = 3,\r
\r
  /**\r
   * Image data is not set.\r
   */\r
  NODATA = 1,\r
}\r
\r
/**\r
 * The tab alignment.\r
 */\r
declare enum TabStopAlignment {\r
  /**\r
   *\r
   */\r
  Center = 1,\r
\r
  /**\r
   *\r
   */\r
  Decimal = 3,\r
\r
  /**\r
   *\r
   */\r
  Left = 0,\r
\r
  /**\r
   *\r
   */\r
  Right = 2,\r
}\r
\r
/**\r
 * The paragraph alignment.\r
 */\r
declare enum Justification {\r
  /**\r
   *\r
   */\r
  CENTER = 2,\r
\r
  /**\r
   *\r
   */\r
  FULLJUSTIFY = 6,\r
\r
  /**\r
   *\r
   */\r
  FULLJUSTIFYLASTLINECENTER = 5,\r
\r
  /**\r
   *\r
   */\r
  FULLJUSTIFYLASTLINELEFT = 3,\r
\r
  /**\r
   *\r
   */\r
  FULLJUSTIFYLASTLINERIGHT = 4,\r
\r
  /**\r
   *\r
   */\r
  LEFT = 0,\r
\r
  /**\r
   *\r
   */\r
  RIGHT = 1,\r
}\r
\r
/**\r
 * The transformation type.\r
 */\r
declare enum Transformation {\r
  /**\r
   * Transform relative to the object's bottom edge.\r
   */\r
  BOTTOM = 7,\r
\r
  /**\r
   * Transform relative to the object's bottom left corner.\r
   */\r
  BOTTOMLEFT = 4,\r
\r
  /**\r
   * Transform relative to the object's bottom right corner.\r
   */\r
  BOTTOMRIGHT = 10,\r
\r
  /**\r
   * Transform relative to the object's center.\r
   */\r
  CENTER = 6,\r
\r
  /**\r
   * Transform relative to the illustration's page origin.\r
   */\r
  DOCUMENTORIGIN = 1,\r
\r
  /**\r
   * Transform relative to the object's left edge.\r
   */\r
  LEFT = 3,\r
\r
  /**\r
   * Transform relative to the object's right edge.\r
   */\r
  RIGHT = 9,\r
\r
  /**\r
   * Transform relative to the object's top edge.\r
   */\r
  TOP = 5,\r
\r
  /**\r
   * Transform relative to the object's top left corner.\r
   */\r
  TOPLEFT = 2,\r
\r
  /**\r
   * Transform relative to the object's top right corner.\r
   */\r
  TOPRIGHT = 8,\r
}\r
\r
/**\r
 * Illustrator library types.\r
 */\r
declare enum LibraryType {\r
  /**\r
   * Illustrator brushes library.\r
   */\r
  BRUSHES = 3,\r
\r
  /**\r
   * Illustrator graphic styles library.\r
   */\r
  GRAPHICSTYLES = 4,\r
\r
  /**\r
   * Illustrator artwork.\r
   */\r
  ILLUSTRATORARTWORK = 1,\r
\r
  /**\r
   * Illustrator swatches library.\r
   */\r
  SWATCHES = 2,\r
\r
  /**\r
   * Illustrator symbols library.\r
   */\r
  SYMBOLS = 5,\r
}\r
\r
/**\r
 * Savable document types.\r
 */\r
declare enum DocumentType {\r
  /**\r
   * EPS file format.\r
   */\r
  EPS = 2,\r
\r
  /**\r
   * FXG file format.\r
   */\r
  FXG = 4,\r
\r
  /**\r
   * Illustrator file format.\r
   */\r
  ILLUSTRATOR = 1,\r
\r
  /**\r
   * Acrobat PDF file format.\r
   */\r
  PDF = 3,\r
}\r
\r
/**\r
 * Export file types.\r
 */\r
declare enum ExportType {\r
  /**\r
   * AutoCAD export file format.\r
   */\r
  AUTOCAD = 8,\r
\r
  /**\r
   * Flash export file format.\r
   */\r
  FLASH = 7,\r
\r
  /**\r
   * GIF export file format.\r
   */\r
  GIF = 6,\r
\r
  /**\r
   * JPEG export file format.\r
   */\r
  JPEG = 1,\r
\r
  /**\r
   * Photoshop export file format.\r
   */\r
  PHOTOSHOP = 2,\r
\r
  /**\r
   * PNG 24-bit export file format.\r
   */\r
  PNG24 = 5,\r
\r
  /**\r
   * PNG 8-bit export file format.\r
   */\r
  PNG8 = 4,\r
\r
  /**\r
   * SVG export file format.\r
   */\r
  SVG = 3,\r
\r
  /**\r
   * TIFF export file format.\r
   */\r
  TIFF = 9,\r
\r
  /**\r
   * Web Optimized SVG export file format.\r
   */\r
  WOSVG = 10,\r
}\r
\r
/**\r
 * Method used to reduce color for PNG8 and GIF export formats.\r
 */\r
declare enum ColorReductionMethod {\r
  /**\r
   *\r
   */\r
  ADAPTIVE = 0x41647074,\r
\r
  /**\r
   *\r
   */\r
  PERCEPTUAL = 0x50726370,\r
\r
  /**\r
   *\r
   */\r
  SELECTIVE = 0x536c7476,\r
\r
  /**\r
   *\r
   */\r
  WEB = 0x57656220,\r
}\r
\r
/**\r
 * Method used to dither colors for PNG8 and GIF export formats.\r
 */\r
declare enum ColorDitherMethod {\r
  /**\r
   *\r
   */\r
  DIFFUSION = 0x4466736e,\r
\r
  /**\r
   *\r
   */\r
  NOISE = 0x424e6f69,\r
\r
  /**\r
   * No dithering.\r
   */\r
  NOREDUCTION = 0x4e6f6e65,\r
\r
  /**\r
   *\r
   */\r
  PATTERNDITHER = 0x5074726e,\r
}\r
\r
/**\r
 * The compatibility type.\r
 */\r
declare enum Compatibility {\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR10 = 10,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR11 = 11,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR12 = 12,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR13 = 13,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR14 = 14,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR15 = 15,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR16 = 16,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR17 = 17,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR3 = 3,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR8 = 8,\r
\r
  /**\r
   *\r
   */\r
  ILLUSTRATOR9 = 9,\r
\r
  /**\r
   *\r
   */\r
  JAPANESEVERSION3 = 3,\r
}\r
\r
/**\r
 * This provides a means for matching the color characteristics of a PDF document.\r
 */\r
declare enum PDFXStandard {\r
  /**\r
   * Supports only a CMYK and spot color workflow, targeted to a specific output device.\r
   */\r
  PDFX1A2001 = 2,\r
\r
  /**\r
   * Supports only a CMYK and spot color workflow, targeted to a specific output device.\r
   */\r
  PDFX1A2003 = 3,\r
\r
  /**\r
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.\r
   */\r
  PDFX32001 = 4,\r
\r
  /**\r
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.\r
   */\r
  PDFX32002 = 4,\r
\r
  /**\r
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.\r
   */\r
  PDFX32003 = 5,\r
\r
  /**\r
   * Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors.\r
   */\r
  PDFX42007 = 6,\r
\r
  /**\r
   * The user isn't complying with any PDF standard.\r
   */\r
  PDFXNONE = 1,\r
}\r
\r
/**\r
 * The PDF compatibility type.\r
 */\r
declare enum PDFCompatibility {\r
  /**\r
   * Acrobat version 4.\r
   */\r
  ACROBAT4 = 4,\r
\r
  /**\r
   * Acrobat version 5.\r
   */\r
  ACROBAT5 = 5,\r
\r
  /**\r
   * Acrobat version 6.\r
   */\r
  ACROBAT6 = 6,\r
\r
  /**\r
   * Acrobat version 7.\r
   */\r
  ACROBAT7 = 7,\r
\r
  /**\r
   * Acrobat version 8.\r
   */\r
  ACROBAT8 = 8,\r
}\r
\r
/**\r
 * The Photoshop compatibility type.\r
 */\r
declare enum PhotoshopCompatibility {\r
  /**\r
   * Photoshop version 6.\r
   */\r
  PHOTOSHOP6 = 2,\r
\r
  /**\r
   * Photoshop version 8.\r
   */\r
  PHOTOSHOP8 = 1,\r
}\r
\r
/**\r
 * The compression type.\r
 */\r
declare enum CompressionQuality {\r
  /**\r
   * Automatic JPEG2000 compression high.\r
   */\r
  AUTOMATICJPEG2000HIGH = 18,\r
\r
  /**\r
   * Automatic JPEG2000 compression lossless.\r
   */\r
  AUTOMATICJPEG2000LOSSLESS = 20,\r
\r
  /**\r
   * Automatic JPEG2000 compression low.\r
   */\r
  AUTOMATICJPEG2000LOW = 16,\r
\r
  /**\r
   * Automatic JPEG2000 compression maximum.\r
   */\r
  AUTOMATICJPEG2000MAXIMUM = 19,\r
\r
  /**\r
   * Automatic JPEG2000 compression medium.\r
   */\r
  AUTOMATICJPEG2000MEDIUM = 17,\r
\r
  /**\r
   * Automatic JPEG2000 compression minimum.\r
   */\r
  AUTOMATICJPEG2000MINIMUM = 15,\r
\r
  /**\r
   * Automatic JPEG compression high.\r
   */\r
  AUTOMATICJPEGHIGH = 13,\r
\r
  /**\r
   * Automatic JPEG compression low.\r
   */\r
  AUTOMATICJPEGLOW = 11,\r
\r
  /**\r
   * Automatic JPEG compression maximum.\r
   */\r
  AUTOMATICJPEGMAXIMUM = 14,\r
\r
  /**\r
   * Automatic JPEG compression medium.\r
   */\r
  AUTOMATICJPEGMEDIUM = 12,\r
\r
  /**\r
   * Automatically choose between JPEG and ZIP performing minimum compression depending on images.\r
   */\r
  AUTOMATICJPEGMINIMUM = 10,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000HIGH = 24,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000LOSSLESS = 26,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000LOW = 22,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000MAXIMUM = 25,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000MEDIUM = 23,\r
\r
  /**\r
   *\r
   */\r
  JPEG2000MINIMUM = 21,\r
\r
  /**\r
   *\r
   */\r
  JPEGHIGH = 6,\r
\r
  /**\r
   *\r
   */\r
  JPEGLOW = 4,\r
\r
  /**\r
   *\r
   */\r
  JPEGMAXIMUM = 7,\r
\r
  /**\r
   *\r
   */\r
  JPEGMEDIUM = 5,\r
\r
  /**\r
   *\r
   */\r
  JPEGMINIMUM = 3,\r
\r
  /**\r
   * Automatic compression.\r
   */\r
  None = 1,\r
\r
  /**\r
   *\r
   */\r
  ZIP4BIT = 8,\r
\r
  /**\r
   *\r
   */\r
  ZIP8BIT = 9,\r
}\r
\r
/**\r
 * PDF color conversion policy.\r
 */\r
declare enum ColorConversion {\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORCONVERSIONREPURPOSE = 2,\r
\r
  /**\r
   * Converts all colors to the profile selected for Destination.\r
   */\r
  COLORCONVERSIONTODEST = 1,\r
\r
  /**\r
   * Preserves color data as is.\r
   */\r
  None = 0,\r
}\r
\r
/**\r
 * PDF destination profile.\r
 */\r
declare enum ColorDestination {\r
  /**\r
   * Converts all colors to the profile selected for Destination.\r
   */\r
  COLORDESTINATIONDOCCMYK = 1,\r
\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORDESTINATIONDOCRGB = 3,\r
\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORDESTINATIONPROFILE = 5,\r
\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORDESTINATIONWORKINGCMYK = 2,\r
\r
  /**\r
   * Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off.\r
   */\r
  COLORDESTINATIONWORKINGRGB = 4,\r
\r
  /**\r
   * N/A.\r
   */\r
  None = 0,\r
}\r
\r
/**\r
 * PDF ICC profile inclusion.\r
 */\r
declare enum ColorProfile {\r
  /**\r
   * Everything gets tagged (embedProfile == true)\r
   */\r
  INCLUDEALLPROFILE = 1,\r
\r
  /**\r
   * Everything ends up tagged with the destination profile.\r
   */\r
  INCLUDEDESTPROFILE = 4,\r
\r
  /**\r
   * Tag all RGB, leave CMYK unchanged.\r
   */\r
  INCLUDERGBPROFILE = 3,\r
\r
  /**\r
   * Leave tagged items tagged, untagged items untagged.\r
   */\r
  LEAVEPROFILEUNCHANGED = 2,\r
\r
  /**\r
   * All profiles removed (embedProfile == false)\r
   */\r
  None = 0,\r
}\r
\r
/**\r
 * The monochrome compression type.\r
 */\r
declare enum MonochromeCompression {\r
  /**\r
   * CCITT Group 3 compression.\r
   */\r
  CCIT3 = 1,\r
\r
  /**\r
   * CCITT Group 4 compression.\r
   */\r
  CCIT4 = 2,\r
\r
  /**\r
   * ZIP compression.\r
   */\r
  MONOZIP = 3,\r
\r
  /**\r
   * Automatic compression.\r
   */\r
  None = 0,\r
\r
  /**\r
   * RLE compression.\r
   */\r
  RUNLENGTH = 4,\r
}\r
\r
/**\r
 * Pdf trim mark weight options.\r
 */\r
declare enum PDFTrimMarkWeight {\r
  /**\r
   *\r
   */\r
  TRIMMARKWEIGHT0125 = 1,\r
\r
  /**\r
   *\r
   */\r
  TRIMMARKWEIGHT025 = 2,\r
\r
  /**\r
   *\r
   */\r
  TRIMMARKWEIGHT05 = 3,\r
}\r
\r
/**\r
 * Pdf overprint options.\r
 */\r
declare enum PDFOverprint {\r
  /**\r
   * Discard overprint.\r
   */\r
  DISCARDPDFOVERPRINT = 2,\r
\r
  /**\r
   * Preserve overprint.\r
   */\r
  PRESERVEPDFOVERPRINT = 1,\r
}\r
\r
/**\r
 * Pdf print permissions.\r
 */\r
declare enum PDFPrintAllowedEnum {\r
  /**\r
   * Print high resolution allowed - 128bit.\r
   */\r
  PRINT128HIGHRESOLUTION = 3,\r
\r
  /**\r
   * Print allowed only in low resolution - 128bit.\r
   */\r
  PRINT128LOWRESOLUTION = 2,\r
\r
  /**\r
   * Printing allowed none - 128bit.\r
   */\r
  PRINT128NONE = 1,\r
\r
  /**\r
   * Print high resolution allowed - 40bit.\r
   */\r
  PRINT40HIGHRESOLUTION = 5,\r
\r
  /**\r
   * Printing allowed none - 40bit.\r
   */\r
  PRINT40NONE = 4,\r
}\r
\r
/**\r
 * Options available for making changes to a pdf document.\r
 */\r
declare enum PDFChangesAllowedEnum {\r
  /**\r
   * Any changes allowed except extracting of pages- 128bit.\r
   */\r
  CHANGE128ANYCHANGES = 5,\r
\r
  /**\r
   * Comment allowed - 128bit.\r
   */\r
  CHANGE128COMMENTING = 4,\r
\r
  /**\r
   * Editing page allowed - 128bit.\r
   */\r
  CHANGE128EDITPAGE = 2,\r
\r
  /**\r
   * Filling in of form field and signing allowed - 128bit.\r
   */\r
  CHANGE128FILLFORM = 3,\r
\r
  /**\r
   * No changes allowed - 128bit.\r
   */\r
  CHANGE128NONE = 1,\r
\r
  /**\r
   * Any changes allowed except extracting of pages- 40bit.\r
   */\r
  CHANGE40ANYCHANGES = 9,\r
\r
  /**\r
   * Comment allowed - 40bit.\r
   */\r
  CHANGE40COMMENTING = 7,\r
\r
  /**\r
   * No changes allowed - 40bit.\r
   */\r
  CHANGE40NONE = 6,\r
\r
  /**\r
   * Page layout allowed - 40bit.\r
   */\r
  CHANGE40PAGELAYOUT = 8,\r
}\r
\r
/**\r
 * The resample type.\r
 */\r
declare enum DownsampleMethod {\r
  /**\r
   * Average Downsampling.\r
   */\r
  AVERAGEDOWNSAMPLE = 1,\r
\r
  /**\r
   * Bicubic Downsampling.\r
   */\r
  BICUBICDOWNSAMPLE = 3,\r
\r
  /**\r
   * Downsampling.\r
   */\r
  NODOWNSAMPLE = 0,\r
\r
  /**\r
   * Subsampling.\r
   */\r
  SUBSAMPLE = 2,\r
}\r
\r
/**\r
 * The preview type.\r
 */\r
declare enum EPSPreview {\r
  /**\r
   * Black and white Macintosh preview.\r
   */\r
  BWMACINTOSH = 2,\r
\r
  /**\r
   * Black and white PC preview.\r
   */\r
  BWTIFF = 4,\r
\r
  /**\r
   * Color Macintosh preview.\r
   */\r
  COLORMACINTOSH = 3,\r
\r
  /**\r
   * Color PC preview.\r
   */\r
  COLORTIFF = 6,\r
\r
  /**\r
   * No preview.\r
   */\r
  None = 1,\r
\r
  /**\r
   * Transparent color PC preview (8 or later)\r
   */\r
  TRANSPARENTCOLORTIFF = 5,\r
}\r
\r
/**\r
 * The PostScript levels available when saving EPS files.\r
 */\r
declare enum EPSPostScriptLevelEnum {\r
  /**\r
   * PostScript Level 2.\r
   */\r
  LEVEL2 = 2,\r
\r
  /**\r
   * PostScript Level 3.\r
   */\r
  LEVEL3 = 3,\r
}\r
\r
/**\r
 * The PostScript levels supported by various printers.\r
 */\r
declare enum PrinterPostScriptLevelEnum {\r
  /**\r
   * PostScript Level 1.\r
   */\r
  PSLEVEL1 = 1,\r
\r
  /**\r
   * PostScript Level 2.\r
   */\r
  PSLEVEL2 = 2,\r
\r
  /**\r
   * PostScript Level 3.\r
   */\r
  PSLEVEL3 = 3,\r
}\r
\r
/**\r
 * The options that may be applied when saving a file.\r
 */\r
declare enum SaveOptions {\r
  /**\r
   * Do not save changes.\r
   */\r
  DONOTSAVECHANGES = 2,\r
\r
  /**\r
   * Ask the user whether to save.\r
   */\r
  PROMPTTOSAVECHANGES = 3,\r
\r
  /**\r
   * Save changes.\r
   */\r
  SAVECHANGES = 1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum RulerUnits {\r
  /**\r
   * Ruler units are measured in centimeters.\r
   */\r
  Centimeters = 3,\r
\r
  /**\r
   * Ruler units are unknown.\r
   */\r
  Inches = 2,\r
\r
  /**\r
   * Ruler units are measured in millimeters.\r
   */\r
  Millimeters = 6,\r
\r
  /**\r
   * Ruler units are measured in picas.\r
   */\r
  Picas = 5,\r
\r
  /**\r
   * Ruler units are measured in pixels.\r
   */\r
  Pixels = 8,\r
\r
  /**\r
   * Ruler units are measured in points.\r
   */\r
  Points = 4,\r
\r
  /**\r
   * Ruler units are measured in Qs.\r
   */\r
  Qs = 7,\r
\r
  /**\r
   * Ruler units are unknown.\r
   */\r
  Unknown = 1,\r
}\r
\r
/**\r
 * Blend modes used when compositing an object.\r
 */\r
declare enum BlendModes {\r
  /**\r
   *\r
   */\r
  COLORBLEND = 14,\r
\r
  /**\r
   *\r
   */\r
  COLORBURN = 7,\r
\r
  /**\r
   *\r
   */\r
  COLORDODGE = 6,\r
\r
  /**\r
   *\r
   */\r
  DARKEN = 8,\r
\r
  /**\r
   *\r
   */\r
  DIFFERENCE = 10,\r
\r
  /**\r
   *\r
   */\r
  EXCLUSION = 11,\r
\r
  /**\r
   *\r
   */\r
  HARDLIGHT = 5,\r
\r
  /**\r
   *\r
   */\r
  HUE = 12,\r
\r
  /**\r
   *\r
   */\r
  LIGHTEN = 9,\r
\r
  /**\r
   *\r
   */\r
  LUMINOSITY = 15,\r
\r
  /**\r
   *\r
   */\r
  MULTIPLY = 1,\r
\r
  /**\r
   *\r
   */\r
  NORMAL = 0,\r
\r
  /**\r
   *\r
   */\r
  OVERLAY = 3,\r
\r
  /**\r
   *\r
   */\r
  SATURATIONBLEND = 13,\r
\r
  /**\r
   *\r
   */\r
  SCREEN = 2,\r
\r
  /**\r
   *\r
   */\r
  SOFTLIGHT = 4,\r
}\r
\r
/**\r
 * Knockout state of a page item.\r
 */\r
declare enum KnockoutState {\r
  /**\r
   * Knockout off.\r
   */\r
  DISABLED = 0,\r
\r
  /**\r
   * Knockout off.\r
   */\r
  ENABLED = 1,\r
\r
  /**\r
   * Knockout state inherited from group?\r
   */\r
  INHERITED = 2,\r
\r
  /**\r
   * Unknown/uninitialized knockout state.\r
   */\r
  Unknown = -1,\r
}\r
\r
/**\r
 * How to re-arrange the art item.\r
 */\r
declare enum ZOrderMethod {\r
  /**\r
   * Move art one step forward in it's group or layer.\r
   */\r
  BRINGFORWARD = 2,\r
\r
  /**\r
   * Move art to front of it's group or layer.\r
   */\r
  BRINGTOFRONT = 1,\r
\r
  /**\r
   * Move art one step backwards in it's group or layer.\r
   */\r
  SENDBACKWARD = 3,\r
\r
  /**\r
   * Move art to back of it's group or layer.\r
   */\r
  SENDTOBACK = 4,\r
}\r
\r
/**\r
 * The version of the SVG DTD.\r
 */\r
declare enum SVGDTDVersion {\r
  /**\r
   * SVG 1.0.\r
   */\r
  SVG1_0 = 1,\r
\r
  /**\r
   * SVG 1.1.\r
   */\r
  SVG1_1 = 2,\r
\r
  /**\r
   * SVG Basic 1.1.\r
   */\r
  SVGBASIC1_1 = 5,\r
\r
  /**\r
   * SVG Tiny 1.1.\r
   */\r
  SVGTINY1_1 = 3,\r
\r
  /**\r
   * SVG Tiny 1.1 Plus.\r
   */\r
  SVGTINY1_1PLUS = 4,\r
\r
  /**\r
   * SVG Tiny 1.2.\r
   */\r
  SVGTINY1_2 = 6,\r
}\r
\r
/**\r
 * What font type to include with the file?\r
 */\r
declare enum SVGFontType {\r
  /**\r
   *\r
   */\r
  OUTLINEFONT = 3,\r
\r
  /**\r
   *\r
   */\r
  SVGFONT = 2,\r
}\r
\r
/**\r
 * What fonts to include with the file?\r
 */\r
declare enum SVGFontSubsetting {\r
  /**\r
   *\r
   */\r
  ALLGLYPHS = 7,\r
\r
  /**\r
   *\r
   */\r
  COMMONENGLISH = 3,\r
\r
  /**\r
   *\r
   */\r
  COMMONROMAN = 5,\r
\r
  /**\r
   *\r
   */\r
  GLYPHSUSED = 2,\r
\r
  /**\r
   *\r
   */\r
  GLYPHSUSEDPLUSENGLISH = 4,\r
\r
  /**\r
   *\r
   */\r
  GLYPHSUSEDPLUSROMAN = 6,\r
\r
  /**\r
   * Use system fonts.\r
   */\r
  None = 1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum SVGDocumentEncoding {\r
  /**\r
   * ISO 8859-1.\r
   */\r
  ASCII = 1,\r
\r
  /**\r
   *\r
   */\r
  UTF16 = 3,\r
\r
  /**\r
   *\r
   */\r
  UTF8 = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum SVGCSSPropertyLocation {\r
  /**\r
   * Style attributes with entity reference.\r
   */\r
  ENTITIES = 2,\r
\r
  /**\r
   *\r
   */\r
  PRESENTATIONATTRIBUTES = 4,\r
\r
  /**\r
   *\r
   */\r
  STYLEATTRIBUTES = 1,\r
\r
  /**\r
   *\r
   */\r
  STYLEELEMENTS = 3,\r
}\r
\r
/**\r
 * Type of SVG Id.\r
 */\r
declare enum SVGIdType {\r
  /**\r
   * Style attributes with entity reference.\r
   */\r
  SVGIDMINIMAL = 0,\r
\r
  /**\r
   *\r
   */\r
  SVGIDREGULAR = 1,\r
\r
  /**\r
   *\r
   */\r
  SVGIDUNIQUE = 2,\r
}\r
\r
/**\r
 * Decide where the raster images will be stored.\r
 */\r
declare enum RasterImageLocation {\r
  /**\r
   * Embed the raster images in the svg file.\r
   */\r
  EMBED = 0,\r
\r
  /**\r
   *\r
   */\r
  LINK = 1,\r
\r
  /**\r
   *\r
   */\r
  PRESERVE = 2,\r
}\r
\r
/**\r
 * How should transparency be flattened for pre-AI9 file formats.\r
 */\r
declare enum OutputFlattening {\r
  /**\r
   *\r
   */\r
  PRESERVEAPPEARANCE = 1,\r
\r
  /**\r
   * Discard transparency.\r
   */\r
  PRESERVEPATHS = 0,\r
}\r
\r
/**\r
 * Color model of the custom color.\r
 */\r
declare enum ColorModel {\r
  /**\r
   * Process color (mixed ink)\r
   */\r
  PROCESS = 1,\r
\r
  /**\r
   * Registration color (prints on in all separations)\r
   */\r
  REGISTRATION = 0,\r
\r
  /**\r
   * Spot color (separate ink)\r
   */\r
  SPOT = 2,\r
}\r
\r
/**\r
 * Custom color kind of the spot color.\r
 */\r
declare enum SpotColorKind {\r
  /**\r
   * Solid ink, expressed in four CMYK values.\r
   */\r
  SPOTCMYK = 0,\r
\r
  /**\r
   * Lab color. Only valid for spot colors.\r
   */\r
  SPOTLAB = 2,\r
\r
  /**\r
   * Solid color, expressed as three RGB values.\r
   */\r
  SPOTRGB = 1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum FlashExportStyle {\r
  /**\r
   * Illustrator Artboards to Flash Files.\r
   */\r
  ARTBOARDSTOFILES = 5,\r
\r
  /**\r
   * Illustrator file to Flash file.\r
   */\r
  ASFLASHFILE = 1,\r
\r
  /**\r
   * Illustrator layers to Flash files.\r
   */\r
  LAYERSASFILES = 3,\r
\r
  /**\r
   * Illustrator layers to Flash frames.\r
   */\r
  LAYERSASFRAMES = 2,\r
\r
  /**\r
   * Illustrator layers to Flash Symbols.\r
   */\r
  LAYERSASSYMBOLS = 4,\r
}\r
\r
/**\r
 * How the arts should be clipped.\r
 */\r
declare enum ArtClippingOption {\r
  /**\r
   * Output size is the size of the artboard.\r
   */\r
  OUTPUTARTBOARDBOUNDS = 2,\r
\r
  /**\r
   * Output size is the size of the artwork.\r
   */\r
  OUTPUTARTBOUNDS = 1,\r
\r
  /**\r
   * Output size is the size of the crop area.\r
   */\r
  OUTPUTCROPRECTBOUNDS = 3,\r
}\r
\r
/**\r
 * Version of the SWF File to be exported.\r
 */\r
declare enum FlashExportVersion {\r
  /**\r
   * SWF Version 1.\r
   */\r
  FLASHVERSION1 = 1,\r
\r
  /**\r
   * SWF Version 2.\r
   */\r
  FLASHVERSION2 = 2,\r
\r
  /**\r
   * SWF Version 3.\r
   */\r
  FLASHVERSION3 = 3,\r
\r
  /**\r
   * SWF Version 4.\r
   */\r
  FLASHVERSION4 = 4,\r
\r
  /**\r
   * SWF Version 5.\r
   */\r
  FLASHVERSION5 = 5,\r
\r
  /**\r
   * SWF Version 6.\r
   */\r
  FLASHVERSION6 = 6,\r
\r
  /**\r
   * SWF Version 7.\r
   */\r
  FLASHVERSION7 = 7,\r
\r
  /**\r
   * SWF Version 8.\r
   */\r
  FLASHVERSION8 = 8,\r
\r
  /**\r
   * SWF Version 9.\r
   */\r
  FLASHVERSION9 = 9,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum FlashImageFormat {\r
  /**\r
   *\r
   */\r
  LOSSLESS = 1,\r
\r
  /**\r
   *\r
   */\r
  LOSSY = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum LayerOrderType {\r
  /**\r
   *\r
   */\r
  BOTTOMUP = 1,\r
\r
  /**\r
   *\r
   */\r
  TOPDOWN = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum BlendAnimationType {\r
  /**\r
   *\r
   */\r
  INBUILD = 2,\r
\r
  /**\r
   *\r
   */\r
  INSEQUENCE = 1,\r
\r
  /**\r
   * No blend animation.\r
   */\r
  NOBLENDANIMATION = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum FlashJPEGMethod {\r
  /**\r
   *\r
   */\r
  Optimized = 2,\r
\r
  /**\r
   *\r
   */\r
  Standard = 1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum FlashPlaybackSecurity {\r
  /**\r
   *\r
   */\r
  PlaybackLocal = 1,\r
\r
  /**\r
   *\r
   */\r
  PlaybackNetwork = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum VariableKind {\r
  /**\r
   *\r
   */\r
  GRAPH = 5,\r
\r
  /**\r
   *\r
   */\r
  IMAGE = 4,\r
\r
  /**\r
   *\r
   */\r
  TEXTUAL = 3,\r
\r
  /**\r
   *\r
   */\r
  Unknown = 1,\r
\r
  /**\r
   *\r
   */\r
  VISIBILITY = 2,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADExportFileFormat {\r
  /**\r
   *\r
   */\r
  DWG = 1,\r
\r
  /**\r
   *\r
   */\r
  DXF = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADCompatibility {\r
  /**\r
   *\r
   */\r
  AutoCADRelease13 = 0,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease14 = 1,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease15 = 2,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease18 = 3,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease21 = 4,\r
\r
  /**\r
   *\r
   */\r
  AutoCADRelease24 = 5,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADUnit {\r
  /**\r
   *\r
   */\r
  Centimeters = 4,\r
\r
  /**\r
   *\r
   */\r
  Inches = 2,\r
\r
  /**\r
   *\r
   */\r
  Millimeters = 3,\r
\r
  /**\r
   *\r
   */\r
  Picas = 1,\r
\r
  /**\r
   *\r
   */\r
  Pixels = 5,\r
\r
  /**\r
   *\r
   */\r
  Points = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADColors {\r
  /**\r
   *\r
   */\r
  Max16Colors = 1,\r
\r
  /**\r
   *\r
   */\r
  Max256Colors = 2,\r
\r
  /**\r
   *\r
   */\r
  Max8Colors = 0,\r
\r
  /**\r
   *\r
   */\r
  TrueColors = 3,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADRasterFormat {\r
  /**\r
   *\r
   */\r
  JPEG = 1,\r
\r
  /**\r
   *\r
   */\r
  PNG = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADExportOption {\r
  /**\r
   *\r
   */\r
  MaximumEditability = 1,\r
\r
  /**\r
   *\r
   */\r
  PreserveAppearance = 0,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum AutoCADGlobalScaleOption {\r
  /**\r
   *\r
   */\r
  FitArtboard = 1,\r
\r
  /**\r
   *\r
   */\r
  OriginalSize = 0,\r
\r
  /**\r
   *\r
   */\r
  ScaleByValue = 2,\r
}\r
\r
/**\r
 * Byte Order of TIFF file.\r
 */\r
declare enum TIFFByteOrder {\r
  /**\r
   *\r
   */\r
  IBMPC = 0,\r
\r
  /**\r
   *\r
   */\r
  MACINTOSH = 1,\r
}\r
\r
/**\r
 * COM user interaction enumeration.\r
 */\r
declare enum UserInteractionLevel {\r
  /**\r
   *\r
   */\r
  DISPLAYALERTS = 2,\r
\r
  /**\r
   *\r
   */\r
  DONTDISPLAYALERTS = -1,\r
}\r
\r
/**\r
 *\r
 */\r
declare enum PolarityValues {\r
  /**\r
   *\r
   */\r
  NEGATIVE = -1,\r
\r
  /**\r
   *\r
   */\r
  POSITIVE = 1,\r
}\r
\r
/**\r
 * When should a JavaScript debugger be shown.\r
 */\r
declare enum JavaScriptExecutionMode {\r
  /**\r
   * Show the JavaScript debugger at the first line of the JavaScript.\r
   */\r
  BeforeRunning = 3,\r
\r
  /**\r
   * Show the JavaScript debugger is a runtime error occurs.\r
   */\r
  OnRuntimeError = 2,\r
\r
  /**\r
   * Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions.\r
   */\r
  never = 1,\r
}\r
\r
/**\r
 * The artwork layers/objects to be printed.\r
 */\r
declare enum PrintArtworkDesignation {\r
  /**\r
   * Print all layers.\r
   */\r
  ALLLAYERS = 2,\r
\r
  /**\r
   * Print visible layers.\r
   */\r
  VISIBLELAYERS = 1,\r
\r
  /**\r
   * Print visible printable layers.\r
   */\r
  VISIBLEPRINTABLELAYERS = 0,\r
}\r
\r
/**\r
 * The printing bounds type.\r
 */\r
declare enum PrintingBounds {\r
  /**\r
   * Use artboard bounds.\r
   */\r
  ARTBOARDBOUNDS = 0,\r
\r
  /**\r
   * Use artwork bounds.\r
   */\r
  ARTWORKBOUNDS = 1,\r
\r
  /**\r
   * Use crop bounds.\r
   */\r
  CROPBOUNDS = 2,\r
}\r
\r
/**\r
 * The color separation mode.\r
 */\r
declare enum PrintColorSeparationMode {\r
  /**\r
   * The composite mode.\r
   */\r
  COMPOSITE = 0,\r
\r
  /**\r
   * The host based color separation mode.\r
   */\r
  HOSTBASEDSEPARATION = 1,\r
\r
  /**\r
   * The InRIP color separation mode.\r
   */\r
  INRIPSEPARATION = 2,\r
}\r
\r
/**\r
 * The artwork printing orientation.\r
 */\r
declare enum PrintOrientation {\r
  /**\r
   * Auto Rotate.\r
   */\r
  AUTOROTATE = 4,\r
\r
  /**\r
   * Landscape.\r
   */\r
  LANDSCAPE = 1,\r
\r
  /**\r
   * Portrait.\r
   */\r
  PORTRAIT = 0,\r
\r
  /**\r
   * Reverse landscape.\r
   */\r
  REVERSELANDSCAPE = 3,\r
\r
  /**\r
   * Reverse portrait.\r
   */\r
  REVERSEPORTRAIT = 2,\r
}\r
\r
/**\r
 * The artwork printing position on media.\r
 */\r
declare enum PrintPosition {\r
  /**\r
   * Translate to the bottom center of media.\r
   */\r
  TRANSLATEBOTTOM = 8,\r
\r
  /**\r
   * Translate to the bottom left of media.\r
   */\r
  TRANSLATEBOTTOMLEFT = 7,\r
\r
  /**\r
   * Translate to the bottom right of media.\r
   */\r
  TRANSLATEBOTTOMRIGHT = 9,\r
\r
  /**\r
   * Translate to the center of media.\r
   */\r
  TRANSLATECENTER = 5,\r
\r
  /**\r
   * Translate to the left center of media.\r
   */\r
  TRANSLATELEFT = 4,\r
\r
  /**\r
   * Translate to the right center of media.\r
   */\r
  TRANSLATERIGHT = 6,\r
\r
  /**\r
   * Translate to the top center of media.\r
   */\r
  TRANSLATETOP = 2,\r
\r
  /**\r
   * Translate to the top left of media.\r
   */\r
  TRANSLATETOPLEFT = 1,\r
\r
  /**\r
   * Translate to the top right of media.\r
   */\r
  TRANSLATETOPRIGHT = 3,\r
}\r
\r
/**\r
 * The page tiling type.\r
 */\r
declare enum PrintTiling {\r
  /**\r
   * Tile full pages.\r
   */\r
  TILEFULLPAGES = 1,\r
\r
  /**\r
   * Tile imageable areas.\r
   */\r
  TILEIMAGEABLEAREAS = 2,\r
\r
  /**\r
   * Tile single full page.\r
   */\r
  TILESINGLEFULLPAGE = 0,\r
}\r
\r
/**\r
 * The page marks style type.\r
 */\r
declare enum PageMarksTypes {\r
  /**\r
   * Japanese page marks style.\r
   */\r
  Japanese = 1,\r
\r
  /**\r
   * Roman page marks style.\r
   */\r
  Roman = 0,\r
}\r
\r
/**\r
 * The printer font download mode.\r
 */\r
declare enum PrintFontDownloadMode {\r
  /**\r
   * Download complete.\r
   */\r
  DOWNLOADCOMPLETE = 2,\r
\r
  /**\r
   * Download none.\r
   */\r
  DOWNLOADNONE = 0,\r
\r
  /**\r
   * Download subset.\r
   */\r
  DOWNLOADSUBSET = 1,\r
}\r
\r
/**\r
 * The font substitution policy.\r
 */\r
declare enum FontSubstitutionPolicy {\r
  /**\r
   * Substitute device font.\r
   */\r
  SUBSTITUTEDEVICE = 2,\r
\r
  /**\r
   * Substitute oblique font.\r
   */\r
  SUBSTITUTEOBLIQUE = 0,\r
\r
  /**\r
   * Substitute tint font.\r
   */\r
  SUBSTITUTETINT = 1,\r
}\r
\r
/**\r
 * The PostScript image compression type.\r
 */\r
declare enum PostScriptImageCompressionType {\r
  /**\r
   * No image compression.\r
   */\r
  IMAGECOMPRESSIONNONE = 0,\r
\r
  /**\r
   * JPEG image compression.\r
   */\r
  JPEG = 2,\r
\r
  /**\r
   * RLE image compression.\r
   */\r
  RLE = 1,\r
}\r
\r
/**\r
 * The color profile type.\r
 */\r
declare enum PrintColorProfile {\r
  /**\r
   * Use custom color profile.\r
   */\r
  CUSTOMPROFILE = 3,\r
\r
  /**\r
   * Use old style AI color profile.\r
   */\r
  OLDSTYLEPROFILE = 0,\r
\r
  /**\r
   * Same as printer color profile.\r
   */\r
  PRINTERPROFILE = 2,\r
\r
  /**\r
   * Same as source color profile.\r
   */\r
  SOURCEPROFILE = 1,\r
}\r
\r
/**\r
 * The color intent type.\r
 */\r
declare enum PrintColorIntent {\r
  /**\r
   * Absolute colorimetric.\r
   */\r
  ABSOLUTECOLORIMETRIC = 3,\r
\r
  /**\r
   * Perceptual color intent.\r
   */\r
  PERCEPTUALINTENT = 0,\r
\r
  /**\r
   * Relative colorimetric.\r
   */\r
  RELATIVECOLORIMETRIC = 2,\r
\r
  /**\r
   * Saturation color intent.\r
   */\r
  SATURATIONINTENT = 1,\r
}\r
\r
/**\r
 * The printer type.\r
 */\r
declare enum PrinterTypeEnum {\r
  /**\r
   * Non PostScript printer.\r
   */\r
  NONPOSTSCRIPTPRINTER = 2,\r
\r
  /**\r
   * PostScript printer.\r
   */\r
  POSTSCRIPTPRINTER = 1,\r
\r
  /**\r
   * Unknown printer type.\r
   */\r
  Unknown = 0,\r
}\r
\r
/**\r
 * The printer color mode.\r
 */\r
declare enum PrinterColorMode {\r
  /**\r
   * Black and white printer.\r
   */\r
  BLACKANDWHITEPRINTER = 2,\r
\r
  /**\r
   * Color printer.\r
   */\r
  COLORPRINTER = 0,\r
\r
  /**\r
   * Grayscale printer.\r
   */\r
  GRAYSCALEPRINTER = 1,\r
}\r
\r
/**\r
 * The ink printing status.\r
 */\r
declare enum InkPrintStatus {\r
  /**\r
   * Convert to process color during print.\r
   */\r
  CONVERTINK = 2,\r
\r
  /**\r
   * Disable the ink during print.\r
   */\r
  DISABLEINK = 0,\r
\r
  /**\r
   * Enable the ink during print.\r
   */\r
  ENABLEINK = 1,\r
}\r
\r
/**\r
 * The ink type.\r
 */\r
declare enum InkType {\r
  /**\r
   * Black color ink.\r
   */\r
  BLACKINK = 3,\r
\r
  /**\r
   * Custom color ink.\r
   */\r
  CUSTOMINK = 4,\r
\r
  /**\r
   * Cyan color ink.\r
   */\r
  CYANINK = 0,\r
\r
  /**\r
   * Magenta color ink.\r
   */\r
  MAGENTAINK = 1,\r
\r
  /**\r
   * Yellow color ink.\r
   */\r
  YELLOWINK = 2,\r
}\r
\r
/**\r
 * The trapping type.\r
 */\r
declare enum TrappingType {\r
  /**\r
   * Ignore opaque trapping type.\r
   */\r
  IGNOREOPAQUE = 3,\r
\r
  /**\r
   * Normal trapping type.\r
   */\r
  NORMALTRAPPING = 0,\r
\r
  /**\r
   * Opaque trapping type.\r
   */\r
  OPAQUE = 2,\r
\r
  /**\r
   * Transparent trapping type.\r
   */\r
  TRANSPARENT = 1,\r
}\r
\r
/**\r
 * The auto kern type.\r
 */\r
declare enum AutoKernType {\r
  /**\r
   * Auto kerning.\r
   */\r
  AUTO = 1,\r
\r
  /**\r
   * Metrics roman only.\r
   */\r
  METRICSROMANONLY = 3,\r
\r
  /**\r
   * No auto kerning.\r
   */\r
  NOAUTOKERN = 0,\r
\r
  /**\r
   * Optical kerning.\r
   */\r
  OPTICAL = 2,\r
}\r
\r
/**\r
 * The auto leading type.\r
 */\r
declare enum AutoLeadingType {\r
  /**\r
   * Roman leading type.\r
   */\r
  BOTTOMTOBOTTOM = 0,\r
\r
  /**\r
   * Japanese leading type.\r
   */\r
  TOPTOTOP = 1,\r
}\r
\r
/**\r
 * The case change type.\r
 */\r
declare enum CaseChangeType {\r
  /**\r
   * Change to lower case.\r
   */\r
  LOWERCASE = 1,\r
\r
  /**\r
   * Change to sentence case.\r
   */\r
  SENTENCECASE = 3,\r
\r
  /**\r
   * Change to title case.\r
   */\r
  TITLECASE = 2,\r
\r
  /**\r
   * Change to upper case.\r
   */\r
  UPPERCASE = 0,\r
}\r
\r
/**\r
 * The font capitalization option.\r
 */\r
declare enum FontCapsOption {\r
  /**\r
   * All caps.\r
   */\r
  ALLCAPS = 2,\r
\r
  /**\r
   * All small caps.\r
   */\r
  ALLSMALLCAPS = 3,\r
\r
  /**\r
   * Normal caps.\r
   */\r
  NORMALCAPS = 0,\r
\r
  /**\r
   * Small caps.\r
   */\r
  SMALLCAPS = 1,\r
}\r
\r
/**\r
 * The font baseline option.\r
 */\r
declare enum FontBaselineOption {\r
  /**\r
   * Normal baseline.\r
   */\r
  NORMALBASELINE = 0,\r
\r
  /**\r
   * Fauxed subscript baseline.\r
   */\r
  SUBSCRIPT = 2,\r
\r
  /**\r
   * Fauxed superscript baseline.\r
   */\r
  SUPERSCRIPT = 1,\r
}\r
\r
/**\r
 * The OpenType font position option.\r
 */\r
declare enum FontOpenTypePositionOption {\r
  /**\r
   * OpenType denominator position.\r
   */\r
  DENOMINATOR = 4,\r
\r
  /**\r
   * OpenType numerator position.\r
   */\r
  NUMERATOR = 3,\r
\r
  /**\r
   * Default position.\r
   */\r
  OPENTYPEDEFAULT = 0,\r
\r
  /**\r
   * OpenType subscript position.\r
   */\r
  OPENTYPESUBSCRIPT = 2,\r
\r
  /**\r
   * OpenType superscript position.\r
   */\r
  OPENTYPESUPERSCRIPT = 1,\r
}\r
\r
/**\r
 * The figure style type.\r
 */\r
declare enum FigureStyleType {\r
  /**\r
   * Default figure style.\r
   */\r
  DEFAULTFIGURESTYLE = 0,\r
\r
  /**\r
   * Proportional lining style.\r
   */\r
  PROPORTIONAL = 3,\r
\r
  /**\r
   * Proportional oldstyle.\r
   */\r
  PROPORTIONALOLDSTYLE = 2,\r
\r
  /**\r
   * Tabular lining style.\r
   */\r
  TABULAR = 1,\r
\r
  /**\r
   * Tabular oldstyle.\r
   */\r
  TABULAROLDSTYLE = 4,\r
}\r
\r
/**\r
 * The baseline direction type.\r
 */\r
declare enum BaselineDirectionType {\r
  /**\r
   *\r
   */\r
  Standard = 1,\r
\r
  /**\r
   *\r
   */\r
  TateChuYoko = 3,\r
\r
  /**\r
   *\r
   */\r
  VerticalRotated = 2,\r
}\r
\r
/**\r
 * The language of text.\r
 */\r
declare enum LanguageType {\r
  /**\r
   *\r
   */\r
  ARABIC = 39,\r
\r
  /**\r
   *\r
   */\r
  BENGALIINDIA = 51,\r
\r
  /**\r
   *\r
   */\r
  BOKMALNORWEGIAN = 8,\r
\r
  /**\r
   *\r
   */\r
  BRAZILLIANPORTUGUESE = 11,\r
\r
  /**\r
   *\r
   */\r
  BULGARIAN = 20,\r
\r
  /**\r
   *\r
   */\r
  CANADIANFRENCH = 3,\r
\r
  /**\r
   *\r
   */\r
  CATALAN = 17,\r
\r
  /**\r
   *\r
   */\r
  CHINESE = 29,\r
\r
  /**\r
   *\r
   */\r
  CZECH = 22,\r
\r
  /**\r
   *\r
   */\r
  DANISH = 16,\r
\r
  /**\r
   *\r
   */\r
  DUTCH = 15,\r
\r
  /**\r
   *\r
   */\r
  DUTCH2005REFORM = 43,\r
\r
  /**\r
   *\r
   */\r
  ENGLISH = 0,\r
\r
  /**\r
   *\r
   */\r
  FARSI = 41,\r
\r
  /**\r
   *\r
   */\r
  FINNISH = 1,\r
\r
  /**\r
   *\r
   */\r
  GERMAN2006REFORM = 42,\r
\r
  /**\r
   *\r
   */\r
  GREEK = 25,\r
\r
  /**\r
   *\r
   */\r
  GUJARATI = 53,\r
\r
  /**\r
   *\r
   */\r
  HINDI = 49,\r
\r
  /**\r
   *\r
   */\r
  HUNGARIAN = 28,\r
\r
  /**\r
   *\r
   */\r
  ICELANDIC = 27,\r
\r
  /**\r
   *\r
   */\r
  ITALIAN = 7,\r
\r
  /**\r
   *\r
   */\r
  JAPANESE = 30,\r
\r
  /**\r
   *\r
   */\r
  KANNADA = 57,\r
\r
  /**\r
   *\r
   */\r
  MALAYALAM = 58,\r
\r
  /**\r
   *\r
   */\r
  MARATHI = 50,\r
\r
  /**\r
   * Nynorsk Norwegian.\r
   */\r
  NYNORSKNORWEGIAN = 9,\r
\r
  /**\r
   *\r
   */\r
  OLDGERMAN = 5,\r
\r
  /**\r
   *\r
   */\r
  ORIYA = 54,\r
\r
  /**\r
   *\r
   */\r
  POLISH = 23,\r
\r
  /**\r
   *\r
   */\r
  PUNJABI = 52,\r
\r
  /**\r
   *\r
   */\r
  RUMANIAN = 24,\r
\r
  /**\r
   *\r
   */\r
  RUSSIAN = 18,\r
\r
  /**\r
   *\r
   */\r
  SERBIAN = 21,\r
\r
  /**\r
   *\r
   */\r
  SPANISH = 12,\r
\r
  /**\r
   *\r
   */\r
  STANDARDFRENCH = 2,\r
\r
  /**\r
   *\r
   */\r
  STANDARDGERMAN = 4,\r
\r
  /**\r
   *\r
   */\r
  STANDARDPORTUGUESE = 10,\r
\r
  /**\r
   *\r
   */\r
  SWEDISH = 13,\r
\r
  /**\r
   *\r
   */\r
  SWISSGERMAN = 6,\r
\r
  /**\r
   *\r
   */\r
  SWISSGERMAN2006REFORM = 44,\r
\r
  /**\r
   *\r
   */\r
  TAMIL = 55,\r
\r
  /**\r
   *\r
   */\r
  TELUGU = 56,\r
\r
  /**\r
   *\r
   */\r
  TURKISH = 26,\r
\r
  /**\r
   *\r
   */\r
  UKENGLISH = 14,\r
\r
  /**\r
   *\r
   */\r
  UKRANIAN = 19,\r
}\r
\r
/**\r
 * The alternate glyphs form of text.\r
 */\r
declare enum AlternateGlyphsForm {\r
  /**\r
   *\r
   */\r
  DEFAULTFORM = 0,\r
\r
  /**\r
   *\r
   */\r
  EXPERT = 2,\r
\r
  /**\r
   *\r
   */\r
  FULLWIDTH = 8,\r
\r
  /**\r
   *\r
   */\r
  HALFWIDTH = 5,\r
\r
  /**\r
   *\r
   */\r
  JIS04FORM = 11,\r
\r
  /**\r
   *\r
   */\r
  JIS78FORM = 3,\r
\r
  /**\r
   *\r
   */\r
  JIS83FORM = 4,\r
\r
  /**\r
   *\r
   */\r
  JIS90FORM = 10,\r
\r
  /**\r
   *\r
   */\r
  PROPORTIONALWIDTH = 9,\r
\r
  /**\r
   *\r
   */\r
  QUARTERWIDTH = 7,\r
\r
  /**\r
   *\r
   */\r
  THIRDWIDTH = 6,\r
\r
  /**\r
   *\r
   */\r
  TRADITIONAL = 1,\r
}\r
\r
/**\r
 * The style run alignment.\r
 */\r
declare enum StyleRunAlignmentType {\r
  /**\r
   *\r
   */\r
  ROMANBASELINE = 2,\r
\r
  /**\r
   *\r
   */\r
  bottom = 0,\r
\r
  /**\r
   *\r
   */\r
  center = 3,\r
\r
  /**\r
   *\r
   */\r
  icfBottom = 1,\r
\r
  /**\r
   *\r
   */\r
  icfTop = 4,\r
\r
  /**\r
   *\r
   */\r
  top = 5,\r
}\r
\r
/**\r
 * The Wari-Chu alignment type.\r
 */\r
declare enum WariChuJustificationType {\r
  /**\r
   *\r
   */\r
  Center = 2,\r
\r
  /**\r
   *\r
   */\r
  Left = 0,\r
\r
  /**\r
   *\r
   */\r
  Right = 1,\r
\r
  /**\r
   *\r
   */\r
  WARICHUAUTOJUSTIFY = 7,\r
\r
  /**\r
   *\r
   */\r
  WARICHUFULLJUSTIFY = 6,\r
\r
  /**\r
   *\r
   */\r
  WARICHUFULLJUSTIFYLASTLINECENTER = 5,\r
\r
  /**\r
   *\r
   */\r
  WARICHUFULLJUSTIFYLASTLINELEFT = 3,\r
\r
  /**\r
   *\r
   */\r
  WARICHUFULLJUSTIFYLASTLINERIGHT = 4,\r
}\r
\r
/**\r
 * The Burasagari type.\r
 */\r
declare enum BurasagariTypeEnum {\r
  /**\r
   *\r
   */\r
  Forced = 2,\r
\r
  /**\r
   *\r
   */\r
  None = 0,\r
\r
  /**\r
   *\r
   */\r
  Standard = 1,\r
}\r
\r
/**\r
 * The preferred Kinsoku order.\r
 */\r
declare enum KinsokuOrderEnum {\r
  /**\r
   *\r
   */\r
  PUSHIN = 0,\r
\r
  /**\r
   *\r
   */\r
  PUSHOUTFIRST = 1,\r
\r
  /**\r
   *\r
   */\r
  PUSHOUTONLY = 2,\r
}\r
\r
/**\r
 * Crop box.\r
 */\r
declare enum PDFBoxType {\r
  /**\r
   * Crop to ArtBox. The art box defines the extent of the page's meaningful content (including potential white space) as intended by the page's creator.\r
   */\r
  PDFARTBOX = 0,\r
\r
  /**\r
   * Crop to BleedBox. The bleed box defines the region to which the contents of the page should be clipped when output in a production environment.\r
   */\r
  PDFBLEEDBOX = 3,\r
\r
  /**\r
   * Crop to Bounding Box. The bounding box is the rectangle that encloses all text, graphics, and images on the page.\r
   */\r
  PDFBOUNDINGBOX = 5,\r
\r
  /**\r
   * Crop to CropBox. The crop box is the region of the page to display and to print.\r
   */\r
  PDFCROPBOX = 1,\r
\r
  /**\r
   * Crop to MediaBox. The media box is a natural size of the page. For example, the dimensions of A4 sheet of paper.\r
   */\r
  PDFMEDIABOX = 4,\r
\r
  /**\r
   * Crop to TrimBox. The trim box specifies the positioning of the page's content within the imposition.\r
   */\r
  PDFTRIMBOX = 2,\r
}\r
\r
/**\r
 * The tracing method: abutting and overlapping.\r
 */\r
declare enum TracingMethodType {\r
  /**\r
   * Tracing abutting method.\r
   */\r
  TRACINGMETHODABUTTING = 0,\r
\r
  /**\r
   * Tracing overlapping method.\r
   */\r
  TRACINGMETHODOVERLAPPING = 1,\r
}\r
\r
/**\r
 * The tracing mode: color, grayscale, black and white.\r
 */\r
declare enum TracingModeType {\r
  /**\r
   * Black and white tracing mode.\r
   */\r
  TRACINGMODEBLACKANDWHITE = 2,\r
\r
  /**\r
   * Color tracing mode.\r
   */\r
  TRACINGMODECOLOR = 0,\r
\r
  /**\r
   * Grayscale tracing mode.\r
   */\r
  TRACINGMODEGRAY = 1,\r
}\r
\r
/**\r
 * The input color type Full Color or Limited colors.\r
 */\r
declare enum TracingColorType {\r
  /**\r
   * Use Full colors for Tracing.\r
   */\r
  TRACINGFULLCOLOR = 1,\r
\r
  /**\r
   * Use Limited colors for Tracing.\r
   */\r
  TRACINGLIMITEDCOLOR = 0,\r
}\r
\r
/**\r
 * Controls the type of vector view.\r
 */\r
declare enum ViewType {\r
  /**\r
   * View Source Image.\r
   */\r
  TRACINGVIEWIMAGE = 4,\r
\r
  /**\r
   * View just the paths.\r
   */\r
  TRACINGVIEWVECTOROUTLINES = 2,\r
\r
  /**\r
   * View paths and transparent fills.\r
   */\r
  TRACINGVIEWVECTOROUTLINESWITHTRACING = 1,\r
\r
  /**\r
   * View artwork.\r
   */\r
  TRACINGVIEWVECTORTRACINGRESULT = 0,\r
\r
  /**\r
   * View Outlines with Transparent Image.\r
   */\r
  TRACINGVIEWVECTORWITHTRANSPARENTIMAGE = 3,\r
}\r
\r
/**\r
 * Controls the color model for the rasterization.\r
 */\r
declare enum RasterizationColorModel {\r
  /**\r
   * Rasterize as 1-bit bitmap.\r
   */\r
  BITMAP = 3,\r
\r
  /**\r
   * Rasterize in the default document color space.\r
   */\r
  DEFAULTCOLORMODEL = 1,\r
\r
  /**\r
   * Rasterize as grayscale image.\r
   */\r
  GRAYSCALE = 2,\r
}\r
\r
/**\r
 * Controls the type of antialiasing method used in the rasterization.\r
 */\r
declare enum AntiAliasingMethod {\r
  /**\r
   * Optimize for the art object.\r
   */\r
  ARTOPTIMIZED = 1,\r
\r
  /**\r
   * No anti-aliasing allowed.\r
   */\r
  None = 0,\r
\r
  /**\r
   * Optimize for the type object.\r
   */\r
  TYPEOPTIMIZED = 2,\r
}\r
\r
/**\r
 * Denotes the purpose of color conversion using ConvertSmapleColor method.\r
 */\r
declare enum ColorConvertPurpose {\r
  /**\r
   * Do standard conversion, without black preservation.\r
   */\r
  defaultpurpose = 0,\r
\r
  /**\r
   * Dummy option.\r
   */\r
  dummypurpose = 4,\r
\r
  /**\r
   * Conversion options appropriate to creating an image for print or export.\r
   */\r
  exportpurpose = 2,\r
\r
  /**\r
   * Conversion options appropriate to creating an image for screen display.\r
   */\r
  previewpurpose = 1,\r
}\r
\r
/**\r
 * The FXG file format version.\r
 */\r
declare enum FXGVersion {\r
  /**\r
   * FXG version 1.0.\r
   */\r
  VERSION1PT0 = 1,\r
\r
  /**\r
   * FXG version 2.0.\r
   */\r
  VERSION2PT0 = 2,\r
}\r
\r
/**\r
 * Filters preserve policy used by FXG file format.\r
 */\r
declare enum FiltersPreservePolicy {\r
  /**\r
   * Preserve the appearance of filters by expanding it.\r
   */\r
  EXPANDFILTERS = 1,\r
\r
  /**\r
   * Preserve the editability of filters.\r
   */\r
  KEEPFILTERSEDITABLE = 3,\r
\r
  /**\r
   * Preserve the appearance of filters by rasterizing it.\r
   */\r
  RASTERIZEFILTERS = 2,\r
}\r
\r
/**\r
 * Text preserve policy used by FXG file format.\r
 */\r
declare enum TextPreservePolicy {\r
  /**\r
   * Automatically convert text.\r
   */\r
  AUTOMATICALLYCONVERTTEXT = 4,\r
\r
  /**\r
   * Preserve the editability of text.\r
   */\r
  KEEPTEXTEDITABLE = 3,\r
\r
  /**\r
   * Preserve the appearance of text by outlining it.\r
   */\r
  OUTLINETEXT = 1,\r
\r
  /**\r
   * Preserve the appearance of text by rasterizing it.\r
   */\r
  RASTERIZETEXT = 2,\r
}\r
\r
/**\r
 * Gradients preserve policy used by FXG file format.\r
 */\r
declare enum GradientsPreservePolicy {\r
  /**\r
   * Automatically Convert Gradients.\r
   */\r
  AUTOMATICALLYCONVERTGRADIENTS = 4,\r
\r
  /**\r
   * Preserve the editability of gradients.\r
   */\r
  KEEPGRADIENTSEDITABLE = 3,\r
}\r
\r
/**\r
 * Blends Expand policy used by FXG file format.\r
 */\r
declare enum BlendsExpandPolicy {\r
  /**\r
   * Automatically Convert Blends.\r
   */\r
  AUTOMATICALLYCONVERTBLENDS = 1,\r
\r
  /**\r
   * Expand Blends by Rasterizing.\r
   */\r
  RASTERIZEBLENDS = 2,\r
}\r
\r
/**\r
 * Coordinate system used by Illustrator.\r
 */\r
declare enum CoordinateSystem {\r
  /**\r
   * Artboard coordinate system.\r
   */\r
  ARTBOARDCOORDINATESYSTEM = 1,\r
\r
  /**\r
   * Document coordinate system.\r
   */\r
  DOCUMENTCOORDINATESYSTEM = 0,\r
}\r
\r
/**\r
 * The symbol registration point.\r
 */\r
declare enum SymbolRegistrationPoint {\r
  /**\r
   * Bottom left point of symbol bounding box.\r
   */\r
  SYMBOLBOTTOMLEFTPOINT = 7,\r
\r
  /**\r
   * Bottom middle point of symbol bounding box.\r
   */\r
  SYMBOLBOTTOMMIDDLEPOINT = 8,\r
\r
  /**\r
   * Bottom right point of symbol bounding box.\r
   */\r
  SYMBOLBOTTOMRIGHTPOINT = 9,\r
\r
  /**\r
   * Center point of symbol bounding box.\r
   */\r
  SYMBOLCENTERPOINT = 5,\r
\r
  /**\r
   * Middle left point of symbol bounding box.\r
   */\r
  SYMBOLMIDDLELEFTPOINT = 4,\r
\r
  /**\r
   * Middle right point of symbol bounding box.\r
   */\r
  SYMBOLMIDDLERIGHTPOINT = 6,\r
\r
  /**\r
   * Top left point of symbol bounding box.\r
   */\r
  SYMBOLTOPLEFTPOINT = 1,\r
\r
  /**\r
   * Top middle point of symbol bounding box.\r
   */\r
  SYMBOLTOPMIDDLEPOINT = 2,\r
\r
  /**\r
   * Top right point of symbol bounding box.\r
   */\r
  SYMBOLTOPRIGHTPOINT = 3,\r
}\r
\r
/**\r
 * Perspective grid plane types.\r
 */\r
declare enum PerspectiveGridPlaneType {\r
  /**\r
   * Perspective Grid Floor Plane Type.\r
   */\r
  FLOORPLANE = 3,\r
\r
  /**\r
   * Perspective Grid Left Plane Type.\r
   */\r
  LEFTPLANE = 1,\r
\r
  /**\r
   * Invalid Perspective Grid Plane Type.\r
   */\r
  NOPLANE = 0,\r
\r
  /**\r
   * Perspective Grid Right Plane Type.\r
   */\r
  RIGHTPLANE = 2,\r
}\r
\r
/**\r
 * Text Item First baseline types.\r
 */\r
declare enum FirstBaselineType {\r
  /**\r
   * First Baseline Ascent Type.\r
   */\r
  BASELINEASCENT = 0,\r
\r
  /**\r
   * First baseline Cap Height Type.\r
   */\r
  BASELINECAPHEIGHT = 1,\r
\r
  /**\r
   * First Baseline Em Box Height Type.\r
   */\r
  BASELINEEMBOXHEIGHT = 4,\r
\r
  /**\r
   * First Baseline Fixed Type.\r
   */\r
  BASELINEFIXED = 5,\r
\r
  /**\r
   * First Baseline Leading Type.\r
   */\r
  BASELINELEADING = 2,\r
\r
  /**\r
   * First Baseline Legacy Type.\r
   */\r
  BASELINELEGACY = 6,\r
\r
  /**\r
   * First Baseline x Height Type.\r
   */\r
  BASELINEXHEIGHT = 3,\r
}\r
\r
/**\r
 * Document layout style types.\r
 */\r
declare enum DocumentLayoutStyle {\r
  /**\r
   * Arranges document in cascaded style.\r
   */\r
  CASCADE = 0,\r
\r
  /**\r
   * Consolidates all documents.\r
   */\r
  CONSOLIDATEALL = 4,\r
\r
  /**\r
   * Arranges all documents floating layout.\r
   */\r
  FLOATALL = 3,\r
\r
  /**\r
   * Arranges documents as horizontal tiles.\r
   */\r
  HORIZONTALTILE = 1,\r
\r
  /**\r
   * Arranges documents as vertical tiles.\r
   */\r
  VERTICALTILE = 2,\r
}\r
\r
/**\r
 * A collection of artboards.\r
 */\r
declare class Artboards extends Array<Artboard> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Add artboard object.\r
   * @param artboardRect Size and position of artboard.\r
   */\r
  add(artboardRect: Rect): Artboard\r
\r
  /**\r
   * Retrieves the index position of the active artboard in the document's list.\r
   */\r
  getActiveArtboardIndex(): number\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Artboard\r
\r
  /**\r
   * Get the first Artboard with specified name.\r
   * @param artboardName The name of the artboard.\r
   */\r
  getByName(artboardName: string): Artboard\r
\r
  /**\r
   * Insert an Artboard at specified location.\r
   * @param artboardRect Size and position of artboard.\r
   * @param index Index position where artboard should be inserted.\r
   */\r
  insert(artboardRect: Rect, index: number): void\r
\r
  /**\r
   * Delete artboard object.\r
   * @param index Index of the crop area to be deleted.\r
   */\r
  remove(index: number): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Makes a specific artboard active, and makes it current in the iteration order.\r
   * @param index The 0-based index position of the artboard in the document list.\r
   */\r
  setActiveArtboardIndex(index: number): void\r
}\r
\r
/**\r
 * A collection of documents.\r
 */\r
declare class Documents extends Array<Document> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * A document.\r
   * @param documentColorSpace The color model used for the document.\r
   * @param width Width of the artboard.\r
   * @param height Height of the artboard.\r
   * @param numArtboards Number of artboards for new document.Range (1:100).\r
   * @param artboardLayout Layout of artboards for new document.\r
   * @param artboardSpacing Spacing between artboards for new document.\r
   * @param artboardRowsOrCols Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.\r
   */\r
  add(\r
    documentColorSpace?: DocumentColorSpace,\r
    width?: number,\r
    height?: number,\r
    numArtboards?: number,\r
    artboardLayout?: DocumentArtboardLayout,\r
    artboardSpacing?: number,\r
    artboardRowsOrCols?: number,\r
  ): Document\r
\r
  /**\r
   * Create a new document from a preset.\r
   * @param startupPreset The name of a startup document preset.\r
   * @param presetSettings Custom settings to apply to the preset.\r
   * @param showOptionsDialog If false, do not show Options dialog.\r
   */\r
  static addDocument(\r
    startupPreset: string,\r
    presetSettings?: DocumentPreset,\r
    showOptionsDialog?: boolean,\r
  ): Document\r
\r
  /**\r
   * Create a document from the preset with option to throw dialog to customize present settings.\r
   * @param startupPreset The name of startup document preset.\r
   * @param showOptionsDialog Argument controls if options Dialog is shown or not.\r
   */\r
  static addDocumentWithDialogOption(startupPreset: string, showOptionsDialog?: boolean): Document\r
\r
  /**\r
   * Arranges the documents in the specified style.\r
   * @param layoutStyle The document layout style.\r
   */\r
  arrange(layoutStyle: DocumentLayoutStyle): boolean\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Document\r
}\r
\r
/**\r
 * A collection of layers.\r
 */\r
declare class Layers extends Array<Layer> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a layer.\r
   */\r
  add(): Layer\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Layer\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of group items.\r
 */\r
declare class GroupItems extends Array<GroupItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a group item.\r
   */\r
  add(): GroupItem\r
\r
  /**\r
   * Create a group item from a vector graphics file.\r
   * @param imageFile The vector graphics file to be embedded.\r
   */\r
  static createFromFile(imageFile: File): GroupItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): GroupItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of page items.\r
 */\r
declare class PageItems extends Array<PageItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PageItem\r
}\r
\r
/**\r
 * A collection of path items.\r
 */\r
declare class PathItems extends Array<PathItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a path.\r
   */\r
  add(): PathItem\r
\r
  /**\r
   * Create an elliptical path item.\r
   * @param top The ellipse's bounds.\r
   * @param left The ellipse's bounds.\r
   * @param width The ellipse's bounds.\r
   * @param height The height of the ellipse.\r
   * @param reversed Is the ellipse path reversed?\r
   * @param inscribed Is the ellipse path inscribed?\r
   */\r
  ellipse(\r
    top?: number,\r
    left?: number,\r
    width?: number,\r
    height?: number,\r
    reversed?: boolean,\r
    inscribed?: boolean,\r
  ): PathItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PathItem\r
\r
  /**\r
   * Used to create a regular polygon path item. Not for path item access.\r
   * @param centerX\r
   * @param centerY\r
   * @param radius The radius of the polygon points.\r
   * @param sides The number of sides on the polygon.\r
   * @param reversed Is the polygon path reversed?\r
   */\r
  polygon(\r
    centerX?: number,\r
    centerY?: number,\r
    radius?: number,\r
    sides?: number,\r
    reversed?: boolean,\r
  ): PathItem\r
\r
  /**\r
   * Used to create a rectangular path item. Not for path item access.\r
   * @param top The top coordinate of the rectangle's bounds.\r
   * @param left The left coordinate of the rectangle's bounds.\r
   * @param width The width of the rectangle.\r
   * @param height The height of the rectangle.\r
   * @param reversed Is the rectangle path reversed?\r
   */\r
  rectangle(top: number, left: number, width: number, height: number, reversed?: boolean): PathItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Used to create a rounded-corner rectangular path item. Not for path item access.\r
   * @param top\r
   * @param left\r
   * @param width\r
   * @param height\r
   * @param horizontalRadius Horizontal corner radius.\r
   * @param verticalRadius Vertical corner radius.\r
   * @param reversed Is the rectangle path reversed?\r
   */\r
  roundedRectangle(\r
    top: number,\r
    left: number,\r
    width: number,\r
    height: number,\r
    horizontalRadius?: number,\r
    verticalRadius?: number,\r
    reversed?: boolean,\r
  ): PathItem\r
\r
  /**\r
   * Used to create a star-shaped path item. Not for path item access.\r
   * @param centerX\r
   * @param centerY\r
   * @param radius The outside radius of the star points.\r
   * @param innerRadius The inside radius of the star points.\r
   * @param points The number of points on the star.\r
   * @param reversed Is the star path reversed?\r
   */\r
  star(\r
    centerX?: number,\r
    centerY?: number,\r
    radius?: number,\r
    innerRadius?: number,\r
    points?: number,\r
    reversed?: boolean,\r
  ): PathItem\r
}\r
\r
/**\r
 * A collection of path points.\r
 */\r
declare class PathPoints extends Array<PathPoint> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a path point.\r
   */\r
  add(): PathPoint\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PathPoint\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of compound path items.\r
 */\r
declare class CompoundPathItems extends Array<CompoundPathItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a compound path item.\r
   */\r
  add(): CompoundPathItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): CompoundPathItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of stories.\r
 */\r
declare class Stories extends Array<Story> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Story\r
}\r
\r
/**\r
 * A collection of text frame items.\r
 */\r
declare class TextFrameItems extends Array<TextFrame> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a point text frame item.\r
   */\r
  add(): TextFrame\r
\r
  /**\r
   * Create an area text frame item.\r
   * @param textPath The path item associated with the text frame.\r
   * @param orientation The orientation of the text.\r
   * @param baseFrame The base text frame if it has one.\r
   * @param postFix Whether to postfix/prefix the new text frame to the specified base text frame.\r
   */\r
  static areaText(\r
    textPath: PathItem,\r
    orientation?: TextOrientation,\r
    baseFrame?: TextFrame,\r
    postFix?: boolean,\r
  ): TextFrame\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextFrame\r
\r
  /**\r
   * Create an on-path text frame item.\r
   * @param textPath The path item associated with the text frame.\r
   * @param startTValue The start position of text along a path, as a value relative to the path's segments (path text only)\r
   * @param endTValue The end position of text along a path, as a value relative to the path's segments (path text only)\r
   * @param orientation The orientation of the text.\r
   * @param baseFrame The base text frame if it has one.\r
   * @param postFix Whether to postfix/prefix the new text frame to the specified base text frame.\r
   */\r
  static pathText(\r
    textPath: PathItem,\r
    startTValue?: number,\r
    endTValue?: number,\r
    orientation?: TextOrientation,\r
    baseFrame?: TextFrame,\r
    postFix?: boolean,\r
  ): TextFrame\r
\r
  /**\r
   * Create a point text frame item.\r
   * @param anchor The position (coordinates) of the anchor point.\r
   * @param orientation The orientation of the text.\r
   */\r
  static pointText(anchor: Point | [number, number], orientation?: TextOrientation): TextFrame\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of legacy text items.\r
 */\r
declare class LegacyTextItems extends Array<LegacyTextItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create text frames from all legacy text items. The original legacy text items will be deleted.\r
   */\r
  convertToNative(): boolean\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): LegacyTextItem\r
}\r
\r
/**\r
 * A collection of text range items.\r
 */\r
declare class TextRanges extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
}\r
\r
/**\r
 * A collection of insertion points.\r
 */\r
declare class InsertionPoints extends Array<InsertionPoint> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): InsertionPoint\r
}\r
\r
/**\r
 * A collection of characters.\r
 */\r
declare class Characters extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a character.\r
   * @param contents The text string.\r
   */\r
  add(contents: string): TextRange\r
\r
  /**\r
   *\r
   * @param contents The text string.\r
   */\r
  static addBefore(contents: string): TextRange\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of words.\r
 */\r
declare class Words extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a word.\r
   * @param contents The text string.\r
   */\r
  add(contents: string): TextRange\r
\r
  /**\r
   *\r
   * @param contents The text string.\r
   */\r
  static addBefore(contents: string): TextRange\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of lines.\r
 */\r
declare class Lines extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
}\r
\r
/**\r
 * A collection of Paragraphs.\r
 */\r
declare class Paragraphs extends Array<TextRange> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a text art item.\r
   * @param contents The text string.\r
   */\r
  add(contents: string): TextRange\r
\r
  /**\r
   *\r
   * @param contents The text string.\r
   */\r
  static addBefore(contents: string): TextRange\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextRange\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of character styles.\r
 */\r
declare class CharacterStyles extends Array<CharacterStyle> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a named character style.\r
   * @param name The character style name.\r
   */\r
  add(name: string): CharacterStyle\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): CharacterStyle\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of paragraph styles.\r
 */\r
declare class ParagraphStyles extends Array<ParagraphStyle> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a named paragraph style.\r
   * @param name The paragraph style name.\r
   */\r
  add(name: string): ParagraphStyle\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): ParagraphStyle\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of custom spot colors.\r
 */\r
declare class Spots extends Array<Spot> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a spot color.\r
   */\r
  add(): Spot\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Spot\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of swatches.\r
 */\r
declare class Swatches extends Array<Swatch> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a swatch.\r
   */\r
  add(): Swatch\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Swatch\r
\r
  /**\r
   * Get selected swatches in the document.\r
   * @param includeSwatchInGroup The selected element should include swatches in group.\r
   */\r
  getSelected(includeSwatchInGroup?: boolean): Swatch[]\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of Swatch groups.\r
 */\r
declare class SwatchGroups extends Array<SwatchGroup> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a Swatch group.\r
   */\r
  add(): SwatchGroup\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): SwatchGroup\r
\r
  /**\r
   * Get selected swatchGroups in the document.\r
   */\r
  getSelected(): SwatchGroup[]\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of gradients.\r
 */\r
declare class Gradients extends Array<Gradient> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a gradient.\r
   */\r
  add(): Gradient\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Gradient\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of gradient stops.\r
 */\r
declare class GradientStops extends Array<GradientStop> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a gradient stop.\r
   */\r
  add(): GradientStop\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): GradientStop\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of patterns.\r
 */\r
declare class Patterns extends Array<Pattern> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a pattern.\r
   */\r
  add(): Pattern\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Pattern\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of symbols.\r
 */\r
declare class Symbols extends Array<Symbol> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a symbol.\r
   * @param sourceArt The art item from which to make this symbol.\r
   * @param registrationPoint The symbol registration point.\r
   */\r
  add(sourceArt: PageItem, registrationPoint?: SymbolRegistrationPoint): Symbol\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Symbol\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of symbol items.\r
 */\r
declare class SymbolItems extends Array<SymbolItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * An instance of a symbol item.\r
   * @param symbol The symbol to make an instance of.\r
   */\r
  add(symbol: Symbol): SymbolItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): SymbolItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of brushes.\r
 */\r
declare class Brushes extends Array<Brush> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a brush.\r
   * @param brushDefinition The brush definition from which the brush would be created.\r
   * @param brushName The name of the brush.\r
   */\r
  add(brushDefinition: File, brushName?: string): Brush\r
\r
  /**\r
   * Create a brush, select the brush tool and load the created brush in the brush tool.\r
   * @param brushDefinition The brush definition from which the brush would be created.\r
   */\r
  static addAndLoad(brushDefinition: File): Brush\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Brush\r
}\r
\r
/**\r
 * A collection of art styles.\r
 */\r
declare class ArtStyles extends Array<ArtStyle> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): ArtStyle\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of fonts.\r
 */\r
declare class TextFonts extends Array<TextFont> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): TextFont\r
\r
  /**\r
   * Returns the current font name.\r
   */\r
  getCurrentFont(): string\r
\r
  /**\r
   * Get the Text Font with the font name , if not avaiable it will create the substitute font.\r
   * @param fontName The name of the font to find or create substitute.\r
   */\r
  getFontByName(fontName: string): TextFont\r
\r
  /**\r
   * Check if any original font is present with the given name.\r
   * @param fontName The name of the font to find.\r
   */\r
  isFontAvailable(fontName: string): boolean\r
}\r
\r
/**\r
 * The collection of tags associated with a page item.\r
 */\r
declare class Tags extends Array<Tag> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a tag.\r
   */\r
  add(): Tag\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Tag\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of RasterItems.\r
 */\r
declare class RasterItems extends Array<RasterItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): RasterItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of PlacedItems.\r
 */\r
declare class PlacedItems extends Array<PlacedItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a placed item.\r
   */\r
  add(): PlacedItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PlacedItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * EmbeddedItems Collection.\r
 */\r
declare class EmbeddedItems extends Array<EmbedItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create an embedded item.\r
   */\r
  add(): EmbedItem\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): EmbedItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of MeshItems.\r
 */\r
declare class MeshItems extends Array<MeshItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): MeshItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of GraphItems.\r
 */\r
declare class GraphItems extends Array<GraphItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): GraphItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of PluginItems.\r
 */\r
declare class PluginItems extends Array<PluginItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): PluginItem\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of NonNativeItems.\r
 */\r
declare class NonNativeItems extends Array<NonNativeItem> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): NonNativeItem\r
}\r
\r
/**\r
 * A collection of views.\r
 */\r
declare class Views extends Array<View> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): View\r
}\r
\r
/**\r
 * A collection of variables.\r
 */\r
declare class Variables extends Array<Variable> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a variable.\r
   */\r
  add(): Variable\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): Variable\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A collection of datasets.\r
 */\r
declare class DataSets extends Array<DataSet> {\r
  /**\r
   * Number of elements in the collection.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Create a data set.\r
   */\r
  add(): DataSet\r
\r
  /**\r
   * Get the first element in the collection with the provided name.\r
   * @param name\r
   */\r
  getByName(name: string): DataSet\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Options which may be supplied when opening a file.\r
 */\r
declare class OpenOptions {\r
  /**\r
   * Add this file to the list of recently opened files.\r
   */\r
  static addToRecentFiles: boolean\r
\r
  /**\r
   * Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded.\r
   */\r
  static convertCropAreaToArtboard: boolean\r
\r
  /**\r
   * Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later.\r
   */\r
  static convertTilesToArtboard: boolean\r
\r
  /**\r
   * Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later.\r
   */\r
  static createArtboardWithArtworkBoundingBox: boolean\r
\r
  /**\r
   * Open the file as library.\r
   */\r
  static openAs: LibraryType\r
\r
  /**\r
   * Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later.\r
   */\r
  static preserveLegacyArtboard: boolean\r
\r
  /**\r
   * Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3)\r
   */\r
  static updateLegacyGradientMesh: boolean\r
\r
  /**\r
   * Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11)\r
   */\r
  static updateLegacyText: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when saving a document as an FXG file.\r
 */\r
declare class FXGSaveOptions {\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * The policy used by FXG to expand blends.\r
   */\r
  static blendsPolicy: BlendsExpandPolicy\r
\r
  /**\r
   * Choose to downsample the linked images(72ppi)\r
   */\r
  static downsampleLinkedImages: boolean\r
\r
  /**\r
   * The policy used by FXG to preserve filters.\r
   */\r
  static filtersPolicy: FiltersPreservePolicy\r
\r
  /**\r
   * The policy used by FXG to preserve gradients.\r
   */\r
  static gradientsPolicy: GradientsPreservePolicy\r
\r
  /**\r
   * Choose to include metadata (XMP)\r
   */\r
  static includeMetadata: boolean\r
\r
  /**\r
   * Choose to include unused symbols.\r
   */\r
  static includeUnusedSymbols: boolean\r
\r
  /**\r
   * Choose to preserve the editing capabilities of FXG.\r
   */\r
  static preserveEditingCapabilities: boolean\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
\r
  /**\r
   * The policy used by FXG to preserve text.\r
   */\r
  static textPolicy: TextPreservePolicy\r
\r
  /**\r
   * The version of the FXG file format to create.\r
   */\r
  static version: FXGVersion\r
}\r
\r
/**\r
 * Options which may be supplied when saving a document as an Illustrator EPS file.\r
 */\r
declare class EPSSaveOptions {\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Use CMYK PostScript.\r
   */\r
  static cmykPostScript: boolean\r
\r
  /**\r
   * What Illustrator file format version to create.\r
   */\r
  static compatibility: Compatibility\r
\r
  /**\r
   * Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object.\r
   */\r
  static compatibleGradientPrinting: boolean\r
\r
  /**\r
   * Embed all fonts used by the document in the saved file (version 7 or later)\r
   */\r
  static embedAllFonts: boolean\r
\r
  /**\r
   * Are linked image files to be included in the saved document.\r
   */\r
  static embedLinkedFiles: boolean\r
\r
  /**\r
   * How should transparency be flattened for older file format versions (pre-version 9)\r
   */\r
  static flattenOutput: OutputFlattening\r
\r
  /**\r
   * Include thumbnail image of the EPS artwork.\r
   */\r
  static includeDocumentThumbnails: boolean\r
\r
  /**\r
   *\r
   */\r
  static overprint: PDFOverprint\r
\r
  /**\r
   * PostScript level to use (level 1 valid for file format version 8 or older)\r
   */\r
  static postScript: EPSPostScriptLevelEnum\r
\r
  /**\r
   * EPS preview format.\r
   */\r
  static preview: EPSPreview\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when saving a document as a PDF file.\r
 */\r
declare class PDFSaveOptions {\r
  /**\r
   * Create acrobat layers from top-level layers - acrobat 6 only option.\r
   */\r
  static acrobatLayers: boolean\r
\r
  /**\r
   * Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Link 4 bleed values.\r
   */\r
  static bleedLink: boolean\r
\r
  /**\r
   * The bleed offset rect.\r
   */\r
  static bleedOffsetRect: Rect\r
\r
  /**\r
   * Draw color bars.\r
   */\r
  static colorBars: boolean\r
\r
  /**\r
   * How should color bitmap images be compressed.\r
   */\r
  static colorCompression: CompressionQuality\r
\r
  /**\r
   * PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination.\r
   */\r
  static colorConversionID: ColorConversion\r
\r
  /**\r
   * When NoColorConversion is specified for Color Conversion, NoColorDestination is set.\r
   */\r
  static colorDestinationID: ColorDestination\r
\r
  /**\r
   * If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to.\r
   */\r
  static colorDownsampling: number\r
\r
  /**\r
   * Downsample if the image's resolution is above this value.\r
   */\r
  static colorDownsamplingImageThreshold: number\r
\r
  /**\r
   * How should color bitmap images be resampled.\r
   */\r
  static colorDownsamplingMethod: DownsampleMethod\r
\r
  /**\r
   * If CMS is off, Don't Include Profiles is set.\r
   */\r
  static colorProfileID: ColorProfile\r
\r
  /**\r
   * Tile size when compressing with JPEG2000.\r
   */\r
  static colorTileSize: number\r
\r
  /**\r
   * The version of the Acrobat file format to create.\r
   */\r
  static compatibility: PDFCompatibility\r
\r
  /**\r
   * Should line art and text be compressed?\r
   */\r
  static compressArt: boolean\r
\r
  /**\r
   * A password string to open the document.\r
   */\r
  static documentPassword: string\r
\r
  /**\r
   * Enable accessing 128-bit.\r
   */\r
  static enableAccess: boolean\r
\r
  /**\r
   * Enable copying of text 128-bit.\r
   */\r
  static enableCopy: boolean\r
\r
  /**\r
   * Enable copying and accessing 40-bit.\r
   */\r
  static enableCopyAccess: boolean\r
\r
  /**\r
   * Enable plaintext metadata 128-bit - available only for acrobat 6.\r
   */\r
  static enablePlainText: boolean\r
\r
  /**\r
   * The printing flattener options.\r
   */\r
  static flattenerOptions: PrintFlattenerOptions\r
\r
  /**\r
   * The transparency flattener preset name.\r
   */\r
  static flattenerPreset: string\r
\r
  /**\r
   * Include a subset of fonts when less than this percentage of characters are used.\r
   */\r
  static fontSubsetThreshold: number\r
\r
  /**\r
   * Generate thumbnails for the saved document.\r
   */\r
  static generateThumbnails: boolean\r
\r
  /**\r
   * How should grayscale bitmap images be compressed.\r
   */\r
  static grayscaleCompression: CompressionQuality\r
\r
  /**\r
   * If zero, no downsampling, otherwise, the resolution to downsample grayscale images to.\r
   */\r
  static grayscaleDownsampling: number\r
\r
  /**\r
   * Downsample if the image's resolution is above this value.\r
   */\r
  static grayscaleDownsamplingImageThreshold: number\r
\r
  /**\r
   * How should grayscale bitmap images be resampled.\r
   */\r
  static grayscaleDownsamplingMethod: DownsampleMethod\r
\r
  /**\r
   * Tile size when compressing with JPEG2000.\r
   */\r
  static grayscaleTileSize: number\r
\r
  /**\r
   * How should monochrome bitmap images be compressed.\r
   */\r
  static monochromeCompression: MonochromeCompression\r
\r
  /**\r
   * If zero, no downsampling, otherwise, the resolution to downsample images to.\r
   */\r
  static monochromeDownsampling: number\r
\r
  /**\r
   * Downsample if the image's resolution is above this value.\r
   */\r
  static monochromeDownsamplingImageThreshold: number\r
\r
  /**\r
   * How should monochrome bitmap images be resampled.\r
   */\r
  static monochromeDownsamplingMethod: DownsampleMethod\r
\r
  /**\r
   * Custom offset (in points) for using the custom paper.\r
   */\r
  static offset: number\r
\r
  /**\r
   * Should the PDF document be optimized for fast web viewing.\r
   */\r
  static optimization: boolean\r
\r
  /**\r
   * This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition.\r
   */\r
  static outputCondition: string\r
\r
  /**\r
   * If selected for Output Intent Profile Name, you can set the name of a registered printing condition.\r
   */\r
  static outputConditionID: string\r
\r
  /**\r
   * When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box.\r
   */\r
  static outputIntentProfile: string\r
\r
  /**\r
   * PDF security printing permission.\r
   */\r
  static pDFAllowPrinting: PDFPrintAllowedEnum\r
\r
  /**\r
   * PDF security changes allowed.\r
   */\r
  static pDFChangesAllowed: PDFChangesAllowedEnum\r
\r
  /**\r
   * The max string length is 255 bytes. Name of PDF preset to use.\r
   */\r
  static pDFPreset: string\r
\r
  /**\r
   * This control includes the None option for when the user is not complying with any PDF standard.\r
   */\r
  static pDFXStandard: PDFXStandard\r
\r
  /**\r
   * This displays the description from the selected preset.\r
   */\r
  static pDFXStandardDescription: string\r
\r
  /**\r
   * Draw page information.\r
   */\r
  static pageInformation: boolean\r
\r
  /**\r
   * The page marks style.\r
   */\r
  static pageMarksType: PageMarksTypes\r
\r
  /**\r
   * A password string to restrict editing security settings.\r
   */\r
  static permissionPassword: string\r
\r
  /**\r
   * Preserve Illustrator editing capabilities when saving the document.\r
   */\r
  static preserveEditability: boolean\r
\r
  /**\r
   * Flattening printer resolution.\r
   */\r
  static printerResolution: number\r
\r
  /**\r
   * Draw registration marks.\r
   */\r
  static registrationMarks: boolean\r
\r
  /**\r
   * URL to the site where the specified output condition is registered. No validation is performed on the URL.\r
   */\r
  static registryName: string\r
\r
  /**\r
   * Require a password to open the document.\r
   */\r
  static requireDocumentPassword: boolean\r
\r
  /**\r
   * Use a password to restrict editing security settings.\r
   */\r
  static requirePermissionPassword: boolean\r
\r
  /**\r
   * This indicates if manual trapping has been prepared in the document.\r
   */\r
  static trapped: boolean\r
\r
  /**\r
   * Trim mark weight.\r
   */\r
  static trimMarkWeight: PDFTrimMarkWeight\r
\r
  /**\r
   * Draw trim marks.\r
   */\r
  static trimMarks: boolean\r
\r
  /**\r
   * View PDF after saving.\r
   */\r
  static viewAfterSaving: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when saving a document as an Illustrator file.\r
 */\r
declare class IllustratorSaveOptions {\r
  /**\r
   * If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * What Illustrator file format version to create.\r
   */\r
  static compatibility: Compatibility\r
\r
  /**\r
   * Should the saved file be compressed (version 10 or later)\r
   */\r
  static compressed: boolean\r
\r
  /**\r
   * Embed the document's ICC profile in the saved file (version 9 or later)\r
   */\r
  static embedICCProfile: boolean\r
\r
  /**\r
   * Are linked image files to be included in the saved document (versions 7 or later)\r
   */\r
  static embedLinkedFiles: boolean\r
\r
  /**\r
   * How should transparency be flattened for older file format versions (pre-version 9)\r
   */\r
  static flattenOutput: OutputFlattening\r
\r
  /**\r
   * Include a subset of fonts when less than this percentage of characters are used (version 9 or later)\r
   */\r
  static fontSubsetThreshold: number\r
\r
  /**\r
   * Save as a PDF compatible file (version 10 or later)\r
   */\r
  static pdfCompatible: boolean\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
}\r
\r
/**\r
 *\r
 */\r
declare class Matrix {\r
  /**\r
   *\r
   */\r
  static mValueA: number\r
\r
  /**\r
   *\r
   */\r
  static mValueB: number\r
\r
  /**\r
   *\r
   */\r
  static mValueC: number\r
\r
  /**\r
   *\r
   */\r
  static mValueD: number\r
\r
  /**\r
   *\r
   */\r
  static mValueTX: number\r
\r
  /**\r
   *\r
   */\r
  static mValueTY: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a JPEG file.\r
 */\r
declare class ExportOptionsJPEG {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the resulting image be clipped to the artboard.\r
   */\r
  static artBoardClipping: boolean\r
\r
  /**\r
   * Blur the resulting image this much.\r
   */\r
  static blurAmount: number\r
\r
  /**\r
   * Horizontal scaling factor.\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * Should the image be optimized for web viewing.\r
   */\r
  static optimization: boolean\r
\r
  /**\r
   * Quality of resulting image.\r
   */\r
  static qualitySetting: number\r
\r
  /**\r
   * Should the resulting image be saved as HTML.\r
   */\r
  static saveAsHTML: boolean\r
\r
  /**\r
   * Vertical scaling factor.\r
   */\r
  static verticalScale: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as an 8 bit PNG file.\r
 */\r
declare class ExportOptionsPNG8 {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the resulting image be clipped to the artboard.\r
   */\r
  static artBoardClipping: boolean\r
\r
  /**\r
   * Number of colors in exported color table.\r
   */\r
  static colorCount: number\r
\r
  /**\r
   * Method used to dither colors.\r
   */\r
  static colorDither: ColorDitherMethod\r
\r
  /**\r
   * Method used to reduce the number of colors.\r
   */\r
  static colorReduction: ColorReductionMethod\r
\r
  /**\r
   * How much should the colors be dithered.\r
   */\r
  static ditherPercent: number\r
\r
  /**\r
   * Horizontal scaling factor.\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * Should the resulting image be interlaced.\r
   */\r
  static interlaced: boolean\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * Should the resulting image be saved as HTML.\r
   */\r
  static saveAsHTML: boolean\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
\r
  /**\r
   * Vertical scaling factor.\r
   */\r
  static verticalScale: number\r
\r
  /**\r
   * How much should the color table be changed to match the web palette.\r
   */\r
  static webSnap: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as an 24 bit PNG file.\r
 */\r
declare class ExportOptionsPNG24 {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the resulting image be clipped to the artboard.\r
   */\r
  static artBoardClipping: boolean\r
\r
  /**\r
   * Dimensions in which to contain the resulting raster.\r
   */\r
  static dimensions: Dimensions\r
\r
  /**\r
   * Horizontal scaling factor.\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * Should the resulting image be saved as HTML.\r
   */\r
  static saveAsHTML: boolean\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
\r
  /**\r
   * Vertical scaling factor.\r
   */\r
  static verticalScale: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a GIF file.\r
 */\r
declare class ExportOptionsGIF {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the resulting image be clipped to the artboard.\r
   */\r
  static artBoardClipping: boolean\r
\r
  /**\r
   * Number of colors in exported color table.\r
   */\r
  static colorCount: number\r
\r
  /**\r
   * Method used to dither colors.\r
   */\r
  static colorDither: ColorDitherMethod\r
\r
  /**\r
   * Method used to reduce the number of colors.\r
   */\r
  static colorReduction: ColorReductionMethod\r
\r
  /**\r
   * How much should the colors be dithered.\r
   */\r
  static ditherPercent: number\r
\r
  /**\r
   * Horizontal scaling factor.\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * Level of information loss during compression.\r
   */\r
  static infoLossPercent: number\r
\r
  /**\r
   * Should the resulting image be interlaced.\r
   */\r
  static interlaced: boolean\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * Should the resulting image be saved as HTML.\r
   */\r
  static saveAsHTML: boolean\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
\r
  /**\r
   * Vertical scaling factor.\r
   */\r
  static verticalScale: number\r
\r
  /**\r
   * How much should the color table be changed to match the web pallet.\r
   */\r
  static webSnap: number\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a Photoshop file.\r
 */\r
declare class ExportOptionsPhotoshop {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Export text objects as editable text layers.\r
   */\r
  static editableText: boolean\r
\r
  /**\r
   * Embed an ICC profile when exporting.\r
   */\r
  static embedICCProfile: boolean\r
\r
  /**\r
   * The color space of the exported file.\r
   */\r
  static imageColorSpace: ImageColorSpace\r
\r
  /**\r
   * Preserve as much of the original document's structure as possible when exporting.\r
   */\r
  static maximumEditability: boolean\r
\r
  /**\r
   * The resolution of the exported file.\r
   */\r
  static resolution: number\r
\r
  /**\r
   * All the artboards or range of the artboards will be exported.\r
   */\r
  static saveMultipleArtboards: boolean\r
\r
  /**\r
   * Should a warning dialog be displayed because of conflicts in the export settings.\r
   */\r
  static warnings: boolean\r
\r
  /**\r
   * Preserve document layers when exporting.\r
   */\r
  static writeLayers: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as an SVG file.\r
 */\r
declare class ExportOptionsSVG {\r
  /**\r
   * The version of DTD that the exported file should be conforming to.\r
   */\r
  static DTD: SVGDTDVersion\r
\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Should the exported file be compressed.\r
   */\r
  static compressed: boolean\r
\r
  /**\r
   * Decimal precision for element coordinate values.\r
   */\r
  static coordinatePrecision: number\r
\r
  /**\r
   * How should the CSS properties of the document be included in the document.\r
   */\r
  static cssProperties: SVGCSSPropertyLocation\r
\r
  /**\r
   * How should the text in the document be encoded.\r
   */\r
  static documentEncoding: SVGDocumentEncoding\r
\r
  /**\r
   * Should the raster images in the exported file be included.\r
   */\r
  static embedRasterImages: boolean\r
\r
  /**\r
   * What font glyphs should be included in the exported file.\r
   */\r
  static fontSubsetting: SVGFontSubsetting\r
\r
  /**\r
   * The type of font that should be included in the exported file.\r
   */\r
  static fontType: SVGFontType\r
\r
  /**\r
   *\r
   */\r
  static includeFileInfo: boolean\r
\r
  /**\r
   *\r
   */\r
  static includeUnusedStyles: boolean\r
\r
  /**\r
   *\r
   */\r
  static includeVariablesAndDatasets: boolean\r
\r
  /**\r
   *\r
   */\r
  static optimizeForSVGViewer: boolean\r
\r
  /**\r
   * Preserve Illustrator editing capabilities when exporting the document.\r
   */\r
  static preserveEditability: boolean\r
\r
  /**\r
   * Is SVG auto kerning allowed?\r
   */\r
  static sVGAutoKerning: boolean\r
\r
  /**\r
   * Is SVG text-on-path construct allowed?\r
   */\r
  static sVGTextOnPath: boolean\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
\r
  /**\r
   * Preserve slice data in exported document.\r
   */\r
  static slices: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a Web optimized SVG file.\r
 */\r
declare class ExportOptionsWebOptimizedSVG {\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Decimal precision for element coordinate values.\r
   */\r
  static coordinatePrecision: number\r
\r
  /**\r
   * How should the CSS properties of the document be included in the document.\r
   */\r
  static cssProperties: SVGCSSPropertyLocation\r
\r
  /**\r
   * The type of font that should be included in the exported file.\r
   */\r
  static fontType: SVGFontType\r
\r
  /**\r
   * Should the raster images in the exported file be included.\r
   */\r
  static rasterImageLocation: RasterImageLocation\r
\r
  /**\r
   * All the artboards or range of the artboards will be saved.\r
   */\r
  static saveMultipleArtboards: boolean\r
\r
  /**\r
   * How object names (IDs) are generated in exported SVG.\r
   */\r
  static svgId: SVGIdType\r
\r
  /**\r
   * Reduces the size of the svg.\r
   */\r
  static svgMinify: boolean\r
\r
  /**\r
   * Makes the SVG Responsive.\r
   */\r
  static svgResponsive: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as an Flash (.SWF) file.\r
 */\r
declare class ExportOptionsFlash {\r
  /**\r
   * How should the arts be clipped during the output.\r
   */\r
  static artClipping: ArtClippingOption\r
\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * The background color.\r
   */\r
  static backgroundColor: RGBColor\r
\r
  /**\r
   * A list of layers to be included as the static background in all exported Flash frames.\r
   */\r
  static backgroundLayers: Layer[]\r
\r
  /**\r
   * Controls how the blend art objects are animated when export to Flash frames.\r
   */\r
  static blendAnimation: BlendAnimationType\r
\r
  /**\r
   * Should the exported file be compressed.\r
   */\r
  static compressed: boolean\r
\r
  /**\r
   * Should all text be converted to outlines.\r
   */\r
  static convertTextToOutlines: boolean\r
\r
  /**\r
   * How much curve information should be preserved.\r
   */\r
  static curveQuality: number\r
\r
  /**\r
   * Should all symbol definitions in the palette be exported to the SWF File.\r
   */\r
  static exportAllSymbols: boolean\r
\r
  /**\r
   * How should the Flash file be created.\r
   */\r
  static exportStyle: FlashExportStyle\r
\r
  /**\r
   * Which version of SWF to export.\r
   */\r
  static exportVersion: FlashExportVersion\r
\r
  /**\r
   * When exporting layers to Flash frames.\r
   */\r
  static frameRate: number\r
\r
  /**\r
   * Should the kerning information for text objects be ignored.\r
   */\r
  static ignoreTextKerning: boolean\r
\r
  /**\r
   * How should the images in the exported Flash file be compressed.\r
   */\r
  static imageFormat: FlashImageFormat\r
\r
  /**\r
   * If true, include minimal XMP metadata in the exported file.\r
   */\r
  static includeMetadata: boolean\r
\r
  /**\r
   * What method to use.\r
   */\r
  static jpegMethod: FlashJPEGMethod\r
\r
  /**\r
   * Level of compression.\r
   */\r
  static jpegQuality: number\r
\r
  /**\r
   * The order in which the layers will be exported to Flash frames.\r
   */\r
  static layerOrder: LayerOrderType\r
\r
  /**\r
   * Should the Flash file be set to loop when run.\r
   */\r
  static looping: boolean\r
\r
  /**\r
   * What access should the SWF file have - local or network access.\r
   */\r
  static playbackAccess: FlashPlaybackSecurity\r
\r
  /**\r
   * Choose whether to preserve artwork appearance or editability (default) during export.\r
   */\r
  static preserveAppearance: boolean\r
\r
  /**\r
   * Prevent the exported file from being imported by other applications.\r
   */\r
  static readOnly: boolean\r
\r
  /**\r
   * If a file with the same name already exists, should it be replaced?\r
   */\r
  static replacing: SaveOptions\r
\r
  /**\r
   * Pixels per inch.\r
   */\r
  static resolution: number\r
\r
  /**\r
   * All the artboards or range of the artboards will be exported.\r
   */\r
  static saveMultipleArtboards: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document to AutoCAD formats (.dwg or .dxf)\r
 */\r
declare class ExportOptionsAutoCAD {\r
  /**\r
   * Alter paths for appearance.\r
   */\r
  static alterPathsForAppearance: boolean\r
\r
  /**\r
   * Number of colors to export into the AutoCAD file.\r
   */\r
  static colors: AutoCADColors\r
\r
  /**\r
   * Whether to convert text to outlines.\r
   */\r
  static convertTextToOutlines: boolean\r
\r
  /**\r
   * Which format to export the file as.\r
   */\r
  static exportFileFormat: AutoCADExportFileFormat\r
\r
  /**\r
   * Whether to preserve appearance or editability during export.\r
   */\r
  static exportOption: AutoCADExportOption\r
\r
  /**\r
   * Export selected art only.\r
   */\r
  static exportSelectedArtOnly: boolean\r
\r
  /**\r
   * Raster format in which to export raster art.\r
   */\r
  static rasterFormat: AutoCADRasterFormat\r
\r
  /**\r
   * Whether to scale lineweights by the same amount as rest of the drawing.\r
   */\r
  static scaleLineweights: boolean\r
\r
  /**\r
   * Units from which to map.\r
   */\r
  static unit: AutoCADUnit\r
\r
  /**\r
   * Ratio by which to scale the output.\r
   */\r
  static unitScaleRatio: number\r
\r
  /**\r
   * Release of AutoCAD to export to.\r
   */\r
  static version: AutoCADCompatibility\r
}\r
\r
/**\r
 * Options which may be supplied when exporting a document as a TIFF file.\r
 */\r
declare class ExportOptionsTIFF {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: AntiAliasingMethod\r
\r
  /**\r
   * If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * Mac or PC byte order when exporting.\r
   */\r
  static byteOrder: TIFFByteOrder\r
\r
  /**\r
   * Embed an ICC profile when exporting.\r
   */\r
  static embedICCProfile: boolean\r
\r
  /**\r
   * The color space of the exported file.\r
   */\r
  static imageColorSpace: ImageColorSpace\r
\r
  /**\r
   * Compress TIFF file with LZW Compression when exporting.\r
   */\r
  static lZWCompression: boolean\r
\r
  /**\r
   * The resolution of the exported file.\r
   */\r
  static resolution: number\r
\r
  /**\r
   * All the artboards or range of the artboards will be exported.\r
   */\r
  static saveMultipleArtboards: boolean\r
}\r
\r
/**\r
 * The parent class for all color values used in Illustrator. See the specific color classes for more information.\r
 */\r
declare class Color {}\r
\r
/**\r
 * An Lab color specification.\r
 */\r
declare class LabColor extends Color {\r
  /**\r
   * The a color value (between -128.0 and 127.0)\r
   */\r
  a: number\r
\r
  /**\r
   * The b color value (between -128.0 and 127.0)\r
   */\r
  b: number\r
\r
  /**\r
   * The L color value (between 0.0 and 100.0)\r
   */\r
  l: number\r
}\r
\r
/**\r
 * Dimensions (height and width)\r
 */\r
declare class Dimensions {\r
  /**\r
   * The Height parameter.\r
   */\r
  static height: number\r
\r
  /**\r
   * The Width parameter.\r
   */\r
  static width: number\r
}\r
\r
/**\r
 * An RGB color specification.\r
 */\r
declare class RGBColor extends Color {\r
  /**\r
   * The blue color value (between 0.0 and 255.0)\r
   */\r
  blue: number\r
\r
  /**\r
   * The green color value (between 0.0 and 255.0)\r
   */\r
  green: number\r
\r
  /**\r
   * The red color value (between 0.0 and 255.0)\r
   */\r
  red: number\r
}\r
\r
/**\r
 * A CMYK color specification.\r
 */\r
declare class CMYKColor extends Color {\r
  /**\r
   * The black color value (between 0.0 and 100.0)\r
   */\r
  black: number\r
\r
  /**\r
   * The cyan color value (between 0.0 and 100.0)\r
   */\r
  cyan: number\r
\r
  /**\r
   * The magenta color value (between 0.0 and 100.0)\r
   */\r
  magenta: number\r
\r
  /**\r
   * The yellow color value (between 0.0 and 100.0)\r
   */\r
  yellow: number\r
}\r
\r
/**\r
 * A gray color specification.\r
 */\r
declare class GrayColor extends Color {\r
  /**\r
   * The gray value (between 0.0 and 100.0)\r
   */\r
  gray: number\r
}\r
\r
/**\r
 * Represents the 'none' color.\r
 */\r
declare class NoColor extends Color {}\r
\r
/**\r
 * Information about the spot color.\r
 */\r
declare class SpotColor extends Color {\r
  /**\r
   *\r
   */\r
  spot: Spot\r
\r
  /**\r
   * Percentage level of tint to be applied to the spot color.\r
   */\r
  tint: number\r
}\r
\r
/**\r
 * A Pattern color specification.\r
 */\r
declare class PatternColor extends Color {\r
  /**\r
   * Additional transformation arising from manipulating the path.\r
   */\r
  matrix: Matrix\r
\r
  /**\r
   *\r
   */\r
  pattern: Pattern\r
\r
  /**\r
   * Whether or not the prototype is reflected before filling.\r
   */\r
  reflect: boolean\r
\r
  /**\r
   * The axis around which to reflect.\r
   */\r
  reflectAngle: number\r
\r
  /**\r
   * The angle to rotate the before filling.\r
   */\r
  rotation: number\r
\r
  /**\r
   * The fraction to scale the prototype before filling.\r
   */\r
  scaleFactor: Point | [number, number]\r
\r
  /**\r
   * The angle to slant the shear by.\r
   */\r
  shearAngle: number\r
\r
  /**\r
   * The axis to shear with respect to.\r
   */\r
  shearAxis: number\r
\r
  /**\r
   * The angle to translate the (unscaled) prototype before filling.\r
   */\r
  shiftAngle: number\r
\r
  /**\r
   * The distance to translate the (unscaled) prototype before filling.\r
   */\r
  shiftDistance: number\r
}\r
\r
/**\r
 * A Gradient color specification.\r
 */\r
declare class GradientColor extends Color {\r
  /**\r
   * The gradient vector angle.\r
   */\r
  angle: number\r
\r
  /**\r
   * Reference to the object defining the gradient.\r
   */\r
  gradient: Gradient\r
\r
  /**\r
   * The gradient hilite vector angle.\r
   */\r
  hiliteAngle: number\r
\r
  /**\r
   * The gradient hilite vector length.\r
   */\r
  hiliteLength: number\r
\r
  /**\r
   * The gradient vector length.\r
   */\r
  length: number\r
\r
  /**\r
   * Additional transformation arising from manipulating the path.\r
   */\r
  matrix: Matrix\r
\r
  /**\r
   * The gradient vector origin.\r
   */\r
  origin: Point | [number, number]\r
}\r
\r
/**\r
 * Tab stop information (returned by tab stops from a paragraph object)\r
 */\r
declare class TabStopInfo {\r
  /**\r
   * The alignment of the tab stop.\r
   */\r
  static alignment: TabStopAlignment\r
\r
  /**\r
   * The character used for decimal tab stops.\r
   */\r
  static decimalCharacter: string\r
\r
  /**\r
   * The leader dot.\r
   */\r
  static leader: string\r
\r
  /**\r
   * The position of the tab stop expressed in points.\r
   */\r
  static position: number\r
}\r
\r
/**\r
 * An installed printer.\r
 */\r
declare class Printer {\r
  /**\r
   * The printer name.\r
   */\r
  static name: string\r
\r
  /**\r
   * The printer information.\r
   */\r
  static printerInfo: PrinterInfo\r
}\r
\r
/**\r
 * Printer information.\r
 */\r
declare class PrinterInfo {\r
  /**\r
   * Does the printer support binary printing?\r
   */\r
  static binaryPrintingSupport: boolean\r
\r
  /**\r
   * The printer color capability.\r
   */\r
  static colorSupport: PrinterColorMode\r
\r
  /**\r
   * Does the printer support custom paper size?\r
   */\r
  static customPaperSupport: boolean\r
\r
  /**\r
   * Does the printer support custom paper transverse?\r
   */\r
  static customPaperTransverseSupport: boolean\r
\r
  /**\r
   * The printer default resolution.\r
   */\r
  static deviceResolution: number\r
\r
  /**\r
   * Does the printer support InRIP color separation?\r
   */\r
  static inRIPSeparationSupport: boolean\r
\r
  /**\r
   * The printer maximum device resolution.\r
   */\r
  static maxDeviceResolution: number\r
\r
  /**\r
   * Custom paper's maximum height.\r
   */\r
  static maxPaperHeight: number\r
\r
  /**\r
   * Custom paper's maximum height offset.\r
   */\r
  static maxPaperHeightOffset: number\r
\r
  /**\r
   * Custom paper's maximum width.\r
   */\r
  static maxPaperWidth: number\r
\r
  /**\r
   * Custom paper's maximum width offset.\r
   */\r
  static maxPaperWidthOffset: number\r
\r
  /**\r
   * Custom paper's minimum height.\r
   */\r
  static minPaperHeight: number\r
\r
  /**\r
   * Custom paper's minimum height offset.\r
   */\r
  static minPaperHeightOffset: number\r
\r
  /**\r
   * Custom paper's minimum width.\r
   */\r
  static minPaperWidth: number\r
\r
  /**\r
   * Custom paper's minimum width offset.\r
   */\r
  static minPaperWidthOffset: number\r
\r
  /**\r
   * The list of supported paper sizes.\r
   */\r
  static paperSizes: Paper[]\r
\r
  /**\r
   * The PostScript level.\r
   */\r
  static postScriptLevel: PrinterPostScriptLevelEnum\r
\r
  /**\r
   * The printer type.\r
   */\r
  static printerType: PrinterTypeEnum\r
}\r
\r
/**\r
 * A PPD file.\r
 */\r
declare class PPDFile {\r
  /**\r
   * The PPD file information.\r
   */\r
  static PPDInfo: PPDFileInfo\r
\r
  /**\r
   * The PPD model name.\r
   */\r
  static name: string\r
}\r
\r
/**\r
 * PPD file information.\r
 */\r
declare class PPDFileInfo {\r
  /**\r
   * Path specification for the PPD file.\r
   */\r
  static PPDFilePath: File\r
\r
  /**\r
   * The PostScript language level.\r
   */\r
  static languageLevel: string\r
\r
  /**\r
   * List of color separation screens.\r
   */\r
  static screenList: Screen[]\r
\r
  /**\r
   * List of color separation screen spot functions.\r
   */\r
  static screenSpotFunctionList: ScreenSpotFunction[]\r
}\r
\r
/**\r
 * Paper size.\r
 */\r
declare class Paper {\r
  /**\r
   * The paper name.\r
   */\r
  static name: string\r
\r
  /**\r
   * The paper information.\r
   */\r
  static paperInfo: PaperInfo\r
}\r
\r
/**\r
 * Paper information.\r
 */\r
declare class PaperInfo {\r
  /**\r
   * Is it a custom paper?\r
   */\r
  static customPaper: boolean\r
\r
  /**\r
   * The paper's height (in points)\r
   */\r
  static height: number\r
\r
  /**\r
   * The imageable area.\r
   */\r
  static imageableArea: Rect\r
\r
  /**\r
   * The paper's width (in points)\r
   */\r
  static width: number\r
}\r
\r
/**\r
 * Color separation screen.\r
 */\r
declare class Screen {\r
  /**\r
   * The color separation screen name.\r
   */\r
  static name: string\r
\r
  /**\r
   * The color separation screen information.\r
   */\r
  static screenInfo: ScreenInfo\r
}\r
\r
/**\r
 * Screen information.\r
 */\r
declare class ScreenInfo {\r
  /**\r
   * The screen's angle (in degrees)\r
   */\r
  static angle: number\r
\r
  /**\r
   * Is it the default screen?\r
   */\r
  static defaultScreen: boolean\r
\r
  /**\r
   * The screen's frequency.\r
   */\r
  static frequency: number\r
}\r
\r
/**\r
 * Color separation screen spot function.\r
 */\r
declare class ScreenSpotFunction {\r
  /**\r
   * The color separation screen spot function name.\r
   */\r
  static name: string\r
\r
  /**\r
   * The spot function in terms of the PostScript commands.\r
   */\r
  static spotFunction: string\r
}\r
\r
/**\r
 * Printer's ink.\r
 */\r
declare class Ink {\r
  /**\r
   * The ink information.\r
   */\r
  static inkInfo: InkInfo\r
\r
  /**\r
   * The ink's name.\r
   */\r
  static name: string\r
}\r
\r
/**\r
 * Ink information.\r
 */\r
declare class InkInfo {\r
  /**\r
   * The ink's screen angle (in degrees)\r
   */\r
  static angle: number\r
\r
  /**\r
   * The color of the custom ink.\r
   */\r
  static customColor: Color\r
\r
  /**\r
   * The neutral density.\r
   */\r
  static density: number\r
\r
  /**\r
   * The dot shape name.\r
   */\r
  static dotShape: string\r
\r
  /**\r
   * The ink's frequency.\r
   */\r
  static frequency: number\r
\r
  /**\r
   * The ink type.\r
   */\r
  static kind: InkType\r
\r
  /**\r
   * The ink printing status.\r
   */\r
  static printingStatus: InkPrintStatus\r
\r
  /**\r
   * The trapping type.\r
   */\r
  static trapping: TrappingType\r
\r
  /**\r
   * The order of trapping for the ink.\r
   */\r
  static trappingOrder: number\r
}\r
\r
/**\r
 * The new document preset to use for creating a new document.\r
 */\r
declare class DocumentPreset {\r
  /**\r
   * Layout for artboards.\r
   */\r
  static artboardLayout: DocumentArtboardLayout\r
\r
  /**\r
   * Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.\r
   */\r
  static artboardRowsOrCols: number\r
\r
  /**\r
   * Spacing between artboards.\r
   */\r
  static artboardSpacing: number\r
\r
  /**\r
   * The color mode for the new document.\r
   */\r
  static colorMode: DocumentColorSpace\r
\r
  /**\r
   * The height for the new document.\r
   */\r
  static height: number\r
\r
  /**\r
   * Number of artboards for new document.Range (1:100).\r
   */\r
  static numArtboards: number\r
\r
  /**\r
   * The preview mode for the new document.\r
   */\r
  static previewMode: DocumentPreviewMode\r
\r
  /**\r
   * The raster resolution for the new document.\r
   */\r
  static rasterResolution: DocumentRasterResolution\r
\r
  /**\r
   * The title for the new document.\r
   */\r
  static title: string\r
\r
  /**\r
   * The transparency grid for the new document.\r
   */\r
  static transparencyGrid: DocumentTransparencyGrid\r
\r
  /**\r
   * The units for the new document.\r
   */\r
  static units: RulerUnits\r
\r
  /**\r
   * The width for the new document.\r
   */\r
  static width: number\r
}\r
\r
/**\r
 * The print options.\r
 */\r
declare class PrintOptions {\r
  /**\r
   * The name of the PPD to use.\r
   */\r
  static PPDName: string\r
\r
  /**\r
   * The printing color management options.\r
   */\r
  static colorManagementOptions: PrintColorManagementOptions\r
\r
  /**\r
   * The printing color separation options.\r
   */\r
  static colorSeparationOptions: PrintColorSeparationOptions\r
\r
  /**\r
   * The printing coordinate options.\r
   */\r
  static coordinateOptions: PrintCoordinateOptions\r
\r
  /**\r
   * The printing flattener options.\r
   */\r
  static flattenerOptions: PrintFlattenerOptions\r
\r
  /**\r
   * The transparency flattener preset name.\r
   */\r
  static flattenerPreset: string\r
\r
  /**\r
   * The printing font options.\r
   */\r
  static fontOptions: PrintFontOptions\r
\r
  /**\r
   * The printing job options.\r
   */\r
  static jobOptions: PrintJobOptions\r
\r
  /**\r
   * The printing page marks options.\r
   */\r
  static pageMarksOptions: PrintPageMarksOptions\r
\r
  /**\r
   * The paper options.\r
   */\r
  static paperOptions: PrintPaperOptions\r
\r
  /**\r
   * The printing PostScript options.\r
   */\r
  static postScriptOptions: PrintPostScriptOptions\r
\r
  /**\r
   * The name of a print preset to use.\r
   */\r
  static printPreset: string\r
\r
  /**\r
   * The name of the printer to print to.\r
   */\r
  static printerName: string\r
}\r
\r
/**\r
 * The paper options.\r
 */\r
declare class PrintPaperOptions {\r
  /**\r
   * The custom height (in points) for using the custom paper.\r
   */\r
  static height: number\r
\r
  /**\r
   * The paper's name.\r
   */\r
  static name: string\r
\r
  /**\r
   * Custom offset (in points) for using the custom paper.\r
   */\r
  static offset: number\r
\r
  /**\r
   * Whether to transverse the artwork (rotate 90 degrees) on the custom paper.\r
   */\r
  static transverse: boolean\r
\r
  /**\r
   * The custom width (in points) for using the custom paper.\r
   */\r
  static width: number\r
}\r
\r
/**\r
 * The print job options.\r
 */\r
declare class PrintJobOptions {\r
  /**\r
   * Artboard Range to be printed if PrintAllArtboards is false.\r
   */\r
  static artboardRange: string\r
\r
  /**\r
   * The bitmap resolution.\r
   */\r
  static bitmapResolution: number\r
\r
  /**\r
   * Whether to collate print pages.\r
   */\r
  static collate: boolean\r
\r
  /**\r
   * The number of copies to print.\r
   */\r
  static copies: number\r
\r
  /**\r
   * The layers/objects to be printed.\r
   */\r
  static designation: PrintArtworkDesignation\r
\r
  /**\r
   * The file to be printed to.\r
   */\r
  static file: File\r
\r
  /**\r
   * The print job name.\r
   */\r
  static name: string\r
\r
  /**\r
   * Whether to print all artboards.\r
   */\r
  static printAllArtboards: boolean\r
\r
  /**\r
   * The printing bounds.\r
   */\r
  static printArea: PrintingBounds\r
\r
  /**\r
   * Whether to print as bitmap.\r
   */\r
  static printAsBitmap: boolean\r
\r
  /**\r
   * Print pages in reverse order.\r
   */\r
  static reversePages: boolean\r
}\r
\r
/**\r
 * Print color separation options.\r
 */\r
declare class PrintColorSeparationOptions {\r
  /**\r
   * The color separation type.\r
   */\r
  static colorSeparationMode: PrintColorSeparationMode\r
\r
  /**\r
   * Whether to convert all spot colors to process colors.\r
   */\r
  static convertSpotColors: boolean\r
\r
  /**\r
   * The list of inks for color separation.\r
   */\r
  static inkList: Ink[]\r
\r
  /**\r
   * Whether to overprint in black.\r
   */\r
  static overPrintBlack: boolean\r
}\r
\r
/**\r
 * The print coordinate options.\r
 */\r
declare class PrintCoordinateOptions {\r
  /**\r
   * Whether to flip artwork horizontally.\r
   */\r
  static emulsion: boolean\r
\r
  /**\r
   * Whether to proportionally scale the artwork to fit on the page.\r
   */\r
  static fitToPage: boolean\r
\r
  /**\r
   * The horizontal scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  static horizontalScale: number\r
\r
  /**\r
   * The artwork orientation.\r
   */\r
  static orientation: PrintOrientation\r
\r
  /**\r
   * The artwork position on media.\r
   */\r
  static position: PrintPosition\r
\r
  /**\r
   * The page tiling mode.\r
   */\r
  static tiling: PrintTiling\r
\r
  /**\r
   * The vertical scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  static verticalScale: number\r
}\r
\r
/**\r
 * The page marks options.\r
 */\r
declare class PrintPageMarksOptions {\r
  /**\r
   * The bleed offset rect.\r
   */\r
  static bleedOffsetRect: Rect\r
\r
  /**\r
   * Whether to enable color bars printing.\r
   */\r
  static colorBars: boolean\r
\r
  /**\r
   * The page marks offset rect.\r
   */\r
  static marksOffsetRect: Rect\r
\r
  /**\r
   * Whether to enable page info marks printing.\r
   */\r
  static pageInfoMarks: boolean\r
\r
  /**\r
   * The page marks style.\r
   */\r
  static pageMarksType: PageMarksTypes\r
\r
  /**\r
   * Whether to enable registration marks printing.\r
   */\r
  static registrationMarks: boolean\r
\r
  /**\r
   * Whether to enable trim marks printing.\r
   */\r
  static trimMarks: boolean\r
\r
  /**\r
   * Stroke weight of trim marks.\r
   */\r
  static trimMarksWeight: number\r
}\r
\r
/**\r
 * The font options for printing.\r
 */\r
declare class PrintFontOptions {\r
  /**\r
   * The font download mode.\r
   */\r
  static downloadFonts: PrintFontDownloadMode\r
\r
  /**\r
   * The font substitution policy.\r
   */\r
  static fontSubstitution: FontSubstitutionPolicy\r
}\r
\r
/**\r
 * The PostScript options.\r
 */\r
declare class PrintPostScriptOptions {\r
  /**\r
   * Whether to print in binary mode.\r
   */\r
  static binaryPrinting: boolean\r
\r
  /**\r
   * Use PostScript level 1 compatible gradient and gradient mesh printing.\r
   */\r
  static compatibleShading: boolean\r
\r
  /**\r
   * Whether to force continuous tone.\r
   */\r
  static forceContinuousTone: boolean\r
\r
  /**\r
   * The image compression type.\r
   */\r
  static imageCompression: PostScriptImageCompressionType\r
\r
  /**\r
   * Whether to print in negative mode.\r
   */\r
  static negativePrinting: boolean\r
\r
  /**\r
   * The PostScript language level.\r
   */\r
  static postScriptLevel: PrinterPostScriptLevelEnum\r
\r
  /**\r
   * The shading resolution.\r
   */\r
  static shadingResolution: number\r
}\r
\r
/**\r
 * The color management options.\r
 */\r
declare class PrintColorManagementOptions {\r
  /**\r
   * The color management profile mode.\r
   */\r
  static colorProfileMode: PrintColorProfile\r
\r
  /**\r
   * The color management intent type.\r
   */\r
  static intent: PrintColorIntent\r
\r
  /**\r
   * The color management profile name.\r
   */\r
  static name: string\r
}\r
\r
/**\r
 * The transparency flattening options.\r
 */\r
declare class PrintFlattenerOptions {\r
  /**\r
   * Whether to clip complex regions.\r
   */\r
  static clipComplexRegions: boolean\r
\r
  /**\r
   * Whether to convert all strokes to outlines.\r
   */\r
  static convertStrokesToOutlines: boolean\r
\r
  /**\r
   * Whether to convert all text to outlines.\r
   */\r
  static convertTextToOutlines: boolean\r
\r
  /**\r
   * The flattening balance.\r
   */\r
  static flatteningBalance: number\r
\r
  /**\r
   * The gradient resolution.\r
   */\r
  static gradientResolution: number\r
\r
  /**\r
   * Overprint.\r
   */\r
  static overprint: PDFOverprint\r
\r
  /**\r
   * The rasterization resolution.\r
   */\r
  static rasterizationResolution: number\r
}\r
\r
/**\r
 * Options which may be supplied when capturing a portion of the artwork as an 24 bit PNG file.\r
 */\r
declare class ImageCaptureOptions {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should the artboard be matted with a color.\r
   */\r
  static matte: boolean\r
\r
  /**\r
   * The color to use when matting the artboard (default: white)\r
   */\r
  static matteColor: RGBColor\r
\r
  /**\r
   * The resolution of the captured image file.\r
   */\r
  static resolution: number\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
}\r
\r
/**\r
 * The document raster effects settings.\r
 */\r
declare class RasterEffectOptions {\r
  /**\r
   * Should the resulting image be antialiased.\r
   */\r
  static antiAliasing: boolean\r
\r
  /**\r
   * Should a clipping mask be created for the resulting image.\r
   */\r
  static clippingMask: boolean\r
\r
  /**\r
   * The color model for the rasterization.\r
   */\r
  static colorModel: RasterizationColorModel\r
\r
  /**\r
   * Whether to convert all spot colors to process colors in the resulting image.\r
   */\r
  static convertSpotColors: boolean\r
\r
  /**\r
   * The amount of white space (in points) to be added around the object during rasterization.\r
   */\r
  static padding: number\r
\r
  /**\r
   * The rasterization resolution in dots-per-inch (dpi)\r
   */\r
  static resolution: number\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
}\r
\r
/**\r
 * Options which may be supplied when rasterizing the artwork.\r
 */\r
declare class RasterizeOptions {\r
  /**\r
   * The type of antialiasing method.\r
   */\r
  static antiAliasingMethod: AntiAliasingMethod\r
\r
  /**\r
   * Should rasterize against a black background instead of white.\r
   */\r
  static backgroundBlack: boolean\r
\r
  /**\r
   * Should a clipping mask be created for the resulting image.\r
   */\r
  static clippingMask: boolean\r
\r
  /**\r
   * The color model for the rasterization.\r
   */\r
  static colorModel: RasterizationColorModel\r
\r
  /**\r
   * Whether to convert all spot colors to process colors in the resulting image.\r
   */\r
  static convertSpotColors: boolean\r
\r
  /**\r
   * Should all text be converted to outlines before rasterization.\r
   */\r
  static convertTextToOutlines: boolean\r
\r
  /**\r
   * Should the resulting image incorporates the layer attributes (such as opacity and blend mode)\r
   */\r
  static includeLayers: boolean\r
\r
  /**\r
   * The amount of white space (in points) to be added around the object during rasterization.\r
   */\r
  static padding: number\r
\r
  /**\r
   * The rasterization resolution in dots-per-inch (dpi)\r
   */\r
  static resolution: number\r
\r
  /**\r
   * Should the resulting image use transparency.\r
   */\r
  static transparency: boolean\r
}\r
\r
/**\r
 * The Adobe Illustrator application.\r
 */\r
declare class Application {\r
  /**\r
   * The list of PDF preset names currently available for use.\r
   */\r
  readonly PDFPresetsList: string[]\r
\r
  /**\r
   * The list of PPD files currently available for use. For performance reasons, the PPDFile entry only contains the model name and file spec of each PPD file.\r
   */\r
  readonly PPDFileList: PPDFile[]\r
\r
  /**\r
   * The active document.\r
   */\r
  activeDocument: Document\r
\r
  /**\r
   * Is a web browser available?\r
   */\r
  readonly browserAvailable: boolean\r
\r
  /**\r
   * The build number of the Adobe Illustrator application.\r
   */\r
  readonly buildNumber: string\r
\r
  /**\r
   * The list of color settings files currently available for use.\r
   */\r
  readonly colorSettingsList: File[]\r
\r
  /**\r
   * Coordinate System used by script.\r
   */\r
  coordinateSystem: CoordinateSystem\r
\r
  /**\r
   * The default color settings file for the current application locale.\r
   */\r
  readonly defaultColorSettings: File\r
\r
  /**\r
   * The open documents.\r
   */\r
  readonly documents: Documents\r
\r
  /**\r
   * The list of flattener style names currently available for use.\r
   */\r
  readonly flattenerPresetsList: string[]\r
\r
  /**\r
   * The amount of unused memory within the Adobe Illustrator partition.\r
   */\r
  readonly freeMemory: number\r
\r
  /**\r
   * The Locale of the Adobe Illustrator application.\r
   */\r
  readonly locale: string\r
\r
  /**\r
   * The application's name.\r
   */\r
  readonly name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Does paste operation remember layers structure?\r
   */\r
  pasteRemembersLayers: boolean\r
\r
  /**\r
   * Path specification for the application.\r
   */\r
  readonly path: File\r
\r
  /**\r
   * Preferences for Illustrator.\r
   */\r
  readonly preferences: Preferences\r
\r
  /**\r
   * The list of print preset names currently available for use.\r
   */\r
  readonly printPresetsList: string[]\r
\r
  /**\r
   * The list of installed printers.\r
   */\r
  readonly printerList: Printer[]\r
\r
  /**\r
   * The version of the Scripting plugin.\r
   */\r
  readonly scriptingVersion: string\r
\r
  /**\r
   * The selection visible to the user.\r
   */\r
  selection: any\r
\r
  /**\r
   * The list of presets available for creating a new document.\r
   */\r
  readonly startupPresetsList: string[]\r
\r
  /**\r
   * Installed fonts.\r
   */\r
  readonly textFonts: TextFonts\r
\r
  /**\r
   * The list of tracing preset names currently available for use.\r
   */\r
  readonly tracingPresetsList: string[]\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The current users adobe id.\r
   */\r
  readonly userAdobeID: string\r
\r
  /**\r
   * The current user's GUID.\r
   */\r
  readonly userGUID: string\r
\r
  /**\r
   * What level of interaction with the user should be allowed when handling script commands.\r
   */\r
  userInteractionLevel: UserInteractionLevel\r
\r
  /**\r
   * The version of the Adobe Illustrator application.\r
   */\r
  readonly version: string\r
\r
  /**\r
   * Is the application visible.\r
   */\r
  readonly visible: boolean\r
\r
  /**\r
   * Add the specified to the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param destinationSequenceID The UID for the owning sequence.\r
   * @param destinationIndex The item UID where to insert.\r
   * @param srcItemIDData The item ID of the item to construct.\r
   * @param type The source of the item to construct.\r
   */\r
  aATAddItem(\r
    sessionIndex: number,\r
    destinationSequenceID: number,\r
    destinationIndex: number,\r
    srcItemIDData: string,\r
    type: string,\r
  ): string\r
\r
  /**\r
   * Clear the sequencer.\r
   */\r
  aATClear(): string\r
\r
  /**\r
   * Duplicates the specified item(s) from the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param item The item UID(s)\r
   */\r
  aATDuplicateItem(sessionIndex: number, item: string): string\r
\r
  /**\r
   * Opens the specified item from the sequencer in the item editor.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param item The item UID.\r
   */\r
  aATEditItem(sessionIndex: number, item: string): string\r
\r
  /**\r
   * Retrieves a boolean indicating the presence of errors in the last script to execute.\r
   */\r
  aATErrorsExist(): boolean\r
\r
  /**\r
   * Executes the active session in the sequencer.\r
   */\r
  aATExecuteSession(): void\r
\r
  /**\r
   * Executes the active session in the sequencer.\r
   * @param file Execute a session file.\r
   */\r
  aATExecuteSessionFromFile(file: File): void\r
\r
  /**\r
   * Switches a files relative token and path.\r
   * @param path The path relative to the folder specified by Relative.\r
   * @param relative The current relative path token.\r
   * @param newRelative The new relative path token.\r
   */\r
  aATFileRelativeChanged(path: string, relative: string, newRelative: string): string\r
\r
  /**\r
   * Prompts the user to save a file or choose a file or directory and returns a relative path string to the file.\r
   * @param path The path relative to the folder specified by Relative.\r
   * @param relative The current relative path token.\r
   * @param type The type of dialog to show in string format.\r
   */\r
  aATFileSaveDialog(path: string, relative: string, type: string): string\r
\r
  /**\r
   * Retrieves a file path to the AAT editor swf.\r
   */\r
  aATGetEditorDialogFile(): File\r
\r
  /**\r
   * Retrieves a file path to the AAT error dialog swf.\r
   */\r
  aATGetErrorDialogFile(): File\r
\r
  /**\r
   * Gets an XML string listing the relative paths and the UI strings to display them.\r
   */\r
  aATGetListOfRelativePaths(): string\r
\r
  /**\r
   * Get the active session for the sequncer.\r
   */\r
  aATGetSession(): string\r
\r
  /**\r
   * Loads a session file as an extension to the editor.\r
   */\r
  aATLoadLibExtension(): string\r
\r
  /**\r
   * Loads the aat model to the editor.\r
   */\r
  aATLoadModel(): string\r
\r
  /**\r
   * Loads a session into the sequencer.\r
   */\r
  aATLoadSessionFile(): string\r
\r
  /**\r
   * Loads a UI description as an extension to the editor.\r
   */\r
  aATLoadUIExtension(): string\r
\r
  /**\r
   * Moves the specified in the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to move.\r
   * @param moveThisID The UID of the item to replace.\r
   * @param newSessionIndex The index in the session of the destination top-most sequence.\r
   * @param destinationSequenceID The UID for the owning sequence.\r
   * @param destinationIndex The index where to insert.\r
   */\r
  aATMoveItem(\r
    sessionIndex: number,\r
    moveThisID: string,\r
    newSessionIndex: number,\r
    destinationSequenceID: string,\r
    destinationIndex: number,\r
  ): string\r
\r
  /**\r
   * Removes the specified item from the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param item The item UID.\r
   */\r
  aATRemoveItem(sessionIndex: number, item: string): string\r
\r
  /**\r
   * Replaces the specified to the sequencer.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param replaceThisID The UID of the item to replace.\r
   * @param srcItemIDData The item ID of the item to construct.\r
   * @param type The source of the item to construct.\r
   */\r
  aATReplaceItem(\r
    sessionIndex: number,\r
    replaceThisID: number,\r
    srcItemIDData: string,\r
    type: string,\r
  ): string\r
\r
  /**\r
   * Saves the active session in the sequencer to a new file.\r
   */\r
  aATSaveAsSession(): string\r
\r
  /**\r
   * Saves the active session in the sequencer to a file.\r
   */\r
  aATSaveSession(): string\r
\r
  /**\r
   * Applies the data used in the item editor to the item.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to edit.\r
   * @param item The item UID.\r
   * @param data The data to apply in XML format.\r
   */\r
  applyDataToItem(sessionIndex: number, item: string, data: string): string\r
\r
  /**\r
   * Applies data to the specified item from the sequencer in the item editor.\r
   * @param sessionIndex The index in the session of the top-most sequence for the item to add.\r
   * @param item The item UID.\r
   * @param dataID The data to apply in XML format.\r
   * @param data The data to apply in XML format.\r
   */\r
  applySingleDataPointToItem(\r
    sessionIndex: number,\r
    item: string,\r
    dataID: string,\r
    data: string,\r
  ): boolean\r
\r
  /**\r
   *\r
   */\r
  beep(): void\r
\r
  /**\r
   * Starts the automation tests for the Sync Settings feature.\r
   */\r
  beginSyncSettingsAutomationTest(): boolean\r
\r
  /**\r
   * Starts the automation tests for the Typekit Font feature.\r
   */\r
  beginTypekitFontAutomationTest(): boolean\r
\r
  /**\r
   * Concatenate two transformation matrices.\r
   * @param matrix The matrix that is to be added to.\r
   * @param secondMatrix Second transformation matrix.\r
   */\r
  concatenateMatrix(matrix: Matrix, secondMatrix: Matrix): Matrix\r
\r
  /**\r
   * Concatenate a rotation matrix to a transformation matrix.\r
   * @param matrix The matrix that is to be added to.\r
   * @param angle Angle of rotation (in degrees)\r
   */\r
  concatenateRotationMatrix(matrix: Matrix, angle: number): Matrix\r
\r
  /**\r
   * Concatenate a scale matrix to a transformation matrix.\r
   * @param matrix The matrix that is to be added to.\r
   * @param scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)\r
   * @param scaleY Vertical scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  concatenateScaleMatrix(matrix: Matrix, scaleX?: number, scaleY?: number): Matrix\r
\r
  /**\r
   * Concatenate a translation to a transformation matrix.\r
   * @param matrix The matrix that is to be added to.\r
   * @param deltaX Horizontal transformation.\r
   * @param deltaY Vertical transformation.\r
   */\r
  concatenateTranslationMatrix(matrix: Matrix, deltaX?: number, deltaY?: number): Matrix\r
\r
  /**\r
   * Converts a sample-component color from one color space to another.\r
   * @param sourceColorSpace The source color space.\r
   * @param sourceColor The color to convert, an array of color components. First location of the array should contain alpha if source-has-alpha is true.\r
   * @param destColorSpace The destination color space.\r
   * @param colorConvertPurpose The parameter which passes the purpose of conversion.\r
   * @param sourceHasAlpha True if alpha channel is present in source color.\r
   * @param destHasAlpha True if alpha channel is present in destination color.\r
   */\r
  convertSampleColor(\r
    sourceColorSpace: ImageColorSpace,\r
    sourceColor: number[],\r
    destColorSpace: ImageColorSpace,\r
    colorConvertPurpose: ColorConvertPurpose,\r
    sourceHasAlpha?: boolean,\r
    destHasAlpha?: boolean,\r
  ): number[]\r
\r
  /**\r
   * Copy current selection to the clipboard.\r
   */\r
  copy(): void\r
\r
  /**\r
   * Cut current selection to the clipboard.\r
   */\r
  cut(): void\r
\r
  /**\r
   * Deletes an existing workspace.\r
   * @param workspaceName Workspace Name.\r
   */\r
  deleteWorkspace(workspaceName: string): boolean\r
\r
  /**\r
   * Play an action from the Actions Palette.\r
   * @param action The name of the action to play (note that the case of letters in the Action name is important and must match the case of the name in the Actions palette)\r
   * @param from The name of the action set containing the action being played (note that the case of letters in the Action Set name is important and must match the case of the name in the Actions palette)\r
   * @param dialogs Are dialog boxes associated with the action to be presented?\r
   */\r
  doScript(action: string, from: string, dialogs?: boolean): void\r
\r
  /**\r
   * Dump the PGF portion of ai file to txt file.\r
   * @param file The AI file to be opened.\r
   * @param documentColorSpace Choose color space only for documents saved with multiple color models (pre-Illustrator 9)\r
   * @param pGFFile Folder to save the output PGF file.\r
   */\r
  dumpPGFFile(file: File, documentColorSpace?: DocumentColorSpace, pGFFile?: File): boolean\r
\r
  /**\r
   * Executes a menu command using the menu shortcut string.\r
   * @param menuCommandString Menu command shortcut.\r
   */\r
  executeMenuCommand(menuCommandString: string): void\r
\r
  /**\r
   * Returns the JSON Data required by CCX Welcome.\r
   * @param mode Mode for which the data is to be provided.\r
   */\r
  getCCXUserJSONData(mode?: string): string\r
\r
  /**\r
   * Retrieves a string containing the results of the last script to execute.\r
   */\r
  getExecutionOutput(): string\r
\r
  /**\r
   * Returns the JSON Data required by Hello.\r
   */\r
  getHelloJSONData(): string\r
\r
  /**\r
   * Returns an identity matrix.\r
   */\r
  getIdentityMatrix(): Matrix\r
\r
  /**\r
   * Get detailed info from the specified PPD file.\r
   * @param name The model name of the PPD file.\r
   */\r
  getPPDFileInfo(name: string): PPDFileInfo\r
\r
  /**\r
   * Given a preset type, returns the full path to the application's default document profile for the type.\r
   * @param presetType The preset type.\r
   */\r
  getPresetFileOfType(presetType: DocumentPresetType): File\r
\r
  /**\r
   * Given a preset name, tries and retrieves the settings from the preset template.\r
   * @param preset The name of the preset.\r
   */\r
  getPresetSettings(preset: string): DocumentPreset\r
\r
  /**\r
   * Returns a rotation transformation matrix.\r
   * @param angle Angle of rotation (in degrees)\r
   */\r
  getRotationMatrix(angle?: number): Matrix\r
\r
  /**\r
   * Returns a scale transformation matrix.\r
   * @param scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)\r
   * @param scaleY Vertical scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  getScaleMatrix(scaleX?: number, scaleY?: number): Matrix\r
\r
  /**\r
   * Get the scriptable help group object that represents the search widget in the app bar.\r
   */\r
  getScriptableHelpGroup(): any\r
\r
  /**\r
   * Returns a translation matrix.\r
   * @param deltaX Horizontal transformation.\r
   * @param deltaY Vertical transformation.\r
   */\r
  getTranslationMatrix(deltaX?: number, deltaY?: number): Matrix\r
\r
  /**\r
   * Retrieves a string representing the AAT version.\r
   */\r
  getVersionString(): string\r
\r
  /**\r
   * Invert a matrix.\r
   * @param matrix The matrix to invert.\r
   */\r
  invertMatrix(matrix: Matrix): Matrix\r
\r
  /**\r
   * Compares two matrices for equality.\r
   * @param matrix First transformation matrix to compare.\r
   * @param secondMatrix Second transformation matrix.\r
   */\r
  isEqualMatrix(matrix: Matrix, secondMatrix: Matrix): boolean\r
\r
  /**\r
   * Checks if fill is active or not.\r
   */\r
  isFillActive(): boolean\r
\r
  /**\r
   * Tests if a matrix is singular (cannot be inverted)\r
   * @param matrix The matrix to check.\r
   */\r
  isSingularMatrix(matrix: Matrix): boolean\r
\r
  /**\r
   * Checks if stroke is active or not.\r
   */\r
  isStrokeActive(): boolean\r
\r
  /**\r
   * Is In Touch Workspace.\r
   */\r
  isTouchWorkspace(): boolean\r
\r
  /**\r
   * Is user sharing the application usage data.\r
   */\r
  isUserSharingAppUsageData(): boolean\r
\r
  /**\r
   * Launch cep Extension given its ID.\r
   * @param extensionID Arguments for Launching Extension - ID of extension in manifest.xml of corresponding extension.\r
   */\r
  launchExtension(extensionID: string): number\r
\r
  /**\r
   * Load an action into action palette.\r
   * @param actionFilePath The path on the system of the action file to be loaded.\r
   */\r
  loadAction(actionFilePath: File): void\r
\r
  /**\r
   * Load the color settings from the file. If the file is an empty file spec, the color management will be turned off.\r
   * @param fileSpec File spec for the color settings.\r
   */\r
  loadColorSettings(fileSpec: File): void\r
\r
  /**\r
   * Open the specified document file.\r
   * @param file The file to be opened.\r
   * @param documentColorSpace Choose color space only for documents saved with multiple color models (pre-Illustrator 9)\r
   * @param options Options for opening a particular type of file.\r
   */\r
  open(file: File, documentColorSpace?: DocumentColorSpace, options?: any): Document\r
\r
  /**\r
   * For Internal Use.\r
   * @param assetURL For Internal use.\r
   * @param thumbnailURL For Internal use.\r
   * @param options For internal use.\r
   */\r
  openCloudLibraryAssetForEditing(assetURL: File, thumbnailURL: File, options?: any): Document\r
\r
  /**\r
   * Paste clipboard into the current document.\r
   */\r
  paste(): void\r
\r
  /**\r
   * Quit the application.\r
   */\r
  quit(): void\r
\r
  /**\r
   * Redo the last transaction.\r
   */\r
  redo(): void\r
\r
  /**\r
   * Force Illustrator to redraw its window(s)\r
   */\r
  redraw(): void\r
\r
  /**\r
   * Generate Creative Suite ActionScript Wrappers in specified directory.\r
   * @param outputFolder Location for the output files.\r
   */\r
  reflectCSAW(outputFolder: File): void\r
\r
  /**\r
   * Resets the current workspace.\r
   */\r
  resetWorkspace(): boolean\r
\r
  /**\r
   * Runs API Tests from the TestAPI Plug-in.\r
   * @param testName Arguments for Running Tests - eg. Name of Test/Suite.\r
   */\r
  runAPITest(testName: string): void\r
\r
  /**\r
   * Saves a new workspace.\r
   * @param workspaceName Workspace Name.\r
   */\r
  saveWorkspace(workspaceName: string): boolean\r
\r
  /**\r
   * Sends the script message to the required plugin.\r
   * @param pluginName Plugin to which message needs to be sent.\r
   * @param messageSelector Functionality that is to be executed.\r
   * @param inputString Pass any data encoded in a string.\r
   */\r
  sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string\r
\r
  /**\r
   * For Internal Use.\r
   * @param options Options for the PNG24 export.\r
   */\r
  setThumbnailOptionsForCloudLibrary(options: any): void\r
\r
  /**\r
   * Invokes application's color picker.\r
   * @param color The color to load in the color picker initially.\r
   */\r
  showColorPicker(color: Color): Color\r
\r
  /**\r
   * Get presets from the file.\r
   * @param fileSpec File spec to import from.\r
   */\r
  showPresets(fileSpec: File): string[]\r
\r
  /**\r
   * Switches between workspaces.\r
   * @param workspaceName Workspace Name.\r
   */\r
  switchWorkspace(workspaceName: string): boolean\r
\r
  /**\r
   * Translate the placeholder text to regular text. A method to enter unicode points in hex values.\r
   * @param text The placeholder text to be translated.\r
   */\r
  translatePlaceholderText(text: string): string\r
\r
  /**\r
   * Returns a string translated from the key and source data passed in.\r
   * @param key The string to translate.\r
   * @param source The plugin name from the source of the key.\r
   */\r
  translateString(key: string, source: string): string\r
\r
  /**\r
   * Undo the last transaction.\r
   */\r
  undo(): void\r
\r
  /**\r
   * Unloads an action into action palette.\r
   * @param setName Name of the set to be unloaded.\r
   * @param actionName Name of the action to be unloaded.\r
   */\r
  unloadAction(setName: string, actionName: string): void\r
}\r
\r
/**\r
 * A document.\r
 */\r
declare class Document {\r
  /**\r
   * The XMP packet string associated with the document.\r
   */\r
  XMPString: string\r
\r
  /**\r
   * The active data set.\r
   */\r
  activeDataSet: DataSet\r
\r
  /**\r
   * The active layer.\r
   */\r
  activeLayer: Layer\r
\r
  /**\r
   * The document's current view.\r
   */\r
  readonly activeView: View\r
\r
  /**\r
   * All artboards in the document.\r
   */\r
  readonly artboards: Artboards\r
\r
  /**\r
   * The brushes defined in this document.\r
   */\r
  readonly brushes: Brushes\r
\r
  /**\r
   * The list of character styles in this document.\r
   */\r
  readonly characterStyles: CharacterStyles\r
\r
  /**\r
   * The name of the color profile of the document.\r
   */\r
  readonly colorProfileName: string\r
\r
  /**\r
   * The compound path artwork in this collection.\r
   */\r
  readonly compoundPathItems: CompoundPathItems\r
\r
  /**\r
   *\r
   */\r
  cropBox: Rect\r
\r
  /**\r
   *\r
   */\r
  cropStyle: CropOptions\r
\r
  /**\r
   * The data sets defined in this document.\r
   */\r
  readonly dataSets: DataSets\r
\r
  /**\r
   * Default fill color.\r
   */\r
  defaultFillColor: Color\r
\r
  /**\r
   * Will art beneath a filled object be overprinted by default?\r
   */\r
  defaultFillOverprint: boolean\r
\r
  /**\r
   * Should a new path be filled?\r
   */\r
  defaultFilled: boolean\r
\r
  /**\r
   * Default type of line capping.\r
   */\r
  defaultStrokeCap: StrokeCap\r
\r
  /**\r
   * Default stroke color.\r
   */\r
  defaultStrokeColor: Color\r
\r
  /**\r
   * The default distance into the dash pattern at which the pattern should be started.\r
   */\r
  defaultStrokeDashOffset: number\r
\r
  /**\r
   * Default dash lengths (set to {} for a solid line)\r
   */\r
  defaultStrokeDashes: number[]\r
\r
  /**\r
   * Default type of joints.\r
   */\r
  defaultStrokeJoin: StrokeJoin\r
\r
  /**\r
   * Specifies whether a join is mitered (pointed) or beveled (squared-off) by default.\r
   */\r
  defaultStrokeMiterLimit: number\r
\r
  /**\r
   * Will art beneath a stroked object be overprinted by default?\r
   */\r
  defaultStrokeOverprint: boolean\r
\r
  /**\r
   * Default width of stroke.\r
   */\r
  defaultStrokeWidth: number\r
\r
  /**\r
   * Should a new path be stroked?\r
   */\r
  defaultStroked: boolean\r
\r
  /**\r
   * The color space used for the document.\r
   */\r
  readonly documentColorSpace: DocumentColorSpace\r
\r
  /**\r
   * The embedded art items in this layer.\r
   */\r
  readonly embeddedItems: EmbeddedItems\r
\r
  /**\r
   * The file associated with the document.\r
   */\r
  readonly fullName: File\r
\r
  /**\r
   * The bounds of the illustration excluding stroke width.\r
   */\r
  readonly geometricBounds: Rect\r
\r
  /**\r
   * The gradients available in this document.\r
   */\r
  readonly gradients: Gradients\r
\r
  /**\r
   * The graph art items in this document.\r
   */\r
  readonly graphItems: GraphItems\r
\r
  /**\r
   * The graphic styles defined in this document.\r
   */\r
  readonly graphicStyles: ArtStyles\r
\r
  /**\r
   * The group items in this document.\r
   */\r
  readonly groupItems: GroupItems\r
\r
  /**\r
   *\r
   */\r
  readonly height: number\r
\r
  /**\r
   * The list of inks in this document.\r
   */\r
  readonly inkList: Ink[]\r
\r
  /**\r
   * The Kinsoku set.\r
   */\r
  readonly kinsokuSet: string[]\r
\r
  /**\r
   * The layers in this document.\r
   */\r
  readonly layers: Layers\r
\r
  /**\r
   * The text frame items in this story.\r
   */\r
  readonly legacyTextItems: LegacyTextItems\r
\r
  /**\r
   * The mesh art items in this document.\r
   */\r
  readonly meshItems: MeshItems\r
\r
  /**\r
   * The Mojikumi set.\r
   */\r
  readonly mojikumiSet: string[]\r
\r
  /**\r
   * The document's name.\r
   */\r
  readonly name: string\r
\r
  /**\r
   * The non-native art items in this document.\r
   */\r
  readonly nonNativeItems: NonNativeItems\r
\r
  /**\r
   *\r
   */\r
  readonly outputResolution: number\r
\r
  /**\r
   * All the artwork in this document.\r
   */\r
  readonly pageItems: PageItems\r
\r
  /**\r
   *\r
   */\r
  pageOrigin: Point | [number, number]\r
\r
  /**\r
   * The list of paragraph styles in this document.\r
   */\r
  readonly paragraphStyles: ParagraphStyles\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Path specification for the document.\r
   */\r
  readonly path: File\r
\r
  /**\r
   * The path artwork in this document.\r
   */\r
  readonly pathItems: PathItems\r
\r
  /**\r
   * The patterns available in this document.\r
   */\r
  readonly patterns: Patterns\r
\r
  /**\r
   * The placed art items in this document.\r
   */\r
  readonly placedItems: PlacedItems\r
\r
  /**\r
   * The plugin art items in this document.\r
   */\r
  readonly pluginItems: PluginItems\r
\r
  /**\r
   *\r
   */\r
  readonly printTiles: boolean\r
\r
  /**\r
   * The document raster effects settings.\r
   */\r
  rasterEffectSettings: RasterEffectOptions\r
\r
  /**\r
   * The raster art items in this document.\r
   */\r
  readonly rasterItems: RasterItems\r
\r
  /**\r
   *\r
   */\r
  rulerOrigin: Point | [number, number]\r
\r
  /**\r
   *\r
   */\r
  readonly rulerUnits: RulerUnits\r
\r
  /**\r
   * Has the document been saved?\r
   */\r
  saved: boolean\r
\r
  /**\r
   * The selection within the document.\r
   */\r
  selection: any\r
\r
  /**\r
   *\r
   */\r
  readonly showPlacedImages: boolean\r
\r
  /**\r
   *\r
   */\r
  readonly splitLongPaths: boolean\r
\r
  /**\r
   * The custom spot colors available in this document.\r
   */\r
  readonly spots: Spots\r
\r
  /**\r
   * Is the file a stationery file?\r
   */\r
  readonly stationery: boolean\r
\r
  /**\r
   * The story items in this document.\r
   */\r
  readonly stories: Stories\r
\r
  /**\r
   * The Swatch Groups in this document.\r
   */\r
  readonly swatchGroups: SwatchGroups\r
\r
  /**\r
   * The swatches in this document.\r
   */\r
  readonly swatches: Swatches\r
\r
  /**\r
   * The symbol items in this document.\r
   */\r
  readonly symbolItems: SymbolItems\r
\r
  /**\r
   * The symbols defined in this document.\r
   */\r
  readonly symbols: Symbols\r
\r
  /**\r
   * The tags in this document.\r
   */\r
  readonly tags: Tags\r
\r
  /**\r
   * The text frame items in this document.\r
   */\r
  readonly textFrames: TextFrameItems\r
\r
  /**\r
   *\r
   */\r
  readonly tileFullPages: boolean\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   *\r
   */\r
  readonly useDefaultScreen: boolean\r
\r
  /**\r
   * The variables defined in this document.\r
   */\r
  readonly variables: Variables\r
\r
  /**\r
   * The locked variables.\r
   */\r
  variablesLocked: boolean\r
\r
  /**\r
   * The views in this document.\r
   */\r
  readonly views: Views\r
\r
  /**\r
   * The visible bounds of the illustration including stroke width.\r
   */\r
  readonly visibleBounds: Rect\r
\r
  /**\r
   *\r
   */\r
  readonly width: number\r
\r
  /**\r
   * Activate the first window associated with the document.\r
   */\r
  activate(): void\r
\r
  /**\r
   * Close the specified document(s)\r
   * @param saving Specifies whether changes should be saved before closing.\r
   */\r
  close(saving?: SaveOptions): void\r
\r
  /**\r
   * Converts the coordinate system of a single point from one coordinate system to another.\r
   * @param coordinate The Coordinate to convert.\r
   * @param source The source coordinate system.\r
   * @param destination The destination coordinate system.\r
   */\r
  convertCoordinate(\r
    coordinate: Point | [number, number],\r
    source: CoordinateSystem,\r
    destination: CoordinateSystem,\r
  ): Point | [number, number]\r
\r
  /**\r
   * Export the specified document(s)\r
   * @param exportFile The file to export the document to.\r
   * @param exportFormat The file type to export the document as.\r
   * @param options Options for the file type specified.\r
   */\r
  exportFile(exportFile: File, exportFormat: ExportType, options?: any): void\r
\r
  /**\r
   * Save all PDF presets to a file.\r
   * @param file File to export to.\r
   */\r
  exportPDFPreset(file: File): void\r
\r
  /**\r
   * Saves all perspective grid presets to a file.\r
   * @param file File to export to.\r
   */\r
  exportPerspectiveGridPreset(file: File): void\r
\r
  /**\r
   * Export the current print setting to the preset file.\r
   * @param file File to export to.\r
   */\r
  exportPrintPreset(file: File): void\r
\r
  /**\r
   * Export the selection as Ai file.\r
   * @param exportFile The file to export the selection to.\r
   */\r
  exportSelectionAsAi(exportFile: File): void\r
\r
  /**\r
   * Export the selection as PNG file.\r
   * @param exportFile The file to export the selection to.\r
   * @param options Options for the PNG24 export.\r
   */\r
  exportSelectionAsPNG(exportFile: File, options?: any): void\r
\r
  /**\r
   * Save datasets into an XML library. The datasets contain variables and their associated dynamic data.\r
   * @param file File spec to export to.\r
   */\r
  exportVariables(file: File): void\r
\r
  /**\r
   * Change the artboard to selected art bounds.\r
   * @param index The index of the artboard to update.\r
   */\r
  fitArtboardToSelectedArt(index?: number): boolean\r
\r
  /**\r
   * Gets the active plane of the active perspective grid of the document.\r
   */\r
  getPerspectiveActivePlane(): PerspectiveGridPlaneType\r
\r
  /**\r
   * Hides the current active perspective grid for the document, if there is visible perspective grid.\r
   */\r
  hidePerspectiveGrid(): boolean\r
\r
  /**\r
   * Capture the artwork content inside the clip bound as raster image, and write out the captured image data into the target image file.\r
   * @param imageFile The file to which the captured image should be written.\r
   * @param clipBounds The rectangular region of the artwork for image capture. If the parameter is omitted, the entire artwork bound is captured.\r
   * @param options Describes the image capture options.\r
   */\r
  imageCapture(imageFile: File, clipBounds?: Rect, options?: ImageCaptureOptions): void\r
\r
  /**\r
   * Load the character styles from the Illustrator file.\r
   * @param fileSpec File spec to import from.\r
   */\r
  importCharacterStyles(fileSpec: File): void\r
\r
  /**\r
   * Import the file into current Ai document.\r
   * @param importFile The file to import in the current document.\r
   * @param isLinked Is AssetLiveLinked.\r
   * @param libraryName For Internal Use.\r
   * @param itemName For Internal Use.\r
   * @param elementRef For Internal Use.\r
   * @param modifiedTime For Internal Use.\r
   * @param creationTime For Internal Use.\r
   * @param adobeStockId For Internal Use.\r
   * @param adobeStockLicense For Internal Use.\r
   */\r
  importFile(\r
    importFile: File,\r
    isLinked: boolean,\r
    libraryName?: string,\r
    itemName?: string,\r
    elementRef?: string,\r
    modifiedTime?: number,\r
    creationTime?: number,\r
    adobeStockId?: string,\r
    adobeStockLicense?: string,\r
  ): void\r
\r
  /**\r
   * Load all PDF presets from a file.\r
   * @param fileSpec File to import from.\r
   * @param replacingPreset Should existing editable presets be replaced?\r
   */\r
  importPDFPreset(fileSpec: File, replacingPreset?: boolean): void\r
\r
  /**\r
   * Load the paragraph styles from the Illustrator file.\r
   * @param fileSpec File spec to import from.\r
   */\r
  importParagraphStyles(fileSpec: File): void\r
\r
  /**\r
   * Loads mentioned perspective grid preset, if preset name is specified, else loads all(if no preset name is specified) presets, from the specified file.\r
   * @param fileSpec File to import from.\r
   * @param perspectivePreset Name of perspective grid preset.\r
   */\r
  importPerspectiveGridPreset(fileSpec: File, perspectivePreset?: string): void\r
\r
  /**\r
   * Apply the named print preset from the file to the current print setting.\r
   * @param printPreset The name of a print preset to import.\r
   * @param fileSpec File to import from.\r
   */\r
  importPrintPreset(printPreset: string, fileSpec: File): void\r
\r
  /**\r
   * Import a library containing datasets, variables and their associated dynamic data. Importing variables will overwrite existing variables and datasets.\r
   * @param fileSpec File spec to import from.\r
   */\r
  importVariables(fileSpec: File): void\r
\r
  /**\r
   * Print the document.\r
   * @param options Print options.\r
   */\r
  print(options?: PrintOptions): void\r
\r
  /**\r
   * Process a gesture based on input points.\r
   * @param gesturePointsFile File Path containing points constituting the gesture.\r
   */\r
  processGesture(gesturePointsFile: string): void\r
\r
  /**\r
   * Rasterize the source art(s) within the specified clip bounds. The source art(s) are disposed as a result of the rasterization.\r
   * @param sourceArt The page item(s) to be rasterized.\r
   * @param clipBounds The rectangular region of the artwork for the rasterization. If the parameter is omitted, the bounds of the source art(s) is used instead.\r
   * @param options Describes the rasterization options.\r
   */\r
  rasterize(sourceArt: any, clipBounds?: Rect, options?: RasterizeOptions): RasterItem\r
\r
  /**\r
   * Rearrange Artboards in the document.\r
   * @param artboardLayout Layout of artboards for rearrangement.\r
   * @param artboardRowsOrCols Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.\r
   * @param artboardSpacing Spacing between artboards.\r
   * @param artboardMoveArtwork Whether to move artwork with artboards.\r
   */\r
  rearrangeArtboards(\r
    artboardLayout?: DocumentArtboardLayout,\r
    artboardRowsOrCols?: number,\r
    artboardSpacing?: number,\r
    artboardMoveArtwork?: boolean,\r
  ): boolean\r
\r
  /**\r
   * Save the document.\r
   */\r
  save(): void\r
\r
  /**\r
   * Save the document with specific save options.\r
   * @param saveIn The file to save the document in.\r
   * @param options Options for the file type specified.\r
   */\r
  saveAs(saveIn: File, options?: any): void\r
\r
  /**\r
   * Select art objects in active artboard.\r
   */\r
  selectObjectsOnActiveArtboard(): boolean\r
\r
  /**\r
   * Selects a predefined preset to define grid for the current document.\r
   * @param perspectivePreset Name of perspective grid preset.\r
   */\r
  selectPerspectivePreset(perspectivePreset: string): boolean\r
\r
  /**\r
   * Sets the active perspective plane for the active grid of the document.\r
   * @param perspectiveGridPlane Type of perspective grid plane.\r
   */\r
  setPerspectiveActivePlane(perspectiveGridPlane: PerspectiveGridPlaneType): boolean\r
\r
  /**\r
   * Shows the current active perspective grid for the document, if no active perspective grid then shows the default perspective grid for the document.\r
   */\r
  showPerspectiveGrid(): boolean\r
\r
  /**\r
   * Capture the current document window to the target TIFF image file.\r
   * @param imageFile The TIFF file to which the captured image should be written.\r
   * @param windowSize The size to make the window before capture.\r
   */\r
  windowCapture(imageFile: File, windowSize: Point | [number, number]): void\r
}\r
\r
/**\r
 * A layer.\r
 */\r
declare class Layer {\r
  /**\r
   * The absolute drawing order of the layer.\r
   */\r
  readonly absoluteZOrderPosition: number\r
\r
  /**\r
   * Is the artwork used to create a knockout.\r
   */\r
  artworkKnockout: KnockoutState\r
\r
  /**\r
   * The mode used when compositing an object.\r
   */\r
  blendingMode: BlendModes\r
\r
  /**\r
   * Color used when outlining artwork in this layer.\r
   */\r
  color: RGBColor\r
\r
  /**\r
   * The compound path artwork in this layer.\r
   */\r
  readonly compoundPathItems: CompoundPathItems\r
\r
  /**\r
   * Is rendered as dimmed in this layer?\r
   */\r
  dimPlacedImages: boolean\r
\r
  /**\r
   * The graph art items in this layer.\r
   */\r
  readonly graphItems: GraphItems\r
\r
  /**\r
   * The group items in this layer.\r
   */\r
  readonly groupItems: GroupItems\r
\r
  /**\r
   * Is any artwork in this layer selected? Setting this property to false deselects all artwork in the layer.\r
   */\r
  hasSelectedArtwork: boolean\r
\r
  /**\r
   * Is the artwork isolated.\r
   */\r
  isIsolated: boolean\r
\r
  /**\r
   * Nested layers.\r
   */\r
  readonly layers: Layers\r
\r
  /**\r
   * The text frame items in this story.\r
   */\r
  readonly legacyTextItems: LegacyTextItems\r
\r
  /**\r
   * Is the layer editable?\r
   */\r
  locked: boolean\r
\r
  /**\r
   * The mesh art items in this layer.\r
   */\r
  readonly meshItems: MeshItems\r
\r
  /**\r
   * The layer's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The non-native art items in this layer.\r
   */\r
  readonly nonNativeItems: NonNativeItems\r
\r
  /**\r
   * The layer's opacity (between 0.0 and 100.0)\r
   */\r
  opacity: number\r
\r
  /**\r
   * All the artwork in this layer.\r
   */\r
  readonly pageItems: PageItems\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The path artwork in this layer.\r
   */\r
  readonly pathItems: PathItems\r
\r
  /**\r
   * The placed art items in this layer.\r
   */\r
  readonly placedItems: PlacedItems\r
\r
  /**\r
   * The plugin art items in this layer.\r
   */\r
  readonly pluginItems: PluginItems\r
\r
  /**\r
   * Is the layer rendered in preview mode?\r
   */\r
  preview: boolean\r
\r
  /**\r
   * Is the layer printable?\r
   */\r
  printable: boolean\r
\r
  /**\r
   * The raster art items in this layer.\r
   */\r
  readonly rasterItems: RasterItems\r
\r
  /**\r
   * Is the layer sliced (default: false)\r
   */\r
  sliced: boolean\r
\r
  /**\r
   * The symbol items in this layer.\r
   */\r
  readonly symbolItems: SymbolItems\r
\r
  /**\r
   * The text frame items in this layer.\r
   */\r
  readonly textFrames: TextFrameItems\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Is the layer visible?\r
   */\r
  visible: boolean\r
\r
  /**\r
   * The drawing order of the layer.\r
   */\r
  readonly zOrderPosition: number\r
\r
  /**\r
   * Move the object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  move(relativeObject: object, insertionLocation: any): Layer\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Arranges the layer relative to other layers.\r
   * @param zOrderCmd How to arrange the layer.\r
   */\r
  zOrder(zOrderCmd: ZOrderMethod): void\r
}\r
\r
/**\r
 * A view.\r
 */\r
declare class View {\r
  /**\r
   * The bounding rectangle of this view.\r
   */\r
  readonly bounds: Rect\r
\r
  /**\r
   * The center point of this view.\r
   */\r
  centerPoint: Point | [number, number]\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The mode of display.\r
   */\r
  screenMode: ScreenMode\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The zoom factor of this view.\r
   */\r
  zoom: number\r
}\r
\r
/**\r
 * A gradient.\r
 */\r
declare class Gradient {\r
  /**\r
   * The stops in this gradient.\r
   */\r
  readonly gradientStops: GradientStops\r
\r
  /**\r
   * The gradient's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The gradient type.\r
   */\r
  type: GradientType\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A gradient stop.\r
 */\r
declare class GradientStop {\r
  /**\r
   * The color linked to this gradient stop.\r
   */\r
  color: Color\r
\r
  /**\r
   * Midpoint key value in percent.\r
   */\r
  midPoint: number\r
\r
  /**\r
   * The opacity (between 0.0 and 100.0) value for the gradient stop.\r
   */\r
  opacity: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Location of color in the blend (in percent)\r
   */\r
  rampPoint: number\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Preferences for Illustrator.\r
 */\r
declare class Preferences {\r
  /**\r
   * Options to use when opening or placing a AutoCAD file.\r
   */\r
  readonly AutoCADFileOptions: OpenOptionsAutoCAD\r
\r
  /**\r
   * Options to use when opening or placing a PDF file.\r
   */\r
  readonly PDFFileOptions: OpenOptionsPDF\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Options to use when opening or placing a Photoshop file.\r
   */\r
  readonly photoshopFileOptions: OpenOptionsPhotoshop\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Retrieve the value of the application preference key as boolean.\r
   * @param key The preference key.\r
   */\r
  getBooleanPreference(key: string): boolean\r
\r
  /**\r
   * Retrieve the value of the application preference key as integer.\r
   * @param key The preference key.\r
   */\r
  getIntegerPreference(key: string): number\r
\r
  /**\r
   * Retrieve the value of the application preference key as real number.\r
   * @param key The preference key.\r
   */\r
  getRealPreference(key: string): number\r
\r
  /**\r
   * Retrieve the value of the application preference key as string type.\r
   * @param key The preference key.\r
   */\r
  getStringPreference(key: string): string\r
\r
  /**\r
   * Delete the application preference key.\r
   * @param key The preference key.\r
   */\r
  removePreference(key: string): void\r
\r
  /**\r
   * Set the value of the application preference key as boolean.\r
   * @param key The preference key.\r
   * @param value The boolean value of the preference key.\r
   */\r
  setBooleanPreference(key: string, value: boolean): void\r
\r
  /**\r
   * Set the value of the application preference key as integer.\r
   * @param key The preference key.\r
   * @param value The boolean value of the preference key.\r
   */\r
  setIntegerPreference(key: string, value: number): void\r
\r
  /**\r
   * Set the value of the application preference key as real number.\r
   * @param key The preference key.\r
   * @param value The real value of the preference key.\r
   */\r
  setRealPreference(key: string, value: number): void\r
\r
  /**\r
   * Set the value of the application preference key as string type.\r
   * @param key The preference key.\r
   * @param value The string value of the preference key.\r
   */\r
  setStringPreference(key: string, value: string): void\r
}\r
\r
/**\r
 * A custom color.\r
 */\r
declare class Spot {\r
  /**\r
   *\r
   */\r
  color: Color\r
\r
  /**\r
   * Type of the custom color.\r
   */\r
  colorType: ColorModel\r
\r
  /**\r
   * The custom color's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Kind of the spot color (i.e. RGB, CMYK or LAB), it is the name of color kind contained in spot.\r
   */\r
  readonly spotKind: SpotColorKind\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Gets the internal color of a spot.\r
   */\r
  getInternalColor(): number[]\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Dynamic object used to create data-driven graphics.\r
 */\r
declare class Variable {\r
  /**\r
   * The variable's type.\r
   */\r
  kind: VariableKind\r
\r
  /**\r
   * The name of this variable.\r
   */\r
  name: string\r
\r
  /**\r
   * All the artwork in this document.\r
   */\r
  readonly pageItems: PageItems\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A set of variables and their associated dynamic data which will be used for dynamic publishing.\r
 */\r
declare class DataSet {\r
  /**\r
   * The name of this dataset.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Displays the dynamic data that has been captured in the dataset.\r
   */\r
  display(): void\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Re-apply the dynamic data of the active dataset to the artboard.\r
   */\r
  update(): void\r
}\r
\r
/**\r
 * A color swatch.\r
 */\r
declare class Swatch {\r
  /**\r
   * The color information of the swatch.\r
   */\r
  color: Color\r
\r
  /**\r
   * The swatch's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A Swatch group.\r
 */\r
declare class SwatchGroup {\r
  /**\r
   * Name of the swatch group.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Add a spot swatch to the group.\r
   * @param spot The spot swatch to be added to the group.\r
   */\r
  addSpot(spot: Spot): void\r
\r
  /**\r
   * Add a swatch to the group.\r
   * @param swatch The swatch to be added to the group.\r
   */\r
  addSwatch(swatch: Swatch): void\r
\r
  /**\r
   * Get all swatches in the swatch group.\r
   */\r
  getAllSwatches(): Swatch[]\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A pattern.\r
 */\r
declare class Pattern {\r
  /**\r
   * The pattern's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A symbol.\r
 */\r
declare class Symbol {\r
  /**\r
   * The symbol's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Duplicate this object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  duplicate(relativeObject: object, insertionLocation: any): Symbol\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A brush.\r
 */\r
declare class Brush {\r
  /**\r
   * The brush's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Apply a brush or art style to object(s)\r
   * @param artItem The page item(s) to apply to.\r
   */\r
  applyTo(artItem: any): void\r
}\r
\r
/**\r
 * An art style.\r
 */\r
declare class ArtStyle {\r
  /**\r
   * The art style's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Apply a brush or art style to object(s)\r
   * @param artItem The page item(s) to apply to.\r
   */\r
  applyTo(artItem: any): void\r
\r
  /**\r
   * Merge an art style to object(s) current style(s)\r
   * @param artItem The page item(s) to merge to.\r
   */\r
  mergeTo(artItem: any): void\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * An installed font.\r
 */\r
declare class TextFont {\r
  /**\r
   * The font's family name.\r
   */\r
  readonly family: string\r
\r
  /**\r
   * The font's full name.\r
   */\r
  readonly name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The font's style name.\r
   */\r
  readonly style: string\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
}\r
\r
/**\r
 * A page item object.\r
 */\r
declare class PageItem {\r
  /**\r
   * The value of the Adobe URL tag assigned to this artwork item.\r
   */\r
  URL: string\r
\r
  /**\r
   * The absolute drawing order of the layer.\r
   */\r
  readonly absoluteZOrderPosition: number\r
\r
  /**\r
   * Is the artwork used to create a knockout.\r
   */\r
  artworkKnockout: KnockoutState\r
\r
  /**\r
   * The mode used when compositing an object.\r
   */\r
  blendingMode: BlendModes\r
\r
  /**\r
   * The bounds of the artwork including stroke width and controls.\r
   */\r
  readonly controlBounds: Rect\r
\r
  /**\r
   * Can the art item be modified.\r
   */\r
  readonly editable: boolean\r
\r
  /**\r
   * The bounds of the artwork excluding stroke width.\r
   */\r
  readonly geometricBounds: Rect\r
\r
  /**\r
   * The height of the art item.\r
   */\r
  height: number\r
\r
  /**\r
   * Is this artwork item hidden?\r
   */\r
  hidden: boolean\r
\r
  /**\r
   * Is the artwork isolated.\r
   */\r
  isIsolated: boolean\r
\r
  /**\r
   * The layer to which this artwork belongs.\r
   */\r
  readonly layer: Layer\r
\r
  /**\r
   * The left position of the art item.\r
   */\r
  left: number\r
\r
  /**\r
   * Is this artwork item locked?\r
   */\r
  locked: boolean\r
\r
  /**\r
   * The item's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The note assigned to this artwork item.\r
   */\r
  note: string\r
\r
  /**\r
   * The object's opacity (between 0.0 and 100.0)\r
   */\r
  opacity: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Is this artwork item aligned to Pixel Grid?\r
   */\r
  pixelAligned: boolean\r
\r
  /**\r
   * The position of the top left corner of the art item.\r
   */\r
  position: Point | [number, number]\r
\r
  /**\r
   * Is this artwork item selected?\r
   */\r
  selected: boolean\r
\r
  /**\r
   * Is the art item sliced (default: false)\r
   */\r
  sliced: boolean\r
\r
  /**\r
   * The collection of tags associated with this page item.\r
   */\r
  readonly tags: Tags\r
\r
  /**\r
   * The top position of the art item.\r
   */\r
  top: number\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The visibility variable bound to this page item.\r
   */\r
  visibilityVariable: any\r
\r
  /**\r
   * The visible bounds of the artwork including stroke width.\r
   */\r
  readonly visibleBounds: Rect\r
\r
  /**\r
   * The width of the art item.\r
   */\r
  width: number\r
\r
  /**\r
   * Should the text frame object be wrapped inside this object?\r
   */\r
  wrapInside: boolean\r
\r
  /**\r
   * Use this offset when wrapping text around this object.\r
   */\r
  wrapOffset: number\r
\r
  /**\r
   * Wrap text frame objects around this object (text frame must be above the object)\r
   */\r
  wrapped: boolean\r
\r
  /**\r
   * The drawing order of the art within it's group or layer.\r
   */\r
  readonly zOrderPosition: number\r
\r
  /**\r
   * Apply effect to selected artItem.\r
   * @param liveEffectXML\r
   */\r
  applyEffect(liveEffectXML: string): void\r
\r
  /**\r
   * Place art object(s)in perspective grid at spedified perspective plane and coordinate.\r
   * @param positionX Position towards X direction of specified or active perspective grid plane.\r
   * @param positionY Position towards Y direction of specified or active perspective grid plane.\r
   * @param perspectiveGridPlane Type of perspective grid plane.\r
   */\r
  bringInPerspective(\r
    positionX: number,\r
    positionY: number,\r
    perspectiveGridPlane: PerspectiveGridPlaneType,\r
  ): void\r
\r
  /**\r
   * Duplicate this object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  duplicate(relativeObject: object, insertionLocation: any): PageItem\r
\r
  /**\r
   * Move the object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  move(relativeObject: object, insertionLocation: any): PageItem\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Scale art object(s)\r
   * @param scaleX Horizontal scaling factor expressed as a percentage (100 = 100%)\r
   * @param scaleY Vertical scaling factor expressed as a percentage (100 = 100%)\r
   * @param changePositions Are art object positions and orientations effected?\r
   * @param changeFillPatterns Are the fill patterns assigned to paths to be transformed?\r
   * @param changeFillGradients Are the fill gradients assigned to paths to be transformed?\r
   * @param changeStrokePattern Are the stroke patterns assigned to paths to be transformed?\r
   * @param changeLineWidths The amount line widths are to be scaled (expressed as a percentage)\r
   * @param scaleAbout The point on the art item's bounding box to which the scale is applied.\r
   */\r
  resize(\r
    scaleX: number,\r
    scaleY: number,\r
    changePositions?: boolean,\r
    changeFillPatterns?: boolean,\r
    changeFillGradients?: boolean,\r
    changeStrokePattern?: boolean,\r
    changeLineWidths?: number,\r
    scaleAbout?: Transformation,\r
  ): void\r
\r
  /**\r
   * Rotate art object(s)\r
   * @param angle Angle of rotation (in degrees). Rotation is performed counter-clock wise.\r
   * @param changePositions Are art object positions and orientations effected?\r
   * @param changeFillPatterns Are the fill patterns assigned to paths to be transformed?\r
   * @param changeFillGradients Are the fill gradients assigned to paths to be transformed?\r
   * @param changeStrokePattern Are the stroke patterns assigned to paths to be transformed?\r
   * @param rotateAbout The point on the art item's bounding box to which the rotation is applied.\r
   */\r
  rotate(\r
    angle: number,\r
    changePositions?: boolean,\r
    changeFillPatterns?: boolean,\r
    changeFillGradients?: boolean,\r
    changeStrokePattern?: boolean,\r
    rotateAbout?: Transformation,\r
  ): void\r
\r
  /**\r
   * Sends the script message to the required plugin.\r
   * @param pluginName Plugin to which message needs to be sent.\r
   * @param messageSelector Functionality that is to be executed.\r
   * @param inputString Pass any data encoded in a string.\r
   */\r
  sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string\r
\r
  /**\r
   * Transform art object(s) using a transformation matrix.\r
   * @param transformationMatrix The transformation matrix to be applied to the objects.\r
   * @param changePositions Are art object positions and orientations effected?\r
   * @param changeFillPatterns Are the fill patterns assigned to paths to be transformed?\r
   * @param changeFillGradients Are the fill gradients assigned to paths to be transformed?\r
   * @param changeStrokePattern Are the stroke patterns assigned to paths to be transformed?\r
   * @param changeLineWidths The amount line widths are to be scaled (expressed as a percentage)\r
   * @param transformAbout The point on the art item's bounding box to which scale and rotation operations apply.\r
   */\r
  transform(\r
    transformationMatrix: Matrix,\r
    changePositions?: boolean,\r
    changeFillPatterns?: boolean,\r
    changeFillGradients?: boolean,\r
    changeStrokePattern?: boolean,\r
    changeLineWidths?: number,\r
    transformAbout?: Transformation,\r
  ): void\r
\r
  /**\r
   * Reposition art object(s)\r
   * @param deltaX Horizontal transformation.\r
   * @param deltaY Vertical transformation.\r
   * @param transformObjects Are art object positions and orientations affected?\r
   * @param transformFillPatterns Are the fill patterns assigned to paths to be transformed?\r
   * @param transformFillGradients Are the fill gradients assigned to paths to be transformed?\r
   * @param transformStrokePattern Are the stroke patterns assigned to paths to be transformed?\r
   */\r
  translate(\r
    deltaX?: number,\r
    deltaY?: number,\r
    transformObjects?: boolean,\r
    transformFillPatterns?: boolean,\r
    transformFillGradients?: boolean,\r
    transformStrokePattern?: boolean,\r
  ): void\r
\r
  /**\r
   * Arranges the art relative to other art in the group or layer.\r
   * @param zOrderCmd How to arrange the art.\r
   */\r
  zOrder(zOrderCmd: ZOrderMethod): void\r
}\r
\r
/**\r
 * Compound path artwork item.\r
 */\r
declare class CompoundPathItem extends PageItem {\r
  /**\r
   * The path artwork in this compound path.\r
   */\r
  readonly pathItems: PathItems\r
}\r
\r
/**\r
 * A tag associated with a piece of artwork.\r
 */\r
declare class Tag {\r
  /**\r
   * The tag's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The data stored in this tag.\r
   */\r
  value: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * An artwork path item.\r
 */\r
declare class PathItem extends PageItem {\r
  /**\r
   * The area of this path in square points.\r
   */\r
  readonly area: number\r
\r
  /**\r
   * Should this be used as a clipping path?\r
   */\r
  clipping: boolean\r
\r
  /**\r
   * Is this path closed?\r
   */\r
  closed: boolean\r
\r
  /**\r
   * Should the even-odd rule be used to determine insideness?\r
   */\r
  evenodd: boolean\r
\r
  /**\r
   * Fill color.\r
   */\r
  fillColor: Color\r
\r
  /**\r
   * Will art beneath a filled object be overprinted?\r
   */\r
  fillOverprint: boolean\r
\r
  /**\r
   * Should the path be filled?\r
   */\r
  filled: boolean\r
\r
  /**\r
   * Is this path a guide object?\r
   */\r
  guides: boolean\r
\r
  /**\r
   * The length of this path in points.\r
   */\r
  readonly length: number\r
\r
  /**\r
   *\r
   */\r
  readonly pathPoints: PathPoints\r
\r
  /**\r
   * The polarity the path.\r
   */\r
  polarity: PolarityValues\r
\r
  /**\r
   * The resolution of the path.\r
   */\r
  resolution: number\r
\r
  /**\r
   * All the selected points in the path.\r
   */\r
  readonly selectedPathPoints: PathPoints\r
\r
  /**\r
   * Type of line capping.\r
   */\r
  strokeCap: StrokeCap\r
\r
  /**\r
   * Stroke color.\r
   */\r
  strokeColor: Color\r
\r
  /**\r
   * The default distance into the dash pattern at which the pattern should be started.\r
   */\r
  strokeDashOffset: number\r
\r
  /**\r
   * Dash lengths (set to {} for a solid line)\r
   */\r
  strokeDashes: number[]\r
\r
  /**\r
   * Type of joints.\r
   */\r
  strokeJoin: StrokeJoin\r
\r
  /**\r
   * Whether a join is mitered (pointed) or beveled (squared-off)\r
   */\r
  strokeMiterLimit: number\r
\r
  /**\r
   * Will art beneath a stroked object be overprinted?\r
   */\r
  strokeOverprint: boolean\r
\r
  /**\r
   * Width of stroke.\r
   */\r
  strokeWidth: number\r
\r
  /**\r
   * Should the path be stroked?\r
   */\r
  stroked: boolean\r
\r
  /**\r
   * Set the path using the provided array of path point (x, y) coordinate pairs.\r
   * @param pathPoints Array of (x, y) coordinate pairs for the path points.\r
   */\r
  setEntirePath(pathPoints: [number, number][]): void\r
}\r
\r
/**\r
 * A point on a path.\r
 */\r
declare class PathPoint {\r
  /**\r
   * The position (coordinates) of the anchor point.\r
   */\r
  anchor: Point | [number, number]\r
\r
  /**\r
   * Location of the left direction point (in position)\r
   */\r
  leftDirection: Point | [number, number]\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The type of point: smooth/corner.\r
   */\r
  pointType: PointType\r
\r
  /**\r
   * Location of the right direction point (out position)\r
   */\r
  rightDirection: Point | [number, number]\r
\r
  /**\r
   * The path point selected state.\r
   */\r
  selected: PathPointSelection\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Raster artwork item.\r
 */\r
declare class RasterItem extends PageItem {\r
  /**\r
   * The number of bits per channel.\r
   */\r
  readonly bitsPerChannel: number\r
\r
  /**\r
   * Dimensions of raster art object regardless of transformations.\r
   */\r
  boundingBox: Rect\r
\r
  /**\r
   * The number of image channels.\r
   */\r
  readonly channels: number\r
\r
  /**\r
   * List of colorant names.\r
   */\r
  readonly colorants: string[]\r
\r
  /**\r
   * Is the raster art a colorized grayscale image?\r
   */\r
  readonly colorizedGrayscale: boolean\r
\r
  /**\r
   * The content variable bound to this raster art object.\r
   */\r
  contentVariable: any\r
\r
  /**\r
   * Is the raster art embedded within the illustration?\r
   */\r
  embedded: boolean\r
\r
  /**\r
   * The file containing the raster artwork.\r
   */\r
  readonly file: File\r
\r
  /**\r
   * The color space of the raster image.\r
   */\r
  readonly imageColorSpace: ImageColorSpace\r
\r
  /**\r
   * The transformation matrix of the raster art object.\r
   */\r
  matrix: Matrix\r
\r
  /**\r
   * Is the raster art overprinting?\r
   */\r
  overprint: boolean\r
\r
  /**\r
   * Status of the linked image.\r
   */\r
  readonly status: RasterLinkState\r
\r
  /**\r
   * Is the raster art transparent?\r
   */\r
  readonly transparent: boolean\r
\r
  /**\r
   * Colorize the RasterItem with a CMYK or RGB Color.\r
   * @param rasterColor The color to use for coloring the TIFF image.\r
   */\r
  colorize(rasterColor: Color): void\r
\r
  /**\r
   * Trace this raster object using default options. Reorders this raster to the source art.\r
   */\r
  trace(): PluginItem\r
}\r
\r
/**\r
 * Placed artwork item.\r
 */\r
declare class PlacedItem extends PageItem {\r
  /**\r
   * Dimensions of placed art object, regardless of transformations.\r
   */\r
  readonly boundingBox: Rect\r
\r
  /**\r
   * The content variable bound to this placed art object.\r
   */\r
  contentVariable: any\r
\r
  /**\r
   * The file containing the placed artwork.\r
   */\r
  file: File\r
\r
  /**\r
   * The transformation matrix of the placed art object.\r
   */\r
  matrix: Matrix\r
\r
  /**\r
   * Embed the placed art within the illustration.\r
   */\r
  embed(): void\r
\r
  /**\r
   * Relink the placed art with supplied art from file.\r
   * @param fileSpec File spec to relink from.\r
   */\r
  relink(fileSpec: File): void\r
\r
  /**\r
   * Trace this raster object using default options. Reorders this placed to the source art.\r
   */\r
  trace(): PluginItem\r
}\r
\r
/**\r
 * Embedded artwork item.\r
 */\r
declare class EmbedItem extends PageItem {\r
  /**\r
   * The file containing the placed artwork.\r
   */\r
  file: File\r
}\r
\r
/**\r
 * Graph artwork item.\r
 */\r
declare class GraphItem extends PageItem {\r
  /**\r
   * The content variable bound to this graph.\r
   */\r
  contentVariable: any\r
}\r
\r
/**\r
 * Non-native artwork item.\r
 */\r
declare class NonNativeItem extends PageItem {}\r
\r
/**\r
 * Mesh artwork item.\r
 */\r
declare class MeshItem extends PageItem {}\r
\r
/**\r
 * Plugin artwork item.\r
 */\r
declare class PluginItem extends PageItem {\r
  /**\r
   * Is the plugin group a tracing?\r
   */\r
  readonly isTracing: boolean\r
\r
  /**\r
   * The tracing object associated with this plugin item.\r
   */\r
  readonly tracing: TracingObject\r
}\r
\r
/**\r
 * An artwork group item.\r
 */\r
declare class GroupItem extends PageItem {\r
  /**\r
   * Are the group elements clipped to the clipping path?\r
   */\r
  clipped: boolean\r
\r
  /**\r
   * The compound path artwork in this group.\r
   */\r
  readonly compoundPathItems: CompoundPathItems\r
\r
  /**\r
   * The graph art items in this group.\r
   */\r
  readonly graphItems: GraphItems\r
\r
  /**\r
   * The group items in this group.\r
   */\r
  readonly groupItems: GroupItems\r
\r
  /**\r
   * The text frame items in this story.\r
   */\r
  readonly legacyTextItems: LegacyTextItems\r
\r
  /**\r
   * The mesh art items in this group.\r
   */\r
  readonly meshItems: MeshItems\r
\r
  /**\r
   * The non-native art items in this group.\r
   */\r
  readonly nonNativeItems: NonNativeItems\r
\r
  /**\r
   * All the artwork in this group.\r
   */\r
  readonly pageItems: PageItems\r
\r
  /**\r
   * The path artwork in this group.\r
   */\r
  readonly pathItems: PathItems\r
\r
  /**\r
   * The placed art items in this group.\r
   */\r
  readonly placedItems: PlacedItems\r
\r
  /**\r
   * The plugin art items in this group.\r
   */\r
  readonly pluginItems: PluginItems\r
\r
  /**\r
   * The raster art items in this group.\r
   */\r
  readonly rasterItems: RasterItems\r
\r
  /**\r
   * The symbol items in this group.\r
   */\r
  readonly symbolItems: SymbolItems\r
\r
  /**\r
   * The text frame items in this group.\r
   */\r
  readonly textFrames: TextFrameItems\r
}\r
\r
/**\r
 * An instance of a Symbol.\r
 */\r
declare class SymbolItem extends PageItem {\r
  /**\r
   * The symbol that was used to create this symbol item.\r
   */\r
  symbol: Symbol\r
\r
  /**\r
   * Break link to the symbol.\r
   */\r
  breakLink(): void\r
}\r
\r
/**\r
 * A text path item.\r
 */\r
declare class TextPath {\r
  /**\r
   * The area of this path in square points.\r
   */\r
  readonly area: number\r
\r
  /**\r
   * The mode used when compositing an object.\r
   */\r
  blendingMode: BlendModes\r
\r
  /**\r
   * Should this be used as a clipping path?\r
   */\r
  clipping: boolean\r
\r
  /**\r
   * Is this path closed?\r
   */\r
  closed: boolean\r
\r
  /**\r
   * Can the text path be modified.\r
   */\r
  readonly editable: boolean\r
\r
  /**\r
   * Should the even-odd rule be used to determine insideness?\r
   */\r
  evenodd: boolean\r
\r
  /**\r
   * Fill color.\r
   */\r
  fillColor: Color\r
\r
  /**\r
   * Will art beneath a filled object be overprinted?\r
   */\r
  fillOverprint: boolean\r
\r
  /**\r
   * Should the path be filled?\r
   */\r
  filled: boolean\r
\r
  /**\r
   * Is this path a guide object?\r
   */\r
  guides: boolean\r
\r
  /**\r
   * The height of the text path.\r
   */\r
  height: number\r
\r
  /**\r
   * The left position of the text path.\r
   */\r
  left: number\r
\r
  /**\r
   * Note assigned to the path.\r
   */\r
  note: string\r
\r
  /**\r
   * The object's opacity (between 0.0 and 100.0)\r
   */\r
  opacity: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   *\r
   */\r
  readonly pathPoints: PathPoints\r
\r
  /**\r
   * The polarity the path.\r
   */\r
  polarity: PolarityValues\r
\r
  /**\r
   * The position of the top left corner of the text path.\r
   */\r
  position: Point | [number, number]\r
\r
  /**\r
   * The resolution of the path.\r
   */\r
  resolution: number\r
\r
  /**\r
   * All the selected points in the path.\r
   */\r
  readonly selectedPathPoints: PathPoints\r
\r
  /**\r
   * Type of line capping.\r
   */\r
  strokeCap: StrokeCap\r
\r
  /**\r
   * Stroke color.\r
   */\r
  strokeColor: Color\r
\r
  /**\r
   * The default distance into the dash pattern at which the pattern should be started.\r
   */\r
  strokeDashOffset: number\r
\r
  /**\r
   * Dash lengths (set to {} for a solid line)\r
   */\r
  strokeDashes: number[]\r
\r
  /**\r
   * Type of joints.\r
   */\r
  strokeJoin: StrokeJoin\r
\r
  /**\r
   * Whether a join is mitered (pointed) or beveled (squared-off)\r
   */\r
  strokeMiterLimit: number\r
\r
  /**\r
   * Will art beneath a stroked object be overprinted?\r
   */\r
  strokeOverprint: boolean\r
\r
  /**\r
   * Width of stroke.\r
   */\r
  strokeWidth: number\r
\r
  /**\r
   * Should the path be stroked?\r
   */\r
  stroked: boolean\r
\r
  /**\r
   * The top position of the text path.\r
   */\r
  top: number\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The width of the text path.\r
   */\r
  width: number\r
\r
  /**\r
   * Set the path using the provided array of anchor points.\r
   * @param pathPoints Array of anchor values for the path points.\r
   */\r
  setEntirePath(pathPoints: any[]): void\r
}\r
\r
/**\r
 * A contiguous block of text.\r
 */\r
declare class Story {\r
  /**\r
   * All the characters in this text range.\r
   */\r
  readonly characters: Characters\r
\r
  /**\r
   * All the insertion points in this text range.\r
   */\r
  readonly insertionPoints: InsertionPoints\r
\r
  /**\r
   * The number of characters in the story.\r
   */\r
  readonly length: number\r
\r
  /**\r
   * All the lines in this text range.\r
   */\r
  readonly lines: Lines\r
\r
  /**\r
   * All the paragraphs in this text range.\r
   */\r
  readonly paragraphs: Paragraphs\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The text frame items in this story.\r
   */\r
  readonly textFrames: TextFrameItems\r
\r
  /**\r
   * The text range of the story.\r
   */\r
  readonly textRange: TextRange\r
\r
  /**\r
   * All the text in this text range.\r
   */\r
  readonly textRanges: TextRanges\r
\r
  /**\r
   * The selected text (ranges) in the story.\r
   */\r
  readonly textSelection: TextRange[]\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * All the words in this text range.\r
   */\r
  readonly words: Words\r
}\r
\r
/**\r
 * Text frame item.\r
 */\r
declare class TextFrame extends PageItem {\r
  /**\r
   * The position of the anchor point (start of base line for point text)\r
   */\r
  anchor: Point | [number, number]\r
\r
  /**\r
   * The type of a text anti-aliasing on text frame item.\r
   */\r
  antialias: TextAntialias\r
\r
  /**\r
   * All the characters in this text range.\r
   */\r
  readonly characters: Characters\r
\r
  /**\r
   * The column count in the text frame (area text only)\r
   */\r
  columnCount: number\r
\r
  /**\r
   * The column gutter in the text frame (area text only)\r
   */\r
  columnGutter: number\r
\r
  /**\r
   * The content variable bound to this text art item.\r
   */\r
  contentVariable: any\r
\r
  /**\r
   * The text contents of this text frame.\r
   */\r
  contents: string\r
\r
  /**\r
   * The end position of text along a path, as a value relative to the path's segments (path text only)\r
   */\r
  endTValue: number\r
\r
  /**\r
   * The first baseline offset type for text frame item (for Area Text only)\r
   */\r
  firstBaseline: FirstBaselineType\r
\r
  /**\r
   * The first baseline offset minimum value for text frame item (for Area Text only)\r
   */\r
  firstBaselineMin: number\r
\r
  /**\r
   * Flow text between linked frame horizontally first. (area text only)\r
   */\r
  flowLinksHorizontally: boolean\r
\r
  /**\r
   * All the insertion points in this text range.\r
   */\r
  readonly insertionPoints: InsertionPoints\r
\r
  /**\r
   * The type of a text frame item.\r
   */\r
  readonly kind: TextType\r
\r
  /**\r
   * All the lines in this text range.\r
   */\r
  readonly lines: Lines\r
\r
  /**\r
   * The transformation matrix of the text frame object.\r
   */\r
  readonly matrix: Matrix\r
\r
  /**\r
   * The linked text frame following this one.\r
   */\r
  nextFrame: TextFrame\r
\r
  /**\r
   * Is the optical alignment active?\r
   */\r
  opticalAlignment: boolean\r
\r
  /**\r
   * The orientation of the text in the frame.\r
   */\r
  orientation: TextOrientation\r
\r
  /**\r
   * All the paragraphs in this text range.\r
   */\r
  readonly paragraphs: Paragraphs\r
\r
  /**\r
   * The linked text frame preceding this one.\r
   */\r
  previousFrame: TextFrame\r
\r
  /**\r
   * The row count in the text frame (area text only)\r
   */\r
  rowCount: number\r
\r
  /**\r
   * The row gutter in the text frame (area text only)\r
   */\r
  rowGutter: number\r
\r
  /**\r
   * The amount of spacing (path text only)\r
   */\r
  spacing: number\r
\r
  /**\r
   * The start position of text along a path, as a value relative to the path's segments (path text only)\r
   */\r
  startTValue: number\r
\r
  /**\r
   * The story of the text frame.\r
   */\r
  readonly story: Story\r
\r
  /**\r
   * The path for the text frame (area and path text)\r
   */\r
  readonly textPath: TextPath\r
\r
  /**\r
   * The text range of the text frame.\r
   */\r
  readonly textRange: TextRange\r
\r
  /**\r
   * All the text in this text range.\r
   */\r
  readonly textRanges: TextRanges\r
\r
  /**\r
   * The selected text (ranges) in the story.\r
   */\r
  readonly textSelection: TextRange[]\r
\r
  /**\r
   * All the words in this text range.\r
   */\r
  readonly words: Words\r
\r
  /**\r
   * Convert Area Type Text Object To Point Type Object.\r
   */\r
  convertAreaObjectToPointObject(): TextFrame\r
\r
  /**\r
   * Convert Point Type Text Object To Area Type Object.\r
   */\r
  convertPointObjectToAreaObject(): TextFrame\r
\r
  /**\r
   * Convert text item to path items.\r
   */\r
  createOutline(): GroupItem\r
\r
  /**\r
   * Generates the thumbnail with the properties of first character in the text frame.\r
   * @param textString The text string which is to be used in the thumbnail generation.\r
   * @param fontSize The size in points of the text string.\r
   * @param textColor The color of the text string.\r
   * @param destinationPath The location at which the thumbnail is to be stored.\r
   */\r
  generateThumbnailWithTextFrameProperties(\r
    textString: string,\r
    fontSize: number,\r
    textColor: Color,\r
    destinationPath: File,\r
  ): void\r
}\r
\r
/**\r
 * Unconverted legacy text items from documents in pre-version 11 formats.\r
 */\r
declare class LegacyTextItem extends PageItem {\r
  /**\r
   * Has the legacy text item been updated to a native text frame item?\r
   */\r
  readonly converted: boolean\r
\r
  /**\r
   * Create a native text frame from a legacy text item. The original legacy text item is deleted.\r
   */\r
  convertToNative(): GroupItem\r
}\r
\r
/**\r
 * A range of characters from a text item.\r
 */\r
declare class TextRange {\r
  /**\r
   * The character properties for the text range.\r
   */\r
  readonly characterAttributes: CharacterAttributes\r
\r
  /**\r
   * Offset of the first character of the range from the beginning of the story, in characters.\r
   */\r
  characterOffset: number\r
\r
  /**\r
   * List of referenced character styles in the text range.\r
   */\r
  readonly characterStyles: CharacterStyles\r
\r
  /**\r
   * All the characters in this text range.\r
   */\r
  readonly characters: Characters\r
\r
  /**\r
   * The text string.\r
   */\r
  contents: string\r
\r
  /**\r
   * All the insertion points in this text range.\r
   */\r
  readonly insertionPoints: InsertionPoints\r
\r
  /**\r
   * Controls the spacing between two characters (in milli-ems)\r
   */\r
  kerning: number\r
\r
  /**\r
   * Length of text range.\r
   */\r
  length: number\r
\r
  /**\r
   * All the lines in this text range.\r
   */\r
  readonly lines: Lines\r
\r
  /**\r
   * The paragraph properties for the text range.\r
   */\r
  readonly paragraphAttributes: ParagraphAttributes\r
\r
  /**\r
   * List of referenced paragraph styles in the text range.\r
   */\r
  readonly paragraphStyles: ParagraphStyles\r
\r
  /**\r
   * All the paragraphs in this text range.\r
   */\r
  readonly paragraphs: Paragraphs\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The story of the text range.\r
   */\r
  readonly story: Story\r
\r
  /**\r
   * All the text in this text range.\r
   */\r
  readonly textRanges: TextRanges\r
\r
  /**\r
   * The selected text (ranges) in the text range.\r
   */\r
  readonly textSelection: TextRange[]\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * All the words in this text range.\r
   */\r
  readonly words: Words\r
\r
  /**\r
   * Change the capitalization of text.\r
   * @param type The type of case.\r
   */\r
  changeCaseTo(type: CaseChangeType): void\r
\r
  /**\r
   * Deselect the text range.\r
   */\r
  deSelect(): void\r
\r
  /**\r
   * Duplicate this object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  duplicate(relativeObject: object, insertionLocation: any): TextRange\r
\r
  /**\r
   * Move the object.\r
   * @param relativeObject\r
   * @param insertionLocation\r
   */\r
  move(relativeObject: object, insertionLocation: any): TextRange\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
\r
  /**\r
   * Select the text range.\r
   * @param addToDocument Whether to add the text range to the document text selection.\r
   */\r
  select(addToDocument?: boolean): void\r
}\r
\r
/**\r
 * A location between characters, used to insert new text objects.\r
 */\r
declare class InsertionPoint {\r
  /**\r
   * All the characters in this text range.\r
   */\r
  readonly characters: Characters\r
\r
  /**\r
   * All the lines in this text range.\r
   */\r
  readonly lines: Lines\r
\r
  /**\r
   * All the paragraphs in this text range.\r
   */\r
  readonly paragraphs: Paragraphs\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The story of the text range.\r
   */\r
  readonly story: Story\r
\r
  /**\r
   * All the text in this text range.\r
   */\r
  readonly textRanges: TextRanges\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * All the words in this text range.\r
   */\r
  readonly words: Words\r
}\r
\r
/**\r
 * A named style that remembers character attributes.\r
 */\r
declare class CharacterStyle {\r
  /**\r
   * The character properties for the text range.\r
   */\r
  readonly characterAttributes: CharacterAttributes\r
\r
  /**\r
   * The character style's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Adds an element.\r
   */\r
  add(): CharacterStyle\r
\r
  /**\r
   * Apply the character style to text object(s)\r
   * @param textItem The text object(s) to apply the style to.\r
   * @param clearingOverrides Whether to clear any text attributes before apply the style.\r
   */\r
  applyTo(textItem: any, clearingOverrides?: boolean): void\r
\r
  /**\r
   * Remove all the attributes from this character style.\r
   */\r
  clear(): void\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * A named style that remembers paragraph attributes.\r
 */\r
declare class ParagraphStyle {\r
  /**\r
   * The character properties for the text range.\r
   */\r
  readonly characterAttributes: CharacterAttributes\r
\r
  /**\r
   * The paragraph style's name.\r
   */\r
  name: string\r
\r
  /**\r
   * The paragraph properties for the text range.\r
   */\r
  readonly paragraphAttributes: ParagraphAttributes\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Adds an element.\r
   */\r
  add(): ParagraphStyle\r
\r
  /**\r
   * Apply the paragraph style to text object(s)\r
   * @param textItem The text object(s) to apply the style to.\r
   * @param clearingOverrides Whether to clear any text attributes before apply the style.\r
   */\r
  applyTo(textItem: any, clearingOverrides?: boolean): void\r
\r
  /**\r
   * Remove all the attributes from this paragraph style.\r
   */\r
  clear(): void\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Properties of a character.\r
 */\r
declare class CharacterAttributes {\r
  /**\r
   * The percentage of space reduction around a Japanese character (100 = 100%)\r
   */\r
  Tsume: number\r
\r
  /**\r
   * The em amount of left aki.\r
   */\r
  akiLeft: number\r
\r
  /**\r
   * The em amount of right aki amount.\r
   */\r
  akiRight: number\r
\r
  /**\r
   * The character alignment type.\r
   */\r
  alignment: StyleRunAlignmentType\r
\r
  /**\r
   * The alternate glyphs form.\r
   */\r
  alternateGlyphs: AlternateGlyphsForm\r
\r
  /**\r
   * Whether to use automatic leading.\r
   */\r
  autoLeading: boolean\r
\r
  /**\r
   * The Japanese text baseline direction.\r
   */\r
  baselineDirection: BaselineDirectionType\r
\r
  /**\r
   * The baseline position of text.\r
   */\r
  baselinePosition: FontBaselineOption\r
\r
  /**\r
   * The amount of shift (in points) of the text baseline.\r
   */\r
  baselineShift: number\r
\r
  /**\r
   * The case of text.\r
   */\r
  capitalization: FontCapsOption\r
\r
  /**\r
   * Whether the OpenType connection forms should be used.\r
   */\r
  connectionForms: boolean\r
\r
  /**\r
   * Whether the contextual ligature should be used.\r
   */\r
  contextualLigature: boolean\r
\r
  /**\r
   * Whether the discretionary ligature should be used.\r
   */\r
  discretionaryLigature: boolean\r
\r
  /**\r
   * Which figure style to use in OpenType font.\r
   */\r
  figureStyle: FigureStyleType\r
\r
  /**\r
   * The color of the text fill.\r
   */\r
  fillColor: Color\r
\r
  /**\r
   * Whether the OpenType fractions should be used.\r
   */\r
  fractions: boolean\r
\r
  /**\r
   * Character horizontal scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  horizontalScale: number\r
\r
  /**\r
   * Does the Japanese OpenType support italics?\r
   */\r
  italics: boolean\r
\r
  /**\r
   * The automatic kerning method to use.\r
   */\r
  kerningMethod: AutoKernType\r
\r
  /**\r
   * The language of text.\r
   */\r
  language: LanguageType\r
\r
  /**\r
   * The amount of space between two lines of text (in points)\r
   */\r
  leading: number\r
\r
  /**\r
   * Whether the ligature should be used.\r
   */\r
  ligature: boolean\r
\r
  /**\r
   * Whether line breaks are allowed.\r
   */\r
  noBreak: boolean\r
\r
  /**\r
   * The OpenType baseline position.\r
   */\r
  openTypePosition: FontOpenTypePositionOption\r
\r
  /**\r
   * Whether the OpenType ordinals should be used.\r
   */\r
  ordinals: boolean\r
\r
  /**\r
   * Whether the OpenType ornaments should be used.\r
   */\r
  ornaments: boolean\r
\r
  /**\r
   * Whether to overprint the fill of the text.\r
   */\r
  overprintFill: boolean\r
\r
  /**\r
   * Whether to overprint the stroke of the text.\r
   */\r
  overprintStroke: boolean\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Does the Japanese OpenType support proportional font?\r
   */\r
  proportionalMetrics: boolean\r
\r
  /**\r
   * The character rotation angle (in degrees)\r
   */\r
  rotation: number\r
\r
  /**\r
   * Font size in points.\r
   */\r
  size: number\r
\r
  /**\r
   * Whether to draw a strike through line over the text.\r
   */\r
  strikeThrough: boolean\r
\r
  /**\r
   * The color of the text stroke.\r
   */\r
  strokeColor: Color\r
\r
  /**\r
   * Line width of stroke.\r
   */\r
  strokeWeight: number\r
\r
  /**\r
   * Whether the OpenType stylistic alternates should be used.\r
   */\r
  stylisticAlternates: boolean\r
\r
  /**\r
   * Whether the OpenType swash should be used.\r
   */\r
  swash: boolean\r
\r
  /**\r
   * The Tate-Chu-Yoko horizontal adjustment in points.\r
   */\r
  tateChuYokoHorizontal: number\r
\r
  /**\r
   * The Tate-Chu-Yoko vertical adjustment in points.\r
   */\r
  tateChuYokoVertical: number\r
\r
  /**\r
   * The text font.\r
   */\r
  textFont: TextFont\r
\r
  /**\r
   * Whether the OpenType titling alternates should be used.\r
   */\r
  titling: boolean\r
\r
  /**\r
   * The tracking or range kerning amount in thousands of an em.\r
   */\r
  tracking: number\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Whether to underline the text.\r
   */\r
  underline: boolean\r
\r
  /**\r
   * Character vertical scaling factor expressed as a percentage (100 = 100%)\r
   */\r
  verticalScale: number\r
\r
  /**\r
   *\r
   */\r
  wariChuCharactersAfterBreak: number\r
\r
  /**\r
   *\r
   */\r
  wariChuCharactersBeforeBreak: number\r
\r
  /**\r
   * Whether WariChu is enabled.\r
   */\r
  wariChuEnabled: boolean\r
\r
  /**\r
   *\r
   */\r
  wariChuJustification: WariChuJustificationType\r
\r
  /**\r
   * The Wari-Chu line gap.\r
   */\r
  wariChuLineGap: number\r
\r
  /**\r
   * The number of Wari-Chu (multiple text lines fit into a space meant for one) lines.\r
   */\r
  wariChuLines: number\r
\r
  /**\r
   * The Wari-Chu scale.\r
   */\r
  wariChuScale: number\r
}\r
\r
/**\r
 * Properties of a paragraph.\r
 */\r
declare class ParagraphAttributes {\r
  /**\r
   * Auto leading amount (in percentage)\r
   */\r
  autoLeadingAmount: number\r
\r
  /**\r
   * Is BunriKinshi enabled?\r
   */\r
  bunriKinshi: boolean\r
\r
  /**\r
   * The Burasagari type.\r
   */\r
  burasagariType: BurasagariTypeEnum\r
\r
  /**\r
   * Desired glyph scaling expressed as a percentage.\r
   */\r
  desiredGlyphScaling: number\r
\r
  /**\r
   * Desired letter spacing expressed as a percentage.\r
   */\r
  desiredLetterSpacing: number\r
\r
  /**\r
   * Desired word spacing expressed as a percentage.\r
   */\r
  desiredWordSpacing: number\r
\r
  /**\r
   * Whether to enable every line composer (as opposed to single line composer)?\r
   */\r
  everyLineComposer: boolean\r
\r
  /**\r
   * First line left indent expressed in points.\r
   */\r
  firstLineIndent: number\r
\r
  /**\r
   * Is hyphenation enabled for the capitalized words?\r
   */\r
  hyphenateCapitalizedWords: boolean\r
\r
  /**\r
   * Is hyphenation enabled for the paragraph?\r
   */\r
  hyphenation: boolean\r
\r
  /**\r
   * Hyphenation preference scale for better spacing (0) or fewer hyphens (1)\r
   */\r
  hyphenationPreference: number\r
\r
  /**\r
   * Size of the hyphenation zone.\r
   */\r
  hyphenationZone: number\r
\r
  /**\r
   * Paragraph justification.\r
   */\r
  justification: Justification\r
\r
  /**\r
   * The Kinsoku Shori name.\r
   */\r
  kinsoku: string\r
\r
  /**\r
   * The preferred Kinsoku order.\r
   */\r
  kinsokuOrder: KinsokuOrderEnum\r
\r
  /**\r
   * Is KurikaeshiMojiShori enabled?\r
   */\r
  kurikaeshiMojiShori: boolean\r
\r
  /**\r
   * Auto leading type.\r
   */\r
  leadingType: AutoLeadingType\r
\r
  /**\r
   * Left indent of margin expressed in points.\r
   */\r
  leftIndent: number\r
\r
  /**\r
   * Maximum number of consecutive hypenated lines.\r
   */\r
  maximumConsecutiveHyphens: number\r
\r
  /**\r
   * Maximum glyph scaling expressed as a percentage.\r
   */\r
  maximumGlyphScaling: number\r
\r
  /**\r
   * Maximum letter spacing expressed as a percentage.\r
   */\r
  maximumLetterSpacing: number\r
\r
  /**\r
   * Maximum word spacing expressed as a percentage.\r
   */\r
  maximumWordSpacing: number\r
\r
  /**\r
   * Minimum number of characters after a hyphen.\r
   */\r
  minimumAfterHyphen: number\r
\r
  /**\r
   * Minimum number of characters before a hyphen.\r
   */\r
  minimumBeforeHyphen: number\r
\r
  /**\r
   * Minimum glyph scaling expressed as a percentage.\r
   */\r
  minimumGlyphScaling: number\r
\r
  /**\r
   * Minimum hyphenated word size.\r
   */\r
  minimumHyphenatedWordSize: number\r
\r
  /**\r
   * Minimum letter spacing expressed as a percentage.\r
   */\r
  minimumLetterSpacing: number\r
\r
  /**\r
   * Minimum word spacing expressed as a percentage.\r
   */\r
  minimumWordSpacing: number\r
\r
  /**\r
   * The Mojikumi name.\r
   */\r
  mojikumi: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Right indent of margin expressed in points.\r
   */\r
  rightIndent: number\r
\r
  /**\r
   * Is Roman hanging punctuation enabled?\r
   */\r
  romanHanging: boolean\r
\r
  /**\r
   * Single word justification.\r
   */\r
  singleWordJustification: Justification\r
\r
  /**\r
   * Spacing after paragraph in points.\r
   */\r
  spaceAfter: number\r
\r
  /**\r
   * Spacing before paragraph in points.\r
   */\r
  spaceBefore: number\r
\r
  /**\r
   * Tab stop settings.\r
   */\r
  tabStops: TabStopInfo[]\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
}\r
\r
/**\r
 * Options which are applied when opening or placing a Photoshop file.\r
 */\r
declare class OpenOptionsPhotoshop {\r
  /**\r
   * Should use the specified LayerComp.\r
   */\r
  layerComp: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Should hidden layers be preserved when the document is converted (default: false)\r
   */\r
  preserveHiddenLayers: boolean\r
\r
  /**\r
   * Should image maps be preserved when the document is converted (default: true)\r
   */\r
  preserveImageMaps: boolean\r
\r
  /**\r
   * Should layers be Preserve when the document is converted (default: true)\r
   */\r
  preserveLayers: boolean\r
\r
  /**\r
   * Should slices be preserved when the document is converted (default: true)\r
   */\r
  preserveSlices: boolean\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
}\r
\r
/**\r
 * Options which may be supplied when opening a PDF file.\r
 */\r
declare class OpenOptionsPDF {\r
  /**\r
   * What box should be used when placing a multipage document (default: PDF media box)\r
   */\r
  pDFCropToBox: PDFBoxType\r
\r
  /**\r
   * What page should be used when opening a multipage document (default: 1)\r
   */\r
  pageToOpen: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
}\r
\r
/**\r
 * Options which may be supplied when opening a AutoCAD file.\r
 */\r
declare class OpenOptionsAutoCAD {\r
  /**\r
   * To center the created artwork on the artboard (default: true)\r
   */\r
  centerArtwork: boolean\r
\r
  /**\r
   * How to scale the AutoCAD drawing on import (default: Fit Artboard)\r
   */\r
  globalScaleOption: AutoCADGlobalScaleOption\r
\r
  /**\r
   * Percentage scaling to apply globally on the AutoCAD drawing (default: 1.0)\r
   */\r
  globalScalePercent: number\r
\r
  /**\r
   * To merge the layers of the artwork (default: false)\r
   */\r
  mergeLayers: boolean\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * To scale lineweights by the same amount as rest of the drawing (default: false)\r
   */\r
  scaleLineweights: boolean\r
\r
  /**\r
   * Name of layout in the AutoCAD drawing to import.\r
   */\r
  selectedLayoutName: string\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Units to which to map (default: Millimeters)\r
   */\r
  unit: AutoCADUnit\r
\r
  /**\r
   * Ratio by which to scale while mapping the units (default: 1.0)\r
   */\r
  unitScaleRatio: number\r
}\r
\r
/**\r
 * Tracing options that guide the tracing process.\r
 */\r
declare class TracingOptions {\r
  /**\r
   * ColorFidelity when TracingColorTypeValue is TracingFullColor.\r
   */\r
  colorFidelity: number\r
\r
  /**\r
   * The color group name used for tracing. Use 'All' or any color group name available in color Palette (library).\r
   */\r
  colorGroup: string\r
\r
  /**\r
   * Corner fidelity for tracing.\r
   */\r
  cornerFidelity: number\r
\r
  /**\r
   * Tracing with fills. Fills, Strokes or both must be on.\r
   */\r
  fills: boolean\r
\r
  /**\r
   * The gray levels for a grayscale mode tracing..\r
   */\r
  grayLevels: number\r
\r
  /**\r
   * Controls whether to ignore white fill color. Works only if TracingMethod is TracingMethodAbutting and mode is Black and white.\r
   */\r
  ignoreWhite: boolean\r
\r
  /**\r
   * Maximum stroke weight (stroke only).\r
   */\r
  maxStrokeWeight: number\r
\r
  /**\r
   * Specifies minimum area of pixels to be vectorized.\r
   */\r
  noiseFidelity: number\r
\r
  /**\r
   * The color palette (Library) name used for tracing. Use 'Document Library' or any other imported library name.\r
   */\r
  palette: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Path fidelity for tracing.\r
   */\r
  pathFidelity: number\r
\r
  /**\r
   * The name of the preset in use. Read-only.\r
   */\r
  readonly preset: string\r
\r
  /**\r
   * Controls whether to snap curve to lines.\r
   */\r
  snapCurveToLines: boolean\r
\r
  /**\r
   * Tracing with strokes. Fills, Strokes or both must be on.\r
   */\r
  strokes: boolean\r
\r
  /**\r
   * The threshold value for a black and white mode tracing.\r
   */\r
  threshold: number\r
\r
  /**\r
   * Color Type used for tracing, TracingLimitedColor or TracingFullColor .\r
   */\r
  tracingColorTypeValue: TracingColorType\r
\r
  /**\r
   * Maximum number of colors allowed for tracing when TracingColorTypeValue is TracingLimitedColor.\r
   */\r
  tracingColors: number\r
\r
  /**\r
   * Method for tracing, either abutting or adjoining paths.\r
   */\r
  tracingMethod: TracingMethodType\r
\r
  /**\r
   * The tracing mode: color, gray, black and white.\r
   */\r
  tracingMode: TracingModeType\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The visualization mode.\r
   */\r
  viewMode: ViewType\r
\r
  /**\r
   * Load options from preset.\r
   * @param presetName The name of the preset.\r
   */\r
  loadFromPreset(presetName: string): boolean\r
\r
  /**\r
   * Store options to a preset kAiVectorizeSuite. Will overwrite an existing (unlocked) preset if names match.\r
   * @param presetName The name of the preset.\r
   */\r
  storeToPreset(presetName: string): boolean\r
}\r
\r
/**\r
 * A tracing object.\r
 */\r
declare class TracingObject {\r
  /**\r
   * The number of anchors in the tracing result.\r
   */\r
  readonly anchorCount: number\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * The number of paths in the tracing result.\r
   */\r
  readonly pathCount: number\r
\r
  /**\r
   * The source art used when creating a new tracing object.\r
   */\r
  readonly sourceArt: PageItem\r
\r
  /**\r
   * The options used when tracing the artwork.\r
   */\r
  readonly tracingOptions: TracingOptions\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * The number of colors used in the tracing result.\r
   */\r
  readonly usedColorCount: number\r
\r
  /**\r
   * Expand the tracing to paths. Deletes this tracing object.\r
   * @param viewed Expand as viewed with the raster and vector view modes.\r
   */\r
  expandTracing(viewed?: boolean): GroupItem\r
\r
  /**\r
   * Release the source artwork for the tracing object. Deletes this tracing object.\r
   */\r
  releaseTracing(): PageItem\r
}\r
\r
/**\r
 * An artboard object.\r
 */\r
declare class Artboard {\r
  /**\r
   * Size and position of artboard.\r
   */\r
  artboardRect: Rect\r
\r
  /**\r
   * The name of the artboard.\r
   */\r
  name: string\r
\r
  /**\r
   * The object's container.\r
   */\r
  readonly parent: object\r
\r
  /**\r
   * Ruler origin of artboard.It is relative to left-bottom corner of the Artboard.\r
   */\r
  rulerOrigin: Point | [number, number]\r
\r
  /**\r
   * Pixel aspect ratio, used in ruler visualization if the units are pixels.\r
   */\r
  rulerPAR: number\r
\r
  /**\r
   * Show center mark.\r
   */\r
  showCenter: boolean\r
\r
  /**\r
   * Show cross hairs.\r
   */\r
  showCrossHairs: boolean\r
\r
  /**\r
   * Show title and action safe areas (for video)\r
   */\r
  showSafeAreas: boolean\r
\r
  /**\r
   * The class name of the object.\r
   */\r
  readonly typename: string\r
\r
  /**\r
   * Deletes this object.\r
   */\r
  remove(): void\r
\r
  /**\r
   * Deletes all elements.\r
   */\r
  removeAll(): void\r
}\r
\r
/**\r
 * Describes a rectangle. This class is also a four-element collection.\r
 *\r
 * Format: left, top, right, bottom.\r
 * Width and height can be computed using \`[r[2] - r[0], r[1] - r[3]]\`.\r
 *\r
 * **Note:** y axis is flipped. Upper means negative number, lower means positive.\r
 *\r
 */\r
type Rect = [number, number, number, number]\r
`})]}),"December1220241"),Z=m(()=>t(y,{children:[r(g,{children:r(f,{children:"[13 December 2024](2024-12-13)"})}),r(b,{children:"[13 December 2024](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#13-december-2024)"}),t(n,{at:"2024-12-13T01:23:33.921301Z",children:[r(o,{children:"b48dbcda-c982-4c87-afe5-c0be328ab124"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Okay so small change. I creased a base class for PageItem properties:"})]}),t(n,{at:"2024-12-13T01:23:52.128864Z",children:[r(o,{children:"c2809617-6b18-4d4a-8c16-5c309f08f9f8"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll create the setter classes that extend from a base PageItem properties class. Could you share the base PageItem properties class you created so I can make sure the subclasses properly extend from it?"})]}),t(n,{at:"2024-12-13T01:26:24.976329Z",children:[r(o,{children:"9809a0b4-bd78-437e-8a1f-aeb277629532"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Here it is: class SetPageItemProperties<TQueryItem extends QueryItem> extends SetProperties<PageItemQuery> { protected _pageItemQuery(): TQueryItem { return this._query as any; } URL(value: string): this { this._query.item().URL = value; return this; } artworkKnockout(value: KnockoutState): this { this._query.item().artworkKnockout = value; return this; } blendingMode(value: BlendModes): this { this._query.item().blendingMode = value; return this; } height(value: number): this { this._query.item().height = value; return this; } hidden(value: boolean): this { this._query.item().hidden = value; return this; } isIsolated(value: boolean): this { this._query.item().isIsolated = value; return this; } left(value: number): this { this._query.item().left = value; return this; } locked(value: boolean): this { this._query.item().locked = value; return this; } note(value: string): this { this._query.item().note = value; return this; } opacity(value: number): this { this._query.item().opacity = value; return this; } pixelAligned(value: boolean): this { this._query.item().pixelAligned = value; return this; } position(value: Point | [number, number]): this { this._query.item().position = value; return this; } selected(value: boolean): this { this._query.item().selected = value; return this; } sliced(value: boolean): this { this._query.item().sliced = value; return this; } top(value: number): this { this._query.item().top = value; return this; } width(value: number): this { this._query.item().width = value; return this; } wrapInside(value: boolean): this { this._query.item().wrapInside = value; return this; } wrapOffset(value: number): this { this._query.item().wrapOffset = value; return this; } wrapped(value: boolean): this { this._query.item().wrapped = value; return this; } }"}),r(e,{children:"Implementing it looks like this: class SetPathItemProperties extends SetPageItemProperties<PathItemQuery> { clipping(value: boolean): this { this._pageItemQuery().item().clipping = value; return this; } closed(value: boolean): this { this._pageItemQuery().item().closed = value; return this; } evenodd(value: boolean): this { this._pageItemQuery().item().evenodd = value; return this; } fillColor(value: Color): this { this._pageItemQuery().item().fillColor = value; return this; } fillOverprint(value: boolean): this { this._pageItemQuery().item().fillOverprint = value; return this; } filled(value: boolean): this { this._pageItemQuery().item().filled = value; return this; } guides(value: boolean): this { this._pageItemQuery().item().guides = value; return this; } polarity(value: PolarityValues): this { this._pageItemQuery().item().polarity = value; return this; } resolution(value: number): this { this._pageItemQuery().item().resolution = value; return this; } strokeCap(value: StrokeCap): this { this._pageItemQuery().item().strokeCap = value; return this; } strokeColor(value: Color): this { this._pageItemQuery().item().strokeColor = value; return this; } strokeDashOffset(value: number): this { this._pageItemQuery().item().strokeDashOffset = value; return this; } strokeDashes(value: number[]): this { this._pageItemQuery().item().strokeDashes = value; return this; } strokeJoin(value: StrokeJoin): this { this._pageItemQuery().item().strokeJoin = value; return this; } strokeMiterLimit(value: number): this { this._pageItemQuery().item().strokeMiterLimit = value; return this; } strokeOverprint(value: boolean): this { this._pageItemQuery().item().strokeOverprint = value; return this; } strokeWidth(value: number): this { this._pageItemQuery().item().strokeWidth = value; return this; } stroked(value: boolean): this { this._pageItemQuery().item().stroked = value; return this; } query(): PathItemQuery { return this._query as any; } }"}),r(e,{children:"Note that when you subclass SetProperties you use this._query, but when you subclass SetPageItemProperties<TQuery> you use this._pageItemQuery()"}),r(e,{children:"And each class has a property that returns the exact query type:"}),r(e,{children:"query(): PathItemQuery { return this._query as any; }"}),r(e,{children:"I can't do that in the base classes because it would have the wrong type for subclasses of SetPageItemProperties."}),r(e,{children:"Does this make sense?"})]}),t(n,{at:"2024-12-13T01:26:35.770026Z",children:[r(o,{children:"af990a0e-98a3-4abe-b36f-d9f95d465543"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"Yes, I understand the pattern now:"}),t(e,{children:[r(s,{ordered:!0}),t(a,{children:["Base class ",t(l,{children:[r(c,{}),"SetPageItemProperties<TQueryItem>"]})," provides all PageItem properties"]}),t(a,{children:["When extending ",t(l,{children:[r(c,{}),"SetPageItemProperties<TQueryItem>"]}),", we use ",t(l,{children:[r(c,{}),"this._pageItemQuery()"]})," to access the item"]}),t(a,{children:["Each subclass needs its own typed ",t(l,{children:[r(c,{}),"query()"]})," method"]}),t(a,{children:["Properties are accessed via ",t(l,{children:[r(c,{}),"this._pageItemQuery().item()"]})]})]}),r(e,{children:"Let me recreate those setter classes with this pattern:"}),r(e,{children:'<antArtifact identifier="set-item-properties-v2" type="application/vnd.ant.code" language="typescript" title="Property Setter Classes Following New Pattern"> class SetCompoundPathItemProperties extends SetPageItemProperties<CompoundPathItemQuery> { query(): CompoundPathItemQuery { return this._query as any; } // No additional settable properties }'}),r(e,{children:"class SetRasterItemProperties extends SetPageItemProperties<RasterItemQuery> { query(): RasterItemQuery { return this._query as any; } boundingBox(value: Rect): this { this._pageItemQuery().item().boundingBox = value; return this; } embedded(value: boolean): this { this._pageItemQuery().item().embedded = value; return this; } matrix(value: Matrix): this { this._pageItemQuery().item().matrix = value; return this; } overprint(value: boolean): this { this._pageItemQuery().item().overprint = value; return this; } }"}),r(e,{children:"class SetPlacedItemProperties extends SetPageItemProperties<PlacedItemQuery> { query(): PlacedItemQuery { return this._query as any; } file(value: File): this { this._pageItemQuery().item().file = value; return this; } matrix(value: Matrix): this { this._pageItemQuery().item().matrix = value; return this; } }"}),r(e,{children:"class SetSymbolItemProperties extends SetPageItemProperties<SymbolItemQuery> { query(): SymbolItemQuery { return this._query as any; } symbol(value: Symbol): this { this._pageItemQuery().item().symbol = value; return this; } }"}),r(e,{children:"class SetMeshItemProperties extends SetPageItemProperties<MeshItemQuery> { query(): MeshItemQuery { return this._query as any; } // No additional settable properties } </antArtifact>"}),r(e,{children:"Each class now:"}),t(e,{children:[r(s,{ordered:!0}),t(a,{children:["Extends ",t(l,{children:[r(c,{}),"SetPageItemProperties"]})," with its specific query type"]}),t(a,{children:["Provides a typed ",t(l,{children:[r(c,{}),"query()"]})," method"]}),t(a,{children:["Uses ",t(l,{children:[r(c,{}),"this._pageItemQuery().item()"]})," to access properties"]}),r(a,{children:"Only adds methods for its own specific settable properties"})]}),r(e,{children:"Is this what you were looking for?"})]}),t(n,{at:"2024-12-13T01:27:55.270880Z",children:[r(o,{children:"0d295f9c-2854-4f20-9b9a-d1c472d0a0e5"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Yes perfect. Just put the query() property on the bottom"}),r(e,{children:"Next up, can you create the subclasses for these query types, remembering to use the right base class depending on whether it's derived from PageItem?"}),r(e,{children:"class PluginItemQuery extends Queryable<PluginItem, QueryItem> { constructor(pluginItem: PluginItem) { super(pluginItem); } }"}),r(e,{children:"class GraphItemQuery extends Queryable<GraphItem, QueryItem> { constructor(graphItem: GraphItem) { super(graphItem); } }"}),r(e,{children:"class LegacyTextItemQuery extends Queryable<LegacyTextItem, QueryItem> { constructor(legacyTextItem: LegacyTextItem) { super(legacyTextItem); } }"}),r(e,{children:"class NonNativeItemQuery extends Queryable<NonNativeItem, QueryItem> { constructor(nonNativeItem: NonNativeItem) { super(nonNativeItem); } }"}),r(e,{children:"class SwatchQuery extends Queryable<Swatch, QueryItem> { constructor(swatch: Swatch) { super(swatch); } }"}),r(e,{children:"class BrushQuery extends Queryable<Brush, QueryItem> { constructor(brush: Brush) { super(brush); } }"}),r(e,{children:"class TagQuery extends Queryable<Tag, QueryItem> { constructor(tag: Tag) { super(tag); } }"}),r(e,{children:"class SymbolQuery extends Queryable<Symbol, QueryItem> { constructor(symbol: Symbol) { super(symbol); } }"})]}),t(n,{at:"2024-12-13T01:28:06.848556Z",children:[r(o,{children:"9e8b9a8a-b216-49cb-ae42-52e40bfbc2e9"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll analyze each type to determine if it inherits from PageItem and create the appropriate setter classes."}),r(e,{children:"<antThinking>Need to check each class in index.d.ts to determine inheritance and find settable properties. PluginItem, GraphItem, LegacyTextItem, NonNativeItem extend PageItem, while Swatch, Brush, Tag, Symbol are standalone.</antThinking>"}),r(e,{children:'<antArtifact identifier="set-mixed-properties" type="application/vnd.ant.code" language="typescript" title="Property Setter Classes For Mixed Types"> // Items extending PageItem class SetPluginItemProperties extends SetPageItemProperties<PluginItemQuery> { // No additional settable properties query(): PluginItemQuery { return this._query as any; } }'}),r(e,{children:"class SetGraphItemProperties extends SetPageItemProperties<GraphItemQuery> { // Only settable property from GraphItem contentVariable(value: any): this { this._pageItemQuery().item().contentVariable = value; return this; } query(): GraphItemQuery { return this._query as any; } }"}),r(e,{children:"class SetLegacyTextItemProperties extends SetPageItemProperties<LegacyTextItemQuery> { // No additional settable properties query(): LegacyTextItemQuery { return this._query as any; } }"}),r(e,{children:"class SetNonNativeItemProperties extends SetPageItemProperties<NonNativeItemQuery> { // No additional settable properties query(): NonNativeItemQuery { return this._query as any; } }"}),r(e,{children:"// Standalone items (extend SetProperties directly) class SetSwatchProperties extends SetProperties<SwatchQuery> { color(value: Color): this { this.query().item().color = value; return this; } query(): SwatchQuery { return this._query as any; } }"}),r(e,{children:"class SetBrushProperties extends SetProperties<BrushQuery> { name(value: string): this { this.query().item().name = value; return this; } query(): BrushQuery { return this._query as any; } }"}),r(e,{children:"class SetTagProperties extends SetProperties<TagQuery> { name(value: string): this { this.query().item().name = value; return this; } value(value: string): this { this.query().item().value = value; return this; } query(): TagQuery { return this._query as any; } }"}),r(e,{children:"class SetSymbolProperties extends SetProperties<SymbolQuery> { name(value: string): this { this.query().item().name = value; return this; } query(): SymbolQuery { return this._query as any; } } </antArtifact>"}),r(e,{children:"I've organized them into two groups:"}),t(e,{children:[r(s,{ordered:!0}),t(a,{children:["Those extending ",t(l,{children:[r(c,{}),"SetPageItemProperties"]})," because their types inherit from PageItem:"]}),t(e,{children:[r(s,{}),r(a,{children:"PluginItem"}),r(a,{children:"GraphItem"}),r(a,{children:"LegacyTextItem"}),r(a,{children:"NonNativeItem"})]}),t(a,{children:["Those extending ",t(l,{children:[r(c,{}),"SetProperties"]})," directly because they're standalone types:"]}),t(e,{children:[r(s,{}),r(a,{children:"Swatch"}),r(a,{children:"Brush"}),r(a,{children:"Tag"}),r(a,{children:"Symbol"})]})]}),r(e,{children:"Each class includes its specific settable properties and a typed query() method at the bottom. Let me know if you need any adjustments or have questions!"})]}),t(n,{at:"2024-12-13T01:30:39.273784Z",children:[r(o,{children:"08dffdd1-3df9-46e9-8395-6a333aa12b7c"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"I'm uploading index.d.ts so it's fresh in your mind. And then here are the properties on the base classes again so you don't have to repeat:"}),r(e,{children:"class SetProperties<TQueryItem extends QueryItem> { protected _query: TQueryItem;"}),r(e,{children:'constructor(query: TQueryItem) { if (query === undefined) throw "queryItem undefined"; this._query = query; }'}),r(e,{children:"name(name: string): this { this._query.name(name); return this; } location(index: number): this { this._query.moveTo(index); return this; } locationToFront(): this { this._query.moveTo(0); return this; } locationToBack(): this { this._query.moveTo(-1); return this; } locationBefore(referenceItem: QueryItem) { this._query.move(referenceItem, ElementPlacement.PLACEBEFORE); } locationAfter(referenceItem: QueryItem) { this._query.move(referenceItem, ElementPlacement.PLACEAFTER); } }"}),r(e,{children:"class SetPageItemProperties<TQueryItem extends QueryItem> extends SetProperties<PageItemQuery> { protected _pageItemQuery(): TQueryItem { return this._query as any; } URL(value: string): this { this._query.item().URL = value; return this; } artworkKnockout(value: KnockoutState): this { this._query.item().artworkKnockout = value; return this; } blendingMode(value: BlendModes): this { this._query.item().blendingMode = value; return this; } height(value: number): this { this._query.item().height = value; return this; } hidden(value: boolean): this { this._query.item().hidden = value; return this; } isIsolated(value: boolean): this { this._query.item().isIsolated = value; return this; } left(value: number): this { this._query.item().left = value; return this; } locked(value: boolean): this { this._query.item().locked = value; return this; } note(value: string): this { this._query.item().note = value; return this; } opacity(value: number): this { this._query.item().opacity = value; return this; } pixelAligned(value: boolean): this { this._query.item().pixelAligned = value; return this; } position(value: Point | [number, number]): this { this._query.item().position = value; return this; } selected(value: boolean): this { this._query.item().selected = value; return this; } sliced(value: boolean): this { this._query.item().sliced = value; return this; } top(value: number): this { this._query.item().top = value; return this; } width(value: number): this { this._query.item().width = value; return this; } wrapInside(value: boolean): this { this._query.item().wrapInside = value; return this; } wrapOffset(value: number): this { this._query.item().wrapOffset = value; return this; } wrapped(value: boolean): this { this._query.item().wrapped = value; return this; } }"}),r(e,{children:"Can you retry these? They don't need name - for instance - but maybe they have other settable properties too. Be comprehensive:"}),r(e,{children:"class PluginItemQuery extends Queryable<PluginItem, QueryItem> { constructor(pluginItem: PluginItem) { super(pluginItem); } }"}),r(e,{children:"class GraphItemQuery extends Queryable<GraphItem, QueryItem> { constructor(graphItem: GraphItem) { super(graphItem); } }"}),r(e,{children:"class LegacyTextItemQuery extends Queryable<LegacyTextItem, QueryItem> { constructor(legacyTextItem: LegacyTextItem) { super(legacyTextItem); } }"}),r(e,{children:"class NonNativeItemQuery extends Queryable<NonNativeItem, QueryItem> { constructor(nonNativeItem: NonNativeItem) { super(nonNativeItem); } }"}),r(e,{children:"class SwatchQuery extends Queryable<Swatch, QueryItem> { constructor(swatch: Swatch) { super(swatch); } }"}),r(e,{children:"class BrushQuery extends Queryable<Brush, QueryItem> { constructor(brush: Brush) { super(brush); } }"}),r(e,{children:"class TagQuery extends Queryable<Tag, QueryItem> { constructor(tag: Tag) { super(tag); } }"}),r(e,{children:"class SymbolQuery extends Queryable<Symbol, QueryItem> { constructor(symbol: Symbol) { super(symbol); } }"})]}),t(n,{at:"2024-12-13T01:30:52.797467Z",children:[r(o,{children:"14bf5cc7-d247-4260-992c-f5211f15f526"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll analyze each type again in index.d.ts with fresh eyes, looking at just their own settable properties since base class properties are handled."}),r(e,{children:"<antThinking>Need to carefully check each class in index.d.ts for settable (non-readonly) properties, excluding any that are already in the base classes.</antThinking>"}),r(e,{children:'<antArtifact identifier="set-mixed-properties-revised" type="application/vnd.ant.code" language="typescript" title="Revised Property Setter Classes For Mixed Types"> // For PageItem inheritors class SetPluginItemProperties extends SetPageItemProperties<PluginItemQuery> { // No additional settable properties beyond PageItem query(): PluginItemQuery { return this._query as any; } }'}),r(e,{children:"class SetGraphItemProperties extends SetPageItemProperties<GraphItemQuery> { contentVariable(value: any): this { this._pageItemQuery().item().contentVariable = value; return this; } query(): GraphItemQuery { return this._query as any; } }"}),r(e,{children:"class SetLegacyTextItemProperties extends SetPageItemProperties<LegacyTextItemQuery> { // No additional settable properties beyond PageItem query(): LegacyTextItemQuery { return this._query as any; } }"}),r(e,{children:"class SetNonNativeItemProperties extends SetPageItemProperties<NonNativeItemQuery> { // No additional settable properties beyond PageItem query(): NonNativeItemQuery { return this._query as any; } }"}),r(e,{children:"// For standalone types class SetSwatchProperties extends SetProperties<SwatchQuery> { color(value: Color): this { this.query().item().color = value; return this; } name(value: string): this { this.query().item().name = value; return this; } query(): SwatchQuery { return this._query as any; } }"}),r(e,{children:"class SetBrushProperties extends SetProperties<BrushQuery> { name(value: string): this { this.query().item().name = value; return this; } query(): BrushQuery { return this._query as any; } }"}),r(e,{children:"class SetTagProperties extends SetProperties<TagQuery> { name(value: string): this { this.query().item().name = value; return this; } value(value: string): this { this.query().item().value = value; return this; } query(): TagQuery { return this._query as any; } }"}),r(e,{children:"class SetSymbolProperties extends SetProperties<SymbolQuery> { name(value: string): this { this.query().item().name = value; return this; } query(): SymbolQuery { return this._query as any; } } </antArtifact>"}),r(e,{children:"Key changes from my previous version:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"First four classes correctly extend SetPageItemProperties because their types inherit from PageItem, and only include properties unique to them"}),r(a,{children:"Last four are direct SetProperties extensions, but I've made sure to include ALL their settable properties"}),r(a,{children:"Removed name property where it was duplicating the base SetProperties functionality"})]}),r(e,{children:"I followed the pattern strictly:"}),t(e,{children:[r(s,{}),r(a,{children:"For PageItem subclasses: use this._pageItemQuery().item()"}),r(a,{children:"For standalone types: use this.query().item()"}),r(a,{children:"All classes include a typed query() method at bottom"})]}),r(e,{children:"Let me know if you spot any properties I missed from index.d.ts!"})]}),t(n,{at:"2024-12-13T01:33:22.886774Z",children:[r(o,{children:"25709e71-47c9-42ea-9cdb-a988008d0553"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Here are the rest for you to subclass. Think you can do it in one go without missing any settable properties? Remember that name() is already on the base class:"}),r(e,{children:"class TextRangeQuery extends Queryable<TextRange, QueryItem> { constructor(textRange: TextRange) { super(textRange); } }"}),r(e,{children:"class InsertionPointQuery extends Queryable<InsertionPoint, QueryItem> { constructor(insertionPoint: InsertionPoint) { super(insertionPoint); } }"}),r(e,{children:"class ParagraphStyleQuery extends Queryable<ParagraphStyle, QueryItem> { constructor(paragraphStyle: ParagraphStyle) { super(paragraphStyle); } }"}),r(e,{children:"class PatternQuery extends Queryable<Pattern, QueryItem> { constructor(pattern: Pattern) { super(pattern); } }"}),r(e,{children:"class SpotQuery extends Queryable<Spot, QueryItem> { constructor(spot: Spot) { super(spot); } }"}),r(e,{children:"class CharacterStyleQuery extends Queryable<CharacterStyle, QueryItem> { constructor(characterStyle: CharacterStyle) { super(characterStyle); } }"}),r(e,{children:"class ArtStyleQuery extends Queryable<ArtStyle, QueryItem> { constructor(artStyle: ArtStyle) { super(artStyle); } }"}),r(e,{children:"class VariableQuery extends Queryable<Variable, QueryItem> { constructor(variable: Variable) { super(variable); } }"}),r(e,{children:"class DataSetQuery extends Queryable<DataSet, QueryItem> { constructor(dataSet: DataSet) { super(dataSet); } }"}),r(e,{children:"class ViewQuery extends Queryable<View, QueryItem> { constructor(view: View) { super(view); } }"}),r(e,{children:"class PathPointQuery extends Queryable<PathPoint, QueryItem> { constructor(pathPoint: PathPoint) { super(pathPoint); } }"}),r(e,{children:"class GradientStopQuery extends Queryable<GradientStop, QueryItem> { constructor(gradientStop: GradientStop) { super(gradientStop); } }"})]}),t(n,{at:"2024-12-13T01:33:38.570848Z",children:[r(o,{children:"df673bbb-68a9-416c-bb24-e6f4f7a17282"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll analyze each type in index.d.ts for their settable properties, omitting name() since it's in the base class."}),r(e,{children:"<antThinking>Need to create SetProperty classes for all these types, checking carefully for settable (non-readonly) properties in index.d.ts</antThinking>"}),r(e,{children:'<antArtifact identifier="set-properties-comprehensive" type="application/vnd.ant.code" language="typescript" title="Property Setter Classes"> class SetTextRangeProperties extends SetProperties<TextRangeQuery> { characterOffset(value: number): this { this.query().item().characterOffset = value; return this; } contents(value: string): this { this.query().item().contents = value; return this; } kerning(value: number): this { this.query().item().kerning = value; return this; } length(value: number): this { this.query().item().length = value; return this; } query(): TextRangeQuery { return this._query as any; } }'}),r(e,{children:"class SetInsertionPointProperties extends SetProperties<InsertionPointQuery> { // No settable properties query(): InsertionPointQuery { return this._query as any; } }"}),r(e,{children:"class SetParagraphStyleProperties extends SetProperties<ParagraphStyleQuery> { // name already handled in base class query(): ParagraphStyleQuery { return this._query as any; } }"}),r(e,{children:"class SetPatternProperties extends SetProperties<PatternQuery> { // name already handled in base class query(): PatternQuery { return this._query as any; } }"}),r(e,{children:"class SetSpotProperties extends SetProperties<SpotQuery> { color(value: Color): this { this.query().item().color = value; return this; } colorType(value: ColorModel): this { this.query().item().colorType = value; return this; } query(): SpotQuery { return this._query as any; } }"}),r(e,{children:"class SetCharacterStyleProperties extends SetProperties<CharacterStyleQuery> { // name already handled in base class query(): CharacterStyleQuery { return this._query as any; } }"}),r(e,{children:"class SetArtStyleProperties extends SetProperties<ArtStyleQuery> { // name already handled in base class query(): ArtStyleQuery { return this._query as any; } }"}),r(e,{children:"class SetVariableProperties extends SetProperties<VariableQuery> { kind(value: VariableKind): this { this.query().item().kind = value; return this; } query(): VariableQuery { return this._query as any; } }"}),r(e,{children:"class SetDataSetProperties extends SetProperties<DataSetQuery> { // name already handled in base class query(): DataSetQuery { return this._query as any; } }"}),r(e,{children:"class SetViewProperties extends SetProperties<ViewQuery> { centerPoint(value: Point | [number, number]): this { this.query().item().centerPoint = value; return this; } screenMode(value: ScreenMode): this { this.query().item().screenMode = value; return this; } zoom(value: number): this { this.query().item().zoom = value; return this; } query(): ViewQuery { return this._query as any; } }"}),r(e,{children:"class SetPathPointProperties extends SetProperties<PathPointQuery> { anchor(value: Point | [number, number]): this { this.query().item().anchor = value; return this; } leftDirection(value: Point | [number, number]): this { this.query().item().leftDirection = value; return this; } pointType(value: PointType): this { this.query().item().pointType = value; return this; } rightDirection(value: Point | [number, number]): this { this.query().item().rightDirection = value; return this; } selected(value: PathPointSelection): this { this.query().item().selected = value; return this; } query(): PathPointQuery { return this._query as any; } }"}),r(e,{children:"class SetGradientStopProperties extends SetProperties<GradientStopQuery> { color(value: Color): this { this.query().item().color = value; return this; } midPoint(value: number): this { this.query().item().midPoint = value; return this; } opacity(value: number): this { this.query().item().opacity = value; return this; } rampPoint(value: number): this { this.query().item().rampPoint = value; return this; } query(): GradientStopQuery { return this._query as any; } } </antArtifact>"}),r(e,{children:"Each class:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Extends SetProperties with its specific query type"}),r(a,{children:"Includes all settable properties found in index.d.ts"}),r(a,{children:"Omits name() since it's in the base class"}),r(a,{children:"Uses this.query().item() to access properties"}),r(a,{children:"Has query() method at bottom returning correct type"})]}),r(e,{children:"Let me know if you spot any properties I missed from index.d.ts!"})]}),t(n,{at:"2024-12-13T01:48:10.973123Z",children:[r(o,{children:"a5aebef3-3fe6-437f-9b83-d4f9c8fd26da"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:'Do you see how I put a "set" property at the top? class GradientQuery extends Queryable<Gradient, GradientStopQuery> { private _gradientStops: GradientQuery | undefined;'}),r(e,{children:"set(): GradientQuery { return new GradientQuery(this as any); }"}),r(e,{children:'constructor(gradient: Gradient) { super(gradient, "gradientStops"); }'}),r(e,{children:'gradientStops() { if (this.collectionType === "gradientStops") return this; if (this._gradientStops) return this._gradientStops; this._gradientStops = new GradientQuery(this._item); return this._gradientStops; }'}),r(e,{children:"createGradientStops(): GradientStopQuery { return this._create(i => i.item().gradientStops, gradientStops => q(gradientStops.add())); } }"}),r(e,{children:"Can you follow that pattern and rewrote all of these classes to have that one-line set property above the constructor without any space between the class declaration, the set property and the constructor. You can follow the first as an example for formatting:"}),r(e,{children:"class PageItemQuery extends Queryable<PageItem, QueryItem> { set(): SetPageItemProperties { return new SetPageItemProperties(this as any); } constructor(pageItem: PageItem) { super(pageItem); } }"}),r(e,{children:"class CompoundPathItemQuery extends Queryable<CompoundPathItem, QueryItem> { constructor(compoundPathItem: CompoundPathItem) { super(compoundPathItem); } }"}),r(e,{children:"class RasterItemQuery extends Queryable<RasterItem, QueryItem> { constructor(rasterItem: RasterItem) { super(rasterItem); } }"}),r(e,{children:"class PlacedItemQuery extends Queryable<PlacedItem, QueryItem> { constructor(placedItem: PlacedItem) { super(placedItem); } }"}),r(e,{children:"class SymbolItemQuery extends Queryable<SymbolItem, QueryItem> { constructor(symbolItem: SymbolItem) { super(symbolItem); } }"}),r(e,{children:"class MeshItemQuery extends Queryable<MeshItem, QueryItem> { constructor(meshItem: MeshItem) { super(meshItem); } }"}),r(e,{children:"class PluginItemQuery extends Queryable<PluginItem, QueryItem> { constructor(pluginItem: PluginItem) { super(pluginItem); } }"}),r(e,{children:"class GraphItemQuery extends Queryable<GraphItem, QueryItem> { constructor(graphItem: GraphItem) { super(graphItem); } }"}),r(e,{children:"class LegacyTextItemQuery extends Queryable<LegacyTextItem, QueryItem> { constructor(legacyTextItem: LegacyTextItem) { super(legacyTextItem); } }"}),r(e,{children:"class NonNativeItemQuery extends Queryable<NonNativeItem, QueryItem> { constructor(nonNativeItem: NonNativeItem) { super(nonNativeItem); } }"}),r(e,{children:"class SwatchQuery extends Queryable<Swatch, QueryItem> { constructor(swatch: Swatch) { super(swatch); } }"}),r(e,{children:"class BrushQuery extends Queryable<Brush, QueryItem> { constructor(brush: Brush) { super(brush); } }"}),r(e,{children:"class TagQuery extends Queryable<Tag, QueryItem> { constructor(tag: Tag) { super(tag); } }"}),r(e,{children:"class SymbolQuery extends Queryable<Symbol, QueryItem> { constructor(symbol: Symbol) { super(symbol); } }"}),r(e,{children:"class TextRangeQuery extends Queryable<TextRange, QueryItem> { constructor(textRange: TextRange) { super(textRange); } }"}),r(e,{children:"class InsertionPointQuery extends Queryable<InsertionPoint, QueryItem> { constructor(insertionPoint: InsertionPoint) { super(insertionPoint); } }"}),r(e,{children:"class ParagraphStyleQuery extends Queryable<ParagraphStyle, QueryItem> { constructor(paragraphStyle: ParagraphStyle) { super(paragraphStyle); } }"}),r(e,{children:"class PatternQuery extends Queryable<Pattern, QueryItem> { constructor(pattern: Pattern) { super(pattern); } }"}),r(e,{children:"class SpotQuery extends Queryable<Spot, QueryItem> { constructor(spot: Spot) { super(spot); } }"}),r(e,{children:"class CharacterStyleQuery extends Queryable<CharacterStyle, QueryItem> { constructor(characterStyle: CharacterStyle) { super(characterStyle); } }"}),r(e,{children:"class ArtStyleQuery extends Queryable<ArtStyle, QueryItem> { constructor(artStyle: ArtStyle) { super(artStyle); } }"}),r(e,{children:"class VariableQuery extends Queryable<Variable, QueryItem> { constructor(variable: Variable) { super(variable); } }"}),r(e,{children:"class DataSetQuery extends Queryable<DataSet, QueryItem> { constructor(dataSet: DataSet) { super(dataSet); } }"}),r(e,{children:"class ViewQuery extends Queryable<View, QueryItem> { constructor(view: View) { super(view); } }"}),r(e,{children:"class PathPointQuery extends Queryable<PathPoint, QueryItem> { constructor(pathPoint: PathPoint) { super(pathPoint); } }"}),r(e,{children:"class GradientStopQuery extends Queryable<GradientStop, QueryItem> { constructor(gradientStop: GradientStop) { super(gradientStop); } }"})]}),t(n,{at:"2024-12-13T01:48:45.796767Z",children:[r(o,{children:"0de8d887-d870-43b8-88ad-e1e102c21d7e"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"<antThinking>This needs an artifact that adds the set() method to each query class, following the exact format shown with PageItemQuery as the example. The setter classes were already defined earlier.</antThinking>"}),r(e,{children:'<antArtifact identifier="query-classes-with-set" type="application/vnd.ant.code" language="typescript" title="Query Classes With Set Method"> class CompoundPathItemQuery extends Queryable<CompoundPathItem, QueryItem> { set(): SetCompoundPathItemProperties { return new SetCompoundPathItemProperties(this as any); } constructor(compoundPathItem: CompoundPathItem) { super(compoundPathItem); } }'}),r(e,{children:"class RasterItemQuery extends Queryable<RasterItem, QueryItem> { set(): SetRasterItemProperties { return new SetRasterItemProperties(this as any); } constructor(rasterItem: RasterItem) { super(rasterItem); } }"}),r(e,{children:"class PlacedItemQuery extends Queryable<PlacedItem, QueryItem> { set(): SetPlacedItemProperties { return new SetPlacedItemProperties(this as any); } constructor(placedItem: PlacedItem) { super(placedItem); } }"}),r(e,{children:"class SymbolItemQuery extends Queryable<SymbolItem, QueryItem> { set(): SetSymbolItemProperties { return new SetSymbolItemProperties(this as any); } constructor(symbolItem: SymbolItem) { super(symbolItem); } }"}),r(e,{children:"class MeshItemQuery extends Queryable<MeshItem, QueryItem> { set(): SetMeshItemProperties { return new SetMeshItemProperties(this as any); } constructor(meshItem: MeshItem) { super(meshItem); } }"}),r(e,{children:"class PluginItemQuery extends Queryable<PluginItem, QueryItem> { set(): SetPluginItemProperties { return new SetPluginItemProperties(this as any); } constructor(pluginItem: PluginItem) { super(pluginItem); } }"}),r(e,{children:"class GraphItemQuery extends Queryable<GraphItem, QueryItem> { set(): SetGraphItemProperties { return new SetGraphItemProperties(this as any); } constructor(graphItem: GraphItem) { super(graphItem); } }"}),r(e,{children:"class LegacyTextItemQuery extends Queryable<LegacyTextItem, QueryItem> { set(): SetLegacyTextItemProperties { return new SetLegacyTextItemProperties(this as any); } constructor(legacyTextItem: LegacyTextItem) { super(legacyTextItem); } }"}),r(e,{children:"class NonNativeItemQuery extends Queryable<NonNativeItem, QueryItem> { set(): SetNonNativeItemProperties { return new SetNonNativeItemProperties(this as any); } constructor(nonNativeItem: NonNativeItem) { super(nonNativeItem); } }"}),r(e,{children:"class SwatchQuery extends Queryable<Swatch, QueryItem> { set(): SetSwatchProperties { return new SetSwatchProperties(this as any); } constructor(swatch: Swatch) { super(swatch); } }"}),r(e,{children:"class BrushQuery extends Queryable<Brush, QueryItem> { set(): SetBrushProperties { return new SetBrushProperties(this as any); } constructor(brush: Brush) { super(brush); } }"}),r(e,{children:"class TagQuery extends Queryable<Tag, QueryItem> { set(): SetTagProperties { return new SetTagProperties(this as any); } constructor(tag: Tag) { super(tag); } }"}),r(e,{children:"class SymbolQuery extends Queryable<Symbol, QueryItem> { set(): SetSymbolProperties { return new SetSymbolProperties(this as any); } constructor(symbol: Symbol) { super(symbol); } }"}),r(e,{children:"class TextRangeQuery extends Queryable<TextRange, QueryItem> { set(): SetTextRangeProperties { return new SetTextRangeProperties(this as any); } constructor(textRange: TextRange) { super(textRange); } }"}),r(e,{children:"class InsertionPointQuery extends Queryable<InsertionPoint, QueryItem> { set(): SetInsertionPointProperties { return new SetInsertionPointProperties(this as any); } constructor(insertionPoint: InsertionPoint) { super(insertionPoint); } }"}),r(e,{children:"class ParagraphStyleQuery extends Queryable<ParagraphStyle, QueryItem> { set(): SetParagraphStyleProperties { return new SetParagraphStyleProperties(this as any); } constructor(paragraphStyle: ParagraphStyle) { super(paragraphStyle); } }"}),r(e,{children:"class PatternQuery extends Queryable<Pattern, QueryItem> { set(): SetPatternProperties { return new SetPatternProperties(this as any); } constructor(pattern: Pattern) { super(pattern); } }"}),r(e,{children:"class SpotQuery extends Queryable<Spot, QueryItem> { set(): SetSpotProperties { return new SetSpotProperties(this as any); } constructor(spot: Spot) { super(spot); } }"}),r(e,{children:"class CharacterStyleQuery extends Queryable<CharacterStyle, QueryItem> { set(): SetCharacterStyleProperties { return new SetCharacterStyleProperties(this as any); } constructor(characterStyle: CharacterStyle) { super(characterStyle); } }"}),r(e,{children:"class ArtStyleQuery extends Queryable<ArtStyle, QueryItem> { set(): SetArtStyleProperties { return new SetArtStyleProperties(this as any); } constructor(artStyle: ArtStyle) { super(artStyle); } }"}),r(e,{children:"class VariableQuery extends Queryable<Variable, QueryItem> { set(): SetVariableProperties { return new SetVariableProperties(this as any); } constructor(variable: Variable) { super(variable); } }"}),r(e,{children:"class DataSetQuery extends Queryable<DataSet, QueryItem> { set(): SetDataSetProperties { return new SetDataSetProperties(this as any); } constructor(dataSet: DataSet) { super(dataSet); } }"}),r(e,{children:"class ViewQuery extends Queryable<View, QueryItem> { set(): SetViewProperties { return new SetViewProperties(this as any); } constructor(view: View) { super(view); } }"}),r(e,{children:"class PathPointQuery extends Queryable<PathPoint, QueryItem> { set(): SetPathPointProperties { return new SetPathPointProperties(this as any); } constructor(pathPoint: PathPoint) { super(pathPoint); } }"}),r(e,{children:"class GradientStopQuery extends Queryable<GradientStop, QueryItem> { set(): SetGradientStopProperties { return new SetGradientStopProperties(this as any); } constructor(gradientStop: GradientStop) { super(gradientStop); } } </antArtifact>"}),r(e,{children:"Each class follows the exact same pattern:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Class declaration"}),r(a,{children:"set() method returning its corresponding SetProperties class"}),r(a,{children:"Constructor"}),r(a,{children:"No empty lines between these elements"})]}),r(e,{children:"Let me know if you want me to adjust the formatting further!"})]}),t(n,{at:"2024-12-13T02:05:51.343751Z",children:[r(o,{children:"a9a7addb-6104-4a7e-b101-90d529d0f29e"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Can you write tests for the location methods on this class?"}),r(e,{children:"class SetProperties<TQueryItem extends QueryItem = QueryItem> { protected _query: TQueryItem;"}),r(e,{children:'constructor(query: TQueryItem) { if (query === undefined) throw "queryItem undefined"; this._query = query; }'}),r(e,{children:"name(name: string): this { this._query.name(name); return this; } location(index: number): this { this._query.moveTo(index); return this; } locationToFront(): this { this._query.moveTo(0); return this; } locationToBack(): this { this._query.moveTo(-1); return this; } locationBefore(referenceItem: QueryItem) { this._query.move(referenceItem, ElementPlacement.PLACEBEFORE); } locationAfter(referenceItem: QueryItem) { this._query.move(referenceItem, ElementPlacement.PLACEAFTER); } }"}),r(e,{children:"The tests would each create multiple objects. Test with createLayer in DocumentQuery and createPathItem on LayerQuery and make sure multiple items can be created and moved around as needed."}),r(e,{children:"Here's an example test: class QueryableTests extends AppTestClass { constructor() { super(); this.decorateExceptions = false; }"}),r(e,{children:'// Helper method to create test items createTestPageItems(): LayerQuery { const layer = api.activeDocument().layers().at(0); const rect1 = layer.pathItems().create(); rect1.name("Rect 1"); const rect2 = layer.pathItems().create(); rect2.name("Rect 2"); const rect3 = layer.pathItems().create(); rect3.name("Rect 3"); return layer; }'}),r(e,{children:"}"}),r(e,{children:"You're filling this in. You can just write testLocation and have that create and set the location of a bunch of objects both layer and path item. No need to write many tests. Keep them succinct"}),r(e,{children:"There is this method on the test class to help you:"}),r(e,{children:'assertEquals(actual: any, expected: any, message: string = "", tolerance: number = 0.0001): void { const areNumbers = typeof actual === "number" && typeof expected === "number"; const areArrays = actual instanceof Array && expected instanceof Array;'}),t(e,{children:["if (areNumbers) { // Compare numbers within tolerance if (Math.abs(actual - expected) > tolerance) { throw this.formatError(message, actual, expected); } } else if (areArrays) { // Compare arrays deeply if (actual.length !== expected.length) { throw this.formatError(message, actual, expected); } for (let i = 0; i < actual.length; i++) { this.assertEquals(actual[i], expected[i], ",t(l,{children:[r(c,{}),"${message} (index ${i})"]}),", tolerance); } } else if (actual != expected) { // Use '!=' for type coercion if necessary throw this.formatError(message, actual, expected); } }"]}),r(e,{children:"Also, queries have an index() property which tells you the index. That should help too"})]}),t(n,{at:"2024-12-13T02:06:20.706429Z",children:[r(o,{children:"91088247-8e04-409d-b52b-d14cee0e6224"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll create a test that checks the various location methods using both layers and path items, testing each position method."}),r(e,{children:"<antThinking>Need a comprehensive test that verifies all location methods using both document layers and path items, utilizing index() to verify positions and the assertEquals helper to verify results.</antThinking>"}),r(e,{children:'<antArtifact identifier="set-properties-tests" type="application/vnd.ant.code" language="typescript" title="SetProperties Location Tests"> class SetPropertiesTests extends AppTestClass { constructor() { super(); this.decorateExceptions = false; }'}),r(e,{children:"testLocation(): void { const doc = api.activeDocument();"}),r(e,{children:'// Test with layers const layer1 = doc.layers().create().name("Layer 1"); const layer2 = doc.layers().create().name("Layer 2"); const layer3 = doc.layers().create().name("Layer 3");'}),r(e,{children:'// Test moving layer2 before layer1 layer2.set().locationBefore(layer1); this.assertEquals(layer2.index(), 0, "Layer2 should be at index 0"); this.assertEquals(layer1.index(), 1, "Layer1 should be at index 1");'}),r(e,{children:'// Test moving layer3 to front layer3.set().locationToFront(); this.assertEquals(layer3.index(), 0, "Layer3 should be at front (index 0)");'}),r(e,{children:'// Test moving layer2 to back layer2.set().locationToBack(); this.assertEquals(layer2.index(), 2, "Layer2 should be at back (index 2)");'}),r(e,{children:'// Test with path items const pathLayer = doc.layers().create().name("Path Layer"); const path1 = pathLayer.pathItems().create().name("Path 1"); const path2 = pathLayer.pathItems().create().name("Path 2"); const path3 = pathLayer.pathItems().create().name("Path 3");'}),r(e,{children:'// Test direct location setting path2.set().location(0); this.assertEquals(path2.index(), 0, "Path2 should be at index 0");'}),r(e,{children:'// Test locationAfter path3.set().locationAfter(path1); this.assertEquals(path3.index(), path1.index() + 1, "Path3 should be right after Path1");'}),r(e,{children:'// Verify relative positions still maintain expected order const allPaths = pathLayer.pathItems().toArray(); this.assertEquals(allPaths.length, 3, "Should still have 3 path items"); this.assertEquals(allPaths.map(p => p.name()), [path2.name(), path1.name(), path3.name()], "Paths should be in expected order"); } } </antArtifact>'}),r(e,{children:"This test:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Tests all location methods: location(), locationToFront(), locationToBack(), locationBefore(), locationAfter()"}),r(a,{children:"Tests with both layers and path items to ensure methods work with different types"}),r(a,{children:"Verifies positions using index() and name() checks"}),r(a,{children:"Uses assertEquals() to verify all results"}),r(a,{children:"Checks both absolute positions and relative ordering"}),r(a,{children:"Creates multiple objects to ensure proper reordering"})]}),r(e,{children:"Let me know if you'd like me to add any additional test cases or verifications!"})]}),t(n,{at:"2024-12-13T02:07:30.618506Z",children:[r(o,{children:"b39a1bda-9f05-44a3-af97-12521ef7e8de"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Oh good attempt! But I mean - one test per function - testLocation, testLocationToFront etc... and then do a bunch of tests. If a test method is below another one you can use that method"})]}),t(n,{at:"2024-12-13T02:07:59.733299Z",children:[r(o,{children:"669a8bf6-fc67-4233-94c9-918f0566a363"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"Ah! I'll break it into separate test methods, and each subsequent test can use the prior test methods if needed."}),r(e,{children:'<antArtifact identifier="set-properties-location-tests" type="application/vnd.ant.code" language="typescript" title="SetProperties Location Tests"> class SetPropertiesTests extends AppTestClass { constructor() { super(); this.decorateExceptions = false; }'}),r(e,{children:'testLocation(): void { const doc = api.activeDocument(); const layer = doc.layers().create(); const path1 = layer.pathItems().create().name("Path 1"); const path2 = layer.pathItems().create().name("Path 2"); const path3 = layer.pathItems().create().name("Path 3");'}),r(e,{children:"// Move to specific indices and verify path3.set().location(0); path1.set().location(1); path2.set().location(2);"}),r(e,{children:'this.assertEquals(path3.index(), 0, "Path3 should be at index 0"); this.assertEquals(path1.index(), 1, "Path1 should be at index 1"); this.assertEquals(path2.index(), 2, "Path2 should be at index 2"); return layer; }'}),r(e,{children:"testLocationToFront(): void { const layer = this.testLocation(); const paths = layer.pathItems(); const lastPath = paths.at(-1);"}),r(e,{children:'lastPath.set().locationToFront(); this.assertEquals(lastPath.index(), 0, "Path should move to front"); this.assertEquals(paths.first().name(), lastPath.name(), "Path should be first item"); return layer; }'}),r(e,{children:"testLocationToBack(): void { const layer = this.testLocationToFront(); const paths = layer.pathItems(); const firstPath = paths.at(0);"}),r(e,{children:'firstPath.set().locationToBack(); this.assertEquals(firstPath.index(), paths.length() - 1, "Path should move to back"); this.assertEquals(paths.last().name(), firstPath.name(), "Path should be last item"); return layer; }'}),r(e,{children:"testLocationBefore(): void { const layer = this.testLocationToBack(); const paths = layer.pathItems(); const firstPath = paths.at(0); const lastPath = paths.at(-1);"}),r(e,{children:'lastPath.set().locationBefore(firstPath); this.assertEquals(lastPath.index(), firstPath.index() - 1, "Path should be placed before reference"); this.assertEquals(paths.at(0).name(), lastPath.name(), "Path should be immediately before reference"); return layer; }'}),r(e,{children:"testLocationAfter(): void { const layer = this.testLocationBefore(); const paths = layer.pathItems(); const firstPath = paths.at(0); const lastPath = paths.at(-1);"}),r(e,{children:'firstPath.set().locationAfter(lastPath); this.assertEquals(firstPath.index(), lastPath.index() + 1, "Path should be placed after reference"); this.assertEquals(paths.last().name(), firstPath.name(), "Path should be immediately after reference"); } } </antArtifact>'}),r(e,{children:"Each test:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Tests one specific location method"}),r(a,{children:"Can use the setup from previous tests"}),r(a,{children:"Creates a verifiable state and checks it"}),r(a,{children:"Returns the layer for use in subsequent tests"}),r(a,{children:"Uses clear assertions to verify positions"})]}),r(e,{children:"Let me know if you'd like me to add more test cases or modify the verifications!"})]}),t(n,{at:"2024-12-13T02:11:52.095265Z",children:[r(o,{children:"e9743fe8-ce92-4d23-b366-afec0b7665c7"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Getting there. Use these lines of code at the start of every test so you have access:"}),r(e,{children:"var doc = api.activeDocument(); var layer = doc.activeLayer();"}),r(e,{children:"You can use those to create test items"}),r(e,{children:"Can you do more examples? There is one layer to start named Layer 1 so know that. The layer has no items. Really test those functions with multiple cases and multiple numbers of existing items. You can use .remove() to get rid of items from collections or .removeAll() on queries to reset."})]}),t(n,{at:"2024-12-13T02:12:18.511694Z",children:[r(o,{children:"24c00cbb-1988-4931-96a5-9135ee919162"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"I'll create more comprehensive tests using the given setup and test multiple scenarios for each location method."}),r(e,{children:'<antArtifact identifier="set-properties-location-comprehensive-tests" type="application/vnd.ant.code" language="typescript" title="SetProperties Location Tests"> class SetPropertiesTests extends AppTestClass { constructor() { super(); this.decorateExceptions = false; }'}),r(e,{children:"testLocation(): void { var doc = api.activeDocument(); var layer = doc.activeLayer();"}),r(e,{children:'// Test moving in empty layer const path1 = layer.pathItems().create().name("Path 1"); path1.set().location(0); this.assertEquals(path1.index(), 0, "Single item should stay at index 0");'}),r(e,{children:'// Test moving with multiple items const path2 = layer.pathItems().create().name("Path 2"); const path3 = layer.pathItems().create().name("Path 3"); const path4 = layer.pathItems().create().name("Path 4");'}),r(e,{children:'path4.set().location(1); // Move to middle this.assertEquals(path4.index(), 1, "Path4 should be at index 1");'}),r(e,{children:'path2.set().location(0); // Move to front this.assertEquals(path2.index(), 0, "Path2 should be at index 0");'}),r(e,{children:'path3.set().location(3); // Move to end this.assertEquals(path3.index(), 3, "Path3 should be at back");'}),r(e,{children:'// Test with new layer const layer2 = doc.layers().create(); layer2.set().location(0); this.assertEquals(layer2.index(), 0, "New layer should move to front");'}),r(e,{children:"// Cleanup layer.pathItems().removeAll(); layer2.remove(); }"}),r(e,{children:"testLocationToFront(): void { var doc = api.activeDocument(); var layer = doc.activeLayer();"}),r(e,{children:'// Test with single item const single = layer.pathItems().create().name("Single"); single.set().locationToFront(); this.assertEquals(single.index(), 0, "Single item should stay at front");'}),r(e,{children:'// Test with three items const back = layer.pathItems().create().name("Back"); const middle = layer.pathItems().create().name("Middle"); const front = layer.pathItems().create().name("Front");'}),r(e,{children:'back.set().locationToFront(); this.assertEquals(back.index(), 0, "Back item should move to front"); this.assertEquals(middle.index(), 2, "Middle item should shift back");'}),r(e,{children:'middle.set().locationToFront(); this.assertEquals(middle.index(), 0, "Middle item should move to front"); this.assertEquals(back.index(), 1, "Previous front item should shift back");'}),r(e,{children:'// Test with layers const newLayer = doc.layers().create(); newLayer.set().locationToFront(); this.assertEquals(newLayer.index(), 0, "New layer should move to front");'}),r(e,{children:"// Cleanup layer.pathItems().removeAll(); newLayer.remove(); }"}),r(e,{children:"testLocationToBack(): void { var doc = api.activeDocument(); var layer = doc.activeLayer();"}),r(e,{children:'// Create several items in known positions const items = [ layer.pathItems().create().name("Item 1"), layer.pathItems().create().name("Item 2"), layer.pathItems().create().name("Item 3"), layer.pathItems().create().name("Item 4"), layer.pathItems().create().name("Item 5") ];'}),r(e,{children:'// Test moving front item to back items[0].set().locationToBack(); this.assertEquals(items[0].index(), 4, "Front item should move to back");'}),r(e,{children:'// Test moving middle item to back items[2].set().locationToBack(); this.assertEquals(items[2].index(), 4, "Middle item should move to back"); this.assertEquals(items[0].index(), 3, "Previous back item should shift up");'}),r(e,{children:'// Test with layers const newLayer = doc.layers().create(); const newLayer2 = doc.layers().create(); newLayer.set().locationToBack(); this.assertEquals(newLayer.index(), doc.layers().length() - 1, "Layer should move to back");'}),r(e,{children:"// Cleanup layer.pathItems().removeAll(); newLayer.remove(); newLayer2.remove(); }"}),r(e,{children:"testLocationBefore(): void { var doc = api.activeDocument(); var layer = doc.activeLayer();"}),r(e,{children:'// Create test items const items = [ layer.pathItems().create().name("Item 1"), layer.pathItems().create().name("Item 2"), layer.pathItems().create().name("Item 3"), layer.pathItems().create().name("Item 4") ];'}),r(e,{children:'// Test moving to before first item items[3].set().locationBefore(items[0]); this.assertEquals(items[3].index(), 0, "Should move before first item");'}),r(e,{children:'// Test moving to middle items[1].set().locationBefore(items[3]); this.assertEquals(items[1].index(), items[3].index() - 1, "Should move before target item");'}),r(e,{children:'// Test with adjacent items items[2].set().locationBefore(items[1]); this.assertEquals(items[2].index(), items[1].index() - 1, "Should move before adjacent item");'}),r(e,{children:'// Test with layers const newLayer = doc.layers().create(); const targetLayer = doc.layers().create(); newLayer.set().locationBefore(targetLayer); this.assertEquals(newLayer.index(), targetLayer.index() - 1, "Layer should move before target");'}),r(e,{children:"// Cleanup layer.pathItems().removeAll(); newLayer.remove(); targetLayer.remove(); }"}),r(e,{children:"testLocationAfter(): void { var doc = api.activeDocument(); var layer = doc.activeLayer();"}),r(e,{children:'// Create test items const items = [ layer.pathItems().create().name("First"), layer.pathItems().create().name("Second"), layer.pathItems().create().name("Third"), layer.pathItems().create().name("Fourth") ];'}),r(e,{children:'// Test moving to after last item items[0].set().locationAfter(items[3]); this.assertEquals(items[0].index(), 3, "Should move after last item");'}),r(e,{children:'// Test moving to middle items[2].set().locationAfter(items[1]); this.assertEquals(items[2].index(), items[1].index() + 1, "Should move after middle item");'}),r(e,{children:'// Test moving adjacent items items[1].set().locationAfter(items[2]); this.assertEquals(items[1].index(), items[2].index() + 1, "Should move after adjacent item");'}),r(e,{children:'// Test moving multiple times items[3].set().locationAfter(items[0]); items[3].set().locationAfter(items[2]); this.assertEquals(items[3].index(), items[2].index() + 1, "Should handle multiple moves");'}),r(e,{children:'// Test with layers const newLayer = doc.layers().create(); const referenceLayer = doc.layers().create(); newLayer.set().locationAfter(referenceLayer); this.assertEquals(newLayer.index(), referenceLayer.index() + 1, "Layer should move after reference");'}),r(e,{children:"// Cleanup layer.pathItems().removeAll(); newLayer.remove(); referenceLayer.remove(); } } </antArtifact>"}),r(e,{children:"Each test now:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Uses the provided document and layer setup"}),r(a,{children:"Tests multiple scenarios including:"}),t(e,{children:[r(s,{}),r(a,{children:"Single item operations"}),r(a,{children:"Multiple item operations"}),r(a,{children:"Edge cases (front/back)"}),r(a,{children:"Adjacent item moves"}),r(a,{children:"Layer moves"})]}),r(a,{children:"Includes proper cleanup"}),r(a,{children:"Tests both successful and boundary conditions"}),r(a,{children:"Uses clear assertions to verify positions"})]}),r(e,{children:"Let me know if you'd like me to add more test cases or make any adjustments!"})]}),t(n,{at:"2024-12-13T02:29:31.457012Z",children:[r(o,{children:"e3642829-ab06-44fe-8ca1-d701e2cdd546"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"For vscode, can you write a regex that turns:"}),r(e,{children:"createLayer(): LayerQuery { return this._create(i => i.item().layers, layers => q(layers.add())); }"}),r(e,{children:"into: createLayer(name?: string): LayerQuery { return this._create(i => i.item().layers, layers => q(layers.add()), name); }"})]}),t(n,{at:"2024-12-13T02:29:53.812611Z",children:[r(o,{children:"1d74b299-9721-4fec-80d0-566e00c43aa8"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"Here's a regex find and replace pattern for VSCode:"}),r(e,{children:"Find:"}),r(h,{language:"srt",children:"create(\\w+)\\(\\): (\\w+) \\{\\s+return this\\._create\\(i => i\\.item\\(\\)\\.(\\w+), (\\w+) => q\\(\\4\\.add\\(\\)\\)\\);(\\s+)\\}"}),r(e,{children:"Replace:"}),r(h,{language:"srt",children:`create$1(name?: string): $2 {
        return this._create(i => i.item().$3, $4 => q($4.add()), name);$5}`}),r(e,{children:"This will:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:'Match the method name after "create" ($1)'}),r(a,{children:"Match the return type ($2)"}),r(a,{children:"Match the collection name ($3)"}),r(a,{children:"Match the parameter name in the lambda ($4)"}),r(a,{children:"Preserve the trailing whitespace ($5)"}),r(a,{children:"Add the name parameter and pass it through to _create"})]}),r(e,{children:"You can test this in VSCode's find/replace with regex enabled (Alt+R) to verify it works on your code."})]}),t(n,{at:"2024-12-13T02:30:58.991529Z",children:[r(o,{children:"cc94cc4f-e4f8-4a2a-a4c6-ebf7d46a34c0"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Hmm the regex isn't matching. Are you handling whitespace right? It needs to have the same whitespace"})]}),t(n,{at:"2024-12-13T02:31:07.737386Z",children:[r(o,{children:"fb4799c4-54ff-42df-9f86-4ce4c53f8db5"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"Let me adjust the regex to be more precise about whitespace. In VSCode, whitespace needs to be matched exactly. Here's the corrected version:"}),r(e,{children:"Find:"}),r(h,{language:"srt",children:`createLayer\\(\\): LayerQuery \\{
        return this\\._create\\(i => i\\.item\\(\\)\\.layers, layers => q\\(layers\\.add\\(\\)\\)\\);
    \\}`}),r(e,{children:"Replace:"}),r(h,{language:"srt",children:`createLayer(name?: string): LayerQuery {
        return this._create(i => i.item().layers, layers => q(layers.add()), name);
    }`}),r(e,{children:"Then we can make it more generic:"}),r(e,{children:"Find:"}),r(h,{language:"srt",children:`create(\\w+)\\(\\): (\\w+) \\{
        return this\\._create\\(i => i\\.item\\(\\)\\.\\w+, \\w+ => q\\(\\w+\\.add\\(\\)\\)\\);
    \\}`}),r(e,{children:"Replace:"}),r(h,{language:"srt",children:`create$1(name?: string): $2 {
        return this._create(i => i.item().$1s, $1s => q($1s.add()), name);
    }`}),r(e,{children:"The key was to match the exact indentation pattern (8 spaces) and line breaks. Let me know if this works better!"})]}),t(n,{at:"2024-12-13T02:32:03.119690Z",children:[r(o,{children:"6a244a71-879c-46ea-9498-ef5632aad492"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Close! There is a lowercase on the collection name"})]}),t(n,{at:"2024-12-13T02:32:10.303996Z",children:[r(o,{children:"99cd1fa3-eb97-4fb9-9e12-74ad7df09fbf"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"Ah yes! The collection name needs to be lowercase. Here's the corrected regex:"}),r(e,{children:"Find:"}),r(h,{language:"srt",children:`create(\\w+)\\(\\): (\\w+) \\{
        return this\\._create\\(i => i\\.item\\(\\)\\.\\L$1s, \\L$1s => q\\(\\L$1s\\.add\\(\\)\\)\\);
    \\}`}),r(e,{children:"Hmm, VSCode's regex might not support \\L. Let's make it more explicit:"}),r(e,{children:"Find:"}),r(h,{language:"srt",children:`create(\\w+)\\(\\): (\\w+) \\{
        return this\\._create\\(i => i\\.item\\(\\)\\.(\\w+), \\3 => q\\(\\3\\.add\\(\\)\\)\\);
    \\}`}),r(e,{children:"Replace:"}),r(h,{language:"srt",children:`create$1(name?: string): $2 {
        return this._create(i => i.item().$3, $3 => q($3.add()), name);
    }`}),r(e,{children:"This should preserve the lowercase collection name since it's capturing what's actually in the code. Let me know if this works better!"})]}),t(n,{at:"2024-12-13T02:33:19.452743Z",children:[r(o,{children:"cc732122-b3c8-428c-8456-42e7dd4789d8"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"That worked for one class! But it was also supposed to detect these too - it needs to work for all queries;"}),r(e,{children:"createCompoundPathItem(): CompoundPathItemQuery { return this._create(i => i.item().compoundPathItems, items => q(items.add())); }"}),r(e,{children:"createPathItem(): PathItemQuery { return this._create(i => i.item().pathItems, items => q(items.add())); }"}),r(e,{children:"createPlacedItem(): PlacedItemQuery { return this._create(i => i.item().placedItems, items => q(items.add())); }"}),r(e,{children:"createTextFrame(): TextFrameQuery { return this._create(i => i.item().textFrames, items => q(items.add())); }"}),r(e,{children:"createGroupItem(): GroupItemQuery { return this._create(i => i.item().groupItems, items => q(items.add())); }"}),r(e,{children:"createSymbolItem(symbol: Symbol): SymbolItemQuery { return this._create(i => i.item().symbolItems, items => q(items.add(symbol))); }"})]}),t(n,{at:"2024-12-13T02:33:27.174429Z",children:[r(o,{children:"c56f8b53-b62e-48d0-8e2e-fa90719eb1be"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"Ah, I see! We need to make the regex more flexible to handle different parameter names and also methods that already have parameters. Here's a more comprehensive regex:"}),r(e,{children:"Find:"}),r(h,{language:"srt",children:`create(\\w+)\\(([^)]*)\\): (\\w+) \\{
        return this\\._create\\(i => i\\.item\\(\\)\\.(\\w+), \\w+ => q\\(\\w+\\.add\\(([^)]*)\\)\\)\\);
    \\}`}),r(e,{children:"Replace:"}),r(h,{language:"srt",children:`create$1(name?: string$2): $3 {
        return this._create(i => i.item().$4, items => q(items.add($5)), name);
    }`}),r(e,{children:"This should:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:'Match any method starting with "create"'}),r(a,{children:"Capture any existing parameters in the parentheses"}),r(a,{children:"Preserve the return type"}),r(a,{children:"Capture the collection name"}),r(a,{children:"Preserve any existing add() parameters"}),r(a,{children:"Add the name parameter first in the parameter list (if there are existing parameters, they'll follow)"})]}),r(e,{children:"This should work for all your cases, including methods with no parameters and methods that already have parameters like createSymbolItem. Let me know if you need any adjustments!"})]})]}),"December1320242"),$=m(()=>t(y,{children:[r(g,{children:r(f,{children:"[14 December 2024](2024-12-14)"})}),r(b,{children:"[14 December 2024](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#14-december-2024)"}),t(n,{at:"2024-12-14T18:57:20.033446Z",children:[r(o,{children:"1f12d3f7-6996-4169-9757-e6ee8d9c3412"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Do you see how this code injects the plugindir and document dir in every file?"}),r(e,{children:"In each file, I want to look for: declare var SCRIPTS_PATH: string"}),r(e,{children:"And: declare var DOCUMENTS_PATH: string;"}),r(e,{children:'When it finds the first, it replaces it with: var SCRIPTS_PATH = "{pluginDir}";'}),r(e,{children:'When it finds the second it replces it with: var DOCUMENTS_PATH = "{documentsDir}";'}),r(e,{children:"I want it to do this instead of adding it to every file. Make sense?"}),r(d,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),r(d,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),t(n,{at:"2024-12-14T18:57:46.548489Z",children:[r(o,{children:"3c219e99-a3d6-46c2-9fd3-64b3245b9800"}),r(i,{children:"[Claude](/dougs-claude/)"}),t(e,{children:["Yes, I understand! You want to modify the ",t(l,{children:[r(c,{}),"processImports"]})," function to look for those declarations and replace them instead of adding them to every file. Here's the modified version:"]}),r(h,{language:"javascript",children:`function processImports(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/"use strict";\\n/, '');

    let output = '';
    const referenceRegex = /\\/\\/\\/?\\s*<reference path="([^"]+)"\\s*\\/>/g;

    // Match all reference statements at the top of the file
    let match;
    let includePaths = [];
    while ((match = referenceRegex.exec(content)) !== null) {
        let includePath = match[1].replace(/^\\.\\//, '').replace('.ts', '.jsx');
        includePaths.push(includePath);
    }

    // Add each include statement to the output
    if (includePaths.length > 0) {
        includePaths.forEach((path) => {
            output += \`#include \${path}\\n\`;
        });
        output += '\\n'; // Separate includes from the rest of the content
    }

    // Replace declarations with actual values
    content = content
        .replace(/declare\\s+var\\s+SCRIPTS_PATH\\s*:\\s*string\\s*;/, 
            \`var SCRIPTS_PATH = "\${pluginDir.replace(/\\\\/g, '\\\\\\\\')}";\`)
        .replace(/declare\\s+var\\s+DOCUMENTS_PATH\\s*:\\s*string\\s*;/, 
            \`var DOCUMENTS_PATH = "\${documentsDir.replace(/\\\\/g, '\\\\\\\\')}";\`);

    // Remove reference statements from content and append remaining content
    output += content.replace(referenceRegex, '');

    return output;
}`}),r(e,{children:"The key changes:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"Removed the direct addition of SCRIPTS_PATH and DOCUMENTS_PATH"}),r(a,{children:"Added regex replacements that look for the declare statements and replace them with the actual variable declarations"}),r(a,{children:"Still escapes backslashes in the paths"}),r(a,{children:"Only adds these variables if they were declared in the original file"})]}),r(e,{children:"This way, only files that actually declare these variables will get the replacements, rather than adding them to every file."})]}),t(n,{at:"2024-12-14T19:03:02.801522Z",children:[r(o,{children:"c4f29c31-f8bf-47d0-b0df-2caac0dc3922"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Actually it can't quite be that because it has to work on JavaScript. Assume these are the values:"}),r(e,{children:'var SCRIPTS_PATH = ""; var DOCUMENTS_PATH: string = "";'}),r(e,{children:"Allow for variable whitespace everywhere in the regex but it has to be on one line. Don't worry about what commes after the equals. It could match anything -> (; , any whitspace, endof line)"})]}),t(n,{at:"2024-12-14T19:03:26.629068Z",children:[r(o,{children:"45d33401-2a6f-45cd-8143-ebefc8cc4b0a"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"Here's the regex to match those JavaScript variable declarations with flexible whitespace:"}),r(h,{language:"javascript",children:`content = content
    .replace(/var\\s+SCRIPTS_PATH\\s*=\\s*.+?(?=[;\\s]|$)/, 
        \`var SCRIPTS_PATH = "\${pluginDir.replace(/\\\\/g, '\\\\\\\\')}"\`)
    .replace(/var\\s+DOCUMENTS_PATH\\s*=\\s*.+?(?=[;\\s]|$)/, 
        \`var DOCUMENTS_PATH = "\${documentsDir.replace(/\\\\/g, '\\\\\\\\')}"\`)`}),r(e,{children:"Breaking down the regex:"}),t(e,{children:[r(s,{}),t(a,{children:[t(l,{children:[r(c,{}),"var\\s+"]})," - matches 'var' followed by one or more whitespace"]}),t(a,{children:[t(l,{children:[r(c,{}),"SCRIPTS_PATH\\s*"]})," - matches the variable name followed by optional whitespace"]}),t(a,{children:[t(l,{children:[r(c,{}),"=\\s*"]})," - matches equals sign with optional whitespace"]}),t(a,{children:[t(l,{children:[r(c,{}),".+?"]})," - matches anything (non-greedy) until..."]}),t(a,{children:[t(l,{children:[r(c,{}),"(?=[;\\s]|$)"]})," - looks ahead for semicolon, whitespace, or end of line"]})]}),r(e,{children:"This will match declarations like:"}),r(h,{language:"javascript",children:`var SCRIPTS_PATH="whatever";
var SCRIPTS_PATH = '';
var SCRIPTS_PATH=     "anything"   
var SCRIPTS_PATH = ""`}),r(e,{children:"Let me know if you need any adjustments to the pattern!"})]}),t(n,{at:"2024-12-14T19:04:35.996480Z",children:[r(o,{children:"518a4684-9f17-4321-b5d5-49ed1ac958eb"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Megnificent"})]}),t(n,{at:"2024-12-14T19:04:39.917021Z",children:[r(o,{children:"d842b760-99c1-47ad-9362-c7372f703715"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"Glad I could help! The regex pattern is nicely flexible while still being precise about what it's replacing. And using a non-greedy match with a lookahead ensures it won't accidentally consume too much of the line. Would you like me to suggest any other build script improvements while we're at it?"})]}),r(u,{identifier:"paste",type:".txt",children:`const fs = require('fs');\r
const path = require('path');\r
const { exec } = require('child_process');\r
const chokidar = require('chokidar');\r
const rimraf = require('rimraf');\r
const dotenv = require('dotenv');\r
\r
dotenv.config();\r
\r
const srcDir = path.resolve(__dirname, 'src');\r
const buildDir = path.resolve(__dirname, 'build');\r
\r
// Resolve locale-specific folders dynamically\r
const pluginDir = resolveLocalePath(process.env.ILLUSTRATOR_SCRIPTS_PATH);\r
const documentsDir = resolveLocalePath(process.env.ILLUSTRATOR_DOCUMENTS_PATH);\r
\r
if (!pluginDir || !documentsDir) {\r
    console.error("Error: Both ILLUSTRATOR_SCRIPTS_PATH and ILLUSTRATOR_DOCUMENTS_PATH must be defined in the .env file.");\r
    process.exit(1);\r
}\r
\r
// Function to handle locale-specific paths and ensure they exist\r
function resolveLocalePath(envPath) {\r
    if (!envPath) return null;\r
    const normalizedPath = path.normalize(envPath);\r
    if (!fs.existsSync(normalizedPath)) {\r
        console.error(\`Error: Path does not exist - \${normalizedPath}\`);\r
        process.exit(1);\r
    }\r
    return normalizedPath;\r
}\r
\r
// Copy src structure to build, excluding .ts files\r
function copySrcToBuild() {\r
    console.log('Copying src structure to build...');\r
\r
    function copyRecursive(source, target) {\r
        if (!fs.existsSync(target)) {\r
            fs.mkdirSync(target, { recursive: true });\r
        }\r
\r
        const files = fs.readdirSync(source);\r
        files.forEach(file => {\r
            const sourcePath = path.join(source, file);\r
            const targetPath = path.join(target, file);\r
\r
            if (fs.lstatSync(sourcePath).isDirectory()) {\r
                copyRecursive(sourcePath, targetPath);\r
            } else if (!file.endsWith('.ts')) {\r
                fs.copyFileSync(sourcePath, targetPath);\r
            }\r
        });\r
    }\r
\r
    copyRecursive(srcDir, buildDir);\r
}\r
\r
// Process JS files, converting imports to JSX and renaming extensions\r
function processJSFiles() {\r
    console.log('Processing JS files...');\r
\r
    function processRecursive(dir) {\r
        const files = fs.readdirSync(dir);\r
        files.forEach(file => {\r
            const filePath = path.join(dir, file);\r
\r
            if (fs.lstatSync(filePath).isDirectory()) {\r
                processRecursive(filePath);\r
            } else if (file.endsWith('.js')) {\r
                const jsxPath = filePath.replace('.js', '.jsx');\r
                const content = processImports(filePath);\r
                fs.writeFileSync(jsxPath, content);\r
                fs.unlinkSync(filePath); // Remove the .js file\r
            }\r
        });\r
    }\r
\r
    processRecursive(buildDir);\r
}\r
\r
// Modify imports in JS files for Illustrator compatibility\r
function processImports(filePath) {\r
    let content = fs.readFileSync(filePath, 'utf8');\r
    content = content.replace(/"use strict";\\n/, '');\r
\r
    let output = '';\r
    const referenceRegex = /\\/\\/\\/?\\s*<reference path="([^"]+)"\\s*\\/>/g;\r
\r
    // Match all reference statements at the top of the file\r
    let match;\r
    let includePaths = [];\r
    while ((match = referenceRegex.exec(content)) !== null) {\r
        let includePath = match[1].replace(/^\\.\\//, '').replace('.ts', '.jsx');\r
        includePaths.push(includePath);\r
    }\r
\r
    // Add each include statement to the output\r
    if (includePaths.length > 0) {\r
        includePaths.forEach((path) => {\r
            output += \`#include \${path}\\n\`;\r
        });\r
        output += '\\n'; // Separate includes from the rest of the content\r
    }\r
\r
    // Add environment variable definitions\r
    const scriptsPath = pluginDir.replace(/\\\\/g, '\\\\\\\\');\r
    const documentsPath = documentsDir.replace(/\\\\/g, '\\\\\\\\');\r
    output += \`var SCRIPTS_PATH = "\${scriptsPath}";\\n\`;\r
    output += \`var DOCUMENTS_PATH = "\${documentsPath}";\\n\\n\`;\r
\r
    // Remove reference statements from content and append remaining content\r
    output += content.replace(referenceRegex, '');\r
\r
    return output;\r
}\r
\r
// Sync build folder to plugin directory\r
function syncToPlugin() {\r
    console.log('Syncing to plugin directory...');\r
\r
    function syncRecursive(source, target) {\r
        if (!fs.existsSync(target)) {\r
            fs.mkdirSync(target, { recursive: true });\r
        }\r
\r
        const files = fs.readdirSync(source);\r
        files.forEach(file => {\r
            const sourcePath = path.join(source, file);\r
            const targetPath = path.join(target, file);\r
\r
            if (fs.lstatSync(sourcePath).isDirectory()) {\r
                syncRecursive(sourcePath, targetPath);\r
            } else {\r
                fs.copyFileSync(sourcePath, targetPath);\r
            }\r
        });\r
    }\r
\r
    syncRecursive(buildDir, pluginDir);\r
}\r
\r
// Watch mode for file changes\r
function watchFiles() {\r
    console.log('Starting watch mode...');\r
    chokidar.watch(srcDir, {\r
        ignored: /.ts$/,\r
        persistent: true\r
    }).on('all', (event, filePath) => {\r
        if (event === 'add' || event === 'change') {\r
            const relativePath = path.relative(srcDir, filePath);\r
            const buildPath = path.join(buildDir, relativePath);\r
\r
            fs.mkdirSync(path.dirname(buildPath), { recursive: true });\r
            fs.copyFileSync(filePath, buildPath);\r
\r
            const pluginPath = path.join(pluginDir, relativePath);\r
            fs.mkdirSync(path.dirname(pluginPath), { recursive: true });\r
            fs.copyFileSync(filePath, pluginPath);\r
        }\r
    });\r
\r
    const tsc = exec("tsc -w", { cwd: __dirname });\r
    tsc.stdout.on('data', (data) => console.log(data.toString()));\r
    tsc.stderr.on('data', (data) => console.error('TypeScript error:', data.toString()));\r
}\r
\r
// Main function with process flow\r
async function main() {\r
    try {\r
        console.log('Cleaning build directory...');\r
        rimraf.sync(buildDir);\r
        fs.mkdirSync(buildDir, { recursive: true });\r
\r
        copySrcToBuild();\r
        console.log('Running TypeScript compiler...');\r
\r
        await new Promise((resolve, reject) => {\r
            exec("tsc", { cwd: __dirname }, (error, stdout, stderr) => {\r
                if (error) {\r
                    console.error('TypeScript compilation failed:');\r
                    console.error(stdout);\r
                    console.error(stderr);\r
                    reject(error);\r
                } else {\r
                    resolve();\r
                }\r
            });\r
        });\r
\r
        processJSFiles();\r
        syncToPlugin();\r
\r
        if (process.argv.includes('-w')) {\r
            watchFiles();\r
        }\r
    } catch (error) {\r
        console.error(\`Error in build process: \${error.message}\`);\r
        process.exit(1);\r
    }\r
}\r
\r
main();`})]}),"December1420243"),rr=m(()=>t(y,{children:[r(g,{children:r(f,{children:"[15 December 2024](2024-12-15)"})}),r(b,{children:"[15 December 2024](/claude-typescript-types-for-adobe-illustrator-scripting-07f0404b/#15-december-2024)"}),t(n,{at:"2024-12-15T22:22:19.884155Z",children:[r(o,{children:"c664b0e0-0815-45eb-8d6c-be3efdc4d268"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"I want to make this function remove the curviness from PathPointItems. How can I dod that? angular(makeAngular?: boolean): boolean { const allCorner = this.pathPoints().all(p => p.item().pointType === PointType.CORNER); if (makeAngular) { this.pathPoints().do(p => p.set().pointType(PointType.CORNER)); this._defaultPointType = PointType.CORNER; } return allCorner; }"})]}),t(n,{at:"2024-12-15T22:22:41.533260Z",children:[r(o,{children:"0a615e90-77b7-4108-ba5a-af0b447f2f6a"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:`To remove the "curviness" from PathPoints, we need to make their left and right direction points coincide with their anchor points. This makes each point a true corner point. Here's the modified function:`}),r(h,{language:"typescript",children:`angular(makeAngular?: boolean): boolean {
    const allCorner = this.pathPoints().all(p => p.item().pointType === PointType.CORNER);
    if (makeAngular) {
        this.pathPoints().do(p => {
            const anchor = p.item().anchor;
            p.set()
                .pointType(PointType.CORNER)
                .leftDirection(anchor)
                .rightDirection(anchor);
        });
        this._defaultPointType = PointType.CORNER;
    }
    return allCorner;
}`}),r(e,{children:"Key changes:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"When making points angular, get each point's anchor position"}),r(a,{children:"Set both the left and right direction points to match the anchor point"}),r(a,{children:"This effectively removes any curve handles while also setting the point type to CORNER"})]}),r(e,{children:"This will make the path truly angular, with straight lines between points, rather than just changing the point type."})]}),t(n,{at:"2024-12-15T22:44:34.426458Z",children:[r(o,{children:"2f67869e-5b42-4cb2-aa23-174b4a28e1f6"}),r(i,{children:"[Doug](/dougs-story/)"}),r(e,{children:"Would it be possible to reimplement these throwing away all information except the position of the point? I want moving back and forth between angular and curve states to be equivalent:"}),r(d,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),r(d,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),t(n,{at:"2024-12-15T22:45:11.580712Z",children:[r(o,{children:"de35cbc9-0451-43fa-9008-10dec942edfe"}),r(i,{children:"[Claude](/dougs-claude/)"}),r(e,{children:"Yes! We can reimplement these smoothing methods using only anchor positions. This way they'll behave identically whether starting from an angular path or already smooth one. Here's the modified version:"}),r(h,{language:"typescript",children:`class Smoothing {
    static bezier(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        // Extract just the anchor positions
        const positions = points.toArray().map(p => p.anchor());

        for (let i = 1; i < positions.length - 1; i++) {
            const prev = positions[i - 1];
            const current = positions[i];
            const next = positions[i + 1];

            const deltaX = (next[0] - prev[0]) / 3;
            const deltaY = (next[1] - prev[1]) / 3;

            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([current[0] - deltaX, current[1] - deltaY])
                .rightDirection([current[0] + deltaX, current[1] + deltaY]);
        }
    }

    static catmullRomSmooth(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        const positions = points.toArray().map(p => p.anchor());

        for (let i = 1; i < positions.length - 1; i++) {
            const prev = positions[i - 1];
            const current = positions[i];
            const next = positions[i + 1];

            const deltaX = (next[0] - prev[0]) / 6;
            const deltaY = (next[1] - prev[1]) / 6;

            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([current[0] - deltaX, current[1] - deltaY])
                .rightDirection([current[0] + deltaX, current[1] + deltaY]);
        }
    }

    static tensionSmooth(path: PathItemQuery, tension: number = 0.16): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        const positions = points.toArray().map(p => p.anchor());

        for (let i = 1; i < positions.length - 1; i++) {
            const prev = positions[i - 1];
            const current = positions[i];
            const next = positions[i + 1];

            const deltaX = (next[0] - prev[0]) * tension;
            const deltaY = (next[1] - prev[1]) * tension;

            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([current[0] - deltaX, current[1] - deltaY])
                .rightDirection([current[0] + deltaX, current[1] + deltaY]);
        }
    }

    static bSplineSmooth(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 4) return;

        const positions = points.toArray().map(p => p.anchor());
        const smoothedAnchors: Position[] = [];

        for (let i = 1; i < positions.length - 2; i++) {
            const p0 = positions[i - 1];
            const p1 = positions[i];
            const p2 = positions[i + 1];
            const p3 = positions[i + 2];

            const smoothX = (p0[0] + 4 * p1[0] + p2[0]) / 6;
            const smoothY = (p0[1] + 4 * p1[1] + p2[1]) / 6;

            const deltaX = (p3[0] - p0[0]) / 6;
            const deltaY = (p3[1] - p0[1]) / 6;

            const adjustedX = smoothX + deltaX;
            const adjustedY = smoothY + deltaY;

            smoothedAnchors.push([adjustedX, adjustedY]);
        }

        for (let i = 1; i < positions.length - 2; i++) {
            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .anchor(smoothedAnchors[i - 1]);
        }
    }

    static cubicSplineSmooth(path: PathItemQuery): void {
        const points = path.pathPoints();
        if (points.length() < 2) return;

        const positions = points.toArray().map(p => p.anchor());
        const n = positions.length;
        const h = Array(n - 1);

        for (let i = 0; i < n - 1; i++) {
            const p1 = positions[i];
            const p2 = positions[i + 1];
            h[i] = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
        }

        for (let i = 1; i < n - 1; i++) {
            const current = positions[i];
            points.at(i).set()
                .pointType(PointType.SMOOTH)
                .leftDirection([
                    current[0] - h[i - 1] / 3,
                    current[1] - h[i - 1] / 3
                ])
                .rightDirection([
                    current[0] + h[i] / 3,
                    current[1] + h[i] / 3
                ]);
        }
    }
}`}),r(e,{children:"Key changes:"}),t(e,{children:[r(s,{ordered:!0}),r(a,{children:"First extract all anchor positions into an array"}),r(a,{children:"Use only these positions for all calculations"}),r(a,{children:"Never look at existing direction points or point types"}),r(a,{children:"Apply the calculated handle positions fresh each time"})]}),r(e,{children:"This way, whether you start with an angular path or a curved one, you'll get the same result each time the smoothing is applied. Going from angular to smooth and back to angular will leave you with exactly the same path."})]}),r(u,{identifier:"paste",type:".txt",children:`class Smoothing {\r
    // Bézier handle averaging\r
    static bezier(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        for (let i = 1; i < points.length() - 1; i++) {\r
            const prev = points.at(i - 1).anchor();\r
            const current = points.at(i);\r
            const next = points.at(i + 1).anchor();\r
\r
            const deltaX = (next[0] - prev[0]) / 3;\r
            const deltaY = (next[1] - prev[1]) / 3;\r
\r
            current.set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([current.anchor()[0] - deltaX, current.anchor()[1] - deltaY])\r
                .rightDirection([current.anchor()[0] + deltaX, current.anchor()[1] + deltaY]);\r
        }\r
    }\r
\r
    // Catmull-Rom Spline smoothing\r
    static catmullRomSmooth(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        for (let i = 1; i < points.length() - 1; i++) {\r
            const prev = points.at(i - 1).anchor();\r
            const current = points.at(i);\r
            const next = points.at(i + 1).anchor();\r
\r
            const deltaX = (next[0] - prev[0]) / 6;\r
            const deltaY = (next[1] - prev[1]) / 6;\r
\r
            current.set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([current.anchor()[0] - deltaX, current.anchor()[1] - deltaY])\r
                .rightDirection([current.anchor()[0] + deltaX, current.anchor()[1] + deltaY]);\r
        }\r
    }\r
\r
    // Tension-Based Smoothing\r
    static tensionSmooth(path: PathItemQuery, tension: number = 0.16): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        for (let i = 1; i < points.length() - 1; i++) {\r
            const prev = points.at(i - 1).anchor();\r
            const current = points.at(i);\r
            const next = points.at(i + 1).anchor();\r
\r
            const deltaX = (next[0] - prev[0]) * tension;\r
            const deltaY = (next[1] - prev[1]) * tension;\r
\r
            current.set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([current.anchor()[0] - deltaX, current.anchor()[1] - deltaY])\r
                .rightDirection([current.anchor()[0] + deltaX, current.anchor()[1] + deltaY]);\r
        }\r
    }\r
\r
    // B-Spline Smoothing\r
    static bSplineSmooth(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 4) return; // B-splines require at least 4 control points\r
\r
        const smoothedAnchors: Position[] = [];\r
\r
        for (let i = 1; i < points.length() - 2; i++) {\r
            const p0 = points.at(i - 1).anchor();\r
            const p1 = points.at(i).anchor();\r
            const p2 = points.at(i + 1).anchor();\r
            const p3 = points.at(i + 2).anchor();\r
\r
            // Calculate smooth anchor position (weighted average)\r
            const smoothX = (p0[0] + 4 * p1[0] + p2[0]) / 6;\r
            const smoothY = (p0[1] + 4 * p1[1] + p2[1]) / 6;\r
\r
            // Influence outgoing direction using p3\r
            const deltaX = (p3[0] - p0[0]) / 6;\r
            const deltaY = (p3[1] - p0[1]) / 6;\r
\r
            const adjustedX = smoothX + deltaX;\r
            const adjustedY = smoothY + deltaY;\r
\r
            smoothedAnchors.push([adjustedX, adjustedY]);\r
        }\r
\r
        // Update path points with the smoothed anchors\r
        for (let i = 1; i < points.length() - 2; i++) {\r
            points.at(i).set()\r
                .pointType(PointType.SMOOTH)\r
                .anchor(smoothedAnchors[i - 1]);\r
        }\r
    }\r
\r
    // Cubic Spline Smoothing\r
    static cubicSplineSmooth(path: PathItemQuery): void {\r
        const points = path.pathPoints();\r
        if (points.length() < 2) return;\r
\r
        const n = points.length();\r
        const h = Array(n - 1);\r
        const a = Array(n);\r
\r
        for (let i = 0; i < n - 1; i++) {\r
            const p1 = points.at(i).anchor();\r
            const p2 = points.at(i + 1).anchor();\r
            h[i] = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);\r
            a[i] = p1;\r
        }\r
\r
        for (let i = 1; i < n - 1; i++) {\r
            points.at(i).set()\r
                .pointType(PointType.SMOOTH)\r
                .leftDirection([\r
                    a[i][0] - h[i - 1] / 3,\r
                    a[i][1] - h[i - 1] / 3\r
                ])\r
                .rightDirection([\r
                    a[i][0] + h[i] / 3,\r
                    a[i][1] + h[i] / 3\r
                ]);\r
        }\r
    }\r
}`})]}),"December1520244"),er=C(v),lr=m(()=>t(er,{children:[Y(),J(),X(),K(),Z(),$(),rr()]}),"book");export{lr as book};
