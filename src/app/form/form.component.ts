import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() resultadoSuma = new EventEmitter<number>();

  operandoA: number = 0;
  operandoB: number = 0;

  sumar(): void {
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
}
