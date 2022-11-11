import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu: Menu[] = [
    {
      title: "string",
      day:"string",
      plat1: "string",
      plat2: "string",
    }
  ];

  constructor( private menuService : MenuService,) { }

  ngOnInit(): void {
        this.menu = this.menuService.getMenu();
  }

}
