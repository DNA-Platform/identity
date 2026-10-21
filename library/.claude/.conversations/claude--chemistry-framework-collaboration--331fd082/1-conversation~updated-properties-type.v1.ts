// Helper type to extract non-Chemical $ properties
type Properties<T> = {
    [K in keyof T as K extends `$${infer Rest}` 
        ? T[K] extends $Chemical
            ? never  // Exclude $properties that are Chemicals
            : Rest   // Include non-Chemical $properties
        : never
    ]: T[K]
} & {
    children?: ReactNode;
};