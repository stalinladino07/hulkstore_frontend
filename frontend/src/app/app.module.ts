import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// Rutas
import { APP_ROUTES } from './app.routes';
import { GenericService } from './services/interface/generic.services';
import { ServiceModule } from './services/service.module';
import { ConfigService } from './services/interface/services.test';
import { ProductService } from './services/interface/product.services';
import { StockService } from './services/interface/stock.services';
import { InventoryService } from './services/interface/inventory.services';
import { MessageService } from 'primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTES,
    ServiceModule
  ],
  providers: [GenericService, ConfigService, ProductService, StockService, InventoryService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
