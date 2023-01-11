import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faBars, faCartShopping, faClose, faTrash} from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/services/token.service';
import { DialogConnexionComponent } from '../dialog-connexion/dialog-connexion.component';
import { cartService } from 'src/app/services/cart.service';



declare function togglebutton():any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // je crée une variable pour l'icone fabars pouvant etre appelé dans le html 
  bars = faBars;
  cart = faCartShopping;
  trash = faTrash;
  close = faClose;

  constructor(public dialog: MatDialog , public tokenService : TokenService , protected cartService: cartService ) { 
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogConnexionComponent, {
      data: { title: 'Connexion'}
    });

    dialogRef.afterClosed().subscribe(
      result => console.log('dialog result', result)
    );
  }

  openCart(){
    const cartIcon = document.querySelector(".cart-icon");
    const cart = document.querySelector(".cart");
    const closeCart = document.querySelector(".close-cart");

    cartIcon!.addEventListener('click' , () => {
        cart!.classList.add('active');
    })

    closeCart!.addEventListener('click' , () => {
        cart!.classList.remove('active');
    })
}
  


  firstname = ""
  panier = [];
  ngOnInit(): void {
    togglebutton();
    this.firstname = this.tokenService.getUserInfo().firstname,
    this.panier = this.cartService.getPanierLocalStorage()
  }



}
