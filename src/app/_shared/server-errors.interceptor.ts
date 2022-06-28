import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {TOKEN_NAME} from './constantes';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {

  constructor(
    private route: Router,
    private toastService: ToastrService,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem(TOKEN_NAME);
    const helper = new JwtHelperService();
    if (token !== undefined && token !== null) {
      if (helper.isTokenExpired(token)) {
        this.toastService.warning('Sesión finalizada, ingresar nuevamente');
        this.route.navigate(['']);
        return;
      }
    }

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          //no hacemos nada porque todo está ok
          // console.log('cargando');

        }
      }, err => {

        console.log(err);
      })
    );
  }
}
