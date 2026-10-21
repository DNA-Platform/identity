export type $Properties<T> = {
    [K in keyof T as K extends `$${infer Rest}` ? Rest : never]: T[K] extends Function ? T[K] | undefined : T[K]
} & {
    [K in keyof T as K extends `$${infer Rest}` ? (T[K] extends Function ? Rest : never) : never]?: T[K]
};