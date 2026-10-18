import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Simplified Reactivation System v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}/**
 * Reactivates an object, making its properties reactive
 * Can be called multiple times safely - skips properties that are already reactive
 */
function reactivate<T extends object>(instance: T, owner?: any): T {
    // Ensure backing fields exist
    if (!(instance as any)[backingFields]) {
        (instance as any)[backingFields] = {};
    }
    
    // Setup update trigger
    const triggerUpdate = () => {
        const updateFn = componentUpdaters.get(owner || instance);
        if (updateFn) updateFn();
    };
    
    // Process all properties
    for (const key in instance) {
        if (shouldSkipProperty(instance, key)) {
            continue;
        }
        
        // Check if already reactive
        const descriptor = Object.getOwnPropertyDescriptor(instance, key);
        if (descriptor && (descriptor.get || descriptor.set)) {
            continue; // Already reactive, skip
        }
        
        // Store current value
        const currentValue = instance[key];
        instance[backingFields][key] = currentValue;
        
        // Make property reactive
        Object.defineProperty(instance, key, {
            get: function() {
                return this[backingFields][key];
            },
            set: function(newValue) {
                const oldValue = this[backingFields][key];
                
                // Check equality
                if (areEqual(this, key, oldValue, newValue)) {
                    return;
                }
                
                // Handle nested reactivity
                if (shouldReactivateValue(newValue)) {
                    reactivateData(newValue, owner || this);
                }
                
                // Set value and trigger update
                this[backingFields][key] = newValue;
                triggerUpdate();
            },
            enumerable: true,
            configurable: true
        });
        
        // Process initial nested values
        if (shouldReactivateValue(currentValue)) {
            if (Array.isArray(currentValue)) {
                currentValue.forEach(item => {
                    if (shouldReactivateValue(item)) {
                        reactivateData(item, owner || instance);
                    }
                });
            } else {
                reactivateData(currentValue, owner || instance);
            }
        }
    }
    
    return instance;
}

/**
 * Reactivates a nested data object
 */
function reactivateData(obj: any, owner: any): void {
    if (!obj || typeof obj !== 'object' || obj instanceof $Chemical) {
        return;
    }
    
    reactivate(obj, owner);
}

/**
 * In bindChild, we can now do this simple pattern:
 */
private bindChild(child: $Chemical, parent: $Chemical, binding: any): void {
    // Initialize property with empty value if undefined
    if ((parent as any)[binding.property] === undefined) {
        (parent as any)[binding.property] = Array.isArray(binding.default) ? [] : null;
    }
    
    // Make parent reactive (safe to call multiple times)
    reactivate(parent, parent);
    
    // Now assign through the reactive setter
    const prop = (parent as any)[binding.property];
    if (Array.isArray(prop)) {
        prop.push(child);
    } else {
        (parent as any)[binding.property] = child;
    }
}

/**
 * Simplified decorate function
 */
function decorate<T extends object>(instance: T, config: DecoratorConfig): T {
    const className: string = instance?.constructor?.name ?? "<UNKNOWN>";
    
    // Just reactivate with the config applied
    reactivate(instance, instance);
    
    // Apply interceptors to existing reactive properties if needed
    if (config.after) {
        // This could enhance the reactive properties with additional behavior
        // but for simplicity, the basic reactivity is enough for now
    }
    
    return instance;
}

/**
 * Helper functions remain simple
 */
function shouldSkipProperty(instance: any, key: string): boolean {
    return key === 'constructor' ||
           key === String(backingFields) ||
           key === 'state' || 
           key === 'props' ||
           key.startsWith('_') ||
           typeof instance[key] === 'function' ||
           $Chemical.prototype.hasOwnProperty(key) ||
           instance[key] instanceof $Chemical ||
           isInertProperty(instance, key);
}

function shouldReactivateValue(value: any): boolean {
    return value && 
           typeof value === 'object' &&
           !Object.isFrozen(value) &&
           !Object.isSealed(value) &&
           Object.isExtensible(value) &&
           !(value instanceof $Chemical) &&
           !(value instanceof Date) &&
           !(value instanceof RegExp) &&
           !(value instanceof Promise);
}

function isInertProperty(instance: any, propertyKey: string): boolean {
    const proto = Object.getPrototypeOf(instance);
    return proto?.[deactivated as any]?.has(propertyKey) || false;
}

function areEqual(instance: any, propertyKey: string, oldValue: any, newValue: any): boolean {
    if (oldValue === newValue) return true;
    
    const proto = Object.getPrototypeOf(instance);
    if (proto?.[comparerSymbol as any]?.has(propertyKey)) {
        const customComparer = proto[comparerSymbol as any].get(propertyKey);
        return customComparer(oldValue, newValue);
    }
    
    return false;
}`}
        </CodeBox>
    </Chapter>
);
