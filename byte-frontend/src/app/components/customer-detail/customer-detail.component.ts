import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomerService, private router: Router, private activated: ActivatedRoute) {
    this.customer = new Customer();
  }


  ngOnInit(): void {
    console.log(this.customerService.getCustomerById("19"));
    this.loadCustomer();
  }

  loadCustomer(): void{
    this.activated.params.subscribe(params =>{
      let id = params['customerId']
      if(id){
        this.customerService.getCustomerById(id).subscribe((customer) =>this.customer = customer)
      }
    })
  }

  getAllCustomers(){
    this.customerService.getAllCustomer().subscribe(
      data => this.customer = data,
      err => console.error(err),
    );
  }

  onSubmit() {
    if (!this.customer.customerId) {
      console.log(this.customer);
      this.customerService.createCustomer(this.customer).subscribe(
        () => this.getAllCustomers(),
        (err) => console.error(err)
      );
    } else {
      this.customerService.updateCustomer(this.customer).subscribe(
        () => this.getAllCustomers(),
        (err) => console.error(err)
      );
    }
    this.customer = new Customer();
    
    Swal.fire(
      'Edición exitosa',
    `El cliente ${this.customer.contactName} ha sido actualizado`,
      'success'
    )
    this.router.navigate(['/listaClientes']);
  
  }

  goBack(){
    this.router.navigate(['/listaClientes']);
  }

}
