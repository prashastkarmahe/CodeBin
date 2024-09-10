import { EventEmitter, Inject, Injectable } from "@angular/core";
import { recipie } from "./recipie.model";
import { Ingredient } from "../Shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()

export class recipieService{
    private recipies:recipie[] = [
        new recipie('A test recipie1','This is decription of the recipie',"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",[new Ingredient('Meat',1),new Ingredient('French Fries',20)]),
        new recipie('A test recipie2','This is decription of the recipie',"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",[new Ingredient('Bread',2),new Ingredient('Butter',1),new Ingredient('Tikki',1)]),
        new recipie('A test recipie3','This is decription of the recipie',"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",[new Ingredient('Sugar',100),new Ingredient('Water',1),new Ingredient('Pulp',3)])
    ];

    constructor(private slService:shoppingListService){}

    getRecipie(){
        return this.recipies.slice();
    }
    getReciP(index:number){
        return this.recipies[index];
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients); 
    }
}