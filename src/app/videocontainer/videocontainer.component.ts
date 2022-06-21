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
    new Videocard("Ces petits mots condescendants", "assets/pictures/thumbnails/humour2.png", "Humour", "France Inter", "assets/pictures/thumbnails/franceinter.png", 950, false),
    new Videocard("L'art de la conversation", "assets/pictures/thumbnails/humour4.png", "Humour", "France Inter", "assets/pictures/thumbnails/franceinter.png", 690, true)

  ]



}
