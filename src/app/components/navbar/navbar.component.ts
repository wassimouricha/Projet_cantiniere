import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  faBars,
  faCartShopping,
  faClose,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';
import { DialogConnexionComponent } from '../dialog-connexion/dialog-connexion.component';
import { cartService } from 'src/app/services/cart.service';

declare function togglebutton(): any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  /* Importer des icônes depuis Font Awesome. */
  bars = faBars;
  cart = faCartShopping;
  trash = faTrash;
  close = faClose;

  /**
   * Déclarer les variables firstname et panier et les initialiser à des chaînes vides (firstname) et des tableaux vides (panier).
   */
  firstname = '';
  panier = [];

  constructor(
    public dialog: MatDialog,
    public tokenService: TokenService,
    protected cartService: cartService
  ) {}

  /**
   * La fonction openDialog() ouvre une boîte de dialogue avec le composant DialogConnexionComponent.
   */
  openDialog() {
    const dialogRef = this.dialog.open(DialogConnexionComponent, {
      data: { title: 'Connexion' },
    });

    dialogRef
      .afterClosed()
      .subscribe((result) => console.log('dialog result', result));
  }

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

  /**
   * Cette fonction prend un objet menu comme paramètre et appelle la fonction removeArticleFromCart du cartService.
   * @param {any} menu - any
   */
  deleteMenuFromCart(menu: any) {
    this.cartService.removeArticleFromCart(menu);
  }

  /**
   * Lorsque le composant est initialisé, la fonction togglebutton est appelée, et les variables firstname et panier sont affectées
   * aux valeurs firstname et panier provenant respectivement du tokenService et du cartService.
   */
  ngOnInit(): void {
    togglebutton();
    (this.firstname = this.tokenService.getUserInfo().firstname),
      (this.panier = this.cartService.getPanierLocalStorage());
  }
}
