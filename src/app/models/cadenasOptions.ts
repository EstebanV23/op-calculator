import { ObjectInterface } from "./ObjectInterface";
import { CadenasFunctions } from "./CadenasFunctions";

export type CadenaOption = {
  LONGITUD: ObjectInterface;
  CONCATENACION: ObjectInterface;
  POTENCIA: ObjectInterface;
  INVERSA: ObjectInterface;
}

export const CadenaOptions: CadenaOption = {
  LONGITUD: {
    symbol: '|n|',
    description: 'Longitud',
    fnExecute: CadenasFunctions.LONGITUD,
    onlyOneInput: true,
    plainText: true
  },
  CONCATENACION: {
    symbol: '•',
    description: 'Concatenación',
    fnExecute: (inputA: string, inputB: string) => {
      return inputA.concat(inputB)
    },
    plainText: true
  },
  POTENCIA: {
    symbol: '^n',
    description: 'Potencia',
    fnExecute: CadenasFunctions.POTENCIA,
    plainText: true,
    inputNumberB: true
  },
  INVERSA: {
    symbol: 'A^-1',
    description: 'Inversa',
    fnExecute: CadenasFunctions.INVERSA,
    onlyOneInput: true,
    plainText: true
  }
}
