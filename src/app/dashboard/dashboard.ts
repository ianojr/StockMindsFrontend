import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product';
import { Product } from '../models/product';

import { SalesService } from '../services/sale';
import { Sale } from '../models/sales';

import { StockService } from '../services/stock';

import { Auth } from '../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  productCount: number = 0;
  saleCount: number = 0;
  stockCount: number = 0;
  recentStockAdditions: any[] = [];
  recentSales: any[] = [];

  constructor(
    private productService: ProductService,
    private salesService: SalesService,
    private stockService: StockService,
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: products => this.productCount = products.length,
      error: err => console.error('Error fetching products:', err)
    });

    this.salesService.getAllSales().subscribe({
      next: sales => this.saleCount = sales.length,
      error: err => console.error('Error fetching sales:', err)
    });

    this.stockService.getAllStock().subscribe({
      next: stock => this.stockCount = stock.length,
      error: err => console.error('Error fetching stock:', err)
    });

    this.stockService.getAllStock().subscribe({
      next: (data) => {
        // Show only latest 5 additions
        this.recentStockAdditions = data.slice(-5).reverse();
      },
      error: (err) => console.error('Error fetching stock additions:', err)
    });

    this.getRecentSales();
  }

  getRecentSales(): void {
    this.salesService.getAllSales().subscribe({
      next: (data) => {
        this.recentSales = data.slice(-5).reverse(); // last 5, latest first
      },
      error: (err) => console.error('Error fetching sales:', err)
    });
  }
}

