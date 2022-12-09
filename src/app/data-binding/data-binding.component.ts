import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age:number = 20;
  public name:string = 'Rednam Sai Rakesh';
  public india:boolean = true;

test(){
  alert("submited");
}
test2(){
  alert("double click");
}
test3(){
  alert("key pressed");
}
test4(){
  alert("you entered in danger zone");
}
test5(){
  alert("you left danger zone");
}

public phone:number=555515646;

}
