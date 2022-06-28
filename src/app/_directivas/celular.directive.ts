import {Directive, HostListener} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[appCelular]'
})
export class CelularDirective {
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

  value: any;
  valueTmp: any;

  @HostListener('ngModelChange', ['$event']) onInput(e) {
    this.valueTmp = '' + this.value;
    this.value = e;
    if (this.value === undefined || this.value === null) {
      this.value = '';
    }
    let clean = this.value.replace(/[^0-9]+/g, '');
    if (clean.length === 1) {
      if (clean.substring(0, 1) !== '9') {
        clean = '';
      }
    }
    this.ngControl.valueAccessor.writeValue(clean);
  }

}
