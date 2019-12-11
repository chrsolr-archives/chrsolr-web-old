import { Component, OnInit } from '@angular/core'
import { ArticleService } from './services/article.service'
import { Article } from './models/article.model'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [ArticleService],
})
export class BlogComponent implements OnInit {
  articles: Article[]

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe(article => {
      this.articles = article
    })
  }
}
