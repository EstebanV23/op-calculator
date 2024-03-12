import { Component } from '@angular/core';
import { MainFormComponent } from '../main-form/main-form.component';
import { AlfabetoOptions } from '../../models/alfabetoOptions';

@Component({
  selector: 'app-alfabeto',
  standalone: true,
  imports: [MainFormComponent],
  templateUrl: './alfabeto.component.html',
  styleUrl: './alfabeto.component.css'
})
export class AlfabetoComponent {
  options = AlfabetoOptions;
  text = 'Alfabeto';
  optionsPlainText = JSON.stringify(this.options);

  constructor() {
    console.log({
      options: this.options,
      text: this.text
    })
  }
}
