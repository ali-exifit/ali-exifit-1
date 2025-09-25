
export interface NavLink {
  label: string;
  path: string;
}

export interface ClassSchedule {
  date: string;
  location: string;
  link: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export enum ItemType {
  Service = 'service',
  Product = 'product',
}

export enum DetailType {
  Classes = 'classes',
  Subscriptions = 'subscriptions',
}

export interface AppItem {
  id: string;
  title: string;
  type: ItemType;
  description: string;
  longDescription: string;
  features: string[];
  detailType: DetailType;
  details: ClassSchedule[] | PricingPlan[];
}
