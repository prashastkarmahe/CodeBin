import { Component, Input } from '@angular/core';
import { recipie } from '../../recipie.model';
import { recipieService } from '../../recipie.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrl: './recipie-item.component.css'
})
export class RecipieItemComponent {
  @Input() reciP:recipie;
  @Input() index:number;
}
