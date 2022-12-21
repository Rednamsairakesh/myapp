import { Component } from '@angular/core';
import { FormGroup,FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  public employeeForm: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      mobile: new FormControl(),
      email: new FormControl(),
      dob: new FormControl(),
      address: new FormGroup(
        {
        lane: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
        location: new FormGroup(
          {
            nearby: new FormControl(),
            landmark: new FormControl(),
          }
        )
        }
      ),
      education: new FormArray([]),
      feild: new FormControl(),
      HTML: new FormControl(),
      CSS: new FormControl(),
      Javascript: new FormControl(),
      Angular: new FormControl(),
      NodeJS: new FormControl(),
      ExpressJS: new FormControl(),
      MongoDB: new FormControl(),

    }
  )
  get employeeeducation(){
    return this.employeeForm.get('education') as FormArray;
  }
  add(){
    this.employeeeducation.push(
      new FormGroup({
        qualification: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl(),
      })
    )
  }
  constructor(){}
    submit(){
      console.log(this.employeeForm);
    }
}
