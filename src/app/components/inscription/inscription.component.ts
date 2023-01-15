import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/model/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

/* Il s'agit d'une variable qui est utilisée pour stocker les données que l'utilisateur saisit dans le formulaire. */
  inscription: Register = {
    name: '',
    firstname: '',
    email: '',
    password: '',
    sex: 0,
  };

/**
 * Lorsque l'utilisateur clique sur le bouton d'enregistrement, la fonction d'enregistrement est appelée, 
 * celle-ci appelle donc la fonction d'enregistrement dans le authService, qui ensuite envoie les données au backend. 
 * La backend renvoi une réponse, qui est ensuite utilisée pour naviguer vers la page d'accueil.
 */
  register() {
    this.authService.register(this.inscription).subscribe((data) => {
      this.router.navigate(['Home']);
    });
  }
}
