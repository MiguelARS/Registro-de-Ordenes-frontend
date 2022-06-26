import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customer : Customer;
  customerList : Customer[];

  constructor(private customerService: CustomerService, private router: Router) {
    this.customer = new Customer();
    this.customerList = [];
   }

  ngOnInit(): void {
    this.loadData();
    console.log(this.customer)
  }

  loadData() {
    this.customerService.getAllCustomer().subscribe(
      (data) => { this.customerList = data },
      (err) => console.error(err)
    );
  }

  deleteData(id: number) {
    Swal.fire({
      title: '¿Estás seguro de eliminar a este cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.deleteCustomer(id).subscribe(() => this.loadData(),(err) => console.error(err))
        Swal.fire(
          'Cliente eliminado',
          `${this.customer.contactName} ha sido eliminado`,
          'success'
        )
      }
    })
  }

  create(){
    this.router.navigate(['/crearCliente']);
  }
}
