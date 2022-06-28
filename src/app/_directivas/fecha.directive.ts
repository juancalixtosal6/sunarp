import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appFecha]'
})
export class FechaDirective {
  constructor() {
  }

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;
  valueTmp: any;

  @HostListener('input', ['$event']) onInputChange($event) {
    this.valueTmp = '' + this.value;
    this.value = $event.target.value.toUpperCase();
    if ($event.inputType === 'deleteContentBackward') {
      if (this.valueTmp.length === 3) {
        this.value = this.valueTmp.substr(0, 1);
      }
      if (this.valueTmp.length === 6) {
        this.value = this.valueTmp.substr(0, 4);
      }
    }
    if (this.value.length === 1 && Number(this.value.substr(0, 1)) > 3) {
      this.value = '0' + this.value;
    }
    if (this.value.length === 2) {
      this.value = this.value + '/';
    } else if (this.value.length === 5) {
      this.value = this.value + '/';
    }
    this.ngModelChange.emit(this.value);
  }

}
