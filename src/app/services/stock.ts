import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://127.0.0.1:8000/dashboard/stock/';

  constructor(private http: HttpClient) {}

  getAllStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl);
  }

  getStockById(id: number): Observable<Stock> {
    return this.http.get<Stock>(`${this.baseUrl}${id}/`);
  }

  addStock(data: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.baseUrl, data);
  }

  updateStock(id: number, data: Stock): Observable<Stock> {
    return this.http.put<Stock>(`${this.baseUrl}${id}/`, data);
  }

  deleteStock(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${id}/`);
  }
}
