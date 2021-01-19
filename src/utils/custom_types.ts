export type stringKeyObject = Record<string, Record<string, unknown>>;
export type stringKeyString = Record<string, string| File>;
export type INewable<T> = new(...args: any[]) => T;
export interface Event<T = EventTarget> {
	target: T;
}
