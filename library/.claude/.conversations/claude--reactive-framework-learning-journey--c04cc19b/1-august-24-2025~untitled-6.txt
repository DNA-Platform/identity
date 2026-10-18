/**
 * Base class for Chemical components
 */
export class $Chemical {
    // Static properties
    static readonly chemical: boolean = true;
    static _bindingsMap?: Map<string, Binding>;
    static _mergedBindings?: Binding[];

    // Private fields
    private chemicalUpdate?: () => void;
    private childRegistrationOrder?: number;
    private childPositionCounts?: Map<any, number>;

    // Public inert properties
    @inert()
    public parent?: $Chemical;
    
    @inert()
    public children: $Chemical[] = [];
    
    @inert()
    public component!: React.FC<Properties<this>>;
    
    @inert()
    public childrenElements?: ReactNode;

    // Constructor
    constructor() {
        this.component = this.createComponent();
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
    private createComponent(): React.FC<Properties<this>> {
        const self = this;
        
        const ChemicalComponent: React.FC<Properties<this>> = (props: any) => {
            const instance = self.createInstance();
            const [, forceUpdate] = useState({});

            useEffect(() => {
                self.setupInstance(instance, props, () => forceUpdate({}));
                return () => self.cleanupInstance(instance);
            }, []);
            
            self.processChildren(instance, props);
            return self.renderInstance(instance);
        };
        
        (ChemicalComponent as any).isChemical = true;
        return ChemicalComponent;
    }

    private createInstance(): $Chemical {
        const instance = Object.create(this);
        instance.children = [];
        return instance;
    }

    private setupInstance(instance: $Chemical, props: any, forceUpdate: () => void): void {
        this.applyProps(instance, props);
        this.setupReactivity(instance, forceUpdate);
        this.handleParentBinding(instance, props);
        this.runCatalystMethods(instance);
    }

    private cleanupInstance(instance: $Chemical): void {
        componentUpdaters.delete(instance);
        if (instance.parent) {
            this.unregisterFromParent(instance, instance.parent);
        }
    }

    private applyProps(instance: $Chemical, props: any): void {
        if (!props) return;
        
        for (const key in props) {
            if (props.hasOwnProperty(key) && 
                key !== 'children' && 
                key !== '__parentInstance') {
                this.setProp(instance, key, props[key]);
            }
        }
    }

    private setProp(instance: $Chemical, key: string, value: any): void {
        const componentKey = '$' + String(key);
        const transformers = instance.constructor.prototype.transformers;
        
        if (transformers?.has(componentKey)) {
            const transformer = transformers.get(componentKey);
            (instance as any)[componentKey] = transformer(value);
        } else {
            (instance as any)[componentKey] = value;
        }
    }

    private setupReactivity(instance: $Chemical, forceUpdate: () => void): void {
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

    private handleParentBinding(instance: $Chemical, props: any): void {
        if (!props.__parentInstance) return;
        
        instance.parent = props.__parentInstance;
        this.registerWithParent(instance, instance.parent);
    }

    private registerWithParent(child: $Chemical, parent: $Chemical): void {
        this.trackChild(parent, child);
        this.applyBinding(child, parent);
    }

    private trackChild(parent: $Chemical, child: $Chemical): void {
        if (!parent.children.includes(child)) {
            parent.children.push(child);
        }
    }

    private applyBinding(child: $Chemical, parent: $Chemical): void {
        const bindings = getBindings(parent);
        
        if (!parent.childPositionCounts) {
            parent.childPositionCounts = new Map();
        }
        
        for (const binding of bindings) {
            // Skip the children array itself
            if (binding.property === 'children') continue;
            
            if (this.matchesBinding(child, parent, binding)) {
                this.bindChild(child, parent, binding);
                break;
            }
        }
    }

    private matchesBinding(child: $Chemical, parent: $Chemical, binding: any): boolean {
        if (!(child instanceof binding.class!)) return false;
        
        if (binding.position !== undefined) {
            const count = parent.childPositionCounts!.get(binding.class) || 0;
            if (binding.position !== count) {
                parent.childPositionCounts!.set(binding.class!, count + 1);
                return false;
            }
            parent.childPositionCounts!.set(binding.class!, count + 1);
        }
        
        if (binding.where && !binding.where(child)) return false;
        
        return true;
    }

    private bindChild(child: $Chemical, parent: $Chemical, binding: any): void {
        const prop = (parent as any)[binding.property];
        
        if (Array.isArray(prop)) {
            prop.push(child);
        } else if (!(parent as any)[binding.property]) {
            (parent as any)[binding.property] = child;
        }
    }

    private unregisterFromParent(child: $Chemical, parent: $Chemical): void {
        this.unbindChild(child, parent);
        this.untrackChild(parent, child);
    }

    private unbindChild(child: $Chemical, parent: $Chemical): void {
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

    private untrackChild(parent: $Chemical, child: $Chemical): void {
        const index = parent.children.indexOf(child);
        if (index >= 0) {
            parent.children.splice(index, 1);
        }
    }

    private runCatalystMethods(instance: $Chemical): void {
        const methods = instance.constructor.prototype.catalystMethods;
        if (!methods) return;
        
        for (const methodName of methods) {
            if (typeof (instance as any)[methodName] === 'function') {
                (instance as any)[methodName]();
            }
        }
    }

    private processChildren(instance: $Chemical, props: any): void {
        if (!props?.children) return;
        
        const modifiedChildren = this.modifyChildren(instance, props.children);
        instance.childrenElements = modifiedChildren;
    }

    private modifyChildren(instance: $Chemical, children: ReactNode): ReactNode {
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

    private renderInstance(instance: $Chemical): ReactNode {
        const aboveNode = instance.above();
        const mainNode = instance.view();
        const belowNode = instance.below();
        
        if (!aboveNode && !belowNode) {
            return mainNode;
        }
        
        return this.createFragment(aboveNode, mainNode, belowNode);
    }

    private createFragment(above?: ReactNode, main?: ReactNode, below?: ReactNode): ReactNode {
        const children: ReactNode[] = [];
        
        if (above) children.push(above);
        if (main) children.push(main);
        if (below) children.push(below);
        
        return React.createElement(React.Fragment, null, ...children);
    }
}