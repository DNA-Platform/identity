class $BondOrchestrator<T extends $Chemical> {
    private _chemical: T;
    private _bondConstructor?: Function;
    private _parameters: { rest: boolean }[] = [];
    
    constructor(chemical: T) {
        this._chemical = chemical;
        const name = chemical.getType().name;
        this._bondConstructor = (chemical as any)[name];
        this.parseBondConstructor();
    }
    
    bond(props: any): any {
        const [children, args] = this.process(props.children);
        this.validateArgs(args);
        
        const augmentedProps = { ...props, children };
        this._chemical.__children = augmentedProps.children;
        for (const key in augmentedProps) {
            if (typeof key === 'symbol' || key === 'children' || key === 'key' || key === 'ref') continue;
            (this._chemical as any)['$' + key] = augmentedProps[key];
        }
        
        if (!this._bondConstructor) return augmentedProps;
        
        const paramCount = this._parameters.filter(p => !p.rest).length;
        const hasRest = this._parameters.length > 0 && this._parameters[this._parameters.length - 1].rest;
        
        if (hasRest) {
            const regular = args.slice(0, paramCount);
            const rest = args.slice(paramCount);
            this._bondConstructor.apply(this._chemical, [...regular, ...rest]);
        } else {
            this._bondConstructor.apply(this._chemical, args);
        }
        
        this._chemical.formula.refresh();
        return augmentedProps;
    }

    render(): ReactNode | Promise<ReactNode> {
        let view = this._chemical.view();
        view = this.augmentView(view, this._chemical.Component);
        return view;
    }
    
    private parseBondConstructor() {
        if (!this._bondConstructor) return;
        
        const match = this._bondConstructor.toString().match(/\(([^)]*)\)/);
        if (!match) throw new Error(`Cannot parse constructor for ${this._chemical.getType().name}`);
        
        const paramString = match[1].trim();
        if (!paramString) return;
        
        this._parameters = paramString.split(',').map(p => p.trim()).map(p => ({ rest: p.startsWith('...') }));
    }
    
    private validateArgs(args: any[]) {
        if (!this._bondConstructor) return;
        
        const paramCount = this._parameters.filter(p => !p.rest).length;
        const hasRest = this._parameters.length > 0 && this._parameters[this._parameters.length - 1].rest;
        const expected = hasRest ? `at least ${paramCount}` : `${paramCount}`;
        
        if ((hasRest && args.length < paramCount) || (!hasRest && args.length !== paramCount))
            throw new Error(`${this._chemical.getType().name} expects ${expected} arguments, got ${args.length}`);
    }

    private process(children: ReactNode): [ReactNode, any[]] {
        const args: any[] = [];
        
        const augmented = React.Children.map(children, child => {
            if (!React.isValidElement(child)) {
                args.push(child);
                return child;
            }
            
            const [augmented, arg] = this.processElement(child as React.ReactElement<any>);
            if (arg !== undefined) args.push(arg);
            return augmented;
        });
        
        return [augmented, args];
    }
    
    private processElement(element: React.ReactElement<any>): [ReactNode, any] {
        if (element.props['data-chem-start']) 
            return [element, $chemicalRegistry.get(element.props['data-chem-start'])];
        
        if (element.props['data-chem-end']) 
            return [element, undefined];
        
        const type = element.type as any;
        
        if (type === $) return this.processArray(element);
        if (typeof type === 'string') return [element, element];
        
        return this.processComponent(element, type);
    }
    
    private processArray(element: React.ReactElement<any>): [ReactNode, any] {
        const [inner, innerArgs] = this.process(element.props.children);
        return [inner, innerArgs];
    }
    
    private processComponent(element: React.ReactElement<any>, type: any): [ReactNode, any] {
        if (typeof type === 'function' && !type.$template) type = $(type);
        
        if (!type?.$template || !(type.$template instanceof $Chemical)) 
            return [element, element];
        
        // Check if this entire subtree has already been bound
        if (element.props['data-chem-bound-tree']) {
            const chemical = type.$chemical;
            this.bondChemical(chemical, element.props);
            return [element, chemical];
        }
        
        if (!type.$bound) {
            const bound = type.$bind();
            const chemical = bound.$chemical;
            const newProps = chemical.__bondOrchestrator.bond(element.props);
            
            return [
                React.createElement(bound, {
                    ...element.props,
                    key: element.key,
                    children: newProps.children,
                    'data-chem-bound-tree': true
                }),
                chemical
            ];
        }
        
        const chemical = type.$chemical;
        if (!element.props.children) {
            this.bondChemical(chemical, element.props);
            return [
                React.cloneElement(element, {
                    ...element.props,
                    'data-chem-bound-tree': true
                }),
                chemical
            ];
        }
        
        const [augmentedChildren] = this.process(element.props.children);
        this.bondChemical(chemical, {...element.props, children: augmentedChildren});
        
        if (augmentedChildren === element.props.children) {
            // Children unchanged - mark whole subtree as bound
            return [
                React.cloneElement(element, {
                    ...element.props,
                    'data-chem-bound-tree': true,
                    children: augmentedChildren
                }),
                chemical
            ];
        }
        
        return [
            React.cloneElement(element, {...element.props, children: augmentedChildren}),
            chemical
        ];
    }
    
    private bondChemical(chemical: $Chemical, props: any) {
        chemical.__children = props.children;
        for (const key in props) {
            if (typeof key === 'symbol' || key === 'children' || key === 'key' || key === 'ref') continue;
            (chemical as any)['$' + key] = props[key];
        }
        chemical.formula.refresh();
    }

    private augmentView(view: ReactNode | Promise<ReactNode>, component: $Component<T>): ReactNode | Promise<ReactNode> {
        if (view instanceof Promise) {
            view = view.then(view => this.augmentView(view, component));
            (view as any).$Component = component;
            return view;
        }
        return [this.createMark('start'), view, this.createMark('end')];
    }

    private createMark(position: 'start' | 'end'): React.ReactElement {
        const isStart = position === 'start';
        return React.createElement('span', {
            key: `chem-${position}-${this._chemical.cid}`,
            [`data-chem-${position}`]: this._chemical.cid,
            ...(isStart && { 'data-chem-type': this._chemical.getType().name }),
            style: { display: 'none' },
            ref: (el: HTMLElement | null) => {
                if (!el?.parentNode) return;
                const text = isStart ? 
                    `chem-start:${this._chemical.cid}:${this._chemical.getType().name}` : 
                    `chem-end:${this._chemical.cid}`;
                el.parentNode.replaceChild(document.createComment(text), el);
            }
        });
    }
}