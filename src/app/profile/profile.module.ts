import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';
@NgModule({
 
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClient,
    Router
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
