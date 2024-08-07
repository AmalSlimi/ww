import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeFrontComponent } from './frontOffice/home-front/home-front.component';
import { ContactsComponent } from './frontOffice/contacts/contacts.component';
import { HomeBackComponent } from './backOffice/home-back/home-back.component';
import { HeaderBackComponent } from './backOffice/header-back/header-back.component';
import { NavbarComponent } from './backOffice/navbar/navbar.component';
import { AllbackComponent } from './backOffice/allback/allback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeFrontComponent,
    ContactsComponent,
    HomeBackComponent,
    HeaderBackComponent,
    NavbarComponent,
    AllbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
