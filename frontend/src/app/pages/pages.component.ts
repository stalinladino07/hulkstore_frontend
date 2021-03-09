import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api'; 

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() { 
    this.items = [
    {label: 'Productos', icon: 'pi pi-shopping-cart', routerLink:['/product']},
    {label: 'Inventario', icon: 'pi pi-file', routerLink:['/inventory']},
    {label: 'Stock', icon: 'pi pi-pencil', routerLink:['/stock']}
];
  }

}
