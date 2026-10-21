export class $Chemical {
    // Static properties
    static readonly chemical: boolean = true;
    static _bindingsMap?: Map<string, Binding>;
    static _mergedBindings?: Binding[];

    // Private fields
    private _chemicalUpdate?: () => void;
    private _childRegistrationOrder?: number;
    private _childPositionCounts?: Map<any, number>;

    // Public inert properties - guaranteed to be assigned
    @inert()
    public parent!: $Chemical;
    
    @inert()
    public children: $Chemical[] = [];
    
    @inert()
    public element!: ReactElement;
    
    @inert()
    public component!: React.FC<Properties<this>>;
    
    @inert()
    public childrenElements?: ReactNode;

    // Constructor
    constructor() {
        this.component = this._createComponent();
    }

    // Public methods
    view(): ReactNode {
        return this.childrenElements;
    }

    above(): ReactNode | undefined {
        return undefined;
    }

    below(): ReactNode | undefined {
        return undefined;
    }

    static reactivate<T extends object>(instance: T): T {
        return reactivate(instance);
    }

    static reactivateData(obj: any, owner: any) {
        return reactivateData(obj, owner);
    }

    static deactivate<T extends object>(instance: T): T {
        return deactivate(instance);
    }

    static isComponent(value: any): boolean {
        return value && typeof value === 'function' && (value as any).isChemical === true;
    }

    static isInstance(value: any): boolean {
        return value instanceof $Chemical;
    }

    // Private methods
    private _createComponent(): React.FC<Properties<this>> {
        const self = this;
        
        const ChemicalComponent: React.FC<Properties<this>> = (props: any) => {
            const instance = self._createInstance();
            const [, forceUpdate] = useState({});
            
            // Create and store the element reference
            const elementRef = useRef<ReactElement | null>(null);
            
            useLayoutEffect(() => {
                // Store the element that represents this instance
                if (elementRef.current) {
                    instance.element = elementRef.current;
                }
            }, []);

            useEffect(() => {
                self._setupInstance(instance, props, () => forceUpdate({}));
                return () => self._cleanupInstance(instance);
            }, []);
            
            self._processChildren(instance, props);
            
            // Capture the rendered element
            const rendered = self._renderInstance(instance);
            
            // Store ref to this element
            if (React.isValidElement(rendered)) {
                elementRef.current = rendered;
            }
            
            return rendered;
        };
        
        (ChemicalComponent as any).isChemical = true;
        return ChemicalComponent;
    }

    private _createInstance(): $Chemical {
        const instance = Object.create(this);
        // Instance always has these
        instance.children = [];
        return instance;
    }

    private _setupInstance(instance: $Chemical, props: any, forceUpdate: () => void): void {
        this._applyProps(instance, props);
        this._setupReactivity(instance, forceUpdate);
        this._handleParentBinding(instance, props);
        this._runCatalystMethods(instance);
    }

    private _cleanupInstance(instance: $Chemical): void {
        componentUpdaters.delete(instance);
        if (instance.parent) {
            this._unregisterFromParent(instance, instance.parent);
        }
    }

    private _applyProps(instance: $Chemical, props: any): void {
        if (!props) return;
        
        for (const key in props) {
            if (props.hasOwnProperty(key) && 
                key !== 'children' && 
                key !== '__parentInstance') {
                this._setProp(instance, key, props[key]);
            }
        }
    }

    private _setProp(instance: $Chemical, key: string, value: any): void {
        const componentKey = '$' + String(key);
        const transformers = instance.constructor.prototype.transformers;
        
        if (transformers?.has(componentKey)) {
            const transformer = transformers.get(componentKey);
            (instance as any)[componentKey] = transformer(value);
        } else {
            (instance as any)[componentKey] = value;
        }
    }

    private _setupReactivity(instance: $Chemical, forceUpdate: () => void): void {
        componentUpdaters.set(instance, forceUpdate);
        
        decorate(instance, {
            after: (className, memberName, memberType, method, args, result) => {
                if (memberType === 'field') {
                    const updateFn = componentUpdaters.get(instance);
                    if (updateFn) updateFn();
                }
                return result;
            }
        });
    }

    private _handleParentBinding(instance: $Chemical, props: any): void {
        if (!props.__parentInstance) return;
        
        instance.parent = props.__parentInstance;
        this._registerWithParent(instance, instance.parent);
    }

    private _registerWithParent(child: $Chemical, parent: $Chemical): void {
        this._trackChild(parent, child);
        this._applyBinding(child, parent);
    }

    private _trackChild(parent: $Chemical, child: $Chemical): void {
        if (!parent.children.includes(child)) {
            parent.children.push(child);
        }
    }

    private _applyBinding(child: $Chemical, parent: $Chemical): void {
        const bindings = getBindings(parent);
        
        if (!parent._childPositionCounts) {
            parent._childPositionCounts = new Map();
        }
        
        for (const binding of bindings) {
            // Skip the children array itself
            if (binding.property === 'children') continue;
            
            if (this._matchesBinding(child, parent, binding)) {
                this._bindChild(child, parent, binding);
                break;
            }
        }
    }

    private _matchesBinding(child: $Chemical, parent: $Chemical, binding: any): boolean {
        if (!(child instanceof binding.class!)) return false;
        
        if (binding.position !== undefined) {
            const count = parent._childPositionCounts!.get(binding.class) || 0;
            if (binding.position !== count) {
                parent._childPositionCounts!.set(binding.class!, count + 1);
                return false;
            }
            parent._childPositionCounts!.set(binding.class!, count + 1);
        }
        
        if (binding.where && !binding.where(child)) return false;
        
        return true;
    }

    private _bindChild(child: $Chemical, parent: $Chemical, binding: any): void {
        const prop = (parent as any)[binding.property];
        
        if (Array.isArray(prop)) {
            prop.push(child);
        } else if (!(parent as any)[binding.property]) {
            (parent as any)[binding.property] = child;
        }
    }

    private _unregisterFromParent(child: $Chemical, parent: $Chemical): void {
        this._unbindChild(child, parent);
        this._untrackChild(parent, child);
    }

    private _unbindChild(child: $Chemical, parent: $Chemical): void {
        const bindings = getBindings(parent);
        
        for (const binding of bindings) {
            if (binding.property === 'children') continue;
            
            const prop = (parent as any)[binding.property];
            if (Array.isArray(prop)) {
                const index = prop.indexOf(child);
                if (index >= 0) prop.splice(index, 1);
            } else if ((parent as any)[binding.property] === child) {
                (parent as any)[binding.property] = undefined;
            }
        }
    }

    private _untrackChild(parent: $Chemical, child: $Chemical): void {
        const index = parent.children.indexOf(child);
        if (index >= 0) {
            parent.children.splice(index, 1);
        }
    }

    private _runCatalystMethods(instance: $Chemical): void {
        const methods = instance.constructor.prototype.catalystMethods;
        if (!methods) return;
        
        for (const methodName of methods) {
            if (typeof (instance as any)[methodName] === 'function') {
                (instance as any)[methodName]();
            }
        }
    }

    private _processChildren(instance: $Chemical, props: any): void {
        if (!props?.children) return;
        
        const modifiedChildren = this._modifyChildren(instance, props.children);
        instance.childrenElements = modifiedChildren;
    }

    private _modifyChildren(instance: $Chemical, children: ReactNode): ReactNode {
        const childrenArray = React.Children.toArray(children);
        
        return childrenArray.map(child => {
            if (React.isValidElement(child) && (child.type as any).isChemical) {
                return React.cloneElement(child as any, { 
                    ...(child.props as any),
                    __parentInstance: instance
                });
            }
            return child;
        });
    }

    private _renderInstance(instance: $Chemical): ReactNode {
        const aboveNode = instance.above();
        const mainNode = instance.view();
        const belowNode = instance.below();
        
        if (!aboveNode && !belowNode) {
            return mainNode;
        }
        
        return this._createFragment(aboveNode, mainNode, belowNode);
    }

    private _createFragment(above?: ReactNode, main?: ReactNode, below?: ReactNode): ReactNode {
        const children: ReactNode[] = [];
        
        if (above) children.push(above);
        if (main) children.push(main);
        if (below) children.push(below);
        
        return React.createElement(React.Fragment, null, ...children);
    }
}