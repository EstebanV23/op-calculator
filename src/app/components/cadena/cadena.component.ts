import { Component } from '@angular/core';
import { CadenaOptions } from '../../models/cadenasOptions';
import { MainFormComponent } from '../main-form/main-form.component';

@Component({
  selector: 'app-cadena',
  standalone: true,
  imports: [MainFormComponent],
  templateUrl: './cadena.component.html',
  styleUrl: './cadena.component.css'
})
export class CadenaComponent {
  options = CadenaOptions
  text = 'Cadena'
}
