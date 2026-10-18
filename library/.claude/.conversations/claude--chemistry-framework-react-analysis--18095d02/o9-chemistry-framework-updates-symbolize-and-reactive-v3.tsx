import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework Updates - symbolize and reactive v3 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}// Updated symbolize function that handles Chemicals
function symbolize(value: any): string {
    return stringify(value, function(this: any, key: string, val: any): any {
        if (key === '') return val;
        
        // Handle Chemical instances - return their cid
        if (val instanceof $Chemical) return { _cid: val.cid };
        
        // Skip non-reactive properties when parent is Chemical
        if (this instanceof $Chemical && !isReactiveProperty(this, key, val))
            return undefined;
        
        // Skip functions
        if (typeof val === 'function') return undefined;
        
        // Handle Next.js proxies if needed
        if (val?.constructor?.name === 'Proxy') return '[Proxy]';
        
        return val;
    });
}

// Reactive decorator for methods
export function reactive() {
    return function (target: any, property: string) {
        if (!target[decoratorsKey]) target[decoratorsKey] = new DecoratorCache();
        target[decoratorsKey].reactive.set(property, true);
    };
}

// Updated DecoratorCache to include reactive
class DecoratorCache {
    $: Map<string, { type: Type, expecting: '?' | '!' | '[]' }> = new Map();
    parent: Map<string, Type> = new Map();
    inert: Map<string, boolean> = new Map();
    dynamic: Map<string, ((value: any) => any) | undefined> = new Map();
    reactive: Map<string, boolean> = new Map();  // New!
}

// Updated isReactiveProperty to use decorator cache
function isReactiveProperty(instance: any, key: string, value: any, decorators?: DecoratorCache): boolean {
    if (typeof key === 'symbol' || key.startsWith('_')) return false;
    
    if (!decorators && instance instanceof $Chemical)
        decorators = instance[decoratorsKey];
    
    if (decorators?.inert.get(key)) return false;
    
    if (typeof value === 'function')
        return decorators?.reactive.get(key) || false;
    
    if (key === 'constructor' || key === 'Component' || key === 'parent' || 
        key === 'children' || key === 'elements') return false;
    
    return true;
}

// Updated Bond.examine to handle reactive methods
private examine(target: any, mode: 'instance' | 'prototype') {
    if (mode === 'prototype') {
        const decorators = target[decoratorsKey];
        if (!decorators) return;
        
        const parentType = decorators.parent.get(this._property);
        if (parentType) {
            this._type = parentType || $Chemical;
            this._isParent = true;
            this._isChemical = true;
            this._isInert = true;
            this._isSettable = false;
            return;
        }
        
        // Check inert first - if inert, skip everything else
        if (decorators.inert.get(this._property)) {
            this._isInert = true;
            return;  // Don't process inert properties further
        }
        
        // Check reactive for functions
        const value = target[this._property];
        if (typeof value === 'function') {
            if (!decorators.reactive.get(this._property)) {
                this._isInert = true;  // Non-reactive functions are inert
                return;
            }
            // Reactive function - treat as mutable
            this._isMutable = true;
            this._symbolizer = () => this._property;  // Functions use their name as symbol
        }
        
        const dynamic = decorators.dynamic.get(this._property);
        if (dynamic !== undefined) {
            this._symbolizer = dynamic || symbolize;
            this._isMutable = true;
        }
        
        const $config = decorators.$.get(this._property);
        if ($config) {
            this._type = $config.type;
            this._isProp = this._property.startsWith('$');
            this._isChemical = true;
            this._isRequired = $config.expecting === '!';
            this._isCollective = $config.expecting === '[]';
            
            if (this._isProp) {
                const chemical$ = this._chemical as any;
                if (chemical$[this._property.substring(1)] === $Chemical.$set)
                    this._isExplicitlyBound = true;
                else
                    this._isImplicitlyBound = true;
            }
        }
    }
    
    const descriptor = Object.getOwnPropertyDescriptor(target, this._property);
    if (descriptor?.get && !descriptor.set) {
        this._isSettable = false;
        this._isMutable = true;
        this._symbolizer = symbolize;
    }
    
    const value = descriptor?.get ? undefined : target[this._property];
    if (value == null) return;
    
    // Handle different value types with appropriate symbolizers
    if (value instanceof $Chemical) {
        this._isChemical = true;
        this._isValue = true;
        this._isMutable = false;
        this._symbolizer = (v: any) => v?.cid || undefined;
        if (!this._type) this._type = value.constructor as Type;
        return;
    }
    
    const valueType = typeof value;
    if (valueType === 'string' || valueType === 'number' || valueType === 'boolean') {
        if (!this._isValue && !this._isMutable) {
            this._isValue = true;
            this._symbolizer = (v) => v;  // Primitives are their own symbol
        }
        return;
    }
    
    if (valueType === 'object') {
        if (Array.isArray(value)) {
            // Check if it's a Chemical array
            if (value.length > 0 && value[0] instanceof $Chemical) {
                this._isCollective = true;
                this._isChemical = true;
                this._symbolizer = (v: any[]) => symbolize(v?.map(c => c?.cid || undefined));
            } else {
                this._isMutable = true;
                this._isValue = false;
                this._symbolizer = symbolize;
            }
        } else {
            this._isMutable = true;
            this._isValue = false;
            this._symbolizer = symbolize;
        }
    }
}`}
        </CodeBox>
    </Chapter>
);
