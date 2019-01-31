import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';

@Injectable()
export class ArticleService {
    
    private apiuri = 'http://localhost:8000/api/articles';

    constructor(private http: HttpClient) {}

    getArticle() {
        return this.http.get<Article[]>(this.apiuri);
    }

    getArticleId(id: number) {
        return this.http.get<Article[]>(this.apiuri + '/' + id);
    }

    createArticle(article: Article) {
        return this.http.post(this.apiuri, article);
    }

    updateArticle(article: Article) {
        return this.http.put(this.apiuri + '/' + article.id, article);
    }

    deleteArticle(id: number) {
        return this.http.delete(this.apiuri + '/' + id);
    }

    
}