import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock';

@Component({
  selector: 'app-stock',
  standalone: false,
  templateUrl: './stock.html',
  styleUrl: './stock.css'
})
export class StockComponent implements OnInit {
  stocks: any[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockService.getAllStock().subscribe({
      next: (data) => this.stocks = data,
      error: (err) => console.error('Error fetching stock:', err)
    });
  }

  
}
