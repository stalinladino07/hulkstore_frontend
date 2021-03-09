
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';


// ng2-charts
import { PagesComponent } from './pages.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { StockComponent } from './stock/stock.component';
import { InventoryComponent } from './inventory/inventory.component';

// temporal
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Primeng
/* import {DropdownModule} from 'primeng/dropdown';
 */
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule, MenuModule } from 'primeng';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
    declarations: [
        PagesComponent,
        UserComponent,
        ProductsComponent,
        StockComponent,
        InventoryComponent
    ],
    exports: [
        UserComponent,
        ProductsComponent,
        StockComponent,
        InventoryComponent
    ],
    imports: [
        BrowserAnimationsModule,
        PAGES_ROUTES,
        FormsModule,
        TableModule,
        ButtonModule,
        CommonModule,
        DialogModule,
        MenuModule,
        DropdownModule,
        MessagesModule,
        MessageModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PagesModule { }
