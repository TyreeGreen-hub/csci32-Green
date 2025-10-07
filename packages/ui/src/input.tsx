import { Size } from './size'
import { Variant } from './variant'
import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  variant?: Variant
  size?: Size
  placeholder?: string
  type?: HTMLInputTypeAttribute
  value?: any
  setValue?: (newValue: any) => void
  defaultValue?: any
  name: string
  id: string
}
