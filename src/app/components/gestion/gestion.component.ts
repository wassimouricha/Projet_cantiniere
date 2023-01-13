import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateMenuService } from 'src/app/services/update-menu.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  name: string;
  price: number;

  constructor(private menuService: UpdateMenuService) { }

  ngOnInit(): void {
  }

  updateMenu(id: string) {
    this.menuService.updateMenuName(id, this.name).subscribe();
    this.menuService.updateMenuPrice(id, this.price).subscribe();
  }
}
