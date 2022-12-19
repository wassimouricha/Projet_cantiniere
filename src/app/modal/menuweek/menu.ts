export class Menu  {
    id: number;
    label: string;
    description: string;
    priceDF: number;
    category: number;
    image: string;
    imageId: string;
    day:string;

        constructor(
            id : number = 0, 
            label: string = "",
            description: string = "",
            category: number = 0,
            image : string = "",
            day : string = "",
            priceDF: number

            ){
                    this.id = id,
                    this.label = label,
                    this.description = description,
                    this.category = category,
                    this.image = image,
                    this.day = day
                    this.priceDF = priceDF

        }

}

export class AllMealsForTheWeek {
    id: number;
    name: string;
    meals: Menu[];

    constructor(
        id: number = 0,
        name : string = "",
        meals : Menu[] = []
        ){
            this.id = id,
            this.name = name,
            this.meals = meals
    }
}