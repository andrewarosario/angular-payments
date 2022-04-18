import { Injectable } from "@angular/core";
import { Storage } from "../storage";

@Injectable()
export class LocalStorageService extends Storage {
  getData<T>(key: string): T {
    const data = localStorage.getItem(key);
    return data && JSON.parse(data);
  }

  setData<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
