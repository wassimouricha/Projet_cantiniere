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
  title = 'Projet Cantinière version wassim';


  menu: Menu[] = [
    {
      title: "string",
      day:"string",
      plat1: "string",
      plat2: "string",
    }
  ];

  constructor( private menuService : MenuService, private  appelService: AppelService){}

  ngOnInit() : void {
    console.log("app chargé");
    console.log(this.menu);

    
    
    // this.tasks = this.taskService.getTask();
    this.appelService.getTask()
    .subscribe((todos: any[]) => {
      this.menu = todos.map<Menu>((todo: any) => {
        return {
          title: todo.title,
          day: todo.day,
          plat1: todo.plat1,
          plat2: todo.plat2,
        }
      })
    })
    
  }
}
