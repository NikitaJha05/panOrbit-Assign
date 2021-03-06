import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import{DetailsComponent} from './details/details.component';
const routes: Routes = [

{path:'',redirectTo:'/profile',pathMatch:'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'details', component: DetailsComponent}
  
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
