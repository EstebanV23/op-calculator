import { Routes } from '@angular/router';
import { AlfabetoComponent } from './components/alfabeto/alfabeto.component';
import { CadenaComponent } from './components/cadena/cadena.component';
import { LenguajeComponent } from './components/lenguaje/lenguaje.component';

export const routes: Routes = [
  {
    path: 'alfabeto',
    component: AlfabetoComponent
  },
  {
    path: '',
    redirectTo: '/alfabeto',
    pathMatch: 'full'
  },
  {
    path: 'cadena',
    component: CadenaComponent
  },
  {
    path: 'lenguaje',
    component: LenguajeComponent
  }
];
