import { ArticleComponent } from './article/article/article.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { NewArticleComponent } from './article/new-article/new-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'new-article', component: NewArticleComponent },
  { path: 'editor/:slug', component: EditArticleComponent },
  { path: 'article/:slug', component: ArticleComponent },
  { path: ':username', component: ProfileComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
