import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() articles: Article;
  constructor(private articleService: ArticleService) { }
   
  ngOnInit() {
    let article = this.articleService.getArticle().subscribe(
      (()=>{
        console.table(article);
      })
    )
  }
}
