import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input()
  ddl: any;

  @Output()
  selectedChoice:EventEmitter<any>;

  constructor() {
    this.ddl = {
      label: "label",
      selectedValue: "",
      inputList: []
    };
    this.selectedChoice= new EventEmitter<any>();

  }

  handleDropdownChange(){
    this.selectedChoice.emit(this.ddl.selectedValue);
  }



}
