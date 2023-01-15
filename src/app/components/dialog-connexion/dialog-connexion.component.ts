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
  /* Icon font awesome */
  close = faClose;
  /* Un objet de formulaire qui est utilisé pour stocker l'email et le mot de passe de l'utilisateur. */
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

  /**
   * La fonction est appelée lorsque l'utilisateur clique sur le bouton d'envoi du formulaire de connexion.
   * La fonction appelle alors la fonction de connexion dans le authService, qui renvoie un observable.
   * La fonction s'abonne ensuite à l'observable et enregistre le jeton renvoyé par le serveur dans le stockage local.
   */
  onSubmit(): void {
    this.authService.login(this.form).subscribe((data) => {
      //@ts-ignore
      this.tokenService.saveToken(data.headers.get('Authorization'));
    });
    this.matDialog.closeAll();
  }
}
