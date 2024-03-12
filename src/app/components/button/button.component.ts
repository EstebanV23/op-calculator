import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() rute!: string;
  @Input() click: Function = () => {};
  @Input() icon!: string;
  @Input() blue!: boolean;
}
