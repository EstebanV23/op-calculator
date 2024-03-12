export default function stringToArr(str: string, split?: string): string[] {
  return str.split(split ?? ',');
}
