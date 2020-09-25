import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ProfileComponent} from'./profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { from } from 'rxjs';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DetailsComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule  ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
