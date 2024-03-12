import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCalculatorComponent } from './components/main-calculator/main-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'op'
}
