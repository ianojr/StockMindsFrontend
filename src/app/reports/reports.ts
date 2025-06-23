import { Component } from '@angular/core';
import { SalesService } from '../services/sale';
import { Sale } from '../models/sales';
import { StockService } from '../services/stock';
import { TopProduct } from '../models/top-products';

@Component({
  selector: 'app-reports',
  standalone: false,
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {
  totalSales: number = 0;
  totalStockItems: number = 0;
  lowStockCount: number = 0;

  recentSales: Sale[] = [];

  constructor(
    private salesService: SalesService,
    private stockService: StockService
  ) { }

  ngOnInit(): void {

    this.stockService.getAllStock().subscribe({
      next: (stocks) => {
        this.totalStockItems = stocks.reduce((sum, stock) => sum + (stock.quantity_added || 0), 0);
      },
      error: (err) => console.error('Error fetching stock:', err)
    });

    this.salesService.getAllSales().subscribe({
      next: (sales: Sale[]) => {
        this.totalSales = sales.reduce((acc, sale) => acc + Number(sale.total_price), 0);
      },
      error: (err) => console.error('Failed to load sales:', err)
    });

    this.stockService.getAllStock().subscribe({
      next: (stocks) => {
        this.lowStockCount = stocks.filter(
          (stock) => stock.quantity_added <= stock.product.low_stock_threshold
        ).length;
      },
      error: (err) => console.error('Error fetching stock:', err)
    });

    this.salesService.getAllSales().subscribe({
    next: (sales) => this.recentSales = sales,
    error: (err) => console.error('Failed to load recent sales:', err)
  });
  }
}
