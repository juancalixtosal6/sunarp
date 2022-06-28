import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

   consultaIn = new Subject<boolean>();

  constructor() {
    this.consultaIn.next(false);
  }

  setConsultaIn(userLoggedIn: boolean) {
    this.consultaIn.next(userLoggedIn);
  }

  getConsultaIn(): Observable<boolean> {
    return this.consultaIn.asObservable();
  }
}
