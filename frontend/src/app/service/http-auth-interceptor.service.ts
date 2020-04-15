import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtAuthenticationService} from "./jwt-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpAuthInterceptorService implements HttpInterceptor {

  constructor(private basicAuthService: JwtAuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authHeader = this.basicAuthService.getToken();

    if (authHeader) {
      req = req.clone({
        setHeaders: {
          Authorization: authHeader
        }
      });
    }

    return next.handle(req);
  }

}
