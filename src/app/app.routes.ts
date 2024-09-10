import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { viewChild } from '@angular/core';
import { ViewSnippetsComponent } from './components/view-snippets/view-snippets.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignUpComponent},
    {path:"about",component:AboutComponent},
    {path:"create",component:CreateBinComponent,canActivate:[authGuard]},
    // {path:'',redirectTo:'/login',pathMatch:"full"},
    {path:'',component:HomeComponent},
    {path:'snippet/:id',component:ViewSnippetsComponent},
    {path:'**',component:NotFoundComponent}
];
