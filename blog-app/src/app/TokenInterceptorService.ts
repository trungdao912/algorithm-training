import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line:max-line-length

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let user = this.auth.checkUser();
    if (user && user.user.token) {
      req = req.clone({
        setHeaders: {
          // tslint:disable-next-line:max-line-length
          Authorization: `Token ${this.auth.getToken()}`
        }
      });
    }
    return next.handle(req);
  }
}