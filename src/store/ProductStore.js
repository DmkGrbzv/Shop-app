import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._isEmptyDB = false;
    this._productList = [];
    makeAutoObservable(this, {}, { deep: true });
  }
  setProducts(productList) {
    this._productList = productList;
  }
  setIsEmptyDB(value) {
    this._isEmptyDB = value;
  }
  get productList() {
    return this._productList;
  }
  get isEmptyDB() {
    return this._isEmptyDB;
  }
}
