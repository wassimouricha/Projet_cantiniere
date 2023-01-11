import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class cartService {

  constructor() { 

  }
  // ajouter un article au panier
  addArticleToCart(menu: any){
    //@ts-ignore
    const panier : any =  JSON.parse(localStorage.getItem("cart_items")) || [];
    panier.push(menu);
    localStorage.setItem("cart_items",JSON.stringify(panier));
  }

  // pour recuperer le panier dans le local storage du navigateur
  getPanierLocalStorage(){
      //@ts-ignore
    const panier : any =  JSON.parse(localStorage.getItem("cart_items")) || [];
    return panier
  }

  // retirer un article au panier
  removeArticleFromCart(menu: any){
    //@ts-ignore
    const panier : any =  JSON.parse(localStorage.getItem("cart_items")) || [];
    console.log(panier.length);
   for(let i = 0; i <= panier.length ; i++){
    console.log("hehehe");
    if(panier[i].id === menu.id){
      console.log("hohohoh");
        panier.splice(i,1);
     
        
        break;
    } 
   }
   localStorage.setItem("cart_items",JSON.stringify(panier));
  }

  getTotalPrice(){
       //@ts-ignore
    const panier : any =  JSON.parse(localStorage.getItem("cart_items")) || [];
      let total = 0
      for(let totalPanier of panier){
        total += totalPanier.priceDF
        
      }
      console.log(total);
      console.log("test");
      
      return total
  }
}
