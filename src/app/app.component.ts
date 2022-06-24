import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  /* header > videocontainer */
  searchedValueReceived: string = "";

  onReceivedValue(searchedValue: string){
    this.searchedValueReceived = searchedValue;
  }

  /* category > videocontainer */

}
