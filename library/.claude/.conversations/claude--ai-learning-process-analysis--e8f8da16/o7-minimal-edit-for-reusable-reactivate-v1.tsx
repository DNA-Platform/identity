import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Minimal Edit for Reusable Reactivate v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}/**
 * Reactivates an object, making its properties reactive
 */
function reactivate<T extends object>(instance: T, owner?: any): T {
    // Remove the early return - allow multiple calls
    // if ((instance as any)[reactivated]) {
    //     return instance;
    // }

    // Only mark as reactivated if not already marked
    if (!(instance as any)[reactivated]) {
        (instance as any)[reactivated] = true;
    }

    const triggerUpdate = () => {
        const updateFn = componentUpdaters.get(owner || instance);
        if (updateFn) updateFn();
    };

    decorate(instance, {
        after: (className, memberName, memberType, method, args, result) => {
            if (memberType === 'field') {
                triggerUpdate();
            }
            return result;
        }
    });

    // Only reactify non-Chemical objects
    for (const key in instance) {
        if (key !== 'constructor' && !key.startsWith('_')) {
            const value = (instance as any)[key];
            // Skip Chemical instances - they manage themselves
            if (!(value instanceof $Chemical) && value && typeof value === 'object' && !(value instanceof Date)) {
                if (Array.isArray(value)) {
                    value.forEach(item => {
                        if (!(item instanceof $Chemical) && item && typeof item === 'object') {
                            reactivateData(item, owner || instance);
                        }
                    });
                } else {
                    reactivateData(value, owner || instance);
                }
            }
        }
    }

    return instance;
}

/**
 * Reactivates a nested data object in an object or field 
 */
function reactivateData(obj: any, owner: any) {
    if (!obj || typeof obj !== 'object' || obj instanceof $Chemical) {
        return;
    }
    
    // Remove the reactivated check to allow re-processing
    // if ((obj as any)[reactivated]) {
    //     return;
    // }

    reactivate(obj, owner);
}

/**
 * Deactivates an object, preventing it from triggering updates
 * This is exported for advanced usage but generally should be used via Chemical.deactivate
 */
function deactivate<T extends object>(instance: T): T {
    // Mark as deactivated
    (instance as any)[deactivated] = true;
    return instance;
}

// Type definitions for decorator configuration
type MemberType = 'method' | 'property' | 'field';
type DecoratorConfig = {
    before?: (
        className: string,
        memberName: string,
        memberType: MemberType,
        method: Function,
        args: any[]
    ) => [Function, any[]] | undefined;
    after?: (
        className: string,
        memberName: string,
        memberType: MemberType,
        method: Function,
        args: any[],
        result: any
    ) => any | undefined;
    error?: (
        className: string,
        memberName: string,
        memberType: MemberType,
        method: Function,
        args: any[],
        error: any
    ) => any | undefined;
};

/**
 * Decorates an object's methods and properties with interceptors
 */
function decorate<T extends object>(instance: T, config: DecoratorConfig): T {
    // Skip if already decorated - but check individual properties
    // if ((instance as any)[reactivated]) {
    //     return instance;
    // }

    const className: string = instance?.constructor?.name ?? "<UNKNOWN>";

    // Initialize backing fields if not present
    if (!(instance as any)[backingFields]) {
        (instance as any)[backingFields] = {};
    }
    if (!(instance as any)[originalValues]) {
        (instance as any)[originalValues] = {};
    }

    // Process properties and fields
    decorateProperties(instance, className, config);

    // Mark as reactified
    (instance as any)[reactivated] = true;

    return instance;
}

/**
 * Decorates properties of an object with interceptors
 */
function decorateProperties(instance: any, className: string, config: DecoratorConfig): void {
    const properties = getAllProperties(instance);

    for (const key of properties) {
        // Skip internal properties and methods we've already processed
        if (key === 'constructor' ||
            key === String(reactivated) ||
            key === String(backingFields) ||
            key === String(originalValues) ||
            key === 'state' || key === 'props' ||
            typeof instance[key] === 'function' ||
            $Chemical.prototype.hasOwnProperty(key) ||    // Skip Chemical base class properties
            instance[key] instanceof $Chemical) {         // Skip Chemical instances
            continue;
        }

        // Check if this is already an accessor property (already reactive)
        const descriptor = Object.getOwnPropertyDescriptor(instance, key);
        
        // Skip if already has getter/setter (already reactive)
        if (descriptor && (descriptor.get || descriptor.set)) {
            continue;
        }
        
        // Check prototype descriptor
        const protoDescriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(instance), key);
        if (protoDescriptor && (protoDescriptor.get || protoDescriptor.set)) {
            // Handle accessor property from prototype
            decorateAccessorProperty(instance, key, protoDescriptor, className, config);
            continue;
        }

        // Handle regular data property
        // Store original value
        instance[backingFields][key] = instance[key];

        // Replace with getter/setter for regular properties
        Object.defineProperty(instance, key, {
            get: function () {
                const value = this[backingFields][key];

                if (config.after) {
                    const afterResult = config.after(className, key, 'property', () => { }, [], value);
                    return afterResult ?? value;
                }

                return value;
            },
            set: function (newValue) {
                const oldValue = this[backingFields][key];

                // Skip update if values are equal
                if (oldValue === newValue) {
                    return;
                }

                // Check for custom comparer
                const proto = Object.getPrototypeOf(this);
                const hasCustomComparer = proto &&
                    proto[comparerSymbol as any] &&
                    proto[comparerSymbol as any].has(key);

                if (hasCustomComparer) {
                    const customComparer = proto[comparerSymbol as any].get(key);
                    if (customComparer(oldValue, newValue)) {
                        return; // Skip update if custom comparer says they're equal
                    }
                }

                let valueToSet = newValue;

                // Apply before logic if available
                if (config.before) {
                    const beforeResult = config.before(className, key, 'field', () => { }, [newValue]);
                    if (beforeResult && beforeResult[1]) {
                        valueToSet = beforeResult[1][0];
                    }
                }

                // Handle frozen/sealed objects
                if (valueToSet && typeof valueToSet === 'object') {
                    // Skip reactification for frozen/sealed objects and Chemical instances
                    if (!Object.isFrozen(valueToSet) &&
                        !Object.isSealed(valueToSet) &&
                        Object.isExtensible(valueToSet) &&
                        !(valueToSet instanceof $Chemical)) {
                        // Deep reactify complex objects
                        if (!Array.isArray(valueToSet) && !(valueToSet instanceof Date)) {
                            reactivateData(valueToSet, this);
                        }
                    }
                }

                // Set the new value
                this[backingFields][key] = valueToSet;

                // Apply after logic
                if (config.after) {
                    config.after(className, key, 'field', () => { }, [valueToSet], undefined);
                }
            },
            enumerable: true,
            configurable: true
        });
    }
}

/**
 * Decorates an accessor property (getter/setter)
 */
function decorateAccessorProperty(
    instance: any,
    key: string,
    descriptor: PropertyDescriptor,
    className: string,
    config: DecoratorConfig
): void {
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;

    Object.defineProperty(instance, key, {
        get: function () {
            // Preserve original getter behavior
            const value = originalGet?.call(this);

            if (config.after) {
                const afterResult = config.after(className, key, 'property', () => { }, [], value);
                return afterResult ?? value;
            }

            return value;
        },
        set: function (newValue) {
            if (!originalSet) return; // Read-only property

            const oldValue = originalGet?.call(this);

            // Skip update if values are equal
            if (oldValue === newValue) {
                return;
            }

            // Check for custom comparer
            const proto = Object.getPrototypeOf(this);
            const hasCustomComparer = proto &&
                proto[comparerSymbol as any] &&
                proto[comparerSymbol as any].has(key);

            if (hasCustomComparer) {
                const customComparer = proto[comparerSymbol as any].get(key);
                if (customComparer(oldValue, newValue)) {
                    return; // Skip update if custom comparer says they're equal
                }
            }

            // Call original setter
            originalSet.call(this, newValue);

            // Apply after logic to trigger updates
            if (config.after) {
                config.after(className, key, 'field', () => { }, [newValue], undefined);
            }
        },
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable
    });
}

// Rest of the functions remain unchanged...`}
        </CodeBox>
    </Chapter>
);
