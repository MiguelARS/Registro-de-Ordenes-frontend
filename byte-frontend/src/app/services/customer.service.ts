import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

const API_BASE = "http://localhost:8085/api/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer;

  constructor(private http: HttpClient) { 
    this.customer = new Customer();
  }

  getAllCustomer(): Observable<any>{
    return this.http.get(API_BASE);
  }

  getCustomerById(id: string): Observable<any> {
    return this.http.get(`${API_BASE}/${id}`);
  }

  createCustomer(customer: Customer): Observable<any>{
    return this.http.post(API_BASE,customer);
  }

  updateCustomer(customer: Customer): Observable<any>{
    return this.http.post(API_BASE,customer);
  }

  deleteCustomer(id:number): Observable<any>{
    return this.http.delete(`${API_BASE}/${id}`);
  }


}
