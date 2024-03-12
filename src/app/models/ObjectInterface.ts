export type functionExecute = (textA: string, textB: string) => string;

export interface ObjectInterface {
  symbol: string;
  description: string;
  fnExecute: functionExecute;
  onlyOneInput?: boolean;
  needBrackets?: boolean;
  plainText?: boolean;
  inputNumberB?: boolean;
}

