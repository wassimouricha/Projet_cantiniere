import { Component } from '@angular/core';
import { AppelService } from './appel.service';

import { Menu } from './modal/menuweek/menu';
import { MenuService } from './modal/menuweek/menu.service';

// voici comment se compose un component

@Component({
  // son nom
  selector: 'app-root',
  // son fichier html
  templateUrl: './app.component.html',
  // son fichier css
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Projet Cantinière dev branch';



  menu: Menu[] = [];

  constructor( private menuService : MenuService, private  appelService: AppelService){}

  ngOnInit() : void {
  }
}
