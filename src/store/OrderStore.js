import { makeAutoObservable } from "mobx";

export default class OrderStore {
  constructor() {
    this._order = {
      list: [],
      name: "",
      email: "",
      phone: "",
      address: "",
    };
    this._isEmpty = true;
    this._selectedShopIdForOrder = 0;
    makeAutoObservable(this);
  }
  setOrder(order) {
    this._order = order;
  }
  setOrderProductsList(value) {
    debugger;
    this._order.list = value;
    console.log(this._order.list);
  }
  get orderProductsList() {
    return this._order.list;
  }
  setSelectedShopIdForOrder(id) {
    this._selectedShopIdForOrder = id;
  }
  get selectedShopIdForOrder() {
    return this._selectedShopIdForOrder;
  }

  setIsEmpty(value) {
    this._isEmpty = value;
  }
  get isEmpty() {
    return this._isEmpty;
  }
}
