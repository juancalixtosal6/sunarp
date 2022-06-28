import {Directive, HostListener} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[appNumero]'
})
export class NumeroDirective {

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
    let clean = this.value.replace(/[^0-9]+/g, '');

    this.ngControl.valueAccessor.writeValue(clean);
  }

}
