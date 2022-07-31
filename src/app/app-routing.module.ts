import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { CurrentTrainingComponent } from "./training/current-training/current-training.component";
import { NewTrainingComponent } from "./training/new-training/new-training.component";
import { PastTrainingComponent } from "./training/past-training/past-training.component";
import { WelcomeComponent } from "./welcome/welcome.component";


const routes :Routes = [
    {path: '', component:SignupComponent },
    {path: 'signup',component: SignupComponent},
    {path: 'login',component: LoginComponent},
    {path: 'training/previous',component: PastTrainingComponent},
    {path: 'training/new',component: NewTrainingComponent},
    {path: 'training/current',component: CurrentTrainingComponent},
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})
export class AppRoutingModule{

}