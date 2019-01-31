import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';


const articleRoutes: Routes = [
    { path: '', component: ArticleComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(articleRoutes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule {

}