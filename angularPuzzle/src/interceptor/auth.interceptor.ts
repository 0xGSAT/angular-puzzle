import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = localStorage.getItem('authToken');
    if (token) {
      request = request.clone({
        setHeaders:{
            'Authorization': `${token}`,
        }
      });
    }

    return next.handle(request).pipe(
      tap (event => {
        if (event instanceof HttpResponse) {
          // Grab the token from the response if needed
          const responseToken = event.body['authToken'];
          if (responseToken) {
            localStorage.setItem('authToken', responseToken);
          }
        }
      })
    );
  }
}
