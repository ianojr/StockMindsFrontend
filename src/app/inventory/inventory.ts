import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.html',
  styleUrl: './inventory.css'
})
export class Inventory {
  searchQuery: string = '';

  inventory = [
    { name: 'Laptop', category: 'Electronics', quantity: 10, price: 78000 },
    { name: 'Printer', category: 'Electronics', quantity: 5, price: 15000 },
    { name: 'Notebooks', category: 'Stationery', quantity: 100, price: 50 },
    { name: 'Pens', category: 'Stationery', quantity: 250, price: 15 }
  ];

  get filteredInventory() {
    if (!this.searchQuery) return this.inventory;
    return this.inventory.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  displayedColumns = ['name', 'category', 'quantity', 'price', 'actions'];
}
