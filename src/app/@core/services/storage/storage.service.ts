import {Injectable} from '@angular/core';
import {IStorage} from '@core/interfaces';
import {StorageModel} from '@core/models';

@Injectable()
export class StorageService {
  storage = localStorage;

  constructor() {  }

  add<T>(key: string, value: T): void {
    if (typeof value === 'string') {
      this.storage.setItem(key, value);
    } else {
      try {
        this.storage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.log(`Got error while trying to store this: ${value}`, e);
      }
    }
  }

  get<T>(key: string): IStorage<T> {
    const obj = new StorageModel<T>();

    if (this.storage.getItem(key)) {
      try {
        obj.value = JSON.parse(this.storage.getItem(key));
        obj.exist = true;
      } catch (err) {
        obj.exist = false;
        obj.value = err.message;
      }
    } else {
      obj.exist = false;
      obj.value = null;
    }

    return obj;

  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
