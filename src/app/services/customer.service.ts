import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CustomerModel } from './../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customersUrl =
    'https://my-json-server.typicode.com/Cedgo1997/json-api/customers';

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get(`${this.customersUrl}`);
  }

  getCustomerById(id: number) {
    return this.http.get(`${this.customersUrl}/${id}`);
  }

  createCustomer(payload: CustomerModel) {
    return this.http.post(this.customersUrl, payload);
  }

  updateCustomer(customer: CustomerModel) {
    return this.http.patch(`${this.customersUrl}/${customer.id}`, customer);
  }

  deleteCustomer(payload: number) {
    return this.http.delete(`${this.customersUrl}/${payload}`);
  }
}
