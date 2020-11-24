import { Component } from '@angular/core';
import {Customer} from "./CustomerApp.CustomerModel"
@Component({
  templateUrl: './CustomerApp.CustomerAdd.html'
})
export class CustomerComponent {
  customerObj:Customer = new Customer();
  customerObjs:Array<Customer> = new Array<Customer>();
  Add(){
    this.customerObjs.push(this.customerObj);
    this.customerObj = new Customer();// cleared the object
  }
}
