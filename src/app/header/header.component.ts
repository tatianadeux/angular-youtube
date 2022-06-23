import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  sendDataToParent: EventEmitter<string> = new EventEmitter();

  searchedValue: string = "";

  sendValue(searchedValue: string){
    this.sendDataToParent.emit(this.searchedValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
