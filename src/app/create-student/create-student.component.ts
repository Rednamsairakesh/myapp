import { Component } from '@angular/core';
import { FormGroup,FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      phone: new FormControl(null,[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormGroup(
       {
        city: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        state: new FormControl(),
        pin: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
       }
      ),
      cards: new FormArray([]),
      type: new FormControl(),
      busFee: new FormControl(),
      hostelFee: new FormControl(),

    }
  );
    get cardsFormArray(){
      return this.studentForm.get('cards') as FormArray;
    }
    add(){
      this.cardsFormArray.push(
        new FormGroup(
          {
            number: new FormControl(null, [Validators.required, Validators.min(1000000000000000), Validators.max(9999999999999999)]),
            expiry: new FormControl(),
            cvv: new FormControl(null, [Validators.required, Validators.min(100), Validators.max(999)]),
          }
        )
      )
    }
    delete(i:number){
      alert("Deleted")
      this.cardsFormArray.removeAt(i);
    }
    constructor(){}
    submit(){
      console.log(this.studentForm);
    }

}
