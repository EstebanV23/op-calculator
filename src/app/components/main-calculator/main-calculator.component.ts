import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-calculator',
  standalone: true,
  imports: [ButtonComponent, RouterOutlet],
  templateUrl: './main-calculator.component.html',
  styleUrl: './main-calculator.component.css'
})
export class MainCalculatorComponent {

}
