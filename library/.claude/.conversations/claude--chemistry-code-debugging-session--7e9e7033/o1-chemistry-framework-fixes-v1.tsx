import { Chapter, Heading, Math, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework Fixes v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Chemistry Framework Fixes at version 1</Heading>
            <Paragraph>
                // The main issue is in how $Component is accessed on chemicals that are passed as children // When a
                chemical is created as a child, it needs proper initialization
            </Paragraph>
            <Paragraph>// In chemistry.ts, update the $Component getter in $Chemical class:</Paragraph>
            <Paragraph>
                get Component(): <Math>{`${''}Component<this> { if (!this[`}</Math>component&#93;) &#123; // Ensure formula
                is initialized before creating component if (!this&#91;<Math>{`${''}formula]) { this[`}</Math>formula&#93; =
                new <Math>{`${''}Formula(this); } this[`}</Math>template&#93;&#91;<Math>{`${''}component] = this[`}</Math>template&#93;.createComponent();
                // For instances, bind to self if (this !== this&#91;<Math>{`${''}template]) { this[`}</Math>component&#93;
                = this&#91;<Math>{`${''}template][`}</Math>component&#93;.<Math>{`${''}bind(this.parent, this); } else { this[`}</Math>component&#93;
                = this&#91;<Math>{`${''}template][`}</Math>component&#93;; &#125; &#125; return this&#91;$component&#93;;
                &#125;
            </Paragraph>
            <Paragraph>
                // Also add this getter for compatibility: get $Component(): $$Component&lt;this&gt; &#123; return
                this.Component as any; &#125;
            </Paragraph>
            <Paragraph>// In $BondOrchestrator.processElement, when handling function components:</Paragraph>
            <Paragraph>
                private processElement(element: React.ReactElement&lt;any&gt;, context: $BondOrchestrationContext) &#123;
                let type = element.type as any;
            </Paragraph>
            <Paragraph>
                if (type === React.Fragment &amp;&amp; element.key?.toString().startsWith('chem-')) &#123; const cid =
                parseInt(element.key.toString().replace('chem-', '')); const chemical = $chemicalRegistry.get(cid)!;
                context.args.push(chemical); context.children.push(&#123; type: chemical.Component, props: &#123;&#125;,
                key: element.key &#125;); this._rendered.set(chemical.Component, element);
            </Paragraph>
            <Paragraph>
                &#125; else if (type === $) &#123; // Handle $Array structural component context = context.array();
                React.Children.map(element.props?.children || &#91;&#93;, item =&gt; &#123; context.isModified = true;
                context = context.next(item); if (context.isElement) &#123; this.processElement(item as
                React.ReactElement&lt;any&gt;, context); &#125; else &#123; context.args.push(item);
                context.children.push(item); &#125; &#125;);
            </Paragraph>
            <Paragraph>
                &#125; else if (typeof type === 'function') &#123; // Check if it's already a bound component or needs
                binding let component: $<Math>{"Component = type."}</Math>bind ? type : $(type);
            </Paragraph>
            <Paragraph>
                if (!component.<Math>{"bound) { component = component."}</Math>bind(this._chemical); &#125;
            </Paragraph>
            <Paragraph>const chemical = component.$chemical;</Paragraph>
            <Paragraph>
                // Process the child's props through its binder const processedProps = context.child(chemical,
                element.props); const key = <Word>
                    <Verbatim />
                    $&#123;chemical&#91;$cid&#93;&#125;
                </Word>;
            </Paragraph>
            <Paragraph>// Push the chemical instance to args for constructor context.args.push(chemical);</Paragraph>
            <Paragraph>
                // Update children if modified if (processedProps !== element.props || key !== element.key) &#123; // Use
                the bound component for rendering context.children.push(React.createElement(component, &#123;
                ...processedProps, key: key &#125; )); context.isModified = true; &#125; else &#123;
                context.children.push(element); &#125; &#125; else &#123; // Regular HTML elements
                context.args.push(element); context.children.push(element); &#125; &#125;
            </Paragraph>
            <Paragraph>// In $ComponentFunction constructor, ensure proper initialization:</Paragraph>
            <Paragraph>
                constructor(template: T, chemical?: T, parent?: $Chemical) &#123; this._template = template; this._chemical
                = chemical; this._parent = parent;
            </Paragraph>
            <Paragraph>const isArray = this._template.__getType().name === $Collection.name;</Paragraph>
            <Paragraph>
                this.Component = ((props: any) =&gt; &#123; if (isArray &amp;&amp; typeof props === 'function') return new
                $$Function(props);
            </Paragraph>
            <Paragraph>const &#91;cid, setChemicalId&#93; = useState&lt;number&gt;(-1); let chemical: T;</Paragraph>
            <Paragraph>
                if (!this.$bound) &#123; let newChemical = cid === -1; chemical = newChemical ? this.createChemical() :
                $chemicalRegistry.get(cid)! as T; if (newChemical) &#123;
                <Math>{`${''}chemicalRegistry.set(chemical[`}</Math>cid&#93;, chemical);
                setChemicalId(chemical&#91;$cid&#93;); &#125; &#125; else &#123; chemical = this._chemical!; &#125;
            </Paragraph>
            <Paragraph>
                const &#91;_, update&#93; = useState(&#123;&#125;); const &#91;__, setState&#93; =
                useState(chemical&#91;$formula&#93;.state);
            </Paragraph>
            <Paragraph>
                // Bind update functions chemical&#91;$formula&#93;.bindUpdate(setState, () =&gt; update(&#123;&#125;));
            </Paragraph>
            <Paragraph>
                useEffect(() =&gt; &#123; chemical&#91;<Math>{`${''}formula].updateState(); return () => { if (!chemical[`}</Math>destroyed&#93;)
                &#123; chemical.__destroy(); &#125; &#125;; &#125;, &#91;chemical&#93;);
            </Paragraph>
            <Paragraph>return chemical.__render(props); &#125;) as any;</Paragraph>
            <Paragraph>
                // Set up prototype chain for component if (this._chemical) &#123; this._chemical&#91;<Math>{`${''}parent] = parent; this._chemical[`}</Math>component&#93;
                = this.Component; &#125;
            </Paragraph>
            <Paragraph>Object.setPrototypeOf(this.Component, this); return this.Component as any; &#125;</Paragraph>
            <Paragraph>// In the view() method of chemicals that render children, ensure proper access:</Paragraph>
            <Paragraph>
                // For $Book,
                <Math>{"Document, etc: view() { return ( <div> {this.chapters.map((chapter, i) => { // Ensure we get the Component properly const ChapterComponent = chapter.Component || chapter."}</Math>Component;
                if (!ChapterComponent) &#123; console.error('No component found for chapter:', chapter); return null; &#125;
                // Use the chemical's cid as key return &lt;ChapterComponent key=&#123;chapter&#91;$cid&#93; || chapter.key
                || i&#125; /&gt;; &#125;)&#125; &lt;/div&gt; ); &#125;
            </Paragraph>
            <Paragraph>
                // Additional helper for debugging - add to $Chemical class: get debugInfo() &#123; return &#123; class
            </Paragraph>
        </Section>
    </Chapter>
);
