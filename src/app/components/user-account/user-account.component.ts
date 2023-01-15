import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
})
export class UserAccountComponent implements OnInit {
  firstname = '';
  name = '';
  email = '';

  constructor(public tokenService: TokenService) {}

  /**
   * Lorsque l'on clique sur l'icône du panier, on ajoute la classe "active" à l'élément panier,
   * et lorsque que l'on clique sur l'icône de fermeture du panier, on supprime la classe "active" de l'élément panier.
   */
  openCart() {
    const cartIcon = document.querySelector('.cart-icon');
    const cart = document.querySelector('.cart');
    const closeCart = document.querySelector('.close-cart');

    cartIcon!.addEventListener('click', () => {
      cart!.classList.add('active');
    });

    closeCart!.addEventListener('click', () => {
      cart!.classList.remove('active');
    });
  }

  ngOnInit(): void {
    // Prénom
    this.firstname = this.tokenService.getUserInfo().firstname;
    // Nom
    this.name = this.tokenService.getUserInfo().name;
    // Adresse Email
    this.email = this.tokenService.getUserInfo().email;
  }
}
