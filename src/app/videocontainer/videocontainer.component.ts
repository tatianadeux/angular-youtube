import { Component, OnInit } from '@angular/core';
import { Videocontainer } from '../models/videocontainer.model';
import { Videocard } from '../models/videocard.model';

@Component({
  selector: 'app-videocontainer',
  templateUrl: './videocontainer.component.html',
  styleUrls: ['./videocontainer.component.scss']
})
export class VideocontainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videosList: Videocard[] = [
    new Videocard( "Funny cat", "https://pyxis.nymag.com/v1/imgs/431/405/f532d2de344840c6a151bc3a073a56af51-flowers.rsquare.w700.jpg", "Animals", "Animals Channel", "img/cat1.png",150, false),

  ]



}
