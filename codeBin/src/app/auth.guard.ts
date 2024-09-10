import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = () => {
  // Injecting Service
  // (as it a function so we cannot create  constructor)
  const authService=inject(AuthService);
  const router=inject(Router);
  
  //If user is logged in ->then we return true
  if(authService.isAuthenticated()){
    return true;
  }
  //Else we return false
  else {
    router.navigate(['/']);
    return false;
  }
};

//The place where we use this authGuard will be funtional if this function(guard) returns true