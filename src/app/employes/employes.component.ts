import { Component, OnInit } from "@angular/core";

import { IEmploye } from "../shared/interfaces";

@Component({
  selector: "app-employes",
  templateUrl: "./employes.component.html"
})
export class EmployesComponent implements OnInit {
  title: String;
  people: IEmploye[];

  constructor() {}

  ngOnInit() {
    this.title = "Employes List";
    this.people = [
      {
        id: 1,
        name: "john Doe",
        city: "Phoenix",
        orderTotal: 9.99,
        employeSince: new Date(2014, 7, 10)
      },
      {
        id: 2,
        name: "Jane Doe",
        city: "Chandler",
        orderTotal: 19.99,
        employeSince: new Date(2017, 2, 22)
      },
      {
        id: 3,
        name: "Michelle Thomas",
        city: "Seattle",
        orderTotal: 99.99,
        employeSince: new Date(2002, 10, 31)
      },
      {
        id: 4,
        name: "Jim Thomas",
        city: "New York",
        orderTotal: 599.99,
        employeSince: new Date(2002, 10, 31)
      }
    ];
  }
}
