import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllMealsForTheWeek, Menu } from 'src/app/modal/menuweek/menu';
import { MenuService } from 'src/app/modal/menuweek/menu.service';

import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { Observable } from 'rxjs/internal/Observable';
import { cartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cardweek',
  templateUrl: './cardweek.component.html',
  styleUrls: ['./cardweek.component.css'],
})

/**
 * Cette classe possède une fonction qui ouvre une boîte de dialogue de dialogue,
 * une fonction qui ajoute un menu au panier,
 * une fonction qui récupère tous les menus de la semaine,
 * une fonction qui regroupe les repas par jour et une fonction qui trouve le jour de la semaine pour un jour donné.
 */
export class CardweekComponent implements OnInit {
  mealsPerDay: AllMealsForTheWeek[];

  constructor(
    private menuService: MenuService,
    private cartService: cartService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllMenus();
  }

  /**
   * Elle prend un objet menu et le transmet à la fonction addArticleToCart du service de panier.
   * @param {any} menu - any
   */
  addMenuToCart(menu: any) {
    this.cartService.addArticleToCart(menu);
  }

  /**
   * La fonction openDialog() ouvre une boîte de dialogue avec le titre 'Jour de la semaine'
   * et renvoie le résultat de la boîte de dialogue.
   */
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { title: 'Jour de la semaine' },
    });

    dialogRef
      .afterClosed()
      .subscribe((result) => console.log('dialog result', result));
  }

  /**
   * Récupère le menu de la semaine, puis regroupe les repas par jour, et enfin attribut l'image à chaque repas.
   */
  getAllMenus() {
    this.menuService.getMenuOfTheWeek().subscribe((menuForAday) => {
      menuForAday.forEach((menu, index) => {
        menu.day = this.findTheDay(index);
        this.menuService
          .getImageForAMeal(menu.id)
          .subscribe((imageForAMeal) => {
            menu.image = `http://localhost:8080/stone.lunchtime/${imageForAMeal.imagePath}`;
          });
      });
      const mealsPerDay = this.groupByDay(menuForAday);
      this.mealsPerDay = [...mealsPerDay];
    });
  }

  /**
   * Cette fonction prend un tableau d'objets et renvoie un tableau d'objets.
   * @param {Menu[]} items - Menu[] est un tableau d'objets
   * @returns Un tableau d'objets.
   */
  groupByDay(items: Menu[]): AllMealsForTheWeek[] {

    const lundiMeal: Menu[] = items.filter(
      (item: Menu) => item.day === 'lundi'
    );
    const mardiMeal: Menu[] = items.filter(
      (item: Menu) => item.day === 'mardi'
    );
    const mercrediMeal: Menu[] = items.filter(
      (item: Menu) => item.day === 'mercredi'
    );
    const jeudiMeal: Menu[] = items.filter(
      (item: Menu) => item.day === 'jeudi'
    );
    const vendrediMeal: Menu[] = items.filter(
      (item: Menu) => item.day === 'vendredi'
    );

    const mealsPerDay: AllMealsForTheWeek[] = [
      {
        id: 1,
        name: 'lundi',
        meals: lundiMeal,
      },
      {
        id: 1,
        name: 'mardi',
        meals: mardiMeal,
      },
      {
        id: 1,
        name: 'mercredi',
        meals: mercrediMeal,
      },
      {
        id: 1,
        name: 'jeudi',
        meals: jeudiMeal,
      },
      {
        id: 1,
        name: 'vendredi',
        meals: vendrediMeal,
      },
    ];
    return mealsPerDay;
  }

  /**
   * Cette fonction renvoie le jour de la semaine pour un indice donné.
   * @param {number} index - nombre : l'index de l'élément courant dans le tableau.
   * @returns Le jour de la semaine.
   */
  findTheDay(index: number): string {
    return ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'][
      Math.floor(index / 2)
    ];
  }
}
