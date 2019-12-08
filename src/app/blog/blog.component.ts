import { Component, OnInit } from '@angular/core'
import { BlogService } from './blog.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogService],
})
export class BlogComponent implements OnInit {
  blog

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blog = this.blogService.getBlog()
  }
}
