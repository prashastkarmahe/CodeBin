import { Component, OnInit} from '@angular/core';
import { recipie } from '../recipie.model';
import { recipieService } from '../recipie.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrl: './recipie-detail.component.css'
})
export class RecipieDetailComponent implements OnInit{
   recipi:recipie;
  constructor( 
    private reciPService:recipieService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  id:number;

  ngOnInit(){
      const id=this.route.params.subscribe(
        (params:Params)=>{
          this.id = +params['id'];
          this.recipi=this.reciPService.getReciP(this.id);
        }
      );
  }
  onAddToShopppingList(){
    this.reciPService.addIngredientsToShoppingList(this.recipi.ingredients);
  }

  onEditeRecipie(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
