import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, OnDestroy, AfterViewChecked{

  constructor(){
    console.log('consctuctor called')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes called');
  }
  ngOnInit(): void {
    console.log('On init called');
  }
  ngDoCheck(): void {
    console.log('ng do check called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  submit(){
    console.log("submit called");
  }

}
