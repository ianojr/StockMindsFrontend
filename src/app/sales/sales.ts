import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sale';
import { Sale } from '../models/sales';
@Component({
  selector: 'app-sales',
  standalone: false,
  templateUrl: './sales.html',
  styleUrl: './sales.css'
})
export class Sales implements OnInit {
  sales: Sale[] = [];

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.fetchSales();
  }

  fetchSales(): void {
    this.salesService.getAllSales().subscribe({
      next: (data) => this.sales = data,
      error: (err) => console.error('Error fetching sales:', err)
    });
  }
}
export { SalesService };

