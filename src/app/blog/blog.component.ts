import { Component, OnInit } from '@angular/core'
import { BlogService } from './blog.service'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

interface Blog {
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
  blog: Observable<any[]>
  blogs

  constructor(private blogService: BlogService, private db: AngularFirestore) {
    // this.blogs = this.db.collection('blogs').valueChanges()
  }

  ngOnInit() {

    // console.log(this.blogs())
    // this.blog = this.blogService.getBlog()

    this.db.collection('blog').valueChanges().subscribe(v => console.log(v))
  }
}
