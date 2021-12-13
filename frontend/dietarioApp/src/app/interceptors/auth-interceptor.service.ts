import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    const token: string = this.cookieService.get("CookieSesion");

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request);
  }

  constructor(private cookieService: CookieService) { }
}
