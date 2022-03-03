import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//  import { AngularFireModule } from '@angular/fire/compat';
//  import { AngularFireAuthModule } from "@angular/fire/compat/auth";
//  import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//  import { environment } from '../environments/environment';
//  import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './error/error.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { HomeSection2Component } from './home-section2/home-section2.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { Homesection3Component } from './homesection3/homesection3.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomePageComponent,
    ErrorComponent,
    HomeSectionComponent,
    HomeSection2Component,
    SignupComponent,
    SigninComponent,
    Homesection3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  //  AngularFireModule.initializeApp(environment.firebase),
  //    AngularFireAuthModule,
  //    AngularFirestoreModule,
  //    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
