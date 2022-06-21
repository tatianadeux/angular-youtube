import { Component, OnInit, Input } from '@angular/core';
import { Videocard } from "../models/videocard.model";

@Component({
  selector: 'app-videocard',
  templateUrl: './videocard.component.html',
  styleUrls: ['./videocard.component.scss']
})
export class VideocardComponent implements OnInit {

  @Input()
  videocard: Videocard = new Videocard("", "", "", "", "", 0, false)

  constructor() { }

  ngOnInit(): void {
  }

}
