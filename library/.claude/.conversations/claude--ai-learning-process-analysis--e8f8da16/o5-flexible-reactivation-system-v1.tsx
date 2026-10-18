import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Flexible Reactivation System v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}/**
 * Makes a single property reactive
 * Can be called multiple times safely - will skip if already reactive
 */
function reactivateProperty(instance: any, propertyKey: string, owner?: any): void {
    // Check if property should be skipped
    if (shouldSkipProperty(instance, propertyKey)) {
        return;
    }
    
    // Check if already reactive by looking for getter/setter
    const descriptor = Object.getOwnPropertyDescriptor(instance, propertyKey);
    if (descriptor && (descriptor.get || descriptor.set)) {
        return; // Already reactive
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
 * Can optionally reactivate just a single property
 */
function reactivate<T extends object>(instance: T, owner?: any, propertyName?: string): T {
    // If a specific property is requested, just reactivate that one
    if (propertyName) {
        reactivateProperty(instance, propertyName, owner);
        return instance;
    }
    
    // For full object reactivation, check if already done
    if ((instance as any)[reactivated]) {
        return instance;
    }
    
    // Mark as reactivated
    (instance as any)[reactivated] = true;
    
    // Ensure backing fields exist
    if (!(instance as any)[backingFields]) {
        (instance as any)[backingFields] = {};
    }
    
    // Setup update trigger for decorate
    const triggerUpdate = () => {
        const updateFn = componentUpdaters.get(owner || instance);
        if (updateFn) updateFn();
    };
    
    // Use decorate for interceptors
    decorateLightweight(instance, {
        after: (className, memberName, memberType, method, args, result) => {
            if (memberType === 'field') {
                triggerUpdate();
            }
            return result;
        }
    });
    
    // Get all properties and make them reactive
    const properties = getAllProperties(instance);
    for (const propertyKey of properties) {
        reactivateProperty(instance, propertyKey, owner);
    }
    
    return instance;
}

/**
 * Lightweight version of decorate that doesn't set the reactivated flag
 * This allows reactivate to be called multiple times
 */
function decorateLightweight<T extends object>(instance: T, config: DecoratorConfig): T {
    const className: string = instance?.constructor?.name ?? "<UNKNOWN>";
    
    // Ensure backing fields exist
    if (!(instance as any)[backingFields]) {
        (instance as any)[backingFields] = {};
    }
    if (!(instance as any)[originalValues]) {
        (instance as any)[originalValues] = {};
    }
    
    // Process properties and fields
    decoratePropertiesLightweight(instance, className, config);
    
    return instance;
}

/**
 * Lightweight property decoration that works with reactivateProperty
 */
function decoratePropertiesLightweight(instance: any, className: string, config: DecoratorConfig): void {
    const properties = getAllProperties(instance);
    
    for (const key of properties) {
        if (shouldSkipProperty(instance, key)) {
            continue;
        }
        
        // Check if already has a descriptor (already reactive)
        const descriptor = Object.getOwnPropertyDescriptor(instance, key);
        if (descriptor && (descriptor.get || descriptor.set)) {
            // Already reactive, enhance with config if needed
            enhanceReactiveProperty(instance, key, descriptor, className, config);
            continue;
        }
        
        // Will be handled by reactivateProperty in the main reactivate function
    }
}

/**
 * Enhances an already reactive property with additional config
 */
function enhanceReactiveProperty(
    instance: any,
    key: string,
    descriptor: PropertyDescriptor,
    className: string,
    config: DecoratorConfig
): void {
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;
    
    if (!originalGet || !originalSet) return; // Skip if not fully reactive
    
    Object.defineProperty(instance, key, {
        get: function() {
            const value = originalGet.call(this);
            if (config.after) {
                const afterResult = config.after(className, key, 'property', () => {}, [], value);
                return afterResult ?? value;
            }
            return value;
        },
        set: function(newValue) {
            let valueToSet = newValue;
            if (config.before) {
                const beforeResult = config.before(className, key, 'field', () => {}, [newValue]);
                if (beforeResult && beforeResult[1]) {
                    valueToSet = beforeResult[1][0];
                }
            }
            originalSet.call(this, valueToSet);
            if (config.after) {
                config.after(className, key, 'field', () => {}, [valueToSet], undefined);
            }
        },
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable
    });
}

/**
 * Original decorate function - now uses decorateLightweight internally
 */
function decorate<T extends object>(instance: T, config: DecoratorConfig): T {
    // Skip if already decorated
    if ((instance as any)[reactivated]) {
        return instance;
    }
    
    // Use lightweight decoration
    decorateLightweight(instance, config);
    
    // Mark as decorated
    (instance as any)[reactivated] = true;
    
    return instance;
}

/**
 * Helper functions remain the same
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

function getAllProperties(obj: any): string[] {
    const properties = new Set<string>();
    
    Object.getOwnPropertyNames(obj).forEach(prop => {
        properties.add(prop);
    });
    
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
}

function reactivateData(obj: any, owner: any): void {
    if (!obj || typeof obj !== 'object' || (obj as any)[reactivated] || obj instanceof $Chemical) {
        return;
    }
    
    reactivate(obj, owner);
}`}
        </CodeBox>
    </Chapter>
);
