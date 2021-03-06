import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Videocontainer } from '../models/videocontainer.model';
import { Videocard } from '../models/videocard.model';

@Component({
  selector: 'app-videocontainer',
  templateUrl: './videocontainer.component.html',
  styleUrls: ['./videocontainer.component.scss']
})
export class VideocontainerComponent implements OnInit, OnChanges {

 /* header > app > videocontainer */
  @Input()
  searchedValue: string = "";

  videosList: Videocard[] = [
    new Videocard("Ces mots condescendants", "assets/pictures/thumbnails/humour2.png", "Humour", "France Inter", "assets/pictures/thumbnails/franceinter.png", 950, false),
    new Videocard("L'art de la conversation", "assets/pictures/thumbnails/humour4.png", "Humour", "France Inter", "assets/pictures/thumbnails/franceinter.png", 690, false),
    new Videocard("J'ai 25 ans", "assets/pictures/thumbnails/humour.png", "Humour", "France Inter", "assets/pictures/thumbnails/franceinter.png", 700, false),
    new Videocard("Le marathon de Paris", "assets/pictures/thumbnails/humour3.png", "Humour", "France Inter", "assets/pictures/thumbnails/franceinter.png", 215, false),
    new Videocard("beats to study to", "assets/pictures/thumbnails/lofi.png", "Relax", "Lofi Station", "assets/pictures/thumbnails/lofilogo.jpeg", 37, false),
    new Videocard("beats to sleep to", "assets/pictures/thumbnails/lofi2.png", "Relax", "Lofi Station", "assets/pictures/thumbnails/lofilogo.jpeg", 6, true),
    new Videocard("beats to relax to", "assets/pictures/thumbnails/lofi3.png", "Relax", "Lofi Station", "assets/pictures/thumbnails/lofilogo.jpeg", 25, true),
    new Videocard("beats to chill to", "assets/pictures/thumbnails/lofi4.png", "Relax", "Lofi Station", "assets/pictures/thumbnails/lofilogo.jpeg", 10, true),
    new Videocard("Le pouvoir des introvertis", "assets/pictures/thumbnails/education.png", "Education", "Ted Talks", "assets/pictures/thumbnails/tedlogo.png", 125, false),
    new Videocard("Penser avec son ventre", "assets/pictures/thumbnails/education2.png", "Education", "Ted Talks", "assets/pictures/thumbnails/tedlogo.png", 240, false),
    new Videocard("Devenir adulte : pourquoi ?", "assets/pictures/thumbnails/education3.png", "Education", "Ted Talks", "assets/pictures/thumbnails/tedlogo.png", 400, false),
    new Videocard("Rien ne nous arrive par hasard", "assets/pictures/thumbnails/education4.png", "Education", "Ted Talks", "assets/pictures/thumbnails/tedlogo.png", 150, false),
    new Videocard("The Mozart Collection", "assets/pictures/thumbnails/music.png", "Musique", "Music Station", "assets/pictures/thumbnails/musiclogo.png", 400, true),
    new Videocard("Viva la Vida | Coldplay", "assets/pictures/thumbnails/music2.png", "Musique", "Music Station", "assets/pictures/thumbnails/musiclogo.png", 900, false),
    new Videocard("Ignorance | Paramore", "assets/pictures/thumbnails/music3.png", "Musique", "Music Station", "assets/pictures/thumbnails/musiclogo.png", 260, false),
    new Videocard("I'm with you | Avril Lavigne", "assets/pictures/thumbnails/music4.png", "Musique", "Music Station", "assets/pictures/thumbnails/musiclogo.png", 587,false)
  ]

  videosListFiltered: Videocard[] = this.videosList

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchBar(this.searchedValue)

  }

  searchBar(value: string) {
    /* dans le tableau videosList, j'applique la m??thode filter qui regarde si pour chaue vid??o,
    le titre de la vid??o inclut la valeur recherch??e. La m??thode filter renvoie un nouveau tableau, ?? stocker dans une variable */
    console.log(this.videosList.filter(video => video.title.includes(this.searchedValue)));
    this.videosListFiltered = this.videosList.filter(video => video.title.toLocaleLowerCase().includes(this.searchedValue.toLocaleLowerCase()));
  }

  ngOnInit(): void {}

}

export const videosCategoryList: string[] = [];
