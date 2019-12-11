import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Article } from '../models/article.model'
import { filter } from 'minimatch'

@Injectable()
export class ArticleService {
  constructor(private db: AngularFirestore) {}

  getArticles(): Observable<Article[]> {
    return this.db
      .collection<Article>('blog', ref => ref.where('isActive', '==', true))
      .valueChanges()
  }

  getArticlesByPermalink(permalink: string): Observable<Article[]> {
    return this.db
      .collection<Article>('blog', ref => ref.where('permalink', '==', permalink).limit(1))
      .valueChanges()
  }
}
