import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: Menu[] = [
    {    title: "titre",
    day: "Lundi",
      plat1: "repas 1",
      plat2: "repas 2",
       },
    {    title: "titre",
    day: "Mardi",
      plat1: "repas 1",
      plat2: "repas 2",
       },
    {    title: "titre",
    day: "Mercredi",
      plat1: "repas 1",
      plat2: "repas 2",
       },
    {    title: "titre",
    day: "Jeudi",
      plat1: "repas 1",
      plat2: "repas 2",
       },
    {    title: "titre",
    day: "Vendredi",
      plat1: "repas 1",
      plat2: "repas 2",
       },

      ];
    

  constructor() { }

  getMenu(): Menu[]{
    return this.menus
  }

  addTask(menu: Menu): void{
    this.menus.push(menu);
  }

  deleteTask(menu:Menu) :void {
    this.menus =  this.menus.filter(
     (mnu:Menu) => {
       return  JSON.stringify(menu) !== JSON.stringify(mnu);
     })
   }
 
}
