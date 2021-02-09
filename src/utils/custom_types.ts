export type StringKeyString = Record<string, string| File>;
export type INewable<T> = new(...args: any[]) => T;
export interface Event<T = EventTarget> {
    target: T;
}
