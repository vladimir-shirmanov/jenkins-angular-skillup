import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from '@auth0/auth0-angular';
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGroupComponent } from './auth-group/auth-group.component'

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    AuthGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule.forRoot({
      domain: 'sambomix.eu.auth0.com',
      clientId: 'E3f8Xp0HUq6vcTc2wvgA55tf97zoatmQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
