'use client'

import { IModalProps } from "@/types/Modal"

export const Button: React.FC<IModalProps> = ( {onClickToggle, isOpen} ) => {
  return(
    <button onClick={onClickToggle}>
      {!isOpen ? 'Open Modal' : 'Close Modal'}
    </button>
  )
}