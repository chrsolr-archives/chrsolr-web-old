import { Component, OnInit } from '@angular/core'
import { BlogService } from './blog.service'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

interface Blog {
  imageUrl: string
  title: string
  preview: string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogService],
})
export class BlogComponent implements OnInit {
  blog: Observable<Blog[]>

  constructor(private db: AngularFirestore, private blogService: BlogService) {
    const collection = db.collection<Blog>('blog')
    this.blog = collection.valueChanges()
  }

  ngOnInit() {}
}
