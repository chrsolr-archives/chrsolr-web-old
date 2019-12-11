import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CollapseModule } from 'ngx-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { MarkdownModule, MarkedOptions } from 'ngx-markdown'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavbarComponent } from './shared/components/navbar/navbar.component'
import { HomeComponent } from './home/home.component'
import { SocialIconsComponent } from './shared/components/social-icons/social-icons.component'
import { BlogComponent } from './blog/blog.component'
import { ArticleItemComponent } from './blog/article-item/article-item.component'
import { ArticleListComponent } from './blog/article-list/article-list.component'
import { ArticleDetailsComponent } from './blog/article-details/article-details.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SocialIconsComponent,
    BlogComponent,
    ArticleItemComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          sanitize: false,
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
