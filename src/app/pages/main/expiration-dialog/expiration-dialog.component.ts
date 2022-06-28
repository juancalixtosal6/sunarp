import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-expiration-dialog',
  templateUrl: './expiration-dialog.component.html',
  styleUrls: ['./expiration-dialog.component.scss']
})
export class ExpirationDialogComponent implements OnInit {
  timer: number;

  interval;

  constructor(
    public dialogRef: MatDialogRef<ExpirationDialogComponent>,
  ) {
    this.timer = 20;
  }

  ngOnInit(): void {
    this.startTimer()
  }

  onNoClick(): void {
    this.pauseTimer();
    this.dialogRef.close();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        this.pauseTimer();
        this.onNoClick();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
