// Setter function interface
export interface Setter<T extends $Chemical = $Chemical> {
    (value: T): void;
    instance?: $Chemical;  // The instance that owns this setter
}

// Sentinel value that marks a property as a setter placeholder
export const $setter: Setter = (value) => {
    throw new Error('$setter is a placeholder that should be replaced with an actual setter');
};