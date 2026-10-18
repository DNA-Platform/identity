export type $Properties<T> = {
    [K in keyof T as K extends `${infer Rest}` ? (T[K] extends Function ? never : Rest) : never]: T[K]
} & {
    [K in keyof T as K extends `${infer Rest}` ? (T[K] extends Function ? Rest : never) : never]?: T[K]
};