import { Component } from '@angular/core';
import { BoredomService } from '../boredom.service';

@Component({
  selector: 'app-boredom',
  templateUrl: './boredom.component.html',
  styleUrls: ['./boredom.component.css']
})
export class BoredomComponent {

  public Boredom:any = [];
  constructor(private _boredomService:BoredomService){
    this._boredomService.getboredom().subscribe(
      (data:any)=>{
        this.Boredom = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  next(){
    this._boredomService.getboredom().subscribe(
      (data:any)=>{
        this.Boredom = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
