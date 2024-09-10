import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit,OnDestroy{
  
  ingredients:Ingredient[];
  private igChanged:Subscription;

  constructor(private slService:shoppingListService){}
  
  ngOnInit() {
    this.ingredients=this.slService.getingredients();
    this.igChanged=this.slService.ingredientsChanged.subscribe(
      (ingrds:Ingredient[])=>{
        this.ingredients=ingrds;
      }
    );
    }
  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy():void{
     this.igChanged.unsubscribe(); 
  }

}
