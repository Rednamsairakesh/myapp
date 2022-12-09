import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
public names:string[]= ['srk','rakesh','guna']
public states:string[]= ['AN','AP','AR','AS','BR','CG'
,'CH','DD','DL','GA','GJ','HP','JH','JK','KA','KL']
public users:any =[
  {name:'Anil1',age:18,package:10},
  {name:'Anil2',age:20,package:9},
  {name:'Anil3',age:22,package:8},
  {name:'Anil4',age:31,package:12},
  {name:'Anil5',age:23,package:11}
]
public time:number=22

public today:any = new Date();
}
