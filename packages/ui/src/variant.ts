export enum Variant {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

export function getVariantStyles(variant: Variant) {
  switch (variant) {
    case Variant.PRIMARY:
      return 'bg-rose-400'
    case Variant.SECONDARY:
      return 'bg-violet-400'
    case Variant.TERTIARY:
      return 'bg-cyan-400'
  }
}
