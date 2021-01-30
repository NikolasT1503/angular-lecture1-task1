import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {
  param1:number = 10;

  param2:boolean = false;

  param3:string = "Николай";

  param4:null = null;
  
  param5:undefined = undefined;

  @Input() 
  inputParam:string;

  @Output()
  userChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setValue(e : any): void {
    this.param3 = e.target?.value||e.value;
    this.userChange.emit(this.param3);
  } 

}
