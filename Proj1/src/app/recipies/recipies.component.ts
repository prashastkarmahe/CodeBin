import { Component, OnInit } from '@angular/core';
import { recipie } from './recipie.model';
import { recipieService } from './recipie.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrl: './recipies.component.css',
  providers:[recipieService]
})
export class RecipiesComponent implements OnInit{
  // selectedRecipie:recipie;
  constructor(/*private reciPService:recipieService*/) {
  }
  ngOnInit() {
      // this.reciPService.recipieSelected.subscribe((reciP:recipie)=>{this.selectedRecipie=reciP; });
  }
}
