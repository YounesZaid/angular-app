import { Component, OnInit } from "@angular/core";

import { IEmploye } from "src/app/shared/interfaces";

@Component({
  selector: "app-employes-list",
  templateUrl: "./employes-list.component.html"
})
export class EmployesListComponent implements OnInit {
  filteredCustomers: IEmploye[] = [];
  customersOrderTotal: number;
  currencyCode: string = "USD";

  constructor() {}

  ngOnInit() {}

  calculateOrders = () => {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: IEmploye) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  };

  sort = (prop: string) => {
    // implementation of sorting
    // A sorter service will handle the sorting
  };
}
