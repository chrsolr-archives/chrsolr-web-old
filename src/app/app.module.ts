import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CollapseModule } from 'ngx-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavbarComponent } from './shared/components/navbar/navbar.component'
import { HomeComponent } from './home/home.component';
import { SocialIconsComponent } from './shared/components/social-icons/social-icons.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, SocialIconsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CollapseModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
