import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/interface/stock.services';
import { ProductService } from 'src/app/services/interface/product.services';
import { Message,MessageService } from 'primeng/api';
import { StockModel } from 'src/app/services/models/stock.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styles: []
})
export class StockComponent implements OnInit {

  constructor( public stockService: StockService, private productService: ProductService,
    private messageService: MessageService) {
  }

  displayDialog: boolean;

    stock:StockModel = new StockModel();
    selectedProduct: any;
    newStock: boolean;
    listStock: any[];
    cols: any[];
    listProducts: any[];
    selectProduct: any = {};
    msgs: Message[];
// tslint:disable-next-line:typedef
ngOnInit() {

  this.getCatalogoProducts();
  this.displayDialog = false;
  this.cols = [
      { field: 'code', header: 'Código' },
      { field: 'available', header: 'Cantidad Disponible' },
      { field: 'sold', header: 'Unidades Vendidas' }
      
  ];
  this.getStock();
}

  // tslint:disable-next-line:typedef
  showDialogToAdd() {
    this.newStock = true;
    this.stock = new StockModel();
    this.displayDialog = true;
  }

  // tslint:disable-next-line:typedef
  save() {
   if (this.validateStock(this.stock)) {
    this.displayDialog = false;
    this.messageService.add(
      {
      severity:'error', 
      summary:'Error Stock ->', 
      detail:'No existe cantidad disponible en venta'
      });
    return;
   }

   if (this.newStock) {
    this.stock.idProduct = this.selectProduct.idProduct;
    this.stock.code = this.selectProduct.code;
    this.stockService.saveStock(this.stock).subscribe(response => {
      this.getStock();
      this.stock = null;
      this.displayDialog = false;
     });
   }
    else {
      this.stock.idProduct = !this.selectProduct.idProduct? this.stock.idProduct: this.selectProduct.idProduct;
      this.stock.code = !this.selectProduct.code? this.stock.code: this.selectProduct.code;
      this.stockService.updateStock(this.stock).subscribe(response => {
        this.getStock();
        this.stock = null;
        this.displayDialog = false;
       });
    }
  }

  // tslint:disable-next-line:typedef
  delete(stock: any) {
  this.stockService.deleteStock(stock.idstock).subscribe(response => {
     this.getStock();
     this.stock = null;
     this.displayDialog = false;
   });
  }

  // tslint:disable-next-line:typedef
  onRowSelect(event) {
    this.newStock = false;
    this.stock = this.cloneCar(event);
    this.displayDialog = true;
  }

  cloneCar(c: any): any {
    const user = {};
    // tslint:disable-next-line:forin
    for (const prop in c) {
        user[prop] = c[prop];
    }
    return user;
  }

  // tslint:disable-next-line:typedef
  getStock() {
    this.stockService.getAllStock().subscribe(response => {
        this.listStock = response;
      });
  }

  // tslint:disable-next-line:typedef
  getCatalogoProducts() {
    this.listProducts =[];
    this.productService.getCatalogProducts().subscribe(response => {
        response.forEach(element => {
          this.listProducts.push({label: element.name + ' - '+ element.code, value: element});
        });
    }); 
  }

  
  validateStock(stock: any): boolean {
    if(stock.purchased !== undefined && stock.available !== undefined && stock.purchased !== null && stock.available !== null) {
      if (stock.purchased > stock.available) {
        return true;
      }
    } else {
      return true;
    }
    
    return false;
  }
}


