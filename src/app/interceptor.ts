import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let email = localStorage.getItem('user_email')

        if (email) {
            request = request.clone({
                setHeaders: {
                    //  'Access-Control-Allow-Origin': 'http://localhost:4200/',
                    'Authorization': `${email}`
                }
            });
        }

        return next.handle(request);
    }
}
