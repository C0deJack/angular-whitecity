import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles/articles.service';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {

  constructor(private articlesService: ArticlesService) {
  }

  articles: Article[];

  ngOnInit() {
    this.articles = this.articlesService.getArticles();
  }

}
