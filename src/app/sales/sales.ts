import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sale';
import { Sale } from '../models/sales';
import { StockService } from '../services/stock';
import { Stock } from '../models/stock';
@Component({
  selector: 'app-sales',
  standalone: false,
  templateUrl: './sales.html',
  styleUrl: './sales.css'
})
export class Sales implements OnInit {
  sales: Sale[] = [];
  stocks: Stock[] = [];

  selectedStockId: number | null = null;
  editingSaleId: number | null = null;

  selectedPrice: number = 0;
  selectedQuantity: number = 1;
  totalPrice: number = 0;


  constructor(
    private salesService: SalesService,
    private stockService: StockService,
  ) { }

  ngOnInit(): void {
    this.fetchSales();

    this.stockService.getAllStock().subscribe({
      next: (res) => this.stocks = res,
      error: (err) => console.error('Failed to load stock:', err)
    });

  }
  onProductChange(): void {
    const selectedStock = this.stocks.find(s => s.id === Number(this.selectedStockId));
    this.selectedPrice = selectedStock?.product?.price || 0;
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    if (this.selectedPrice && this.selectedQuantity) {
      this.totalPrice = this.selectedPrice * this.selectedQuantity;
    } else {
      this.totalPrice = 0;
    }
  }

  submitSale(): void {
  const saleData = {
    stock: this.selectedStockId,
    quantity: this.selectedQuantity,
    total_price: this.totalPrice
  };

  if (this.editingSaleId) {
    this.salesService.updateSale(this.editingSaleId, saleData).subscribe({
      next: () => {
        alert('Sale updated successfully!');
        this.fetchSales();
        this.resetForm();
      },
      error: err => {
        console.error('Error updating sale:', err);
        alert('Failed to update sale.');
      }
    });
  } else {
    this.salesService.createSale(saleData).subscribe({
      next: () => {
        alert('Sale saved successfully!');
        this.fetchSales();
        this.resetForm();
      },
      error: err => {
        console.error('Error saving sale:', err);
        alert('Failed to save sale.');
      }
    });
  }
}


editSale(sale: Sale): void {
  this.editingSaleId = sale.id;
  this.selectedStockId = sale.stock?.id || null;
  this.selectedPrice = Number(sale.stock?.product?.price) || 0;
  this.selectedQuantity = sale.quantity;
  this.updateTotalPrice();
}

resetForm(): void {
  this.editingSaleId = null;
  this.selectedStockId = null;
  this.selectedPrice = 0;
  this.selectedQuantity = 1;
  this.totalPrice = 0;
}





  fetchSales(): void {
    this.salesService.getAllSales().subscribe({
      next: (data) => this.sales = data,
      error: (err) => console.error('Error fetching sales:', err)
    });
  }


}
export { SalesService };

