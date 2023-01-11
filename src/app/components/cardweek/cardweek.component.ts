
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
  styleUrls: ['./cardweek.component.css']
})
export class CardweekComponent implements OnInit {
 
  mealsPerDay : AllMealsForTheWeek[];

  constructor(  
    private menuService : MenuService,
    private cartService : cartService,
    public dialog: MatDialog, 
    ) {}

  ngOnInit(): void {
    this.getAllMenus();
  }

  addMenuToCart(menu: any){
      this.cartService.addArticleToCart(menu)
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { title: 'Jour de la semaine'}
    });

    dialogRef.afterClosed().subscribe(
      result => console.log('dialog result', result)
    );
  }

  
    
    getAllMenus(){
      this.menuService.getMenuOfTheWeek()
        .subscribe(menuForAday => {
          menuForAday.forEach((menu, index) => {
            menu.day = this.findTheDay(index);
            this.menuService.getImageForAMeal(menu.id)
            .subscribe(imageForAMeal => {
              menu.image = `http://localhost:8080/stone.lunchtime/${imageForAMeal.imagePath}`
            });
          });
          console.log(menuForAday);
          
          const mealsPerDay = this.groupByDay(menuForAday);
          this.mealsPerDay=[...mealsPerDay];
          
        });

    }

    /**
     * pour chaques repas de chaques jour  de la semaine on attribue un menu et un jour
     */
    groupByDay(items: Menu[]): AllMealsForTheWeek[] {
      console.log("items",items.filter((item: Menu) => item.day === 'lundi'));
      
      const lundiMeal: Menu[] = items.filter((item: Menu) => item.day === 'lundi')
      const mardiMeal: Menu[] = items.filter((item: Menu) => item.day === 'mardi')
      const mercrediMeal: Menu[] = items.filter((item: Menu) => item.day === 'mercredi')
      const jeudiMeal: Menu[] = items.filter((item: Menu) => item.day === 'jeudi')
      const vendrediMeal: Menu[] = items.filter((item: Menu) => item.day === 'vendredi')
      console.log("lundi",lundiMeal);
      
      const mealsPerDay: AllMealsForTheWeek[] = [
        {
          id: 1, 
          name: 'lundi',
          meals: lundiMeal
        },
        {
          id: 1, 
          name: 'mardi',
          meals: mardiMeal
        },
        {
          id: 1, 
          name: 'mercredi',
          meals: mercrediMeal
        },
        {
          id: 1, 
          name: 'jeudi',
          meals: jeudiMeal
        },
        {
          id: 1, 
          name: 'vendredi',
          meals: vendrediMeal
        }
      ]
      console.log(mealsPerDay);
      
      return mealsPerDay
    } 

    findTheDay(index : number ) : string{
      return ["lundi", "mardi", "mercredi" , "jeudi" , "vendredi"][Math.floor(index/2)]
    }



}
