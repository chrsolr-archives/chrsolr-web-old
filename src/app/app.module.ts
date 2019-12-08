import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CollapseModule } from 'ngx-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavbarComponent } from './shared/components/navbar/navbar.component'
import { HomeComponent } from './home/home.component';
import { SocialIconsComponent } from './shared/components/social-icons/social-icons.component';
import { BlogComponent } from './blog/blog.component';
import { BlogItemComponent } from './blog/blog-item/blog-item.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, SocialIconsComponent, BlogComponent, BlogItemComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CollapseModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
