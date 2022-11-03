import { Component } from '@angular/core';
import { AppelService } from './appel.service';
import { Menu } from './menu';

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
      title: "titre",
      content: "contenu"
    }
  ];

  constructor(private  menuService: AppelService){}

  ngOnInit() : void {
    console.log("app chargé");
    console.log(this.menu);

    
    
    // this.tasks = this.taskService.getTask();
    this.menuService.getTask()
    .subscribe((todos: any[]) => {
      this.menu = todos.map<Menu>((todo: any) => {
        return {
          title: todo.title,
          done: todo.done,
        }
      })
    })
    
  }
}
