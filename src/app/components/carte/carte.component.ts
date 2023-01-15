import { Component, Input, OnInit } from '@angular/core';
import { Carte } from 'src/app/modal/carte/carte';
import { CarteService } from 'src/app/modal/carte/carte.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  /* Carte[] est un tableau d'objets. */
  carte: Carte[] = [
    {
      title: "string",
      plat1: "string",
      plat2: "string",
      prix1 : 0,
      prix2: 0,
    }
  ];

  constructor( private carteService : CarteService) {
   }

  ngOnInit(): void {
    this.carte = this.carteService.getCarte();
  }

}
