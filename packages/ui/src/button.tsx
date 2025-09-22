'use client'

import { ReactNode } from 'react'
import { Size } from './size'
import { Variant } from './variant'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  size?: Size
  variant?: Variant
}

export const Button = ({
  children,
  className,
  href,
  onClick,
  size = Size.MEDIUM,
  variant = Variant.PRIMARY,
}: ButtonProps) => {
  let sizeCssClasses = ''
  switch (size) {
    case Size.SMALL:
      sizeCssClasses = 'px-4 py-2'
      break
    case Size.MEDIUM:
      sizeCssClasses = 'px-8 py-4'
      break
    case Size.LARGE:
      sizeCssClasses = 'px-12 py-6'
      break
  }
  let variantCssClasses = ''
  switch (variant) {
    case Variant.PRIMARY:
      variantCssClasses = 'bg-rose-400'
      break
    case Variant.SECONDARY:
      variantCssClasses = 'bg-violet-400'
      break
    case Variant.TERTIARY:
      variantCssClasses = 'bg-cyan-400'
      break
  }
  const commonCssClasses = 'text-white'

  const completedCssClasses = `${sizeCssClasses} ${variantCssClasses} ${commonCssClasses} ${className}`
  return href ? (
    <a href={href} className={completedCssClasses}>
      {children}
    </a>
  ) : (
    <button className={completedCssClasses} onClick={onClick}>
      {children}
    </button>
  )
}
