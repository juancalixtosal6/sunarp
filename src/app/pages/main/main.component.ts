import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Idle} from '@ng-idle/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(
    public dialog: MatDialog,
    public idle: Idle,

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
