import { makeAutoObservable } from "mobx";

export default class ShopStore {
  constructor() {
    this._shopList = [];
    makeAutoObservable(this);
  }
  setShops(shopList) {
    this._shopList = shopList;
  }
  get shopListData() {
    return this._shopList;
  }
}
