import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[appLetras]'
})
export class LetrasDirective {

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;
  valueTmp: any;

  constructor(private ngControl: NgControl) {
  }

  ngOnInit() {
    const initialOnChange = (this.ngControl.valueAccessor as any).onChange;

    (this.ngControl.valueAccessor as any).onChange = value =>
      initialOnChange(this.processInput(value));
  }

  processInput(value: any) {
    return value;
  }

  @HostListener('ngModelChange', ['$event']) onInput(e) {
    this.valueTmp = '' + this.value;
    this.value = e;
    if (this.value === undefined || this.value === null) {
      this.value = '';
    }
    let clean = this.value.replace(/[^@áéíóúÁÉÍÓÚa-zA-ZñÑ(/)0-9._ \-\s]+/g, '');
    // clean = clean.trim();
    clean = clean.replace('  ', ' ');
    if (clean === ' ') {
      clean = '';
    }
    this.ngControl.valueAccessor.writeValue(clean);
  }

  @HostListener('keyup', ['$event']) onInputChange($event) {
    this.value = $event.target.value;
    this.ngModelChange.emit(this.value);
  }

}
