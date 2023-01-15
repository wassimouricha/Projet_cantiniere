
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  firstname = "";
  name = "";
  email = "";
  
    constructor( public tokenService : TokenService ) { }
  
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
      // Prénom
      this.firstname = this.tokenService.getUserInfo().firstname
      // Nom
      this.name = this.tokenService.getUserInfo().name
      // Adresse Email
      this.email = this.tokenService.getUserInfo().email


    //   findall(){
    //     this.authService.findall(this.inscription).subscribe(
    //       data => {
    //         console.log(data);
    //         this.router.navigate(['Home'])
    //       }
    //     )
    // }
  
  }
}