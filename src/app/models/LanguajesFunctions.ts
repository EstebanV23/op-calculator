export class LanguajesFunctions {
  public static emptyChar: string = 'λ'
  public static maxClosure: number = 3

  public static CONCATENACION(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const arrInputB = inputB.split(',')
    const result: string[] = []

    return arrInputA.map(charA => arrInputB.map(charB => charA.concat(charB))).join(',')
  }

  public static POTENCIA(inputA: string, power: string): string {
    try {
      const arrInputA = inputA.split(',')
      const powerInt = parseInt(power) < 0 ? 0 : parseInt(power)

      let result: string[] = []

      for (let i = 0; i < powerInt; i++) {
        const temp = Array.from(arrInputA)
        result = LanguajesFunctions.CONCATENACION(result.join(','), temp.join(',')).split(',')
      }
      return result.join(',')
    } catch (error) {
      console.log('Error en el método POTENCIA', error)
      return 'No se puede realizar la operación'
    }

  }

  public static INVERSA(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const result: string[] = []
    for (const textA of arrInputA) {
      result.push(textA.split('').reverse().join(''))
    }

    return result.join(',')
  }

  public static UNION(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const arrInputB = inputB.split(',')
    const union = Array.from(new Set([...arrInputA, ...arrInputB]))

    return union.join(',')
  }

  public static INTERSECCION(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const arrInputB = inputB.split(',')
    const intersection = arrInputA.filter(char => arrInputB.includes(char))

    return intersection.join(',')
  }

  public static RESTA(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const arrInputB = inputB.split(',')
    const difference = arrInputA.filter(char => !arrInputB.includes(char))

    return difference.join(',')
  }

  public static CLAUSURA_KLEENE(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')

    let result: string[] = []
    for (let i = 0; i < LanguajesFunctions.maxClosure; i++) {
      result.push(LanguajesFunctions.POTENCIA(arrInputA.join(','), i.toString()))
    }
    return result.join(',')
  }

  public static CLAUSURA_POSITIVA(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const arrInputB = inputB.split(',')

    let result: string[] = []
    for (let i = 1; i < LanguajesFunctions.maxClosure; i++) {
      result.push(LanguajesFunctions.POTENCIA(arrInputA.join(','), i.toString()))
    }
    return result.join(',')
  }
}
