import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class cartService {
  constructor() {}

  /**
   * Cette fonction prend un objet menu, récupère les éléments du panier dans le stockage local,
   * ajoute l'objet menu aux éléments du panier, puis sauvegarde les éléments du panier dans le stockage local.
   * @param {any} menu - any
   */
  addArticleToCart(menu: any) {
    //@ts-ignore
    // la méthode JSON.parse converti un string JSON en objet javascript   
    const panier: any = JSON.parse(localStorage.getItem('cart_items')) || [];
    panier.push(menu);
    // la méthode JSON.stringify converti un objet javascript en string JSON
    localStorage.setItem('cart_items', JSON.stringify(panier));
  }

  /**
   * Il récupère les éléments du panier depuis le stockage local et les renvoie sous forme de tableau.
   * @returns Un tableau d'objets.
   */
  getPanierLocalStorage() {
    //@ts-ignore
    const panier: any = JSON.parse(localStorage.getItem('cart_items')) || [];
    return panier;
  }

  /**
   * Cette fonction permet de retirer un article du panier.
   * @param {any} menu - any
   */
  removeArticleFromCart(menu: any) {
    //@ts-ignore
    const panier: any = JSON.parse(localStorage.getItem('cart_items')) || [];
    for (let i = 0; i <= panier.length; i++) {
      if (panier[i].id === menu.id) {
        panier.splice(i, 1);

        break;
      }
    }
    localStorage.setItem('cart_items', JSON.stringify(panier));
  }

  /**
   * Cette fonction prend le prix de chaque article du panier et les additionne pour obtenir le prix total du panier.
   * @returns Le prix total des articles dans le panier.
   */
  getTotalPrice() {
    //@ts-ignore
    const panier: any = JSON.parse(localStorage.getItem('cart_items')) || [];
    let total = 0;
    for (let totalPanier of panier) {
      total += totalPanier.priceDF;
    }
    return total;
  }
}
