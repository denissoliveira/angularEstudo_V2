import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { Injector, Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    // vai fazer a injeção no momento que for escolhido
    constructor (private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService);
        if (loginService.isLoggedIn()) {
            const authRequest = request.clone(
                {setHeaders: {'Authorization': `Bearer ${loginService.user.accessToken}`}});
        } else {
            return next.handle(request);
        }
    }

}
