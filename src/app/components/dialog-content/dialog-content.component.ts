import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css'],
})
export class DialogContentComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  /* Plat[] est un tableau d'objet */
  plat = [
    { id: '1', value: 'Plat 1' },
    { id: '2', value: 'Plat 2' },
  ];

  /* Type[] est un tableau d'objet */
  type = [
    { id: '3', value: 'Plat seul' },
    { id: '4', value: 'Formule' },
  ];

  ngOnInit(): void {}
}
