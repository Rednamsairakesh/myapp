import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicles:any = [];
  
  constructor(private _vehicleService: VehicleService){
    this._vehicleService.getvehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  public term:string ="";
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  public column:string="";
  public order:string="";
  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  page(page:number){
    this._vehicleService.getPagedvehicles(page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  delete(id:string){
    this._vehicleService.getDeletedvehicles(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  } 
}
