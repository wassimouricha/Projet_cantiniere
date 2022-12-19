import { Injectable } from '@angular/core';
import { Carte } from './carte';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  cartes: Carte[] = [
    {    title: "miam",
      plat1: "repas 1",
      plat2: "repas 2",
      prix1: 1,
      prix2: 2,
       },
    {    title: "miamus",
      plat1: "repas 1",
      plat2: "repas 2",
      prix1: 1,
      prix2: 2,
       },
    {    title: "ùhhhhh",
      plat1: "repas 1",
      plat2: "repas 2",
      prix1: 1,
      prix2: 2,
       },
    {    title: "titre",
      plat1: "repas 1",
      plat2: "repas 2",
      prix1: 1,
      prix2: 2,
       },
    {    title: "titre",
      plat1: "repas 1",
      plat2: "repas 2",
      prix1: 1,
      prix2: 2,
       },

      ];
    

  constructor() { }

  
  getCarte(): Carte[]{
    return this.cartes
  }


 
}
