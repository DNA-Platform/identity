// Key fixes for chemistry.ts

// 1. Fix the Component getter to ensure proper binding
// In $Chemical class, update:

get Component(): $Component<this> {
    if (!this[$component]) {
        // Ensure formula exists
        if (!this[$formula]) {
            this[$formula] = new $Formula(this);
        }
        this[$template][$component] = this[$template].createComponent();
        // Bind to self for instances
        if (this !== this[$template]) {
            this[$component] = this[$template][$component].$bind(this.parent, this);
        } else {
            this[$component] = this[$template][$component];
        }
    }
    return this[$component];
}

get $Component(): $$Component<this> {
    return this.Component as any;
}

// Add a unique key getter
get key() { 
    return this[$cid]; 
}

// 2. Fix processElement to properly handle children
// In $BondOrchestrator class:

private processElement(element: React.ReactElement<any>, context: $BondOrchestrationContext) {
    let type = element.type as any;
    
    if (type === React.Fragment && element.key?.toString().startsWith('chem-')) {
        const cid = parseInt(element.key.toString().replace('chem-', ''));
        const chemical = $chemicalRegistry.get(cid)!;
        context.args.push(chemical);
        // Use the chemical's Component with proper key
        context.children.push(React.createElement(chemical.Component, {}, null));
        this._rendered.set(chemical.Component, element);
        
    } else if (type === $) {
        // Handle $Array structural component
        context = context.array();
        React.Children.map(element.props?.children || [], item => {
            context.isModified = true;
            context = context.next(item);
            if (context.isElement) {
                this.processElement(item as React.ReactElement<any>, context);
            } else {
                context.args.push(item);
                context.children.push(item);
            }
        });
        
    } else if (typeof type === 'function') {
        // Create a new instance for each child
        let component: $$Component;
        
        // Check if it's already a Chemistry component
        if (type.$bind) {
            component = type;
        } else if (type.$template) {
            // It's a Component function, get a fresh instance
            component = type.$template.Component;
        } else {
            // Wrap regular React component
            component = $(type);
        }
        
        // Always bind to get a fresh instance
        const boundComponent = component.$bind(this._chemical);
        const chemical = boundComponent.$chemical;
        
        // Bind props to the chemical BEFORE processing
        this.bindProps(chemical, element.props);
        
        // Process through child's binder
        const processedProps = context.child(chemical, {});
        
        // Add to args for constructor
        context.args.push(chemical);
        
        // Create element with unique key
        const childElement = React.createElement(
            boundComponent, 
            { ...processedProps, key: chemical[$cid] }
        );
        context.children.push(childElement);
        context.isModified = true;
        
    } else {
        // Regular HTML elements
        context.args.push(element);
        context.children.push(element);
    }
}

// 3. Fix bindProps to not override $ properties on chemicals
private bindProps(chemical: $Chemical, props: any) {
    if (!props) return;
    
    const $chemical$: any = chemical;
    for (const prop in props) {
        if (typeof prop === 'symbol' || 
            prop === 'children' || 
            prop === 'key' || 
            prop === 'ref' ||
            prop === '$$cid') continue;
            
        const $prop = '$' + prop;
        // Only set if the property exists and hasn't been set
        if ($prop in $chemical$ && $chemical$[$prop] === undefined) {
            $chemical$[$prop] = props[prop];
        } else if (!($prop in $chemical$)) {
            // Create the property if it doesn't exist
            $chemical$[$prop] = props[prop];
        }
    }
    
    // Refresh formula after binding
    if (chemical[$formula]) {
        chemical[$formula].refresh();
    }
}

// 4. Fix the Component function to handle formula properly
// In $ComponentFunction:

constructor(template: T, chemical?: T, parent?: $Chemical) {
    this._template = template;
    this._chemical = chemical;
    this._parent = parent;
    
    const isArray = this._template.__getType().name === $Collection.name;

    this.Component = ((props: any) => {
        if (isArray && typeof props === 'function') return new $$Function(props);

        const [cid, setChemicalId] = useState<number>(-1);
        let chemical: T;
        
        if (!this.$bound) {
            let newChemical = cid === -1;
            chemical = newChemical ? this.createChemical() : $chemicalRegistry.get(cid)! as T;
            if (newChemical) {
                $chemicalRegistry.set(chemical[$cid], chemical);
                setChemicalId(chemical[$cid]);
            }
        } else {
            chemical = this._chemical!;
        }

        // Ensure formula exists before binding
        if (!chemical[$formula]) {
            chemical[$formula] = new $Formula(chemical);
            chemical[$formula].init();
        }

        const [_, update] = useState({});
        const [__, setState] = useState(chemical[$formula].state);
        
        // Bind update functions
        chemical[$formula].bindUpdate(setState, () => update({}));

        useEffect(() => {
            // Check formula exists before calling updateState
            if (chemical[$formula]) {
                chemical[$formula].updateState();
            }
            
            return () => {
                if (!chemical[$destroyed]) {
                    chemical.__destroy();
                }
            };
        }, [chemical]);

        return chemical.__render(props);
    }) as any;

    // Set up prototype chain for component
    if (this._chemical) {
        this._chemical[$parent] = parent;
        this._chemical[$component] = this.Component;
    }
    
    Object.setPrototypeOf(this.Component, this);
    return this.Component as any;
}

// 5. Ensure createChemical initializes formula
private createChemical(parent?: $Chemical): T {
    this.$template[$formula].refresh();
    const chemical = Object.create(this.$template) as T;
    chemical[$parent] = parent;
    chemical[$cid] = $Chemical.getNextCid();
    
    // Initialize formula and binder
    chemical[$formula] = new $Formula(chemical);
    chemical[$binder] = new $BondOrchestrator(chemical);
    chemical[$formula].init();
    
    return chemical;
}

// 6. Fix in test file - use proper key prop
// In page.tsx, update all view() methods that render chapters:

view() {
    return (
        <div>
            {this.chapters.map((chapter) => {
                const ChapterComponent = chapter.Component || chapter.$Component;
                // Use the chemical's cid as key
                return <ChapterComponent key={chapter[$cid] || chapter.key} />;
            })}
        </div>
    );
}