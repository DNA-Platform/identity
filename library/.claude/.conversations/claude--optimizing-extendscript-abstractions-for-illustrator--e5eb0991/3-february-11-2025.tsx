import { Append, Chapter, Date, Line, List, Math, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 February 2025](2025-02-11)</Date>
        </Dated>
        <Title>[[ 11 February 2025 ]]</Title>
        <Message
            at="2025-02-11T13:43:05.945579Z"
        >
            <Origin>b365ca6f-fc6e-4321-a908-1207061db8c0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay I am making progress. What steps can we add to this to make for a seamless transaction where I can
                create references
            </Paragraph>
            <Paragraph>
                You can see some of how this abstraction will be used in the second document. I just need an easy way to add
                new functions to whose wrapper classes that can themselves be dispatched easily
            </Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment
                identifier="paste-2"
                type=".txt"
            >
                Attached “paste-2.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “paste-2.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-02-11T13:43:19.256701Z"
        >
            <Origin>1bf24e55-20c3-4987-974b-da8563c8460b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Looking at how you're using this in the second document, I see the pattern. You want to be able to easily
                create wrapper methods that build up commands and return references. Let's focus on making that seamless.
            </Paragraph>
            <Paragraph>The key things I notice:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Your methods in $Application like <Word>
                        <Verbatim />
                        document()
                    </Word> return references that can be chained
                </Line>
                <Line>The $Effect and $Reference classes form the basis of all operations</Line>
                <Line>When we dispatch an effect, we want to get back a reference to continue chaining</Line>
                <Line>
                    Methods like <Word>
                        <Verbatim />
                        add()
                    </Word> in $Documents show the pattern of taking typed arguments and returning new references
                </Line>
            </Paragraph>
            <Paragraph>Here's what I suggest for making this more seamless. First, let's add some helpers:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}// In $Effect
protected $wrap<T>(expression: string, varName?: string): $Reference<T> {
    const effect = new $Effect(expression, varName);
    return effect.$dispatch();
}

// Helper for methods that return references
protected $method<T>(name: string, ...args: $Any[]): $Reference<T> {
    const argsStr = args.map(arg => $arg(arg)).join(',');
    return this.$wrap<T>(\`\${this.address()}.\${name}(\${argsStr})\`);
}

// Helper for property access
protected $prop<T>(name: string, value?: $Any): $Reference<T> {
    if (value === undefined) {
        return this.$wrap<T>(\`\${this.address()}.\${name}\`);
    }
    return this.$wrap<T>(\`\${this.address()}.\${name} = \${$arg(value)}\`);
}`}
            </CodeBox>
            <Paragraph>Then methods in your wrapper classes become very simple:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $Documents extends $ApplicationCollection<Documents, $Document, Document> {
    add(documentColorSpace?: $Arg<DocumentColorSpace>): $Document {
        return this.$method<Document>('add', documentColorSpace);
    }
    
    // Property access becomes simple
    length(): $Reference<number> {
        return this.$prop<number>('length');
    }
}`}
            </CodeBox>
            <Paragraph>The $func method could then also be simplified:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`$func<T>(selector: (o: Type) => T): $Reference<T> {
    return this.$wrap<T>(\`(\${selector})(\${this.address()})\`);
}`}
            </CodeBox>
            <Paragraph>This would allow for smooth chaining like:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`$ref(app)
    .documents()
    .add()
    .$func(d => d.pathItems.add())
    .$dispatch();`}
            </CodeBox>
            <Paragraph>
                Would you like me to show how to implement more of these patterns in your existing codebase?
            </Paragraph>
        </Message>
        <Message
            at="2025-02-11T13:45:18.411058Z"
        >
            <Origin>ac524387-eb40-40e9-9f8a-9cd783913961</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you please read my abstractions more carefully? I don't want any $func calls. I want to be able to add
                methods. Look at $Application
            </Paragraph>
            <Paragraph>I want it to be:</Paragraph>
            <Paragraph>$app.activeDocument().dougsOpenFunction()</Paragraph>
            <Paragraph>
                And that last thing is a member I added to $Document to do something particular. Perhaps I added it by
                having my function toString'd and then treated like an effect and the thing that is returned is a reference
            </Paragraph>
        </Message>
        <Message
            at="2025-02-11T13:45:25.330042Z"
        >
            <Origin>e104bb4e-2fbf-468d-8bd3-3141b0832383</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah I see - you want to be able to extend the classes with new methods that integrate seamlessly with your
                effect/reference system. Looking at how $Application is structured, with methods like <Word>
                    <Verbatim />
                    document()
                </Word> and <Word>
                    <Verbatim />
                    documents()
                </Word>, each method is effectively creating a new reference that can be chained.
            </Paragraph>
            <Paragraph>The pattern I see in $Application is:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`document(): $Document { return this.activeDocument(); }
documents(): $Documents { return $docref(this.$get(o => o.documents), this.typename(), this.document()); }`}
            </CodeBox>
            <Paragraph>
                So if you wanted to add <Word>
                    <Verbatim />
                    dougsOpenFunction()
                </Word> to $Document, it would follow this pattern:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class $Document extends $ApplicationItem<Document> {
    // Existing methods...

    dougsOpenFunction(...args: any[]): $Reference<any> {
        // The function body becomes the effect's expression
        const functionBody = function(doc) {
            // Your custom logic here
            doc.something.doSomething();
        };
        
        // Create an effect that will execute this function
        return $eff(\`(\${functionBody})(\${this.address()})\`).$dispatch();
    }
}`}
            </CodeBox>
            <Paragraph>
                Is this closer to what you're looking for? Where we can add methods to the wrapper classes that
                automatically integrate with your effect/reference system?
            </Paragraph>
        </Message>
        <Message
            at="2025-02-11T16:35:56.516696Z"
        >
            <Origin>4dcc19c0-dca8-457b-9cff-e8dbb95fd6f7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Look at these examples. Do you see how I can make it extensible? Do these work?</Paragraph>
            <Paragraph>
                $func&lt;T = any&gt;(selector: (self: T, ...args: any&#91;&#93;) =&gt; T, ...args: $Arg&#91;&#93;):
                <Math>{"Reference<T> { var ref = this."}</Math>var("$$<Math>{"func\"); args.unshift(this); return ref."}</Math>invoke(args);
                &#125;
            </Paragraph>
            <Paragraph>
                exaampleMember(name: $Str): <Math>{"Reference<string> { return this."}</Math>func((self, name) =&gt; &#123;
                var oldName = app.activeDocument.activeLayer.name; app.activeDocument.activeLayer.name = name; return
                oldName; &#125;, "Layer Name"); &#125;
            </Paragraph>
        </Message>
        <Message
            at="2025-02-11T16:36:08.379838Z"
        >
            <Origin>cd4ae653-5db3-456c-88e1-5483f23eed83</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah! Now I understand - you're using $func as a way to inject new functionality by passing in a function that
                will be executed in the context of the reference. The function gets <Word>
                    <Verbatim />
                    self
                </Word> as its first parameter (which is the object the reference points to) and then any additional
                arguments.
            </Paragraph>
            <Paragraph>So your pattern is:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>$func takes a selector function that defines what operation to perform</Line>
                <Line>
                    That function gets the current reference as its first argument (<Word>
                        <Verbatim />
                        self
                    </Word>)
                </Line>
                <Line>
                    Additional arguments are passed after <Word>
                        <Verbatim />
                        self
                    </Word>
                </Line>
                <Line>The function body becomes part of the command chain</Line>
                <Line>Returns a reference to allow chaining</Line>
            </Paragraph>
            <Paragraph>And in your example:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`exaampleMember(name: $Str): $Reference<string> {
    return this.$func((self, name) => {
        var oldName = app.activeDocument.activeLayer.name;
        app.activeDocument.activeLayer.name = name;
        return oldName;
    }, "Layer Name");
}`}
            </CodeBox>
            <Paragraph>
                The function body itself becomes part of the command chain, and the type system preserves the return type
                information.
            </Paragraph>
            <Paragraph>This is elegant because:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>It allows adding new functionality without modifying the core classes</Line>
                <Line>The function bodies are treated as effects</Line>
                <Line>The type system flows through naturally</Line>
                <Line>It integrates seamlessly with your existing reference/effect system</Line>
            </Paragraph>
            <Paragraph>
                Would you like me to show how to expand this pattern to make it even more powerful or help implement
                specific functionality using this approach?
            </Paragraph>
        </Message>
        <Message
            at="2025-02-11T18:00:29.468926Z"
        >
            <Origin>49073034-3580-4578-9ea9-b16f293b38df</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: Analyze this carefully. Why might I get a stack overflow on $VeriableReference constructor
            </Paragraph>
            <Attachment
                identifier="paste-2"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-02-11T18:00:39.497057Z"
        >
            <Origin>c1b84c2f-6b12-4995-916f-ef5d18b3773f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Looking at the code carefully, I can see the potential stack overflow in <Word>
                    <Verbatim />
                    $VariableReference
                </Word>:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $VariableReference<TVariable = any> extends $Reference<TVariable> {
    protected _name: string;
    name(): string { return this._name; }

    constructor(name: string) {
        super(name);  // This calls $Reference constructor
        if (name === undefined || name.length === 0)
            throw new Error("A variable reference must have a name");
        this._name = name;
    }
}`}
            </CodeBox>
            <Paragraph>The issue is in the inheritance chain and constructor calls:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Verbatim />
                        $VariableReference
                    </Word> extends <Word>
                        <Verbatim />
                        $Reference
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $Reference
                    </Word> extends <Word>
                        <Verbatim />
                        $Effect
                    </Word>
                </Line>
                <Line>
                    In <Word>
                        <Verbatim />
                        $Effect
                    </Word>'s constructor: ``<Word>
                        <Verbatim />
                        typescript constructor(expression: string, variable?: string) &#123; var ref = !variable ? "$.global" : variable; this._variable = new $VariableReference&lt;T&gt;(ref);  // Creates new $VariableReference this._expression = expression; &#125; 
                    </Word>``
                </Line>
            </Paragraph>
            <Paragraph>The infinite recursion happens because:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Create a new <Word>
                        <Verbatim />
                        $VariableReference
                    </Word>
                </Line>
                <Line>
                    It calls <Word>
                        <Verbatim />
                        super(name)
                    </Word> which calls <Word>
                        <Verbatim />
                        $Reference
                    </Word> constructor
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $Reference
                    </Word> calls <Word>
                        <Verbatim />
                        $Effect
                    </Word> constructor
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        $Effect
                    </Word> creates a new <Word>
                        <Verbatim />
                        $VariableReference
                    </Word>
                </Line>
                <Line>Which starts the cycle again...</Line>
            </Paragraph>
            <Paragraph>
                The solution would be to have <Word>
                    <Verbatim />
                    $Effect
                </Word> not create a <Word>
                    <Verbatim />
                    $VariableReference
                </Word> if it's already being constructed as part of a <Word>
                    <Verbatim />
                    $VariableReference
                </Word>. Perhaps add a flag or restructure how variable references are created in <Word>
                    <Verbatim />
                    $Effect
                </Word>.
            </Paragraph>
        </Message>
        <Message
            at="2025-02-11T22:35:47.824081Z"
        >
            <Origin>b739075d-066e-4a04-825f-dea1cdfb945d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Repeat this code exactly but change them to the appropriate type names for the collection:
            </Paragraph>
            <Paragraph>
                layers(): $Layers &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.layers), this.typename(), this);
                &#125; artboards(): $Artboards &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.artboards),
                this.typename(), this); &#125; views(): $Views &#123; return <Math>{"docref(this."}</Math>get(o =&gt;
                o.views), this.typename(), this); &#125; brushes(): $Brushes &#123; return <Math>{"docref(this."}</Math>get(o
                =&gt; o.brushes), this.typename(), this); &#125; swatches(): $Swatches &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.swatches), this.typename(), this); &#125; symbols(): $Symbols
                &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.symbols), this.typename(), this); &#125; stories():
                $Stories &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.stories), this.typename(), this); &#125;
                pluginItems(): $PluginItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.pluginItems),
                this.typename(), this); &#125; pageItems(): $PageItems &#123; return <Math>{"docref(this."}</Math>get(o
                =&gt; o.pageItems), this.typename(), this); &#125; pathItems(): $PathItems &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.pathItems), this.typename(), this); &#125; textFrames():
                $TextFrames &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.textFrames), this.typename(), this);
                &#125; groupItems(): $GroupItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.groupItems),
                this.typename(), this); &#125; rasterItems(): $RasterItems &#123; return <Math>{"docref(this."}</Math>get(o
                =&gt; o.rasterItems), this.typename(), this); &#125; compoundPathItems(): $CompoundPathItems &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.compoundPathItems), this.typename(), this); &#125;
                legacyTextItems(): $LegacyTextItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt;
                o.legacyTextItems), this.typename(), this); &#125; nonNativeItems(): $NonNativeItems &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.nonNativeItems), this.typename(), this); &#125; gradients():
                $Gradients &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.gradients), this.typename(), this);
                &#125; variables(): $Variables &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.variables),
                this.typename(), this); &#125; patterns(): $Patterns &#123; return <Math>{"docref(this."}</Math>get(o =&gt;
                o.patterns), this.typename(), this); &#125; paragraphStyles(): $ParagraphStyles &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.paragraphStyles), this.typename(), this); &#125;
                characterStyles(): $CharacterStyles &#123; return <Math>{"docref(this."}</Math>get(o =&gt;
                o.characterStyles), this.typename(), this); &#125; spots(): $Spots &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.spots), this.typename(), this); &#125; datasets(): $DataSets
                &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.dataSets), this.typename(), this); &#125; tags():
                $Tags &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.tags), this.typename(), this); &#125;
                graphicStyles(): $ArtStyles &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.graphicStyles),
                this.typename(), this); &#125; placedItems(): $PlacedItems &#123; return <Math>{"docref(this."}</Math>get(o
                =&gt; o.placedItems), this.typename(), this); &#125; embeddedItems(): $EmbeddedItems &#123; return
                <Math>{"docref(this."}</Math>get(o =&gt; o.embeddedItems), this.typename(), this); &#125; graphItems():
                $GraphItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.graphItems), this.typename(), this);
                &#125; meshItems(): $MeshItems &#123; return <Math>{"docref(this."}</Math>get(o =&gt; o.meshItems),
                this.typename(), this); &#125;
            </Paragraph>
        </Message>
        <Message
            at="2025-02-11T22:36:04.924522Z"
        >
            <Origin>9ce1288b-5727-4441-8f7d-c4deb1456c6f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here are the interfaces repeated with correct collection/item type names:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $Document extends $ApplicationItem<Document> {
    layers(): $ApplicationCollection<Layers, $Layer, Layer> { return $docref(this.$get(o => o.layers), this.typename(), this); }
    artboards(): $ApplicationCollection<Artboards, $Artboard, Artboard> { return $docref(this.$get(o => o.artboards), this.typename(), this); }
    views(): $ApplicationCollection<Views, $View, View> { return $docref(this.$get(o => o.views), this.typename(), this); }
    brushes(): $ApplicationCollection<Brushes, $Brush, Brush> { return $docref(this.$get(o => o.brushes), this.typename(), this); }
    swatches(): $ApplicationCollection<Swatches, $Swatch, Swatch> { return $docref(this.$get(o => o.swatches), this.typename(), this); }
    symbols(): $ApplicationCollection<Symbols, $Symbol, Symbol> { return $docref(this.$get(o => o.symbols), this.typename(), this); }
    stories(): $ApplicationCollection<Stories, $Story, Story> { return $docref(this.$get(o => o.stories), this.typename(), this); }
    pluginItems(): $ApplicationCollection<PluginItems, $PluginItem, PluginItem> { return $docref(this.$get(o => o.pluginItems), this.typename(), this); }
    pageItems(): $ApplicationCollection<PageItems, $PageItem, PageItem> { return $docref(this.$get(o => o.pageItems), this.typename(), this); }
    pathItems(): $ApplicationCollection<PathItems, $PathItem, PathItem> { return $docref(this.$get(o => o.pathItems), this.typename(), this); }
    textFrames(): $ApplicationCollection<TextFrames, $TextFrame, TextFrame> { return $docref(this.$get(o => o.textFrames), this.typename(), this); }
    groupItems(): $ApplicationCollection<GroupItems, $GroupItem, GroupItem> { return $docref(this.$get(o => o.groupItems), this.typename(), this); }
    rasterItems(): $ApplicationCollection<RasterItems, $RasterItem, RasterItem> { return $docref(this.$get(o => o.rasterItems), this.typename(), this); }
    compoundPathItems(): $ApplicationCollection<CompoundPathItems, $CompoundPathItem, CompoundPathItem> { return $docref(this.$get(o => o.compoundPathItems), this.typename(), this); }
    legacyTextItems(): $ApplicationCollection<LegacyTextItems, $LegacyTextItem, LegacyTextItem> { return $docref(this.$get(o => o.legacyTextItems), this.typename(), this); }
    nonNativeItems(): $ApplicationCollection<NonNativeItems, $NonNativeItem, NonNativeItem> { return $docref(this.$get(o => o.nonNativeItems), this.typename(), this); }
    gradients(): $ApplicationCollection<Gradients, $Gradient, Gradient> { return $docref(this.$get(o => o.gradients), this.typename(), this); }
    variables(): $ApplicationCollection<Variables, $Variable, Variable> { return $docref(this.$get(o => o.variables), this.typename(), this); }
    patterns(): $ApplicationCollection<Patterns, $Pattern, Pattern> { return $docref(this.$get(o => o.patterns), this.typename(), this); }
    paragraphStyles(): $ApplicationCollection<ParagraphStyles, $ParagraphStyle, ParagraphStyle> { return $docref(this.$get(o => o.paragraphStyles), this.typename(), this); }
    characterStyles(): $ApplicationCollection<CharacterStyles, $CharacterStyle, CharacterStyle> { return $docref(this.$get(o => o.characterStyles), this.typename(), this); }
    spots(): $ApplicationCollection<Spots, $Spot, Spot> { return $docref(this.$get(o => o.spots), this.typename(), this); }
    datasets(): $ApplicationCollection<DataSets, $DataSet, DataSet> { return $docref(this.$get(o => o.dataSets), this.typename(), this); }
    tags(): $ApplicationCollection<Tags, $Tag, Tag> { return $docref(this.$get(o => o.tags), this.typename(), this); }
    graphicStyles(): $ApplicationCollection<ArtStyles, $ArtStyle, ArtStyle> { return $docref(this.$get(o => o.graphicStyles), this.typename(), this); }
    placedItems(): $ApplicationCollection<PlacedItems, $PlacedItem, PlacedItem> { return $docref(this.$get(o => o.placedItems), this.typename(), this); }
    embeddedItems(): $ApplicationCollection<EmbeddedItems, $EmbeddedItem, EmbeddedItem> { return $docref(this.$get(o => o.embeddedItems), this.typename(), this); }
    graphItems(): $ApplicationCollection<GraphItems, $GraphItem, GraphItem> { return $docref(this.$get(o => o.graphItems), this.typename(), this); }
    meshItems(): $ApplicationCollection<MeshItems, $MeshItem, MeshItem> { return $docref(this.$get(o => o.meshItems), this.typename(), this); }
}`}
            </CodeBox>
            <Paragraph>
                Each collection and item type is now properly named according to the illustrator object model pattern, where
                the collection is pluralized and contains items of the singular type.
            </Paragraph>
        </Message>
        <Message
            at="2025-02-11T22:39:58.451520Z"
        >
            <Origin>1250bbd4-7240-4a78-9e20-46ad73b4ebee</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Try again. It needs to be a string literal. layers() would pass in "Layers", views() would pass in "Views"
            </Paragraph>
        </Message>
        <Message
            at="2025-02-11T22:40:16.185319Z"
        >
            <Origin>eee55a5d-3dd4-4055-aeaf-eca5ec55cab6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ah, now I understand - we want to pass the type name as a string literal. Here's the corrected version:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $Document extends $ApplicationItem<Document> {
    layers(): $ApplicationCollection<Layers, $Layer, Layer> { return $docref(this.$get(o => o.layers), "Layers", this); }
    artboards(): $ApplicationCollection<Artboards, $Artboard, Artboard> { return $docref(this.$get(o => o.artboards), "Artboards", this); }
    views(): $ApplicationCollection<Views, $View, View> { return $docref(this.$get(o => o.views), "Views", this); }
    brushes(): $ApplicationCollection<Brushes, $Brush, Brush> { return $docref(this.$get(o => o.brushes), "Brushes", this); }
    swatches(): $ApplicationCollection<Swatches, $Swatch, Swatch> { return $docref(this.$get(o => o.swatches), "Swatches", this); }
    symbols(): $ApplicationCollection<Symbols, $Symbol, Symbol> { return $docref(this.$get(o => o.symbols), "Symbols", this); }
    stories(): $ApplicationCollection<Stories, $Story, Story> { return $docref(this.$get(o => o.stories), "Stories", this); }
    pluginItems(): $ApplicationCollection<PluginItems, $PluginItem, PluginItem> { return $docref(this.$get(o => o.pluginItems), "PluginItems", this); }
    pageItems(): $ApplicationCollection<PageItems, $PageItem, PageItem> { return $docref(this.$get(o => o.pageItems), "PageItems", this); }
    pathItems(): $ApplicationCollection<PathItems, $PathItem, PathItem> { return $docref(this.$get(o => o.pathItems), "PathItems", this); }
    textFrames(): $ApplicationCollection<TextFrames, $TextFrame, TextFrame> { return $docref(this.$get(o => o.textFrames), "TextFrames", this); }
    groupItems(): $ApplicationCollection<GroupItems, $GroupItem, GroupItem> { return $docref(this.$get(o => o.groupItems), "GroupItems", this); }
    rasterItems(): $ApplicationCollection<RasterItems, $RasterItem, RasterItem> { return $docref(this.$get(o => o.rasterItems), "RasterItems", this); }
    compoundPathItems(): $ApplicationCollection<CompoundPathItems, $CompoundPathItem, CompoundPathItem> { return $docref(this.$get(o => o.compoundPathItems), "CompoundPathItems", this); }
    legacyTextItems(): $ApplicationCollection<LegacyTextItems, $LegacyTextItem, LegacyTextItem> { return $docref(this.$get(o => o.legacyTextItems), "LegacyTextItems", this); }
    nonNativeItems(): $ApplicationCollection<NonNativeItems, $NonNativeItem, NonNativeItem> { return $docref(this.$get(o => o.nonNativeItems), "NonNativeItems", this); }
    gradients(): $ApplicationCollection<Gradients, $Gradient, Gradient> { return $docref(this.$get(o => o.gradients), "Gradients", this); }
    variables(): $ApplicationCollection<Variables, $Variable, Variable> { return $docref(this.$get(o => o.variables), "Variables", this); }
    patterns(): $ApplicationCollection<Patterns, $Pattern, Pattern> { return $docref(this.$get(o => o.patterns), "Patterns", this); }
    paragraphStyles(): $ApplicationCollection<ParagraphStyles, $ParagraphStyle, ParagraphStyle> { return $docref(this.$get(o => o.paragraphStyles), "ParagraphStyles", this); }
    characterStyles(): $ApplicationCollection<CharacterStyles, $CharacterStyle, CharacterStyle> { return $docref(this.$get(o => o.characterStyles), "CharacterStyles", this); }
    spots(): $ApplicationCollection<Spots, $Spot, Spot> { return $docref(this.$get(o => o.spots), "Spots", this); }
    datasets(): $ApplicationCollection<DataSets, $DataSet, DataSet> { return $docref(this.$get(o => o.dataSets), "DataSets", this); }
    tags(): $ApplicationCollection<Tags, $Tag, Tag> { return $docref(this.$get(o => o.tags), "Tags", this); }
    graphicStyles(): $ApplicationCollection<ArtStyles, $ArtStyle, ArtStyle> { return $docref(this.$get(o => o.graphicStyles), "ArtStyles", this); }
    placedItems(): $ApplicationCollection<PlacedItems, $PlacedItem, PlacedItem> { return $docref(this.$get(o => o.placedItems), "PlacedItems", this); }
    embeddedItems(): $ApplicationCollection<EmbeddedItems, $EmbeddedItem, EmbeddedItem> { return $docref(this.$get(o => o.embeddedItems), "EmbeddedItems", this); }
    graphItems(): $ApplicationCollection<GraphItems, $GraphItem, GraphItem> { return $docref(this.$get(o => o.graphItems), "GraphItems", this); }
    meshItems(): $ApplicationCollection<MeshItems, $MeshItem, MeshItem> { return $docref(this.$get(o => o.meshItems), "MeshItems", this); }
}`}
            </CodeBox>
            <Paragraph>
                I replaced <Word>
                    <Verbatim />
                    this.typename()
                </Word> with the appropriate string literal type name for each collection. This should match the Illustrator
                object model's type names exactly.
            </Paragraph>
        </Message>
        <Append
            identifier="paste"
            type=".txt"
        >
            ![[ paste.txt ]]
        </Append>
        <Append
            identifier="paste-2"
            type=".txt"
        >
            ![[ paste-2.txt ]]
        </Append>
        <Append
            identifier="paste-2"
            type=".txt"
        >
            ![[ paste-2.txt ]]
        </Append>
        <Append
            identifier="command-builder-architecture"
            type=".ts"
        >
            ![[ command-builder-architecture.ts ]]
        </Append>
        <Append
            identifier="effect-and-command-architecture"
            type=".ts"
        >
            ![[ effect-and-command-architecture.ts ]]
        </Append>
        <Append
            identifier="func-implementation"
            type=".ts"
        >
            ![[ func-implementation.ts ]]
        </Append>
        <Append
            identifier="effect-reference-implementation"
            type=".ts"
        >
            ![[ effect-reference-implementation.ts ]]
        </Append>
    </Chapter>
);
