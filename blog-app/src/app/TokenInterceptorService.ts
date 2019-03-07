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
export const API_TOKEN = `BQC8bQz9x5jsxfXhst4gy_9nNO1IQrm7KfDO9CTdPg9bfCqudcvyW_ddn2woWA37nFDVELaD987Yk9xzF6-IJNvNf6dx1YSnkq6Lz9NKp9x1_ds-9NJ50B9Gu_6T4RJyNvp4eH-V_R8uQILJhhBLJelivVR1d1rTGQ`;

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