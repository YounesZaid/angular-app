import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { IEmploye, IOrder } from "../shared/interfaces";

@Injectable()
export class DataService {
  baseUrl: string = "assets/";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmploye[]> {
    return this.http
      .get<IEmploye[]>(this.baseUrl + "employees.json")
      .pipe(catchError(this.handleError));
  }

  getEmployee(id: number): Observable<IEmploye> {
    return this.http.get<IEmploye[]>(this.baseUrl + "employees.json").pipe(
      map(employees => {
        let employee = employees.filter((emp: IEmploye) => emp.id === id);
        return employee && employee.length ? employee[0] : null;
      }),
      catchError(this.handleError)
    );
  }

  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + "orders.json").pipe(
      map(orders => {
        let empOrders = orders.filter(
          (order: IOrder) => order.employeeId === id
        );
        return empOrders;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.log("server error : ", error);
    if (error.error instanceof Error) {
      const errorMessage = error.error.message;
      return Observable.throw(errorMessage);
    }
    return Observable.throw(error || "Node.js server error");
  }
}
