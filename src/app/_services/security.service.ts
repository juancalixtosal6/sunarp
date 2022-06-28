import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private session = new Subject<boolean>();

  constructor(private http: HttpClient,
              private router: Router) {

  }

  setSessionCambio(status: boolean) {
    this.session.next(status);
  }

  getSessionCambio() {
    return this.session.asObservable();
  }

  cerrarSesion() {
    this.setSessionCambio(false);
    sessionStorage.clear();
    console.log('Se borro tokens de storage');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 500);
  }


}
