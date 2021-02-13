export type StringKeyString = Record<string, string>;

export type INewable<T> = new(...args: any[]) => T;

export interface Event<T = EventTarget> {
    target: T;
}
