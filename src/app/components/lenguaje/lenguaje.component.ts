import { Component } from '@angular/core';
import { LenguajesOptions } from '../../models/LenguajesOptions';
import { MainFormComponent } from '../main-form/main-form.component';

@Component({
  selector: 'app-lenguaje',
  standalone: true,
  imports: [MainFormComponent],
  templateUrl: './lenguaje.component.html',
  styleUrl: './lenguaje.component.css'
})
export class LenguajeComponent {
  options = LenguajesOptions;
  text = 'Lenguaje';
  optionsPlainText = JSON.stringify(this.options);
  constructor() {
    console.log({
      options: this.options,
      text: this.text
    })
  }
}
