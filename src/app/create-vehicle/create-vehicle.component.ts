import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public isEdit: Boolean=false;
  public id: string="any"

  public vehicleForm: FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new  FormControl(),
      model: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      color: new FormControl(),
      image: new FormControl(),
    }
  )

  constructor(private _vehicleService: VehicleService,
    private _activatedRoute: ActivatedRoute){
      this._activatedRoute.params.subscribe(
        (data:any)=>{
          if(data.id){
            this.isEdit = true;
            this.id = data.id;
          }
          this._vehicleService.getvehicle(data.id).subscribe(
            (data2:any)=>{
              this.vehicleForm.patchValue(data2);
            }
          )
        }
      )
    }

  submit(){
    console.log(this.vehicleForm);

    if(this.isEdit){
      this._vehicleService.updateVehicle(this.vehicleForm.value, this.id).subscribe(
        (data:any)=>{
          alert("Created Successfully");
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }
    else{

    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully");
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

}


}
