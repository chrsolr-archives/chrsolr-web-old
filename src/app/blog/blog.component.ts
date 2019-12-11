import { Component, OnInit } from '@angular/core'
import { ArticleService, Article } from './services/article.service'

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
