import { Ingredient } from "../Shared/ingredient.model";
import { Subject } from "rxjs";
export class shoppingListService{
    
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditing=new Subject<number>();
    
    private  ingredients:Ingredient[]=[
        new Ingredient("Apple",5),
        new Ingredient("Banana",6),
        new Ingredient("WaterMellon",7)
      ]; 

    getingredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingr:Ingredient){
        this.ingredients.push(ingr);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        // for(let ing of ingredients){
        //     this.addIngredient(ing);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index:number,newIngredient:Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}