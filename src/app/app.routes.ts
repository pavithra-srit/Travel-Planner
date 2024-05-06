import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { PlanComponent } from './plan/plan.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    // {path:'',redirectTo:'./login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    { path:'home', component: HomeComponent},
    { path:'about', component:AboutComponent},
    { path:'explore', component:ExploreComponent},
    { path:'plan', component:PlanComponent }
];
