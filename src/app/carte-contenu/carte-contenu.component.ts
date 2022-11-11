import { Component, Input, OnInit } from '@angular/core';
import { Carte } from '../modal/carte/carte';
import { CarteService } from '../modal/carte/carte.service';

@Component({
  selector: 'app-carte-contenu',
  templateUrl: './carte-contenu.component.html',
  styleUrls: ['./carte-contenu.component.css']
})
export class CarteContenuComponent implements OnInit {

  @Input() carte!: Carte;

  constructor( private carteService : CarteService) {
    console.log("constructeur");
   }

  ngOnInit(): void {


  }
}
