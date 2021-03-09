import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductsComponent } from './products/products.component';
import { StockComponent } from './stock/stock.component';
import { InventoryComponent } from './inventory/inventory.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'stock', component: StockComponent},
            { path: 'product', component: ProductsComponent},
            { path: 'inventory', component: InventoryComponent},
            { path: '', redirectTo: '/product', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
