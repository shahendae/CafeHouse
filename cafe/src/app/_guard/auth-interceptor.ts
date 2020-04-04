import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from '../_service/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private userService: UserService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());

        const userToken = this.userService.CurrentUserToken();
        if (userToken != null) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + userToken
                }
            });
            console.log('req ', req);

            return next.handle(req);
        }

        else {
            this.router.navigateByUrl('/login');
        }
    }
}