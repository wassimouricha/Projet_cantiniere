import { faClose } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Login } from 'src/app/model/auth';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-dialog-connexion',
  templateUrl: './dialog-connexion.component.html',
  styleUrls: ['./dialog-connexion.component.css'],
})
export class DialogConnexionComponent implements OnInit {
  close = faClose;
  form: Login = {
    email: '',
    password: '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private http: HttpClient,
    private authService: AuthService,
    private matDialog: MatDialog,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {}

  // Fonction permettant de se connecter à l'API
  onSubmit(): void {
    this.authService.login(this.form).subscribe((data) => {
      console.log(data.headers.get('Authorization'));
      //@ts-ignore
      this.tokenService.saveToken(data.headers.get('Authorization'));
    });
    // Fermer la boite de dialog
    this.matDialog.closeAll();
  }
}
