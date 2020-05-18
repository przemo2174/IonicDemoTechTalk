import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Employee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: number;
}

@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  private url = "http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<{data: Employee[]}>(this.url).pipe(
      map(data => data.data)
    );
  }
}
