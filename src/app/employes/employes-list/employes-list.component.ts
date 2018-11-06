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

  message = "Employés";

  // @Input()
  // employes;
  @Input()
  set employes(value: IEmploye[]) {
    if (value) {
      this.filteredEmployes = this._employes = value;
      this.calculateOrders();
    }
  }

  get employes(): IEmploye[] {
    return this._employes;
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

  filter(data: string) {
    if (data) {
      this.filteredEmployes = this.employes.filter((emp: IEmploye) => {
        return (
          emp.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          emp.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          emp.orderTotal.toString().indexOf(data) > -1
        );
      });
    } else {
      this.filteredEmployes = this.employes;
    }
    this.calculateOrders();
  }

  sort = (prop: string) => {
    // implementation of sorting
    // A sorter service will handle the sorting
  };
}
