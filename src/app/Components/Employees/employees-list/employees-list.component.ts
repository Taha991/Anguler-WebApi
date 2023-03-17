import { Component , OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{

  employees: Employee[] = [
    {
      id: '5b5',
      name: 'Taha',
      email: 'tahamohamedman@gmail.com' ,
      phone: 1128186800,
      Salary: 900000,
      department: 'ASP Developer'
    },
    {
      id: '6q6',
      name: 'Youssif',
      email: 'youssifxx@gmail.com' ,
      phone: 998511,
      Salary: 10000,
      department: 'Hr'
    },
    {
      id: '7f6',
      name: 'Mark',
      email: 'Mark@gmail.com' ,
      phone: 8880,
      Salary: 6000,
      department: 'Information Technology'
    },
  ];

  constructor() {

  }
  ngOnInit(): void {

     
  }

}
