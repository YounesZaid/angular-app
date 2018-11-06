import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

import { IEmploye } from "../shared/interfaces";
import { EmployesListComponent } from "./employes-list/employes-list.component";
import { DataService } from "../core/data.service";

@Component({
  selector: "app-employes",
  templateUrl: "./employes.component.html"
})
export class EmployesComponent implements OnInit, AfterViewInit {
  title: String;
  people: IEmploye[];
  message: string;

  @ViewChild(EmployesListComponent)
  msgParent;

  ngAfterViewInit(): void {
    this.message = this.msgParent.message;
  }
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.title = "Employes List";
    this.dataService
      .getEmployees()
      .subscribe((employees: IEmploye[]) => (this.people = employees));
    //   this.people = [
    //     {
    //       id: 1,
    //       name: "Bahhou Tontine",
    //       city: "Phoenix",
    //       orderTotal: 9.99,
    //       employeSince: new Date(2014, 7, 10)
    //     },
    //     {
    //       id: 2,
    //       name: "Jawadi Zouhair",
    //       city: "Chandler",
    //       orderTotal: 19.99,
    //       employeSince: new Date(2017, 2, 22)
    //     },
    //     {
    //       id: 3,
    //       name: "Chef Omar",
    //       city: "Seattle",
    //       orderTotal: 99.99,
    //       employeSince: new Date(2002, 10, 31)
    //     },
    //     {
    //       id: 4,
    //       name: "Younes Zaid",
    //       city: "New York",
    //       orderTotal: 599.99,
    //       employeSince: new Date(2002, 10, 31)
    //     }
    //   ];
  }
}
