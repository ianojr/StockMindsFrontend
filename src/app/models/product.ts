export interface Product {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  quantity: number;
  price: number;
  low_stock_threshold: number;
  time_added: string;
  supplier?: {
    id: number;
    name: string;
    contact_person: string;
    email: string;
    phone: string;
    address: string;
  };
}
