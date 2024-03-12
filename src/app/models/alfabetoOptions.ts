import { AlfabetosFunctions } from "./AlfabetosFunctions";
import { ObjectInterface } from "./ObjectInterface"

export type AlfabetoOption = {
  PERTENENCIA: ObjectInterface;
  UNION: ObjectInterface;
  INTERSECCION: ObjectInterface;
  COMPLEMENTO: ObjectInterface;
  DIFFERENCIA_ABSOLUTA: ObjectInterface;
  DIFERENCIA_SIMETRICA: ObjectInterface;
}

export const AlfabetoOptions: AlfabetoOption = {
  PERTENENCIA: {
    symbol:'∈',
    description: 'Pertenencia',
    fnExecute: AlfabetosFunctions.PERTENENCIA
  },
  UNION: {
    symbol:'∪',
    description: 'Union',
    fnExecute: AlfabetosFunctions.UNION,
    needBrackets: true
  },
  INTERSECCION: {
    symbol:'∩',
    description: 'Intersección',
    fnExecute: AlfabetosFunctions.INTERSECCION,
    needBrackets: true
  },
  COMPLEMENTO: {
    symbol:'\'',
    description: 'Complemento',
    fnExecute: AlfabetosFunctions.COMPLEMENTO,
    needBrackets: true
  },
  DIFFERENCIA_ABSOLUTA: {
    symbol:'\\',
    description: 'Diferencia absoluta',
    fnExecute: AlfabetosFunctions.DIFFERENCIA_ABSOLUTA,
    needBrackets: true
  },
  DIFERENCIA_SIMETRICA: {
    symbol:'⊕',
    description: 'Diferencia simétrica',
    fnExecute: AlfabetosFunctions.DIFERENCIA_SIMETRICA,
    needBrackets: true
  },
}
