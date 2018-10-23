import { Component, OnInit, Input } from "@angular/core";

import { IEmploye } from "src/app/shared/interfaces";

@Component({
  selector: "app-employes-list",
  templateUrl: "./employes-list.component.html"
})
export class EmployesListComponent implements OnInit {
  private _employes: IEmploye[] = [];
  filteredEmployes: IEmploye[] = [];
  employesOrderTotal: number;
  currencyCode: string = "USD";

  // @Input()
  // employes;
  @Input()
  get employes(): IEmploye[] {
    return this._employes;
  }

  set employes(value: IEmploye[]) {
    if (value) {
      this.filteredEmployes = this._employes = value;
      this.calculateOrders();
    }
  }

  constructor() {}

  ngOnInit() {
    //this._employes = this.employes;
  }

  calculateOrders = () => {
    this.employesOrderTotal = 0;
    this.filteredEmployes.forEach((cust: IEmploye) => {
      this.employesOrderTotal += cust.orderTotal;
    });
  };

  sort = (prop: string) => {
    // implementation of sorting
    // A sorter service will handle the sorting
  };
}
