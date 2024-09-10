import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private authService:AuthService){}

  register(regForm:NgForm){
    console.log(regForm.value)
    this.authService.registerUser(regForm.value.email,regForm.value.password);
  }
  reset(regForm:NgForm){
    regForm.reset()
  }
}
