import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ArticleRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
