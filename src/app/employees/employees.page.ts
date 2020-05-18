import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Employee, EmployeesService } from '../services/employees.service';
import { Observable, of, combineLatest, Subscription } from 'rxjs';
import { ToastService } from '../services/toast.service';
import { catchError, tap } from 'rxjs/operators';
import { IonSearchbar } from '@ionic/angular';
import { InputChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit, OnDestroy, AfterViewInit {

  public employees$: Observable<Employee[]>;

  public filteredEmployees: Employee[];

  private employees: Employee[];
  private subscriptions = new Subscription();

  @ViewChild(IonSearchbar, { static: false }) ionSearchBar: IonSearchbar;

  constructor(private employeesService: EmployeesService, private toastService: ToastService) { }

  ngOnInit() {

    this.subscriptions.add(this.employeesService.getEmployees().pipe(
      tap(employees => {
        this.employees = employees;
        this.filteredEmployees = employees;
      }),
      catchError((error) => {
        this.toastService.presentToast('Error has occured!');
        return of([]);
      })
    ).subscribe());

  }

  ngAfterViewInit() {
    this.subscriptions.add(this.ionSearchBar.ionInput.pipe(
      tap((event) => {
        const search = (event.target as HTMLInputElement).value;
        this.filteredEmployees = search ? this.employees.filter(x => x.employee_name.toLowerCase().includes(search.toLowerCase()) || 
        x.employee_salary.startsWith(search)) : this.employees;
      })
    ).subscribe());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
