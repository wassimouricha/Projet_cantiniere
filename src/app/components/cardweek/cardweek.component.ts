import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Menu } from 'src/app/modal/menuweek/menu';
import { MenuService } from 'src/app/modal/menuweek/menu.service';

import { DialogContentComponent } from '../dialog-content/dialog-content.component';


@Component({
  selector: 'app-cardweek',
  templateUrl: './cardweek.component.html',
  styleUrls: ['./cardweek.component.css']
})
export class CardweekComponent implements OnInit {
  @Input() menu!: Menu;
  constructor(  private menuService : MenuService,public dialog: MatDialog, private client: HttpClient ) { 

    console.log("constructeur");

  }

  ngOnInit(): void {
  }

  
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { title: 'Jour de la semaine'}
    });

    dialogRef.afterClosed().subscribe(
      result => console.log('dialog result', result)
    );
  }


}
