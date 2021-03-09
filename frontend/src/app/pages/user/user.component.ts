import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/interface/services.test';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor( public configService: ConfigService) {
  }

  displayDialog: boolean;

    user: any = {};
    selectedCar: any;
    newUser: boolean;
    listUsers: any[];
    cols: any[];

// tslint:disable-next-line:typedef
ngOnInit() {

  this.displayDialog = false;
  this.cols = [
      { field: 'dni', header: 'DNI' },
      { field: 'username', header: 'Nombre' },
      { field: 'lastname', header: 'Apellido' },
      { field: 'mail', header: 'correo' }
  ];

  this.listUsers = [
    {
      dni: '1721117917',
      username: 'Stalin',
      lastname: 'Ladino',
      mail: 'eladino@gmail.com'
    }
  ];

  this.getUsers();
}

  // tslint:disable-next-line:typedef
  showDialogToAdd() {
    this.newUser = true;
    this.user = {};
    this.displayDialog = true;
  }

  // tslint:disable-next-line:typedef
  save() {
   const listUsers = [...this.listUsers];

   if (this.newUser) {
    listUsers.push(this.user);
    this.configService.saveUser(this.user).subscribe(response => {
      this.getUsers();
      //this.listUsers = response;
      this.user = null;
      this.displayDialog = false;
     });
   }
    else {
      listUsers[this.listUsers.indexOf(this.selectedCar)] = this.user;
      this.configService.updateUser(this.user).subscribe(response => {
        this.getUsers();
        //this.listUsers = response;
        this.user = null;
        this.displayDialog = false;
       });
    }
  }

  // tslint:disable-next-line:typedef
  delete() {
  this.configService.deleteUser(this.user).subscribe(response => {
     this.getUsers();
     this.user = null;
     this.displayDialog = false;
   });
    /* const index = this.listUsers.indexOf(this.selectedCar);
    this.listUsers = this.listUsers.filter((val, i) => i !== index);
    this.user = null;
    this.displayDialog = false; */
  }

  // tslint:disable-next-line:typedef
  onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneCar(event.data);
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
  getUsers() {
    this.configService.getUser().subscribe(response => {
        this.listUsers = response;
      });
  }

  // tslint:disable-next-line:typedef
  getCatalogoIndustria() {
   /*  this.industria = [
      {label: 'Seleccione', value: null}
    ];
    let data: Catalogo[] = [];
    this.configService.getCatalogoIndustria().subscribe(response => {
        data = response.data;
        data.forEach(element => {
          this.industria.push({label: element.text, value: element});
        });
    }); */
  }
}


