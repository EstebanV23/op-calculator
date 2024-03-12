import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { LenguajesOption } from '../../models/LenguajesOptions';
import { CadenaOption } from '../../models/cadenasOptions';
import { AlfabetoOption, AlfabetoOptions } from '../../models/alfabetoOptions';
import { ObjectInterface } from '../../models/ObjectInterface';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { MainButtonComponent } from '../main-button/main-button.component';
import { LanguajesFunctions } from '../../models/LanguajesFunctions';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [NgIf, NgFor, ButtonComponent, ReactiveFormsModule, MainButtonComponent],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent {

  @Input() selectOptions!: LenguajesOption | CadenaOption | AlfabetoOption;
  options: ObjectInterface[] = [];
  @Input() selectedOption!: ObjectInterface;
  @Input() onlyInput!: boolean;
  @Input() defaultText: String = 'Alfabeto';
  brackets!: boolean;
  result!: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.options = Object.values(this.selectOptions || {});
    this.onlyInput = this.selectedOption?.onlyOneInput ?? false;
    this.brackets = this.selectedOption?.needBrackets ?? false;
    this.selectedOption = this.options[0];
    this.onlyInput = this.selectedOption?.onlyOneInput ?? false;
    console.log('options', this.selectOptions)
  }

  get inputA() {
    return this.myForm.get('inputA') as FormControl;
  }

  get inputB() {
    return this.myForm.get('inputB') as FormControl;
  }

  myForm = this.formBuilder.group({
    inputA: ['', Validators.required],
    inputB: [''],
  })

  selectOption = (optionComponent: any) => {
    const optionSelected = optionComponent.target.value as string;
    this.selectedOption = this.options.find(option => option.description === optionSelected) ?? this.options[0];
    this.onlyInput = this.selectedOption?.onlyOneInput ?? false;
  }

  swapInputs = () => {
    const inputA = this.inputA.value;
    const inputB = this.inputB.value;
    this.myForm.patchValue({
      inputA: inputB,
      inputB: inputA
    })
  }

  getResult = () => {
    if (this.myForm.invalid) return;

    this.brackets = this.selectedOption.needBrackets ?? false;
    this.result = this.selectedOption.fnExecute(this.inputA.value, this.inputB.value).split(',').map(char => char.trim() === '' ? LanguajesFunctions.emptyChar : char.trim()).join(',');
  }
}
