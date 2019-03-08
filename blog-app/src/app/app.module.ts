import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GlobalFeedComponent } from './home/global-feed/global-feed.component';
import { YourFeedComponent } from './home/your-feed/your-feed.component';
import { TagComponent } from './home/tag/tag.component';
import { SettingsComponent } from './settings/settings.component';
import { TokenInterceptorService } from './TokenInterceptorService';
import { NewArticleComponent } from './article/new-article/new-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { ProfileComponent } from './profile/profile.component';
import { MyArticleComponent } from './profile/my-article/my-article.component';
import { FavouriteComponent } from './profile/favourite/favourite.component';
import { ArticleComponent } from './article/article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DebounceClickDirective } from './debounce-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GlobalFeedComponent,
    YourFeedComponent,
    TagComponent,
    SettingsComponent,
    NewArticleComponent,
    EditArticleComponent,
    ProfileComponent,
    MyArticleComponent,
    FavouriteComponent,
    ArticleComponent,
    NotfoundComponent,
    DebounceClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
