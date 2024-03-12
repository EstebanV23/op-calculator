import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {
  @Input() text: string = '';
  @Input() rute!: string;
  @Input() click: Function = () => {};
  @Input() icon!: string;
  @Input() blue!: boolean;
  @Input() disabled!: boolean;
  @Input() type!: string;
}
