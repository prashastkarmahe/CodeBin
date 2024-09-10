import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
  @ViewChild('f') slForm:NgForm;

  subscription:Subscription;
  editMode=false;
  editItemIndex:number;
  editedItem:Ingredient;

  constructor(private slService:shoppingListService){}
  ngOnInit(){
    this.subscription=this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editItemIndex=index;
        this.editMode=true;
        this.editedItem=this.slService.getIngredient(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          ammount:this.editedItem.ammount
        });
      }
    );
  }
  onAddItem(form:NgForm ){
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.ammount);
    if(this.editMode){
      this.slService.updateIngredient(this.editItemIndex,newIngredient);
    }else{
      this.slService.addIngredient(newIngredient); 
    }
    this.editMode=false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
}
