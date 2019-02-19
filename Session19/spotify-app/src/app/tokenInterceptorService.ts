import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenizedReq = req.clone({
      setHeaders: {
        // tslint:disable-next-line:max-line-length
        Authorization: 'Authorization: Bearer BQBL7yjFxs0rFwuCuQqRyiWc23v3nB4-SAtaHm5fkRmaNLqoW_l4RhInyW10Buo-fQ-aAAr5qLNQDnxLLH_1MqICIS54Qckk6fWy1HuW8VqFNkm5BVJ9qY4WJJk_csCGpN2-_CQmP7QrS8hcQCgSNJUlsi9FTJs3'
      }
    });
    return next.handle(tokenizedReq);
  }
}
