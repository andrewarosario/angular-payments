export abstract class Storage {
  abstract getData<T>(key: string): T;
  abstract setData<T>(key: string, value: T): void;
}
