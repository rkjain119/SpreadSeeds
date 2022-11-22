export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined
export type ClassDictionary = Record<string, any>
export type ClassArray = ClassValue[]

export default function classNames(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
