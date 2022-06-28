import {Directive, HostListener, Input} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: '[appBasico]'
})
export class BasicoDirective {
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

  @Input('appBasico') inputType: string;

  showMsg = false;
  pattern: RegExp;
  value: any;
  valueTmp: any;
  private regexMap = {
    integer: /^[0-9]*$/g,
    float: /^[+-]?([0-9]*[.])?[0-9]+$/g,
    words: /([A-z]\\s)*/g,
    point25: /^\-?[0-9]*(?:\\.25|\\.50|\\.75|)$/g,
    badBoys: /^[^{}*+£$%\\^-_]+$/g,
    fecha: /^[0-9/]*$/g,
    letras: /^[A-z ]*$/g,
    letras2: /^[A-zñÑ@._0-9]*$/g,
    ce: /^[A-z 0-9]*$/g,
  };

  @HostListener('ngModelChange', ['$event']) onInput(e) {
    this.pattern = this.regexMap[this.inputType];
    this.valueTmp = '' + this.value;
    this.value = e;
    this.pattern.lastIndex = 0;

    if (this.pattern.test(this.value)) {
    } else {
      this.ngControl.valueAccessor.writeValue('');
    }
  }
}
