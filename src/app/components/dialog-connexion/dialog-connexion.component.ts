import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-connexion',
  templateUrl: './dialog-connexion.component.html',
  styleUrls: ['./dialog-connexion.component.css']
})
export class DialogConnexionComponent implements OnInit {

  form = {
    login: null,
    password: null
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }



  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);
    
  }

}
