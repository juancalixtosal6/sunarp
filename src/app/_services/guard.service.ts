import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {SecurityService} from './security.service';
import {TOKEN_NAME} from '../_shared/constantes';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const data = sessionStorage.getItem(TOKEN_NAME);
    const helper = new JwtHelperService();
    if (data !== undefined && data !== null) {
      if (!helper.isTokenExpired(data)) {
      }
    } else {
      if (state.url !== '/login' ) {
        this.router.navigate(['/']);
      } else {
        return true;
      }
    }
    return false;
  }


}
