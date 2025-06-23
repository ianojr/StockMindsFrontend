import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sale } from '../models/sales';
import { TopProduct } from '../models/top-products';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private baseUrl = 'http://127.0.0.1:8000/dashboard/sales/';

  constructor(private http: HttpClient) {}

  getAllSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.baseUrl);
  }

  getSaleById(id: number): Observable<Sale> {
    return this.http.get<Sale>(`${this.baseUrl}${id}/`);
  }

  // addSale(data: Sale): Observable<Sale> {
  //   return this.http.post<Sale>(this.baseUrl, data);
  // }

  createSale(sale: any): Observable<any> {
  return this.http.post('http://localhost:8000/dashboard/sales/', sale);
}


  // updateSale(id: number, data: Sale): Observable<Sale> {
  //   return this.http.put<Sale>(`${this.baseUrl}${id}/`, data);
  // }

  updateSale(id: number, saleData: any): Observable<Sale> {
  return this.http.put<Sale>(`${this.baseUrl}${id}/`, saleData);
}


  deleteSale(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }

  getTopSellingProducts(): Observable<TopProduct[]> {
  return this.http.get<TopProduct[]>('http://localhost:8000/dashboard/top-selling-products/');
}

}
