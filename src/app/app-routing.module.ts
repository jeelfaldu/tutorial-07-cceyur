import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import { ProjectComponent } from './project/project.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'home',component:ContentComponent,data:{animation:'home'}},
  {path:'project',component:ProjectComponent,data:{animation:'project'}},
  {path:'signup',component:SignupComponent,data:{animation:'signup'}},

  {path:'',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
