export class Menu  {
    id: number;
    label: string;
    category: number;
    image: string;
    day:string;

        constructor(
            id : number = 0, 
            label: string = "",
            category: number = 0,
            image: string = "",
            day : string = "",
            ){
                    this.id = id,
                    this.label = label,
                    this.category = category,
                    this.day = day,
                    this.image = image
        }

}

export class AllMealsForTheWeek {
    id: number;
    name: string;
    meals: Menu[];
   

    constructor(
        id: number = 0,
        name : string = "",
        meals : Menu[] = [],
   
        ){
            this.id = id,
            this.name = name,
            this.meals = meals
         
    }
}

export class ImageMeal {
    imagePath: string
    constructor (
      imagePath: string = "img/default.png"
    ) {
      this.imagePath = imagePath;
    }
  }

  