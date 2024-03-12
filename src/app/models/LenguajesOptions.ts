import { LanguajesFunctions } from "./LanguajesFunctions";
import { ObjectInterface } from "./ObjectInterface";

export interface LenguajesOption {
  CONCATENACION: ObjectInterface;
  POTENCIA: ObjectInterface;
  INVERSA: ObjectInterface;
  UNION: ObjectInterface;
  INTERSECCION: ObjectInterface;
  RESTA: ObjectInterface;
  CLAUSURA_KLEENE: ObjectInterface;
  CLAUSURA_POSITIVA: ObjectInterface;
}

const MAX_POWER_CLAUSURA = 3

export const LenguajesOptions: LenguajesOption = {
  CONCATENACION: {
    symbol: '•',
    description: 'Concatenación',
    fnExecute: LanguajesFunctions.CONCATENACION,
    needBrackets: true
  },
  POTENCIA: {
    symbol: '^n',
    description: 'Potencia',
    fnExecute: LanguajesFunctions.POTENCIA,
    needBrackets: true,
    inputNumberB: true
  },
  INVERSA: {
    symbol: 'A^-1',
    description: 'Inversa',
    fnExecute: LanguajesFunctions.INVERSA,
    onlyOneInput: true,
    needBrackets: true
  },
  UNION: {
    symbol: '∪',
    description: 'Union',
    fnExecute: LanguajesFunctions.UNION,
    needBrackets: true
  },
  INTERSECCION: {
    symbol: '∩',
    description: 'Intersección',
    fnExecute: LanguajesFunctions.INTERSECCION,
    needBrackets: true
  },
  RESTA: {
    symbol: '-',
    description: 'Resta',
    fnExecute: LanguajesFunctions.RESTA
  },
  CLAUSURA_KLEENE: {
    symbol: '*',
    description: 'Clausura de Kleene',
    fnExecute: LanguajesFunctions.CLAUSURA_KLEENE,
    needBrackets: true,
    onlyOneInput: true
  },
  CLAUSURA_POSITIVA: {
    symbol: '+',
    description: 'Clausura positiva',
    fnExecute: LanguajesFunctions.CLAUSURA_POSITIVA,
    needBrackets: true,
    onlyOneInput: true
  }
}
