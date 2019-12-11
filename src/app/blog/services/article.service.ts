import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Article } from '../models/article.model'

@Injectable()
export class ArticleService {
  private articles$: Observable<Article[]>

  constructor(private db: AngularFirestore) {
    const collection = db.collection<Article>('blog', ref => ref.where('isActive', '==', true))
    this.articles$ = collection.valueChanges()
  }

  getArticles(): Observable<Article[]> {
    return this.articles$
  }
}
