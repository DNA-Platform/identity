// Setter function interface
export interface Setter<T extends $Chemical = $Chemical> {
    (value: T): void;
    instance?: $Chemical;  // The instance that owns this setter
}