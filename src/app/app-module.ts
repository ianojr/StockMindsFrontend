import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

// Charts Module
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { DashboardNav } from './dashboard-nav/dashboard-nav';
import { Dashboard } from './dashboard/dashboard';
import { Inventory } from './inventory/inventory';
import { FormsModule } from '@angular/forms';
import { InventoryForm } from './inventory-form/inventory-form';
import { Sales } from './sales/sales';
import { Reports } from './reports/reports';
import { StockComponent } from './stock/stock';
import { Logout } from './logout/logout';
import { DashboardNavTop } from './dashboard-nav-top/dashboard-nav-top';

@NgModule({
  declarations: [
    App,
    Home,
    Login,
    Register,
    DashboardNav,
    Dashboard,
    Inventory,
    InventoryForm,
    Sales,
    Reports,
    StockComponent,
    Logout,
    DashboardNavTop,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // Charts Module
    NgChartsModule,
    // Angular Material
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideClientHydration(), 
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
