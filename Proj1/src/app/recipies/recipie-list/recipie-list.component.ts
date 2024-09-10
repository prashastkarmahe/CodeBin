import { Component, OnInit} from '@angular/core';
import { recipie } from '../recipie.model';
import { ActivatedRoute, OutletContext, Router } from '@angular/router';
import { recipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrl: './recipie-list.component.css'
})
export class RecipieListComponent implements OnInit{
  recipies:recipie[];

  constructor(
    private reci_P_Service:recipieService,
    private router:Router,
    private route:ActivatedRoute
  ){}
  
  ngOnInit(){
      this.recipies=this.reci_P_Service.getRecipie();
  }
  // onRecipieSelected(recip:recipie){
  //   this.recipieWasSelected.emit(recip);
  // }

  onNewRecipie(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

}
