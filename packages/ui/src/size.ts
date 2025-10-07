export enum Size {
  SMALL,
  MEDIUM,
  LARGE,
}

export function getSizeStyles(size: Size) {
  switch (size) {
    case Size.SMALL:
      return 'px-4 py-2 rounded shadow'
    case Size.MEDIUM:
      return 'px-8 py-4 rounded-md shadow-md'
    case Size.LARGE:
      return 'px-12 py-6 rounded-lg shadow-lg'
  }
}
