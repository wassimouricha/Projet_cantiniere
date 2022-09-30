import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-connexion',
  templateUrl: './dialog-connexion.component.html',
  styleUrls: ['./dialog-connexion.component.css']
})
export class DialogConnexionComponent implements OnInit {
  // any car pas de type
  form: any = {
    login: null,
    password: null
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private http: HttpClient ) { 


  }



  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);
    this.http.post('http://localhost:8080/stone.lunchtime/user/findall', this.form).subscribe(
      data => console.log(data),
      err => console.log(err)
      
      
    )
  }

}
