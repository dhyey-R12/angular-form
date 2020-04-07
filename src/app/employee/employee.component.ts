import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  bioSection = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [''],
    stackDetails: this.fb.group({
      stack: [''],
      experience: ['']
    }),
    address: this.fb.group({
      country: [''],
      city: ['']
  })
});
constructor(private fb: FormBuilder) { }
ngOnInit() {
}
callingFunction() {
  console.log(this.bioSection.value);
 }
}