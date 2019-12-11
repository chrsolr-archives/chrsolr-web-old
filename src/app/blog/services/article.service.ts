import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

export interface Article {
  imageUrl: string
  title: string
  preview: string
  content: string
  isActive: boolean
  permalink: string
}

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
