import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Login } from 'src/app/model/auth';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-dialog-connexion',
  templateUrl: './dialog-connexion.component.html',
  styleUrls: ['./dialog-connexion.component.css']
})
export class DialogConnexionComponent implements OnInit {
  // any car pas de type
  form: Login = {
    email: '',
    password: ''
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , 
  private http: HttpClient, 
  private authService : AuthService , 
  private matDialog : MatDialog , 
  private tokenService : TokenService) { 


  }



  ngOnInit(): void {
  }

// fonction pour se connecter a l'api
  onSubmit(): void {
      this.authService.login(this.form).subscribe(
        data => {
          console.log(data.headers.get('Authorization'));
          //@ts-ignore
        this.tokenService.saveToken(data.headers.get('Authorization'))
        }
      )
        // fermer la boite de dialog
         this.matDialog.closeAll();
  }

  

}
