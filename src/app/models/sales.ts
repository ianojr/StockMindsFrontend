export interface Supplier {
  id: number;
  name: string;
  contact_person: string;
  email: string;
  phone: string;
  address: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  low_stock_threshold: number;
  time_added: string;
  supplier: Supplier;
}

export interface Stock {
  id: number;
  product: Product;
  added_by: {
    username: string;
  };
  quantity_added: number;
  timestamp: string;
  note: string;
}

export interface Sale {
  id: number;
  stock: Stock;
  sold_by: {
    username: string;
  };
  quantity: number;
  total_price: string;
  time: string;
}
