export class AlfabetosFunctions {
  public static PERTENENCIA(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const arrInputB = inputB.split(',')
    const include = arrInputA.every(char => arrInputB.includes(char))

    return include ? 'A ∈ B' : 'A ∉ B'
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

  public static COMPLEMENTO(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const arrInputB = inputB.split(',')
    const complement = arrInputB.filter(char => !arrInputA.includes(char))

    return complement.join(',')
  }

  public static DIFFERENCIA_ABSOLUTA(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const arrInputB = inputB.split(',')
    const difference = arrInputA.filter(char => !arrInputB.includes(char))

    return difference.join(',')
  }

  public static DIFERENCIA_SIMETRICA(inputA: string, inputB: string): string {
    const arrInputA = inputA.split(',')
    const arrInputB = inputB.split(',')
    const difference = Array.from(new Set([...arrInputA, ...arrInputB]))

    return difference.join(',')
  }
}
