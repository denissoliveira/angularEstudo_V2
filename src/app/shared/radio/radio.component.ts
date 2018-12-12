import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];

  value: any;

  onChange: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  /**
     * chamadas pelas diretivas quando elas querem passar uma valor, obj é o passado pelo parametro
     */
    writeValue(obj: any): void {
      this.value = obj;
    }
    /**
     * função sempre chamada quando o valor interno mudar
     */
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
    /**
     * registra que o usuário entrou no elemento
     */
    registerOnTouched(fn: any): void {

    }
    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @ param isDisabled
     */
    setDisabledState?(isDisabled: boolean): void {

    } //

}
