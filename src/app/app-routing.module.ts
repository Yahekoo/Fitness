import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { WelcomeComponent } from "./welcome/welcome.component";


const routes :Routes = [
    {path: '',component: WelcomeComponent},
    {path: 'signup',component: SignupComponent},
    {path: 'login',component: LoginComponent},
    {path: 'login',component: LoginComponent},
    {path: 'login',component: LoginComponent},
    
];
@NgModule({
    
})
export class AppRoutingModule{

}