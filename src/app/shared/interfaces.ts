export interface IEmploye {
  id: number;
  name: String;
  city: String;
  orderTotal?: number;
  employeSince: any;
}

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
