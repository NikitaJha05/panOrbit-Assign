import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsComponent} from './details.component'

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
    data: {
      title: 'Student',
      icon: 'ti-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
