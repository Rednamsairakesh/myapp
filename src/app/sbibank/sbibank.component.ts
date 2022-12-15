import { Component } from '@angular/core';
import { SbibankService } from '../sbibank.service';

@Component({
  selector: 'app-sbibank',
  templateUrl: './sbibank.component.html',
  styleUrls: ['./sbibank.component.css']
})
export class SbibankComponent {

  public sbibank:any = [];
  constructor(private _sbibankService: SbibankService ){
    _sbibankService.getsbibank().subscribe(
      (data:any)=>{
        this.sbibank = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
}
