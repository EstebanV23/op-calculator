export class CadenasFunctions {
  public static LONGITUD(inputA: string, inputB: string): string {
    return `|${inputA}| = ${inputA.length}`
  }

  public static CONCATENACION(inputA: string, inputB: string): string {
    return inputA.concat(inputB)
  }

  public static POTENCIA(inputA: string, inputB: string): string {
    try {
      const powerNumber = parseInt(inputB) < 0 ? 0 : parseInt(inputB)
      return inputA.repeat(powerNumber)
    } catch (error) {
      console.log('Error en el método POTENCIA', error)
      return 'No se puede realizar la operación'
    }
  }

  public static INVERSA(inputA: string, inputB: string): string {
    return inputA.split('').reverse().join('')
  }


}
