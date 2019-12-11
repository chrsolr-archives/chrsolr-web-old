import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ArticleService } from '../services/article.service'
import { Article } from '../models/article.model'
import { MarkdownService } from 'ngx-markdown'

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  providers: [ArticleService],
})
export class ArticleDetailsComponent implements OnInit {
  article: Article
  content: string

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private markdownService: MarkdownService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.getArticlesByPermalink(params.permalink).subscribe(articles => {
        const [article] = articles
        this.article = article
        this.content = article.content.replace(/\\n/g, '\n')
      })
    })
  }
}
