import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { NewArticleComponent } from './article/new-article/new-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'new-article', component: NewArticleComponent },
  { path: 'editor/:slug', component: EditArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
