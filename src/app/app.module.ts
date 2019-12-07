import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CollapseModule } from 'ngx-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavbarComponent } from './shared/navbar/navbar.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CollapseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
