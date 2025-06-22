import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { DashboardNav } from './dashboard-nav/dashboard-nav';
import { Inventory } from './inventory/inventory';
import { InventoryForm } from './inventory-form/inventory-form';
import { Sales } from './sales/sales';
import { Reports } from './reports/reports';
import { StockComponent } from './stock/stock';
import { Logout } from './logout/logout';

const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  // { path: 'dashboard', component: Dashboard},
  {
    path: 'dashboard',
    component: DashboardNav, // ⬅️ Contains <mat-sidenav-container>
    children: [
      { path: '', component: Dashboard },
      {
        path: 'inventory', component: Inventory,
        children: [
          // { path: '', component: Inventory }, // your inventory table
          { path: 'add', component: InventoryForm },
          { path: 'edit/:id', component: InventoryForm },
        ]
      },
      { path: 'stock', component: StockComponent },
      { path: 'sales', component: Sales },
      { path: 'reports', component: Reports },
    ]
  },
  { path: 'logout', component: Logout },
  { path: '', component: Home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
