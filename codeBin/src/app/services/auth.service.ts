import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?:string;

  constructor(private router:Router){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid=user.uid;
        console.log("User loged in as :",user.email);
      } else {
        // User is signed out
        this.uid=undefined;
        console.log("User signed out");
      }
    });
  }

  //User Sing-Up
  registerUser(email:string,password:string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(error.message);
        alert("Signup Failed please try again");
      });

  }
  
  //User Log-In
  loginUser(email:string,password:string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logging in 
        const user = userCredential.user;
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        alert("Wrong ID or Password ,try again");
      });
  }

  //User Log-Out
  logOut(){
    const auth = getAuth();
    signOut(auth).catch((error) => {
      // An error happened.
      alert("Something Went wrong while logging out");
    });

  }


  //Check if user is logged in
  isAuthenticated(){
    return this.uid?true:false;
  }
  getUID(){
    return this.uid;
  }
}
