// src/app/models/stock.model.ts
export interface Stock {
  id: number;
  product: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    thumbnail?: string;
    description?: string;
    low_stock_threshold: number;
    supplier?: {
      id: number;
      name: string;
      contact_person: string;
      email: string;
      phone: string;
      address: string;
    };
  };
  quantity_added: number;
  added_by: {
    username: string;
  };
  timestamp: string;
  note?: string;
}
