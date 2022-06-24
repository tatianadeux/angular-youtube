import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /* header > app > videocontainer */
  @Output()
  sendDataToParent: EventEmitter<string> = new EventEmitter();

  searchedValue: string = "";

  sendValue(searchedValue: string){
    this.sendDataToParent.emit(this.searchedValue);
  }

  alert(): void{
    alert('Micro non détecté')
  }



  constructor() { }

  ngOnInit(): void {
  }

}
