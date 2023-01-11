import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class cartService {

  constructor() { 

  }

  addArticleToCart(menu: any){
    //@ts-ignore
    const panier : any =  JSON.parse(localStorage.getItem("cart_items")) || [];
    panier.push(menu);
    localStorage.setItem("cart_items",JSON.stringify(panier));
  }
  removeArticleFromCart(menu: any){

  }

  getPanierLocalStorage(){
      //@ts-ignore
    const panier : any =  JSON.parse(localStorage.getItem("cart_items")) || [];
    return panier
  }
}
