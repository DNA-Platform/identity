import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Refactored Reactivate Functions v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}/**
 * Makes a single property reactive
 */
function reactivateProperty(instance: any, propertyKey: string, owner?: any): void {
    // Skip if already reactive
    const descriptor = Object.getOwnPropertyDescriptor(instance, propertyKey) ||
        Object.getOwnPropertyDescriptor(Object.getPrototypeOf(instance), propertyKey);
    
    if (descriptor && (descriptor.get || descriptor.set)) {
        return;
    }
    
    // Skip certain properties
    if (shouldSkipProperty(instance, propertyKey)) {
        return;
    }
    
    // Ensure backing fields exist
    if (!instance[backingFields]) {
        instance[backingFields] = {};
    }
    
    // Store current value
    const currentValue = instance[propertyKey];
    instance[backingFields][propertyKey] = currentValue;
    
    // Get the trigger function for updates
    const triggerUpdate = () => {
        const updateFn = componentUpdaters.get(owner || instance);
        if (updateFn) updateFn();
    };
    
    // Create reactive property
    Object.defineProperty(instance, propertyKey, {
        get: function() {
            return this[backingFields][propertyKey];
        },
        set: function(newValue) {
            const oldValue = this[backingFields][propertyKey];
            
            // Check equality (including custom comparers)
            if (areEqual(this, propertyKey, oldValue, newValue)) {
                return;
            }
            
            // Handle nested object reactivity
            if (shouldReactivateValue(newValue)) {
                reactivateData(newValue, owner || this);
            }
            
            // Set new value and trigger update
            this[backingFields][propertyKey] = newValue;
            triggerUpdate();
        },
        enumerable: true,
        configurable: true
    });
    
    // Process the initial value if it needs reactivity
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

/**
 * Reactivates an object, making its properties reactive
 */
function reactivate<T extends object>(instance: T, owner?: any): T {
    // Skip if already reactivated
    if ((instance as any)[reactivated]) {
        return instance;
    }
    
    // Mark as reactivated
    (instance as any)[reactivated] = true;
    
    // Ensure backing fields exist
    if (!(instance as any)[backingFields]) {
        (instance as any)[backingFields] = {};
    }
    
    // Get all properties and make them reactive
    const properties = getAllProperties(instance);
    for (const propertyKey of properties) {
        reactivateProperty(instance, propertyKey, owner);
    }
    
    return instance;
}

/**
 * Reactivates a nested data object in an object or field 
 */
function reactivateData(obj: any, owner: any): void {
    if (!obj || typeof obj !== 'object' || (obj as any)[reactivated] || obj instanceof $Chemical) {
        return;
    }
    
    reactivate(obj, owner);
}

/**
 * Helper function to determine if a property should skip reactivity
 */
function shouldSkipProperty(instance: any, key: string): boolean {
    return key === 'constructor' ||
           key === String(reactivated) ||
           key === String(backingFields) ||
           key === String(originalValues) ||
           key === String(deactivated) ||
           key === 'state' || 
           key === 'props' ||
           key.startsWith('_') ||
           typeof instance[key] === 'function' ||
           $Chemical.prototype.hasOwnProperty(key) ||
           instance[key] instanceof $Chemical ||
           isInertProperty(instance, key);
}

/**
 * Helper function to determine if a value should be made reactive
 */
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

/**
 * Gets all properties from an object including prototype chain
 */
function getAllProperties(obj: any): string[] {
    const properties = new Set<string>();
    
    // Get own properties
    Object.getOwnPropertyNames(obj).forEach(prop => {
        properties.add(prop);
    });
    
    // Get properties from prototype chain
    let proto = Object.getPrototypeOf(obj);
    while (proto && proto !== Object.prototype) {
        Object.getOwnPropertyNames(proto).forEach(prop => {
            if (!prop.startsWith('_') && prop !== 'constructor') {
                properties.add(prop);
            }
        });
        proto = Object.getPrototypeOf(proto);
    }
    
    return Array.from(properties);
}

/**
 * Checks if a property is marked as inert
 */
function isInertProperty(instance: any, propertyKey: string): boolean {
    const proto = Object.getPrototypeOf(instance);
    return proto?.[deactivated as any]?.has(propertyKey) || false;
}

/**
 * Checks if two values are equal, considering custom comparers
 */
function areEqual(instance: any, propertyKey: string, oldValue: any, newValue: any): boolean {
    // Basic equality
    if (oldValue === newValue) return true;
    
    // Check for custom comparer
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
