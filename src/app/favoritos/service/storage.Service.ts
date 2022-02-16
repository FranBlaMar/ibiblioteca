import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  

  //Metodo para añadir libro al localstorage
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  public get(key: string) {
    this._storage?.get(key);
  }
}