'use client'

import { IModalProps } from '@/types/Modal'
import style from './modal.module.scss'

export const Modal: React.FC<IModalProps> = ({onClickToggle, isOpen, children}) => {
  if(!isOpen) return null
  return(
    <div className={style.modal}>
      {children}
      <button onClick={onClickToggle}>CLOSE MODAL</button>
    </div>
  )
}