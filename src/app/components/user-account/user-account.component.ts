import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
