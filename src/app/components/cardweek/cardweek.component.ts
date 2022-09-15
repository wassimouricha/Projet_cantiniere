import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';


@Component({
  selector: 'app-cardweek',
  templateUrl: './cardweek.component.html',
  styleUrls: ['./cardweek.component.css']
})
export class CardweekComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
