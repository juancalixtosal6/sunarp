import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front';
  loadginDialog: any;

  constructor(
    private dialogo: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }

  isLoading() {
    if (sessionStorage.getItem('loading') === 'true') {
      return true;
    } else {
      return false;
    }
  }

}
